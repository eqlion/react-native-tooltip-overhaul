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

  const navigateToOffsets = useCallback(() => {
    navigation.navigate(EScreens.Offsets)
  }, [navigation])

  const navigateToOpacity = useCallback(() => {
    navigation.navigate(EScreens.Opacity)
  }, [navigation])

  const navigateToSectionList = useCallback(() => {
    navigation.navigate(EScreens.SectionList)
  }, [navigation])

  const navigateToCallback = useCallback(() => {
    navigation.navigate(EScreens.Callback)
  }, [navigation])

  const navigateToDropdown = useCallback(() => {
    navigation.navigate(EScreens.Dropdown)
  }, [navigation])

  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button onPress={navigateToEdges} title="Go to Edges example" />
      </View>
      <View style={styles.button}>
        <Button
          onPress={navigateToImperative}
          title="Go to Imperative example"
        />
      </View>
      <View style={styles.button}>
        <Button onPress={navigateToOffsets} title="Go to Offsets example" />
      </View>
      <View style={styles.button}>
        <Button onPress={navigateToOpacity} title="Go to Opacity example" />
      </View>
      <View style={styles.button}>
        <Button
          onPress={navigateToSectionList}
          title="Go to SectionList example"
        />
      </View>
      <View style={styles.button}>
        <Button onPress={navigateToCallback} title="Go to Callback example" />
      </View>
      <View style={styles.button}>
        <Button onPress={navigateToDropdown} title="Go to Dropdown example" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  button: {
    marginBottom: 10,
  },
})
