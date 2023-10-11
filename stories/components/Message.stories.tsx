import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Message } from '../../src'

import type { MessageProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: MessageProps = {
  children: 'A warning message'
}

const meta: Meta<MessageProps> = {
  title: 'Components/Message',
  component: Message,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _Message(props: MessageProps) {
  return (
    <StyledContainer>
      <Message {...props} />
      <Message {...props}>
        A very very very very very very very very very very very very very very very long text
      </Message>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 450px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${p => p.theme.color.slateGray};
`
