/* eslint-disable no-console */

import { ErrorBoundary as SentryErrorBoundary } from '@sentry/react'
import { useCallback } from 'react'
import styled from 'styled-components'

import { MonitorUiError } from '../libs/MonitorUiError'

import type {
  ErrorBoundaryProps as SentryErrorBoundaryProps,
  FallbackRender as SentryFallBackRender,
  Scope as SentryScope
} from '@sentry/react'
import type { ReactNode } from 'react'

export type ErrorBoundaryProps = {
  children: ReactNode
  isDebug?: boolean
  isWrapper?: boolean
}
/**
 * @see https://docs.sentry.io/platforms/javascript/guides/react/features/error-boundary/
 */
export function ErrorBoundary({ children, isDebug = false, isWrapper = false }) {
  const beforeCapture: SentryErrorBoundaryProps['beforeCapture'] = useCallback(
    (scope: SentryScope, error: Error | null) => {
      if (error instanceof Error) {
        if (error instanceof MonitorUiError) {
          scope.setTag('internalScope', error.scope)
        }
        scope.setTag('errorInstance', error.constructor.name)
      }
    },
    []
  )

  const fallback: SentryFallBackRender = useCallback(
    ({ error }) => {
      if (!isDebug) {
        return <Box $isWrapper={isWrapper}>Une erreur est survenue.</Box>
      }

      if (error instanceof Error) {
        return (
          <Box $isWrapper={isWrapper}>
            <code>{`${error.constructor.name}: ${error.message}`}</code>
          </Box>
        )
      }

      return (
        <Box $isWrapper={isWrapper}>
          <code>Fatal: An error happened but it’s not an instance of `Error`.</code>
        </Box>
      )
    },
    [isDebug, isWrapper]
  )

  return (
    <SentryErrorBoundary beforeCapture={beforeCapture} fallback={fallback}>
      {children}
    </SentryErrorBoundary>
  )
}

const Box = styled.div<{
  $isWrapper: boolean
}>`
  background-color: ${p => p.theme.color.chineseRed};
  align-items: center;
  justify-content: center;
  color: white;
  display: ${p => (p.$isWrapper ? 'flex' : 'inline-flex')};
  flex-grow: ${p => (p.$isWrapper ? 1 : 0)};
  font-size: 13px;
  font-weight: bold;
  height: ${p => (p.$isWrapper ? '100%' : 'auto')};
  line-height: 1.3846;
  width: ${p => (p.$isWrapper ? '100%' : 'auto')};
  white-space: nowrap;

  > code {
    background-color: transparent;
  }
`
