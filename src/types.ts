import type {ReactNode} from 'react'
import type {PressableProps} from 'react-native'

export type ShowTipArgs = {
  measurements: IMeasurements
  position: ETipPosition
  renderTip: RenderTip
}
export interface ITipContext {
  showTip: (args: ShowTipArgs) => void
  closeTip: () => void
}

export interface IExternalTipContext {
  showTip: () => void
  closeTip: () => void
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

export type RenderTip = () => ReactNode

export type TipProps = {
  renderTip: RenderTip
  position?: ETipPosition
  pressable?: boolean
} & Omit<PressableProps, 'onPress' | 'disabled'>

export type TipMethods = {
  showTip: () => void
  closeTip: () => void
}
