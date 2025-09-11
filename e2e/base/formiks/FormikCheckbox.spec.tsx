/* eslint-disable react/destructuring-assignment */

import { Formik } from 'formik'
import noop from 'lodash/noop'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { Button, FormikCheckbox, FormikEffect, type CheckboxProps, type FormikCheckboxProps } from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function Template({
  initialValue,
  updatedValue,
  ...props
}: FormikCheckboxProps & {
  initialValue?: boolean
  updatedValue: boolean
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

            <FormikCheckbox {...props} disabled={isDisabled} />

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
  const commonProps: CheckboxProps = {
    label: 'A checkbox',
    name: 'myCheckbox'
  }

  it('Should update and reset the checkbox value', () => {
    const updatedValue = true

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('Update')

    outputShouldBe({
      myCheckbox: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and reset the checkbox value with initial values', () => {
    const initialValue = false
    const updatedValue = true

    mountAndWait(<Template {...commonProps} initialValue={initialValue} updatedValue={updatedValue} />)

    outputShouldBe({
      myCheckbox: initialValue
    })

    cy.clickButton('Update')

    outputShouldBe({
      myCheckbox: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and disable the checkbox value', () => {
    const updatedValue = true

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('Update')

    outputShouldBe({
      myCheckbox: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({
      myCheckbox: updatedValue
    })
  })

  it('Should update and disable the checkbox value with `isUndefinedWhenDisabled`', () => {
    const updatedValue = true

    mountAndWait(<Template {...commonProps} isUndefinedWhenDisabled updatedValue={updatedValue} />)

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('Update')

    outputShouldBe({
      myCheckbox: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({})
  })
})
