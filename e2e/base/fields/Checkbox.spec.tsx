import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { _Checkbox as CheckboxStory } from '../../../stories/fields/Checkbox.stories'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

import type { CheckboxProps } from '../../../src'

context('Story', () => {
  const commonProps: CheckboxProps = {
    label: 'A checkbox',
    name: 'myCheckbox'
  }

  it('Should fill, change and clear the checkbox', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <CheckboxStory {...commonProps} />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.fill('A checkbox', true)

    outputShouldBe(true)

    cy.fill('A checkbox', false)

    outputShouldBe(false)
  })

  it('Should fill, change and clear the checkbox with `checked`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <CheckboxStory {...commonProps} checked />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.fill('A checkbox', false)

    outputShouldBe(false)

    cy.fill('A checkbox', true)

    outputShouldBe(true)
  })

  it('Should NOT call `onChange(undefined)` with `disabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <CheckboxStory {...commonProps} disabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()
  })

  it('Should NOT call `onChange(undefined)` with `checked disabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <CheckboxStory {...commonProps} checked disabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <CheckboxStory {...commonProps} disabled isUndefinedWhenDisabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldBe(undefined)
  })

  it('Should call `onChange(undefined)` with `checked disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <CheckboxStory {...commonProps} checked disabled isUndefinedWhenDisabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldBe(undefined)
  })
})
