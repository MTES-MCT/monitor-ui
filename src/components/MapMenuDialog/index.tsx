import { Accent } from '@constants'
import { IconButton } from '@elements/IconButton'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${p => p.theme.color.white};
  box-shadow: 0px 3px 6px ${p => p.theme.color.slateGray};
  display: flex;
  flex-direction: column;
  margin-right: 6px;
  max-height: 520px;
  width: 320px;
`

const Header = styled.div`
  align-items: center;
  background-color: ${p => p.theme.color.charcoal};
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 9px 4px 9px 10px;
`

const Title = styled.span.attrs(props => ({
  title: props.title ?? String(props.children)
}))`
  color: ${p => p.theme.color.white};
  font-size: 16px;
  line-height: 22px;
  margin-right: 6px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const Body = styled.div`
  height: calc(100% - 40px);
  overflow-y: auto;
  padding: 12px;
`

const VisibilityButton = styled(IconButton as any)`
  background-color: ${p => p.theme.color.gainsboro};
`

const CloseButton = styled(IconButton as any).attrs(props => ({
  accent: Accent.TERTIARY,
  Icon: props.Icon ?? 'Close'
}))`
  color: ${p => p.theme.color.white};

  &:hover,
  &._hover {
    color: ${p => p.theme.color.white};
  }

  &:active,
  &._active {
    color: ${p => p.theme.color.white};
  }

  &:disabled,
  &._disabled {
    color: ${p => p.theme.color.white};
  }
`

const Footer = styled.div`
  background: ${p => p.theme.color.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  width: 100%;
  z-index: 10;
`

export const MapMenuDialog = {
  Body,
  CloseButton,
  Container,
  Footer,
  Header,
  Title,
  VisibilityButton
}
