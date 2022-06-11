import React, {useCallback, useRef, useState} from 'react'
import type {FC, PropsWithChildren} from 'react'
import {Modal} from 'react-native'

import {Overlay} from './Overlay'
import {TipBody} from './TipBody'

import {TipContext} from '../contexts'
import {
  ETipPosition,
  IMeasurements,
  IOffsets,
  RenderTip,
  ShowTipArgs,
} from '../types'

export const TipProvider: FC<PropsWithChildren<{}>> = ({children}) => {
  const [isModalShown, setModalShown] = useState(false)

  const measurements = useRef<IMeasurements>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const currentPosition = useRef<ETipPosition>(ETipPosition.AUTO)
  const overlayOpacity = useRef<number | undefined>()
  const offsets = useRef<IOffsets | number | undefined>()
  const renderTip = useRef<RenderTip>(() => null)
  const onClose = useRef<(() => void) | undefined>()

  const showTip = useCallback((args: ShowTipArgs) => {
    // changing ref does not cause a UI update,
    // however the changing state right after it does
    renderTip.current = args.renderTip
    measurements.current = args.measurements
    currentPosition.current = args.position
    overlayOpacity.current = args.overlayOpacity
    offsets.current = args.offsets
    onClose.current = args.onClose
    setModalShown(true)
  }, [])

  const closeTip = useCallback(() => {
    onClose.current?.()
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
        onRequestClose={closeTip}
        transparent
        presentationStyle="overFullScreen"
        hardwareAccelerated
        statusBarTranslucent>
        <Overlay onPress={closeTip} opacity={overlayOpacity.current}>
          <TipBody
            position={currentPosition.current}
            itemPosition={measurements.current}
            offsets={offsets.current}>
            {renderTip.current()}
          </TipBody>
        </Overlay>
      </Modal>
    </TipContext.Provider>
  )
}
