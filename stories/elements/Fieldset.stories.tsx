import { Fieldset } from '../../src'

import type { FieldsetProps } from '../../src'

const args: FieldsetProps = {
  isLight: false,
  isMulti: false
}

export default {
  title: 'Elements/Fieldset',
  component: Fieldset,

  argTypes: {},

  args
}

export function _Fieldset(props: FieldsetProps) {
  return (
    <Fieldset {...props}>
      This is am HTML {'<fieldset>'} for form inputs. It should contain a {'<Legend>'} element.
    </Fieldset>
  )
}
