import { GlobalStyle, ThemeProvider } from '@mtes-mct/monitor-ui'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import 'rsuite/dist/rsuite.min.css'
import '@mtes-mct/monitor-ui/assets/stylesheets/rsuite-override.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />

      <App />
    </ThemeProvider>
  </React.StrictMode>
)
