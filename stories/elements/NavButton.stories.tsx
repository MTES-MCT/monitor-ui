import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

import { Showcase } from '../../.storybook/components/Showcase'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, NavButton, type NavButtonProps, Icon, Size } from '../../src'

import type { Meta } from '@storybook/react'

const args: NavButtonProps = {
  accent: Accent.PRIMARY,
  children: 'A navigation button label',
  isFullWidth: false,
  Icon: undefined,
  size: Size.NORMAL,
  to: '/world'
}

const meta: Meta<NavButtonProps> = {
  title: 'Elements/NavButton',
  component: NavButton,

  argTypes: {
    accent: {
      control: 'inline-radio',
      options: Accent
    },
    size: {
      control: 'inline-radio',
      options: Size
    }
  },

  args,

  decorators: [generateStoryDecorator(), withRouter],

  // https://storybook.js.org/addons/storybook-addon-react-router-v6
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { name: 'world' }
      },
      routing: { path: '/hello/:name' }
    })
  }
}

export default meta

export function _NavButton(props: NavButtonProps) {
  return (
    <>
      <NavButton {...props} />

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
                <NavButton accent={Accent.PRIMARY} className="" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.PRIMARY} className="" Icon={Icon.Calendar} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.PRIMARY} className="" Icon={undefined} size={Size.SMALL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.PRIMARY} className="" Icon={Icon.Calendar} size={Size.SMALL} to="/world">
                  A navigation button
                </NavButton>
              </td>
            </tr>
            <tr>
              <th>Hover</th>
              <td>
                <NavButton accent={Accent.PRIMARY} className="_hover" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.PRIMARY}
                  className="_hover"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.PRIMARY} className="_hover" Icon={undefined} size={Size.SMALL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.PRIMARY}
                  className="_hover"
                  Icon={Icon.Calendar}
                  size={Size.SMALL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
            </tr>
            <tr>
              <th>Active</th>
              <td>
                <NavButton accent={Accent.PRIMARY} className="_active" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.PRIMARY}
                  className="_active"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.PRIMARY} className="_active" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.PRIMARY}
                  className="_active"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
              <td>
                <NavButton
                  accent={Accent.PRIMARY}
                  className="_disabled"
                  Icon={undefined}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.PRIMARY}
                  className="_disabled"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.PRIMARY}
                  className="_disabled"
                  Icon={undefined}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.PRIMARY}
                  className="_disabled"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
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
                <NavButton accent={Accent.SECONDARY} className="" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.SECONDARY} className="" Icon={Icon.Calendar} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.SECONDARY} className="" Icon={undefined} size={Size.SMALL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.SECONDARY} className="" Icon={Icon.Calendar} size={Size.SMALL} to="/world">
                  A navigation button
                </NavButton>
              </td>
            </tr>
            <tr>
              <th>Hover</th>
              <td>
                <NavButton accent={Accent.SECONDARY} className="_hover" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_hover"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.SECONDARY} className="_hover" Icon={undefined} size={Size.SMALL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_hover"
                  Icon={Icon.Calendar}
                  size={Size.SMALL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
            </tr>
            <tr>
              <th>Active</th>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_active"
                  Icon={undefined}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_active"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_active"
                  Icon={undefined}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_active"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_disabled"
                  Icon={undefined}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_disabled"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_disabled"
                  Icon={undefined}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.SECONDARY}
                  className="_disabled"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
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
                <NavButton accent={Accent.TERTIARY} className="" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.TERTIARY} className="" Icon={Icon.Calendar} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.TERTIARY} className="" Icon={undefined} size={Size.SMALL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.TERTIARY} className="" Icon={Icon.Calendar} size={Size.SMALL} to="/world">
                  A navigation button
                </NavButton>
              </td>
            </tr>
            <tr>
              <th>Hover</th>
              <td>
                <NavButton accent={Accent.TERTIARY} className="_hover" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.TERTIARY}
                  className="_hover"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.TERTIARY} className="_hover" Icon={undefined} size={Size.SMALL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.TERTIARY}
                  className="_hover"
                  Icon={Icon.Calendar}
                  size={Size.SMALL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
            </tr>
            <tr>
              <th>Active</th>
              <td>
                <NavButton accent={Accent.TERTIARY} className="_active" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.TERTIARY}
                  className="_active"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton accent={Accent.TERTIARY} className="_active" Icon={undefined} size={Size.NORMAL} to="/world">
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.TERTIARY}
                  className="_active"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
            </tr>
            <tr>
              <th>Disabled</th>
              <td>
                <NavButton
                  accent={Accent.TERTIARY}
                  className="_disabled"
                  Icon={undefined}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.TERTIARY}
                  className="_disabled"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.TERTIARY}
                  className="_disabled"
                  Icon={undefined}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
              <td>
                <NavButton
                  accent={Accent.TERTIARY}
                  className="_disabled"
                  Icon={Icon.Calendar}
                  size={Size.NORMAL}
                  to="/world"
                >
                  A navigation button
                </NavButton>
              </td>
            </tr>
          </tbody>
        </Showcase.Table>
      </Showcase>
    </>
  )
}
