import { noop } from 'lodash/fp'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, Button, Dialog } from '../../src'

import type { DialogProps } from '../../src'

const args: DialogProps = {
  isAbsolute: false
}

export default {
  title: 'Components/Dialog',
  component: Dialog,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export function _Dialog(props: DialogProps) {
  return (
    <Dialog {...props}>
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Body>
        <p>Dialog body.</p>
      </Dialog.Body>

      <Dialog.Action>
        <Button accent={Accent.TERTIARY} onClick={noop}>
          Cancel
        </Button>
        <Button accent={Accent.PRIMARY} onClick={noop}>
          Confirm
        </Button>
      </Dialog.Action>
    </Dialog>
  )
}
