import styled from 'styled-components'

import { Showcase } from '../../.storybook/components/Showcase'
import { ARG_TYPE, LOREM_IPSUM, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Button, Level, Message } from '../../src'

import type { MessageProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MessageProps> = {
  ...META_DEFAULTS,

  title: 'Components/Message',
  component: Message,

  argTypes: {
    children: ARG_TYPE.REACT_NODE,
    Icon: ARG_TYPE.OPTIONAL_ICON,
    iconColor: ARG_TYPE.OPTIONAL_COLOR,
    level: ARG_TYPE.OPTIONAL_LEVEL
  },

  args: {
    children: 'A info message.',
    Icon: undefined,
    iconColor: undefined,
    level: undefined
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 }
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Message(props: MessageProps) {
  return (
    <>
      <Message {...props} />

      <Showcase>
        <Showcase.Subtitle>With a long text</Showcase.Subtitle>

        <Message>{LOREM_IPSUM}</Message>

        <Showcase.Subtitle>A warning message with actions</Showcase.Subtitle>

        <Message level={Level.WARNING}>
          <div>
            <span>Une autre mission est encours avec cette unité.</span>
            <br />
            <span>Voulez-vous quand même conserver cette mission ?</span>
          </div>

          <ActionBox>
            <Button accent={Accent.WARNING}>Oui, la conserver</Button>
            <Button accent={Accent.WARNING}>Non, l&apos;abandonner</Button>
          </ActionBox>
        </Message>
      </Showcase>
    </>
  )
}

const ActionBox = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`
