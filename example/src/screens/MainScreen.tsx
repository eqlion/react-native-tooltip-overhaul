import React, {useCallback} from 'react'
import type {FC} from 'react'
import {Button, StyleSheet, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import type {StackNavigationProp} from '@react-navigation/stack'
import {EScreens, ParamList} from '../types'

type MainScreenNavigationProp = StackNavigationProp<ParamList, EScreens.Main>

export const MainScreen: FC = () => {
  const navigation = useNavigation<MainScreenNavigationProp>()

  const navigateToEdges = useCallback(() => {
    navigation.navigate(EScreens.Edges)
  }, [navigation])

  const navigateToImperative = useCallback(() => {
    navigation.navigate(EScreens.Imperative)
  }, [navigation])

  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button onPress={navigateToEdges} title="Go to Edges example" />
      </View>
      <Button onPress={navigateToImperative} title="Go to Imperative example" />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  button: {
    marginBottom: 10,
  },
})
