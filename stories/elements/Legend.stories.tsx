import { ARG_TYPE } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Legend } from '../../src'

import type { LegendProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: LegendProps = {
  $disabled: false,
  $isHidden: false,
  $isRequired: false,
  children: 'A form fieldset legend'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<LegendProps> = {
  title: 'Elements/Legend',
  component: Legend,

  argTypes: {
    $isRequired: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Legend(props: LegendProps) {
  return <Legend {...props} />
}
