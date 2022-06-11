import {createStackNavigator} from '@react-navigation/stack'
import type {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {EScreens, ParamList} from './types'
import {
  EdgesScreen,
  ImperativeScreen,
  MainScreen,
  OffsetScreen,
  OpacityScreen,
  SectionListScreen,
  CallbackScreen,
} from './screens'

const Stack = createStackNavigator<ParamList>()

export const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={EScreens.Main} component={MainScreen} />
        <Stack.Screen name={EScreens.Edges} component={EdgesScreen} />
        <Stack.Screen name={EScreens.Imperative} component={ImperativeScreen} />
        <Stack.Screen name={EScreens.Offsets} component={OffsetScreen} />
        <Stack.Screen name={EScreens.Opacity} component={OpacityScreen} />
        <Stack.Screen
          name={EScreens.SectionList}
          component={SectionListScreen}
        />
        <Stack.Screen name={EScreens.Callback} component={CallbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
