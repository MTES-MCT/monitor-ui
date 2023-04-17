/* eslint-disable react/destructuring-assignment */

import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
import { Button, FormikNumberInput, FormikEffect, NumberInputProps, FormikNumberInputProps } from '../../../src'
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

            <FormikNumberInput {...props} disabled={isDisabled} />

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
