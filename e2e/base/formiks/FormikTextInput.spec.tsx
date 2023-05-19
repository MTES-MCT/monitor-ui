/* eslint-disable react/destructuring-assignment */

import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
import { Button, FormikTextInput, FormikEffect, type TextInputProps, type FormikTextInputProps } from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function Template({
  initialValue,
  updatedValue,
  ...props
}: FormikTextInputProps & {
  initialValue?: TextInputProps['value']
  updatedValue: TextInputProps['value']
}) {
  const [isDisabled, setIsDisabled] = useState(false)
  const [outputValue, setOutputValue] = useState({})

  const onChange = nextValues => {
    setOutputValue(nextValues)
  }

  return (
    <GlobalDecoratorWrapper>
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

            <FormikTextInput {...props} disabled={isDisabled} />

            <Button onClick={() => setIsDisabled(true)}>Disable</Button>
            <Button onClick={() => setFieldValue(props.name, updatedValue)}>Update</Button>
            <Button onClick={() => setFieldValue(props.name, undefined)}>Reset</Button>
          </>
        )}
      </Formik>

      <Output value={outputValue} />
    </GlobalDecoratorWrapper>
  )
}

context('Template', () => {
  const commonProps: TextInputProps = {
    label: 'A text input',
    name: 'myTextInput'
  }

  it('Should update and reset the text input value', () => {
    const updatedValue = 'abcd'

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myTextInput: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and reset the text input value with initial values', () => {
    const initialValue = 'abc'
    const updatedValue = 'abcd'

    mountAndWait(<Template {...commonProps} initialValue={initialValue} updatedValue={updatedValue} />)

    outputShouldBe({
      myTextInput: initialValue
    })

    cy.clickButton('Update')

    outputShouldBe({
      myTextInput: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and disable the text input value', () => {
    const updatedValue = 'abcd'

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myTextInput: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({
      myTextInput: updatedValue
    })
  })

  it('Should update and disable the text input value with `isUndefinedWhenDisabled`', () => {
    const updatedValue = 'abcd'

    mountAndWait(<Template {...commonProps} isUndefinedWhenDisabled updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myTextInput: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({})
  })
})
