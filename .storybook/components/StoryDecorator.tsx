import { forwardRef, useEffect, useImperativeHandle, useMemo, useState, useRef } from 'react'
import styled from 'styled-components'

import { GlobalDecoratorWrapper } from './GlobalDecorator'
import { Accent, Button, NewWindow, Size, THEME, useForceUpdate, useNewWindow, NewWindowContext } from '../../src'

import type { NewWindowContextValue } from '../../src'
import type { StoryContext, StoryFn, StrictArgs } from '@storybook/react'
import type { ForwardedRef, MutableRefObject } from 'react'

export function generateStoryDecorator({
  box,
  hasLightMode = false,
  withNewWindowButton = false
}: {
  box?: {
    width: number
  }
  hasLightMode?: boolean
  withNewWindowButton?: boolean
} = {}) {
  return function StoryDecorator(Story: StoryFn, { args }: StoryContext) {
    const newWindowRef = useRef() as MutableRefObject<HTMLDivElement>

    const [isNewWindowOpen, setIsNewWindowOpen] = useState(false)

    const style = useMemo(
      () => ({
        ...(box
          ? {
              borderRight: `1px solid ${THEME.color.cultured}`,
              paddingRight: 16,
              width: box.width + 16
            }
          : {}),
        ...(hasLightMode
          ? {
              backgroundColor: args.isLight ? THEME.color.gainsboro : THEME.color.white
            }
          : {})
      }),
      [args.isLight]
    )

    const { forceUpdate } = useForceUpdate()

    useEffect(() => {
      forceUpdate()
    }, [forceUpdate])

    return (
      <>
        {withNewWindowButton && (
          <NewWindowButtonBox>
            <Button accent={Accent.SECONDARY} onClick={() => setIsNewWindowOpen(true)} size={Size.SMALL}>
              OPEN IN NEW WINDOW
            </Button>
          </NewWindowButtonBox>
        )}

        {!isNewWindowOpen && (
          <StoryBox style={style}>
            <Story />
          </StoryBox>
        )}

        {withNewWindowButton && isNewWindowOpen && (
          <NewWindow features={{ height: 600, width: 800 }} onUnload={() => setIsNewWindowOpen(false)}>
            <NewWindowStoryWrapper ref={newWindowRef} Story={Story} storyArgs={args} />
          </NewWindow>
        )}
      </>
    )
  }
}

function NewWindowStoryWrapperWithRef(
  { Story, storyArgs }: { Story: StoryFn; storyArgs: StrictArgs },
  ref: ForwardedRef<HTMLDivElement | null>
) {
  // eslint-disable-next-line no-null/no-null
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const [isFirstRender, setIsFirstRender] = useState(true)

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => wrapperRef.current)

  const newWindowContextProviderValue: NewWindowContextValue = useMemo(
    () => ({
      newWindowContainerRef: wrapperRef.current
        ? (wrapperRef as MutableRefObject<HTMLDivElement>)
        : { current: window.document.createElement('div') }
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isFirstRender]
  )

  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  return (
    <NewWindowStoryBox ref={wrapperRef}>
      {!isFirstRender && (
        <NewWindowContext.Provider value={newWindowContextProviderValue}>
          <GlobalDecoratorWrapper>
            <NewWindowStory Story={Story} storyArgs={storyArgs} />
          </GlobalDecoratorWrapper>
        </NewWindowContext.Provider>
      )}
    </NewWindowStoryBox>
  )
}

const NewWindowStoryWrapper = forwardRef(NewWindowStoryWrapperWithRef)

function NewWindowStory({ Story, storyArgs }: { Story: StoryFn; storyArgs: StrictArgs }) {
  const { newWindowContainerRef } = useNewWindow()

  return <Story args={{ ...storyArgs, baseContainer: newWindowContainerRef.current }} />
}

const StoryBox = styled.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`

const NewWindowButtonBox = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
`

const NewWindowStoryBox = styled.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`
