import { THEME } from '@theme'
import classnames from 'classnames'
import styled from 'styled-components'

import type { LoaderProps } from './LoaderProps'

export function FingerprintLoader({
  animationDuration = 1500,
  className = '',
  color = THEME.color.white,
  size = 100,
  ...props
}: LoaderProps) {
  const controlledClassName = classnames('Element-FingerprintLoader', className)

  const ringsNum = 9
  const containerPadding = 2
  const outerRingSize = size - containerPadding * 2
  const ringBase = outerRingSize / ringsNum

  function generateRings(num) {
    // eslint-disable-next-line react/no-array-index-key
    return Array.from({ length: num }).map((_, index) => <div key={index} className="spinner-ring" />)
  }

  return (
    <RingLoader
      $animationDuration={animationDuration}
      $color={color}
      $containerPadding={containerPadding}
      $ringBase={ringBase}
      $size={size}
      className={controlledClassName}
      {...props}
    >
      {generateRings(ringsNum)}
    </RingLoader>
  )
}

const RingLoader = styled.div<{
  $animationDuration: number
  $color: string
  $containerPadding: number
  $ringBase: number
  $size: number
}>`
  height: ${p => p.$size}px;
  width: ${p => p.$size}px;
  padding: ${p => p.$containerPadding}px;
  overflow: hidden;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .spinner-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: ${p => p.$color};
    animation: fingerprint-spinner-animation ${p => p.$animationDuration}ms cubic-bezier(0.68, -0.75, 0.265, 1.75)
      infinite forwards;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  .spinner-ring:nth-child(1) {
    height: ${p => p.$ringBase + 0 * p.$ringBase}px;
    width: ${p => p.$ringBase + 0 * p.$ringBase}px;
    animation-delay: calc(50ms * 1);
  }
  .spinner-ring:nth-child(2) {
    height: ${p => p.$ringBase + 1 * p.$ringBase}px;
    width: ${p => p.$ringBase + 1 * p.$ringBase}px;
    animation-delay: calc(50ms * 2);
  }
  .spinner-ring:nth-child(3) {
    height: ${p => p.$ringBase + 2 * p.$ringBase}px;
    width: ${p => p.$ringBase + 2 * p.$ringBase}px;
    animation-delay: calc(50ms * 3);
  }
  .spinner-ring:nth-child(4) {
    height: ${p => p.$ringBase + 3 * p.$ringBase}px;
    width: ${p => p.$ringBase + 3 * p.$ringBase}px;
    animation-delay: calc(50ms * 4);
  }
  .spinner-ring:nth-child(5) {
    height: ${p => p.$ringBase + 4 * p.$ringBase}px;
    width: ${p => p.$ringBase + 4 * p.$ringBase}px;
    animation-delay: calc(50ms * 5);
  }
  .spinner-ring:nth-child(6) {
    height: ${p => p.$ringBase + 5 * p.$ringBase}px;
    width: ${p => p.$ringBase + 5 * p.$ringBase}px;
    animation-delay: calc(50ms * 6);
  }
  .spinner-ring:nth-child(7) {
    height: ${p => p.$ringBase + 6 * p.$ringBase}px;
    width: ${p => p.$ringBase + 6 * p.$ringBase}px;
    animation-delay: calc(50ms * 7);
  }
  .spinner-ring:nth-child(8) {
    height: ${p => p.$ringBase + 7 * p.$ringBase}px;
    width: ${p => p.$ringBase + 7 * p.$ringBase}px;
    animation-delay: calc(50ms * 8);
  }
  .spinner-ring:nth-child(9) {
    height: ${p => p.$ringBase + 8 * p.$ringBase}px;
    width: ${p => p.$ringBase + 8 * p.$ringBase}px;
    animation-delay: calc(50ms * 9);
  }

  @keyframes fingerprint-spinner-animation {
    100% {
      transform: rotate(360deg);
    }
  }
`
