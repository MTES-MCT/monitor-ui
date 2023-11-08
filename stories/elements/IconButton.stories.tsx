import { values } from 'ramda'

import { Showcase } from '../../.storybook/components/Showcase'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, IconButton, Icon, Size, THEME } from '../../src'

import type { IconButtonProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: IconButtonProps = {
  accent: Accent.PRIMARY,
  iconSize: undefined,
  isCompact: false,
  Icon: Icon.Close,
  size: Size.NORMAL,
  withUnpropagatedClick: false
}

const meta: Meta<IconButtonProps> = {
  title: 'Elements/IconButton',
  component: IconButton,

  argTypes: {
    accent: {
      control: 'inline-radio',
      options: values(Accent)
    },
    color: {
      control: {
        type: 'color',
        presetColors: [THEME.color.charcoal, THEME.color.goldenPoppy, THEME.color.maximumRed]
      }
    },
    iconSize: {
      control: 'number'
    },
    size: {
      control: 'inline-radio',
      options: values(Size)
    }
  },

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _IconButton(props: IconButtonProps) {
  return (
    <>
      <IconButton {...props} />

      <Showcase>
        <Showcase.Subtitle>PRIMARY</Showcase.Subtitle>

        <ShowcaseReference />
      </Showcase>
    </>
  )
}

function ShowcaseReference() {
  return (
    <>
      <Showcase.Table>
        <thead>
          <tr>
            <td />
            <th>Large</th>
            <th>Normal</th>
            <th>Small</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Default</th>
            <td>
              <IconButton accent={Accent.PRIMARY} className="" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} className="" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} className="" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Hover</th>
            <td>
              <IconButton accent={Accent.PRIMARY} className="_hover" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} className="_hover" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} className="_hover" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Active</th>
            <td>
              <IconButton accent={Accent.PRIMARY} Icon={Icon.Search} isActive size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} Icon={Icon.Search} isActive size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} Icon={Icon.Search} isActive size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Disabled</th>
            <td>
              <IconButton accent={Accent.PRIMARY} disabled Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} disabled Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} disabled Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
        </tbody>
      </Showcase.Table>

      <Showcase.Subtitle>SECONDARY</Showcase.Subtitle>

      <Showcase.Table>
        <thead>
          <tr>
            <td />
            <th>Large</th>
            <th>Normal</th>
            <th>Small</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Default</th>
            <td>
              <IconButton accent={Accent.SECONDARY} className="" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} className="" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} className="" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Hover</th>
            <td>
              <IconButton accent={Accent.SECONDARY} className="_hover" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} className="_hover" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} className="_hover" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Active</th>
            <td>
              <IconButton accent={Accent.SECONDARY} Icon={Icon.Search} isActive size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} Icon={Icon.Search} isActive size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} Icon={Icon.Search} isActive size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Disabled</th>
            <td>
              <IconButton accent={Accent.SECONDARY} disabled Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} disabled Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} disabled Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
        </tbody>
      </Showcase.Table>

      <Showcase.Subtitle>TERTIARY</Showcase.Subtitle>

      <Showcase.Table>
        <thead>
          <tr>
            <td />
            <th>Large</th>
            <th>Normal</th>
            <th>Small</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Default</th>
            <td>
              <IconButton accent={Accent.TERTIARY} className="" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} className="" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} className="" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Hover</th>
            <td>
              <IconButton accent={Accent.TERTIARY} className="_hover" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} className="_hover" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} className="_hover" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Active</th>
            <td>
              <IconButton accent={Accent.TERTIARY} Icon={Icon.Search} isActive size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} Icon={Icon.Search} isActive size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} Icon={Icon.Search} isActive size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Disabled</th>
            <td>
              <IconButton accent={Accent.TERTIARY} disabled Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} disabled Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} disabled Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
        </tbody>
      </Showcase.Table>
    </>
  )
}
