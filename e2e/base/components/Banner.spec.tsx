import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { Banner, Level, type BannerProps } from '../../../src'
import { _Banner as BannerStory } from '../../../stories/components/Banner.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context(`Story`, () => {
  describe('default visibility', () => {
    it('should not show the banner when isHiddenByDefault is true', () => {
      mountAndWait(
        <StoryBox>
          <BannerStory isClosable={false} isCollapsible isHiddenByDefault level={Level.SUCCESS} top="60px">
            some text
          </BannerStory>
        </StoryBox>
      )

      cy.get('.Banner-Storie').should('not.be.visible')
    })

    it('should show the banner when isHiddenByDefault is false', () => {
      mountAndWait(
        <StoryBox>
          <BannerStory isClosable={false} isCollapsible isHiddenByDefault={false} level={Level.SUCCESS} top="60px">
            some text
          </BannerStory>
        </StoryBox>
      )

      cy.get('.Banner-Storie').should('be.visible')
    })

    it('should show the banner when isHiddenByDefault is undefined', () => {
      mountAndWait(
        <StoryBox>
          <BannerStory isClosable={false} isCollapsible isHiddenByDefault={undefined} level={Level.SUCCESS} top="60px">
            some text
          </BannerStory>
        </StoryBox>
      )

      cy.get('.Banner-Storie').should('be.visible')
    })
  })

  describe('closable version', () => {
    it('should disappear when the action button is clicked', () => {
      mountAndWait(
        <StoryBox>
          <BannerStory isClosable isCollapsible={false} isHiddenByDefault={false} level={Level.SUCCESS} top="60px">
            some text
          </BannerStory>
        </StoryBox>
      )

      cy.get('.banner-button').first().click()
      cy.get('.Banner-Storie').should('not.be.visible')
    })
  })

  describe('collapsible version', () => {
    it('should collapse when the action button is clicked', () => {
      mountAndWait(
        <StoryBox>
          <BannerStory isClosable={false} isCollapsible isHiddenByDefault={false} level={Level.SUCCESS} top="60px">
            some text
          </BannerStory>
        </StoryBox>
      )

      // check it's fully opened
      cy.get('.Banner-Storie').invoke('outerHeight').should('be.gt', 10)
      // click on the hide button
      cy.get('.banner-button').first().click()
      // check it's shrunk
      cy.get('.Banner-Storie').invoke('outerHeight').should('be.equal', 10)
    })
  })
})

function BaseStory(props: Partial<BannerProps>) {
  const [hasAutoClosed, setHasAutoClosed] = useState<boolean>(false)
  const [hasClosed, setHasClosed] = useState<boolean>(false)

  return (
    <StoryBox>
      <Banner
        level={Level.SUCCESS}
        onAutoClose={() => setHasAutoClosed(true)}
        onClose={() => setHasClosed(true)}
        top="0"
        {...props}
      >
        some text
      </Banner>

      <Output
        value={{
          hasAutoClosed,
          hasClosed
        }}
      />
    </StoryBox>
  )
}

context(`Base`, () => {
  describe('with `closingDelay`, `isClosable` and `withAutomaticClosing`', () => {
    it('should call both `onAutoClose()` and `onClose()` when waiting for auto-closing', () => {
      mountAndWait(<BaseStory closingDelay={250} isClosable withAutomaticClosing />)

      cy.get('.Component-Banner').should('be.empty')

      outputShouldBe({
        hasAutoClosed: true,
        hasClosed: true
      })
    })

    it('should only call `onClose()` when clicking on closing button', () => {
      mountAndWait(<BaseStory closingDelay={99999} isClosable withAutomaticClosing />)

      cy.clickButton('Fermer')

      cy.get('.Component-Banner').should('be.empty')

      outputShouldBe({
        hasAutoClosed: false,
        hasClosed: true
      })
    })
  })

  describe('with `closingDelay`, `isCollapsible` and `withAutomaticClosing`', () => {
    it('should call both `onAutoClose()` and `onClose()` when waiting for auto-closing', () => {
      mountAndWait(<BaseStory closingDelay={250} isCollapsible withAutomaticClosing />)

      cy.get('.Component-Banner').should('be.empty')

      outputShouldBe({
        hasAutoClosed: true,
        hasClosed: true
      })
    })

    it('should only call `onClose()` when clicking on closing button', () => {
      mountAndWait(<BaseStory closingDelay={99999} isCollapsible withAutomaticClosing />)

      cy.clickButton('Masquer')

      cy.get('.Component-Banner').should('be.empty')

      outputShouldBe({
        hasAutoClosed: false,
        hasClosed: true
      })
    })
  })
})
