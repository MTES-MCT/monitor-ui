export function checkMultiRadioOption(
  fieldsetElement: HTMLFieldSetElement,
  value: string,
  _label: string,
  force: boolean
) {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldsetElement,
      Elements: 1
    }),
    name: 'checkMultiRadioOption'
  })

  cy.wrap(fieldsetElement)
    .scrollIntoView({ offset: { left: 0, top: -100 } })
    .find('label')
    .contains(value)
    .click({ force })
    .wait(250)
}
