import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
import { MultiRadio, useFieldControl, type MultiRadioProps } from '../../../src'
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

function MultiRadioStory({ value, ...otherProps }: MultiRadioProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <>
      <MultiRadio {...otherProps} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}

Object.keys(OPTIONS_TYPES).forEach(optionType => {
  context(`With ${optionType} options`, () => {
    const options = OPTIONS_TYPES[optionType]
    const commonProps: MultiRadioProps = {
      label: 'A multiple radio',
      name: 'myMultiRadio',
      options,
      ...(optionType === 'object'
        ? {
            optionValueKey: 'name' as any
          }
        : {})
    }

    it('Should fill and change the multiple radio', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiRadioStory {...commonProps} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A multiple radio', options[0].label)

      outputShouldBe(options[0].value)

      cy.fill('A multiple radio', options[1].label)

      outputShouldBe(options[1].value)
    })

    it(`Should fill and change the multiple radio with \`value={${JSON.stringify(options[2].value)}}\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiRadioStory {...commonProps} value={options[2].value} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A multiple radio', options[0].label)

      outputShouldBe(options[0].value)

      cy.fill('A multiple radio', options[1].label)

      outputShouldBe(options[1].value)
    })

    it('Should fill the multiple radio with `isLabelHidden`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiRadioStory {...commonProps} isLabelHidden />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A multiple radio', options[0].label)

      outputShouldBe(options[0].value)
    })

    it('Should NOT call `onChange(undefined)` with `disabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiRadioStory {...commonProps} disabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it(`Should NOT call \`onChange(undefined)\` with \`disabled value={${JSON.stringify(options[2].value)}}\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiRadioStory {...commonProps} disabled value={options[2].value} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiRadioStory {...commonProps} disabled isUndefinedWhenDisabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })

    it(`Should call \`onChange(undefined)\` with \`disabled isUndefinedWhenDisabled value={${JSON.stringify(
      options[2].value
    )}}\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiRadioStory {...commonProps} disabled isUndefinedWhenDisabled value={options[2].value} />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })
  })
})
