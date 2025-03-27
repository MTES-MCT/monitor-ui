import { Accent, Icon, Level, Size } from '@constants'
import { IconButton } from '@elements/IconButton'
import { LinkButton } from '@elements/LinkButton'
import classNames from 'classnames'
import { isString } from 'lodash'
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import styled, { css, type CSSProperties } from 'styled-components'

import { ANIMATION_DURATION_IN_MS } from './constants'
import { getBannerPalette } from './utils'

import type { Promisable } from 'type-fest'

export type BannerProps = {
  children: string | ReactNode
  className?: string | undefined
  closingDelay?: number
  isClosable?: boolean | undefined
  // TODO This is a breaking change but it would be easier to have a `closingMode="CLOSABLE|COLLAPSIBLE"` prop.
  isCollapsible?: boolean | undefined
  isFixed?: boolean | undefined
  isHiddenByDefault?: boolean | undefined
  level: Level
  onAutoClose?: (() => Promisable<void>) | undefined
  onClose?: (() => Promisable<void>) | undefined
  style?: CSSProperties | undefined
  top: string
  withAutomaticClosing?: boolean | undefined
}
export function Banner({
  children,
  className = undefined,
  closingDelay = 3000,
  isClosable = false,
  isCollapsible = false,
  isFixed = false,
  isHiddenByDefault = false,
  level,
  onAutoClose,
  onClose,
  style,
  top,
  withAutomaticClosing = false
}: Readonly<BannerProps>) {
  const timeoutIdRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const controlledClassName = classNames('Component-Banner', className)
  const [isHidden, setIsHidden] = useState<boolean>(!!isHiddenByDefault)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [isCollapsing, setIsCollapsing] = useState<boolean>(false)
  const [hasCollapsed, setHasCollapsed] = useState<boolean>(false)

  useEffect(() => {
    // Reset visibility/height when isCollapsible or isClosable change
    setIsHidden(false)
    setIsCollapsed(false)
    setIsCollapsing(false)
    setHasCollapsed(false)
  }, [isCollapsible, isClosable])

  const enterHover = (): void => {
    if (isCollapsible && !isHidden && isCollapsed && !isCollapsing) {
      setIsCollapsed(false)
    }
    setIsCollapsing(false)
  }
  const leaveHover = (): void => {
    if (isCollapsible && !isHidden && hasCollapsed) {
      setIsCollapsed(true)
    }
  }

  const closeOrCollapse = useCallback((): void => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    if (isClosable) {
      setIsHidden(true)

      onClose?.()
    } else if (isCollapsible) {
      setIsCollapsing(true)

      setTimeout(() => {
        setIsCollapsed(true)
        setHasCollapsed(true)

        onClose?.()
      }, ANIMATION_DURATION_IN_MS)
    }
  }, [isClosable, isCollapsible, onClose])

  useEffect(() => {
    if (withAutomaticClosing) {
      timeoutIdRef.current = setTimeout(() => {
        closeOrCollapse()

        onAutoClose?.()
      }, closingDelay)
    }

    return () => clearTimeout(timeoutIdRef.current)
  }, [closingDelay, closeOrCollapse, isCollapsible, onAutoClose, withAutomaticClosing])

  return (
    <Wrapper
      $isCollapsed={isCollapsed}
      $isCollapsible={isCollapsible}
      $isFixed={isFixed}
      $isHidden={isHidden}
      $level={level}
      $top={top}
      className={controlledClassName}
      onMouseEnter={enterHover}
      onMouseLeave={leaveHover}
      style={style}
    >
      {!isHidden && !isCollapsed && (
        <>
          <ContentWrapper $level={level}>{isString(children) ? <p>{children}</p> : <>{children}</>}</ContentWrapper>
          <ButtonWrapper
            className="banner-button"
            onClick={() => closeOrCollapse()}
            // TODO This is a breaking change but we should only use `IconButton` title rather than this one.
            title={isClosable ? 'fermer' : 'masquer'}
          >
            {isClosable && (
              <IconButton
                accent={Accent.TERTIARY}
                color={getBannerPalette(level).color}
                Icon={Icon.Close}
                title={isClosable ? 'Fermer' : 'Masquer'}
              />
            )}
            {!isClosable && isCollapsible && (
              <StyledLinkButton $level={level} size={Size.LARGE}>
                Masquer
              </StyledLinkButton>
            )}
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div<{
  $isCollapsed: boolean
  $isCollapsible: boolean
  $isFixed: boolean
  $isHidden: boolean
  $level: Level
  $top: string
}>`
  align-items: center;
  background-color: ${p => getBannerPalette(p.$level).backgroundColor};
  border-bottom: ${p => (p.$isCollapsible ? `4px solid ${getBannerPalette(p.$level).borderColor}` : 'none')};
  box-shadow: ${p => (p.$isCollapsible ? 'none' : '0px 3px 4px #7077854D')};
  display: ${p => (p.$isHidden ? 'none' : 'flex')};
  flex-direction: row;
  height: ${p => (!p.$isHidden && p.$isCollapsed ? '10px' : '50px')};
  justify-content: space-between;
  left: 0;
  max-width: 100%;
  min-width: 100%;
  padding: 0 2rem;
  position: ${p => (p.$isFixed ? 'fixed' : 'absolute')};
  top: ${p => `${p.$top}`};
  transition: height ${ANIMATION_DURATION_IN_MS}ms ease;
  width: 100%;
  z-index: 1000;
`

interface ContentWrapperProps {
  $level: Level
}
const ContentWrapper = styled.div<ContentWrapperProps>`
  align-self: center;
  color: ${(p: ContentWrapperProps) => getBannerPalette(p.$level).color};
  flex-grow: 2;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

const ButtonWrapper = styled.div`
  align-self: center;
`
const StyledLinkButton = styled(LinkButton)<{
  $level: Level
}>`
  ${p =>
    p.$level === Level.ERROR
      ? css`
          color: ${getBannerPalette(p.$level).color};
          text-decoration: ${getBannerPalette(p.$level).color} underline;
        `
      : ''}
`
Banner.displayName = 'Banner'
