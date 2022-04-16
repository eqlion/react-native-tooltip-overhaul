export type ShowTipArgs = {
  measurements: IMeasurements
  position: ETipPosition
}
export interface ITipContext {
  showTip: (args: ShowTipArgs) => void
}

export interface IMeasurements {
  x: number
  y: number
  width: number
  height: number
}

export interface ITipSize {
  width: number
  height: number
}

export enum ETipPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  AUTO = 'AUTO',
}
