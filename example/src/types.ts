export enum EScreens {
  Main = 'Main',
  Edges = 'Edges',
  Imperative = 'Imperative',
  Offsets = 'Offsets',
  Opacity = 'Opacity',
}

export type ParamList = {
  [EScreens.Main]: undefined
  [EScreens.Imperative]: undefined
  [EScreens.Edges]: undefined
  [EScreens.Offsets]: undefined
  [EScreens.Opacity]: undefined
}
