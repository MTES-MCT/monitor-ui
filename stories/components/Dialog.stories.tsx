import { noop } from 'lodash'

import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Button, Dialog } from '../../src'

import type { DialogProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<DialogProps> = {
  ...META_DEFAULTS,

  title: 'Components/Dialog',
  component: Dialog,

  argTypes: {
    isAbsolute: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    isAbsolute: false
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Dialog(props: DialogProps) {
  return (
    <Dialog {...props}>
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Body>
        <p>Dialog body.</p>
      </Dialog.Body>

      <Dialog.Action>
        <Button accent={Accent.SECONDARY} onClick={noop}>
          Cancel
        </Button>
        <Button accent={Accent.PRIMARY} onClick={noop}>
          Confirm
        </Button>
      </Dialog.Action>
    </Dialog>
  )
}
