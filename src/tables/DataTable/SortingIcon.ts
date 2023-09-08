import styled from 'styled-components'

import { Chevron } from '../../icons'

export const SortingIcon = styled(Chevron)<{
  $isDescending?: boolean
}>`
  cursor: pointer;
  height: 16px;
  margin-right: 8px;
  margin-top: 0px;
  transform: ${props => (!props.$isDescending ? 'rotate(0deg)' : 'rotate(-180deg)')};
  transition: all 0.5s;
  width: 16px;
`
