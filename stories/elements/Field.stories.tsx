import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Field } from '../../src'

import type { FieldProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FieldProps = {}

const meta: Meta<FieldProps> = {
  title: 'Elements/Field',
  component: Field,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _Field(props: FieldProps) {
  return <Field {...props}>This is a field for form inputs but it’s basically a div.</Field>
}
