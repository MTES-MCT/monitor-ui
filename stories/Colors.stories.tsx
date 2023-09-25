import styled from 'styled-components'

import { generateStoryDecorator } from '../.storybook/components/StoryDecorator'
import { THEME } from '../src'

import type { Meta } from '@storybook/react'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 16px;
  border: ${p => `1px solid ${p.theme.color.lightGray}`};
  > span {
    font-size: 13px;
  }
`

const ColorSample = styled.div<{ color }>`
  width: 150px;
  height: 100px;
  background-color: ${props => props.color};
  border: ${p => `1px solid ${p.theme.color.lightGray}`};
`

const meta: Meta<typeof ColorSample> = {
  title: 'Colors',
  component: ColorSample,
  decorators: [generateStoryDecorator({ fixedWidth: 1000 })]
}

export default meta

export function _Colors() {
  return (
    <Wrapper>
      {Object.entries(THEME.color).map(([key, value]) => (
        <ColorContainer key={key}>
          <span>
            {key} <br /> {value}
          </span>
          <ColorSample color={value} />
        </ColorContainer>
      ))}
    </Wrapper>
  )
}
