import { useEffect, useRef, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import {
  generateStoryDecorator,
  NewWindowButtonBox,
  NewWindowStoryBox
} from '../../.storybook/components/StoryDecorator'
import { Accent, Button, DatePicker, Size, useForceUpdate } from '../../src'
import { NewWindow } from '../../src/components/NewWindow'

import type { DatePickerWithDateDateProps, DatePickerWithStringDateProps } from '../../src'

const args: DatePickerWithDateDateProps | DatePickerWithStringDateProps = {
  baseContainer: undefined,
  disabled: false,
  error: '',
  isCompact: false,
  isEndDate: false,
  isErrorMessageHidden: false,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  isStringDate: false,
  label: 'A date',
  withTime: true
}

export default {
  title: 'Fields/DatePicker',
  component: DatePicker,
  args,

  argTypes: {
    defaultValue: {
      control: {
        type: 'date'
      }
    },
    isEndDate: {
      control: {
        type: 'boolean'
      }
    },
    isStringDate: {
      control: {
        type: 'boolean'
      }
    }
  },

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true,
      withNewWindowButton: true
    })
  ]
}

export function _DatePicker(props: any) {
  // eslint-disable-next-line no-null/no-null
  const newWindowStoryBoxRef = useRef<HTMLDivElement>(null)

  const [isNewWindowOpen, setIsNewWindowOpen] = useState(false)
  const [isNewWindowFirstLoad, setIsNewWindowFirstLoad] = useState(true)
  const [outputValue, setOutputValue] = useState<Date | string>()

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

      {!isNewWindowOpen && <DatePicker {...props} onChange={setOutputValue} />}

      <Output value={outputValue} />

      {isNewWindowOpen && (
        <NewWindow isStoryBook onUnload={() => setIsNewWindowOpen(false)}>
          <NewWindowStoryBox ref={newWindowStoryBoxRef}>
            {newWindowStoryBoxRef.current && (
              <DatePicker {...props} baseContainer={newWindowStoryBoxRef.current} onChange={setOutputValue} />
            )}
          </NewWindowStoryBox>
        </NewWindow>
      )}
    </>
  )
}
