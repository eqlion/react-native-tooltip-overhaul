import React, {useCallback} from 'react'
import type {FC} from 'react'
import {StyleSheet, Text, SectionList, View} from 'react-native'
import {SectionListCard} from './components'

const MOCK_DATA = [
  {data: Array.from({length: 10}, (_, i) => i)},
  {data: Array.from({length: 10}, (_, i) => 10 * i)},
]

const keyExtractor = (item: number) => String(item)

export const SectionListScreen: FC = () => {
  const onOptionPress = useCallback(() => {
    console.log('Option was pressed')
  }, [])

  const renderItem = useCallback(
    () => (
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
    ),
    [onOptionPress],
  )

  return (
    <View style={styles.screen}>
      <SectionList
        sections={MOCK_DATA}
        renderItem={renderItem}
        renderSectionHeader={() => <Text>Title</Text>}
        style={styles.list}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1},
  list: {padding: 20},
})
