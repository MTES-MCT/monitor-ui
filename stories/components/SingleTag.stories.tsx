import { noop } from 'lodash/fp'
import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { SingleTag } from '../../src'

import type { SingleTagProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: SingleTagProps = {
  children: 'A single deletable tag',
  onDelete: noop
}

const meta: Meta<SingleTagProps> = {
  title: 'Components/SingleTag',
  component: SingleTag,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _SingleTag(props: SingleTagProps) {
  return (
    <StyledContainer>
      <SingleTag {...props} />
      <SingleTag {...props}>A very very very very very very long text</SingleTag>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 250px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${p => p.theme.color.slateGray};
`
