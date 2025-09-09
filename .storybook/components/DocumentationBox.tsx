import { CustomProvider as RsuiteCustomProvider } from 'rsuite'
import rsuiteFrFr from 'rsuite/locales/fr_FR'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { GlobalStyle, THEME } from '../../src'

const CustomGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    overflow-y: scroll;
  }

  #storybook-docs {
    > .sbdocs-wrapper {
      background-color: #f6f9fc;
      padding: 16px 32px !important;

      > .sbdocs-content {
        max-width: unset;
        width: 100%;
      }

      /* TOC */
      > div:last-child {
        > div {
          width: 100%;
        }
      }

      > .sbdocs-content,
      > .sbdocs-content > div.custom-wrapper {
        *:where(span:not(.sb-anchor, .sb-unstyled, .sb-unstyled span)),
        *:where(div:not(.sb-anchor, .sb-unstyled, .sb-unstyled div)) {
          font-family: 'Marianne', sans-serif;
          font-size: inherit;
        }

        code {
          background-color: #ffffff;
          border: solid 1px rgba(38, 85, 115, 0.15);
          color: rgb(128, 0, 0);
          font-size: 13px;
          padding: 2px 6px;
          line-height: 18px;
          vertical-align: 1px;
        }

        h1 {
          font-size: 32px;
          font-weight: 700;
          line-height: 64px;
          margin: 0;
          padding: 0;
        }

        h2 {
          font-size: 21px;
          font-weight: 700;
          line-height: 22px;
          margin: 32px 0 0;
          padding: 0 0 8px;

          &:nth-child(2) {
            margin: 8px 0 0;
          }
        }

        h3 {
          font-size: 18px;
          font-weight: 700;
          line-height: 22px;
          margin: 16px 0 0;
          padding: 0 0 8px;
        }

        a, li, p {
          font-size: 16px;
          line-height: 24px;
        }

        li {
          margin: 0;
        }

        p {
          margin: 12px 0 0
        }

        ul {
          margin: 8px 0 0
        }

        > div:not(.custom-wrapper) {
          margin-top: 16px;
        }

        .docblock-icongallery {
          > div {
            min-width: 160px;
          }
        }

        .docblock-source {
          margin: 16px 0 0
        }
      }
    }
  }
`

export function DocumentationBox(props: any) {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <CustomGlobalStyle />

      <RsuiteCustomProvider locale={rsuiteFrFr}>
        <div {...props} className="custom-wrapper" />
      </RsuiteCustomProvider>
    </ThemeProvider>
  )
}
