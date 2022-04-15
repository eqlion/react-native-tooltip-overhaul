import React, {useRef} from 'react'
import type {FC, PropsWithChildren} from 'react'
import {LayoutChangeEvent, View} from 'react-native'

type Props = {}

export const Tip: FC<PropsWithChildren<Props>> = ({children}) => {
  const ref = useRef<View>(null)
  const onLayout = (event: LayoutChangeEvent) => {
    console.log(JSON.stringify(event, null, 2))
  }

  return (
    <View ref={ref} onLayout={onLayout}>
      {children}
    </View>
  )
}
