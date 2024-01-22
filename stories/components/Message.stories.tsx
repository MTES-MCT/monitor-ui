import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, Button, Level, Message } from '../../src'

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

const childrenComponent = () => (
  <>
    <div>
      <span>Une autre mission est encours avec cette unité.</span>
      <br />
      <span>Voulez-vous quand même conserver cette mission ?</span>
    </div>

    <ButtonsContainer>
      <Button accent={Accent.WARNING}>Oui, la conserver</Button>
      <Button accent={Accent.WARNING}>Non, l&apos;abandonner</Button>
    </ButtonsContainer>
  </>
)

export function _Message(props: MessageProps) {
  return (
    <StyledContainer>
      <Message level={Level.WARNING} {...props} />
      <Message {...props}>
        A very very very very very very very very very very very very very very very long text
      </Message>
      <Message level={Level.WARNING}>{childrenComponent()}</Message>
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
const ButtonsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`
