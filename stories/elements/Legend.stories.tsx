import { Legend } from '../../src'

import type { LegendProps } from '../../src'

const args: LegendProps = {
  children: 'A form fieldset legend',
  isHidden: false
}

export default {
  title: 'Elements/Legend',
  component: Legend,

  argTypes: {},

  args
}

export const _Legend = (props: LegendProps) => <Legend {...props} />
