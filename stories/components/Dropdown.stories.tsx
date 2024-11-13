// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { Showcase } from '../../.storybook/components/Showcase'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Dropdown, Icon } from '../../src'

import type { DropdownProps } from '../../src'
import type { Meta } from '@storybook/react'

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
          <Dropdown.Item eventKey="WE_FOUND_NEMO" Icon={Icon.Fishery}>
            We found Nemo!
          </Dropdown.Item>
          <Dropdown.Item eventKey="SECOND_MENU_ITEM" Icon={Icon.FleetSegment}>
            A fancy boat
          </Dropdown.Item>
          <Dropdown.Item eventKey="THIRD_MENU_ITEM" Icon={Icon.Search}>
            Search a soul
          </Dropdown.Item>
          <Dropdown.Item eventKey="A_VERY_VERY_LONG_MENU_ITEM" Icon={Icon.Delete}>
            Delete the entire universe
          </Dropdown.Item>
        </Dropdown>

        <Showcase.Subtitle>With &quot;more&quot; ellipsis</Showcase.Subtitle>
        <Dropdown accent={Accent.PRIMARY} Icon={Icon.More} onSelect={setOutputValue}>
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="ARCHIVE" Icon={Icon.Archive} />
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="DELETE" Icon={Icon.Delete} />
        </Dropdown>
        <br />
        <Dropdown accent={Accent.SECONDARY} Icon={Icon.More} onSelect={setOutputValue}>
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="ARCHIVE" Icon={Icon.Archive} />
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="DELETE" Icon={Icon.Delete} />
        </Dropdown>
        <br />
        <Dropdown accent={Accent.TERTIARY} Icon={Icon.More} onSelect={setOutputValue}>
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="ARCHIVE" Icon={Icon.Archive} />
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="DELETE" Icon={Icon.Delete} />
        </Dropdown>
      </Showcase>
    </>
  )
}
