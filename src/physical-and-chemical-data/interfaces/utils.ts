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
  DeliquescentCrystal: 'deliquescent-crystal',
  CrystallinePowder: 'crystalline-powder',
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
  units?: string;
  error?: number;
  greaterOrLess?: 'greater' | 'less' | 'approximate';
}

export interface MeasureRange {
  min: Measure;
  max: Measure;
  includeMin?: boolean;
  includeMax?: boolean;
}

export interface INCHIProps {
  inchiString: string;
  inchiKey: string;
  molecularWeight: number;
}

/**
 * Vapor pressure Ps is calculated by Ps = exp(C1 + C2/T + C3 ln(T) + C4T C5),
 * where Ps is in Pa and T is in K.
 */
export interface DIPPRVaporPressureProps {
  name: string;
  formula: string;
  CAS: string;
  C1: number;
  C2: number;
  C3: number;
  C4: number;
  C5: number;
  minimumTemperature: number;
  maximumTemperature: number;
  pressureAtMinimumTemperature: number;
  pressureAtMaximumTemperature: number;
}

export interface DIPPRDensityProps {
  name: string;
  formula: string;
  CAS: string;
  C1: number;
  C2: number;
  C3: number;
  C4: number;
  C5?: number;
  C6?: number;
  C7?: number;
  minimumTemperature: number;
  maximumTemperature: number;
  densityAtMinimumTemperature: number;
  densityAtMaximumTemperature: number;
}

export const SpecificGravityReference = {
  Water: 'water',
  Air: 'air',
  Hydrogen: 'hydrogen',
} as const;
export type SpecificGravityReference = typeof SpecificGravityReference[keyof typeof SpecificGravityReference];

export interface SpecificGravity {
  value: number;
  substanceTemperature?: Measure;
  reference: SpecificGravityReference;
  referenceTemperature?: Measure;
}

export const SolubilityNature = {
  Insoluble: 'insoluble',
  Soluble: 'soluble',
  Decomposes: 'decomposes',
  SolubleDecomposes: 'soluble-decomposes',
  Forms: 'forms',
} as const;
export type SolubilityNature = typeof SolubilityNature[keyof typeof SolubilityNature];

/**
 * Given in parts by weight per 100 parts by weight of the solvent.
 * - Example: 10 g of the solute is soluble in 100 g of the solvent at 20 deg. C.
 * ```ts
 * {
 *    value: 10;
 *    temperature: {value: 20, units: "C"};
 *    gas: false;
 * }
 * ```
 * - Example: 5 cc the solute is soluble in 100 g of the solvent at 40 deg. C.
 * ```ts
 * {
 *    value: 5;
 *    temperature: {value: 20, units: "C"};
 *    gas: true;
 * }
 * ```
 */
export interface QuantitativeSolubility {
  value: number | string;
  temperature?: Measure;
  gas: boolean;
}

export interface QualitativeSolubility extends Qualitative<SolubilityNature> {
  decomposesTo?: string;
  formsEntity?: string;
}

export interface SolubilitySheet {
  coldWater?: QualitativeSolubility | QuantitativeSolubility;
  hotWater?: QualitativeSolubility | QuantitativeSolubility;
  [key: string]: QualitativeSolubility | QuantitativeSolubility | undefined;
}

export interface TemperaturePressureCombo {
  temperature: Measure | MeasureRange;
  pressure: Measure | MeasureRange;
}

export const MeltingNature = {
  Decomposes: 'decomposes',
  Sublimes: 'sublimes',
  Explodes: 'explodes',
  Melts: 'melts',
  Looses: 'looses',
  Transitions: 'transitions',
  Deliquesces: 'deliquesces',
} as const;
export type MeltingNature = typeof MeltingNature[keyof typeof MeltingNature];

export interface MeltingOutcome extends TemperaturePressureCombo {
  nature: MeltingNature;
  loosesMoles?: number;
  loosesEntity?: string;
  transitionsTo?: string;
  sublimesIn?: string;
}
