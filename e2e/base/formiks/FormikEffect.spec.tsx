/* eslint-disable react/destructuring-assignment */

import { Formik, type FormikConfig } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'
import * as yup from 'yup'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { FormikEffect, type FormikTextInputProps, FormikTextInput } from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function Template({
  formikProps,
  textInputProps
}: {
  formikProps: FormikConfig<any>
  textInputProps: FormikTextInputProps
}) {
  const [outputError, setOutputError] = useState({})
  const [outputValue, setOutputValue] = useState({})

  return (
    <StoryBox>
      <Formik {...formikProps}>
        {() => (
          <>
            <FormikEffect onChange={setOutputValue} onError={setOutputError} />

            <FormikTextInput {...textInputProps} />
          </>
        )}
      </Formik>

      <Output value={outputValue} />
      <Output label="Error" value={outputError} />
    </StoryBox>
  )
}

context('Template', () => {
  it('Should update and reset the text input value', () => {
    const validationSchema = yup.object({
      myTextInput: yup.string().min(3, 'The text input must include at least 3 characters.')
    })

    mountAndWait(
      <Template
        formikProps={{
          initialValues: {},
          onSubmit: noop,
          validationSchema
        }}
        textInputProps={{
          label: 'A text input',
          name: 'myTextInput'
        }}
      />
    )

    outputShouldBe({})
    outputShouldBe({}, 'Error')

    cy.fill('A text input', 'ab')

    outputShouldBe({
      myTextInput: 'ab'
    })
    outputShouldBe(
      {
        myTextInput: 'The text input must include at least 3 characters.'
      },
      'Error'
    )

    cy.fill('A text input', 'abc')

    outputShouldBe({
      myTextInput: 'abc'
    })
    outputShouldBe({}, 'Error')
  })
})
