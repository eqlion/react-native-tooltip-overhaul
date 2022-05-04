import React from 'react'
import type {FC, PropsWithChildren} from 'react'
import {Pressable, StyleSheet} from 'react-native'
import {normalizeOverlayColor} from '../util'

type Props = {opacity?: number; onPress: () => void}

export const Overlay: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  opacity = 0.6,
}) => {
  const backgroundColor = normalizeOverlayColor(opacity)

  return (
    <Pressable onPress={onPress} style={[styles.overlay, {backgroundColor}]}>
      <>{children}</>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
})
