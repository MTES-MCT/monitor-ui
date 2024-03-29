export function pickSearchOption(
  fieldElement: HTMLDivElement,
  value: string | undefined,
  _label: string,
  force: boolean,
  delay: number
) {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldElement,
      Elements: 1
    }),
    name: 'pickSearchOption'
  })

  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  // Clear the field if there is a clear button
  const maybeClearButton = fieldElement.querySelector('.Field-Search__ClearButton')
  if (maybeClearButton) {
    cy.wrap(fieldElement).find('.Field-Search__ClearButton').click({ force }).wait(250)
  }

  // If the value is undefined, we don't need to select anything
  if (!value) {
    return
  }

  // Search for the value
  cy.wrap(fieldElement).find('input[role="combobox"]').type(value, { delay, force })

  // Wait for the picker to open
  cy.wrap(fieldElement)
    .get('.rs-picker-popup')
    .then(([rsuitePickerPopupElement]) => {
      // Select the first picker option
      cy.wrap(rsuitePickerPopupElement).find('[role="option"]').first().scrollIntoView().click({ force }).wait(250)
    })
}
