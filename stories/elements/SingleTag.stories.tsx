import { action } from 'storybook/actions'
import styled from 'styled-components'

import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { SingleTag } from '../../src'

import type { SingleTagProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

const args: SingleTagProps = {
  children: 'A single deletable tag',
  onDelete: action('onDelete')
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<SingleTagProps> = {
  ...META_DEFAULTS,

  title: 'Elements/SingleTag',
  component: SingleTag,

  argTypes: {
    accent: ARG_TYPE.OPTIONAL_ACCENT
  },

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _SingleTag(props: SingleTagProps) {
  return (
    <Box>
      <SingleTag {...props} />
      <SingleTag {...props}>A very very very very very very long text</SingleTag>
    </Box>
  )
}

const Box = styled.div`
  width: 250px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${p => p.theme.color.slateGray};
`
