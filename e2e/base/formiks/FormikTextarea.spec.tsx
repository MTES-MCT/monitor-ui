/* eslint-disable react/destructuring-assignment */

import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { Button, FormikTextarea, FormikEffect, type TextareaProps, type FormikTextareaProps } from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function Template({
  initialValue,
  updatedValue,
  ...props
}: FormikTextareaProps & {
  initialValue?: TextareaProps['value']
  updatedValue: TextareaProps['value']
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

            <FormikTextarea {...props} disabled={isDisabled} />

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
  const commonProps: TextareaProps = {
    label: 'A text input',
    name: 'myTextarea'
  }

  it('Should update and reset the text input value', () => {
    const updatedValue = 'abcd'

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myTextarea: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and reset the text input value with initial values', () => {
    const initialValue = 'abc'
    const updatedValue = 'abcd'

    mountAndWait(<Template {...commonProps} initialValue={initialValue} updatedValue={updatedValue} />)

    outputShouldBe({
      myTextarea: initialValue
    })

    cy.clickButton('Update')

    outputShouldBe({
      myTextarea: updatedValue
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
      myTextarea: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({
      myTextarea: updatedValue
    })
  })

  it('Should update and disable the text input value with `isUndefinedWhenDisabled`', () => {
    const updatedValue = 'abcd'

    mountAndWait(<Template {...commonProps} isUndefinedWhenDisabled updatedValue={updatedValue} />)

    outputShouldBe({})

    cy.clickButton('Update')

    outputShouldBe({
      myTextarea: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({})
  })
})
