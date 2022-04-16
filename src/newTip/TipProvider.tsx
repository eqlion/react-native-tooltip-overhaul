import React, {useCallback, useState} from 'react'
import type {FC, PropsWithChildren} from 'react'
import {TipContext} from './TipContext'
import {Modal, Text, View} from 'react-native'
import {ETipPosition, IMeasurements, ShowTipArgs} from './types'
import {Overlay} from './Overlay'
import {
  SafeAreaProvider,
  useSafeAreaFrame,
} from 'react-native-safe-area-context'
import {TipBody} from './TipBody'

type Props = {}

const TipProvider_: FC<PropsWithChildren<Props>> = ({children}) => {
  const [isModalShown, setModalShown] = useState(false)
  const {y} = useSafeAreaFrame()
  const [measurements, setMeasurements] = useState<IMeasurements>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const [currentPosition, setCurrentPosition] = useState<ETipPosition>(
    ETipPosition.AUTO,
  )
  // const [tipSize, setTipSize] = useState<ITipSize>({
  //   width: 0,
  //   height: 0,
  // })

  const showTip = useCallback(
    (args: ShowTipArgs) => {
      setMeasurements({
        ...args.measurements,
        y: args.measurements.y + y,
      })
      setModalShown(true)
      setCurrentPosition(args.position)
    },
    [y],
  )

  return (
    <TipContext.Provider
      value={{
        showTip,
      }}>
      {children}
      <Modal
        animationType="fade"
        visible={isModalShown}
        onRequestClose={() => setModalShown(false)}
        transparent
        presentationStyle="overFullScreen"
        hardwareAccelerated
        statusBarTranslucent>
        <Overlay onPress={() => setModalShown(false)}>
          <TipBody position={currentPosition} itemPosition={measurements}>
            <View
              style={{
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}>
              <Text style={{color: '#000'}}>ABOBUS</Text>
            </View>
          </TipBody>
        </Overlay>
      </Modal>
    </TipContext.Provider>
  )
}

export const TipProvider: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <SafeAreaProvider>
      <TipProvider_ {...props} />
    </SafeAreaProvider>
  )
}
