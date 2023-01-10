/* eslint-disable no-console */

import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import type { Promisable } from 'type-fest'

const CACHE: {
  CONTAINER_ELEMENT: HTMLDivElement | null
  COUNTER: number
} = {
  // eslint-disable-next-line no-null/no-null
  CONTAINER_ELEMENT: null,
  COUNTER: 0
}

export type NewWindowProps = {
  center?: 'parent' | 'screen'
  children: any
  height?: number
  isStoryBook?: boolean
  name?: string
  onOpen?: (window: Window) => Promisable<void>
  onUnload?: () => Promisable<void>
  title?: string
  url?: string
  width?: number
}
export function NewWindow({
  center = 'parent',
  children,
  height = 780,
  isStoryBook = false,
  name = '',
  onOpen,
  onUnload,
  title = 'New Window',
  url = '',
  width = 1024
}: NewWindowProps) {
  const isReleasedRef = useRef(false)
  const windowCheckerIntervalRef = useRef<NodeJS.Timer | undefined>(undefined)
  const windowPropsRef = useRef<{
    height: number
    left: number
    top: number
    width: number
  }>({
    height,
    left: 0,
    top: 0,
    width
  })
  // eslint-disable-next-line no-null/no-null
  const windowRef = useRef(null) as MutableRefObject<Window | null>

  const [isMounted, setIsMounted] = useState(false)

  /**
   * Release the new window and anything that was bound to it.
   */
  const closeWindow = useCallback(() => {
    // This method can be called once.
    if (isReleasedRef.current && (!isStoryBook || (isStoryBook && CACHE.COUNTER > 1))) {
      return
    }

    console.debug(CACHE.COUNTER, 'closeWindow()')

    isReleasedRef.current = true

    // eslint-disable-next-line no-null/no-null
    CACHE.CONTAINER_ELEMENT = null
    CACHE.COUNTER = 0

    // Remove checker interval.
    clearInterval(windowCheckerIntervalRef.current)

    if (typeof onUnload === 'function') {
      onUnload()
    }
  }, [isStoryBook, onUnload])

  /**
   * Create the new window when NewWindow component mount.
   */
  const createWindow = useCallback(() => {
    console.debug(CACHE.COUNTER, 'createWindow()')
    if (!window.top) {
      return
    }

    if (center === 'parent') {
      windowPropsRef.current = {
        ...windowPropsRef.current,
        left: window.top.outerWidth / 2 + window.top.screenX - windowPropsRef.current.width / 2,
        top: window.top.outerHeight / 2 + window.top.screenY - windowPropsRef.current.height / 2
      }
    } else if (center === 'screen') {
      windowPropsRef.current = {
        ...windowPropsRef.current,
        left: window.innerWidth / 2 - windowPropsRef.current.width / 2 + window.screenLeft,
        top: window.innerHeight / 2 - windowPropsRef.current.height / 2 + window.screenTop
      }
    }

    // Open a new window.
    windowRef.current = window.open(url, name, toWindowFeatures(windowPropsRef.current))
    if (!windowRef.current) {
      return
    }

    CACHE.CONTAINER_ELEMENT = windowRef.current.document.createElement('div')
    // When a new window use content from a cross-origin there's no way we can attach event
    // to it. Therefore, we need to detect in a interval when the new window was destroyed
    // or was closed.
    windowCheckerIntervalRef.current = setInterval(() => {
      if (!windowRef.current || windowRef.current.closed) {
        closeWindow()
      }
    }, 50)

    windowRef.current.document.title = title
    CACHE.CONTAINER_ELEMENT.setAttribute('id', 'new-window-container')
    windowRef.current.document.body.appendChild(CACHE.CONTAINER_ELEMENT)

    setImmediate(() => {
      if (!windowRef.current) {
        return
      }

      copyStyles(document, windowRef.current.document)
      // eslint-disable-next-line no-console
      console.debug('copy styles')
    })

    if (typeof onOpen === 'function') {
      onOpen(windowRef.current)
    }

    // Release anything bound to this component before the new window unload.
    // windowRef.current.addEventListener('beforeunload', () => rele())

    setIsMounted(true)
  }, [center, closeWindow, name, onOpen, title, url])

  useEffect(() => {
    CACHE.COUNTER += 1

    console.debug(CACHE.COUNTER)
  }, [])

  useEffect(() => {
    if (!isMounted && (!isStoryBook || (isStoryBook && CACHE.COUNTER > 1))) {
      createWindow()
    }

    return () => {
      if (!windowRef.current || (isStoryBook && CACHE.COUNTER > 1)) {
        return
      }

      console.debug(CACHE.COUNTER, 'unmount()')

      windowRef.current.close()
    }
  }, [children, createWindow, isMounted, isStoryBook])

  console.debug(CACHE.COUNTER, isMounted, CACHE.CONTAINER_ELEMENT)

  if (!isMounted || !CACHE.CONTAINER_ELEMENT) {
    return <></>
  }

  return createPortal(children, CACHE.CONTAINER_ELEMENT)
}

/**
 * Utility functions.
 * @private
 */

/**
 * Copy styles from a source document to a target.
 */
function copyStyles(source: DocumentOrShadowRoot, target: Record<string, any>) {
  // Store style tags, avoid reflow in the loop
  const headFrag = target.createDocumentFragment()

  Array.from(source.styleSheets).forEach(styleSheet => {
    // For <style> elements
    let rules
    try {
      rules = styleSheet.cssRules
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
    if (rules) {
      // IE11 is very slow for appendChild, so use plain string here
      const ruleText: string[] = []

      // Write the text of each rule into the body of the style element
      Array.from(styleSheet.cssRules).forEach(cssRule => {
        const { type } = cssRule
        // console.debug(type, cssRule.constructor.name)

        // Skip unknown rules
        // if (type === CSSRule.UNKNOWN_RULE) {
        //   return
        // }

        let returnText = ''

        if (type === CSSRule.KEYFRAMES_RULE) {
          // IE11 will throw error when trying to access cssText property, so we
          // need to assemble them
          returnText = getKeyFrameText(cssRule as any)
        } else if ([CSSRule.IMPORT_RULE, CSSRule.FONT_FACE_RULE].includes(type)) {
          // Check if the cssRule type is CSSImportRule (3) or CSSFontFaceRule (5)
          // to handle local imports on a about:blank page
          // '/custom.css' turns to 'http://my-site.com/custom.css'
          returnText = fixUrlForRule(cssRule)
        } else {
          returnText = cssRule.cssText
        }
        ruleText.push(returnText)
      })

      const newStyleEl = target.createElement('style')
      newStyleEl.textContent = ruleText.join('\n')
      headFrag.appendChild(newStyleEl)
    } else if (styleSheet.href) {
      // for <link> elements loading CSS from a URL
      const newLinkEl = target.createElement('link')

      newLinkEl.rel = 'stylesheet'
      newLinkEl.href = styleSheet.href
      headFrag.appendChild(newLinkEl)
    }
  })

  target.head.appendChild(headFrag)
}

/**
 * Make keyframe rules.
 */
function getKeyFrameText(styleSheetRule: { cssRules: CSSKeyframeRule[]; name: string }): string {
  const tokens = ['@keyframes', styleSheetRule.name, '{']
  Array.from(styleSheetRule.cssRules as CSSKeyframeRule[]).forEach(rule => {
    // type === CSSRule.KEYFRAME_RULE should always be true
    tokens.push(rule.keyText, '{', rule.style.cssText, '}')
  })
  tokens.push('}')

  return tokens.join(' ')
}

/**
 * Handle local import urls.
 */
function fixUrlForRule(cssRule: CSSRule): string {
  return cssRule.cssText
    .split('url(')
    .map((line: string) => {
      if (line[1] === '/') {
        return `${line.slice(0, 1)}${window.location.origin}${line.slice(1)}`
      }

      return line
    })
    .join('url(')
}

/**
 * Convert features props to window features format (name=value,other=value).
 */
function toWindowFeatures(obj: Record<string, any>): string {
  return Object.keys(obj)
    .reduce<string[]>((features, name) => {
      const value = obj[name]
      if (typeof value === 'boolean') {
        features.push(`${name}=${value ? 'yes' : 'no'}`)
      } else {
        features.push(`${name}=${value}`)
      }

      return features
    }, [])
    .join(',')
}
