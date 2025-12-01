"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var utils_1 = require("../utils");
(0, globals_1.describe)('getTreeOptionsBySelectedValues', function () {
    var options = [
        {
            children: [
                { label: 'Acidification des océans', value: 'acidification_oceans' },
                { label: 'Réchauffement des eaux', value: 'rechauffement_eaux' },
                { label: 'Blanchissement des coraux', value: 'blanchissement_coraux' }
            ],
            label: 'Changement climatique et océan',
            value: 'changement_climatique_ocean'
        },
        {
            children: [
                { label: 'Déchets plastiques', value: 'dechets_plastiques' },
                { label: 'Pollution chimique', value: 'pollution_chimique' }
            ],
            label: 'Pollution marine',
            value: 'pollution_marine'
        }
    ];
    (0, globals_1.it)('should return filtered options with selected children only', function () {
        var selectedValues = ['acidification_oceans', 'pollution_chimique'];
        var result = (0, utils_1.getTreeOptionsBySelectedValues)(selectedValues, options);
        (0, globals_1.expect)(result).toEqual([
            {
                children: [{ children: [], label: 'Acidification des océans', value: 'acidification_oceans' }],
                label: 'Changement climatique et océan',
                value: 'changement_climatique_ocean'
            },
            {
                children: [{ children: [], label: 'Pollution chimique', value: 'pollution_chimique' }],
                label: 'Pollution marine',
                value: 'pollution_marine'
            }
        ]);
    });
    (0, globals_1.it)('should return an empty array if no selected values match', function () {
        var selectedValues = [];
        var result = (0, utils_1.getTreeOptionsBySelectedValues)(selectedValues, options);
        (0, globals_1.expect)(result).toEqual([]);
    });
    (0, globals_1.it)('should return top-level options if their value matches', function () {
        var selectedValues = ['changement_climatique_ocean'];
        var result = (0, utils_1.getTreeOptionsBySelectedValues)(selectedValues, options);
        (0, globals_1.expect)(result).toEqual([
            {
                children: [
                    { children: [], label: 'Acidification des océans', value: 'acidification_oceans' },
                    { children: [], label: 'Réchauffement des eaux', value: 'rechauffement_eaux' },
                    { children: [], label: 'Blanchissement des coraux', value: 'blanchissement_coraux' }
                ],
                label: 'Changement climatique et océan',
                value: 'changement_climatique_ocean'
            }
        ]);
    });
    (0, globals_1.it)('should handle undefined selectedValues by returning an empty array', function () {
        var selectedValues = undefined;
        var result = (0, utils_1.getTreeOptionsBySelectedValues)(selectedValues, options);
        (0, globals_1.expect)(result).toEqual([]);
    });
    (0, globals_1.it)('should handle options without children and still match top-level values', function () {
        var optionsWithNoChildren = [
            { label: 'Éducation et sensibilisation', value: 'education_sensibilisation' }
        ];
        var selectedValues = ['education_sensibilisation'];
        var result = (0, utils_1.getTreeOptionsBySelectedValues)(selectedValues, optionsWithNoChildren);
        (0, globals_1.expect)(result).toEqual([
            { children: [], label: 'Éducation et sensibilisation', value: 'education_sensibilisation' }
        ]);
    });
});
(0, globals_1.describe)('fromRsuiteValue', function () {
    var options = [
        { children: [{ label: 'Child 1', value: 'c1' }], label: 'Parent 1', value: 'p1' },
        { children: [{ label: 'Child 2', value: 'c2' }], label: 'Parent 2', value: 'p2' }
    ];
    (0, globals_1.it)('should return structured tree from values', function () {
        var values = ['c1'];
        var result = (0, utils_1.fromRsuiteValue)(values, options);
        (0, globals_1.expect)(result).toEqual([
            {
                children: [{ children: [], label: 'Child 1', value: 'c1' }],
                label: 'Parent 1',
                value: 'p1'
            }
        ]);
    });
    (0, globals_1.it)('should return undefined when no values are selected', function () {
        var result = (0, utils_1.fromRsuiteValue)([], options);
        (0, globals_1.expect)(result).toBeUndefined();
    });
});
(0, globals_1.describe)('toRsuiteValue', function () {
    (0, globals_1.it)('should flatten children values and childless values from structured tree', function () {
        var uiValues = [
            {
                children: [
                    { label: 'Child 1', value: 'c1' },
                    { label: 'Child 2', value: 'c2' }
                ],
                label: 'Parent 1',
                value: 'p1'
            },
            {
                label: 'Parent 2',
                value: 'p2'
            }
        ];
        var result = (0, utils_1.toRsuiteValue)(uiValues);
        (0, globals_1.expect)(result).toEqual(['p2', 'c1', 'c2']);
    });
    (0, globals_1.it)('should return undefined when input is undefined', function () {
        (0, globals_1.expect)((0, utils_1.toRsuiteValue)(undefined)).toBeUndefined();
    });
});
(0, globals_1.describe)('computeDisabledValues', function () {
    var uiValues = [
        {
            children: [
                { label: 'Child 1', value: 'c1' },
                { label: 'Child 2', value: 'c2' }
            ],
            label: 'Parent 1',
            value: 'p1'
        },
        {
            label: 'Parent 2',
            value: 'p2'
        }
    ];
    (0, globals_1.it)('should return empty array if multi-select is true', function () {
        var result = (0, utils_1.computeDisabledValues)(true, ['p1'], uiValues, 'children');
        (0, globals_1.expect)(result).toEqual([]);
    });
    (0, globals_1.it)('should disable non-selected options and their children when multi-select is false', function () {
        var result = (0, utils_1.computeDisabledValues)(false, ['p1'], uiValues, 'children');
        // B, C, B1 are not selected
        (0, globals_1.expect)(result).toEqual(['p2']);
    });
    (0, globals_1.it)('should handle case when selected option has no children', function () {
        var result = (0, utils_1.computeDisabledValues)(false, ['p2'], uiValues, 'children');
        // A, B, A1, A2, B1 are not selected
        (0, globals_1.expect)(result).toEqual(['p1', 'c1', 'c2']);
    });
});
(0, globals_1.describe)('getOptionsToDisplay', function () {
    var allOptions = [
        {
            children: [
                { label: 'Child 1', value: 'child1' },
                { label: 'Child 2', value: 'child2' }
            ],
            label: 'Parent 1',
            value: 'parent1'
        },
        {
            children: [
                { label: 'Child 3', value: 'child3' },
                { label: 'Child 4', value: 'child4' }
            ],
            label: 'Parent 2',
            value: 'parent2'
        },
        {
            label: 'Orphan Option',
            value: 'orphan'
        }
    ];
    (0, globals_1.it)('returns parent if all children are selected', function () {
        var selected = [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
        ];
        var result = (0, utils_1.getOptionsToDisplay)(allOptions, selected);
        (0, globals_1.expect)(result).toEqual([
            {
                children: [
                    { label: 'Child 1', value: 'child1' },
                    { label: 'Child 2', value: 'child2' }
                ],
                label: 'Parent 1',
                value: 'parent1'
            }
        ]);
    });
    (0, globals_1.it)('returns orphan child if its parent is not fully selected', function () {
        var selected = [
            { label: 'Child 3', value: 'child3' } // child4 is missing
        ];
        var result = (0, utils_1.getOptionsToDisplay)(allOptions, selected);
        (0, globals_1.expect)(result).toEqual([{ label: 'Child 3', value: 'child3' }]);
    });
    (0, globals_1.it)('returns mixed: one parent complete, one orphan child', function () {
        var selected = [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' },
            { label: 'Child 3', value: 'child3' }
        ];
        var result = (0, utils_1.getOptionsToDisplay)(allOptions, selected);
        (0, globals_1.expect)(result).toEqual([
            {
                children: [
                    { label: 'Child 1', value: 'child1' },
                    { label: 'Child 2', value: 'child2' }
                ],
                label: 'Parent 1',
                value: 'parent1'
            },
            { label: 'Child 3', value: 'child3' }
        ]);
    });
    (0, globals_1.it)('returns ungrouped option if selected and has no parent', function () {
        var selected = [{ label: 'Orphan Option', value: 'orphan' }];
        var result = (0, utils_1.getOptionsToDisplay)(allOptions, selected);
        (0, globals_1.expect)(result).toEqual([{ label: 'Orphan Option', value: 'orphan' }]);
    });
    (0, globals_1.it)('returns empty array if selectedOptions is empty', function () {
        var result = (0, utils_1.getOptionsToDisplay)(allOptions, []);
        (0, globals_1.expect)(result).toEqual([]);
    });
    (0, globals_1.it)('returns empty array if allOptions is empty', function () {
        var result = (0, utils_1.getOptionsToDisplay)([], [{ label: 'Child 1', value: 'child1' }]);
        (0, globals_1.expect)(result).toEqual([]);
    });
});
(0, globals_1.describe)('getParentRsuiteValue', function () {
    (0, globals_1.it)('returns an empty array if options are empty', function () {
        var result = (0, utils_1.getParentRsuiteValue)(undefined);
        (0, globals_1.expect)(result).toEqual([]);
    });
    (0, globals_1.it)('returns an empty array none of the nodes got child', function () {
        var options = [{ value: '1' }, { value: '2' }];
        var result = (0, utils_1.getParentRsuiteValue)(options);
        (0, globals_1.expect)(result).toEqual([]);
    });
    (0, globals_1.it)('return value of node that got children', function () {
        var options = [
            { children: [{ value: '1.1' }], value: '1' },
            { value: '2' },
            { children: [{ value: '3.1' }, { value: '3.2' }], value: '3' }
        ];
        var result = (0, utils_1.getParentRsuiteValue)(options);
        (0, globals_1.expect)(result).toEqual(['1', '3']);
    });
    (0, globals_1.it)('should use custom key if specified', function () {
        var options = [{ customChildren: [{ customValue: 'A.1' }], customValue: 'A' }, { customValue: 'B' }];
        var result = (0, utils_1.getParentRsuiteValue)(options, 'customValue', 'customChildren');
        (0, globals_1.expect)(result).toEqual(['A']);
    });
    (0, globals_1.it)('ignore childless nodes', function () {
        var options = [
            { children: [], value: '1' },
            { children: undefined, value: '2' },
            { children: [{ value: '3.1' }], value: '3' }
        ];
        var result = (0, utils_1.getParentRsuiteValue)(options);
        (0, globals_1.expect)(result).toEqual(['3']);
    });
    (0, globals_1.describe)('deepCloneExtensible', function () {
        (0, globals_1.it)('should clone an object with extensible properties', function () {
            var obj = { a: 1, b: 2 };
            var cloned = (0, utils_1.deepCloneExtensible)(obj);
            (0, globals_1.expect)(cloned).toEqual(obj);
            (0, globals_1.expect)(Object.isExtensible(cloned)).toBe(true);
        });
        (0, globals_1.it)('should clone nested objects', function () {
            var obj = { a: { b: 2 }, c: 3 };
            var cloned = (0, utils_1.deepCloneExtensible)(obj);
            (0, globals_1.expect)(cloned).toEqual(obj);
            (0, globals_1.expect)(Object.isExtensible(cloned.a)).toBe(true);
        });
    });
});
(0, globals_1.describe)('hasThreeLevels', function () {
    (0, globals_1.it)('should return true when data has 3 levels', function () {
        var options = [
            {
                children: [
                    {
                        children: [{ label: 'Level 3', value: 'level3' }],
                        label: 'Level 2',
                        value: 'level2'
                    }
                ],
                label: 'Level 1',
                value: 'level1'
            }
        ];
        var result = (0, utils_1.hasThreeLevels)(options);
        (0, globals_1.expect)(result).toBe(true);
    });
    (0, globals_1.it)('should return false when data has only 2 levels', function () {
        var options = [
            {
                children: [{ label: 'Level 2', value: 'level2' }],
                label: 'Level 1',
                value: 'level1'
            }
        ];
        var result = (0, utils_1.hasThreeLevels)(options);
        (0, globals_1.expect)(result).toBe(false);
    });
    (0, globals_1.it)('should return false when data has only 1 level', function () {
        var options = [{ label: 'Level 1', value: 'level1' }];
        var result = (0, utils_1.hasThreeLevels)(options);
        (0, globals_1.expect)(result).toBe(false);
    });
    (0, globals_1.it)('should return false when options are empty', function () {
        var options = [];
        var result = (0, utils_1.hasThreeLevels)(options);
        (0, globals_1.expect)(result).toBe(false);
    });
    (0, globals_1.it)('should return true when one branch has 3 levels among multiple branches', function () {
        var options = [
            {
                children: [{ label: 'Level 2 A', value: 'level2a' }],
                label: 'Level 1 A',
                value: 'level1a'
            },
            {
                children: [
                    {
                        children: [{ label: 'Level 3 B', value: 'level3b' }],
                        label: 'Level 2 B',
                        value: 'level2b'
                    }
                ],
                label: 'Level 1 B',
                value: 'level1b'
            }
        ];
        var result = (0, utils_1.hasThreeLevels)(options);
        (0, globals_1.expect)(result).toBe(true);
    });
    (0, globals_1.it)('should work with custom childrenKey', function () {
        var options = [
            {
                customChildren: [
                    {
                        customChildren: [{ label: 'Level 3', value: 'level3' }],
                        label: 'Level 2',
                        value: 'level2'
                    }
                ],
                label: 'Level 1',
                value: 'level1'
            }
        ];
        var result = (0, utils_1.hasThreeLevels)(options, 'customChildren');
        (0, globals_1.expect)(result).toBe(true);
    });
});
