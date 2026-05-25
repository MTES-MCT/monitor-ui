import { Icon } from '@constants'
import { IconButton } from '@elements/IconButton'
import styled from 'styled-components'

export function Title({ onClose, title }: { onClose?: () => void; title: string }) {
  return (
    <Wrapper>
      <h4>{title}</h4>
      {onClose && <IconButton Icon={Icon.Close} onClick={onClose} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  background-color: ${p => p.theme.color.charcoal};
  color: ${p => p.theme.color.white};
  display: flex;

  justify-content: space-between;
  padding: 8px 11px 8px 16px;
  h4 {
    font-size: 20px;
  }
`
