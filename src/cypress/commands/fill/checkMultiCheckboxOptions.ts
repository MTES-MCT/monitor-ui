const RETRIES = 5

export function checkMultiCheckboxOptions(
  fieldsetElement: HTMLElement,
  values: string[] | undefined,
  leftRetries: number = RETRIES
) {
  cy.wrap(fieldsetElement).scrollIntoView()

  cy.wrap(fieldsetElement).find('input[type="checkbox"]').uncheck({ force: true }).wait(250)

  if (fieldsetElement.querySelector('[aria-checked="true"]') && leftRetries > 0) {
    cy.wait(250).then(() => {
      cy.log(`Retrying (${RETRIES - leftRetries + 1} / ${RETRIES})...`)

      checkMultiCheckboxOptions(fieldsetElement, values, leftRetries - 1)
    })

    return
  }

  if (values) {
    values.forEach(value => {
      cy.wrap(fieldsetElement).find('label').contains(value).find('input[type="checkbox"]').check({ force: true })
    })
  }
}
