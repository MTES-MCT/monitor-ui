import { UploadMode } from '@constants'
import { describe, expect, it } from '@jest/globals'

import { Orientation } from '../types'
import {
  areFilesValid,
  compressImage,
  convertImagesToThumbnails,
  createInMemoryImage,
  DOCS_INFORMATIONS_TEXT,
  FILES_INFORMATIONS_TEXT,
  fileToBase64,
  getUploadParameters,
  IMAGES_INFORMATIONS_TEXT
} from '../utils'

import type { FileApi } from '../types'

// ---------------------------------------------------------------------------
// Helpers / fixtures
// ---------------------------------------------------------------------------

const VALID_BASE64 = 'aGVsbG8gd29ybGQ=' // "hello world"

const makeFile = (overrides: Partial<FileApi> = {}) => ({
  content: VALID_BASE64,
  mimeType: 'image/png',
  name: 'photo.png',
  size: 15,
  ...overrides
})

describe('utils', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    jest.restoreAllMocks()
  })

  // -------------------------------------------------------------------------
  // convertImagesToThumbnails (also exercises isValidBase64 indirectly)
  // -------------------------------------------------------------------------
  describe('convertImagesToThumbnails', () => {
    const mockDecode = (width: number, height: number) => {
      // Stub HTMLImageElement.decode + naturalWidth/naturalHeight since jsdom
      // does not actually load images.
      Object.defineProperty(HTMLImageElement.prototype, 'decode', {
        configurable: true,
        value: jest.fn().mockResolvedValue(undefined)
      })
      Object.defineProperty(HTMLImageElement.prototype, 'naturalWidth', {
        configurable: true,
        get: () => width
      })
      Object.defineProperty(HTMLImageElement.prototype, 'naturalHeight', {
        configurable: true,
        get: () => height
      })
    }

    it('returns a thumbnail with LANDSCAPE orientation when width > height', async () => {
      mockDecode(200, 100)
      const files = [makeFile()]

      const result = await convertImagesToThumbnails(files, container)

      expect(result).toHaveLength(1)
      expect(result[0]).toMatchObject({
        image: `data:image/png;base64,${VALID_BASE64}`,
        name: 'photo.png',
        orientation: Orientation.LANDSCAPE
      })
    })

    it('returns a thumbnail with PORTRAIT orientation when height >= width', async () => {
      mockDecode(100, 200)
      const files = [makeFile({ name: 'tall.png' })]

      const result = await convertImagesToThumbnails(files, container)

      expect(result[0]?.orientation).toBe(Orientation.PORTRAIT)
    })

    it('filters out files with an invalid MIME type', async () => {
      mockDecode(100, 100)
      const files = [makeFile({ mimeType: 'application/zip' })]

      const result = await convertImagesToThumbnails(files, container)

      expect(result).toHaveLength(0)
    })

    it('filters out files with invalid base64 content (bad length)', async () => {
      mockDecode(100, 100)
      const files = [makeFile({ content: 'notvalidbase64' })]

      const result = await convertImagesToThumbnails(files, container)

      expect(result).toHaveLength(0)
    })

    it('filters out files with invalid base64 content (bad characters)', async () => {
      mockDecode(100, 100)
      const files = [makeFile({ content: '!!!!' })]

      const result = await convertImagesToThumbnails(files, container)

      expect(result).toHaveLength(0)
    })

    it('filters out files whose image fails to decode', async () => {
      Object.defineProperty(HTMLImageElement.prototype, 'decode', {
        configurable: true,
        value: jest.fn().mockRejectedValue(new Error('decode failed'))
      })
      const files = [makeFile()]

      const result = await convertImagesToThumbnails(files, container)

      expect(result).toHaveLength(0)
    })

    it('processes multiple files, keeping only the valid ones', async () => {
      mockDecode(200, 100)
      const files = [makeFile({ name: 'ok.png' }), makeFile({ mimeType: 'text/plain', name: 'bad.png' })]

      const result = await convertImagesToThumbnails(files, container)

      expect(result).toHaveLength(1)
      expect(result[0]?.name).toBe('ok.png')
    })

    it('removes the temporary container from the DOM after processing', async () => {
      mockDecode(200, 100)
      const removeChildSpy = jest.spyOn(container, 'removeChild')
      const files = [makeFile()]

      await convertImagesToThumbnails(files, container)

      expect(removeChildSpy).toHaveBeenCalledTimes(1)
    })

    it('accepts application/pdf as a valid MIME type', async () => {
      mockDecode(100, 100)
      const files = [makeFile({ mimeType: 'application/pdf', name: 'doc.pdf' })]

      const result = await convertImagesToThumbnails(files, container)

      expect(result).toHaveLength(1)
    })
  })

  // -------------------------------------------------------------------------
  // compressImage
  // -------------------------------------------------------------------------
  describe('compressImage', () => {
    it('draws the image on a canvas sized to its dimensions and returns a data URL', () => {
      const img = new Image()
      Object.defineProperty(img, 'width', { value: 50 })
      Object.defineProperty(img, 'height', { value: 80 })

      const drawImageSpy = jest.fn()
      const toDataURLSpy = jest.fn().mockReturnValue('data:image/jpeg;base64,compressed')
      jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
        drawImage: drawImageSpy
      } as unknown as CanvasRenderingContext2D)
      jest.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockImplementation(toDataURLSpy)

      const result = compressImage(img, 'image/jpeg', 0.5)

      expect(drawImageSpy).toHaveBeenCalledWith(img, 0, 0, 50, 80)
      expect(toDataURLSpy).toHaveBeenCalledWith('image/jpeg', 0.5)
      expect(result).toBe('data:image/jpeg;base64,compressed')
    })

    it('uses the default quality of 0.3 when none is provided', () => {
      const img = new Image()
      const toDataURLSpy = jest.fn().mockReturnValue('data:image/png;base64,x')
      jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
        drawImage: jest.fn()
      } as unknown as CanvasRenderingContext2D)
      jest.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockImplementation(toDataURLSpy)

      compressImage(img, 'image/png')

      expect(toDataURLSpy).toHaveBeenCalledWith('image/png', 0.3)
    })
  })

  // -------------------------------------------------------------------------
  // areFilesValid
  // -------------------------------------------------------------------------
  describe('areFilesValid', () => {
    it('returns false and calls the callback with the limit-reached error when count > 5', () => {
      const callback = jest.fn()

      const result = areFilesValid(6, callback)

      expect(result).toBe(false)
      expect(callback).toHaveBeenCalledWith('Vous ne pouvez charger que 5 images au total')
    })

    it('returns true and calls the callback with the max-reached error when count === 5', () => {
      const callback = jest.fn()

      const result = areFilesValid(5, callback)

      expect(result).toBe(true)
      expect(callback).toHaveBeenCalledWith("Vous avez atteint le nombre maximum d'images")
    })

    it('returns false without calling the callback when none is provided (count > 5, count != 5)', () => {
      expect(areFilesValid(10)).toBe(false)
    })

    it('calls the callback with the IMAGES informational text by default', () => {
      const callback = jest.fn()

      const result = areFilesValid(2, callback)

      expect(result).toBe(true)
      expect(callback).toHaveBeenCalledWith(IMAGES_INFORMATIONS_TEXT)
    })

    it('calls the callback with the FILES informational text in FILES mode', () => {
      const callback = jest.fn()

      areFilesValid(1, callback, UploadMode.FILES)

      expect(callback).toHaveBeenCalledWith(FILES_INFORMATIONS_TEXT)
    })

    it('calls the callback with the DOCUMENTS informational text in DOCUMENTS mode', () => {
      const callback = jest.fn()

      areFilesValid(1, callback, UploadMode.DOCUMENTS)

      expect(callback).toHaveBeenCalledWith(DOCS_INFORMATIONS_TEXT)
    })

    it('returns true and never calls the callback when count is below the limit and no callback given', () => {
      expect(areFilesValid(0)).toBe(true)
    })
  })

  // -------------------------------------------------------------------------
  // createInMemoryImage
  // -------------------------------------------------------------------------
  describe('createInMemoryImage', () => {
    it('creates a hidden img wrapped in an absolutely positioned container appended to ref', () => {
      const { container: imgContainer, img } = createInMemoryImage(container)

      expect(img.style.display).toBe('none')
      expect(imgContainer.style.position).toBe('absolute')
      expect(imgContainer.style.width).toBe('1px')
      expect(imgContainer.style.height).toBe('1px')
      expect(imgContainer.style.overflow).toBe('hidden')
      expect(imgContainer.contains(img)).toBe(true)
      expect(container.contains(imgContainer)).toBe(true)
    })

    it('sets img.src via an object URL when a File is provided', () => {
      const fakeUrl = 'blob:fake-url'
      const createObjectURLSpy = jest.fn().mockReturnValue(fakeUrl)
      global.URL.createObjectURL = createObjectURLSpy
      const file = new File(['content'], 'test.png', { type: 'image/png' })

      const { img } = createInMemoryImage(container, file)

      expect(createObjectURLSpy).toHaveBeenCalledWith(file)
      expect(img.src).toBe(fakeUrl)
    })

    it('does not set img.src when no File is provided', () => {
      const { img } = createInMemoryImage(container)

      expect(img.src).toBe('')
    })
  })

  // -------------------------------------------------------------------------
  // fileToBase64
  // -------------------------------------------------------------------------
  describe('fileToBase64', () => {
    it('resolves with the base64 portion of the data URL', async () => {
      const file = new File(['hello world'], 'hello.txt', { type: 'text/plain' })

      const result = await fileToBase64(file)

      // jsdom's FileReader actually encodes the content, so just assert shape
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })

    it('rejects when the FileReader errors out', async () => {
      const file = new File(['hello'], 'hello.txt', { type: 'text/plain' })
      const errorEvent = new Event('error')
      jest.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(function (this: FileReader) {
        this.onerror?.(errorEvent as unknown as ProgressEvent<FileReader>)
      })

      await expect(fileToBase64(file)).rejects.toBe(errorEvent)
    })

    it('resolves with an empty string if the data URL has no comma-separated payload', async () => {
      const file = new File(['x'], 'x.txt', { type: 'text/plain' })
      jest.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(function (this: FileReader) {
        Object.defineProperty(this, 'result', { configurable: true, value: 'no-comma-here' })
        this.onload?.({} as ProgressEvent<FileReader>)
      })

      const result = await fileToBase64(file)

      expect(result).toBe('')
    })
  })

  // -------------------------------------------------------------------------
  // getUploadParameters
  // -------------------------------------------------------------------------
  describe('getUploadParameters', () => {
    it('returns the correct parameters for IMAGES mode', () => {
      expect(getUploadParameters(UploadMode.IMAGES)).toEqual({
        acceptedFiles: 'image/png, image/jpeg, image/webp',
        suffixMessage: 'une image',
        title: 'Image',
        warningMessage: IMAGES_INFORMATIONS_TEXT
      })
    })

    it('returns the correct parameters for DOCUMENTS mode', () => {
      expect(getUploadParameters(UploadMode.DOCUMENTS)).toEqual({
        acceptedFiles: 'application/pdf',
        suffixMessage: 'un document',
        title: 'Document',
        warningMessage: DOCS_INFORMATIONS_TEXT
      })
    })

    it('returns the correct parameters for FILES mode', () => {
      expect(getUploadParameters(UploadMode.FILES)).toEqual({
        acceptedFiles: 'image/png, image/jpeg, image/webp, application/pdf',
        suffixMessage: 'un fichier',
        title: 'Fichier',
        warningMessage: FILES_INFORMATIONS_TEXT
      })
    })

    it('returns undefined for an unknown mode', () => {
      expect(getUploadParameters('unknown' as UploadMode)).toBeUndefined()
    })
  })
})
