export enum Orientation {
  LANDSCAPE = 'landscape',
  PORTRAIT = 'portrait'
}

export type Thumbnail = {
  id?: string
  image: string
  index: number
  name: string
  orientation: Orientation
}

export type FileApi = {
  content: string
  id?: string
  mimeType: string
  name: string
  size: number
}
