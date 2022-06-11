import React, {useCallback, useRef, useState} from 'react'
import type {FC} from 'react'
import {
  Animated,
  Button,
  Dimensions,
  FlatListProps,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {ETipPosition, Tip, TipMethods} from 'react-native-tooltip-overhaul'
import {FlatList} from 'react-native-gesture-handler'
import {DropdownHeader, Separator} from './components'

const DATA = Array.from({length: 10}, (_, i) => `Option ${i + 1}`)
const NUM_TO_SHOW = 5
const ITEM_HEIGHT = 40
const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth
const SCREEN_WIDTH = Dimensions.get('window').width
const OVERLAY_OPACITY = 0

const getItemLayout: FlatListProps<string>['getItemLayout'] = (_, index) => ({
  length: ITEM_HEIGHT + SEPARATOR_HEIGHT,
  offset: index * (ITEM_HEIGHT + SEPARATOR_HEIGHT),
  index,
})

export const DropdownScreen: FC = () => {
  const animationNode = useRef(new Animated.Value(0)).current
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const selectedItem = selectedValue === null ? undefined : DATA[selectedValue]
  const tipRef = useRef<TipMethods>(null)
  const listRef = useRef<FlatList>(null)

  const handleShow = useCallback(() => {
    Animated.timing(animationNode, {
      duration: 300,
      useNativeDriver: true,
      toValue: 1,
    }).start()
  }, [animationNode])

  const handleClose = useCallback(() => {
    Animated.timing(animationNode, {
      duration: 300,
      useNativeDriver: true,
      toValue: 0,
    }).start()
  }, [animationNode])

  const handleSelectValue = useCallback((value: number) => {
    setSelectedValue(value)
    tipRef.current?.closeTip()
  }, [])

  const handleResetSelected = useCallback(() => {
    setSelectedValue(null)
  }, [])

  const renderItem: ListRenderItem<string> = useCallback(
    ({item, index}) => (
      <Pressable onPress={() => handleSelectValue(index)}>
        <View
          style={[
            styles.listItemContainer,
            selectedValue === index && styles.selectedListItemContainer,
          ]}>
          <Text>{item}</Text>
        </View>
      </Pressable>
    ),
    [handleSelectValue, selectedValue],
  )

  const renderTip = useCallback(() => {
    return (
      <FlatList
        data={DATA}
        renderItem={renderItem}
        style={styles.list}
        ItemSeparatorComponent={Separator}
        getItemLayout={getItemLayout}
        ref={listRef}
      />
    )
  }, [renderItem])

  return (
    <View style={styles.screen}>
      <Tip
        ref={tipRef}
        renderTip={renderTip}
        position={ETipPosition.BOTTOM}
        overlayOpacity={OVERLAY_OPACITY}
        onShow={handleShow}
        onClose={handleClose}>
        <DropdownHeader
          animationNode={animationNode}
          selectedItem={selectedItem}
        />
      </Tip>
      <View style={styles.button}>
        <Button title="Reset selected" onPress={handleResetSelected} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1, paddingTop: 32},
  listItemContainer: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  selectedListItemContainer: {
    backgroundColor: '#afa',
  },
  list: {
    maxHeight: ITEM_HEIGHT * NUM_TO_SHOW,
    backgroundColor: '#fff',
    width: SCREEN_WIDTH - 8 * 2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  button: {
    marginTop: 64,
  },
})
