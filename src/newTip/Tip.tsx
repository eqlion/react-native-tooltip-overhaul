import React, {useCallback, useRef} from 'react'
import type {FC, PropsWithChildren} from 'react'
import {TouchableOpacity} from 'react-native'
import {useTip} from './hooks/useTip'
import {ETipPosition, IMeasurements} from './types'

type Props = {position?: ETipPosition}

export const Tip: FC<PropsWithChildren<Props>> = ({
  children,
  position = ETipPosition.AUTO,
}) => {
  const ref = useRef<TouchableOpacity>(null)
  const {showTip} = useTip()

  const measureInWindow = useCallback(
    () =>
      new Promise<IMeasurements>((res) => {
        ref.current?.measureInWindow((x, y, width, height) => {
          res({x, y, width, height})
        })
      }),
    [],
  )

  const onPress = useCallback(() => {
    measureInWindow().then((measurements) => showTip({measurements, position}))
  }, [measureInWindow, position, showTip])

  return (
    <TouchableOpacity onPress={onPress} ref={ref}>
      {children}
    </TouchableOpacity>
  )
}
