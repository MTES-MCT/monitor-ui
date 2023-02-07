import { useEffect, useRef, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import {
  generateStoryDecorator,
  NewWindowButtonBox,
  NewWindowStoryBox
} from '../../.storybook/components/StoryDecorator'
import { Accent, Button, DateRangePicker, Size, useForceUpdate } from '../../src'
import { NewWindow } from '../../src/components/NewWindow'

import type { DateRangePickerWithDateDateProps, DateRangePickerWithStringDateProps } from '../../src'
import type { DateAsStringRange, DateRange } from '../../src/types'

const args: DateRangePickerWithDateDateProps | DateRangePickerWithStringDateProps = {
  baseContainer: undefined,
  disabled: false,
  error: '',
  isCompact: false,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  isStringDate: false,
  label: 'A Date Range',
  withTime: true
}

export default {
  title: 'Fields/DateRangePicker',
  component: DateRangePicker,
  args,

  argTypes: {
    isStringDate: {
      control: {
        type: 'boolean'
      }
    }
  },

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _DateRangePicker(props: any) {
  // eslint-disable-next-line no-null/no-null
  const newWindowStoryBoxRef = useRef<HTMLDivElement>(null)

  const [isNewWindowOpen, setIsNewWindowOpen] = useState(false)
  const [isNewWindowFirstLoad, setIsNewWindowFirstLoad] = useState(true)
  const [outputValue, setOutputValue] = useState<DateRange | DateAsStringRange>()

  const { forceUpdate } = useForceUpdate()

  useEffect(
    () => {
      if (isNewWindowOpen) {
        if (isNewWindowFirstLoad) {
          setIsNewWindowFirstLoad(false)
        } else {
          forceUpdate()
        }
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isNewWindowOpen, isNewWindowFirstLoad]
  )

  return (
    <>
      <NewWindowButtonBox>
        <Button accent={Accent.SECONDARY} onClick={() => setIsNewWindowOpen(true)} size={Size.SMALL}>
          OPEN IN NEW WINDOW
        </Button>
      </NewWindowButtonBox>

      {!isNewWindowOpen && <DateRangePicker {...props} onChange={setOutputValue} />}

      <Output value={outputValue} />

      {isNewWindowOpen && (
        <NewWindow isStoryBook onUnload={() => setIsNewWindowOpen(false)}>
          <NewWindowStoryBox ref={newWindowStoryBoxRef}>
            {newWindowStoryBoxRef.current && (
              <DateRangePicker {...props} baseContainer={newWindowStoryBoxRef.current} onChange={setOutputValue} />
            )}
          </NewWindowStoryBox>
        </NewWindow>
      )}
    </>
  )
}
