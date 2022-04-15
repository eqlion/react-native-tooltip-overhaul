import React from 'react'
import type {FC, PropsWithChildren} from 'react'
import {TipContext} from './TipContext'

type Props = {}

export const Component: FC<PropsWithChildren<Props>> = ({children}) => {
  return <TipContext.Provider value={{}}>{children}</TipContext.Provider>
}
