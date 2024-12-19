import ky from 'ky'
import { useEffect, useState } from 'react'

import { META_DEFAULTS } from '../../../.storybook/constants'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { Icon, IconButton, SimpleTable, Size } from '../../../src'

import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<{}> = {
  ...META_DEFAULTS,

  title: 'Tables/SimpleTable (variations)',

  decorators: [
    generateStoryDecorator({
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function WithLoader() {
  const [data, setData] = useState<any[] | undefined>(undefined)

  const emptyRows = new Array(10000).fill(undefined)
  const isLoading = !data

  useEffect(() => {
    const timer = setTimeout(async () => {
      const nextData: any = await ky.get('https://api.openbrewerydb.org/v1/breweries?per_page=10').json()

      setData(nextData)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SimpleTable.Table>
      <SimpleTable.Head>
        <SimpleTable.Th $width={48}>ID</SimpleTable.Th>
        <SimpleTable.Th $width={240}>Name</SimpleTable.Th>
        <SimpleTable.Th $width={480}>Address</SimpleTable.Th>
        <SimpleTable.Th $width={44} />
      </SimpleTable.Head>
      <tbody>
        {isLoading &&
          emptyRows.map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SimpleTable.BodyTr key={`row-${index}`}>
              <SimpleTable.Td $isLoading />
              <SimpleTable.Td $isLoading />
              <SimpleTable.Td $isLoading />
              <SimpleTable.Td $isLoading />
            </SimpleTable.BodyTr>
          ))}
        {!isLoading &&
          data?.map(brewery => (
            <SimpleTable.BodyTr key={brewery.id}>
              <SimpleTable.Td>{brewery.id}</SimpleTable.Td>
              <SimpleTable.Td>{brewery.name}</SimpleTable.Td>
              <SimpleTable.Td>{`${brewery.street}, ${brewery.city} ${brewery.postalCode}, ${brewery.state}`}</SimpleTable.Td>
              <SimpleTable.Td>
                <IconButton Icon={Icon.Check} size={Size.SMALL} />
              </SimpleTable.Td>
            </SimpleTable.BodyTr>
          ))}
      </tbody>
    </SimpleTable.Table>
  )
}
