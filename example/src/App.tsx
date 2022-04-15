import * as React from 'react'

import {StyleSheet, View, Text} from 'react-native'
import TipProvider, {Tip, NewTip} from 'react-native-tooltip-overhaul'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
          <View style={{flex: 1, backgroundColor: 'red', opacity: 0.2}} />
          <View style={{flex: 1, backgroundColor: 'green', opacity: 0.2}} />
        </View>
        <NewTip>
          <Text>Result</Text>
        </NewTip>
      </View>
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
