import React, {VFC} from 'react'
import {StyleSheet, View} from 'react-native'

export const Separator: VFC = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#000',
    marginHorizontal: 8,
  },
})
