import { describe, expect, it } from '@jest/globals'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef } from 'react'

import { useClickOutsideEffect } from '../useClickOutsideEffect'

function MockComponent({ action }) {
  // eslint-disable-next-line no-null/no-null
  const ref = useRef<HTMLDivElement>(null)

  useClickOutsideEffect(ref, action)

  return (
    <div data-testid="outside">
      <div ref={ref} data-testid="inside">
        Inside
      </div>
    </div>
  )
}

describe('hooks/useClickOutsideEffect()', () => {
  const user = userEvent.setup()

  it('calls action when clicking outside the referenced element', async () => {
    const action = jest.fn()

    const { getByTestId } = render(<MockComponent action={action} />)

    await user.click(getByTestId('outside'))

    expect(action).toHaveBeenCalled()
  })

  it('does not call action when clicking inside the referenced element', async () => {
    const action = jest.fn()

    const { getByTestId } = render(<MockComponent action={action} />)

    await user.click(getByTestId('inside'))

    expect(action).not.toHaveBeenCalled()
  })
})
