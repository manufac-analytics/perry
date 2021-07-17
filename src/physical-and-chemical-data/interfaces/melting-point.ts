import { Measure, MeasureRange } from './utils';

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
