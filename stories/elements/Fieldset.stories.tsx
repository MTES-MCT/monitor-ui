import { Fieldset } from '../../src'

import type { FieldsetProps } from '../../src'

const args: FieldsetProps = {}

export default {
  title: 'Elements/Fieldset',
  component: Fieldset,

  argTypes: {},

  args
}

export const _Fieldset = (props: FieldsetProps) => (
  <Fieldset {...props}>
    This is am HTML {'<fieldset>'} for form inputs. It should contain a {'<Legend>'} element.
  </Fieldset>
)
