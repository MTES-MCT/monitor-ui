import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikCoordinatesInput, CoordinatesFormat } from '../../src'
import { noop } from '../../src/utils/noop'

import type { FormikCoordinatesInputProps } from '../../src'

const args: FormikCoordinatesInputProps = {
  coordinatesFormat: CoordinatesFormat.DECIMAL_DEGREES,
  isLight: false,
  label: 'Some coordinates',
  name: 'myCoordinates'
}

export default {
  title: 'Formiks/FormikCoordinatesInput',
  component: FormikCoordinatesInput,
  args,

  argTypes: {
    accent: {
      control: 'inline-radio',
      options: CoordinatesFormat
    }
  },

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _FormikCoordinatesInput(props: FormikCoordinatesInputProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myCoordinates?: number[]
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCoordinatesInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
