import styled from 'styled-components'

import { generateStoryDecorator } from '../.storybook/components/StoryDecorator'
import { THEME } from '../src'

import type { Meta } from '@storybook/react'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ColorSample = styled.div`
  width: 120px;
  height: 120px;
  margin: 5px;
  display: inline-block;
  background-color: ${props => props.color};
  border: 1px solid black;
  > span {
    color: white;
    filter: drop-shadow(1px 1px 0px black);
  }
`

const meta: Meta<typeof ColorSample> = {
  title: 'Colors',
  component: ColorSample,
  decorators: [generateStoryDecorator()]
}

export default meta

export function _Colors() {
  return (
    <Wrapper>
      {Object.entries(THEME.color).map(([key, value]) => {
        if (typeof value === 'object') {
          return Object.entries(value).map(([key2, value2]) => (
            <ColorSample key={key2} color={value2}>
              <span>
                {key}.{key2} <br /> {value2}
              </span>
            </ColorSample>
          ))
        }

        return (
          <ColorSample key={key} color={value}>
            <span>
              {key} <br /> {value}
            </span>
          </ColorSample>
        )
      })}
    </Wrapper>
  )
}
