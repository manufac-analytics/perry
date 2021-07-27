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

  BenzylAlcohol: {
    name: 'Benzyl alcohol',
    formula: 'C7H8O',
    CAS: '100-51-6',
    C1: 100.68,
    C2: -11059,
    C3: -10.709,
    C4: 3.06e-18,
    C5: 6,
    minimumTemperature: 257.85,
    maximumTemperature: 720.15,
    pressureAtMinimumTemperature: 1.88e-1,
    pressureAtMaximumTemperature: 4.372e6,
  },

  BenzylEthylEther: {
    name: 'Benzyl ethyl ether',
    formula: 'C9H12O',
    CAS: '539-30-0',
    C1: 68.541,
    C2: -7886.2,
    C3: -6.5804,
    C4: 2.4285e-6,
    C5: 2,
    minimumTemperature: 275.65,
    maximumTemperature: 662,
    pressureAtMinimumTemperature: 2.31e1,
    pressureAtMaximumTemperature: 3.113e6,
  },

  BenzylMercaptan: {
    name: 'Benzyl mercaptan',
    formula: 'C7H8S',
    CAS: '100-53-8',
    C1: 118.02,
    C2: -10527,
    C3: -13.91,
    C4: 6.4794e-6,
    C5: 2,
    minimumTemperature: 243.95,
    maximumTemperature: 718,
    pressureAtMinimumTemperature: 2.98e-1,
    pressureAtMaximumTemperature: 4.0074e6,
  },

  Biphenyl: {
    name: 'Biphenyl',
    formula: 'C12H10',
    CAS: '92-52-4',
    C1: 77.314,
    C2: -9910.4,
    C3: -7.5079,
    C4: 2.24e-18,
    C5: 6,
    minimumTemperature: 342.2,
    maximumTemperature: 773,
    pressureAtMinimumTemperature: 9.42e1,
    pressureAtMaximumTemperature: 3.407e6,
  },

  Bromine: {
    name: 'Bromine',
    formula: 'Br2',
    CAS: '7726-95-6',
    C1: 108.26,
    C2: -6592,
    C3: -14.16,
    C4: 0.016043,
    C5: 1,
    minimumTemperature: 265.85,
    maximumTemperature: 584.15,
    pressureAtMinimumTemperature: 5.85e3,
    pressureAtMaximumTemperature: 1.028e7,
  },

  Bromobenzene: {
    name: 'Bromobenzene',
    formula: 'C6H5Br',
    CAS: '108-86-1',
    C1: 63.749,
    C2: -7130.2,
    C3: -5.879,
    C4: 5.21e-18,
    C5: 6,
    minimumTemperature: 242.43,
    maximumTemperature: 670.15,
    pressureAtMinimumTemperature: 7.84,
    pressureAtMaximumTemperature: 4.52e6,
  },

  Bromoethane: {
    name: 'Bromoethane',
    formula: 'C2H5Br',
    CAS: '74-96-4',
    C1: 57.3242,
    C2: -4931.2,
    C3: -5.2244,
    C4: 3.08e-17,
    C5: 6,
    minimumTemperature: 154.25,
    maximumTemperature: 503.8,
    pressureAtMinimumTemperature: 3.8e-1,
    pressureAtMaximumTemperature: 5.565e6,
  },

  Bromomethane: {
    name: 'Bromomethane',
    formula: 'CH3Br',
    CAS: '74-83-9',
    C1: 44.7643,
    C2: -3907.8,
    C3: -3.4016,
    C4: 2.95e-17,
    C5: 6,
    minimumTemperature: 179.44,
    maximumTemperature: 464,
    pressureAtMinimumTemperature: 2.07e2,
    pressureAtMaximumTemperature: 6.929e6,
  },

  Butadiene12: {
    name: '1,2-Butadiene',
    formula: 'C4H6',
    CAS: '590-19-2',
    C1: 39.714,
    C2: -3769.9,
    C3: -2.6407,
    C4: 6.94e-18,
    C5: 6,
    minimumTemperature: 136.95,
    maximumTemperature: 452,
    pressureAtMinimumTemperature: 4.47e-1,
    pressureAtMaximumTemperature: 4.361e6,
  },

  Butadiene13: {
    name: '1,3-Butadiene',
    formula: 'C4H6',
    CAS: '106-99-0',
    C1: 75.572,
    C2: -4621.9,
    C3: -8.5323,
    C4: 0.000012269,
    C5: 2,
    minimumTemperature: 164.25,
    maximumTemperature: 425,
    pressureAtMinimumTemperature: 6.92e1,
    pressureAtMaximumTemperature: 4.303e6,
  },

  Butane: {
    name: 'Butane',
    formula: 'C4H10',
    CAS: '106-97-8',
    C1: 66.343,
    C2: -4363.2,
    C3: -7.046,
    C4: 9.4509e-6,
    C5: 2,
    minimumTemperature: 134.86,
    maximumTemperature: 425.12,
    pressureAtMinimumTemperature: 6.74e-1,
    pressureAtMaximumTemperature: 3.77e6,
  },

  Butanediol12: {
    name: '1,2-Butanediol',
    formula: 'C4H10O2',
    CAS: '584-03-2',
    C1: 103.28,
    C2: -11548,
    C3: -10.925,
    C4: 4.26e-18,
    C5: 6,
    minimumTemperature: 220,
    maximumTemperature: 680,
    pressureAtMinimumTemperature: 2.93e-4,
    pressureAtMaximumTemperature: 5.202e6,
  },

  Butanediol13: {
    name: '1,3-Butanediol',
    formula: 'C4H10O2',
    CAS: '107-88-0',
    C1: 123.22,
    C2: -12620,
    C3: -13.986,
    C4: 0.000003926,
    C5: 2,
    minimumTemperature: 196.15,
    maximumTemperature: 676,
    pressureAtMinimumTemperature: 3.74e-7,
    pressureAtMaximumTemperature: 4.033e6,
  },

  Butanol1: {
    name: '1-Butanol',
    formula: 'C4H10O',
    CAS: '71-36-3',
    C1: 106.29483,
    C2: -9866.35511,
    C3: -11.6553,
    C4: 1.08e-17,
    C5: 6,
    minimumTemperature: 183.85,
    maximumTemperature: 563.1,
    pressureAtMinimumTemperature: 2.91e-4,
    pressureAtMaximumTemperature: 4.414e6,
  },

  Butanol2: {
    name: '2-Butanol',
    formula: 'C4H10O',
    CAS: '78-92-2',
    C1: 122.552,
    C2: -10236.2,
    C3: -14.125,
    C4: 2.36e-17,
    C5: 6,
    minimumTemperature: 158.45,
    maximumTemperature: 535.9,
    pressureAtMinimumTemperature: 1.24e-6,
    pressureAtMaximumTemperature: 4.19e6,
  },

  Butene1: {
    name: '2-Butanol',
    formula: 'C4H8',
    CAS: '106-98-9',
    C1: 51.836,
    C2: -4019.2,
    C3: -4.5229,
    C4: 4.48e-17,
    C5: 6,
    minimumTemperature: 87.8,
    maximumTemperature: 419.5,
    pressureAtMinimumTemperature: 6.94e-7,
    pressureAtMaximumTemperature: 4.021e6,
  },

  cis2Butene: {
    name: 'cis-2-Butene',
    formula: 'C4H8',
    CAS: '590-18-1',
    C1: 72.541,
    C2: -4691.2,
    C3: -7.9776,
    C4: 0.000010368,
    C5: 2,
    minimumTemperature: 134.26,
    maximumTemperature: 435.5,
    pressureAtMinimumTemperature: 2.72e-1,
    pressureAtMaximumTemperature: 4.238e6,
  },

  trans2Butene: {
    name: 'trans-2-Butene',
    formula: 'C4H8',
    CAS: '624-64-6',
    C1: 71.704,
    C2: -4563.1,
    C3: -7.9053,
    C4: 0.000011319,
    C5: 2,
    minimumTemperature: 167.62,
    maximumTemperature: 428.6,
    pressureAtMinimumTemperature: 7.45e1,
    pressureAtMaximumTemperature: 4.1e6,
  },

  Butylacetate: {
    name: 'Butyl acetate',
    formula: 'C6H12O2',
    CAS: '123-86-4',
    C1: 122.82,
    C2: -9253.2,
    C3: -14.99,
    C4: 0.00001047,
    C5: 2,
    minimumTemperature: 199.65,
    maximumTemperature: 575.4,
    pressureAtMinimumTemperature: 8.17e-2,
    pressureAtMaximumTemperature: 3.087e6,
  },

  Butylbenzene: {
    name: 'Butylbenzene',
    formula: 'C10H14',
    CAS: '104-51-8',
    C1: 101.22,
    C2: -9255.4,
    C3: -11.538,
    C4: 5.9208e-6,
    C5: 2,
    minimumTemperature: 185.3,
    maximumTemperature: 660.5,
    pressureAtMinimumTemperature: 1.54e-4,
    pressureAtMaximumTemperature: 2.882e6,
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
