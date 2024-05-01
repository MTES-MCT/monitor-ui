import { META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Link } from '../../src'

import type { LinkProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<LinkProps> = {
  ...META_DEFAULTS,

  title: 'Elements/Link',
  component: Link,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Link(_props: LinkProps) {
  return (
    <p>
      Here is{' '}
      <Link href="https://beta.gouv.fr" target="_blank">
        a simple link
      </Link>
      .
    </p>
  )
}
