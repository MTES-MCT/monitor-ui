import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type FieldProps = HTMLAttributes<HTMLDivElement>
export const Field = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`
