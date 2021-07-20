import { DIPPRDensityProps } from '../interfaces/utils';

export const DIPPRDensityDictionary: Record<string, DIPPRDensityProps> = {
  Acetaldehyde: {
    name: 'Acetaldehyde',
    formula: 'C2H4O',
    CAS: '75-07-0',
    molecularWeight: 44.05256,
    C1: 1.711365,
    C2: 0.26355,
    C3: 466,
    C4: 0.28571,
    minimumTemperature: 149.78,
    maximumTemperature: 466,
    densityAtMinimumTemperature: 21.423,
    densityAtMaximumTemperature: 6.4935,
  },
} as const;

export function calculateDIPPRDensity(
  compound: string,
  temperature: number
): number {
  const densityProps: DIPPRDensityProps | undefined =
    DIPPRDensityDictionary[compound];
  let density = NaN;
  if (
    densityProps !== undefined &&
    temperature >= densityProps.minimumTemperature &&
    temperature <= densityProps.maximumTemperature
  ) {
    const exponent =
      1 + Math.pow(1 - temperature / densityProps.C3, densityProps.C4);
    density = densityProps.C1 / Math.pow(densityProps.C2, exponent);
  }
  return density;
}
