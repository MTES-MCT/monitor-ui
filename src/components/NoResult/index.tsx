import { THEME } from '@theme'
import { type FunctionComponent, type ReactNode } from 'react'
import styled from 'styled-components'

import type { IconProps } from '@types_/definitions'

export type NoResultProps = {
  Icon: FunctionComponent<IconProps>
  children?: ReactNode
  className?: string
  title?: string | undefined
}

export function NoResult({ children, className, Icon, title }: NoResultProps) {
  return (
    <Container className={className}>
      <Circle $color={THEME.color.cultured}>
        <Circle $color={THEME.color.gainsboro}>
          <Circle $color={THEME.color.lightGray}>
            <Icon color={THEME.color.blueGray} size={48} />
          </Circle>
        </Circle>
      </Circle>
      {title && (
        <Wrapper>
          <Message>
            <header>{title}</header>
            <p>
              Les filtres sélectionnés ne correspondent à <br /> {title.toLowerCase()}.
            </p>
          </Message>
          {children}
        </Wrapper>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Circle = styled.div<{ $color: string }>`
  border-radius: 50%;
  border: 1px solid ${p => p.$color};
  padding: 24px;
  margin: auto;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Message = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;

  header {
    font-size: 16px;
    font-weight: bold;
  }
  p {
    color: ${p => p.theme.color.slateGray};
    font-size: 13px;
    font-weight: 500;
  }
`
