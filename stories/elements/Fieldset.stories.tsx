import { ARG_TYPE } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Fieldset } from '../../src'

import type { FieldsetProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FieldsetProps = {
  disabled: false,
  hasBorder: false,
  isLegendHidden: false,
  isLight: false,
  isRequired: false,
  legend: 'A fieldset legend'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FieldsetProps> = {
  title: 'Elements/Fieldset',
  component: Fieldset,

  argTypes: {
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args,

  decorators: [
    generateStoryDecorator({
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

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
