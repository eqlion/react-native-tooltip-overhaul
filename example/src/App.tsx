import React from 'react'
import type {FC} from 'react'
import {Navigator} from './Navigator'
import {TipProvider} from 'react-native-tooltip-overhaul'

const App: FC = () => {
  // const renderItem: ListRenderItem<number> = useCallback(
  //   ({index}) => {
  //     if (index % 3 === 0) {
  //       return (
  //         <Tip
  //           renderTip={renderTip}
  //           style={{margin: 10, alignSelf: 'flex-start'}}>
  //           <Text>Yoooo</Text>
  //         </Tip>
  //       )
  //     }
  //     return (
  //       <View
  //         style={{
  //           width: 50,
  //           height: 50,
  //           margin: 10,
  //           backgroundColor: index % 2 ? 'red' : 'green',
  //         }}></View>
  //     )
  //   },
  //   [renderTip],
  // )

  return (
    <TipProvider>
      <Navigator />
    </TipProvider>
  )
}

export default App
