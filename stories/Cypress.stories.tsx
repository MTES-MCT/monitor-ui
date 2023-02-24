import styled from 'styled-components'

import { noop } from '../src'
import CypressDocumentation from './Cypress.mdx'

export default {
  title: 'Cypress',
  component: noop,

  parameters: {
    docs: {
      page: CypressDocumentation
    },
    // https://storybooks.netlify.app/configurations/options-parameter/
    options: {
      isToolshown: false,
      showPanel: false
    }
  }
}

export function _Cypress() {
  return (
    <Box>
      <h1>Cypress</h1>
      <h2>Custom Commands</h2>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`
