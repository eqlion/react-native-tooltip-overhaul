import type {ReactNode} from 'react'
import type {PressableProps} from 'react-native'

export type ShowTipArgs = {
  measurements: IMeasurements
  position: ETipPosition
  renderTip: RenderTip
  overlayOpacity?: number
  offsets?: IOffsets | number
  onClose?: () => void
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

export interface IOffsets {
  horizontal?: number
  vertical?: number
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
  /** Render function that returns `ReactNode` - the item shown on the tip */
  renderTip: RenderTip
  /** The position of the tip: 'AUTO', 'TOP', 'BOTTOM', 'LEFT', 'RIGHT'. *Default 'AUTO'* */
  position?: ETipPosition
  /** If the target is pressable. If `false`, you would have to handle showing the tip yourself */
  pressable?: boolean
  /** Opacity of the overlay, `>= 0`, `<= 1`. *Default 0.6*  */
  overlayOpacity?: number
  /** Offsets of the tip relative to the normal position. *Default both 10* */
  offsets?: IOffsets | number
  /** Callback, that is called when the tip is opened */
  onShow?: () => void
  /** Callback, that is called when the tip is closed */
  onClose?: () => void
} & Omit<PressableProps, 'onPress' | 'disabled'>

export type TipMethods = {
  showTip: () => void
  closeTip: () => void
}

export type UseTipCoords = (args: {
  position: ETipPosition
  itemPosition: IMeasurements
  tipSize: ITipSize
  offsets: IOffsets | number | undefined
}) => {left: number; top: number}
