import { useState } from 'react'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Icon } from '../../src'
import { SideMenu } from '../../src/components/SideMenu'
import { Button } from '../../src/components/SideMenu/Button'

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
        <Button
          Icon={Icon.Alert}
          isSelected={selectedButton === 'bouton 1'}
          onClick={() => setSelectedButton('bouton 1')}
          title="bouton 1"
        />
        <Button
          Icon={Icon.MissionAction}
          isSelected={selectedButton === 'bouton 2'}
          onClick={() => setSelectedButton('bouton 2')}
          title="bouton 2"
        />
        <Button
          Icon={Icon.Vms}
          isSelected={selectedButton === 'bouton 3'}
          onClick={() => setSelectedButton('bouton 3')}
          title="bouton 2"
        />
      </SideMenu>
    </div>
  )
}
