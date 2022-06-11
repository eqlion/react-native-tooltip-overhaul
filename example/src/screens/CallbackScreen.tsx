import React, {useCallback} from 'react'
import type {FC} from 'react'
import {Alert, StyleSheet, Text, View} from 'react-native'
import {Tip} from 'react-native-tooltip-overhaul'
import {renderTip} from '../helpers'

export const CallbackScreen: FC = () => {
  const onShow = useCallback(() => {
    Alert.alert('Tip is Shown', 'onShow')
  }, [])

  const onClose = useCallback(() => {
    Alert.alert('Tip is Closed', 'onClose')
  }, [])

  return (
    <View style={styles.screen}>
      <Tip renderTip={renderTip} onShow={onShow} onClose={onClose}>
        <Text>Press to show the tip</Text>
      </Tip>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  input: {marginBottom: 10, minWidth: 75},
})
