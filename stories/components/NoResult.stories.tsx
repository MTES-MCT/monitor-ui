// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Accent, Icon } from '@constants'
import { Button } from '@elements/Button'
import styled from 'styled-components'

import { ARG_TYPE } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { NoResult } from '../../src/components/NoResult'

import type { Meta, StoryObj } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<{}> = {
  title: 'Components/NoResult',
  component: NoResult,

  args: {
    Icon: Icon.MissionAction,
    title: 'Aucune mission'
  },

  argTypes: {
    Icon: ARG_TYPE.ICON,
    title: ARG_TYPE.OPTIONAL_STRING
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

type Story = StoryObj<typeof NoResult>

export const Default: Story = {
  render: props => (
    <div style={{ height: '500px' }}>
      <NoResult Icon={props.Icon} title={props.title}>
        <StyledControlWrapper>
          <Button accent={Accent.PRIMARY}>Reset your filters</Button>
          <Button accent={Accent.SECONDARY}>Other actions</Button>
        </StyledControlWrapper>
      </NoResult>
    </div>
  )
}

const StyledControlWrapper = styled.div`
  display: flex;
  gap: 8px;
`
