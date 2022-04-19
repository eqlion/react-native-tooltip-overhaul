import {HORIZONTAL_OFFSET, VERTICAL_OFFSET} from '../constants'
import type {IOffsets} from '../types'

export const normalizeOffsets = (offsets?: number | IOffsets | undefined) => {
  let localOffsets: Required<IOffsets>

  if (typeof offsets === 'number') {
    localOffsets = {horizontal: offsets, vertical: offsets}
  } else {
    localOffsets = {
      horizontal: offsets?.horizontal ?? HORIZONTAL_OFFSET,
      vertical: offsets?.vertical ?? VERTICAL_OFFSET,
    }
  }

  return localOffsets
}
