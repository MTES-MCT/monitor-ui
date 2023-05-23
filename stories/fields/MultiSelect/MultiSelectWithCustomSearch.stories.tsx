import ky from 'ky'
import { useEffect, useRef, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { MultiSelect, type MultiSelectProps, useFieldControl, type Option, CustomSearch } from '../../../src'

type FakeUser = {
  avatar: string
  birthdate: string
  email: string
  id: string
  registeredAt: string
  username: string
}

const args: MultiSelectProps<FakeUser> = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A multiple select',
  name: 'myMultiSelect',
  options: [],
  optionValueKey: 'id',
  placeholder: 'Pick some options',
  searchable: true,
  value: undefined,
  virtualized: true
}

export default {
  title: 'Fields/MultiSelect',
  component: MultiSelect,

  argTypes: {
    value: {
      control: 'inline-check',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'LOREM_IPSUM']
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function SelectWithCustomSearch(props: MultiSelectProps<FakeUser>) {
  const customSearchRef = useRef<CustomSearch<Option<FakeUser>> | undefined>(undefined)

  const [options, setOptions] = useState<Option<FakeUser>[]>([])
  const [outputValue, setOutputValue] = useState<FakeUser[] | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  useEffect(() => {
    ;(async () => {
      const users: FakeUser[] = await ky
        .get('https://raw.githubusercontent.com/ivangabriele/fakeapi/main/api/users.json')
        .json()
      const nextOptions: Option<FakeUser>[] = users.map(user => ({
        label: user.username,
        value: user
      }))

      customSearchRef.current = new CustomSearch(nextOptions, ['label'])

      setOptions(nextOptions)
    })()
  }, [])

  return (
    <>
      {!options.length && <p>Loading options...</p>}

      {customSearchRef.current && options.length && (
        <>
          <MultiSelect {...props} onChange={controlledOnChange} options={options} value={controlledValue} />
          <div>
            <em>This multiple select loads a list of 100,000 users in order to check search performances.</em>
          </div>

          {outputValue !== '∅' && <Output value={outputValue} />}
        </>
      )}
    </>
  )
}
