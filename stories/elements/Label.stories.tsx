import { Label } from '../../src'

import type { LabelProps } from '../../src'

const args: LabelProps = {
  children: 'A form input label',
  isHidden: false
}

export default {
  title: 'Elements/Label',
  component: Label,

  argTypes: {},

  args
}

export const _Label = (props: LabelProps) => <Label {...props} />
