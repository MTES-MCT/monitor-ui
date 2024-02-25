import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { ExclamationPoint, THEME } from '../../src'

import type { ExclamationPointProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: ExclamationPointProps = {
  backgroundColor: THEME.color.goldenPoppy,
  color: THEME.color.white
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<ExclamationPointProps> = {
  title: 'Symbols/ExclamationPoint',
  component: ExclamationPoint,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _ExclamationPoint(props: ExclamationPointProps) {
  return <ExclamationPoint {...props} />
}
