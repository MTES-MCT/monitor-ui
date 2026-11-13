import { META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { COUNTRIES } from '../../src'
import { CountryFlag } from '../../src/components/CountryFlag'

import type { CountryFlagProps } from '../../src/components/CountryFlag'
import type { Meta, StoryObj } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CountryFlagProps> = {
  ...META_DEFAULTS,

  title: 'Components/CountryFlag',
  component: CountryFlag,

  argTypes: {
    code: {
      control: 'select',
      options: COUNTRIES.map(country => country.iso3)
    },
    size: {
      control: 'number'
    }
  },

  args: {
    code: 'FRA',
    size: 24
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

type Story = StoryObj<typeof CountryFlag>

export const Default: Story = {
  render: props => <CountryFlag {...props} />
}
