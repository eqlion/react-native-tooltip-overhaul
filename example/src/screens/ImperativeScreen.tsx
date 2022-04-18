import React, {useCallback, useRef} from 'react'
import type {FC} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import {Tip, TipMethods} from 'react-native-tooltip-overhaul'

export const ImperativeScreen: FC = () => {
  const renderTip = useCallback(
    () => (
      <View style={styles.tipContainer}>
        <Text style={styles.tipText}>Tip body example</Text>
      </View>
    ),
    [],
  )

  const tipRef = useRef<TipMethods>(null)

  const onPress = useCallback(() => {
    tipRef.current?.showTip()
  }, [])

  return (
    <View style={styles.screen}>
      <Tip
        renderTip={renderTip}
        pressable={false}
        ref={tipRef}
        style={styles.tip}>
        <Text>Tip will be here</Text>
      </Tip>
      <Button title="Show tip" onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  button: {
    marginBottom: 10,
  },
  tipContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  tipText: {color: '#000'},
  tip: {
    marginBottom: 10,
  },
})
