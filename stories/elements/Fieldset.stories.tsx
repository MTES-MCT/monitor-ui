import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Fieldset } from '../../src'

import type { FieldsetProps } from '../../src'

const args: FieldsetProps = {
  disabled: false,
  hasBorder: false,
  isLegendHidden: false,
  isLight: false,
  legend: 'A fieldset legend'
}

export default {
  title: 'Elements/Fieldset',
  component: Fieldset,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _Fieldset(props: FieldsetProps) {
  return (
    <Fieldset {...props}>
      <p>
        This is am HTML <code>{'<fieldset />'}</code> for form inputs. It should contain multiple fields (inputs).
      </p>
      <p>
        If the <code>legend</code> prop is not set, this field should contain a <code>{'<Legend />'}</code>.<br />
        This <code>{'<Legend />'}</code> will then appear inside the box rather than outside it.
      </p>
    </Fieldset>
  )
}
