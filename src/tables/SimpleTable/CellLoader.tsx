import styled, { keyframes } from 'styled-components'

const cellLoaderAnimation = keyframes`
  from {
    left: -100%;
  }

  to {
    left: 100%;
  }
`
export const CellLoader = styled.div`
  background: ${p => p.theme.color.gainsboro};
  height: 18px;
  overflow: hidden;
  position: relative;

  &:before {
    animation: ${cellLoaderAnimation} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(to right, transparent 0%, ${p => p.theme.color.white} 50%, transparent 100%);
    content: '';
    display: block;
    height: 100%;
    left: -100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`
