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
import { assertStringArrayOrUndefined, assertStringOrUndefined } from './utils'
import { findElementBySelector } from '../../utils/findElementBySelector'
import { findElementBytext } from '../../utils/findElementBytext'
import { throwError } from '../../utils/throwError'
import { waitFor } from '../../utils/waitFor'

const RETRIES = 5

export function fill(
  label: string,
  value:
    | boolean
    | number
    | string
    | string[]
    | (Cypress.DateTuple | Cypress.DateWithTimeTuple)
    | ([Cypress.DateTuple, Cypress.DateTuple] | [Cypress.DateWithTimeTuple, Cypress.DateWithTimeTuple])
    | undefined,
  leftRetries: number = RETRIES
): void {
  try {
    // =========================================================================
    // If this is a `<label />` element

    const labelElement = findElementBytext<HTMLLabelElement>('label', label)
    if (labelElement) {
      if (isEmpty(labelElement.htmlFor)) {
        throwError(`Could not find a \`for\` attribute on <label> with content "${label}".`)
      }

      const htmlForElement = findElementBySelector<HTMLDivElement>(`[id="${labelElement.htmlFor}"]`)
      if (!htmlForElement) {
        throwError(`Could not find '[id="${labelElement.htmlFor}"]' "for=" target in field with label "${label}".`)
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
            break

          // -------------------------------------------------------------------
          // MultiSelect

          case rsuitePickerElement.classList.contains('rs-picker-tag'):
            assertStringArrayOrUndefined(value, 'MultiSelect')
            pickMultiSelectOptions(fieldElement, value, label)
            break

          // -------------------------------------------------------------------
          // Select

          case rsuitePickerElement.classList.contains('rs-picker-select'):
            assertStringOrUndefined(value, 'Select')
            pickSelectOption(fieldElement, value, label)
            break

          default:
            throwError(
              `\`cy.fill()\` can't handle Rsuite picker components with class "${rsuitePickerElement.className}".`
            )
        }

        return
      }

      // -----------------------------------------------------------------------
      // NumberInput, TextInput, Textarea

      switch (htmlForElement.tagName) {
        // ---------------------------------------------------------------------
        // NumberInput, TextInput

        case 'INPUT':
          assertStringOrUndefined(value, 'TextInput')
          fillTextInput(htmlForElement as HTMLInputElement, value)
          break

        // ---------------------------------------------------------------------
        // Textarea

        case 'TEXTAREA':
          assertStringOrUndefined(value, 'Textarea')
          fillTextarea(htmlForElement as unknown as HTMLTextAreaElement, value)
          break

        default:
          throwError(`\`cy.fill()\` doesn't handle "${htmlForElement.tagName}" elements.`)
      }

      return
    }

    // -------------------------------------------------------------------------

    // -------------------------------------------------------------------------
    // If this is a `<legend />` element

    const legendElement = findElementBytext('legend', label as string) as HTMLLegendElement | undefined

    if (legendElement) {
      const cypressLegendElement = cy.get('legend').contains(label as string)
      cypressLegendElement.then(async () => {
        await waitFor(500)

        const fieldsetElement = legendElement.parentElement
        if (!fieldsetElement || fieldsetElement.tagName !== 'FIELDSET') {
          throwError(`Could not find parent fieldset of legend element with text "${label}".`)
        }

        if (fieldsetElement.classList.contains('Field-DatePicker')) {
          if (
            (!Array.isArray(value) || (value.length !== 3 && value.length !== 5) || typeof value[0] !== 'number') &&
            value !== undefined
          ) {
            throwError(
              '`value` should be of type `[number, number, number]`, `[number, number, number, number, number]` or `undefined`.'
            )
          }

          fillDatePicker(fieldsetElement, value as Cypress.DateTuple | Cypress.DateWithTimeTuple | undefined)

          return
        }

        if (fieldsetElement.classList.contains('Field-DateRangePicker')) {
          if (
            (!Array.isArray(value) ||
              value.length !== 2 ||
              !Array.isArray(value[0]) ||
              (value[0].length !== 3 && value[0].length !== 5) ||
              (value[1].length !== 3 && value[1].length !== 5)) &&
            value !== undefined
          ) {
            throwError(
              '`value` should be of type `[[number, number, number], [number, number, number]]` or ``[[number, number, number, number, number], [number, number, number, number, number]]`` or `undefined`.'
            )
          }

          fillDateRangePicker(
            fieldsetElement,
            value as
              | [Cypress.DateTuple, Cypress.DateTuple]
              | [Cypress.DateWithTimeTuple, Cypress.DateWithTimeTuple]
              | undefined
          )

          return
        }

        const isMultiCheckbox = Boolean(fieldsetElement.querySelector('input[type="checkbox"]'))
        const isMultiRadio = Boolean(fieldsetElement.querySelector('input[type="radio"]'))

        if (isMultiCheckbox) {
          checkMultiCheckboxOptions(
            fieldsetElement,
            Array.isArray(value) && value.length > 0 ? (value as string[]) : undefined
          )

          return
        }

        if (isMultiRadio) {
          checkMultiRadioOption(fieldsetElement, String(value))

          return
        }

        throwError(`\`cy.fill()\` can't handle the field with legend "${label}".`)
      })

      return
    }

    throwError(`Could not find label or legend element with text "${label}".`)
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
    })
      .error(normalizedError)
      .end()

    throwError(
      [
        `Could not find or fill field with label or legend "${label}" after ${RETRIES} attempts.`,
        `This error was thrown: “${normalizedError.message}”`,
        `Please check the Cypress "- ERROR" log above for more details.`
      ].join('\n')
    )
  }
}
