export * as Icon from './icons'

export enum Accent {
  ERROR = 'ERROR',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  WARNING = 'WARNING'
}

export enum Level {
  ERROR = 'ERROR',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING'
}

export enum CoordinatesFormat {
  DECIMAL_DEGREES = 'DD',
  DEGREES_MINUTES_DECIMALS = 'DMD',
  DEGREES_MINUTES_SECONDS = 'DMS'
}

export enum RichBoolean {
  BOTH = 'BOTH',
  FALSE = 'FALSE',
  TRUE = 'TRUE'
}

export enum Size {
  LARGE = 'LARGE',
  NORMAL = 'NORMAL',
  SMALL = 'SMALL'
}

export enum TagBullet {
  DISK = 'DISK'
}

export const WSG84_PROJECTION = 'EPSG:4326'
export const OPENLAYERS_PROJECTION = 'EPSG:3857'
