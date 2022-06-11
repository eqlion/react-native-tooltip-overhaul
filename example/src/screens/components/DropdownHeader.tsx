import React, {VFC} from 'react'
import {StyleSheet, Text, Animated} from 'react-native'

type Props = {
  selectedItem?: string
  animationNode: Animated.Value
}

const TRIANGLE_SIZE = 10

export const DropdownHeader: VFC<Props> = ({animationNode, selectedItem}) => {
  const borderRadius = animationNode.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 0],
  })

  return (
    <Animated.View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        },
      ]}>
      <Text style={!selectedItem && styles.placeholder}>
        {selectedItem ?? 'Tap here to open and select value'}
      </Text>
      <Animated.View
        style={[
          styles.triangle,
          {
            transform: [
              {
                rotate: animationNode.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['180deg', '0deg'],
                }),
              },
            ],
          },
        ]}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    marginHorizontal: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 48,
  },
  placeholder: {opacity: 0.5},
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: TRIANGLE_SIZE / 2,
    borderRightWidth: TRIANGLE_SIZE / 2,
    borderBottomWidth: TRIANGLE_SIZE,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    borderTopColor: 'black',
  },
})
