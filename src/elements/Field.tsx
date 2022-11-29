import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type FieldProps = HTMLAttributes<HTMLDivElement>
export const Field = styled.div`
  display: flex;
  flex-direction: column;
`
