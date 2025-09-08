import { ARG_TYPE } from '../../../.storybook/constants'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { FingerprintLoader, THEME, type LoaderProps } from '../../../src'

import type { Meta } from '@storybook/react-vite'

const args: LoaderProps = {}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<LoaderProps> = {
  title: 'Elements/Loader/FingerprintLoader',
  component: FingerprintLoader,

  argTypes: {
    animationDuration: ARG_TYPE.OPTIONAL_NUMBER,
    className: ARG_TYPE.OPTIONAL_STRING,
    color: ARG_TYPE.OPTIONAL_COLOR,
    size: ARG_TYPE.OPTIONAL_NUMBER,
    style: { control: 'object' }
  },

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _FingerprintLoader(props: LoaderProps) {
  return (
    <div style={{ backgroundColor: THEME.color.gunMetal, padding: '20px', width: '150px' }}>
      <FingerprintLoader {...props} />
    </div>
  )
}
