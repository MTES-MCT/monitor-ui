export function checkMultiRadioOption(fieldsetElement: HTMLFieldSetElement, value: string) {
  cy.wrap(fieldsetElement)
    .scrollIntoView({ offset: { left: 0, top: -100 } })
    .find('label')
    .contains(value)
    .forceClick()
    .wait(250)

  return fieldsetElement
}
