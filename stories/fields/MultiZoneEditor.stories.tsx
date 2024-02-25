import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { MultiZoneEditor } from '../../src'

import type { MultiZoneEditorProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiZoneEditorProps> = {
  ...META_DEFAULTS,

  title: 'Fields/MultiZoneEditor',
  component: MultiZoneEditor,

  argTypes: {
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    addButtonLabel: 'Add a zone',
    defaultValue: undefined,
    disabled: false,
    error: '',
    initialZone: {
      name: 'Polygone dessiné'
    },
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
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

export function _MultiZoneEditor(props: MultiZoneEditorProps) {
  const [outputValue, setOutputValue] = useState<Record<string, any>[] | undefined | '∅'>('∅')

  return (
    <>
      <MultiZoneEditor {...props} onAdd={setOutputValue} onChange={setOutputValue} onDelete={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
