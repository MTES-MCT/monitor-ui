import { StoryBox } from '../../../.storybook/components/StoryBox'
import { Level } from '../../../src'
import { _Banner as BannerStory } from '../../../stories/components/Banner.stories'
import { mountAndWait } from '../utils'

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
      cy.get('.banner').should('not.be.visible')
    })
    it('should show the banner when isHiddenByDefault is false', () => {
      mountAndWait(
        <StoryBox>
          <BannerStory isClosable={false} isCollapsible isHiddenByDefault={false} level={Level.SUCCESS} top="60px">
            some text
          </BannerStory>
        </StoryBox>
      )
      cy.get('.banner').should('be.visible')
    })
    it('should show the banner when isHiddenByDefault is undefined', () => {
      mountAndWait(
        <StoryBox>
          <BannerStory isClosable={false} isCollapsible isHiddenByDefault={undefined} level={Level.SUCCESS} top="60px">
            some text
          </BannerStory>
        </StoryBox>
      )
      cy.get('.banner').should('be.visible')
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
      cy.get('.banner-button').click()
      cy.get('.banner').should('not.be.visible')
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
      cy.get('.banner').invoke('outerHeight').should('be.gt', 10)
      // click on the hide button
      cy.get('.banner-button').click()
      // check it's shrunk
      cy.get('.banner').invoke('outerHeight').should('be.equal', 10)
    })
  })
})
