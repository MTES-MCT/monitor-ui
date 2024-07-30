import { Showcase } from '../../.storybook/components/Showcase'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, IconButton, Icon, Size } from '../../src'
import { THEME } from '../../src/theme'

import type { IconButtonProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<IconButtonProps> = {
  ...META_DEFAULTS,

  title: 'Elements/IconButton',
  component: IconButton,

  argTypes: {
    accent: ARG_TYPE.OPTIONAL_ACCENT,
    color: ARG_TYPE.OPTIONAL_COLOR,
    badgeBackgroundColor: ARG_TYPE.OPTIONAL_COLOR,
    badgeColor: ARG_TYPE.OPTIONAL_COLOR,
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    Icon: ARG_TYPE.ICON,
    iconSize: ARG_TYPE.OPTIONAL_NUMBER,
    isCompact: ARG_TYPE.OPTIONAL_BOOLEAN,
    size: ARG_TYPE.OPTIONAL_SIZE,
    type: ARG_TYPE.NO_CONTROL,
    badgeNumber: ARG_TYPE.OPTIONAL_NUMBER,
    withUnpropagatedClick: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    accent: Accent.PRIMARY,
    disabled: false,
    Icon: Icon.Close,
    isCompact: false,
    badgeNumber: 2,
    badgeBackgroundColor: THEME.color.lightGray,
    badgeColor: THEME.color.slateGray,
    size: undefined,
    withUnpropagatedClick: false
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

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
              <IconButton
                accent={Accent.PRIMARY}
                badgeNumber={123}
                className=""
                Icon={Icon.Search}
                size={Size.NORMAL}
              />
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
              <IconButton accent={Accent.PRIMARY} className="_active" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} className="_active" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} className="_active" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Disabled</th>
            <td>
              <IconButton accent={Accent.PRIMARY} className="_disabled" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} className="_disabled" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.PRIMARY} className="_disabled" Icon={Icon.Search} size={Size.SMALL} />
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
              <IconButton accent={Accent.SECONDARY} className="_active" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} className="_active" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} className="_active" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Disabled</th>
            <td>
              <IconButton accent={Accent.SECONDARY} className="_disabled" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} className="_disabled" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.SECONDARY} className="_disabled" Icon={Icon.Search} size={Size.SMALL} />
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
              <IconButton accent={Accent.TERTIARY} className="_active" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} className="_active" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} className="_active" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
          <tr>
            <th>Disabled</th>
            <td>
              <IconButton accent={Accent.TERTIARY} className="_disabled" Icon={Icon.Search} size={Size.LARGE} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} className="_disabled" Icon={Icon.Search} size={Size.NORMAL} />
            </td>
            <td>
              <IconButton accent={Accent.TERTIARY} className="_disabled" Icon={Icon.Search} size={Size.SMALL} />
            </td>
          </tr>
        </tbody>
      </Showcase.Table>
    </>
  )
}
