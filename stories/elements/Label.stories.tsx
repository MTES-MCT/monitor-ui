import { ARG_TYPE } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Label } from '../../src'

import type { LabelProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

const args: LabelProps = {
  $isDisabled: false,
  $isHidden: false,
  $isRequired: false,
  children: 'A form input label'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<LabelProps> = {
  title: 'Elements/Label',
  component: Label,

  argTypes: {
    $isRequired: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Label(props: LabelProps) {
  return <Label {...props} />
}
