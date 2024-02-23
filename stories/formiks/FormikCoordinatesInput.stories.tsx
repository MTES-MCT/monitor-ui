import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikCoordinatesInput, CoordinatesFormat } from '../../src'

import type { FormikCoordinatesInputProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FormikCoordinatesInputProps = {
  coordinatesFormat: CoordinatesFormat.DECIMAL_DEGREES,
  isLight: false,
  label: 'Some coordinates',
  name: 'myCoordinates'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikCoordinatesInputProps> = {
  title: 'Formiks/FormikCoordinatesInput',
  component: FormikCoordinatesInput,

  argTypes: {
    coordinatesFormat: {
      control: 'inline-radio',
      options: CoordinatesFormat
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasLightMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

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
