export const normalizeOverlayColor = (opacity: number) => {
  const _opacity = Math.min(Math.max(opacity, 0), 1)

  return `#000000${Math.floor(_opacity * 255).toString(16)}`
}
