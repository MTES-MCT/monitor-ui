"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromRsuiteValue = fromRsuiteValue;
exports.deepCloneExtensible = deepCloneExtensible;
exports.getTreeOptionsBySelectedValues = getTreeOptionsBySelectedValues;
exports.getParentRsuiteValue = getParentRsuiteValue;
exports.toRsuiteValue = toRsuiteValue;
exports.computeDisabledValues = computeDisabledValues;
exports.getOptionsToDisplay = getOptionsToDisplay;
exports.hasThreeLevels = hasThreeLevels;
function fromRsuiteValue(selectedValues, allOptions, childrenKey, valueKey, labelKey) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (valueKey === void 0) { valueKey = 'value'; }
    if (labelKey === void 0) { labelKey = 'label'; }
    var formattedTree = getTreeOptionsBySelectedValues(selectedValues, allOptions, childrenKey, valueKey, labelKey);
    return formattedTree.length > 0 ? formattedTree : undefined;
}
function deepCloneExtensible(obj) {
    if (Array.isArray(obj)) {
        return obj.map(function (item) { return deepCloneExtensible(item); });
    }
    // eslint-disable-next-line no-null/no-null
    if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce(function (acc, key) {
            acc[key] = deepCloneExtensible(obj[key]);
            return acc;
        }, {});
    }
    return obj;
}
function getTreeOptionsBySelectedValues(selectedValues, options, childrenKey, valueKey, labelKey) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (valueKey === void 0) { valueKey = 'value'; }
    if (labelKey === void 0) { labelKey = 'label'; }
    function preserveChildrenStructure(option) {
        var _a;
        var children = option[childrenKey];
        var baseOption = (_a = {},
            _a[labelKey] = option[labelKey],
            _a[valueKey] = option[valueKey],
            _a);
        if (children && Array.isArray(children)) {
            baseOption[childrenKey] = children.map(function (child) { return preserveChildrenStructure(child); });
        }
        else {
            // Always add empty children array for consistency
            baseOption[childrenKey] = [];
        }
        return baseOption;
    }
    function getOption(option) {
        var _a;
        var children = option[childrenKey];
        if (children && Array.isArray(children)) {
            var filteredChildren = children
                .map(getOption)
                .filter(function (childOption) { return childOption !== undefined; });
            if (filteredChildren.length > 0) {
                return _a = {},
                    _a[childrenKey] = filteredChildren,
                    _a[labelKey] = option[labelKey],
                    _a[valueKey] = option[valueKey],
                    _a;
            }
        }
        if (selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.includes(option[valueKey])) {
            return preserveChildrenStructure(option);
        }
        return undefined;
    }
    return options.map(getOption).filter(function (option) { return option !== undefined; });
}
function getParentRsuiteValue(options, valueKey, childrenKey) {
    if (valueKey === void 0) { valueKey = 'value'; }
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (!options) {
        return [];
    }
    var parentValues = [];
    function collectParents(items) {
        items.forEach(function (option) {
            var _a;
            var children = (_a = option[childrenKey]) !== null && _a !== void 0 ? _a : [];
            if (children.length > 0) {
                parentValues.push(option[valueKey]);
                collectParents(children);
            }
        });
    }
    collectParents(options);
    return parentValues;
}
function toRsuiteValue(uiValues, childrenKey, valueKey) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (valueKey === void 0) { valueKey = 'value'; }
    if (!uiValues) {
        return undefined;
    }
    var rsuiteValues = [];
    var collectValues = function (items) {
        items.forEach(function (item) {
            var children = item[childrenKey];
            // Add leaf node values (nodes without children) first
            if (!children || children.length === 0) {
                rsuiteValues.push(item[valueKey]);
            }
        });
        // Then recursively collect from children
        items.forEach(function (item) {
            var children = item[childrenKey];
            if (children && children.length > 0) {
                collectValues(children);
            }
        });
    };
    collectValues(uiValues);
    return rsuiteValues.length > 0 ? rsuiteValues : undefined;
}
function computeDisabledValues(isMultiSelect, value, options, childrenKey, valueKey, labelKey) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (valueKey === void 0) { valueKey = 'value'; }
    if (labelKey === void 0) { labelKey = 'label'; }
    if (isMultiSelect) {
        return [];
    }
    var selectedOptions = getTreeOptionsBySelectedValues(value, options, childrenKey, valueKey, labelKey);
    var valuesToDisabled = options
        .filter(function (option) { return selectedOptions.some(function (selectedOption) { return selectedOption[valueKey] !== option[valueKey]; }); })
        .map(function (option) { return option[valueKey]; });
    var subValuesToDisabled = options
        .filter(function (option) { return selectedOptions.some(function (selectedOption) { return selectedOption[valueKey] !== option[valueKey]; }); })
        .flatMap(function (option) { return option[childrenKey]; })
        .filter(Boolean)
        .flatMap(function (option) { return option[valueKey]; });
    return __spreadArray(__spreadArray([], valuesToDisabled, true), subValuesToDisabled, true);
}
function getOptionsToDisplay(allOptions, selectedOptions, childrenKey, valueKey) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (valueKey === void 0) { valueKey = 'value'; }
    var selectedMap = new Map(selectedOptions.map(function (opt) { return [opt[valueKey], opt]; }));
    var result = [];
    function findChildren(option) {
        var children = option[childrenKey];
        var value = option[valueKey];
        if (children && children.length > 0) {
            var hasAllChildrenSelected = children.every(function (child) { return selectedMap.has(child[valueKey]); });
            if (hasAllChildrenSelected) {
                result.push(option); // on garde le parent seulement
                children.forEach(function (child) { return selectedMap.delete(child[valueKey]); });
            }
            else {
                children.forEach(findChildren); // on descend chercher les enfants partiellement sélectionnés
            }
        }
        else if (selectedMap.has(value)) {
            result.push(option); // enfant orphelin sélectionné
        }
    }
    allOptions.forEach(findChildren);
    return result;
}
function hasThreeLevels(options, childrenKey) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (!options || options.length === 0) {
        return false;
    }
    function checkDepth(items, currentDepth) {
        if (currentDepth >= 3) {
            return true;
        }
        return items.some(function (item) {
            var children = item[childrenKey];
            if (children && Array.isArray(children) && children.length > 0) {
                return checkDepth(children, currentDepth + 1);
            }
            return false;
        });
    }
    return checkDepth(options, 1);
}
