import { Accent, Icon, Size } from '@constants'
import { IconButton } from '@elements/IconButton'
import { THEME } from '@theme'
import styled from 'styled-components'

import type { FileApi } from './types'

type FileWithIndex = FileApi & { index: number }

type FileListProps = {
  files: FileWithIndex[] | undefined
  onDelete: (index: number) => void
}

function humanFileSize(bytes: number, decimals = 2): string {
  if (bytes === 0) {
    return '0 B'
  }

  const units = ['B', 'KB', 'MB', 'GB']
  const factor = 1024

  const index = Math.floor(Math.log(bytes) / Math.log(factor))
  const value = bytes / factor ** index

  return `${value.toFixed(decimals).replace(/\.?0+$/, '')} ${units[index]}`
}

export function FileList({ files, onDelete }: FileListProps) {
  if (!files?.length) {
    return undefined
  }

  return (
    <StyledFileList>
      {files?.map(file => (
        <FileItem key={file.id}>
          <Icon.Attachment color={THEME.color.slateGray} />
          <FileInformation>
            <Filename
              download={file.name}
              href={`data:${file.mimeType};base64,${file.content}`}
              rel="noopener noreferrer"
              target="_blank"
              title={file.name}
            >
              {file.name}
            </Filename>
            <FileSize>{humanFileSize(file.size)}</FileSize>
          </FileInformation>
          <IconButton
            accent={Accent.TERTIARY}
            color={THEME.color.slateGray}
            Icon={Icon.Close}
            onClick={() => onDelete(file.index)}
            size={Size.SMALL}
            style={{ marginLeft: 'auto' }}
            title="Supprimer"
          />
        </FileItem>
      ))}
    </StyledFileList>
  )
}

const StyledFileList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  gap: 4px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const FileItem = styled.li`
  background: ${p => p.theme.color.gainsboro};
  display: flex;
  gap: 8px;
  padding: 8px 12px;
`

const FileInformation = styled.div`
  align-items: baseline;
  display: flex;
  font-size: 13px;
  min-width: 0;
`
const FileSize = styled.span`
  margin-left: 8px;
  white-space: pre;
  color: ${p => p.theme.color.slateGray};
`

const Filename = styled.a`
  color: ${p => p.theme.color.charcoal};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
