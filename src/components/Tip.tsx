import React, {useCallback, useImperativeHandle, useRef} from 'react'
import type {PropsWithChildren} from 'react'
import {Pressable, View} from 'react-native'
import {useInternalTip} from '../hooks'
import type {IMeasurements, TipMethods, TipProps} from '../types'
import {ETipPosition} from '../types'

export const Tip = React.forwardRef<TipMethods, PropsWithChildren<TipProps>>(
  (
    {
      children,
      position = ETipPosition.AUTO,
      renderTip,
      pressable = true,
      ...props
    },
    ref,
  ) => {
    const localRef = useRef<View>(null)
    const {showTip, closeTip} = useInternalTip()

    const measureInWindow = useCallback(
      () =>
        new Promise<IMeasurements>((res) => {
          localRef.current?.measureInWindow((x, y, width, height) => {
            res({x, y, width, height})
          })
        }),
      [],
    )

    const onPress = useCallback(() => {
      measureInWindow().then((measurements) =>
        showTip({measurements, position, renderTip}),
      )
    }, [measureInWindow, position, renderTip, showTip])

    useImperativeHandle(ref, () => ({showTip: onPress, closeTip}))

    return (
      <Pressable
        onPress={onPress}
        ref={localRef}
        disabled={!pressable}
        {...props}>
        {children}
      </Pressable>
    )
  },
)
