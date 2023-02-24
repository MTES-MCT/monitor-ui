/* eslint-disable cypress/no-assigning-return-values */

import { findElementBySelector } from '../../utils/findElementBySelector'
import { waitFor } from '../../utils/waitFor'
import { isEmpty } from 'ramda'

import { checkCheckbox } from './checkCheckbox'
import { checkMultiCheckboxOptions } from './checkMultiCheckboxOptions'
import { checkMultiRadioOption } from './checkMultiRadioOption'
import { fillTextarea } from './fillTextarea'
import { fillTextInput } from './fillTextInput'
import { pickMultiSelectOptions } from './pickMultiSelectOptions'
import { pickSelectOption } from './pickSelectOption'
import { findElementBytext } from '../../utils/findElementBytext'

const RETRIES = 5

export function fill(
  label: string | undefined,
  value: boolean | number | string | string[] | undefined,
  leftRetries: number = RETRIES
): void {
  // -------------------------------------------------------------------------
  // If this is a `<label />` element

  const labelElement = findElementBytext('label', label as string) as HTMLLabelElement | undefined

  if (labelElement) {
    // -------------------------------------------------------------------------
    // If the label has a `for` attribute

    if (!isEmpty(labelElement.htmlFor)) {
      const htmlforElement = findElementBySelector(`[id="${labelElement.htmlFor}"]`)
      if (!htmlforElement) {
        throw new Error(
          `Could not find the element with [id="${labelElement.htmlFor}"] targetted by label "${label}" (via its \`for\` attribute).`
        )
      }

      const cypressHtmlforElement = cy.get(`[id="${labelElement.htmlFor}"]`)
      cypressHtmlforElement.then((() => {
        if (htmlforElement.classList.contains('rs-picker-toggle-textbox')) {
          const rsuitePickerElement =
            htmlforElement.parentElement &&
            htmlforElement.parentElement.parentElement &&
            htmlforElement.parentElement.parentElement.parentElement
              ? htmlforElement.parentElement.parentElement.parentElement.parentElement
              : undefined
          if (!rsuitePickerElement) {
            throw new Error('This should never happen.')
          }

          switch (true) {
            // Select
            case rsuitePickerElement.classList.contains('rs-picker-select'):
              pickSelectOption(cypressHtmlforElement, value !== undefined ? String(value) : value)
              break

            // Multi Select
            case rsuitePickerElement.classList.contains('rs-picker-tag'):
              pickMultiSelectOptions(
                cypressHtmlforElement,
                Array.isArray(value) && value.length > 0 ? value : undefined
              )
              break

            default:
              throw new Error(
                `\`cy.fill()\` can't handle Rsuite picker with class "${rsuitePickerElement.className}" elements.`
              )
          }

          return
        }

        switch (htmlforElement.tagName) {
          // Text/Number Input
          case 'INPUT':
            fillTextInput(htmlforElement as HTMLInputElement, value !== undefined ? String(value) : value)
            break

          // Textarea
          case 'TEXTAREA':
            fillTextarea(htmlforElement as HTMLTextAreaElement, value !== undefined ? String(value) : value)
            break

          default:
            throw new Error(`\`cy.fill()\` doesn't handle "${htmlforElement.tagName}" elements.`)
        }
      }) as any)

      return
    }

    // -------------------------------------------------------------------------
    // If the label doesn't have a `for` attribute

    // Checkbox Input
    const checkboxInputElement = labelElement.querySelector('input[type="checkbox"]') as HTMLInputElement | null
    if (checkboxInputElement) {
      checkCheckbox(checkboxInputElement, Boolean(value))

      return
    }

    // Text Input
    const textInputElement = labelElement.querySelector('input[type="text"]') as HTMLInputElement | null
    if (textInputElement) {
      fillTextInput(textInputElement, String(value))

      return
    }

    // Textarea
    const textareaElement = labelElement.querySelector('textarea')
    if (textareaElement) {
      fillTextarea(textareaElement, String(value))

      return
    }

    throw new Error(`Could find neither a checkbox, an input nor a textarea with the label "${label}".`)
  }

  // -------------------------------------------------------------------------
  // If this is a `<legend />` element

  const legendElement = findElementBytext('legend', label as string) as HTMLLegendElement | undefined

  if (legendElement) {
    const cypressLegendElement = cy.get('legend').contains(label as string)
    cypressLegendElement.then(async () => {
      await waitFor(500)

      const fieldsetElement = legendElement.parentElement
      if (!fieldsetElement || fieldsetElement.tagName !== 'FIELDSET') {
        throw new Error(`Could not find parent fieldset of legend element with text "${label}".`)
      }

      const isMultiCheckbox = Boolean(fieldsetElement.querySelector('input[type="checkbox"]'))
      const isMultiRadio = Boolean(fieldsetElement.querySelector('input[type="radio"]'))

      if (isMultiCheckbox) {
        checkMultiCheckboxOptions(fieldsetElement, Array.isArray(value) && value.length > 0 ? value : undefined)

        return
      }

      if (isMultiRadio) {
        checkMultiRadioOption(fieldsetElement, String(value))

        return
      }

      throw new Error(`\`cy.fill()\` can't handle the field with legend "${label}".`)
    })

    return
  }

  if (leftRetries > 0) {
    cy.wait(250).then(() => {
      cy.log(`Retrying (${RETRIES - leftRetries + 1} / ${RETRIES})...`)

      fill(label, value, leftRetries - 1)
    })

    return
  }

  throw new Error(`Could not find label or legend element with text "${label}".`)
}
