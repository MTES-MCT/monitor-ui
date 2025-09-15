// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Formik } from 'formik'
import { omit } from 'lodash-es'
import { useMemo, useState } from 'react'
import { action } from 'storybook/actions'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikSearch } from '../../src'
import SearchStoryMeta from '../fields/Search.stories'

import type { FormikSearchProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikSearchProps> = {
  title: 'Formiks/FormikSearch',
  component: FormikSearch,

  argTypes: omit(SearchStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit(SearchStoryMeta.args, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikSearch(props: FormikSearchProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        mySearch?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSearch {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
