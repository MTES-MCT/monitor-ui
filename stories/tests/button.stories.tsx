import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { Button } from '../../src'

export default {
  title: 'Tests/Button',

  parameters: {
    options: {
      showPanel: false
    }
  }
}

export function Template() {
  const [outputValue, setOutputValue] = useState<any>('∅')

  return (
    <>
      <Button onClick={() => setOutputValue('A button')}>A button</Button>
      <Button aria-label="A button aria label" onClick={() => setOutputValue('A button aria label')}>
        A button with an aria label
      </Button>
      <Button onClick={() => setOutputValue('A button title')} title="A button title">
        A button with a title
      </Button>

      <table>
        <tbody>
          <tr data-id="0">
            <td>
              <Button onClick={() => setOutputValue('The first line button')}>The first line button</Button>
            </td>
          </tr>
          <tr data-id="1">
            <td>
              <Button
                aria-label="The second line button aria label"
                onClick={() => setOutputValue('The second line button aria label')}
              >
                A second line button with an aria label
              </Button>
            </td>
          </tr>
          <tr data-id="2">
            <td>
              <Button onClick={() => setOutputValue('The third line button title')} title="The third line button title">
                A third line button with a title
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
