import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { DatePicker } from '../../src'

import type { DatePickerWithDateDateProps, DatePickerWithStringDateProps } from '../../src'
import type { Meta } from '@storybook/react'

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
  isUndefinedWhenDisabled: false,
  label: 'A date',
  withTime: true
}

const meta: Meta<DatePickerWithDateDateProps | DatePickerWithStringDateProps> = {
  title: 'Fields/DatePicker',
  component: DatePicker,

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

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}
export default meta

export function _DatePicker(props: any) {
  const [outputValue, setOutputValue] = useState<Date | string>()

  return (
    <>
      <DatePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}

// export function _DatePicker(props: any) {
//   // eslint-disable-next-line no-null/no-null
//   const {newWindowContainerRef} = useNewWindow()

//   const [isNewWindowOpen, setIsNewWindowOpen] = useState(false)
//   const [isNewWindowFirstLoad, setIsNewWindowFirstLoad] = useState(true)
//   const [outputValue, setOutputValue] = useState<Date | string>()

//   const { forceUpdate } = useForceUpdate()

//   useEffect(
//     () => {
//       if (isNewWindowOpen) {
//         if (isNewWindowFirstLoad) {
//           setIsNewWindowFirstLoad(false)
//         } else {
//           forceUpdate()
//         }
//       }
//     },

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [isNewWindowOpen, isNewWindowFirstLoad]
//   )

//   return (
//     <>
//       <NewWindowButtonBox>
//         <Button accent={Accent.SECONDARY} onClick={() => setIsNewWindowOpen(true)} size={Size.SMALL}>
//           OPEN IN NEW WINDOW
//         </Button>
//       </NewWindowButtonBox>

//       {!isNewWindowOpen && <DatePicker {...props} onChange={setOutputValue} />}

//       <Output value={outputValue} />

//       {isNewWindowOpen && (
//         <NewWindow onUnload={() => setIsNewWindowOpen(false)}>
//           <NewWindowStoryBox ref={newWindowStoryBoxRef}>
//             {newWindowStoryBoxRef.current && (
//               <DatePicker {...props} baseContainer={newWindowStoryBoxRef.current} onChange={setOutputValue} />
//             )}
//           </NewWindowStoryBox>
//         </NewWindow>
//       )}
//     </>
//   )
// }
