import { useState } from 'react'
import styled from 'styled-components'

import { Dropdown, Icon } from '../../src'
import { Output } from '../_components/Output'

import type { DropdownProps } from '../../src'

const args: DropdownProps = {
  title: 'A dropdow menu'
}

export default {
  title: 'Components/Dropdown',
  component: Dropdown,

  argTypes: {},

  args
}

export function _Dropdown(props: DropdownProps) {
  const [outputValue, setOutputValue] = useState<boolean | '∅'>('∅')

  return (
    <Box>
      <Dropdown open {...props} onSelect={setOutputValue}>
        <Dropdown.Item eventKey="FIRST_MENU_ITEM">First menu item</Dropdown.Item>
        <Dropdown.Item eventKey="SECOND_MENU_ITEM">Second menu item</Dropdown.Item>
        <Dropdown.Item eventKey="THIRD_MENU_ITEM">Third menu item</Dropdown.Item>
        <Dropdown.Item eventKey="A_VERY_VERY_LONG_MENU_ITEM">A very very long menu item</Dropdown.Item>
      </Dropdown>

      <Dropdown Icon={Icon.Plus} onSelect={setOutputValue} open title="A dropdown menu with icons">
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

      {outputValue !== '∅' && <Output value={outputValue} />}
    </Box>
  )
}

const Box = styled.div`
  > div:nth-child(2) {
    margin-left: 5rem;
  }
`
