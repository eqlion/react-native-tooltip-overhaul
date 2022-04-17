import React, {useCallback, useRef} from 'react'
import type {FC} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {
  Tip,
  TipProvider,
  ETipPosition,
  TipMethods,
} from 'react-native-tooltip-overhaul'

const App: FC = () => {
  const renderTip = useCallback(
    () => (
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#fff',
        }}>
        <Text style={{color: '#000'}}>ABOBUS</Text>
      </View>
    ),
    [],
  )
  const tipRef = useRef<TipMethods>(null)

  return (
    <TipProvider>
      <View style={styles.container}>
        {/* <View style={styles.container}> */}
        <Tip renderTip={renderTip} position={ETipPosition.AUTO} ref={tipRef}>
          <Text style={{backgroundColor: 'red'}}>Result1</Text>
        </Tip>
        {/* </View> */}
        {/* <View style={styles.container}> */}
        <Tip renderTip={renderTip} position={ETipPosition.AUTO}>
          <Text>Result2</Text>
        </Tip>
        {/* </View> */}
        <Button title="Open tip" onPress={() => tipRef.current?.showTip()} />
      </View>
    </TipProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
})
