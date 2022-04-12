import React, {FC} from 'react'
import {LayoutChangeEvent, TouchableOpacity} from 'react-native'
import TipManager from './TipManager'
import type {TipProps} from './types'

const Tip: FC<TipProps> = (props) => {
  const {
    id,
    children,
    title,
    body,
    titleStyle,
    bodyStyle,
    tipContainerStyle,
    dismissible,
    renderTip,
    overlayOpacity,
    showItemPulseAnimation,
    pulseColor,
    onPressItem,
    onDismiss,
    onTipPress,
    style,
    active = true,
    activeItemStyle,
    pulseStyle,
  } = props

  const tipId = React.useRef('')

  React.useEffect(() => {
    return () => TipManager.unregisterTip(tipId.current)
  }, [])

  function showTip() {
    TipManager.showTip(tipId.current)
  }

  function getDimensions(evt: LayoutChangeEvent) {
    const layout = evt.nativeEvent.layout

    const _id = String(id ?? new Date().getTime())
    tipId.current = _id

    TipManager.registerTip({
      id: _id,
      target: evt.nativeEvent.target,
      layout,
      title,
      body,
      titleStyle,
      bodyStyle,
      tipContainerStyle,
      dismissible,
      children,
      renderTip,
      overlayOpacity,
      showItemPulseAnimation,
      pulseColor,
      onPressItem,
      onDismiss,
      onTipPress,
      activeItemStyle,
      pulseStyle,
    })
  }

  if (tipId.current) TipManager.updateProps(tipId.current, props)

  return (
    <TouchableOpacity
      onLayout={getDimensions}
      disabled={!active}
      onPress={showTip}
      style={style}>
      {children}
    </TouchableOpacity>
  )
}

export default Tip
