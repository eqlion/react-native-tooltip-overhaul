import {HORIZONTAL_OFFSET, VERTICAL_OFFSET} from '../constants'
import {normalizeOffsets} from './normalizeOffsets'

describe('Test normalizeOffsets', () => {
  test('should work without a value', () => {
    expect(normalizeOffsets()).toStrictEqual({
      horizontal: HORIZONTAL_OFFSET,
      vertical: VERTICAL_OFFSET,
    })
    expect(normalizeOffsets(undefined)).toStrictEqual({
      horizontal: HORIZONTAL_OFFSET,
      vertical: VERTICAL_OFFSET,
    })
    expect(normalizeOffsets({})).toStrictEqual({
      horizontal: HORIZONTAL_OFFSET,
      vertical: VERTICAL_OFFSET,
    })
  })

  test('should work with a number', () => {
    expect(normalizeOffsets(10)).toStrictEqual({
      horizontal: 10,
      vertical: 10,
    })
  })

  test('should work with one param in an object', () => {
    expect(normalizeOffsets({vertical: 10})).toStrictEqual({
      vertical: 10,
      horizontal: HORIZONTAL_OFFSET,
    })

    expect(normalizeOffsets({horizontal: 10})).toStrictEqual({
      horizontal: 10,
      vertical: VERTICAL_OFFSET,
    })
  })

  test('should return the input if both values are provided', () => {
    expect(normalizeOffsets({horizontal: 10, vertical: 20})).toStrictEqual({
      horizontal: 10,
      vertical: 20,
    })
  })
})
