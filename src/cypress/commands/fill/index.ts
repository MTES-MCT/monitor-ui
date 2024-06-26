import { findElementParentBySelector } from 'cypress/utils/findElementParentBySelector'

import { checkCheckbox } from './checkCheckbox'
import { checkMultiCheckboxOptions } from './checkMultiCheckboxOptions'
import { checkMultiRadioOption } from './checkMultiRadioOption'
import { DEFAULT_OPTIONS } from './constants'
import { fillDatePicker } from './fillDatePicker'
import { fillDateRangePicker } from './fillDateRangePicker'
import { fillNumberInput } from './fillNumberInput'
import { fillTextarea } from './fillTextarea'
import { fillTextInput } from './fillTextInput'
import { pickCheckPickerOptions } from './pickCheckPickerOptions'
import { pickMultiCascaderOptions } from './pickMultiCascaderOptions'
import { pickMultiSelectOptions } from './pickMultiSelectOptions'
import { pickSearchOption } from './pickSearchOption'
import { pickSelectOption } from './pickSelectOption'
import {
  assertBooleanOrUndefined,
  assertDateRangeTupleOrDateWithTimeRangeTupleOrUndefined,
  assertDateTupleOrDateWithTimeTupleOrUndefined,
  assertNumberOrUndefined,
  assertString,
  assertStringArrayOrUndefined,
  assertStringOrUndefined
} from './utils'
import { findElementByText } from '../../utils/findElementByText'
import { throwError } from '../../utils/throwError'

let TOTAL_RETRIES: number

export function fill(label: string, value: any, options: Partial<Cypress.FillOptions> = {}) {
  const controlledOptions = { ...DEFAULT_OPTIONS, ...options }
  if (!TOTAL_RETRIES) {
    TOTAL_RETRIES = controlledOptions.retries
  }

  Cypress.log({
    consoleProps: () => ({
      'Left Retries': controlledOptions.retries
    }),
    message: `Filling field with label/legend "${label}" with value "${JSON.stringify(value)}".`,
    name: 'fill'
  })

  try {
    // =========================================================================
    // If it's a field labelled by a `<label />` element

    const labelElement = findElementByText<HTMLLabelElement>('label', label, { index: controlledOptions.index })
    if (labelElement) {
      const fieldElement = findElementParentBySelector<HTMLDivElement>(labelElement, '.Element-Field')
      if (!fieldElement) {
        throwError(
          `Could not find '.Element-Field' in field with label "${label}" at index "${controlledOptions.index}".`
        )
      }

      switch (true) {
        // ---------------------------------------------------------------------
        // Checkbox

        case fieldElement.classList.contains('Field-Checkbox'):
          assertBooleanOrUndefined(value, 'Checkbox')
          checkCheckbox(fieldElement, value, label, controlledOptions.force)

          return

        // ---------------------------------------------------------------------
        // CheckPicker

        case fieldElement.classList.contains('Field-CheckPicker'):
          assertStringArrayOrUndefined(value, 'CheckPicker')
          pickCheckPickerOptions(fieldElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        // MultiCascader

        case fieldElement.classList.contains('Field-MultiCascader'):
          assertStringArrayOrUndefined(value, 'MultiCascader')
          pickMultiCascaderOptions(fieldElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        // MultiSelect

        case fieldElement.classList.contains('Field-MultiSelect'):
          assertStringArrayOrUndefined(value, 'MultiSelect')
          pickMultiSelectOptions(fieldElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        // Search

        case fieldElement.classList.contains('Field-Search'):
          assertStringOrUndefined(value, 'Search')
          pickSearchOption(fieldElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        // Select

        case fieldElement.classList.contains('Field-Select'):
          assertStringOrUndefined(value, 'Select')
          pickSelectOption(fieldElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        // NumberInput

        case fieldElement.classList.contains('Field-NumberInput'):
          assertNumberOrUndefined(value, 'TextInput')
          fillNumberInput(fieldElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        // Textarea

        case fieldElement.classList.contains('Field-Textarea'):
          assertStringOrUndefined(value, 'Textarea')
          fillTextarea(fieldElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        //  TextInput

        case fieldElement.classList.contains('Field-TextInput'):
          assertStringOrUndefined(value, 'TextInput')
          fillTextInput(fieldElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        //  PhoneInput

        case fieldElement.classList.contains('Field-PhoneInput'):
          assertStringOrUndefined(value, 'PhoneInput')
          fillTextInput(fieldElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        default:
          throwError(`\`cy.fill()\` can't handle field with \`<label>\` "${label}".`)
      }
    }

    // =========================================================================
    // If it's a field labelled by a `<legend />` element

    const legendElement = findElementByText<HTMLLegendElement>('legend', label, { index: controlledOptions.index })
    if (legendElement) {
      const fieldsetElement = findElementParentBySelector<HTMLFieldSetElement>(legendElement, '.Element-Fieldset')
      if (!fieldsetElement) {
        throwError(
          `Could not find '.Element-Fieldset' in field with \`<legend />\` "${label}" at index "${controlledOptions.index}".`
        )
      }

      switch (true) {
        // ---------------------------------------------------------------------
        // DatePicker

        case fieldsetElement.classList.contains('Field-DatePicker'):
          assertDateTupleOrDateWithTimeTupleOrUndefined(value, 'DatePicker')
          fillDatePicker(fieldsetElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        // DateRangePicker

        case fieldsetElement.classList.contains('Field-DateRangePicker'):
          assertDateRangeTupleOrDateWithTimeRangeTupleOrUndefined(value, 'DateRangePicker')
          fillDateRangePicker(fieldsetElement, value, label, controlledOptions.force, controlledOptions.delay)

          return

        // ---------------------------------------------------------------------
        // MultiCheckbox

        case fieldsetElement.classList.contains('Field-MultiCheckbox'):
          assertStringArrayOrUndefined(value, 'MultiCheckbox')
          checkMultiCheckboxOptions(fieldsetElement, value, label, controlledOptions.force)

          return

        // ---------------------------------------------------------------------
        // MultiRadio

        case fieldsetElement.classList.contains('Field-MultiRadio'):
          assertString(value, 'MultiRadio')
          checkMultiRadioOption(fieldsetElement, value, label, controlledOptions.force)

          return

        default:
          throwError(`\`cy.fill()\` can't handle the input element in field with \`<legend>\` "${label}".`)
      }
    }

    throwError(`Could not find a field labelled by a \`<label />\` or \`<legend />\` "${label}".`)
  } catch (err: any) {
    if (controlledOptions.retries > 0) {
      cy.wait(250).then(() => {
        cy.log(
          `[monitor-ui > Cypress] Retrying (${TOTAL_RETRIES - controlledOptions.retries + 1} / ${TOTAL_RETRIES})...`
        )

        fill(label, value, {
          ...controlledOptions,
          retries: controlledOptions.retries - 1
        })
      })

      return
    }

    const normalizedError = err instanceof Error ? err : new Error(String(err))

    Cypress.log({
      consoleProps: () => ({
        err,
        label,
        value
      }),
      displayName: 'ERROR',
      message: String(normalizedError.message),
      name: 'fill'
    }).error(normalizedError)

    throwError(
      [
        `Could not find or fill field with label or legend "${label}" at index "${controlledOptions.index}" after ${TOTAL_RETRIES} attempts.`,
        `This error was thrown: “${normalizedError.message}”`,
        `Please check the Cypress "- ERROR" log above for more details.`
      ].join('\n')
    )
  }
}
