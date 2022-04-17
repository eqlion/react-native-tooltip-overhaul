import {HORIZONTAL_OFFSET, VERTICAL_OFFSET, RENDER_BOUNDARY} from '../constants'
import {ETipPosition, IMeasurements, ITipSize} from '../types'
import {useWindowDimensions} from 'react-native'

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
  const {width: screenWidth, height: screenHeight} = useWindowDimensions()

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

    case ETipPosition.AUTO: {
      let left = itemPosition.x + itemPosition.width / 2 - tipSize.width / 2
      let top = itemPosition.y + itemPosition.height + VERTICAL_OFFSET

      // handle left screen boundary
      if (left - RENDER_BOUNDARY < 0) left = RENDER_BOUNDARY

      // handle right screen boundary
      if (left + tipSize.width + RENDER_BOUNDARY > screenWidth)
        left = screenWidth - RENDER_BOUNDARY - tipSize.width

      // by default AUTO tries to draw the tip below the item
      // therefore we need to handle bottom screen boundary
      if (top + tipSize.height + RENDER_BOUNDARY > screenHeight)
        top = itemPosition.y - VERTICAL_OFFSET - tipSize.height

      return {left, top}
    }

    default: {
      return {left: 0, top: 0}
    }
  }
}
