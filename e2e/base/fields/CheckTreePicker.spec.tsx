import { CheckTreePicker, type CheckTreePickerProps } from '@fields/CheckTreePicker'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { TAGS } from '../../../.storybook/data/tags'
import { useFieldControl } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

const options = TAGS()

function CheckTreePickerStory({ value, ...otherProps }: CheckTreePickerProps) {
  const [outputValue, setOutputValue] = useState<any>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <StoryBox>
      <CheckTreePicker onChange={controlledOnChange} value={controlledValue} {...otherProps} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </StoryBox>
  )
}

describe('fields/CheckTreePicker', () => {
  const commonProps: CheckTreePickerProps = {
    label: 'A check tree picker',
    name: 'myCheckTreePicker',
    options
  }

  it('Should fill, change and clear the check picker', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A check tree picker', ['Microplastiques'])

    outputShouldBe([
      {
        children: [
          {
            label: 'Microplastiques',
            value: 'microplastiques'
          }
        ],
        label: 'Pollution marine',
        value: 'pollution_marine'
      }
    ])

    cy.fill('A check tree picker', ['Marées noires'])

    outputShouldBe([
      {
        children: [{ label: 'Marées noires', value: 'marees_noires' }],
        label: 'Pollution marine',
        value: 'pollution_marine'
      }
    ])

    cy.fill('A check tree picker', ['Marées noires', 'Protection des coraux'])

    outputShouldBe([
      {
        children: [{ label: 'Marées noires', value: 'marees_noires' }],
        label: 'Pollution marine',
        value: 'pollution_marine'
      },
      {
        children: [{ label: 'Protection des coraux', value: 'protection_coraux' }],
        label: 'Biodiversité marine',
        value: 'biodiversite_marine'
      }
    ])

    cy.fill('A check tree picker', undefined)

    outputShouldBe(undefined)
  })

  it('Should fill, change and clear the check picker with modified children key', () => {
    const customOptions = [
      {
        label: 'Entry 1',
        subTags: [
          { label: 'Subtag 1', value: 3 },
          { label: 'Subtag 2', value: 4 }
        ],
        value: 1
      },
      {
        label: 'Entry 2',
        subTags: [
          { label: 'Subtag 3', value: 5 },
          { label: 'Subtag 4', value: 6 }
        ],
        value: 2
      }
    ]
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} childrenKey="subTags" options={customOptions} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A check tree picker', ['Subtag 3'])

    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    outputShouldBe([{ subTags: [{ label: 'Subtag 3', value: 5 }], label: 'Entry 2', value: 2 }])

    cy.fill('A check tree picker', ['Subtag 1', 'Subtag 2'])
    outputShouldBe([
      {
        subTags: [
          { label: 'Subtag 1', value: 3 },
          { label: 'Subtag 2', value: 4 }
        ],
        // eslint-disable-next-line sort-keys-fix/sort-keys-fix
        label: 'Entry 1',
        value: 1
      }
    ])

    cy.fill('A check tree picker', undefined)

    outputShouldBe(undefined)
  })

  it('Should disabled all other options when multi selected is off', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} isMultiSelect={false} />
      </StoryBox>
    )

    cy.fill('A check tree picker', ['Protection des coraux'])

    outputShouldBe([
      {
        children: [{ label: 'Protection des coraux', value: 'protection_coraux' }],
        label: 'Biodiversité marine',
        value: 'biodiversite_marine'
      }
    ])

    const labelsThatShouldNotBeDisabled = (options[1]?.children as any[]).map(child => child.label)

    cy.get('.rs-picker')
      .click()
      .get('.rs-check-tree-node-children')
      .each($node => {
        cy.wrap($node)
          .find('input')
          .each($input => {
            const label = $input.closest('label').text().trim()
            if (!labelsThatShouldNotBeDisabled.includes(label)) {
              cy.wrap($input).should('be.disabled')
            }
          })
      })

    outputShouldBe([
      {
        children: [{ label: 'Protection des coraux', value: 'protection_coraux' }],
        label: 'Biodiversité marine',
        value: 'biodiversite_marine'
      }
    ])
  })

  it('Should fill the check picker with `isLabelHidden`', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} isLabelHidden />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A check tree picker', ['Microplastiques'])

    outputShouldBe([
      {
        children: [
          {
            label: 'Microplastiques',
            value: 'microplastiques'
          }
        ],
        label: 'Pollution marine',
        value: 'pollution_marine'
      }
    ])
  })

  it('Should fill the check picker with `searchable`', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} searchable />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A check tree picker', ['Marées noires', 'Protection des coraux'])

    outputShouldBe([
      {
        children: [{ label: 'Marées noires', value: 'marees_noires' }],
        label: 'Pollution marine',
        value: 'pollution_marine'
      },
      {
        children: [{ label: 'Protection des coraux', value: 'protection_coraux' }],
        label: 'Biodiversité marine',
        value: 'biodiversite_marine'
      }
    ])
  })

  it('Should NOT call `onChange(undefined)` with `disabled`', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} disabled />
      </StoryBox>
    )

    outputShouldNotBe()
  })

  it('Should NOT call `onChange(undefined)` with `disabled value`', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} disabled value={[options[2]!]} />
      </StoryBox>
    )

    outputShouldNotBe()
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} disabled isUndefinedWhenDisabled />
      </StoryBox>
    )

    outputShouldBe(undefined)
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled value`', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} disabled isUndefinedWhenDisabled value={[options[2]!]} />
      </StoryBox>
    )

    outputShouldBe(undefined)
  })

  // TODO (17/03/2025): custom search
})
