/* eslint-disable react/destructuring-assignment */

import { Formik } from 'formik'
import noop from 'lodash/noop'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import {
  Button,
  CoordinatesFormat,
  FormikCoordinatesInput,
  FormikEffect,
  type CoordinatesInputProps,
  type FormikCoordinatesInputProps
} from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function Template({
  initialValue,
  updatedValue,
  ...props
}: FormikCoordinatesInputProps & {
  initialValue?: FormikCoordinatesInputProps['defaultValue']
  updatedValue: FormikCoordinatesInputProps['defaultValue']
}) {
  const [outputValue, setOutputValue] = useState({})

  const onChange = nextValues => {
    setOutputValue(nextValues)
  }

  return (
    <StoryBox>
      <Formik
        initialValues={
          initialValue
            ? {
                [props.name]: initialValue
              }
            : {}
        }
        onSubmit={noop}
      >
        {({ setFieldValue, values }) => (
          <>
            <FormikEffect onChange={onChange} />

            <FormikCoordinatesInput {...props} defaultValue={values.myCoordinatesInput} />

            <Button onClick={() => setFieldValue(props.name, updatedValue)}>Update</Button>
            <Button onClick={() => setFieldValue(props.name, undefined)}>Reset</Button>
          </>
        )}
      </Formik>

      <Output value={outputValue} />
    </StoryBox>
  )
}

context('Template', () => {
  const commonProps: CoordinatesInputProps = {
    coordinatesFormat: CoordinatesFormat.DECIMAL_DEGREES,
    label: 'A coordinates input',
    name: 'myCoordinatesInput'
  }

  it('Should update and reset the coordinates input value', () => {
    const updatedValue = [4.1234, -7.1234] as [number, number]

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    cy.getDataCy('coordinates-dd-input-lat').should('have.value', '4.1234')
    cy.getDataCy('coordinates-dd-input-lon').should('have.value', '-7.1234')

    cy.clickButton('Reset')
  })

  it('Should update and reset the text input value with initial values', () => {
    const initialValue = [4.1234, -7.1234] as [number, number]
    const updatedValue = [8.4567, -1.0987] as [number, number]

    mountAndWait(<Template {...commonProps} initialValue={initialValue} updatedValue={updatedValue} />)

    outputShouldBe({
      myCoordinatesInput: initialValue
    })

    cy.clickButton('Update')
    cy.getDataCy('coordinates-dd-input-lat').should('have.value', '8.4567')
    cy.getDataCy('coordinates-dd-input-lon').should('have.value', '-1.0987')

    cy.clickButton('Reset')
  })
})
