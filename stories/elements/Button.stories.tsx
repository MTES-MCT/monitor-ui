import { Showcase } from '../../.storybook/components/Showcase'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, Button, Icon, Size, THEME } from '../../src'

import type { ButtonProps } from '../../src'

const args: ButtonProps = {
  accent: Accent.PRIMARY,
  children: 'A label',
  isFullWidth: false,
  Icon: undefined,
  size: Size.NORMAL,
  withUnpropagatedClick: false
}

const iconsMap = {
  Close: Icon.Close,
  Duplicate: Icon.Duplicate
}
export default {
  title: 'Elements/Button',
  component: Button,

  argTypes: {
    accent: {
      control: 'inline-radio',
      options: Accent
    },
    size: {
      control: 'inline-radio',
      options: Size
    },
    color: {
      control: {
        type: 'color',
        presetColors: [THEME.color.charcoal, THEME.color.goldenPoppy, THEME.color.maximumRed]
      }
    },
    Icon: {
      options: [undefined, ...Object.keys(iconsMap)],
      mapping: {
        undefined,
        ...iconsMap
      }
    }
  },

  args,

  decorators: [generateStoryDecorator()]
}

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
              <th colSpan={2}>Normal</th>
              <th colSpan={2}>Small</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
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
                <Button accent={Accent.PRIMARY} className="_active" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_active" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
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
                <Button accent={Accent.PRIMARY} className="_disabled" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.PRIMARY} className="_disabled" Icon={Icon.Calendar} size={Size.NORMAL}>
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
              <th colSpan={2}>Normal</th>
              <th colSpan={2}>Small</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
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
                <Button accent={Accent.SECONDARY} className="_active" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_active" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
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
                <Button accent={Accent.SECONDARY} className="_disabled" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.SECONDARY} className="_disabled" Icon={Icon.Calendar} size={Size.NORMAL}>
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
              <th colSpan={2}>Normal</th>
              <th colSpan={2}>Small</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
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
                <Button accent={Accent.TERTIARY} className="_active" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_active" Icon={Icon.Calendar} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
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
                <Button accent={Accent.TERTIARY} className="_disabled" Icon={undefined} size={Size.NORMAL}>
                  A button
                </Button>
              </td>
              <td>
                <Button accent={Accent.TERTIARY} className="_disabled" Icon={Icon.Calendar} size={Size.NORMAL}>
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
