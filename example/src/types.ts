export enum EScreens {
  Main = 'Main',
  Edges = 'Edges',
  Imperative = 'Imperative',
}

export type ParamList = {
  [EScreens.Main]: undefined
  [EScreens.Imperative]: undefined
  [EScreens.Edges]: undefined
}
