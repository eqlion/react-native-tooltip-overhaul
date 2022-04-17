import React from 'react'
import type {FC, PropsWithChildren} from 'react'
import {Pressable, StyleSheet} from 'react-native'

type Props = {opacity?: number; onPress: () => void}

export const Overlay: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  opacity = 0.6,
}) => {
  const backgroundColor = `#000000${(opacity * 255).toString(16)}`

  return (
    <Pressable onPress={onPress} style={[styles.overlay, {backgroundColor}]}>
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
})
