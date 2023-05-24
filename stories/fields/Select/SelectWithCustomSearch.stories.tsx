import ky from 'ky'
import { useEffect, useRef, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { CustomSearch, Select, useFieldControl, type SelectProps, type Option } from '../../../src'

type FakeUser = {
  avatar: string
  birthdate: string
  email: string
  id: string
  registeredAt: string
  username: string
}

const args: SelectProps<FakeUser> = {
  disabled: false,
  error: '',
  isCleanable: true,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A select',
  name: 'mySelect',
  options: [],
  optionValueKey: 'id',
  placeholder: 'Pick an option',
  value: undefined,
  virtualized: true
}

export default {
  title: 'Fields/Select',
  component: Select,

  argTypes: {
    value: {
      control: 'inline-radio',
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

export function SelectWithCustomSearch(props: SelectProps<FakeUser>) {
  const customSearchRef = useRef<CustomSearch<Option<FakeUser>> | undefined>(undefined)

  const [options, setOptions] = useState<Option<FakeUser>[]>([])
  const [outputValue, setOutputValue] = useState<FakeUser | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  useEffect(() => {
    ;(async () => {
      const users: FakeUser[] = await ky
        .get('https://raw.githubusercontent.com/ivangabriele/fakeapi/main/api/users.json')
        .json()
      const nextOptions: Option<FakeUser>[] = users.slice(0, 10000).map(user => ({
        label: user.username,
        value: user
      }))

      customSearchRef.current = new CustomSearch(nextOptions, ['label'], { isStrict: true })

      setOptions(nextOptions)
    })()
  }, [])

  return (
    <>
      {!options.length && <p>Loading options...</p>}

      {customSearchRef.current && options.length && (
        <>
          <Select
            {...props}
            customSearch={customSearchRef.current}
            onChange={controlledOnChange}
            options={options}
            value={controlledValue}
          />
          <div>
            <em>Loads a list of 10,000 users in order to check performances.</em>
          </div>

          {outputValue !== '∅' && <Output value={outputValue} />}
        </>
      )}
    </>
  )
}
