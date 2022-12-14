import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { noop } from '../../.storybook/utils/noop'
import { FormikEffect, FormikSelect } from '../../src'

import type { FormikSelectProps } from '../../src'

const args: FormikSelectProps = {
  isLabelHidden: false,
  isLight: false,
  label: 'A select',
  name: 'mySelect',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  placeholder: 'Pick an option'
}

export default {
  title: 'Formiks/FormikSelect',
  component: FormikSelect,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _FormikSelect(props: FormikSelectProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        mySelect?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSelect {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
