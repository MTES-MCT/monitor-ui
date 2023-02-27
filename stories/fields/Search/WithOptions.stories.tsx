import { useEffect, useRef, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import {
  generateStoryDecorator,
  NewWindowButtonBox,
  NewWindowStoryBox
} from '../../../.storybook/components/StoryDecorator'
import { Accent, Search, Button, Size, useForceUpdate } from '../../../src'
import { NewWindow } from '../../../src/components/NewWindow'

import type { SearchProps } from '../../../src'

const args: SearchProps = {
  defaultValue: undefined,
  error: '',
  isLabelHidden: false,
  isSearchIconHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "first"',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ]
}

export default {
  title: 'Fields/Search',
  component: Search,

  argTypes: {
    defaultValue: {
      control: 'text'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function WithOptions(props: SearchProps) {
  // eslint-disable-next-line no-null/no-null
  const newWindowStoryBoxRef = useRef<HTMLDivElement>(null)

  const [isNewWindowOpen, setIsNewWindowOpen] = useState(false)
  const [isNewWindowFirstLoad, setIsNewWindowFirstLoad] = useState(true)
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

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

      {!isNewWindowOpen && (
        <Search
          {...props}
          MenuItem={undefined}
          onChange={setOutputValue}
          options={[
            { label: 'First Option', value: 'FIRST_OPTION' },
            { label: 'Second Option', value: 'SECOND_OPTION' },
            { label: 'Third Option', value: 'THIRD_OPTION' },
            { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
          ]}
        />
      )}

      {outputValue !== '∅' && <Output value={outputValue} />}

      {isNewWindowOpen && (
        <NewWindow isStoryBook onUnload={() => setIsNewWindowOpen(false)}>
          <NewWindowStoryBox ref={newWindowStoryBoxRef}>
            {newWindowStoryBoxRef.current && (
              <Search {...props} baseContainer={newWindowStoryBoxRef.current} onChange={setOutputValue} />
            )}
          </NewWindowStoryBox>
        </NewWindow>
      )}
    </>
  )
}
