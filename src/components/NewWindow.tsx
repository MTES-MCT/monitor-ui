/* eslint-disable no-null/no-null, @typescript-eslint/naming-convention */

import { PureComponent, ReactNode } from 'react'
import ReactDOM from 'react-dom'

import type { Define } from '../types'
import type { Promisable } from 'type-fest'

export type NewWindowProps = {
  center?: 'parent' | 'screen' | undefined
  children?: ReactNode | undefined
  closeOnUnmount?: boolean | undefined
  copyStyles?: boolean | undefined
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/open#windowfeatures
   */
  features?:
    | Partial<{
        height: number
        left: number
        noopener: '_blank' | '_parent' | '_self' | '_top'
        noreferrer: string
        popup: 'yes'
        top: number
        width: number
      }>
    | undefined
  name?: string | undefined
  onBlock?: ((a: null) => Promisable<void>) | undefined
  onChangeFocus?: ((isFocused: boolean) => Promisable<void>) | undefined
  onOpen?: ((window: Window) => Promisable<void>) | undefined
  onUnload?: ((a: null) => Promisable<void>) | undefined
  shouldHaveFocus?: boolean | undefined
  showPrompt?: boolean | undefined
  title?: string | undefined
  url?: string | undefined
}

type DefinedNewWindowProps = Required<Define<NewWindowProps>>

type NewWindowState = {
  mounted: boolean
}
export class NewWindow extends PureComponent<NewWindowProps, NewWindowState> {
  private container: HTMLDivElement | null
  private released: boolean
  private window: Window | null
  private windowCheckerInterval: NodeJS.Timer | undefined

  constructor(props: NewWindowProps) {
    super(props)

    this.container = null
    this.window = null
    this.windowCheckerInterval = undefined
    this.released = false
    this.state = {
      mounted: false
    }
    this.beforeUnloadListener = this.beforeUnloadListener.bind(this)
  }

  override componentDidMount() {
    const { onChangeFocus } = this.props as DefinedNewWindowProps

    this.openChild()
    this.setState({ mounted: true })

    this.window?.addEventListener('beforeunload', this.beforeUnloadListener, { capture: true })

    this.window?.addEventListener('blur', () => {
      onChangeFocus(false)
    })
    this.window?.addEventListener('focus', () => {
      onChangeFocus(true)
    })
  }

  override componentDidUpdate(prevProps) {
    const { shouldHaveFocus } = this.props
    if (prevProps.shouldHaveFocus !== shouldHaveFocus && shouldHaveFocus) {
      this.window?.focus()
    }
  }

  /**
   * Closes the opened window (if any) when NewWindow will unmount if the
   * prop {closeOnUnmount} is true, otherwise the NewWindow will remain open
   */
  override componentWillUnmount() {
    const { children, closeOnUnmount } = this.props
    if (this.window) {
      if (closeOnUnmount) {
        this.window.close()
      } else if (children) {
        // Clone any children so they aren't removed when react stops rendering
        const clone = this.container?.cloneNode(true) as HTMLDivElement
        clone?.setAttribute('id', 'new-window-container-static')
        this.window.document.body.appendChild(clone)
      }
    }
    this.window?.removeEventListener('beforeunload', this.beforeUnloadListener, { capture: true })
  }

  beforeUnloadListener(event: BeforeUnloadEvent) {
    const { showPrompt } = this.props

    if (showPrompt) {
      event.preventDefault()

      // eslint-disable-next-line no-param-reassign, no-return-assign
      return (event.returnValue = 'blocked')
    }

    // eslint-disable-next-line no-return-assign, no-param-reassign
    return null
  }

  /**
   * Create the new window when NewWindow component mount.
   */
  openChild() {
    const { center, copyStyles, features, name, onBlock, onOpen, title, url } = this.props as DefinedNewWindowProps

    // Prepare position of the new window to be centered against the 'parent' window or 'screen'.
    if (typeof center === 'string' && (features.width === undefined || features.height === undefined)) {
      console.warn('width and height window features must be present when a center prop is provided')
    } else if (center === 'parent') {
      if (!window.top) {
        console.error('`window.top` is null.')

        return
      }

      features.left = window.top.outerWidth / 2 + window.top.screenX - (features.width as number) / 2
      features.top = window.top.outerHeight / 2 + window.top.screenY - (features.height as number) / 2
    } else if (center === 'screen') {
      // eslint-disable-next-line no-nested-ternary
      const width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : window.screen.width
      // eslint-disable-next-line no-nested-ternary
      const height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : window.screen.height

      features.left = width / 2 - (features.width as number) / 2 + window.screenLeft
      features.top = height / 2 - (features.height as number) / 2 + window.screenTop
    }

    // Open a new window.
    this.window = window.open(url, name, toWindowFeatures(features))
    this.container = this.window?.document.createElement('div') as HTMLDivElement
    // When a new window use content from a cross-origin there's no way we can attach event
    // to it. Therefore, we need to detect in a interval when the new window was destroyed
    // or was closed.
    this.windowCheckerInterval = setInterval(() => {
      if (!this.window || this.window.closed) {
        this.release()
      }
    }, 50)

    // Check if the new window was succesfully opened.
    if (this.window) {
      this.window.document.title = title

      // Check if the container already exists as the window may have been already open
      this.container = this.window.document.getElementById('new-window-container') as HTMLDivElement
      if (this.container === null) {
        this.container = this.window.document.createElement('div')
        this.container.setAttribute('id', 'new-window-container')
        this.window.document.body.appendChild(this.container)
      } else {
        // Remove any existing content
        const staticContainer = this.window.document.getElementById(
          'new-window-container-static'
        ) as HTMLDivElement | null
        if (staticContainer) {
          this.window.document.body.removeChild(staticContainer)
        }
      }

      // If specified, copy styles from parent window's document.
      if (copyStyles) {
        setTimeout(() => onCopyStyles(document, this.window?.document), 0)
      }

      if (typeof onOpen === 'function') {
        onOpen(this.window)
      }

      // Release anything bound to this component before the new window unload.
    } else if (typeof onBlock === 'function') {
      // Handle error on opening of new window.
      onBlock(null)
    } else {
      console.warn('A new window could not be opened. Maybe it was blocked.')
    }
  }

  /**
   * Release the new window and anything that was bound to it.
   */
  release() {
    // This method can be called once.
    if (this.released) {
      return
    }
    this.released = true

    // Remove checker interval.
    clearInterval(this.windowCheckerInterval)

    // Call any function bound to the `onUnload` prop.
    const { onUnload } = this.props

    if (typeof onUnload === 'function') {
      onUnload(null)
    }
  }

  override render() {
    const { mounted } = this.state
    const { children } = this.props
    if (!mounted || !this.container) {
      return null
    }

    return ReactDOM.createPortal(children, this.container) as any
  }
}

;(NewWindow as any).defaultProps = {
  center: 'parent',
  closeOnUnmount: true,
  copyStyles: true,
  features: { height: '640px', width: '600px' },
  name: '',
  onBlock: null,
  onChangeFocus: () => {},
  onOpen: null,
  onUnload: null,
  shouldHaveFocus: false,
  showPrompt: false,
  title: '',
  url: ''
}

/**
 * Utility functions.
 * @private
 */

/**
 * Copy styles from a source document to a target.
 */
function onCopyStyles(source: Document, target: Document | undefined): void {
  if (!target) {
    console.error('`target` is undefined.')

    return
  }

  // Store style tags, avoid reflow in the loop
  const headFrag = target.createDocumentFragment()

  Array.from(source.styleSheets).forEach(styleSheet => {
    // For <style> elements
    let rules
    try {
      rules = styleSheet.cssRules
    } catch (err) {
      console.error(err)
    }
    if (rules) {
      // IE11 is very slow for appendChild, so use plain string here
      const ruleText: string[] = []

      // Write the text of each rule into the body of the style element
      Array.from(styleSheet.cssRules).forEach(cssRule => {
        const { type } = cssRule

        let returnText = ''

        if (type === CSSRule.KEYFRAMES_RULE) {
          // IE11 will throw error when trying to access cssText property, so we
          // need to assemble them
          returnText = getKeyFrameText(cssRule)
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
// This should be `CSSRule` instead of `any` but this code is a bit tedious.
function getKeyFrameText(cssRule: any /** CSSRule */): string {
  const tokens = ['@keyframes', cssRule.name, '{']
  Array.from(cssRule.cssRules).forEach((keyframesCssRule: any) => {
    // type === CSSRule.KEYFRAME_RULE should always be true
    tokens.push(keyframesCssRule.keyText, '{', keyframesCssRule.style.cssText, '}')
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
    .map(line => {
      if (line[1] === '/') {
        return `${line.slice(0, 1)}${window.location.origin}${line.slice(1)}`
      }

      return line
    })
    .join('url(')
}

/**
 * Convert features props to window features format (name=value, other=value).
 */
function toWindowFeatures(features: NewWindowProps['features'] | undefined): string {
  if (!features) {
    return ''
  }

  return Object.keys(features)
    .reduce((featuresAsStrings, name) => {
      const value = features[name]
      if (typeof value === 'boolean') {
        featuresAsStrings.push(`${name}=${value ? 'yes' : 'no'}`)
      } else {
        featuresAsStrings.push(`${name}=${value}`)
      }

      return featuresAsStrings
    }, [] as any)
    .join(',')
}
