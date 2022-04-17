import {useContext} from 'react'
import {TipContext} from '../contexts'

export const useInternalTip = () => {
  const context = useContext(TipContext)

  if (context === null) {
    throw "You forgot to wrap the app with 'TipProvider!'"
  }

  return context
}
