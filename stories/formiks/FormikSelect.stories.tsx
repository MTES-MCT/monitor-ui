// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { action } from '@storybook/addon-actions'
import { Formik } from 'formik'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikSelect } from '../../src'
import SelectStoryMeta from '../fields/Select.stories'

import type { FormikSelectProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikSelectProps> = {
  title: 'Formiks/FormikSelect',
  component: FormikSelect,

  argTypes: omit(SelectStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit(SelectStoryMeta.args, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

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
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSelect {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
