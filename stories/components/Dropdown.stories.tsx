// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { Showcase } from '../../.storybook/components/Showcase'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Dropdown, Icon } from '../../src'

import type { DropdownProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<DropdownProps> = {
  ...META_DEFAULTS,

  title: 'Components/Dropdown',
  component: Dropdown,

  argTypes: {
    accent: ARG_TYPE.OPTIONAL_ACCENT,
    Icon: ARG_TYPE.OPTIONAL_ICON,
    title: ARG_TYPE.REACT_NODE
  },

  args: {
    title: 'A dropdow'
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Dropdown(props: DropdownProps) {
  const [outputValue, setOutputValue] = useState<boolean | '∅'>('∅')

  return (
    <>
      <Dropdown {...props} onSelect={setOutputValue}>
        <Dropdown.Item eventKey="FIRST_MENU_ITEM">First menu item</Dropdown.Item>
        <Dropdown.Item eventKey="SECOND_MENU_ITEM">Second menu item</Dropdown.Item>
        <Dropdown.Item eventKey="THIRD_MENU_ITEM">Third menu item</Dropdown.Item>
        <Dropdown.Item eventKey="A_VERY_VERY_LONG_MENU_ITEM">A very very long menu item</Dropdown.Item>
      </Dropdown>

      {outputValue !== '∅' && <Output value={outputValue} />}

      <Showcase>
        <Showcase.Subtitle>With icons</Showcase.Subtitle>

        <Dropdown Icon={Icon.Plus} onSelect={setOutputValue} title="A dropdown with icons">
          <Dropdown.Item Icon={Icon.Fishery} eventKey="WE_FOUND_NEMO">
            We found Nemo!
          </Dropdown.Item>
          <Dropdown.Item Icon={Icon.FleetSegment} eventKey="SECOND_MENU_ITEM">
            A fancy boat
          </Dropdown.Item>
          <Dropdown.Item Icon={Icon.Search} eventKey="THIRD_MENU_ITEM">
            Search a soul
          </Dropdown.Item>
          <Dropdown.Item Icon={Icon.Delete} eventKey="A_VERY_VERY_LONG_MENU_ITEM">
            Delete the entire universe
          </Dropdown.Item>
        </Dropdown>

        <Showcase.Subtitle>With &quot;more&quot; ellipsis</Showcase.Subtitle>
        <Dropdown Icon={Icon.More} accent={Accent.PRIMARY} onSelect={setOutputValue}>
          <Dropdown.Item Icon={Icon.Archive} accent={Accent.SECONDARY} eventKey="ARCHIVE" />
          <Dropdown.Item Icon={Icon.Delete} accent={Accent.SECONDARY} eventKey="DELETE" />
        </Dropdown>
        <br />
        <Dropdown Icon={Icon.More} accent={Accent.SECONDARY} onSelect={setOutputValue}>
          <Dropdown.Item Icon={Icon.Archive} accent={Accent.SECONDARY} eventKey="ARCHIVE" />
          <Dropdown.Item Icon={Icon.Delete} accent={Accent.SECONDARY} eventKey="DELETE" />
        </Dropdown>
        <br />
        <Dropdown Icon={Icon.More} accent={Accent.TERTIARY} onSelect={setOutputValue}>
          <Dropdown.Item Icon={Icon.Archive} accent={Accent.SECONDARY} eventKey="ARCHIVE" />
          <Dropdown.Item Icon={Icon.Delete} accent={Accent.SECONDARY} eventKey="DELETE" />
        </Dropdown>
      </Showcase>
    </>
  )
}
