// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Formik } from 'formik'
import { FormikCheckTreePicker, type FormikCheckTreePickerProps } from 'formiks/FormikCheckTreePicker'
import omit from 'lodash/omit'
import { useMemo, useState } from 'react'
import { action } from 'storybook/actions'

import { Output } from '../../.storybook/components/Output'
import { TAGS } from '../../.storybook/data/tags'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect } from '../../src'
import CheckTreePickerStoryMeta from '../fields/CheckTreePicker.stories'

import type { TreeOption } from '@fields/CheckTreePicker/types'
import type { Meta } from '@storybook/react-vite'

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

export function _FormikCheckTreePicker(props: FormikCheckTreePickerProps) {
  const [outputValue, setOutputValue] = useState<{ myCheckTreePicker?: TreeOption[] }>()

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik
        key={key}
        initialValues={{
          args: {
            isMultiSelect: false
          }
        }}
        onSubmit={action('onSubmit')}
      >
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCheckTreePicker
            {...props}
            isMultiSelect={false}
            options={TAGS(props.childrenKey, props.labelKey, props.valueKey)}
          />
        </>
      </Formik>
      {outputValue && <Output value={outputValue} />}
    </>
  )
}
