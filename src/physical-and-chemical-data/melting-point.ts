import { Measure, MeasureRange } from './utils';

export const MeltingPointNature = {
  Decomposes: 'decomposes',
  Sublimes: 'sublimes',
  Explodes: 'explodes',
  Melts: 'melts',
  LoosesWater: 'looses-water',
} as const;
export type MeltingPointNature = typeof MeltingPointNature[keyof typeof MeltingPointNature];

export interface MeltingPoint {
  temperature: Measure | MeasureRange;
  pressure: Measure | MeasureRange;
  nature: MeltingPointNature;
  waterMoles?: number;
}
