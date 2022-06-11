import React, {useCallback, useImperativeHandle, useRef} from 'react'
import type {PropsWithChildren} from 'react'
import {Pressable, View} from 'react-native'
import {useInternalTip} from '../hooks'
import type {IMeasurements, TipMethods, TipProps} from '../types'
import {ETipPosition} from '../types'
import {useSafeAreaFrame} from 'react-native-safe-area-context'

export const Tip = React.forwardRef<TipMethods, PropsWithChildren<TipProps>>(
  (
    {
      children,
      position = ETipPosition.AUTO,
      renderTip,
      pressable = true,
      overlayOpacity,
      offsets,
      onShow,
      onClose,
      ...props
    },
    ref,
  ) => {
    const localRef = useRef<View>(null)
    const {showTip, closeTip} = useInternalTip()
    const {y: screenY} = useSafeAreaFrame()

    const measureInWindow = useCallback(
      () =>
        new Promise<IMeasurements>((res) => {
          localRef.current?.measureInWindow((x, y, width, height) => {
            res({x, y: y + screenY, width, height})
          })
        }),
      [screenY],
    )

    const onPress = useCallback(() => {
      measureInWindow().then((measurements) => {
        showTip({
          measurements,
          position,
          renderTip,
          overlayOpacity,
          offsets,
          onClose,
        })
        onShow?.()
      })
    }, [
      measureInWindow,
      offsets,
      onClose,
      onShow,
      overlayOpacity,
      position,
      renderTip,
      showTip,
    ])

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
