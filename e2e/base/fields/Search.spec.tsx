import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { Search, useFieldControl, type SearchProps } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const OPTIONS_TYPES = {
  string: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' }
  ],
  number: [
    { label: 'First Option', value: 0 },
    { label: 'Second Option', value: 1 },
    { label: 'Third Option', value: 2 }
  ],
  object: [
    { label: 'First Option', value: { id: 0, name: 'First Option Name' } },
    { label: 'Second Option', value: { id: 1, name: 'Second Option Name' } },
    { label: 'Third Option', value: { id: 2, name: 'Third Option Name' } }
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

function SearchStory({ value, ...otherProps }: SearchProps) {
  const [outputValue, setOutputValue] = useState<any>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <StoryBox>
      <Search onChange={controlledOnChange} value={controlledValue} {...otherProps} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </StoryBox>
  )
}

describe('fields/Search', () => {
  Object.keys(OPTIONS_TYPES).forEach(optionType => {
    context(`With ${optionType} options`, () => {
      const options = OPTIONS_TYPES[optionType]
      const commonProps: SearchProps = {
        label: 'A search',
        name: 'mySearch',
        options,
        ...(optionType === 'object'
          ? {
              optionValueKey: 'name' as any
            }
          : {})
      }

      it('Should fill, change and clear the search', () => {
        mountAndWait(
          <StoryBox>
            <SearchStory {...commonProps} />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A search', 'first')

        outputShouldBe(options[0].value)

        cy.fill('A search', 'second')

        outputShouldBe(options[1].value)
      })
    })
  })
})
