import { useMemo } from 'react'
import styled from 'styled-components'

import { THEME } from '../../src'

import type { Story, StoryContext } from '@storybook/react'

export function generateStoryDecorator({
  fixedWidth,
  hasDarkMode = false
}: {
  fixedWidth?: number
  hasDarkMode?: boolean
} = {}) {
  return function StoryDecorator(Story: Story, context: StoryContext) {
    const { args } = context

    const style = useMemo(
      () => ({
        ...(fixedWidth
          ? {
              width: `${fixedWidth}px`
            }
          : {}),
        ...(hasDarkMode
          ? {
              backgroundColor: args.isLight ? THEME.color.gainsboro : THEME.color.white
            }
          : {})
      }),
      [args.isLight]
    )

    return (
      <StoryBox style={style}>
        <Story />
      </StoryBox>
    )
  }
}

const StoryBox = styled.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`
