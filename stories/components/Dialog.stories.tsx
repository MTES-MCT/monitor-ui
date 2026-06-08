import { noop } from 'lodash-es'

import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Button, DateRangePicker, Dialog } from '../../src'

import type { DialogProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

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
      <Dialog.Title onClose={noop}>Dialog Title</Dialog.Title>
      <Dialog.Body>
        <p>Dialog body with large content</p>
        <DateRangePicker label="Date Range" name="dateRange" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur
          pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
          facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
          urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
          mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
          Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
          tempus orci facilisis id. orem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
          vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
          eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
          sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros,
          eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam
          in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
          interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus
          at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu
          eros, eget tempus orci facilisis id. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, matti
          s ligula consectetur, ultri Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
          ornare leo, non suscipit mag interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
          amet. Pe l lentesque commodo lacu at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod
          erat placer a t. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur
          adipiscin g elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
          ligula cons e ctetur, ultrices mau Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
          auctor ornare leo, n on suscipit ma interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum
          sit amet. Pellentes que commodo l at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod
          erat placerat. In iac ulis arcu eros, eget tempus orci facilisis id. orem ipsum dolor sit amet, consectetur
          adipiscing elit. U t et massa Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
          consectetur, ult rices mauri Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
          ornare leo, non suscip i Maecenas interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
          amet. Pellentesque co m interdum at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod
          erat placerat. In iaculis at eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut et mas s eros, Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
          ligula consectetur, ultrices Aliquam Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
          auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum
          sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel
          euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
        </p>
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
