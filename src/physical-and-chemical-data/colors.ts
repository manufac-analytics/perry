export const Colors = {
  Silver: 'silver',
  White: 'white',
  Colorless: 'colorless',
  Yellow: 'yellow',
  PaleYellow: 'pale-yellow',
  Green: 'green',
  Violet: 'violet',
  Black: 'black',
  Brown: 'brown',
  Orange: 'orange',
  Purple: 'purple',
  Rose: 'rose',
  Red: 'red',
  SteelGray: 'steel-gray',
  LeadGray: 'lead-gray',
  Blue: 'blue',
  BrickRed: 'brick-red',
  RoseRed: 'rose-red',
  ScarletRed: 'scarlet-red',
  BlueGreen: 'blue-green',
  RedYellow: 'red-yellow',
  GreenBlack: 'green-black',
  BlueBlack: 'blue-black',
} as const;
export type Colors = typeof Colors[keyof typeof Colors];
