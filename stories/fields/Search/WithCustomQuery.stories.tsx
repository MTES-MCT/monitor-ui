import {useEffect, useRef, useState} from 'react'

import {Output} from '../../../.storybook/components/Output'
import {
  generateStoryDecorator,
  NewWindowButtonBox,
  NewWindowStoryBox
} from '../../../.storybook/components/StoryDecorator'
import type {SearchProps} from '../../../src'
import {Accent, Button, Option, Search, Size, useForceUpdate} from '../../../src'
import {NewWindow} from '../../../src/components/NewWindow'
import ky from "ky";

const args: SearchProps = {
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "brew"'
}

export default {
  title: 'Fields/Search',
  component: Search,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function WithCustomQuery(props: SearchProps) {
  // eslint-disable-next-line no-null/no-null
  const newWindowStoryBoxRef = useRef<HTMLDivElement>(null)

  const [isNewWindowOpen, setIsNewWindowOpen] = useState(false)
  const [isNewWindowFirstLoad, setIsNewWindowFirstLoad] = useState(true)
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')
  const [options, setOptions] = useState<Option[]>([])

  const onQuery = async nextQuery => {
    const url = `https://api.openbrewerydb.org/breweries?by_name=${nextQuery}`
    const rawData: Record<string, any>[] = await ky.get(url).json()

    setOptions(rawData.map(({ id, name }) => ({
      label: name,
      value: id
    })))
  }

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

      {!isNewWindowOpen && <Search {...props} options={options} onQuery={onQuery} onChange={setOutputValue} />}

      {outputValue !== '∅' && <Output value={outputValue} />}

      {isNewWindowOpen && (
        <NewWindow isStoryBook onUnload={() => setIsNewWindowOpen(false)}>
          <NewWindowStoryBox ref={newWindowStoryBoxRef}>
            {newWindowStoryBoxRef.current && (
              <Search {...props} baseContainer={newWindowStoryBoxRef.current}  options={options} onQuery={onQuery} onChange={setOutputValue} />
            )}
          </NewWindowStoryBox>
        </NewWindow>
      )}
    </>
  )
}
