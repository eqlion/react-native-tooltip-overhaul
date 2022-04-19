import React, {useState} from 'react'
import type {FC} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {Tip} from 'react-native-tooltip-overhaul'
import {renderTip} from '../helpers'

export const OpacityScreen: FC = () => {
  const [opacity, setOpacity] = useState('')
  return (
    <View style={styles.screen}>
      <TextInput
        value={opacity}
        onChangeText={setOpacity}
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Overlay opacity (<= 1, >= 0)"
      />
      <Tip renderTip={renderTip} overlayOpacity={Number(opacity)}>
        <Text>Press to show the tip</Text>
      </Tip>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  input: {marginBottom: 10, minWidth: 75},
})
