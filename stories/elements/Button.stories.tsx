import { Showcase } from '../../.storybook/components/Showcase'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { ACCENTS_AS_ARRAY, SIZE_AS_ARRAY } from '../../.storybook/constants'
import { Accent, Button, Icon, Size } from '../../src'

import type { ButtonProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: ButtonProps = {
  accent: Accent.PRIMARY,
  children: 'A label',
  Icon: undefined,
  isFullWidth: false,
  size: Size.NORMAL,
  withUnpropagatedClick: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<ButtonProps> = {
  title: 'Elements/Button',
  component: Button,

  argTypes: {
    accent: {
      control: 'radio',
      options: ACCENTS_AS_ARRAY
    },
    size: {
      control: 'inline-radio',
      options: SIZE_AS_ARRAY
    }
  },

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Button(props: ButtonProps) {
  return (
    <>
      <Button {...props} />

      <Showcase>
        <Showcase.Subtitle>PRIMARY</Showcase.Subtitle>

        <Showcase.Table>
          <thead>
            <tr>
              <td />
              <th colSpan={2}>Large</th>
              <th colSpan={2}>Normal</th>
              <th colSpan={2}>Small</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
              <td>
                <Button accent={Accent.PRIMARY} className="" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Hover</th>
              <td>
                <Button accent={Accent.PRIMARY} className="_hover" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_hover" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_hover" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_hover" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_hover" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_hover" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Active</th>
              <td>
                <Button accent={Accent.PRIMARY} className="_active" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_active" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_active" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_active" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_active" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_active" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
              <td>
                <Button accent={Accent.PRIMARY} className="_disabled" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_disabled" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_disabled" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_disabled" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_disabled" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_disabled" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
          </tbody>
        </Showcase.Table>

        <Showcase.Subtitle>SECONDARY</Showcase.Subtitle>

        <Showcase.Table>
          <thead>
            <tr>
              <td />
              <th colSpan={2}>Large</th>
              <th colSpan={2}>Normal</th>
              <th colSpan={2}>Small</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
              <td>
                <Button accent={Accent.SECONDARY} className="" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Hover</th>
              <td>
                <Button accent={Accent.SECONDARY} className="_hover" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_hover" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_hover" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_hover" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_hover" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_hover" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Active</th>
              <td>
                <Button accent={Accent.SECONDARY} className="_active" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_active" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_active" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_active" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_active" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_active" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
              <td>
                <Button accent={Accent.SECONDARY} className="_disabled" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_disabled" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_disabled" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_disabled" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_disabled" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_disabled" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
          </tbody>
        </Showcase.Table>

        <Showcase.Subtitle>TERTIARY</Showcase.Subtitle>

        <Showcase.Table>
          <thead>
            <tr>
              <td />
              <th colSpan={2}>Large</th>
              <th colSpan={2}>Normal</th>
              <th colSpan={2}>Small</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
              <td>
                <Button accent={Accent.TERTIARY} className="" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Hover</th>
              <td>
                <Button accent={Accent.TERTIARY} className="_hover" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_hover" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_hover" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_hover" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_hover" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_hover" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Active</th>
              <td>
                <Button accent={Accent.TERTIARY} className="_active" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_active" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_active" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_active" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_active" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_active" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
              <td>
                <Button accent={Accent.TERTIARY} className="_disabled" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_disabled" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_disabled" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_disabled" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_disabled" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_disabled" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
          </tbody>
        </Showcase.Table>

        <Showcase.Subtitle>WARNING</Showcase.Subtitle>

        <Showcase.Table>
          <thead>
            <tr>
              <td />
              <th colSpan={2}>Large</th>
              <th colSpan={2}>Normal</th>
              <th colSpan={2}>Small</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
              <td>
                <Button accent={Accent.WARNING} className="" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Hover</th>
              <td>
                <Button accent={Accent.WARNING} className="_hover" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_hover" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_hover" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_hover" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_hover" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_hover" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Active</th>
              <td>
                <Button accent={Accent.WARNING} className="_active" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_active" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_active" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_active" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_active" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_active" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
              <td>
                <Button accent={Accent.WARNING} className="_disabled" Icon={undefined} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_disabled" Icon={Icon.Calendar} size={Size.LARGE}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_disabled" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_disabled" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_disabled" Icon={undefined} size={Size.SMALL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.WARNING} className="_disabled" Icon={Icon.Calendar} size={Size.SMALL}>
                  A button
                </Button>
              </td>
            </tr>
          </tbody>
        </Showcase.Table>
      </Showcase>
    </>
  )
}
