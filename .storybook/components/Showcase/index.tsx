import styled from 'styled-components'

import { Subtitle } from './Subtitle'
import { Table } from './Table'
import { Title } from './Title'

import type { HTMLAttributes } from 'react'

export type RawShowcaseProps = HTMLAttributes<HTMLDivElement>
function RawShowcase(nativeProps: RawShowcaseProps) {
  return (
    <>
      <Line />
      <Title>Showcase</Title>
      <Box {...nativeProps} />
    </>
  )
}

const Line = styled.hr`
  margin: 20px 0 0;
`

const Box = styled.div`
  > h2:not(:first-child),
  > h3:not(:first-child) {
    margin-top: 32px;
  }
`

export const Showcase = Object.assign(RawShowcase, {
  Subtitle,
  Table
})
