import { StoryBox } from '../../../.storybook/components/StoryBox'
import {
  FAKE_BASIC_TABLE_COLUMNS,
  FAKE_BASIC_TABLE_DATA,
  type FakeBasicTableDataItem
} from '../../../__mocks__/fake_table_columns_and_data'
import { _DataTable as DataTableStory } from '../../../stories/tables/DataTable.stories'
import { mountAndWait } from '../utils'

import type { DataTableProps } from 'index'

const dataTableProps: DataTableProps<FakeBasicTableDataItem> = {
  columns: FAKE_BASIC_TABLE_COLUMNS,
  data: FAKE_BASIC_TABLE_DATA,
  initialSorting: [
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      desc: false,
      id: 'lastName'
    }
  ]
}

context('Story', () => {
  it('Should find the matching first name using `cy.getTableRowById()`', () => {
    mountAndWait(
      <StoryBox>
        <DataTableStory {...dataTableProps} />
      </StoryBox>
    )

    cy.getTableRowById(5).should('contain', 'Emily')
    cy.getTableRowById(5).should('not.contain', 'George')
  })

  it('Should find the matching last name using `cy.getTableRowByText()`', () => {
    mountAndWait(
      <StoryBox>
        <DataTableStory {...dataTableProps} />
      </StoryBox>
    )

    cy.getTableRowByText('Emily').should('contain', 'Jones')
    cy.getTableRowById(5).should('not.contain', 'Miller')
  })

  it('Should find the matching first name using `cy.getTableRowById()` within a previous subject', () => {
    mountAndWait(
      <StoryBox>
        <DataTableStory {...dataTableProps} />
      </StoryBox>
    )

    cy.get('div[data-cy-root=""]').getTableRowById(5).should('contain', 'Emily')
    cy.get('div[data-cy-root=""]').getTableRowById(5).should('not.contain', 'George')
  })

  it('Should find the matching last name using `cy.getTableRowByText()` within a previous subject', () => {
    mountAndWait(
      <StoryBox>
        <DataTableStory {...dataTableProps} />
      </StoryBox>
    )

    cy.get('div[data-cy-root=""]').getTableRowByText('Emily').should('contain', 'Jones')
    cy.get('div[data-cy-root=""]').getTableRowByText('Emily').should('not.contain', 'Miller')
  })
})
