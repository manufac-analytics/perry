import { Measure, MeasureRange } from './utils';

export interface TemperaturePressureCombo {
  temperature: Measure | MeasureRange;
  pressure: Measure | MeasureRange;
}

export const MeltingOutcomes = {
  Decomposes: 'decomposes',
  Sublimes: 'sublimes',
  Explodes: 'explodes',
  Melts: 'melts',
  LoosesWater: 'looses-water',
  Transitions: 'transitions',
  Deliquesces: 'deliquesces',
} as const;
export type MeltingOutcomes = typeof MeltingOutcomes[keyof typeof MeltingOutcomes];

export interface MeltingPoint extends TemperaturePressureCombo {
  nature: MeltingOutcomes;
  loosesWaterMoles?: number;
  transitionsTo?: string;
  sublimesIn?: string;
}
