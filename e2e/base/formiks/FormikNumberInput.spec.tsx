/* eslint-disable react/destructuring-assignment */

import { Formik } from 'formik'
import noop from 'lodash/noop'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import {
  Button,
  FormikNumberInput,
  FormikEffect,
  type NumberInputProps,
  type FormikNumberInputProps
} from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function Template({
  initialValue,
  updatedValue,
  ...props
}: FormikNumberInputProps & {
  initialValue?: NumberInputProps['value']
  updatedValue: NumberInputProps['value']
}) {
  const [isDisabled, setIsDisabled] = useState(false)
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
        {({ setFieldValue }) => (
          <>
            <FormikEffect onChange={onChange} />

            <FormikNumberInput {...props} disabled={isDisabled} />

            <Button onClick={() => setIsDisabled(true)}>Disable</Button>
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
  const commonProps: NumberInputProps = {
    label: 'A text input',
    name: 'myNumberInput'
  }

  it('Should update and reset the text input value', () => {
    const updatedValue = 1234

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myNumberInput: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and reset the text input value with initial values', () => {
    const initialValue = 123
    const updatedValue = 1234

    mountAndWait(<Template {...commonProps} initialValue={initialValue} updatedValue={updatedValue} />)

    outputShouldBe({
      myNumberInput: initialValue
    })

    cy.clickButton('Update')

    outputShouldBe({
      myNumberInput: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and disable the text input value', () => {
    const updatedValue = 1234

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myNumberInput: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({
      myNumberInput: updatedValue
    })
  })

  it('Should update and disable the text input value with `isUndefinedWhenDisabled`', () => {
    const updatedValue = 1234

    mountAndWait(<Template {...commonProps} isUndefinedWhenDisabled updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myNumberInput: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({})
  })
})
