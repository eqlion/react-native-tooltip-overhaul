import {HORIZONTAL_OFFSET, VERTICAL_OFFSET} from '../constants'
import {ETipPosition, IMeasurements, ITipSize} from '../types'
import {useMemo} from 'react'

type UseTipCoords = (args: {
  position: ETipPosition
  itemPosition: IMeasurements
  tipSize: ITipSize
}) => {left: number; top: number}

export const useTipCoords: UseTipCoords = ({
  position,
  itemPosition,
  tipSize,
}) => {
  return useMemo(() => {
    switch (position) {
      case ETipPosition.LEFT: {
        const left = itemPosition.x - tipSize.width - HORIZONTAL_OFFSET
        const top = itemPosition.y - VERTICAL_OFFSET

        return {left, top}
      }

      case ETipPosition.RIGHT: {
        const left = itemPosition.x + itemPosition.width + HORIZONTAL_OFFSET
        const top = itemPosition.y - VERTICAL_OFFSET

        return {left, top}
      }

      case ETipPosition.TOP: {
        const left = itemPosition.x + itemPosition.width / 2 - tipSize.width / 2
        const top = itemPosition.y - VERTICAL_OFFSET - tipSize.height

        return {left, top}
      }

      case ETipPosition.BOTTOM: {
        const left = itemPosition.x + itemPosition.width / 2 - tipSize.width / 2
        const top = itemPosition.y + itemPosition.height + VERTICAL_OFFSET

        return {left, top}
      }

      default: {
        return {left: 0, top: 0}
      }
    }
  }, [
    itemPosition.height,
    itemPosition.width,
    itemPosition.x,
    itemPosition.y,
    position,
    tipSize.height,
    tipSize.width,
  ])
}
