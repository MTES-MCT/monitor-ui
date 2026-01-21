// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../../.storybook/constants'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { MultiLocationEditor } from '../../../src'

import type { MultiLocationEditorProps } from '../../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiLocationEditorProps> = {
  ...META_DEFAULTS,

  title: 'Fields/MultiLocationEditor/EditOnlyLocationEditor',
  component: MultiLocationEditor,

  argTypes: {
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    defaultValue: [{ name: 'Polygon 1' }, { name: 'Point 1' }, { name: 'Polygon 2' }],
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'Some zones',
    labelPropName: 'name',
    readOnly: false
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _EditOnlyLocationEditor(props: MultiLocationEditorProps) {
  const [outputValue, setOutputValue] = useState<Record<string, any>[] | undefined | '∅'>(props.defaultValue)

  return (
    <>
      <MultiLocationEditor {...props} onChange={setOutputValue} onDelete={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
