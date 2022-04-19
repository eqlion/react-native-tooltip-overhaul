import React, {useState} from 'react'
import type {FC} from 'react'
import {StyleSheet, View, TextInput, Text} from 'react-native'
import {Tip} from 'react-native-tooltip-overhaul'
import {renderTip} from '../helpers'

export const OffsetScreen: FC = () => {
  const [verticalOffset, setVerticalOffset] = useState('')
  const [horizontalOffset, setHorizontalOffset] = useState('')
  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <TextInput
          keyboardType="number-pad"
          value={verticalOffset}
          onChangeText={setVerticalOffset}
          placeholder="Vertical tip offset"
        />
        <TextInput
          keyboardType="number-pad"
          value={horizontalOffset}
          onChangeText={setHorizontalOffset}
          placeholder="Horizontal tip offset"
        />
      </View>
      <Tip
        renderTip={renderTip}
        offsets={{
          horizontal: Number(horizontalOffset),
          vertical: Number(verticalOffset),
        }}>
        <Text>Press to show the tip</Text>
      </Tip>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
