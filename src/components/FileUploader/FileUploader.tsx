import { Icon, UploadMode } from '@constants'
import { Label } from '@elements/Label'
import { useNewWindow } from '@hooks/useNewWindow'
import { THEME } from '@theme'
import React, { type ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { FileList } from './FileList'
import { FilePreview } from './FilePreview'
import { areFilesValid, compressImage, createInMemoryImage, fileToBase64, getUploadParameters } from './utils'

import type { FileApi } from './types'

export type FileUploaderProps = {
  className?: string
  files: FileApi[] | undefined
  isSideWindow?: boolean
  mode?: UploadMode | undefined
  onDelete: (files: FileApi[]) => void
  onError: (error: string) => void
  onUpload: (files: FileApi[]) => void
}

export function FileUploader({
  className,
  files,
  isSideWindow = false,
  mode = UploadMode.IMAGES,
  onDelete,
  onError,
  onUpload
}: FileUploaderProps) {
  const parameter = getUploadParameters(mode)
  // eslint-disable-next-line no-null/no-null
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const [fileText, setFileText] = useState<string | undefined>(parameter?.warningMessage)

  useEffect(() => {
    setFileText(parameter?.warningMessage)
  }, [parameter?.warningMessage])

  const documents = useMemo(
    () => files?.map((file, index) => ({ ...file, index })).filter(file => file.mimeType.includes('application/pdf')),
    [files]
  )
  const { newWindowContainerRef } = useNewWindow()

  const uploadFileDisplay = async (filesToUpload: FileList) => {
    const uploadFiles = async () => {
      const compressedImages: FileApi[] = []
      try {
        await Promise.all(
          Array.from(filesToUpload).map(async file => {
            if ((mode === UploadMode.FILES || mode === UploadMode.IMAGES) && file.type.startsWith('image/')) {
              const { container, img } = createInMemoryImage(
                isSideWindow ? newWindowContainerRef.current : document.body,
                file
              )

              await img.decode()

              const base64Image = compressImage(img, file.type)
              container.remove()
              const content = base64Image.split(',')[1] ?? ''
              const compressedImageForApi = {
                content,
                mimeType: file.type,
                name: file.name,
                size: file.size
              }

              compressedImages.push(compressedImageForApi)
            }
            if (
              (mode === UploadMode.DOCUMENTS || mode === UploadMode.FILES) &&
              file.type.startsWith('application/pdf')
            ) {
              const content = await fileToBase64(file)
              compressedImages.push({
                content,
                mimeType: file.type,
                name: file.name,
                size: file.size
              })
            }
          })
        )

        onUpload([...(files ?? []), ...compressedImages])
      } catch (error) {
        const errorMessage = "Un problème est survenu lors de l'ajout du fichier. Veuillez recommencer"
        onError(errorMessage)
      }
    }

    if (!areFilesValid(filesToUpload.length + (files ?? []).length, setFileText, mode)) {
      return
    }

    uploadFiles()
  }

  const deleteFile = (indexToRemove: number) => {
    const updatedFiles = (files ?? []).filter((_, index) => index !== indexToRemove)
    areFilesValid(updatedFiles.length, setFileText, mode)
    onDelete(updatedFiles)
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (!e.dataTransfer?.files) {
      return
    }
    uploadFileDisplay(e.dataTransfer.files)
  }

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) {
      return
    }
    uploadFileDisplay(e.currentTarget.files)
  }

  return (
    <div
      className={className}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Label>{parameter?.title}</Label>
      <Container>
        <LoadFileZone $isDragging={isDragging} onClick={() => inputRef.current?.click()}>
          <Icon.Download />
          <span>
            <Underline>Charger</Underline> ou <Underline>glisser-déposer</Underline> {parameter?.suffixMessage}
          </span>
          <input
            ref={inputRef}
            accept={parameter?.acceptedFiles}
            hidden
            multiple
            onChange={handleFileSelect}
            type="file"
          />
          <Text $hasError={fileText !== parameter?.warningMessage}>{fileText}</Text>
        </LoadFileZone>
        {(mode === UploadMode.FILES || mode === UploadMode.DOCUMENTS) && (
          <FileList files={documents} onDelete={index => deleteFile(index)} />
        )}
        {(mode === UploadMode.FILES || mode === UploadMode.IMAGES) && (
          <FilePreview files={files} isSideWindow={isSideWindow} onDelete={index => deleteFile(index)} />
        )}
      </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const LoadFileZone = styled.button<{ $isDragging: boolean }>`
  align-items: center;
  background: ${THEME.color.white};
  border: 1px dashed ${THEME.color.charcoal};
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  gap: 6px;
  justify-content: center;
  ${({ $isDragging, theme }) =>
    $isDragging && `background-color: ${theme.color.blueYonder25}; border: 1px dashed ${theme.color.blueGray};`}
  &:hover {
    background-color: ${THEME.color.blueYonder25};
    border: 1px dashed ${THEME.color.blueGray};
  }
  font-size: 13px;
`

const Text = styled.p<{ $hasError: boolean }>`
  color: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.slateGray)};
  font-style: italic;
  margin-bottom: 4px;
  margin-top: 4px;
  font-size: 11px;
`

const Underline = styled.span`
  text-decoration: underline;
`
