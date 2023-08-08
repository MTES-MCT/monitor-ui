import { type HTMLProps } from 'react'
import { Checkbox as RsuiteCheckbox } from 'rsuite'

export type RowCheckboxProps = {
  className?: string
  disabled?: boolean
  isChecked?: boolean
  // handle the case where some child checkboxes are checked to display an indeterminate style (-)
  isIndeterminate?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function RowCheckbox({
  className = '',
  disabled = false,
  isChecked = false,
  isIndeterminate = false,
  onChange = () => undefined
}: RowCheckboxProps & HTMLProps<HTMLInputElement>) {
  return (
    <RsuiteCheckbox
      checked={isChecked}
      className={`${className} cursor-pointer`}
      disabled={disabled}
      indeterminate={isIndeterminate}
      // eslint-disable-next-line @typescript-eslint/naming-convention
      onChange={(_, __, event) => onChange(event)}
    />
  )
}
