import dayjs from 'dayjs'
import { Formik } from 'formik'
import noop from 'lodash/noop'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { Button, FormikDatePicker, FormikEffect } from '../../../src'
import Meta, { _FormikDatePicker as FormikDatePickerStory } from '../../../stories/formiks/FormikDatePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context('Story', () => {
  beforeEach(() => {
    mountAndWait(
      <StoryBox>
        <FormikDatePickerStory {...(Meta.args as any)} withTime={false} />
      </StoryBox>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date picker', [2021, 12, 31])

    outputShouldBe({
      myDatePicker: '2021-12-31T00:00:00.000Z'
    })

    cy.fill('A date picker', [2024, 3, 4])

    outputShouldBe({
      myDatePicker: '2024-03-04T00:00:00.000Z'
    })

    cy.fill('A date picker', undefined)

    outputShouldBe({})
  })
})

context('Story (`withTime={true}`)', () => {
  beforeEach(() => {
    mountAndWait(
      <StoryBox>
        <FormikDatePickerStory {...(Meta.args as any)} withTime />
      </StoryBox>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date picker', [2021, 12, 31, 4, 56])

    outputShouldBe({
      myDatePicker: '2021-12-31T04:56:00.000Z'
    })

    cy.fill('A date picker', [2024, 3, 4, 23, 18])

    outputShouldBe({
      myDatePicker: '2024-03-04T23:18:00.000Z'
    })

    cy.fill('A date picker', undefined)

    outputShouldBe({})
  })
})

context('Custom (`withTime={true}`)', () => {
  it('Should update the date defaultValue', () => {
    const initialDateAsString = '2021-02-03T12:34:56.000Z'
    const updatedDateAsString = '2023-04-05T21:43:56.000Z'

    function Template() {
      const [outputValue, setOutputValue] = useState({})

      const onChange = nextValues => {
        setOutputValue(nextValues)
      }

      return (
        <StoryBox>
          <Formik
            initialValues={{
              myDatePicker: initialDateAsString
            }}
            onSubmit={noop}
          >
            {({ setFieldValue }) => (
              <>
                <FormikEffect onChange={onChange} />

                <FormikDatePicker isStringDate label="A date picker" name="myDatePicker" withTime />

                <Button onClick={() => setFieldValue('myDatePicker', updatedDateAsString)}>Update Date</Button>
                <Button onClick={() => setFieldValue('myDatePicker', undefined)}>Reset Date</Button>
              </>
            )}
          </Formik>

          <Output value={outputValue} />
        </StoryBox>
      )
    }

    mountAndWait(<Template />)

    outputShouldBe({
      myDatePicker: initialDateAsString
    })

    const initialDateAsDayjs = dayjs(initialDateAsString)
    cy.get('[aria-label="Jour"]').should('have.value', initialDateAsDayjs.utc().format('DD'))
    cy.get('[aria-label="Mois"]').should('have.value', initialDateAsDayjs.utc().format('MM'))
    cy.get('[aria-label="Année"]').should('have.value', initialDateAsDayjs.utc().format('YYYY'))
    cy.get('[aria-label="Heure"]').should('have.value', initialDateAsDayjs.utc().format('HH'))
    cy.get('[aria-label="Minute"]').should('have.value', initialDateAsDayjs.utc().format('mm'))

    cy.clickButton('Update Date')

    outputShouldBe({
      myDatePicker: updatedDateAsString
    })

    const updatedDateAsDayjs = dayjs(updatedDateAsString)
    cy.get('[aria-label="Jour"]').should('have.value', updatedDateAsDayjs.utc().format('DD'))
    cy.get('[aria-label="Mois"]').should('have.value', updatedDateAsDayjs.utc().format('MM'))
    cy.get('[aria-label="Année"]').should('have.value', updatedDateAsDayjs.utc().format('YYYY'))
    cy.get('[aria-label="Heure"]').should('have.value', updatedDateAsDayjs.utc().format('HH'))
    cy.get('[aria-label="Minute"]').should('have.value', updatedDateAsDayjs.utc().format('mm'))

    cy.clickButton('Reset Date')

    outputShouldBe({})
    cy.get('[aria-label="Jour"]').should('have.value', '')
    cy.get('[aria-label="Mois"]').should('have.value', '')
    cy.get('[aria-label="Année"]').should('have.value', '')
    cy.get('[aria-label="Heure"]').should('have.value', '')
    cy.get('[aria-label="Minute"]').should('have.value', '')
  })
})
