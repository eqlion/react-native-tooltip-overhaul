import React, {useCallback, useRef, VFC} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Tip, TipMethods} from 'react-native-tooltip-overhaul'

type Option = {
  label: string
  onPress: () => void
  isDestructive?: boolean
  isDisabled?: boolean
}

type Props = {
  options: Option[]
}

export const SectionListCard: VFC<Props> = ({options}) => {
  const tipRef = useRef<TipMethods>(null)

  const onOptionPress = useCallback(
    (cb: () => void) => () => {
      cb()
      tipRef.current?.closeTip()
    },
    [],
  )

  const renderTip = useCallback(
    () => (
      <View style={styles.tipContainer}>
        {options.map((item, index) => (
          <TouchableOpacity
            disabled={item.isDisabled}
            key={item.label + index}
            style={styles.optionContainer}
            onPress={onOptionPress(item.onPress)}>
            <Text
              style={[
                styles.tipText,
                item.isDestructive && styles.tipTextDestructive,
                item.isDisabled && styles.tipTextDisabled,
              ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    ),
    [onOptionPress, options],
  )

  return (
    <View style={styles.cardContainer}>
      <Tip renderTip={renderTip} ref={tipRef} offsets={10}>
        <Text>Press to show the tip</Text>
      </Tip>
    </View>
  )
}

const styles = StyleSheet.create({
  tipContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  tipText: {color: '#000'},
  tipTextDestructive: {color: '#a00'},
  tipTextDisabled: {opacity: 0.5},
  cardContainer: {
    padding: 10,
    backgroundColor: '#aaa',
    marginBottom: 10,
  },
  optionContainer: {paddingVertical: 10},
})
