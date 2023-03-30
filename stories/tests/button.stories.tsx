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

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
