import { Field } from '../../src'

import type { FieldProps } from '../../src'

const args: FieldProps = {}

export default {
  title: 'Elements/Field',
  component: Field,

  argTypes: {},

  args
}

export const _Field = (props: FieldProps) => (
  <Field {...props}>This is a field for form inputs but it's basically a div.</Field>
)
