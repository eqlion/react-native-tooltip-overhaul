import {RENDER_BOUNDARY} from '../constants'
import {ETipPosition, UseTipCoords} from '../types'
import {useWindowDimensions} from 'react-native'
import {normalizeOffsets} from '../util'

export const useTipCoords: UseTipCoords = ({
  position,
  itemPosition,
  tipSize,
  offsets,
}) => {
  const {width: screenWidth, height: screenHeight} = useWindowDimensions()
  const localOffsets = normalizeOffsets(offsets)

  switch (position) {
    case ETipPosition.LEFT: {
      const left = itemPosition.x - tipSize.width - localOffsets.horizontal
      const top = itemPosition.y - localOffsets.vertical

      return {left, top}
    }

    case ETipPosition.RIGHT: {
      const left = itemPosition.x + itemPosition.width + localOffsets.horizontal
      const top = itemPosition.y - localOffsets.vertical

      return {left, top}
    }

    case ETipPosition.TOP: {
      const left =
        itemPosition.x +
        itemPosition.width / 2 -
        tipSize.width / 2 +
        localOffsets.horizontal
      const top = itemPosition.y - localOffsets.vertical - tipSize.height

      return {left, top}
    }

    case ETipPosition.BOTTOM: {
      const left =
        itemPosition.x +
        itemPosition.width / 2 -
        tipSize.width / 2 +
        localOffsets.horizontal
      const top = itemPosition.y + itemPosition.height + localOffsets.vertical

      return {left, top}
    }

    case ETipPosition.AUTO: {
      let left = itemPosition.x + itemPosition.width / 2 - tipSize.width / 2
      let top = itemPosition.y + itemPosition.height + localOffsets.vertical

      // handle left screen boundary
      if (left - RENDER_BOUNDARY < 0) left = RENDER_BOUNDARY

      // handle right screen boundary
      if (left + tipSize.width + RENDER_BOUNDARY > screenWidth)
        left = screenWidth - RENDER_BOUNDARY - tipSize.width

      // by default AUTO tries to draw the tip below the item
      // therefore we need to handle only bottom screen boundary
      if (top + tipSize.height + RENDER_BOUNDARY > screenHeight)
        top = itemPosition.y - localOffsets.vertical - tipSize.height

      return {left, top}
    }

    default: {
      return {left: 0, top: 0}
    }
  }
}
