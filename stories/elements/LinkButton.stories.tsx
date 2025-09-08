import { Showcase } from '../../.storybook/components/Showcase'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Icon, LinkButton, Size } from '../../src'

import type { LinkButtonProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<LinkButtonProps> = {
  ...META_DEFAULTS,

  title: 'Elements/LinkButton',
  component: LinkButton,

  argTypes: {
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    Icon: ARG_TYPE.ICON,
    size: ARG_TYPE.OPTIONAL_SIZE,
    children: ARG_TYPE.OPTIONAL_STRING
  },

  args: {
    disabled: false,
    Icon: Icon.Close,
    size: undefined,
    children: 'a random text'
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _LinkButton(props: LinkButtonProps) {
  return (
    <>
      <h4>A LinkButton which you can play with:</h4>
      <br />
      <LinkButton {...props} />
      <Showcase>
        <Showcase.Table>
          <thead>
            <tr>
              <td />
              <th>Small</th>
              <th>Normal</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Just text</th>
              <td>
                <LinkButton size={Size.SMALL}>a dummy text</LinkButton>
              </td>
              <td>
                <LinkButton size={Size.NORMAL}>a dummy text</LinkButton>
              </td>
              <td>
                <LinkButton size={Size.LARGE}>a dummy text</LinkButton>
              </td>
            </tr>
            <tr>
              <th>Funky Text</th>
              <td>
                <LinkButton size={Size.SMALL}>
                  <i>text in italic</i>
                </LinkButton>
              </td>
              <td>
                <LinkButton size={Size.NORMAL}>
                  <span>
                    text with <b>bold</b> emphasis
                  </span>
                </LinkButton>
              </td>
              <td>
                <LinkButton size={Size.LARGE}>
                  <span>
                    text with <b>bold</b> and <i>italic</i> emphasis
                  </span>
                </LinkButton>
              </td>
            </tr>
            <tr>
              <th>Text with icon</th>
              <td>
                <LinkButton Icon={Icon.Reset} size={Size.SMALL}>
                  a dummy text
                </LinkButton>
              </td>
              <td>
                <LinkButton Icon={Icon.Reset} size={Size.NORMAL}>
                  a dummy text
                </LinkButton>
              </td>
              <td>
                <LinkButton Icon={Icon.Reset} size={Size.LARGE}>
                  a dummy text
                </LinkButton>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
              <td>
                <LinkButton disabled size={Size.SMALL}>
                  a dummy text
                </LinkButton>
              </td>
              <td>
                <LinkButton disabled size={Size.NORMAL}>
                  a dummy text
                </LinkButton>
              </td>
              <td>
                <LinkButton disabled Icon={Icon.Reset} size={Size.LARGE}>
                  a dummy text
                </LinkButton>
              </td>
            </tr>
          </tbody>
        </Showcase.Table>
      </Showcase>
    </>
  )
}
