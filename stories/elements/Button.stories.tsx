import { Showcase } from '../../.storybook/components/Showcase'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Button, Icon, Size } from '../../src'

import type { ButtonProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<ButtonProps> = {
  ...META_DEFAULTS,

  title: 'Elements/Button',
  component: Button,

  argTypes: {
    accent: ARG_TYPE.OPTIONAL_ACCENT,
    children: ARG_TYPE.OPTIONAL_STRING,
    isFullWidth: ARG_TYPE.OPTIONAL_BOOLEAN,
    size: ARG_TYPE.OPTIONAL_SIZE,
    type: ARG_TYPE.NO_CONTROL,
    withUnpropagatedClick: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    children: 'A label',
    Icon: undefined,
    isFullWidth: false,
    size: undefined,
    withUnpropagatedClick: false
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

const BUTTON_SIZES = [
  { label: 'Large', value: Size.LARGE },
  { label: 'Normal', value: Size.NORMAL },
  { label: 'Small', value: Size.SMALL }
]

const BUTTON_STATES = [
  { className: '', label: 'Default' },
  { className: '_hover', label: 'Hover' },
  { className: '_active', label: 'Active' },
  { className: '_disabled', label: 'Disabled' }
]

const BUTTON_ACCENTS = [
  { label: 'PRIMARY', value: Accent.PRIMARY },
  { label: 'SECONDARY', value: Accent.SECONDARY },
  { label: 'TERTIARY', value: Accent.TERTIARY },
  { label: 'WARNING', value: Accent.WARNING },
  { label: 'ERROR', value: Accent.ERROR },
  { label: 'CAUTION', value: Accent.CAUTION }
]

const BUTTON_ICON_OPTIONS = [
  { icon: undefined, key: 'text' },
  { icon: Icon.Calendar, key: 'icon' }
]

export function _Button(props: ButtonProps) {
  return (
    <>
      <Button {...props} />

      <Showcase>
        {BUTTON_ACCENTS.map(({ label, value: accent }) => (
          <div key={label}>
            <Showcase.Subtitle>{label}</Showcase.Subtitle>

            <Showcase.Table>
              <thead>
                <tr>
                  <td />
                  {BUTTON_SIZES.map(({ label: sizeLabel }) => (
                    <th key={sizeLabel} colSpan={2}>
                      {sizeLabel}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {BUTTON_STATES.map(({ className, label: stateLabel }) => (
                  <tr key={stateLabel}>
                    <th>{stateLabel}</th>

                    {BUTTON_SIZES.map(({ label: sizeLabel, value: size }) =>
                      BUTTON_ICON_OPTIONS.map(({ icon, key }) => (
                        <td key={`${sizeLabel}-${key}`}>
                          <Button accent={accent} className={className} Icon={icon} size={size}>
                            A button
                          </Button>
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </Showcase.Table>
          </div>
        ))}
      </Showcase>
    </>
  )
}
