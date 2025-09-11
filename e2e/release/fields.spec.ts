context('Sample', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should fill the DatePicker and the DateRangePicker', () => {
    // <DatePicker />

    cy.get('[data-cy="fields-datepicker"]').find('[aria-label="Jour"]').type('19')
    cy.get('[data-cy="fields-datepicker"]').find('[aria-label="Mois"]').type('12')
    cy.get('[data-cy="fields-datepicker"]').find('[aria-label="Année"]').type('2022')
    cy.get('[data-cy="fields-datepicker"]').find('[aria-label="Heure"]').type('09')
    cy.get('[data-cy="fields-datepicker"]').find('[aria-label="Minute"]').type('45')

    cy.get('[data-cy="fields-datepicker-output"]').should('have.text', '"2022-12-19T09:45:00.000Z"')

    // <DateRangePicker />

    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Jour de début"]').type('18')
    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Mois de début"]').type('11')
    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Année de début"]').type('2022')
    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Heure de début"]').type('05')
    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Minute de début"]').type('50')
    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Jour de fin"]').type('20')
    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Mois de fin"]').type('12')
    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Année de fin"]').type('2022')
    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Heure de fin"]').type('19')
    cy.get('[data-cy="fields-daterangepicker"]').find('[aria-label="Minute de fin"]').type('30')

    cy.get('[data-cy="fields-daterangepicker-output"]').should(
      'have.text',
      '["2022-11-18T05:50:00.000Z","2022-12-20T19:30:59.000Z"]'
    )
  })
})
