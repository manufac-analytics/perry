export const Adjectives = {
  Light: 'light',
  Dark: 'dark',
  Very: 'very',
  Slightly: 'slightly',
  Slowly: 'slowly',
  VerySlightly: 'very-slightly',
  Pseudo: 'pseudo',
  Stable: 'stable',
  Unstable: 'unstable',
  FairlyStable: 'fairly-stable',
} as const;
export type Adjectives = typeof Adjectives[keyof typeof Adjectives];

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

export const CrystallineForms = {
  Amorphous: 'amorphous',
  Anhydrous: 'anhydrous',
  Cubic: 'cubic',
  Crystalline: 'crystalline',
  Deliquescent: 'deliquescent',
  Hexagonal: 'hexagonal',
  Hygroscopic: 'hygroscopic',
  Monoclinic: 'monoclinic',
  Needles: 'needles',
  Octahedral: 'octahedral',
  Powder: 'powder',
  Plates: 'plates',
  Prismatic: 'prismatic',
  Rhombic: 'rhombic',
  Tetragonal: 'tetragonal',
  Triclinic: 'triclinic',
  Trigonal: 'trigonal',
  Liquid: 'liquid',
  Gas: 'gas',
  Porous: 'porous',
} as const;
export type CrystallineForms = typeof CrystallineForms[keyof typeof CrystallineForms];

export interface Qualitative<T> {
  nature: T;
  adjective?: Adjectives;
}

export interface Measure {
  value: number;
  units: string;
  error: number;
  greaterOrLess: 'greater' | 'less' | 'exact' | 'approximate';
}

export interface MeasureRange {
  min: Measure;
  max: Measure;
  includeMin: boolean;
  includeMax: boolean;
}
