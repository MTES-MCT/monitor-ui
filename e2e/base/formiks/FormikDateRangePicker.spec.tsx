import dayjs from 'dayjs'
import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
import { Button, FormikDateRangePicker, FormikEffect } from '../../../src'
import Meta, {
  _FormikDateRangePicker as FormikDateRangePickerStory
} from '../../../stories/formiks/FormikDateRangePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context('Story', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <FormikDateRangePickerStory {...Meta.args} withTime={false} />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.fill('A date range', [
      [2021, 11, 20],
      [2021, 12, 31]
    ])

    outputShouldBe({
      myDateRange: ['2021-11-20T00:00:00.000Z', '2021-12-31T23:59:59.000Z']
    })

    cy.fill('A date range', [
      [2022, 3, 4],
      [2024, 11, 30]
    ])

    outputShouldBe({
      myDateRange: ['2022-03-04T00:00:00.000Z', '2024-11-30T23:59:59.000Z']
    })

    cy.fill('A date range', undefined)

    outputShouldBe({})
  })
})

context('Story (`withTime={true}`)', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <FormikDateRangePickerStory {...Meta.args} withTime />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.fill('A date range', [
      [2021, 11, 20, 23, 35],
      [2021, 12, 31, 4, 56]
    ])

    outputShouldBe({
      myDateRange: ['2021-11-20T23:35:00.000Z', '2021-12-31T04:56:59.000Z']
    })

    cy.fill('A date range', [
      [2022, 3, 4, 7, 24],
      [2024, 11, 30, 17, 42]
    ])

    outputShouldBe({
      myDateRange: ['2022-03-04T07:24:00.000Z', '2024-11-30T17:42:59.000Z']
    })

    cy.fill('A date range', undefined)

    outputShouldBe({})
  })
})

context('Custom (`withTime={true}`)', () => {
  it('Should update `defaultValue`', () => {
    const initialStartDateAsString = '2021-02-03T12:34:56.000Z'
    const initialEndDateAsString = '2022-02-03T12:34:56.000Z'
    const updatedStartDateAsString = '2023-04-05T21:43:56.000Z'
    const updatedEndDateAsString = '2024-04-05T21:43:56.000Z'

    function Template() {
      const [outputValue, setOutputValue] = useState({})

      const onChange = nextValues => {
        setOutputValue(nextValues)
      }

      return (
        <GlobalDecoratorWrapper>
          <Formik
            initialValues={{
              myDateRange: [initialStartDateAsString, initialEndDateAsString]
            }}
            onSubmit={noop}
          >
            {({ setFieldValue }) => (
              <>
                <FormikEffect onChange={onChange} />

                <FormikDateRangePicker isStringDate label="A date range" name="myDateRange" withTime />

                <Button
                  onClick={() => setFieldValue('myDateRange', [updatedStartDateAsString, updatedEndDateAsString])}
                >
                  Update Date Range
                </Button>
                <Button onClick={() => setFieldValue('myDateRange', undefined)}>Reset Date Range</Button>
              </>
            )}
          </Formik>

          <Output value={outputValue} />
        </GlobalDecoratorWrapper>
      )
    }

    mountAndWait(<Template />)

    outputShouldBe({
      myDateRange: [initialStartDateAsString, initialEndDateAsString]
    })

    const initialStartDateAsDayjs = dayjs(initialStartDateAsString)
    const initialEndDateAsDayjs = dayjs(initialEndDateAsString)
    cy.get('[aria-label="Jour de début"]').should('have.value', initialStartDateAsDayjs.utc().format('DD'))
    cy.get('[aria-label="Mois de début"]').should('have.value', initialStartDateAsDayjs.utc().format('MM'))
    cy.get('[aria-label="Année de début"]').should('have.value', initialStartDateAsDayjs.utc().format('YYYY'))
    cy.get('[aria-label="Heure de début"]').should('have.value', initialStartDateAsDayjs.utc().format('HH'))
    cy.get('[aria-label="Minute de début"]').should('have.value', initialStartDateAsDayjs.utc().format('mm'))
    cy.get('[aria-label="Jour de fin"]').should('have.value', initialEndDateAsDayjs.utc().format('DD'))
    cy.get('[aria-label="Mois de fin"]').should('have.value', initialEndDateAsDayjs.utc().format('MM'))
    cy.get('[aria-label="Année de fin"]').should('have.value', initialEndDateAsDayjs.utc().format('YYYY'))
    cy.get('[aria-label="Heure de fin"]').should('have.value', initialEndDateAsDayjs.utc().format('HH'))
    cy.get('[aria-label="Minute de fin"]').should('have.value', initialEndDateAsDayjs.utc().format('mm'))

    cy.clickButton('Update Date Range')

    outputShouldBe({
      myDateRange: [updatedStartDateAsString, updatedEndDateAsString]
    })

    const updatedStartDateAsDayjs = dayjs(updatedStartDateAsString)
    const updatedEndDateAsDayjs = dayjs(updatedEndDateAsString)
    cy.get('[aria-label="Jour de début"]').should('have.value', updatedStartDateAsDayjs.utc().format('DD'))
    cy.get('[aria-label="Mois de début"]').should('have.value', updatedStartDateAsDayjs.utc().format('MM'))
    cy.get('[aria-label="Année de début"]').should('have.value', updatedStartDateAsDayjs.utc().format('YYYY'))
    cy.get('[aria-label="Heure de début"]').should('have.value', updatedStartDateAsDayjs.utc().format('HH'))
    cy.get('[aria-label="Minute de début"]').should('have.value', updatedStartDateAsDayjs.utc().format('mm'))
    cy.get('[aria-label="Jour de fin"]').should('have.value', updatedEndDateAsDayjs.utc().format('DD'))
    cy.get('[aria-label="Mois de fin"]').should('have.value', updatedEndDateAsDayjs.utc().format('MM'))
    cy.get('[aria-label="Année de fin"]').should('have.value', updatedEndDateAsDayjs.utc().format('YYYY'))
    cy.get('[aria-label="Heure de fin"]').should('have.value', updatedEndDateAsDayjs.utc().format('HH'))
    cy.get('[aria-label="Minute de fin"]').should('have.value', updatedEndDateAsDayjs.utc().format('mm'))

    cy.clickButton('Reset Date Range')

    outputShouldBe({})
    cy.get('[aria-label="Jour de début"]').should('have.value', '')
    cy.get('[aria-label="Mois de début"]').should('have.value', '')
    cy.get('[aria-label="Année de début"]').should('have.value', '')
    cy.get('[aria-label="Heure de début"]').should('have.value', '')
    cy.get('[aria-label="Minute de début"]').should('have.value', '')
    cy.get('[aria-label="Jour de fin"]').should('have.value', '')
    cy.get('[aria-label="Mois de fin"]').should('have.value', '')
    cy.get('[aria-label="Année de fin"]').should('have.value', '')
    cy.get('[aria-label="Heure de début"]').should('have.value', '')
    cy.get('[aria-label="Minute de début"]').should('have.value', '')
  })
})