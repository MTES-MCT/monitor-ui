import dayjs from 'dayjs'
import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
import { Button, FormikDatePicker, FormikEffect } from '../../../src'
import Meta, { _FormikDatePicker as FormikDatePickerStory } from '../../../stories/formiks/FormikDatePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context('Story', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <FormikDatePickerStory {...Meta.args} withTime={false} />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date', [2021, 12, 31])

    outputShouldBe({
      myDate: '2021-12-31T00:00:00.000Z'
    })

    cy.fill('A date', [2024, 3, 4])

    outputShouldBe({
      myDate: '2024-03-04T00:00:00.000Z'
    })

    cy.fill('A date', undefined)

    outputShouldBe({})
  })
})

context('Story (`withTime={true}`)', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <FormikDatePickerStory {...Meta.args} withTime />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date', [2021, 12, 31, 4, 56])

    outputShouldBe({
      myDate: '2021-12-31T04:56:00.000Z'
    })

    cy.fill('A date', [2024, 3, 4, 23, 18])

    outputShouldBe({
      myDate: '2024-03-04T23:18:00.000Z'
    })

    cy.fill('A date', undefined)

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
        <GlobalDecoratorWrapper>
          <Formik
            initialValues={{
              myDate: initialDateAsString
            }}
            onSubmit={noop}
          >
            {({ setFieldValue }) => (
              <>
                <FormikEffect onChange={onChange} />

                <FormikDatePicker isStringDate label="A date" name="myDate" withTime />

                <Button onClick={() => setFieldValue('myDate', updatedDateAsString)}>Update Date</Button>
                <Button onClick={() => setFieldValue('myDate', undefined)}>Reset Date</Button>
              </>
            )}
          </Formik>

          <Output value={outputValue} />
        </GlobalDecoratorWrapper>
      )
    }

    mountAndWait(<Template />)

    outputShouldBe({
      myDate: initialDateAsString
    })

    const initialDateAsDayjs = dayjs(initialDateAsString)
    cy.get('[aria-label="Jour"]').should('have.value', initialDateAsDayjs.utc().format('DD'))
    cy.get('[aria-label="Mois"]').should('have.value', initialDateAsDayjs.utc().format('MM'))
    cy.get('[aria-label="Année"]').should('have.value', initialDateAsDayjs.utc().format('YYYY'))
    cy.get('[aria-label="Heure"]').should('have.value', initialDateAsDayjs.utc().format('HH'))
    cy.get('[aria-label="Minute"]').should('have.value', initialDateAsDayjs.utc().format('mm'))

    cy.clickButton('Update Date')

    outputShouldBe({
      myDate: updatedDateAsString
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
