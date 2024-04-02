import { IconButton } from '@elements/IconButton'
import { LinkButton } from '@elements/LinkButton'
import { isString } from 'lodash'
import { type ReactNode, useState } from 'react'
import styled from 'styled-components'

import { getBannerPalette } from './utils'
import { Accent, Icon, Level, Size } from '../../constants'

export type BannerProps = {
  children: string | ReactNode
  isClosable: boolean
  isCollapsible: boolean
  isHiddenByDefault: boolean | undefined
  level: Level
  top: string
}

interface WrapperProps {
  $isCollapsed: boolean
  $isCollapsible: boolean
  $isHidden: boolean
  $level: Level
  $top: string
}
const Wrapper = styled.div<WrapperProps>`
  display: ${(p: WrapperProps) => (p.$isHidden ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  background-color: ${(p: WrapperProps) => getBannerPalette(p.$level).backgroundColor};
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: 0 2rem;
  top: ${(p: WrapperProps) => `${p.$top}`};
  z-index: 1000;
  height: ${(p: WrapperProps) => (!p.$isHidden && p.$isCollapsed ? '10px' : '50px')};
  border-bottom: ${({ $isCollapsible, $level }: WrapperProps) =>
    $isCollapsible ? `4px solid ${getBannerPalette($level).borderColor}` : 'none'};
  box-shadow: ${({ $isCollapsible }: WrapperProps) => ($isCollapsible ? 'none' : '0px 3px 4px #7077854D')};
  transition: height 0.3s ease;
`

interface ContentWrapperProps {
  $level: Level
}
const ContentWrapper = styled.div<ContentWrapperProps>`
  color: ${(p: ContentWrapperProps) => getBannerPalette(p.$level).color};
  align-self: center;
  flex-grow: 2;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`

const ButtonWrapper = styled.div`
  align-self: center;
`

function Banner({ children, isClosable, isCollapsible, isHiddenByDefault, level, top }: Readonly<BannerProps>) {
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

  const onClickAction = (): void => {
    if (isClosable) {
      setIsHidden(true)
    } else if (isCollapsible) {
      setIsCollapsing(true)
      setIsCollapsed(true)
      setHasCollapsed(true)
    }
  }

  return (
    <Wrapper
      $isCollapsed={isCollapsed}
      $isCollapsible={isCollapsible}
      $isHidden={isHidden}
      $level={level}
      $top={top}
      className="banner"
      onMouseEnter={enterHover}
      onMouseLeave={leaveHover}
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
            {!isClosable && isCollapsible && <LinkButton size={Size.LARGE}>Masquer</LinkButton>}
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  )
}

Banner.displayName = 'Banner'

export { Banner }
