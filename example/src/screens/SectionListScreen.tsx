import React, {useCallback} from 'react'
import type {FC} from 'react'
import {StyleSheet, Text, SectionList, View} from 'react-native'
import {SectionListCard} from './components'

const MOCK_DATA = [
  {data: Array.from({length: 5}, (_, i) => i)},
  {data: Array.from({length: 5}, (_, i) => 10 * i)},
]

export const SectionListScreen: FC = () => {
  const onOptionPress = useCallback(() => {
    console.log('Option was pressed')
  }, [])

  const renderItem = () => (
    <SectionListCard
      options={[
        {label: 'Normal Option', onPress: onOptionPress},
        {label: 'Disabled Option', onPress: onOptionPress, isDisabled: true},
        {
          label: 'Destructive Option',
          onPress: onOptionPress,
          isDestructive: true,
        },
      ]}
    />
  )

  return (
    <View style={styles.screen}>
      <SectionList
        sections={MOCK_DATA}
        renderItem={renderItem}
        renderSectionHeader={() => <Text>Title</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  input: {marginBottom: 10, minWidth: 75},
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
