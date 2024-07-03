/* eslint-disable react/destructuring-assignment */

import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { Button, FormikEffect, FormikPhoneInput, type FormikPhoneInputProps, type PhoneInputProps } from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function Template({
  initialValue,
  updatedValue,
  ...props
}: FormikPhoneInputProps & {
  initialValue?: PhoneInputProps['value']
  updatedValue: PhoneInputProps['value']
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

            <FormikPhoneInput {...props} disabled={isDisabled} />

            <Button onClick={() => setIsDisabled(true)}>Disable</Button>
            <Button onClick={() => setFieldValue(props.name, updatedValue)}>Update</Button>
            <Button onClick={() => setFieldValue(props.name, '')}>Reset</Button>
          </>
        )}
      </Formik>

      <Output value={outputValue} />
    </StoryBox>
  )
}

context('Template', () => {
  const commonProps: PhoneInputProps = {
    label: 'A phone input',
    name: 'myPhoneInput',
    onChange: noop,
    value: undefined
  }

  it('Should update and reset the phone input value', () => {
    const updatedValue = '0123456789'

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myPhoneInput: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and reset the phone input value with initial values', () => {
    const initialValue = '01'
    const updatedValue = '0123456789'

    mountAndWait(<Template {...commonProps} initialValue={initialValue} updatedValue={updatedValue} />)

    outputShouldBe({
      myPhoneInput: initialValue
    })

    cy.clickButton('Update')

    outputShouldBe({
      myPhoneInput: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and disable the phone input value', () => {
    const updatedValue = '0123456789'

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myPhoneInput: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({
      myPhoneInput: updatedValue
    })
  })

  it('Should update and disable the phone input value with `isUndefinedWhenDisabled`', () => {
    const updatedValue = '0123456789'

    mountAndWait(<Template {...commonProps} isUndefinedWhenDisabled updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myPhoneInput: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({})
  })
})
