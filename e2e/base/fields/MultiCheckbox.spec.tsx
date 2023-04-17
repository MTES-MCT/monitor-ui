import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { _MultiCheckbox as MultiCheckboxStory } from '../../../stories/fields/MultiCheckbox.stories'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

import type { MultiCheckboxProps } from '../../../src'

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
    const commonProps: MultiCheckboxProps = {
      label: 'A multiple checkbox',
      name: 'myMultiCheckbox',
      options,
      ...(optionType === 'object'
        ? {
            optionValueKey: 'name' as any
          }
        : {})
    }

    it('Should fill, change and clear the multiple checkbox', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiCheckboxStory {...commonProps} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A multiple checkbox', [options[0].label])

      outputShouldBe([options[0].value])

      cy.fill('A multiple checkbox', [options[1].label, options[2].label])

      outputShouldBe([options[1].value, options[2].value])

      cy.fill('A multiple checkbox', undefined)

      outputShouldBe(undefined)
    })

    it(`Should fill, change and clear the multiple checkbox with \`value={[${JSON.stringify(
      options[2].value
    )}]\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiCheckboxStory {...commonProps} value={[options[2].value]} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A multiple checkbox', [options[0].label])

      outputShouldBe([options[0].value])

      cy.fill('A multiple checkbox', [options[1].label, options[2].label])

      outputShouldBe([options[1].value, options[2].value])

      cy.fill('A multiple checkbox', undefined)

      outputShouldBe(undefined)
    })

    it('Should fill the multiple checkbox with `isLabelHidden`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiCheckboxStory {...commonProps} isLabelHidden />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A multiple checkbox', [options[0].label])

      outputShouldBe([options[0].value])
    })

    it('Should NOT call `onChange(undefined)` with `disabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiCheckboxStory {...commonProps} disabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it(`Should NOT call \`onChange(undefined)\` with \`disabled value={[${JSON.stringify(options[2].value)}]\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiCheckboxStory {...commonProps} disabled value={[options[2].value]} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiCheckboxStory {...commonProps} disabled isUndefinedWhenDisabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })

    it(`Should call \`onChange(undefined)\` with \`disabled isUndefinedWhenDisabled value={[${JSON.stringify(
      options[2].value
    )}]\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiCheckboxStory {...commonProps} disabled isUndefinedWhenDisabled value={[options[2].value]} />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })
  })
})
