import {normalizeOverlayColor} from './normalizeOverlayColor'

describe('Test normalizeOverlayColor', () => {
  test('should work for normal opacity value', () => {
    expect(normalizeOverlayColor(0.5)).toEqual('#0000007f')
  })

  test('should work for edge values', () => {
    expect(normalizeOverlayColor(0)).toEqual('#00000000')
    expect(normalizeOverlayColor(1)).toEqual('#000000ff')
  })

  test('should work for exceedingly small and large values', () => {
    expect(normalizeOverlayColor(-10)).toEqual('#00000000')
    expect(normalizeOverlayColor(10)).toEqual('#000000ff')
  })
})
