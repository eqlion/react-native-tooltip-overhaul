import * as React from 'react'

import {StyleSheet, View, Text} from 'react-native'
import TipProvider, {Tip} from 'react-native-tooltip-overhaul'

export default function App() {
  return (
    <View style={styles.container}>
      <Tip title="Tip" body="asdasd">
        <Text>Result</Text>
      </Tip>
      <TipProvider />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})