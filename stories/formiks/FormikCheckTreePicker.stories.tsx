// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { action } from '@storybook/addon-actions'
import { Formik } from 'formik'
import { FormikCheckTreePicker, type FormikCheckTreePickerProps } from 'formiks/FormikCheckTreePicker'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect } from '../../src'
import CheckTreePickerStoryMeta from '../fields/CheckTreePicker.stories'

import type { FormikCheckPickerProps } from '../../src'
import type { TreeOption } from '@fields/CheckTreePicker/types'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikCheckTreePickerProps> = {
  title: 'Formiks/FormikCheckTreePicker',
  component: FormikCheckTreePicker as any,

  argTypes: omit(CheckTreePickerStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit(CheckTreePickerStoryMeta.args, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikCheckTreePicker(props: FormikCheckPickerProps) {
  const [outputValue, setOutputValue] = useState<{ myCheckTreePicker?: TreeOption[] }>()

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCheckTreePicker {...props} />
        </>
      </Formik>

      {outputValue && <Output value={outputValue} />}
    </>
  )
}
