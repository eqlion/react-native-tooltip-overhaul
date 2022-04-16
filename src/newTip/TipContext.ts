import {createContext} from 'react'
import type {ITipContext} from './types'

export const TipContext = createContext<ITipContext | null>(null)
