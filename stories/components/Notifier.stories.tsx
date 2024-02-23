import dayjs from 'dayjs'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Button, Notifier, logSoftError, type NotifierProps } from '../../src'

import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<NotifierProps> = {
  title: 'Components/Notifier',
  component: Notifier,

  args: {
    isSideWindow: false
  },

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true,
      withNewWindowButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Notifier(props: NotifierProps) {
  const log = () => {
    logSoftError({
      isSideWindowError: !!props.isSideWindow,
      message: 'An error message',
      userMessage: `Une erreur est survenue à ${dayjs().format('HH[h]mm[m]ss[s et ]SSS[ms]')}.`
    })
  }

  return (
    <>
      <Notifier {...props} />

      <Button onClick={log}>Log a soft error</Button>
    </>
  )
}
