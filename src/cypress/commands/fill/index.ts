/* eslint-disable cypress/no-assigning-return-values */

import { findElementParentBySelector } from 'cypress/utils/findElementParentBySelector'
import { isEmpty } from 'ramda'

// import { checkCheckbox } from './checkCheckbox'
import { checkMultiCheckboxOptions } from './checkMultiCheckboxOptions'
import { checkMultiRadioOption } from './checkMultiRadioOption'
import { fillDatePicker } from './fillDatePicker'
import { fillDateRangePicker } from './fillDateRangePicker'
import { fillTextarea } from './fillTextarea'
import { fillTextInput } from './fillTextInput'
import { pickCheckPickerOptions } from './pickCheckPickerOptions'
import { pickMultiSelectOptions } from './pickMultiSelectOptions'
import { pickSelectOption } from './pickSelectOption'
import {
  assertDateRangeTupleOrDateWithTimeRangeTupleOrUndefined,
  assertDateTupleOrDateWithTimeTupleOrUndefined,
  assertStringArrayOrUndefined,
  assertStringOrUndefined
} from './utils'
import { findElementBySelector } from '../../utils/findElementBySelector'
import { findElementBytext } from '../../utils/findElementBytext'
import { throwError } from '../../utils/throwError'

const RETRIES = 5

export function fill(label: string, value: any, leftRetries: number = RETRIES): void {
  try {
    // =========================================================================
    // If it's a field labelled by a `<label />` element

    const labelElement = findElementBytext<HTMLLabelElement>('label', label)
    if (labelElement) {
      if (isEmpty(labelElement.htmlFor)) {
        throwError(`Could not find a \`for\` attribute on \`<label />\` "${label}".`)
      }

      const htmlForElement = findElementBySelector<HTMLDivElement>(`[id="${labelElement.htmlFor}"]`)
      if (!htmlForElement) {
        throwError(
          [
            `Could not find '[id="${labelElement.htmlFor}"]'`,
            `which should match the \`for\` attribute value in field with \`<label />\` "${label}".`
          ].join(' ')
        )
      }

      // -----------------------------------------------------------------------
      // CheckPicker, MultiCascader, MultiSelect, Select

      if (htmlForElement.classList.contains('rs-picker-toggle')) {
        const fieldElement = findElementParentBySelector<HTMLDivElement>(htmlForElement, '.Element-Field')
        if (!fieldElement) {
          throwError(`Could not find '.Element-Field' in field with label "${label}".`)
        }

        const rsuitePickerElement = findElementParentBySelector<HTMLDivElement>(htmlForElement, '.rs-picker')
        if (!rsuitePickerElement) {
          throwError(`Could not find '.rs-picker' in field with label "${label}".`)
        }

        switch (true) {
          // -------------------------------------------------------------------
          // CheckPicker

          case rsuitePickerElement.classList.contains('rs-picker-check'):
            assertStringArrayOrUndefined(value, 'CheckPicker')
            pickCheckPickerOptions(fieldElement, value, label)

            return

          // -------------------------------------------------------------------
          // MultiSelect

          case rsuitePickerElement.classList.contains('rs-picker-tag'):
            assertStringArrayOrUndefined(value, 'MultiSelect')
            pickMultiSelectOptions(fieldElement, value, label)

            return

          // -------------------------------------------------------------------
          // Select

          case rsuitePickerElement.classList.contains('rs-picker-select'):
            assertStringOrUndefined(value, 'Select')
            pickSelectOption(fieldElement, value, label)

            return

          default:
            throwError(
              [
                `\`cy.fill()\` can't handle Rsuite picker components with class "${rsuitePickerElement.className}"`,
                `in field with \`<label>\` "${label}".`
              ].join('\n')
            )
        }
      }

      // -----------------------------------------------------------------------
      // NumberInput, TextInput, Textarea

      switch (htmlForElement.tagName) {
        // ---------------------------------------------------------------------
        // NumberInput, TextInput

        case 'INPUT':
          assertStringOrUndefined(value, 'TextInput')
          fillTextInput(htmlForElement as HTMLInputElement, value)

          return

        // ---------------------------------------------------------------------
        // Textarea

        case 'TEXTAREA':
          assertStringOrUndefined(value, 'Textarea')
          fillTextarea(htmlForElement as unknown as HTMLTextAreaElement, value)

          return

        default:
          throwError(
            [
              `\`cy.fill()\` can't handle the input element with class "${htmlForElement.className}"`,
              `in field with \`<label>\` "${label}".`
            ].join(' ')
          )
      }
    }

    // -------------------------------------------------------------------------
    // If it's a field labelled by a `<legend />` element

    const legendElement = findElementBytext<HTMLLegendElement>('legend', label)
    if (legendElement) {
      const fieldsetElement = findElementParentBySelector<HTMLFieldSetElement>(legendElement, '.Element-Fieldset')
      if (!fieldsetElement) {
        throwError(`Could not find '.Element-Fieldset' in field with \`<legend />\` "${label}".`)
      }

      switch (true) {
        // -----------------------------------------------------------------------
        // DatePicker

        case fieldsetElement.classList.contains('Field-DatePicker'):
          assertDateTupleOrDateWithTimeTupleOrUndefined(value, 'DatePicker')
          fillDatePicker(fieldsetElement, value)

          return

        // -----------------------------------------------------------------------
        // DateRangePicker

        case fieldsetElement.classList.contains('Field-DateRangePicker'):
          assertDateRangeTupleOrDateWithTimeRangeTupleOrUndefined(value, 'DateRangePicker')
          fillDateRangePicker(fieldsetElement, value)

          return

        // -----------------------------------------------------------------------
        // MultiCheckbox

        case fieldsetElement.classList.contains('Field-MultiCheckbox'):
          assertStringArrayOrUndefined(value, 'MultiCheckbox')
          checkMultiCheckboxOptions(fieldsetElement, value)

          return

        // -----------------------------------------------------------------------
        // MultiRadio

        case fieldsetElement.classList.contains('Field-MultiRadio'):
          assertStringOrUndefined(value, 'MultiRadio')
          checkMultiRadioOption(fieldsetElement, String(value))

          return

        default:
          throwError(`\`cy.fill()\` can't handle the input element in field with \`<legend>\` "${label}".`)
      }
    }

    throwError(`Could not find a field labelled by a \`<label />\` or \`<legend />\` "${label}".`)
  } catch (err: any) {
    if (leftRetries > 0) {
      cy.wait(250).then(() => {
        cy.log(`[monitor-ui > Cypress] Retrying (${RETRIES - leftRetries + 1} / ${RETRIES})...`)

        fill(label, value, leftRetries - 1)
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
        `Could not find or fill field with label or legend "${label}" after ${RETRIES} attempts.`,
        `This error was thrown: “${normalizedError.message}”`,
        `Please check the Cypress "- ERROR" log above for more details.`
      ].join('\n')
    )
  }
}
