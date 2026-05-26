import { Icon } from '@constants'
import { IconButton } from '@elements/IconButton'
import styled from 'styled-components'

export function Title({ children, onClose }: { children?: string | React.ReactNode; onClose?: () => void }) {
  const isString = typeof children === 'string'

  return (
    <Wrapper $withTitle={!!children}>
      {isString ? <h4>{children}</h4> : children}
      {onClose && <IconButton Icon={Icon.Close} onClick={onClose} />}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $withTitle: boolean }>`
  align-items: center;
  background-color: ${p => p.theme.color.charcoal};
  color: ${p => p.theme.color.white};
  display: flex;

  justify-content: ${p => (p.$withTitle ? 'space-between' : 'flex-end')};
  padding: 8px 11px 8px 16px;
  h4 {
    font-size: 20px;
  }
`
