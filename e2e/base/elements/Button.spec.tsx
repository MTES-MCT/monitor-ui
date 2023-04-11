import { composeStories } from '@storybook/testing-react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import * as baseStories from '../../../stories/tests/button.stories'
import { mountAndWait, outputShouldBe } from '../utils'

const { Template: BaseStory } = composeStories(baseStories as any) as any

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <BaseStory />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should click a button by its label', () => {
    cy.clickButton('A button')

    outputShouldBe('A button')
  })

  it('Should click a button by its aria label', () => {
    cy.clickButton('A button aria label')

    outputShouldBe('A button aria label')
  })

  it('Should click a button by its title', () => {
    cy.clickButton('A button title')

    outputShouldBe('A button title')
  })

  it('Should click a button by its label when in another element', () => {
    cy.get('[data-id="0"]').clickButton('The first line button')

    outputShouldBe('The first line button')
  })

  it('Should click a button by its aria label when in another element', () => {
    cy.get('[data-id="1"]').clickButton('The second line button aria label')

    outputShouldBe('The second line button aria label')
  })

  it('Should click a button by its title when in another element', () => {
    cy.get('[data-id="2"]').clickButton('The third line button title')

    outputShouldBe('The third line button title')
  })
})
