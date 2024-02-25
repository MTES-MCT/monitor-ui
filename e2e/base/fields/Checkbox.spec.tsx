import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { Checkbox, useFieldControl, type CheckboxProps } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

function CheckboxStory({ checked, ...otherProps }: CheckboxProps) {
  const [outputValue, setOutputValue] = useState<boolean | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue: controlledChecked } = useFieldControl(checked, setOutputValue)

  return (
    <>
      <Checkbox {...otherProps} checked={controlledChecked} onChange={controlledOnChange} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}

context('Base', () => {
  const commonProps: CheckboxProps = {
    label: 'A checkbox',
    name: 'myCheckbox'
  }

  it('Should fill, change and clear the checkbox', () => {
    mountAndWait(
      <StoryBox>
        <CheckboxStory {...commonProps} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A checkbox', true)

    outputShouldBe(true)

    cy.fill('A checkbox', false)

    outputShouldBe(false)
  })

  it('Should fill, change and clear the checkbox with `checked`', () => {
    mountAndWait(
      <StoryBox>
        <CheckboxStory {...commonProps} checked />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A checkbox', false)

    outputShouldBe(false)

    cy.fill('A checkbox', true)

    outputShouldBe(true)
  })

  it('Should NOT call `onChange(undefined)` with `disabled`', () => {
    mountAndWait(
      <StoryBox>
        <CheckboxStory {...commonProps} disabled />
      </StoryBox>
    )

    outputShouldNotBe()
  })

  it('Should NOT call `onChange(undefined)` with `checked disabled`', () => {
    mountAndWait(
      <StoryBox>
        <CheckboxStory {...commonProps} checked disabled />
      </StoryBox>
    )

    outputShouldNotBe()
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <StoryBox>
        <CheckboxStory {...commonProps} disabled isUndefinedWhenDisabled />
      </StoryBox>
    )

    outputShouldBe(undefined)
  })

  it('Should call `onChange(undefined)` with `checked disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <StoryBox>
        <CheckboxStory {...commonProps} checked disabled isUndefinedWhenDisabled />
      </StoryBox>
    )

    outputShouldBe(undefined)
  })
})
