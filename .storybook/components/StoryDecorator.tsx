import { useMemo, useState } from 'react'
import styled from 'styled-components'

import { Accent, Button, Size, THEME } from '../../src'
import { NewWindow } from '../../src/components/NewWindow'

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

    const [isInWindow, setIsInWindow] = useState(false)

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
      <>
        <NewWindowButtonBox>
          <Button accent={Accent.SECONDARY} onClick={() => setIsInWindow(true)} size={Size.SMALL}>
            OPEN IN NEW WINDOW
          </Button>
        </NewWindowButtonBox>

        <StoryBox style={style}>
          <Story />
        </StoryBox>

        {isInWindow && (
          <NewWindow isStoryBook onUnload={() => setIsInWindow(false)}>
            <NewWindowStoryBox>
              <Story />
            </NewWindowStoryBox>
          </NewWindow>
        )}
      </>
    )
  }
}

const StoryBox = styled.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`

const NewWindowButtonBox = styled.div`
  position: fixed;
  right: 16px;
  top: 16px;
`
const NewWindowStoryBox = styled.div`
  padding: 16px; ;
`
