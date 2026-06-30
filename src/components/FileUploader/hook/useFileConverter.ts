import { useNewWindow } from '@hooks/useNewWindow'
import { useEffect, useState } from 'react'

import { convertImagesToThumbnails } from '../utils'

import type { FileApi, Thumbnail } from '../types'

/**
 * Convert files to thumbnails (only images)
 *
 * @param files
 * @param isSideWindow
 */
export const useFileConverter = (files?: FileApi[], isSideWindow = false) => {
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>()
  const { newWindowContainerRef } = useNewWindow()

  useEffect(() => {
    const fetchThumbnails = async () => {
      setThumbnails(
        await convertImagesToThumbnails(files ?? [], isSideWindow ? newWindowContainerRef.current : document.body)
      )
    }

    fetchThumbnails()
  }, [files, isSideWindow, newWindowContainerRef])

  return thumbnails
}
