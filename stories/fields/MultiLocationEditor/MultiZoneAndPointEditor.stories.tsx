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

  title: 'Fields/MultiLocationEditor/MultiZoneAndPointEditor',
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
    pointOptions: {
      buttonLabel: 'Add a point',
      initialValue: {
        name: 'Point placé'
      }
    },
    zoneOptions: {
      buttonLabel: 'Add a zone',
      initialValue: {
        name: 'Polygone dessiné'
      }
    },
    defaultValue: undefined,
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'Some zones and points',
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

export function _MultiZoneAndPointEditor(props: MultiLocationEditorProps) {
  const [outputValue, setOutputValue] = useState<Record<string, any>[] | undefined | '∅'>('∅')

  return (
    <>
      <MultiLocationEditor
        {...props}
        onChange={setOutputValue}
        onDelete={setOutputValue}
        pointOptions={
          props.pointOptions
            ? {
                ...props.pointOptions,
                onAdd: setOutputValue
              }
            : undefined
        }
        zoneOptions={
          props.zoneOptions
            ? {
                ...props.zoneOptions,
                onAdd: setOutputValue
              }
            : undefined
        }
      />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
