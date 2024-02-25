import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Field } from '../../src'

import type { FieldProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FieldProps = {}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FieldProps> = {
  title: 'Elements/Field',
  component: Field,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Field(props: FieldProps) {
  return <Field {...props}>This is a field for form inputs but it’s basically a div.</Field>
}
