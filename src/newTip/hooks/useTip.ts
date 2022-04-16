import {useContext} from 'react'
import {TipContext} from '../TipContext'

export const useTip = () => {
  const context = useContext(TipContext)

  if (context === null) {
    throw "You forgot to wrap the app with 'TipProvider!'"
  }

  return context
}
