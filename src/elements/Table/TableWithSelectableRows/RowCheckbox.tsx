import { useRef, type HTMLProps, useEffect } from 'react'
import { Checkbox as RsuiteCheckbox } from 'rsuite'

export function RowCheckbox({
  className = '',
  disabled = false,
  isChecked = false,
  isIndeterminate = false,
  onChange = () => undefined
}: { isChecked?: boolean; isIndeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  // eslint-disable-next-line no-null/no-null
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof isIndeterminate === 'boolean') {
      ref.current.indeterminate = !isChecked && isIndeterminate
    }
  }, [ref, isIndeterminate, isChecked])

  return (
    <RsuiteCheckbox
      ref={ref}
      checked={isChecked}
      className={`${className} cursor-pointer`}
      disabled={disabled}
      indeterminate={isIndeterminate}
      // eslint-disable-next-line @typescript-eslint/naming-convention
      onChange={(_, __, event) => onChange(event)}
    />
  )
}
