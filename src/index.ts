import TipProvider from './TipProvider'
import Tip from './Tip'
import TipManager from './TipManager'
import type {TipProps} from './types'

function closeTip() {
  TipManager.closeTip()
}

function showTip(tipId: string, timeout?: number, props?: Partial<TipProps>) {
  TipManager.showTip(tipId, timeout, props)
}

function showTipTour(steps: []) {
  TipManager.showTipTour(steps)
}

export default TipProvider
export {Tip, closeTip, showTip, showTipTour}
export {Tip as NewTip} from './newTip/Tip'
export {TipProvider as NewTipProvider} from './newTip/TipProvider'
export {ETipPosition} from './newTip/types'
