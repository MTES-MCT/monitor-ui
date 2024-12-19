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

  const emptyRows = new Array(10).fill(undefined)
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
        <SimpleTable.HeadTr>
          <SimpleTable.Th $width={250}>ID</SimpleTable.Th>
          <SimpleTable.Th $width={240}>Name</SimpleTable.Th>
          <SimpleTable.Th $width={480}>Address</SimpleTable.Th>
          <SimpleTable.Th $width={44} />
        </SimpleTable.HeadTr>
      </SimpleTable.Head>
      <SimpleTable.Body>
        {isLoading &&
          emptyRows.map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SimpleTable.BodyTr key={`row-${index}`} $withoutVirtualize>
              <SimpleTable.Td
                $isLoading
                style={{
                  maxWidth: '250px',
                  minWidth: '250px',
                  width: '250px'
                }}
              />
              <SimpleTable.Td
                $isLoading
                style={{
                  maxWidth: '240px',
                  minWidth: '240px',
                  width: '240px'
                }}
              />
              <SimpleTable.Td
                $isLoading
                style={{
                  maxWidth: '480px',
                  minWidth: '480px',
                  width: '480px'
                }}
              />
              <SimpleTable.Td
                $isLoading
                style={{
                  maxWidth: '44px',
                  minWidth: '44px',
                  width: '44px'
                }}
              />
            </SimpleTable.BodyTr>
          ))}
        {!isLoading &&
          data?.map(brewery => (
            <SimpleTable.BodyTr key={brewery.id} $withoutVirtualize>
              <SimpleTable.Td
                style={{
                  maxWidth: '250px',
                  minWidth: '250px',
                  width: '250px'
                }}
              >
                {brewery.id}
              </SimpleTable.Td>
              <SimpleTable.Td
                style={{
                  maxWidth: '240px',
                  minWidth: '240px',
                  width: '240px'
                }}
              >
                {brewery.name}
              </SimpleTable.Td>
              <SimpleTable.Td
                style={{
                  maxWidth: '480px',
                  minWidth: '480px',
                  width: '480px'
                }}
              >{`${brewery.street}, ${brewery.city} ${brewery.postalCode}, ${brewery.state}`}</SimpleTable.Td>
              <SimpleTable.Td
                style={{
                  maxWidth: '44px',
                  minWidth: '44px',
                  width: '44px'
                }}
              >
                <IconButton Icon={Icon.Check} size={Size.SMALL} />
              </SimpleTable.Td>
            </SimpleTable.BodyTr>
          ))}
      </SimpleTable.Body>
    </SimpleTable.Table>
  )
}
