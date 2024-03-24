import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import {
  FAKE_NUMBER_TREE_OPTIONS,
  FAKE_OBJECT_TREE_OPTIONS,
  FAKE_STRING_TREE_OPTIONS
} from '../../../__mocks__/fake_tree_options'
import { type MultiCascaderProps, MultiCascader, useFieldControl } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const OPTIONS_TYPES = {
  string: FAKE_STRING_TREE_OPTIONS,
  number: FAKE_NUMBER_TREE_OPTIONS,
  object: FAKE_OBJECT_TREE_OPTIONS
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

describe('fields/MultiCascader', () => {
  function MultiCascaderStory({ value, ...otherProps }: MultiCascaderProps) {
    const [outputValue, setOutputValue] = useState<any>('∅')

    const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

    return (
      <StoryBox>
        <MultiCascader onChange={controlledOnChange} value={controlledValue} {...otherProps} />

        {outputValue !== '∅' && <Output value={outputValue} />}
      </StoryBox>
    )
  }

  Object.keys(OPTIONS_TYPES).forEach(optionType => {
    context(`With ${optionType} tree options`, () => {
      const options = OPTIONS_TYPES[optionType]
      const commonProps: MultiCascaderProps = {
        label: 'A multiple cascader',
        name: 'myMultiCascader',
        options,
        ...(optionType === 'object'
          ? {
              optionValueKey: 'name' as any
            }
          : {})
      }

      it('Should fill the multiple cascader with `searcheable`', () => {
        mountAndWait(
          <StoryBox>
            <MultiCascaderStory {...commonProps} searchable />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple cascader', [options[0].children[0].label])

        outputShouldBe([options[0].children[0].value])

        cy.fill('A multiple cascader', [options[0].children[1].label, options[1].children[0].label])

        outputShouldBe([options[0].children[1].value, options[1].children[0].value])
      })

      it('Should fill, change and clear the multiple cascader with `searchable value`', () => {
        mountAndWait(
          <StoryBox>
            <MultiCascaderStory {...commonProps} searchable value={[options[0].children[1].value]} />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple cascader', [options[0].children[0].label])

        outputShouldBe([options[0].children[0].value])

        cy.fill('A multiple cascader', [options[0].children[1].label, options[1].children[0].label])

        outputShouldBe([options[0].children[1].value, options[1].children[0].value])

        cy.fill('A multiple cascader', undefined)

        outputShouldBe(undefined)
      })

      it('Should fill the multiple cascader with `isLabelHidden searcheable`', () => {
        mountAndWait(
          <StoryBox>
            <MultiCascaderStory {...commonProps} isLabelHidden searchable />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple cascader', [options[0].children[0].label])

        outputShouldBe([options[0].children[0].value])
      })

      it('Should NOT call `onChange(undefined)` with `disabled searcheable`', () => {
        mountAndWait(
          <StoryBox>
            <MultiCascaderStory {...commonProps} disabled searchable />
          </StoryBox>
        )

        outputShouldNotBe()
      })

      it('Should NOT call `onChange(undefined)` with `disabled searchable value`', () => {
        mountAndWait(
          <StoryBox>
            <MultiCascaderStory {...commonProps} disabled searchable value={[options[0].children[1].value]} />
          </StoryBox>
        )

        outputShouldNotBe()
      })

      it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled searchable`', () => {
        mountAndWait(
          <StoryBox>
            <MultiCascaderStory {...commonProps} disabled isUndefinedWhenDisabled searchable />
          </StoryBox>
        )

        outputShouldBe(undefined)
      })

      it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled searchable value`', () => {
        mountAndWait(
          <StoryBox>
            <MultiCascaderStory
              {...commonProps}
              disabled
              isUndefinedWhenDisabled
              searchable
              value={[options[0].children[1].value]}
            />
          </StoryBox>
        )

        outputShouldBe(undefined)
      })
    })
  })
})
