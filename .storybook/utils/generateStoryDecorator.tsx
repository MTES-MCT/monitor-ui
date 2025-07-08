import { forwardRef, useEffect, useImperativeHandle, useMemo, useState, useRef } from 'react'
import styled from 'styled-components'

import { Accent, Button, NewWindow, Size, THEME, useNewWindow, NewWindowContext } from '../../src'
import { StoryBox } from '../components/StoryBox'

import type { NewWindowContextValue } from '../../src'
import type { StoryContext, StoryFn, StrictArgs } from '@storybook/react'
import type { CSSProperties, ForwardedRef } from 'react'

type PseudoStateClassname = '_hover' | '_focus' | '_active'

export function generateStoryDecorator({
  box,
  withBackgroundButton = false,
  withNewWindowButton = false,
  withPseudoStateButtons
}: {
  box?: {
    width: number
  }
  withBackgroundButton?: boolean
  withNewWindowButton?: boolean
  withPseudoStateButtons?: {
    targetSelector: string
  }
} = {}) {
  return function StoryDecorator(Story: StoryFn, { args }: StoryContext) {
    const newWindowRef = useRef(undefined) as any

    const [hasGainsboroBackground, setHasGainsboroBackground] = useState(false)
    const [isNewWindowOpen, setIsNewWindowOpen] = useState(false)
    const [selectedPseudoStateClassname, setSelectedPseudoStateClassname] = useState<PseudoStateClassname | undefined>(
      undefined
    )

    const innerBoxStyle: CSSProperties = {
      backgroundColor: hasGainsboroBackground ? THEME.color.gainsboro : THEME.color.white,
      ...(box
        ? {
            borderRight: `1px solid ${THEME.color.lightGray}`,
            width: box.width + 16
          }
        : {})
    }

    const resetPseudoState = () => {
      if (!withPseudoStateButtons) {
        return
      }

      const target = document.querySelector(withPseudoStateButtons.targetSelector)!

      target.classList.remove('_hover', '_focus', '_active')

      setSelectedPseudoStateClassname(undefined)
    }

    const setPseudoState = (pseudoStateClassname: PseudoStateClassname) => {
      if (!withPseudoStateButtons) {
        return
      }

      const target = document.querySelector(withPseudoStateButtons.targetSelector)!

      resetPseudoState()
      target.classList.add(pseudoStateClassname)

      setSelectedPseudoStateClassname(pseudoStateClassname)
    }

    const toggleBackgroundColor = () => {
      setHasGainsboroBackground(hadGainsboroBackground => !hadGainsboroBackground)
    }


    return (
      <>
        {!isNewWindowOpen && (
          <OuterBox style={{}}>
            <InnerBox style={innerBoxStyle}>
               {/*@ts-ignore*/}
              <Story />
            </InnerBox>
          </OuterBox>
        )}

        <ActionBox>
          {!!withPseudoStateButtons && (
            <>
              <Button disabled={!selectedPseudoStateClassname} onClick={() => resetPseudoState()} size={Size.SMALL}>
                :default
              </Button>
              <Button
                disabled={selectedPseudoStateClassname === '_hover'}
                onClick={() => setPseudoState('_hover')}
                size={Size.SMALL}
              >
                :hover
              </Button>
              <Button
                disabled={selectedPseudoStateClassname === '_focus'}
                onClick={() => setPseudoState('_focus')}
                size={Size.SMALL}
              >
                :focus
              </Button>
              <Button
                disabled={selectedPseudoStateClassname === '_active'}
                onClick={() => setPseudoState('_active')}
                size={Size.SMALL}
              >
                :active
              </Button>
            </>
          )}
          {withBackgroundButton && (
            <Button accent={Accent.PRIMARY} onClick={toggleBackgroundColor} size={Size.SMALL}>
              {`Set background to ${hasGainsboroBackground ? 'White' : 'Gainsboro'}`}
            </Button>
          )}
          {withNewWindowButton && (
            <Button accent={Accent.PRIMARY} onClick={() => setIsNewWindowOpen(true)} size={Size.SMALL}>
              Open in new window
            </Button>
          )}
        </ActionBox>

        {withNewWindowButton && isNewWindowOpen && (
          <NewWindow features={{ height: 600, width: 800 }} onUnload={() => setIsNewWindowOpen(false)}>
            <NewWindowStoryWrapper ref={newWindowRef} innerBoxStyle={innerBoxStyle} Story={Story} storyArgs={args} />
          </NewWindow>
        )}
      </>
    )
  }
}

function NewWindowStoryWrapperWithRef(
  { innerBoxStyle, Story, storyArgs }: { Story: StoryFn; innerBoxStyle: CSSProperties; storyArgs: StrictArgs },
  ref: ForwardedRef<HTMLDivElement | null>
) {
  // eslint-disable-next-line no-null/no-null
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const [isFirstRender, setIsFirstRender] = useState(true)

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => wrapperRef.current)

  const newWindowContextProviderValue: NewWindowContextValue = useMemo(
    () => ({
      newWindowContainerRef: wrapperRef.current
        ? (wrapperRef as any)
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
          <StoryBox>
            <InnerBox style={innerBoxStyle}>
              <NewWindowStory Story={Story} storyArgs={storyArgs} />
            </InnerBox>
          </StoryBox>
        </NewWindowContext.Provider>
      )}
    </NewWindowStoryBox>
  )
}

const NewWindowStoryWrapper = forwardRef(NewWindowStoryWrapperWithRef)

function NewWindowStory({ Story, storyArgs }: Readonly<{ Story: StoryFn; storyArgs: StrictArgs }>) {
  const { newWindowContainerRef } = useNewWindow()

  // @ts-ignore
  return <Story args={{ ...storyArgs, baseContainer: newWindowContainerRef.current }} />
}

const OuterBox = styled.div`
  background-color: #f6f9fc;
  height: 100%;
  width: 100%;
`

const InnerBox = styled.div.attrs((...props) => ({
  ...props,
  id: 'storyInnerBox'
}))`
  background-color: white;
  height: 100%;
  padding: 16px 32px;
  width: 100%;
`

const ActionBox = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;

  > .Element-Button {
    margin-left: 8px;
  }
`

const NewWindowStoryBox = styled.div`
  background-color: #f6f9fc;
  height: 100%;
  padding: 0;
  width: 100%;
`
