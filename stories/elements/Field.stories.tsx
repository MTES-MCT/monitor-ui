import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Field } from '../../src'

import type { FieldProps } from '../../src'

const args: FieldProps = {}

export default {
  title: 'Elements/Field',
  component: Field,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export function _Field(props: FieldProps) {
  return <Field {...props}>This is a field for form inputs but it’s basically a div.</Field>
}
