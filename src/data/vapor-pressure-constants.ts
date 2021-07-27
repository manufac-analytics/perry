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

  // batch 1 and 2

  ButylMercaptan: {
    name: 'Butyl mercaptan',
    formula: 'C4H10S',
    CAS: '109-79-5',
    C1: 65.382,
    C2: -6262.4,
    C3: -6.2585,
    C4: 1.49e-17,
    C5: 6,
    minimumTemperature: 157.46,
    maximumTemperature: 570.1,
    pressureAtMinimumTemperature: 2.35e-3,
    pressureAtMaximumTemperature: 3.973e6,
  },

  secButylMercaptan: {
    name: 'sec-Butyl mercaptan',
    formula: 'C4H10S',
    CAS: '513-53-1',
    C1: 60.649,
    C2: -5785.9,
    C3: -5.6113,
    C4: 1.59e-17,
    C5: 6,
    minimumTemperature: 133.02,
    maximumTemperature: 554,
    pressureAtMinimumTemperature: 3.4e-5,
    pressureAtMaximumTemperature: 4.06e6,
  },

  IButyne: {
    name: 'sec-Butyl mercaptan',
    formula: 'C4H6',
    CAS: '107-00-6',
    C1: 77.004,
    C2: -5054.5,
    C3: -8.5665,
    C4: 0.000010161,
    C5: 2,
    minimumTemperature: 147.43,
    maximumTemperature: 440,
    pressureAtMinimumTemperature: 1.18,
    pressureAtMaximumTemperature: 4.599e6,
  },

  Butyraldehyde: {
    name: 'Butyraldehyde',
    formula: 'C4H8O',
    CAS: '123-78-8',
    C1: 51.648,
    C2: -5301.36,
    C3: -4.2559,
    C4: 1.14e-17,
    C5: 6,
    minimumTemperature: 176.8,
    maximumTemperature: 537.2,
    pressureAtMinimumTemperature: 6.97e1,
    pressureAtMaximumTemperature: 4.41e6,
  },

  ButyricAcid: {
    name: 'Butyric acid',
    formula: 'C4H8O2',
    CAS: '107-92-6',
    C1: 78.1171,
    C2: -8924.37,
    C3: -7.59929,
    C4: 7.39e-18,
    C5: 6,
    minimumTemperature: 267.95,
    maximumTemperature: 615.7,
    pressureAtMinimumTemperature: 1.03e1,
    pressureAtMaximumTemperature: 4.06e6,
  },

  Butyronitrile: {
    name: 'Butyronitrile',
    formula: 'C4H7N',
    CAS: '109-74-0',
    C1: 60.6576,
    C2: -6404.32,
    C3: -5.49286,
    C4: 1.13e-17,
    C5: 6,
    minimumTemperature: 161.3,
    maximumTemperature: 585.4,
    pressureAtMinimumTemperature: 9.41e4,
    pressureAtMaximumTemperature: 3.88e6,
  },

  CarbonDioxide: {
    name: 'Carbon dioxide',
    formula: 'C02',
    CAS: '124-38-9',
    C1: 47.0169,
    C2: -2839,
    C3: -3.86388,
    C4: 2.81e-16,
    C5: 6,
    minimumTemperature: 216.58,
    maximumTemperature: 304.21,
    pressureAtMinimumTemperature: 5.18e5,
    pressureAtMaximumTemperature: 7.384e6,
  },

  CarbonDisulphide: {
    name: 'Carbon disulphide',
    formula: 'CS2',
    CAS: '75-15-0.',
    C1: 67.114,
    C2: -4820.4,
    C3: -7.5303,
    C4: 0.0091695,
    C5: 1,
    minimumTemperature: 161.11,
    maximumTemperature: 552,
    pressureAtMinimumTemperature: 1.49,
    pressureAtMaximumTemperature: 8.041e6,
  },

  CarbonMonoxide: {
    name: 'Carbon monoxide',
    formula: 'CO',
    CAS: '630-08-0',
    C1: 45.698,
    C2: -1076.6,
    C3: -4.8814,
    C4: 0.000075673,
    C5: 2,
    minimumTemperature: 68.15,
    maximumTemperature: 132.92,
    pressureAtMinimumTemperature: 1.54e4,
    pressureAtMaximumTemperature: 3.494e6,
  },

  CarbonTertraChloride: {
    name: 'Carbon tetraChloride',
    formula: 'CCl4',
    CAS: '56-23-5',
    C1: 78.441,
    C2: -6128.1,
    C3: -8.5766,
    C4: 6.8465e-6,
    C5: 2,
    minimumTemperature: 250.33,
    maximumTemperature: 556.35,
    pressureAtMinimumTemperature: 1.12e3,
    pressureAtMaximumTemperature: 4.544e6,
  },

  CarbonTertraFlouoride: {
    name: 'Carbon tetraChloride',
    formula: 'CF4',
    CAS: '75-73-0',
    C1: 61.89,
    C2: -2296.3,
    C3: -7.086,
    C4: 0.000034687,
    C5: 2,
    minimumTemperature: 89.56,
    maximumTemperature: 227.51,
    pressureAtMinimumTemperature: 1.08e2,
    pressureAtMaximumTemperature: 3.742e6,
  },

  Chlorine: {
    name: 'Chlorine',
    formula: 'Cl2',
    CAS: '7782-50-5',
    C1: 71.334,
    C2: -3855,
    C3: -8.5171,
    C4: 0.012378,
    C5: 1,
    minimumTemperature: 172.12,
    maximumTemperature: 417.15,
    pressureAtMinimumTemperature: 1.37e3,
    pressureAtMaximumTemperature: 7.793e6,
  },

  Chlorobenzene: {
    name: 'Chlorobenzene',
    formula: 'C6H5Cl',
    CAS: '108-90-5',
    C1: 54.144,
    C2: -6244.4,
    C3: -4.5343,
    C4: 4.7e-18,
    C5: 6,
    minimumTemperature: 227.95,
    maximumTemperature: 632.35,
    pressureAtMinimumTemperature: 8.45,
    pressureAtMaximumTemperature: 4.529e6,
  },

  Chloroethane: {
    name: 'Chloroethane',
    formula: 'C2H5Cl',
    CAS: '75-00-3',
    C1: 44.677,
    C2: -4026,
    C3: -3.371,
    C4: 2.27e-17,
    C5: 6,
    minimumTemperature: 136.75,
    maximumTemperature: 460.35,
    pressureAtMinimumTemperature: 2.61e-1,
    pressureAtMaximumTemperature: 5.267e6,
  },

  Chloroform: {
    name: 'Chloroform',
    formula: 'CHCl3',
    CAS: '67-66-3',
    C1: 146.43,
    C2: -7792.3,
    C3: -20.614,
    C4: 0.024578,
    C5: 1,
    minimumTemperature: 207.15,
    maximumTemperature: 536.4,
    pressureAtMinimumTemperature: 5.25e1,
    pressureAtMaximumTemperature: 5.554e6,
  },

  Chloromethane: {
    name: 'Chloromethane',
    formula: 'CH3Cl',
    CAS: '74-87-3',
    C1: 44.555,
    C2: -3521.3,
    C3: -3.4258,
    C4: 5.63e-17,
    C5: 6,
    minimumTemperature: 175.45,
    maximumTemperature: 416.25,
    pressureAtMinimumTemperature: 8.84e2,
    pressureAtMaximumTemperature: 6.759e6,
  },

  Chloropropane1: {
    name: '1-Chloropropane',
    formula: 'C3H7Cl',
    CAS: '540-54-5',
    C1: 58.3592,
    C2: -5111.33,
    C3: -5.35261,
    C4: 2.47e-17,
    C5: 6,
    minimumTemperature: 150.35,
    maximumTemperature: 503.15,
    pressureAtMinimumTemperature: 8.47e-2,
    pressureAtMaximumTemperature: 4.425e6,
  },

  Chloropropane2: {
    name: '2-Chloropropane',
    formula: 'C3H7Cl',
    CAS: '75-29-6',
    C1: 46.854,
    C2: -4445.5,
    C3: -3.6533,
    C4: 1.33e-17,
    C5: 6,
    minimumTemperature: 155.97,
    maximumTemperature: 489,
    pressureAtMinimumTemperature: 9.08e-1,
    pressureAtMaximumTemperature: 4.51e6,
  },

  mCresol: {
    name: 'm-Cresol',
    formula: 'C7H8O',
    CAS: '108-39-4',
    C1: 95.403,
    C2: -10581,
    C3: -10.004,
    C4: 4.3e-18,
    C5: 6,
    minimumTemperature: 285.39,
    maximumTemperature: 705.85,
    pressureAtMinimumTemperature: 5.86,
    pressureAtMaximumTemperature: 4.522e6,
  },

  oCresol: {
    name: 'o-Cresol',
    formula: 'C7H8O',
    CAS: '95-48-7',
    C1: 210.88,
    C2: -13928,
    C3: -29.483,
    C4: 0.025182,
    C5: 1,
    minimumTemperature: 304.19,
    maximumTemperature: 697.55,
    pressureAtMinimumTemperature: 6.53e1,
    pressureAtMaximumTemperature: 5.058e6,
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
