import { action } from '@storybook/addon-actions'
import { Formik } from 'formik'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikMultiCascader } from '../../src'
import MultiCascaderStoryMeta from '../fields/MultiCascader.stories'

import type { FormikMultiCascaderProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikMultiCascaderProps<string>> = {
  title: 'Formiks/FormikMultiCascader',
  component: FormikMultiCascader,

  argTypes: omit(MultiCascaderStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit(MultiCascaderStoryMeta.args, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikMultiCascader(props: FormikMultiCascaderProps<string>) {
  const [outputValue, setOutputValue] = useState<{ myMultiCascader?: string[] } | '∅'>('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiCascader {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
