import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { _Select as SelectStory } from '../../../stories/fields/Select/Select.stories'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

import type { SelectProps } from '../../../src'

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
    const commonProps: SelectProps = {
      label: 'A select',
      name: 'mySelect',
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
          <SelectStory {...commonProps} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A select', options[0].label)

      outputShouldBe(options[0].value)

      cy.fill('A select', options[1].label)

      outputShouldBe(options[1].value)

      cy.fill('A select', undefined)

      outputShouldBe(undefined)
    })

    it(`Should fill, change and clear the select with \`value={${JSON.stringify(options[2].value)}}\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} value={options[2].value} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A select', options[0].label)

      outputShouldBe(options[0].value)

      cy.fill('A select', options[1].label)

      outputShouldBe(options[1].value)

      cy.fill('A select', undefined)

      outputShouldBe(undefined)
    })

    it('Should fill the select with `isLabelHidden`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} isLabelHidden />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A select', options[0].label)

      outputShouldBe(options[0].value)
    })

    it('Should NOT call `onChange(undefined)` with `disabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} disabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it(`Should NOT call \`onChange(undefined)\` with \`disabled value={${JSON.stringify(options[2].value)}}\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} disabled value={options[2].value} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} disabled isUndefinedWhenDisabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })

    it(`Should call \`onChange(undefined)\` with \`disabled isUndefinedWhenDisabled value={${JSON.stringify(
      options[2].value
    )}}\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} disabled isUndefinedWhenDisabled value={options[2].value} />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })
  })
})
