import React from 'react'
import type {FC} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {
  NewTip,
  NewTipProvider,
  ETipPosition,
} from 'react-native-tooltip-overhaul'

const App: FC = () => {
  return (
    <NewTipProvider>
      <View style={styles.container}>
        <View style={styles.container}>
          <NewTip position={ETipPosition.RIGHT}>
            <Text>Result1</Text>
          </NewTip>
        </View>
        <View style={styles.container}>
          <NewTip position={ETipPosition.LEFT}>
            <Text>Result2</Text>
          </NewTip>
        </View>
      </View>
    </NewTipProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
