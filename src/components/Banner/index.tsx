import { IconButton } from '@elements/IconButton'
import { LinkButton } from '@elements/LinkButton'
import classNames from 'classnames'
import { isString } from 'lodash'
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import styled, { css, type CSSProperties } from 'styled-components'

import { getBannerPalette } from './utils'
import { Accent, Icon, Level, Size } from '../../constants'

export type BannerProps = {
  children: string | ReactNode
  className?: string | undefined
  closingDelay?: number
  isClosable?: boolean | undefined
  isCollapsible?: boolean | undefined
  isFixed?: boolean | undefined
  isHiddenByDefault?: boolean | undefined
  level: Level
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

  const enterHover = (): void => {
    if (!isHidden && isCollapsed && !isCollapsing) {
      setIsCollapsed(false)
    }
    setIsCollapsing(false)
  }
  const leaveHover = (): void => {
    if (!isHidden && hasCollapsed) {
      setIsCollapsed(true)
    }
  }

  const onClickAction = useCallback((): void => {
    if (isClosable) {
      setIsHidden(true)
    } else if (isCollapsible) {
      setIsCollapsing(true)
      setIsCollapsed(true)
      setHasCollapsed(true)
    }
  }, [isClosable, isCollapsible])

  useEffect(() => {
    if (withAutomaticClosing) {
      const timeoutId = setTimeout(() => {
        onClickAction()
      }, closingDelay)

      timeoutIdRef.current = timeoutId
    }

    return () => clearTimeout(timeoutIdRef.current)
  }, [closingDelay, onClickAction, withAutomaticClosing])

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
            onClick={() => onClickAction()}
            title={isClosable ? 'fermer' : 'masquer'}
          >
            {isClosable && (
              <IconButton accent={Accent.TERTIARY} color={getBannerPalette(level).color} Icon={Icon.Close} />
            )}
            {!isClosable && isCollapsible && (
              <LinkButton size={Size.LARGE}>
                <HideText $level={level}>Masquer</HideText>
              </LinkButton>
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
  max-width: 100%;
  min-width: 100%;
  padding: 0 2rem;
  position: ${p => (p.$isFixed ? 'fixed' : 'relative')};
  top: ${p => `${p.$top}`};
  transition: height 0.3s ease;
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
const HideText = styled.span<{ $level: Level }>`
  ${p =>
    p.$level === Level.ERROR
      ? css`
          color: ${getBannerPalette(p.$level).color};
          text-decoration: ${getBannerPalette(p.$level).color} underline;
        `
      : ''}
`
Banner.displayName = 'Banner'
