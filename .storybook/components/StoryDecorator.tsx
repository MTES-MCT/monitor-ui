import { useMemo, useState } from 'react'
import styled from 'styled-components'

import { Accent, Button, Size, THEME } from '../../src'
import { NewWindow } from '../../src/components/NewWindow'

import type { Story, StoryContext } from '@storybook/react'

export function generateStoryDecorator({
  fixedWidth,
  hasDarkMode = false,
  withNewWindowButton = false
}: {
  fixedWidth?: number
  hasDarkMode?: boolean
  withNewWindowButton?: boolean
} = {}) {
  return function StoryDecorator(Story: Story, context: StoryContext) {
    const { args } = context

    const [isNewWindowOpen, setIsNewWindowOpen] = useState(false)

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
        {withNewWindowButton && (
          <NewWindowButtonBox>
            <Button accent={Accent.SECONDARY} onClick={() => setIsNewWindowOpen(true)} size={Size.SMALL}>
              OPEN IN NEW WINDOW
            </Button>
          </NewWindowButtonBox>
        )}

        <StoryBox style={style}>
          <Story />
        </StoryBox>

        {withNewWindowButton && isNewWindowOpen && (
          <NewWindow isStoryBook onUnload={() => setIsNewWindowOpen(false)}>
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

export const NewWindowButtonBox = styled.div`
  position: fixed;
  right: 16px;
  top: 16px;
`
export const NewWindowStoryBox = styled.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`
