import { useState } from 'react'

import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Icon, SideMenu } from '../../src'

import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<{}> = {
  title: 'Components/SideMenu',
  component: SideMenu,

  argTypes: {},

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _SideMenu() {
  const [selectedButton, setSelectedButton] = useState('bouton 2')

  return (
    <div style={{ height: '500px' }}>
      <SideMenu>
        <SideMenu.Button
          Icon={Icon.Alert}
          isActive={selectedButton === 'bouton 1'}
          onClick={() => setSelectedButton('bouton 1')}
          title="bouton 1"
        />
        <SideMenu.Button
          Icon={Icon.MissionAction}
          isActive={selectedButton === 'bouton 2'}
          onClick={() => setSelectedButton('bouton 2')}
          title="bouton 2"
        />
        <SideMenu.Button
          Icon={Icon.Vms}
          isActive={selectedButton === 'bouton 3'}
          onClick={() => setSelectedButton('bouton 3')}
          title="bouton 2"
        />
      </SideMenu>
    </div>
  )
}
