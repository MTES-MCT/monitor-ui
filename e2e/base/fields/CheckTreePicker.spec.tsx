import { CheckTreePicker, type CheckTreePickerProps } from '@fields/CheckTreePicker'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import TAGS from '../../../.storybook/data/tags.json'
import { useFieldControl } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

import type { TreeOption } from '@fields/CheckTreePicker/types'

const options = TAGS! as TreeOption[]
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

    cy.fill('A check tree picker', ['Pollution marine'])

    outputShouldBe([{ children: [], label: 'Pollution marine', value: 'pollution_marine' }])

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

  it('Should select parent when selecting child', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.get('.rs-picker').click().get('.rs-picker-popup').find('[role="treeitem"]').contains('Pollution marine').click()
    cy.clickOutside()

    outputShouldBe([
      {
        children: [],
        label: 'Pollution marine',
        value: 'pollution_marine'
      }
    ])

    cy.get('.rs-picker').click().get('.rs-picker-popup').find('[role="treeitem"]').contains('Pollution marine').click()

    outputShouldBe(undefined)
  })

  it('Should unselect children when unselecting child', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} value={[options[0]!]} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.get('.rs-picker').click().get('.rs-picker-popup').find('[role="treeitem"]').contains('Pollution marine').click()
    outputShouldBe(undefined)
  })

  it('Should fill the check picker with `isLabelHidden`', () => {
    mountAndWait(
      <StoryBox>
        <CheckTreePickerStory {...commonProps} isLabelHidden />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A check tree picker', ['Pollution marine'])

    outputShouldBe([{ children: [], label: 'Pollution marine', value: 'pollution_marine' }])
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
