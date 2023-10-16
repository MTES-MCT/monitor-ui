import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { _DataTable as DataTableStory, args as dataTableProps } from '../../../stories/tables/DataTable.stories'
import { mountAndWait } from '../utils'

context('Story', () => {
  it('Should find the matching first name using `cy.getTableRowById()`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DataTableStory {...dataTableProps} />
      </GlobalDecoratorWrapper>
    )

    cy.getTableRowById(5).should('contain', 'Emily')
    cy.getTableRowById(5).should('not.contain', 'George')
  })

  it('Should find the matching last name using `cy.getTableRowByText()`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DataTableStory {...dataTableProps} />
      </GlobalDecoratorWrapper>
    )

    cy.getTableRowByText('Emily').should('contain', 'Jones')
    cy.getTableRowById(5).should('not.contain', 'Miller')
  })

  it('Should find the matching first name using `cy.getTableRowById()` within a previous subject', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DataTableStory {...dataTableProps} />
      </GlobalDecoratorWrapper>
    )

    cy.get('div[data-cy-root=""]').getTableRowById(5).should('contain', 'Emily')
    cy.get('div[data-cy-root=""]').getTableRowById(5).should('not.contain', 'George')
  })

  it('Should find the matching last name using `cy.getTableRowByText()` within a previous subject', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DataTableStory {...dataTableProps} />
      </GlobalDecoratorWrapper>
    )

    cy.get('div[data-cy-root=""]').getTableRowByText('Emily').should('contain', 'Jones')
    cy.get('div[data-cy-root=""]').getTableRowByText('Emily').should('not.contain', 'Miller')
  })
})
