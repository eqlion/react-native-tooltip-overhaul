import React, {useCallback, useLayoutEffect, useState} from 'react'
import type {FC} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import type {StackNavigationProp} from '@react-navigation/stack'
import type {EScreens, ParamList} from '../types'
import {useNavigation} from '@react-navigation/native'
import {ETipPosition, Tip} from 'react-native-tooltip-overhaul'
import {renderTip} from '../helpers'

type EdgesScreenNavigationProp = StackNavigationProp<ParamList, EScreens.Edges>

const NEXT_POSITION_MAP = {
  [ETipPosition.AUTO]: ETipPosition.BOTTOM,
  [ETipPosition.BOTTOM]: ETipPosition.LEFT,
  [ETipPosition.LEFT]: ETipPosition.RIGHT,
  [ETipPosition.RIGHT]: ETipPosition.TOP,
  [ETipPosition.TOP]: ETipPosition.AUTO,
}

export const EdgesScreen: FC = () => {
  const [currentPosition, setCurrentPosition] = useState(ETipPosition.AUTO)

  const cyclePosition = useCallback(() => {
    setCurrentPosition((position) => NEXT_POSITION_MAP[position])
  }, [])

  const navigation = useNavigation<EdgesScreenNavigationProp>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Change position" onPress={cyclePosition} />
      ),
    })
  }, [cyclePosition, navigation])

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <View style={[styles.topContainer, styles.leftContainer]}>
          <Tip position={currentPosition} renderTip={renderTip}>
            <Text style={styles.tippedText}>Top left</Text>
          </Tip>
        </View>
        <View style={[styles.topContainer, styles.centerContainer]}>
          <Tip position={currentPosition} renderTip={renderTip}>
            <Text style={styles.tippedText}>Top center</Text>
          </Tip>
        </View>
        <View style={[styles.topContainer, styles.rightContainer]}>
          <Tip position={currentPosition} renderTip={renderTip}>
            <Text style={styles.tippedText}>Top right</Text>
          </Tip>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <Tip position={currentPosition} renderTip={renderTip}>
          <Text style={styles.tippedText}>Center</Text>
        </Tip>
        <Text>
          Current Tip position is: {currentPosition}. Press on green text to
          show the tip
        </Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.bottomContainer, styles.leftContainer]}>
          <Tip position={currentPosition} renderTip={renderTip}>
            <Text style={styles.tippedText}>Bottom left</Text>
          </Tip>
        </View>
        <View style={[styles.bottomContainer, styles.centerContainer]}>
          <Tip position={currentPosition} renderTip={renderTip}>
            <Text style={styles.tippedText}>Bottom center</Text>
          </Tip>
        </View>
        <View style={[styles.bottomContainer, styles.rightContainer]}>
          <Tip position={currentPosition} renderTip={renderTip}>
            <Text style={styles.tippedText}>Bottom right</Text>
          </Tip>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1, padding: 10},
  button: {
    marginBottom: 10,
  },
  tipContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  tipText: {color: '#000'},

  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  leftContainer: {
    alignItems: 'flex-start',
  },
  centerContainer: {
    alignItems: 'center',
  },
  rightContainer: {alignItems: 'flex-end'},
  tippedText: {
    color: 'green',
  },
  row: {flex: 1, flexDirection: 'row'},
  middleContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
