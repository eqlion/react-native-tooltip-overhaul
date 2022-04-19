import React from 'react'
import type {FC} from 'react'
import {Navigator} from './Navigator'
import {TipProvider} from 'react-native-tooltip-overhaul'

const App: FC = () => {
  return (
    <TipProvider>
      <Navigator />
    </TipProvider>
  )
}

export default App
