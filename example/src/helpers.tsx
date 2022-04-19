import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export const renderTip = () => (
  <View style={styles.tipContainer}>
    <Text style={styles.tipText}>Tip body example</Text>
  </View>
)

const styles = StyleSheet.create({
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
