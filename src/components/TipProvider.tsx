import React, {useCallback, useRef, useState} from 'react'
import type {FC, PropsWithChildren} from 'react'
import {Modal} from 'react-native'

import {Overlay} from './Overlay'
import {TipBody} from './TipBody'

import {TipContext} from '../contexts'
import {ETipPosition, IMeasurements, RenderTip, ShowTipArgs} from '../types'

export const TipProvider: FC<PropsWithChildren<{}>> = ({children}) => {
  const [isModalShown, setModalShown] = useState(false)
  const [measurements, setMeasurements] = useState<IMeasurements>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const [currentPosition, setCurrentPosition] = useState<ETipPosition>(
    ETipPosition.AUTO,
  )
  // Storing function in a state is weird, so storing it in a ref
  const renderTip = useRef<RenderTip>(() => null)

  const showTip = useCallback((args: ShowTipArgs) => {
    // changing ref does not cause UI update,
    // however the changing state right after it does
    renderTip.current = args.renderTip
    setMeasurements(args.measurements)
    setModalShown(true)
    setCurrentPosition(args.position)
  }, [])

  const closeTip = useCallback(() => {
    setModalShown(false)
  }, [])

  return (
    <TipContext.Provider
      value={{
        showTip,
        closeTip,
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
            {renderTip.current()}
          </TipBody>
        </Overlay>
      </Modal>
    </TipContext.Provider>
  )
}
