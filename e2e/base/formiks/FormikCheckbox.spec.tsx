/* eslint-disable react/destructuring-assignment */

import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
import { Button, FormikCheckbox, FormikEffect, CheckboxProps, FormikCheckboxProps } from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function Template({
  firstUpdatedValue,
  initialValue,
  secondUpdatedValue,
  updatedName,
  ...props
}: FormikCheckboxProps & {
  firstUpdatedValue: boolean
  initialValue?: boolean
  secondUpdatedValue?: boolean
  updatedName?: string
}) {
  const [isDisabled, setIsDisabled] = useState(false)
  const [outputValue, setOutputValue] = useState({})
  const [name, setName] = useState(props.name)

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

            <FormikCheckbox {...props} disabled={isDisabled} name={name} />

            <Button onClick={() => setIsDisabled(true)}>Disable</Button>
            <Button onClick={() => setFieldValue(name, firstUpdatedValue)}>First Update</Button>
            <Button onClick={() => setFieldValue(name, secondUpdatedValue)}>Second Update</Button>
            <Button onClick={() => setFieldValue(name, undefined)}>Reset</Button>
            <Button onClick={() => setName(String(updatedName))}>Update Name</Button>
          </>
        )}
      </Formik>

      <Output value={outputValue} />
    </GlobalDecoratorWrapper>
  )
}

context('Template', () => {
  const commonProps: CheckboxProps = {
    label: 'A text input',
    name: 'myCheckbox'
  }

  it('Should update and reset the text input value', () => {
    const firstUpdatedValue = true

    mountAndWait(<Template {...commonProps} firstUpdatedValue={firstUpdatedValue} />)

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('First Update')

    outputShouldBe({
      myCheckbox: firstUpdatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and reset the text input value with initial values', () => {
    const initialValue = false
    const firstUpdatedValue = true

    mountAndWait(<Template {...commonProps} firstUpdatedValue={firstUpdatedValue} initialValue={initialValue} />)

    outputShouldBe({
      myCheckbox: initialValue
    })

    cy.clickButton('First Update')

    outputShouldBe({
      myCheckbox: firstUpdatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and disable the text input value', () => {
    const firstUpdatedValue = true

    mountAndWait(<Template {...commonProps} firstUpdatedValue={firstUpdatedValue} />)

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('First Update')

    outputShouldBe({
      myCheckbox: firstUpdatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({
      myCheckbox: firstUpdatedValue
    })
  })

  it('Should update and disable the text input value with `isUndefinedWhenDisabled`', () => {
    const firstUpdatedValue = true

    mountAndWait(<Template {...commonProps} firstUpdatedValue={firstUpdatedValue} isUndefinedWhenDisabled />)

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('First Update')

    outputShouldBe({
      myCheckbox: firstUpdatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({})
  })

  it('Should update the text input value with a new `name`', () => {
    const updatedName = 'myCheckbox2'
    const firstUpdatedValue = true
    const secondUpdatedValue = false

    mountAndWait(
      <Template
        {...commonProps}
        firstUpdatedValue={firstUpdatedValue}
        secondUpdatedValue={secondUpdatedValue}
        updatedName={updatedName}
      />
    )

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('First Update')

    outputShouldBe({
      myCheckbox: firstUpdatedValue
    })

    cy.clickButton('Update Name')

    outputShouldBe({
      myCheckbox2: firstUpdatedValue
    })

    cy.clickButton('Second Update')

    outputShouldBe({
      myCheckbox2: secondUpdatedValue
    })
  })
})
