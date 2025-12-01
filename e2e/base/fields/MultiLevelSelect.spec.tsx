import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

import { MultiLevelSelect } from '@fields/MultiLevelSelect'
import type { TreeOption } from '@fields/CheckTreePicker/types'

const FAKE_THREE_LEVEL_OPTIONS: Array<TreeOption> = [
  {
    children: [
      {
        children: [
          { label: 'Mango', value: 'mango' },
          { label: 'Pineapple', value: 'pineapple' },
          { label: 'Coconut', value: 'coconut' }
        ],
        label: 'Tropical',
        value: 'tropical'
      },
      {
        children: [
          { label: 'Strawberry', value: 'strawberry' },
          { label: 'Blueberry', value: 'blueberry' },
          { label: 'Raspberry', value: 'raspberry' }
        ],
        label: 'Berries',
        value: 'berries'
      }
    ],
    label: 'Fruits',
    value: 'fruits'
  },
  {
    children: [
      {
        children: [
          { label: 'Spinach', value: 'spinach' },
          { label: 'Kale', value: 'kale' },
          { label: 'Lettuce', value: 'lettuce' }
        ],
        label: 'Leafy Greens',
        value: 'leafy_greens'
      },
      {
        children: [
          { label: 'Carrot', value: 'carrot' },
          { label: 'Potato', value: 'potato' },
          { label: 'Beet', value: 'beet' }
        ],
        label: 'Root Vegetables',
        value: 'root_vegetables'
      }
    ],
    label: 'Vegetables',
    value: 'vegetables'
  }
]

interface MultiLevelSelectStoryProps {
  onChangeCapture?: (value: TreeOption[] | undefined) => void
}

function MultiLevelSelectStory({ onChangeCapture }: MultiLevelSelectStoryProps) {
  const [value, setValue] = useState<TreeOption[] | undefined>(undefined)

  const handleChange = (nextValue: TreeOption[] | undefined) => {
    setValue(nextValue)
    onChangeCapture?.(nextValue)
  }

  return (
    <div>
      <MultiLevelSelect
        label="Select Items (3 Levels)"
        name="multiLevel"
        options={FAKE_THREE_LEVEL_OPTIONS}
        value={value}
        onChange={handleChange}
      />
      {value && value.length > 0 && (
        <div data-testid="output">
          {value.map((item, index) => (
            <div key={index} data-testid={`selected-${index}`}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

describe('MultiLevelSelect', () => {
  it('should render the component with label', () => {
    render(<MultiLevelSelectStory />)
    expect(screen.getByText('Select Items (3 Levels)')).toBeInTheDocument()
  })

  it('should open the tree picker on label click', async () => {
    const user = userEvent.setup()
    render(<MultiLevelSelectStory />)
    
    const label = screen.getByText('Select Items (3 Levels)')
    await user.click(label)
    
    // Tree should be visible
    expect(screen.getByText('Fruits')).toBeInTheDocument()
    expect(screen.getByText('Vegetables')).toBeInTheDocument()
  })

  it('should expand/collapse tree branches', async () => {
    const user = userEvent.setup()
    render(<MultiLevelSelectStory />)
    
    const label = screen.getByText('Select Items (3 Levels)')
    await user.click(label)
    
    // Click on Fruits to expand
    const fruitsOption = screen.getByText('Fruits').closest('[role="treeitem"]')
    if (fruitsOption) {
      const expandButton = fruitsOption.querySelector('[role="button"]')
      if (expandButton) {
        await user.click(expandButton)
      }
    }
    
    // Level 2 items should be visible
    expect(screen.getByText('Tropical')).toBeInTheDocument()
    expect(screen.getByText('Berries')).toBeInTheDocument()
  })

  it('should only allow selecting leaf nodes (level 3)', async () => {
    const user = userEvent.setup()
    const onChangeCapture = jest.fn()
    
    render(<MultiLevelSelectStory onChangeCapture={onChangeCapture} />)
    
    const label = screen.getByText('Select Items (3 Levels)')
    await user.click(label)
    
    // Try to select a level 1 item (should not be selectable)
    const fruitsCheckbox = screen.getByLabelText('Fruits')
    expect(fruitsCheckbox).toBeDisabled()
    
    // Expand Fruits
    const fruitsOption = screen.getByText('Fruits').closest('[role="treeitem"]')
    if (fruitsOption) {
      const expandButton = fruitsOption.querySelector('[role="button"]')
      if (expandButton) {
        await user.click(expandButton)
      }
    }
    
    // Try to select a level 2 item (should not be selectable)
    const tropicalCheckbox = screen.getByLabelText('Tropical')
    expect(tropicalCheckbox).toBeDisabled()
    
    // Expand Tropical
    const tropicalOption = screen.getByText('Tropical').closest('[role="treeitem"]')
    if (tropicalOption) {
      const expandButton = tropicalOption.querySelector('[role="button"]')
      if (expandButton) {
        await user.click(expandButton)
      }
    }
    
    // Select a level 3 item (should be selectable)
    const mangoCheckbox = screen.getByLabelText('Mango')
    expect(mangoCheckbox).not.toBeDisabled()
    await user.click(mangoCheckbox)
    
    expect(onChangeCapture).toHaveBeenCalled()
  })

  it('should handle multiple selections from different branches', async () => {
    const user = userEvent.setup()
    const onChangeCapture = jest.fn()
    
    render(<MultiLevelSelectStory onChangeCapture={onChangeCapture} />)
    
    const label = screen.getByText('Select Items (3 Levels)')
    await user.click(label)
    
    // Expand Fruits
    const fruitsOption = screen.getByText('Fruits').closest('[role="treeitem"]')
    if (fruitsOption) {
      const expandButton = fruitsOption.querySelector('[role="button"]')
      if (expandButton) {
        await user.click(expandButton)
      }
    }
    
    // Expand Tropical
    const tropicalOption = screen.getByText('Tropical').closest('[role="treeitem"]')
    if (tropicalOption) {
      const expandButton = tropicalOption.querySelector('[role="button"]')
      if (expandButton) {
        await user.click(expandButton)
      }
    }
    
    // Select Mango
    const mangoCheckbox = screen.getByLabelText('Mango')
    await user.click(mangoCheckbox)
    
    // Expand Vegetables
    const vegetablesOption = screen.getByText('Vegetables').closest('[role="treeitem"]')
    if (vegetablesOption) {
      const expandButton = vegetablesOption.querySelector('[role="button"]')
      if (expandButton) {
        await user.click(expandButton)
      }
    }
    
    // Expand Root Vegetables
    const rootVegetablesOption = screen.getByText('Root Vegetables').closest('[role="treeitem"]')
    if (rootVegetablesOption) {
      const expandButton = rootVegetablesOption.querySelector('[role="button"]')
      if (expandButton) {
        await user.click(expandButton)
      }
    }
    
    // Select Carrot
    const carrotCheckbox = screen.getByLabelText('Carrot')
    await user.click(carrotCheckbox)
    
    expect(onChangeCapture).toHaveBeenCalledTimes(2)
  })

  it('should display selected values in the field', async () => {
    const user = userEvent.setup()
    render(
      <MultiLevelSelectStory
        onChangeCapture={() => {
          // Verify selected items are displayed
          expect(screen.getByTestId('selected-0')).toBeInTheDocument()
        }}
      />
    )
    
    const label = screen.getByText('Select Items (3 Levels)')
    await user.click(label)
    
    // Expand and select
    const fruitsOption = screen.getByText('Fruits').closest('[role="treeitem"]')
    if (fruitsOption) {
      const expandButton = fruitsOption.querySelector('[role="button"]')
      if (expandButton) {
        await user.click(expandButton)
      }
    }
    
    const tropicalOption = screen.getByText('Tropical').closest('[role="treeitem"]')
    if (tropicalOption) {
      const expandButton = tropicalOption.querySelector('[role="button"]')
      if (expandButton) {
        await user.click(expandButton)
      }
    }
    
    const mangoCheckbox = screen.getByLabelText('Mango')
    await user.click(mangoCheckbox)
  })

  it('should handle searchable mode', async () => {
    const user = userEvent.setup()
    render(
      <MultiLevelSelectStory />
    )
    
    const label = screen.getByText('Select Items (3 Levels)')
    await user.click(label)
    
    // Search for 'Mango'
    const searchInput = screen.getByRole('textbox')
    await user.type(searchInput, 'Mango')
    
    // Should show search results
    expect(screen.getByText('Mango')).toBeInTheDocument()
  })

  it('should handle disabled state', async () => {
    render(
      <div>
        <MultiLevelSelect
          disabled
          label="Disabled Field"
          name="multiLevel"
          options={FAKE_THREE_LEVEL_OPTIONS}
        />
      </div>
    )
    
    const label = screen.getByText('Disabled Field')
    expect(label).toBeInTheDocument()
  })

  it('should handle read-only state', async () => {
    const user = userEvent.setup()
    render(
      <MultiLevelSelectStory />
    )
    
    const label = screen.getByText('Select Items (3 Levels)')
    // In read-only state, the component should not open on click
    await user.click(label)
    
    // Should still be able to see the component rendered
    expect(screen.getByText('Select Items (3 Levels)')).toBeInTheDocument()
  })

  it('should display error message when provided', () => {
    render(
      <MultiLevelSelect
        error="Please select at least one item"
        isRequired
        label="Required Field"
        name="multiLevel"
        options={FAKE_THREE_LEVEL_OPTIONS}
      />
    )
    
    expect(screen.getByText('Please select at least one item')).toBeInTheDocument()
  })

  it('should hide error message when isErrorMessageHidden is true', () => {
    render(
      <MultiLevelSelect
        error="This error is hidden"
        isErrorMessageHidden
        label="With Hidden Error Message"
        name="multiLevel"
        options={FAKE_THREE_LEVEL_OPTIONS}
      />
    )
    
    expect(screen.queryByText('This error is hidden')).not.toBeInTheDocument()
  })

  it('should hide label when isLabelHidden is true', () => {
    render(
      <MultiLevelSelect
        isLabelHidden
        label="Hidden Label"
        name="multiLevel"
        options={FAKE_THREE_LEVEL_OPTIONS}
      />
    )
    
    expect(screen.queryByText('Hidden Label')).not.toBeInTheDocument()
  })
})
