import { DIPPRVaporPressureProps } from '../interfaces/utils';

export const DIPPRVaporPressureDictionary: Record<
  string,
  DIPPRVaporPressureProps
> = {
  Acetaldehyde: {
    name: 'Acetaldehyde',
    formula: 'C2H4O',
    CAS: '75-07-0',
    C1: 52.9107,
    C2: -4643.14,
    C3: -4.50683,
    C4: 2.7e-17,
    C5: 6,
    minimumTemperature: 149.78,
    maximumTemperature: 466,
    pressureAtMinimumTemperature: 5.15e-1,
    pressureAtMaximumTemperature: 5.57e6,
  },

  Acetalmide: {
    name: 'Acetalmide',
    formula: 'C2H5NO',
    CAS: '60-35-5',
    C1: 125.81,
    C2: -12.376,
    C3: -14.589,
    C4: 5.0824e-6,
    C5: 2,
    minimumTemperature: 35.3,
    maximumTemperature: 3.36e2,
    pressureAtMinimumTemperature: 761,
    pressureAtMaximumTemperature: 6.569e6,
  },

  AceticAcid: {
    name: 'Acetic acid',
    formula: 'C2H4O2',
    CAS: '64-19-7',
    C1: 5.27,
    C2: -604.5,
    C3: -4.298,
    C4: 8.89e-18,
    C5: 6,
    minimumTemperature: 289.81,
    maximumTemperature: 1.28,
    pressureAtMinimumTemperature: 591.95,
    pressureAtMaximumTemperature: 5.739e6,
  },
} as const;

export function calculateDIPPRVaporPressure(
  compound: string,
  temperature: number
): number {
  const vaporPressureProps: DIPPRVaporPressureProps | undefined =
    DIPPRVaporPressureDictionary[compound];
  let vaporPressure = NaN;
  if (
    vaporPressureProps !== undefined &&
    temperature >= vaporPressureProps.minimumTemperature &&
    temperature <= vaporPressureProps.maximumTemperature
  ) {
    vaporPressure = Math.exp(
      vaporPressureProps.C1 +
        vaporPressureProps.C2 / temperature +
        vaporPressureProps.C3 * Math.log(temperature) +
        vaporPressureProps.C4 * Math.pow(temperature, vaporPressureProps.C5)
    );
  }
  return vaporPressure;
}
