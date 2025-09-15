import dayjs from 'dayjs'
import { Formik } from 'formik'
import { noop } from 'lodash-es'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { Button, FormikDateRangePicker, FormikEffect } from '../../../src'
import Meta, {
  _FormikDateRangePicker as FormikDateRangePickerStory
} from '../../../stories/formiks/FormikDateRangePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context('Story', () => {
  beforeEach(() => {
    mountAndWait(
      <StoryBox>
        <FormikDateRangePickerStory {...(Meta.args as any)} withTime={false} />
      </StoryBox>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.fill('A date range picker', [
      [2021, 11, 20],
      [2021, 12, 31]
    ])

    outputShouldBe({
      myDateRangePicker: ['2021-11-20T00:00:00.000Z', '2021-12-31T23:59:59.000Z']
    })

    cy.fill('A date range picker', [
      [2022, 3, 4],
      [2024, 11, 30]
    ])

    outputShouldBe({
      myDateRangePicker: ['2022-03-04T00:00:00.000Z', '2024-11-30T23:59:59.000Z']
    })

    cy.fill('A date range picker', undefined)

    outputShouldBe({})
  })
})

context('Story (`withTime={true}`)', () => {
  beforeEach(() => {
    mountAndWait(
      <StoryBox>
        <FormikDateRangePickerStory {...(Meta.args as any)} withTime />
      </StoryBox>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.fill('A date range picker', [
      [2021, 11, 20, 23, 35],
      [2021, 12, 31, 4, 56]
    ])

    outputShouldBe({
      myDateRangePicker: ['2021-11-20T23:35:00.000Z', '2021-12-31T04:56:59.000Z']
    })

    cy.fill('A date range picker', [
      [2022, 3, 4, 7, 24],
      [2024, 11, 30, 17, 42]
    ])

    outputShouldBe({
      myDateRangePicker: ['2022-03-04T07:24:00.000Z', '2024-11-30T17:42:59.000Z']
    })

    cy.fill('A date range picker', undefined)

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
        <StoryBox>
          <Formik
            initialValues={{
              myDateRangePicker: [initialStartDateAsString, initialEndDateAsString]
            }}
            onSubmit={noop}
          >
            {({ setFieldValue }) => (
              <>
                <FormikEffect onChange={onChange} />

                <FormikDateRangePicker isStringDate label="A date range picker" name="myDateRangePicker" withTime />

                <Button
                  onClick={() => setFieldValue('myDateRangePicker', [updatedStartDateAsString, updatedEndDateAsString])}
                >
                  Update Date Range
                </Button>
                <Button onClick={() => setFieldValue('myDateRangePicker', undefined)}>Reset Date Range</Button>
              </>
            )}
          </Formik>

          <Output value={outputValue} />
        </StoryBox>
      )
    }

    mountAndWait(<Template />)

    outputShouldBe({
      myDateRangePicker: [initialStartDateAsString, initialEndDateAsString]
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
      myDateRangePicker: [updatedStartDateAsString, updatedEndDateAsString]
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
