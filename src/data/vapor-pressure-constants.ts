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
    C2: -12376,
    C3: -14.589,
    C4: 5.0824e-6,
    C5: 2,
    minimumTemperature: 353.33,
    maximumTemperature: 761,
    pressureAtMinimumTemperature: 3.36e2,
    pressureAtMaximumTemperature: 6.569e6,
  },

  AceticAcid: {
    name: 'Acetic acid',
    formula: 'C2H4O2',
    CAS: '64-19-7',
    C1: 53.27,
    C2: -6304.5,
    C3: -4.2985,
    C4: 8.89e-18,
    C5: 6,
    minimumTemperature: 289.81,
    maximumTemperature: 591.95,
    pressureAtMinimumTemperature: 1.28e3,
    pressureAtMaximumTemperature: 5.739e6,
  },

  AceticAnhydride: {
    name: 'Acetic anhydride',
    formula: 'C4H6O3',
    CAS: '108-24-7',
    C1: 67.1818,
    C2: -7463.47,
    C3: -6.24388,
    C4: 6.86e-18,
    C5: 6,
    minimumTemperature: 200.15,
    maximumTemperature: 606,
    pressureAtMinimumTemperature: 4.1e-2,
    pressureAtMaximumTemperature: 4.0e6,
  },

  Acetone: {
    name: 'Acetone',
    formula: 'C3H6O',
    CAS: '67-64-1',
    C1: 69.006,
    C2: -5599.6,
    C3: -7.0985,
    C4: 6.2237e-6,
    C5: 2,
    minimumTemperature: 178.45,
    maximumTemperature: 508.2,
    pressureAtMinimumTemperature: 2.79,
    pressureAtMaximumTemperature: 4.709e6,
  },

  Acetonitrile: {
    name: 'Acetonitrile',
    formula: 'C2H3N',
    CAS: '75-05-8',
    C1: 46.735,
    C2: -5126.18,
    C3: -3.54064,
    C4: 1.4e-17,
    C5: 6,
    minimumTemperature: 229.32,
    maximumTemperature: 545.5,
    pressureAtMinimumTemperature: 1.71e2,
    pressureAtMaximumTemperature: 4.85e6,
  },

  Acetylene: {
    name: 'Acetylene',
    formula: 'C2H2',
    CAS: '74-86-2',
    C1: 39.63,
    C2: -2552.2,
    C3: -2.78,
    C4: 2.39e-16,
    C5: 6,
    minimumTemperature: 192.4,
    maximumTemperature: 308.3,
    pressureAtMinimumTemperature: 1.27e5,
    pressureAtMaximumTemperature: 6.106e6,
  },

  Acrolein: {
    name: 'Acrolein',
    formula: 'C3H4O',
    CAS: '107-02-8',
    C1: 138.4,
    C2: -7122.7,
    C3: -19.638,
    C4: 0.026447,
    C5: 1,
    minimumTemperature: 185.45,
    maximumTemperature: 506,
    pressureAtMinimumTemperature: 1.03e1,
    pressureAtMaximumTemperature: 5.02e6,
  },

  Acrylicacid: {
    name: 'AcrylicAcid',
    formula: 'C3H4O2',
    CAS: '79-10-7',
    C1: 46.745,
    C2: -6587.1,
    C3: -3.2208,
    C4: 5.2253e-7,
    C5: 2,
    minimumTemperature: 286.15,
    maximumTemperature: 615,
    pressureAtMinimumTemperature: 2.57e2,
    pressureAtMaximumTemperature: 5.661e6,
  },

  Acrylonitrile: {
    name: 'Acrylonitrile',
    formula: 'C3H3N',
    CAS: '107-13-1',
    C1: 57.3157,
    C2: -5662.2,
    C3: -5.06221,
    C4: 1.51e-17,
    C5: 6,
    minimumTemperature: 189.63,
    maximumTemperature: 540,
    pressureAtMinimumTemperature: 2.47,
    pressureAtMaximumTemperature: 4.66e6,
  },

  Air: {
    name: 'Air',
    formula: 'Mixture',
    CAS: '132259-10-0',
    C1: 21.662,
    C2: -692.39,
    C3: -0.39208,
    C4: 0.0047574,
    C5: 1,
    minimumTemperature: 59.15,
    maximumTemperature: 132.45,
    pressureAtMinimumTemperature: 5.64e3,
    pressureAtMaximumTemperature: 3.793e6,
  },

  Ammonia: {
    name: 'Ammonia',
    formula: 'NH3',
    CAS: '7664-41-7',
    C1: 90.483,
    C2: -4669.7,
    C3: -11.607,
    C4: 0.017194,
    C5: 1,
    minimumTemperature: 195.41,
    maximumTemperature: 405.65,
    pressureAtMinimumTemperature: 6.11e3,
    pressureAtMaximumTemperature: 1.13e7,
  },

  Anisole: {
    name: 'Anisole',
    formula: 'C7H8O',
    CAS: '100-66-3',
    C1: 128.06,
    C2: -9307.7,
    C3: -16.693,
    C4: 0.014919,
    C5: 1,
    minimumTemperature: 235.65,
    maximumTemperature: 645.6,
    pressureAtMinimumTemperature: 2.45,
    pressureAtMaximumTemperature: 4.273e6,
  },

  Argon: {
    name: 'Argon',
    formula: 'Ar',
    CAS: '7440-37-1',
    C1: 42.127,
    C2: -1093.1,
    C3: -4.1425,
    C4: 0.000057254,
    C5: 2,
    minimumTemperature: 83.78,
    maximumTemperature: 150.86,
    pressureAtMinimumTemperature: 6.87e4,
    pressureAtMaximumTemperature: 4.896e6,
  },

  Benzamide: {
    name: 'Banzamide',
    formula: 'C7H7NO',
    CAS: '55-21-0',
    C1: 85.474,
    C2: -11932,
    C3: -8.3348,
    C4: 1.29e-18,
    C5: 6,
    minimumTemperature: 403,
    maximumTemperature: 824,
    pressureAtMinimumTemperature: 3.55e2,
    pressureAtMaximumTemperature: 5.047e6,
  },

  Benzene: {
    name: 'Benzene',
    formula: 'C6H6',
    CAS: '71-43-2',
    C1: 83.107,
    C2: -6486.2,
    C3: -9.2194,
    C4: 6.9844e-6,
    C5: 2,
    minimumTemperature: 278.68,
    maximumTemperature: 562.05,
    pressureAtMinimumTemperature: 4.76e3,
    pressureAtMaximumTemperature: 4.875e6,
  },

  Benzenethiol: {
    name: 'Benzenethiol',
    formula: 'C6H6S',
    CAS: '108-98-5',
    C1: 77.765,
    C2: -8455.1,
    C3: -7.7404,
    C4: 4.31e-18,
    C5: 6,
    minimumTemperature: 258.27,
    maximumTemperature: 689,
    pressureAtMinimumTemperature: 7.68,
    pressureAtMaximumTemperature: 4.728e6,
  },

  BenzoicAcid: {
    name: 'Benzoic acid',
    formula: 'C7H6O2',
    CAS: '65-85-0',
    C1: 88.513,
    C2: -11829,
    C3: -8.6826,
    C4: 2.32e-19,
    C5: 6,
    minimumTemperature: 395.45,
    maximumTemperature: 751,
    pressureAtMinimumTemperature: 7.96e2,
    pressureAtMaximumTemperature: 4.469e6,
  },

  Benzonitrile: {
    name: 'Benzonitrile',
    formula: 'C7H5N',
    CAS: '100-47-0',
    C1: 55.0403,
    C2: -7363.83,
    C3: -4.50612,
    C4: 1.95e-18,
    C5: 6,
    minimumTemperature: 260.28,
    maximumTemperature: 702.3,
    pressureAtMinimumTemperature: 5.4,
    pressureAtMaximumTemperature: 4.215e6,
  },

  Benzophenone: {
    name: 'Benzophenone',
    formula: 'C13H10O',
    CAS: '119-61-9',
    C1: 88.404,
    C2: -11769,
    C3: -8.9014,
    C4: 1.93e-18,
    C5: 6,
    minimumTemperature: 321.35,
    maximumTemperature: 830,
    pressureAtMinimumTemperature: 1.49,
    pressureAtMaximumTemperature: 3.357e6,
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
