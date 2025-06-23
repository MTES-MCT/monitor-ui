import { THEME } from '@theme'
import classnames from 'classnames'
import styled from 'styled-components'

import type { LoaderProps } from './LoaderProps'

export function FulfillingBouncingCircleLoader({
  animationDuration = 4000,
  className = '',
  color = THEME.color.white,
  size = 100,
  ...props
}: LoaderProps) {
  const controlledClassName = classnames('Element-FulfillingBouncingCircleLoader', className)

  return (
    <BouncingCircle
      $animationDuration={animationDuration}
      $color={color}
      $size={size}
      className={controlledClassName}
      {...props}
    >
      <div className="circle" />
      <div className="orbit" />
    </BouncingCircle>
  )
}

const BouncingCircle = styled.div<{ $animationDuration: number; $color: string; $size: number }>`
  height: ${p => p.$size}px;
  width: ${p => p.$size}px;
  position: relative;
  animation: fulfilling-bouncing-circle-spinner-animation infinite ${p => p.$animationDuration}ms ease;

  * {
    box-sizing: border-box;
  }

  .orbit {
    height: ${p => p.$size}px;
    width: ${p => p.$size}px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: calc(${p => p.$size}px * 0.03) solid ${p => p.$color};
    animation: fulfilling-bouncing-circle-spinner-orbit-animation infinite ${p => p.$animationDuration}ms ease;
  }
  .circle {
    height: ${p => p.$size}px;
    width: ${p => p.$size}px;
    color: ${p => p.$color};
    display: block;
    border-radius: 50%;
    position: relative;
    border: calc(${p => p.$size}px * 0.1) solid ${p => p.$color};
    animation: fulfilling-bouncing-circle-spinner-circle-animation infinite ${p => p.$animationDuration}ms ease;
    transform: rotate(0deg) scale(1);
  }
  @keyframes fulfilling-bouncing-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes fulfilling-bouncing-circle-spinner-orbit-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1);
    }
    62.5% {
      transform: scale(0.8);
    }
    75% {
      transform: scale(1);
    }
    87.5% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes fulfilling-bouncing-circle-spinner-circle-animation {
    0% {
      transform: scale(1);
      border-color: transparent;
      border-top-color: inherit;
    }
    16.7% {
      border-color: transparent;
      border-top-color: initial;
      border-right-color: initial;
    }
    33.4% {
      border-color: transparent;
      border-top-color: inherit;
      border-right-color: inherit;
      border-bottom-color: inherit;
    }
    50% {
      border-color: inherit;
      transform: scale(1);
    }
    62.5% {
      border-color: inherit;
      transform: scale(1.4);
    }
    75% {
      border-color: inherit;
      transform: scale(1);
      opacity: 1;
    }
    87.5% {
      border-color: inherit;
      transform: scale(1.4);
    }
    100% {
      border-color: transparent;
      border-top-color: inherit;
      transform: scale(1);
    }
  }
`
