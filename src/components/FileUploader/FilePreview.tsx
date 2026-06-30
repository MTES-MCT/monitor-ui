import { Accent, Icon, Size } from '@constants'
import { Button } from '@elements/Button'
import { useState } from 'react'
import styled from 'styled-components'

import { useFileConverter } from './hook/useFileConverter'
import { ImageViewer } from './ImageViewer'
import { type FileApi, Orientation } from './types'
import { IMAGES_WIDTH_LANDSCAPE, IMAGES_WIDTH_PORTRAIT } from './utils'

type FilePreviewProps = {
  files: FileApi[] | undefined
  isSideWindow: boolean
  onDelete: (index: number) => void
}

export function FilePreview({ files, isSideWindow = false, onDelete }: FilePreviewProps) {
  const thumbnails = useFileConverter(files, isSideWindow)
  const [fileViewerCurrentIndex, setFileViewerCurrentIndex] = useState<number>(-1)
  const openFileViewer = (currentIndex: number) => {
    setFileViewerCurrentIndex(currentIndex)
  }

  return (
    <>
      <PreviewList>
        {thumbnails?.map(thumbnail => (
          <PreviewImagesContainer key={thumbnail.id ?? thumbnail.name}>
            <StyledImageButton onClick={() => openFileViewer(thumbnail.index)} type="button">
              <img
                alt={thumbnail.name}
                height="82px"
                src={thumbnail.image}
                width={thumbnail.orientation === Orientation.LANDSCAPE ? IMAGES_WIDTH_LANDSCAPE : IMAGES_WIDTH_PORTRAIT}
              />
            </StyledImageButton>
            <StyledButton
              accent={Accent.SECONDARY}
              Icon={Icon.Delete}
              onClick={() => onDelete(thumbnail.index)}
              size={Size.SMALL}
            />
          </PreviewImagesContainer>
        ))}
      </PreviewList>
      {fileViewerCurrentIndex !== -1 && (
        <ImageViewer
          currentIndex={fileViewerCurrentIndex}
          images={thumbnails ?? []}
          isSideWindow={isSideWindow}
          onClose={() => setFileViewerCurrentIndex(-1)}
        />
      )}
    </>
  )
}

const PreviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const PreviewImagesContainer = styled.li`
  position: relative;

  > button > img {
    object-fit: cover;
  }
`

const StyledButton = styled(Button)`
  background-color: ${p => p.theme.color.white};
  bottom: 4px;
  padding: 4px !important;
  position: absolute;
  right: 4px;

  > span {
    margin-right: 0 !important;

    > svg {
      height: 16px;
      width: 16px;
    }
  }
`

const StyledImageButton = styled.button`
  cursor: zoom-in;
  background: none;
  border: none;
  padding: 0;
`
