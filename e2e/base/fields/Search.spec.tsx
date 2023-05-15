import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { WithOptions } from '../../../stories/fields/Search/WithOptions.stories'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

import type { SearchProps } from '../../../src'

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

Object.keys(OPTIONS_TYPES).forEach(optionType => {
  context(`Story (${optionType} options)`, () => {
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

    it('Should fill, change and clear the select', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <WithOptions {...commonProps} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A search', 'first')
      cy.get('div[role="option"] > span').contains('First Option').click()

      outputShouldBe(options[0].value)
    })
  })
})
