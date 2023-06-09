import { useState } from 'react'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Icon, SideMenu } from '../../src'

export default {
  title: 'Components/SideMenu',
  component: SideMenu,

  argTypes: {},

  decorators: [generateStoryDecorator()]
}

export function _SideMenu(props) {
  const [selectedButton, setSelectedButton] = useState('bouton 2')

  return (
    <div style={{ height: '500px' }}>
      <SideMenu {...props}>
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
