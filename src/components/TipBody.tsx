import React, {useCallback, useState} from 'react'
import type {FC, PropsWithChildren} from 'react'
import {LayoutChangeEvent, View, StyleSheet} from 'react-native'
import type {ETipPosition, IMeasurements, IOffsets, ITipSize} from '../types'
import {useTipCoords} from '../hooks'

type Props = {
  position: ETipPosition
  itemPosition: IMeasurements
  offsets?: IOffsets | number
}

export const TipBody: FC<PropsWithChildren<Props>> = ({
  children,
  position,
  itemPosition,
  offsets,
}) => {
  const [tipSize, setTipSize] = useState<ITipSize>({width: 0, height: 0})
  const coords = useTipCoords({position, itemPosition, tipSize, offsets})
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setTipSize(e.nativeEvent.layout)
  }, [])

  return (
    <View onLayout={onLayout} style={[styles.container, coords]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
})
