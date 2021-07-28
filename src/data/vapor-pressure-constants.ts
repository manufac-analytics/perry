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

  // add all prev batches

  pCresol: {
    name: 'p-Cresol',
    formula: 'C7H8O',
    CAS: '106-44-5',
    C1: 118.53,
    C2: -11957,
    C3: -13.293,
    C4: 8.7e-18,
    C5: 6,
    minimumTemperature: 307.93,
    maximumTemperature: 704.65,
    pressureAtMinimumTemperature: 3.45e1,
    pressureAtMaximumTemperature: 5.151e6,
  },

  Cumene: {
    name: 'Cumene',
    formula: 'C9H12',
    CAS: '98-82-8',
    C1: 102.81,
    C2: -8674.6,
    C3: -11.922,
    C4: 7.0048e-6,
    C5: 2,
    minimumTemperature: 177.14,
    maximumTemperature: 631,
    pressureAtMinimumTemperature: 4.71e-4,
    pressureAtMaximumTemperature: 3.226e6,
  },

  Cyanogen: {
    name: 'Cyanogen',
    formula: 'C2N2',
    CAS: '460-19-5',
    C1: 39.0596,
    C2: -3473.98,
    C3: -2.48683,
    C4: 2.86e-17,
    C5: 6,
    minimumTemperature: 245.25,
    maximumTemperature: 400.15,
    pressureAtMinimumTemperature: 7.44e4,
    pressureAtMaximumTemperature: 5.924e6,
  },

  Cyclobutane: {
    name: 'Cyclobutane',
    formula: 'C4H8',
    CAS: '287-23-0',
    C1: 85.899,
    C2: -4884.4,
    C3: -10.883,
    C4: 0.014934,
    C5: 1,
    minimumTemperature: 182.48,
    maximumTemperature: 459.93,
    pressureAtMinimumTemperature: 1.8e2,
    pressureAtMaximumTemperature: 4.991e6,
  },

  Cyclohexane: {
    name: 'Cyclohexane',
    formula: 'C6H12',
    CAS: '110-82-7',
    C1: 51.087,
    C2: -5226.4,
    C3: -4.2278,
    C4: 9.76e-18,
    C5: 6,
    minimumTemperature: 279.69,
    maximumTemperature: 553.8,
    pressureAtMinimumTemperature: 5.36e3,
    pressureAtMaximumTemperature: 4.093e6,
  },

  Cyclohexanol: {
    name: 'Cyclohexanol',
    formula: 'C6H12O',
    CAS: '108-93-0',
    C1: 189.19,
    C2: -14337,
    C3: -24.148,
    C4: 0.00001074,
    C5: 2,
    minimumTemperature: 296.6,
    maximumTemperature: 650.1,
    pressureAtMinimumTemperature: 7.65e1,
    pressureAtMaximumTemperature: 4.265e6,
  },

  Cyclohexanone: {
    name: 'Cyclohexanone',
    formula: 'C6H10O',
    CAS: '108-94-1',
    C1: 85.424,
    C2: -7944.4,
    C3: -9.2862,
    C4: 4.9957e-6,
    C5: 2,
    minimumTemperature: 242,
    maximumTemperature: 653,
    pressureAtMinimumTemperature: 6.8,
    pressureAtMaximumTemperature: 3.989e6,
  },

  Cyclohexene: {
    name: 'Cyclohexene',
    formula: 'C6H10',
    CAS: '110-83-8',
    C1: 88.184,
    C2: -6624.9,
    C3: -10.059,
    C4: 8.2566e-6,
    C5: 2,
    minimumTemperature: 169.67,
    maximumTemperature: 560.4,
    pressureAtMinimumTemperature: 1.04e-1,
    pressureAtMaximumTemperature: 4.392e6,
  },

  Cyclopentane: {
    name: 'Cyclopentane',
    formula: 'C5H10',
    CAS: '287-92-3',
    C1: 66.341,
    C2: -5198.5,
    C3: -6.8103,
    C4: 0.000006193,
    C5: 2,
    minimumTemperature: 179.28,
    maximumTemperature: 511.7,
    pressureAtMinimumTemperature: 9.07,
    pressureAtMaximumTemperature: 4.513e6,
  },

  Cyclopentene: {
    name: 'Cyclopentene',
    formula: 'C5H8',
    CAS: '142-29-0',
    C1: 67.952,
    C2: -5187.5,
    C3: -7.0785,
    C4: 6.8165e-6,
    C5: 2,
    minimumTemperature: 138.13,
    maximumTemperature: 507,
    pressureAtMinimumTemperature: 1.28e-2,
    pressureAtMaximumTemperature: 4.799e6,
  },

  Cyclopropane: {
    name: 'Cyclopropane',
    formula: 'C3H6',
    CAS: '75-19-4',
    C1: 40.608,
    C2: -3179.6,
    C3: -2.8937,
    C4: 5.61e-17,
    C5: 6,
    minimumTemperature: 145.59,
    maximumTemperature: 398,
    pressureAtMinimumTemperature: 7.8e1,
    pressureAtMaximumTemperature: 5.494e6,
  },

  CyclohexylMercaptan: {
    name: 'Cyclohexyl mercaptan',
    formula: 'C6H12S',
    CAS: '1569-69-3',
    C1: 85.146,
    C2: -7843.7,
    C3: -9.2982,
    C4: 5.1788e-6,
    C5: 2,
    minimumTemperature: 189.64,
    maximumTemperature: 664,
    pressureAtMinimumTemperature: 8.24e-3,
    pressureAtMaximumTemperature: 3.97e6,
  },

  Decanal: {
    name: 'Decanal',
    formula: 'C10H20O',
    CAS: '112-31-2',
    C1: 93.5742,
    C2: -10403.8,
    C3: -9.79483,
    C4: 4.57e-18,
    C5: 6,
    minimumTemperature: 285,
    maximumTemperature: 674,
    pressureAtMinimumTemperature: 5.51,
    pressureAtMaximumTemperature: 2.6e6,
  },

  Decane: {
    name: 'Decane',
    formula: 'C10H22',
    CAS: '124-18-5',
    C1: 112.73,
    C2: -9749.6,
    C3: -13.245,
    C4: 7.1266e-6,
    C5: 2,
    minimumTemperature: 243.51,
    maximumTemperature: 617.7,
    pressureAtMinimumTemperature: 1.39,
    pressureAtMaximumTemperature: 2.091e6,
  },

  DecanoicAcid: {
    name: 'Decanoic acid',
    formula: 'C10H20O2',
    CAS: '334-48-5',
    C1: 126.405,
    C2: -14864.6,
    C3: -13.9067,
    C4: 2.51e-18,
    C5: 6,
    minimumTemperature: 304.55,
    maximumTemperature: 722.1,
    pressureAtMinimumTemperature: 1.45e-1,
    pressureAtMaximumTemperature: 2.28e6,
  },

  '1Decanol': {
    name: '1-Decanol',
    formula: 'C10H22O',
    CAS: '112-30-1',
    C1: 156.23933,
    C2: -15212.33492,
    C3: -18.42393,
    C4: 8.5e-18,
    C5: 6,
    minimumTemperature: 280.05,
    maximumTemperature: 688,
    pressureAtMinimumTemperature: 1.5e-1,
    pressureAtMaximumTemperature: 2.308e6,
  },

  '1Decene': {
    name: '1-Decene',
    formula: 'C10H20',
    CAS: '872-05-9',
    C1: 68.401,
    C2: -7776.9,
    C3: -6.4637,
    C4: 6.38e-18,
    C5: 6,
    minimumTemperature: 206.89,
    maximumTemperature: 616.6,
    pressureAtMinimumTemperature: 2.59e-2,
    pressureAtMaximumTemperature: 2.223e6,
  },

  DecylMercaptan: {
    name: 'Decyl mercaptan',
    formula: 'C10H22S',
    CAS: '143-10-2',
    C1: 91.91,
    C2: -10565,
    C3: -9.5957,
    C4: 5.7e-18,
    C5: 6,
    minimumTemperature: 247.56,
    maximumTemperature: 696,
    pressureAtMinimumTemperature: 2.59e-2,
    pressureAtMaximumTemperature: 2.13e6,
  },

  '1Decyne': {
    name: '1-Decyne',
    formula: 'C10H18',
    CAS: '764-93-2',
    C1: 142.94,
    C2: -11119,
    C3: -17.818,
    C4: 0.00001102,
    C5: 2,
    minimumTemperature: 229.15,
    maximumTemperature: 619.85,
    pressureAtMinimumTemperature: 1.6e-1,
    pressureAtMaximumTemperature: 2.363e6,
  },

  Deuterium: {
    name: 'Deuterium',
    formula: 'D2',
    CAS: '7782-39-0',
    C1: 18.947,
    C2: -154.47,
    C3: -0.57226,
    C4: 0.038899,
    C5: 1,
    minimumTemperature: 18.73,
    maximumTemperature: 38.35,
    pressureAtMinimumTemperature: 1.72e4,
    pressureAtMaximumTemperature: 1.663e6,
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
