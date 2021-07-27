import { DIPPRThermalConductivityProps } from '../interfaces/utils';

export const DIPPRThermalConductivityDictionary: Record<
  string,
  DIPPRThermalConductivityProps
> = {
  Acetaldehyde: {
    name: 'Acetaldehyde',
    formula: 'C2H4O',
    CAS: '75-07-0',
    molecularWeight: 44.05256,
    C1: 0.33515,
    C2: -0.00055227,
    minimumTemperature: 149.78,
    maximumTemperature: 294.15,
    thermalConductivityAtMinimumTemperature: 0.2524,
    thermalConductivityAtMaximumTemperature: 0.1727,
  },

  Acetamide: {
    name: 'Acetamide',
    formula: 'C2H5NO',
    CAS: '60-35-5',
    molecularWeight: 59.0672,
    C1: 0.39363,
    C2: -0.00037053,
    minimumTemperature: 353.33,
    maximumTemperature: 494.3,
    thermalConductivityAtMinimumTemperature: 0.2627,
    thermalConductivityAtMaximumTemperature: 0.2105,
  },

  AceticAcid: {
    name: 'Acetic acid',
    formula: 'C2H4O2',
    CAS: '64-19-7',
    molecularWeight: 60.052,
    C1: 0.214,
    C2: -0.0001834,
    minimumTemperature: 289.81,
    maximumTemperature: 391.05,
    thermalConductivityAtMinimumTemperature: 0.1608,
    thermalConductivityAtMaximumTemperature: 0.1423,
  },

  AceticAnhydride: {
    name: 'Acetic anhydride',
    formula: 'C4H6O3',
    CAS: '108-24-7',
    molecularWeight: 102.08864,
    C1: 0.23638,
    C2: -0.00024263,
    minimumTemperature: 200.15,
    maximumTemperature: 412.7,
    thermalConductivityAtMinimumTemperature: 0.1878,
    thermalConductivityAtMaximumTemperature: 0.1362,
  },

  Acetone: {
    name: 'Acetone',
    formula: 'C3H6O',
    CAS: '67-64-1',
    molecularWeight: 58.07914,
    C1: 0.2878,
    C2: -0.000427,
    minimumTemperature: 178.45,
    maximumTemperature: 343.15,
    thermalConductivityAtMinimumTemperature: 0.2116,
    thermalConductivityAtMaximumTemperature: 0.1413,
  },

  Acetonitrile: {
    name: 'Acetonitrile',
    formula: 'C2H3N',
    CAS: '75-05-8',
    molecularWeight: 41.0519,
    C1: 0.30755,
    C2: -0.000402,
    minimumTemperature: 229.32,
    maximumTemperature: 354.81,
    thermalConductivityAtMinimumTemperature: 0.2154,
    thermalConductivityAtMaximumTemperature: 0.1649,
  },

  Acetylene: {
    name: 'Acetylene',
    formula: 'C2H2',
    CAS: '74-86-2',
    molecularWeight: 26.03728,
    C1: 0.33363,
    C2: -0.00083655,
    minimumTemperature: 192.4,
    maximumTemperature: 250,
    thermalConductivityAtMinimumTemperature: 0.1727,
    thermalConductivityAtMaximumTemperature: 0.1245,
  },

  Acrolein: {
    name: 'Acrolein',
    formula: 'C3H4O',
    CAS: '107-02-8',
    molecularWeight: 56.06326,
    C1: 0.2703,
    C2: -0.0003764,
    minimumTemperature: 185.45,
    maximumTemperature: 325.84,
    thermalConductivityAtMinimumTemperature: 0.2005,
    thermalConductivityAtMaximumTemperature: 0.1477,
  },

  AcrylicAcid: {
    name: 'Acrylic acid',
    formula: 'C3H4O2',
    CAS: '79-10-7',
    molecularWeight: 72.06266,
    C1: 0.2441,
    C2: -0.0002904,
    minimumTemperature: 286.15,
    maximumTemperature: 484.5,
    thermalConductivityAtMinimumTemperature: 0.161,
    thermalConductivityAtMaximumTemperature: 0.1034,
  },

  Acrylonitrile: {
    name: 'Acrylonitrile',
    formula: 'C3H3N',
    CAS: '107-13-1',
    molecularWeight: 53.0626,
    C1: 0.30751,
    C2: -0.000487,
    minimumTemperature: 189.63,
    maximumTemperature: 350.45,
    thermalConductivityAtMinimumTemperature: 0.2152,
    thermalConductivityAtMaximumTemperature: 0.1368,
  },

  Air: {
    name: 'Air',
    formula: 'Mixture',
    CAS: '132259-10-0',
    molecularWeight: 28.96,
    C1: 0.28472,
    C2: -0.0017393,
    minimumTemperature: 75,
    maximumTemperature: 125,
    thermalConductivityAtMinimumTemperature: 0.1543,
    thermalConductivityAtMaximumTemperature: 0.0673,
  },

  Ammonia: {
    name: 'Ammonia',
    formula: 'H3N',
    CAS: '7664-41-7',
    molecularWeight: 17.03052,
    C1: 1.169,
    C2: -0.002314,
    minimumTemperature: 195.41,
    maximumTemperature: 400.05,
    thermalConductivityAtMinimumTemperature: 0.7168,
    thermalConductivityAtMaximumTemperature: 0.2433,
  },

  Anisole: {
    name: 'Anisole',
    formula: 'C7H8O',
    CAS: '100-66-3',
    molecularWeight: 108.13782,
    C1: 0.23494,
    C2: -0.00026477,
    minimumTemperature: 235.65,
    maximumTemperature: 512.5,
    thermalConductivityAtMinimumTemperature: 0.1725,
    thermalConductivityAtMaximumTemperature: 0.0993,
  },

  Argon: {
    name: 'Argon',
    formula: 'Ar',
    CAS: '7440-37-1',
    molecularWeight: 39.948,
    C1: 0.1819,
    C2: -0.0003176,
    C3: -0.00000411,
    C4: NaN,
    C5: NaN,
    minimumTemperature: 83.78,
    maximumTemperature: 150,
    thermalConductivityAtMinimumTemperature: 0.1264,
    thermalConductivityAtMaximumTemperature: 0.0418,
  },

  Benzamide: {
    name: 'Benzamide',
    formula: 'C7H7NO',
    CAS: '55-21-0',
    molecularWeight: 121.13658,
    C1: 0.28485,
    C2: -0.00025225,
    minimumTemperature: 403,
    maximumTemperature: 563.15,
    thermalConductivityAtMinimumTemperature: 0.1832,
    thermalConductivityAtMaximumTemperature: 0.1428,
  },

  Benzene: {
    name: 'Benzene',
    formula: 'C6H6',
    CAS: '71-43-2',
    molecularWeight: 78.11184,
    C1: 0.23444,
    C2: -0.00030572,
    minimumTemperature: 278.68,
    maximumTemperature: 413.1,
    thermalConductivityAtMinimumTemperature: 0.1492,
    thermalConductivityAtMaximumTemperature: 0.1081,
  },

  Benzenethiol: {
    name: 'Benzenethiol',
    formula: 'C6H6S',
    CAS: '108-98-5',
    molecularWeight: 110.17684,
    C1: 0.20996,
    C2: -0.0002146,
    minimumTemperature: 258.27,
    maximumTemperature: 442.29,
    thermalConductivityAtMinimumTemperature: 0.1545,
    thermalConductivityAtMaximumTemperature: 0.115,
  },

  BenzoicAcid: {
    name: 'Benzoic acid',
    formula: 'C7H6O2',
    CAS: '65-85-0',
    molecularWeight: 122.12134,
    C1: 0.2391,
    C2: -0.0002325,
    minimumTemperature: 395.45,
    maximumTemperature: 596,
    thermalConductivityAtMinimumTemperature: 0.1472,
    thermalConductivityAtMaximumTemperature: 0.1005,
  },

  Benzonitrile: {
    name: 'Benzonitrile',
    formula: 'C7H5N',
    CAS: '100-47-0',
    molecularWeight: 103.1213,
    C1: 0.20603,
    C2: -0.00021023,
    minimumTemperature: 260.28,
    maximumTemperature: 464.15,
    thermalConductivityAtMinimumTemperature: 0.1513,
    thermalConductivityAtMaximumTemperature: 0.1085,
  },

  Benzophenone: {
    name: 'Benzophenone',
    formula: 'C13H10O',
    CAS: '119-61-9',
    molecularWeight: 182.2179,
    C1: 0.25867,
    C2: -0.00022516,
    minimumTemperature: 321.35,
    maximumTemperature: 664,
    thermalConductivityAtMinimumTemperature: 0.1863,
    thermalConductivityAtMaximumTemperature: 0.1092,
  },

  BenzylAlcohol: {
    name: 'Benzyl alcohol',
    formula: 'C7H8O',
    CAS: '100-51-6',
    molecularWeight: 108.13782,
    C1: 0.17847,
    C2: -0.000065843,
    minimumTemperature: 257.85,
    maximumTemperature: 478.6,
    thermalConductivityAtMinimumTemperature: 0.1615,
    thermalConductivityAtMaximumTemperature: 0.147,
  },

  BenzylEthylether: {
    name: 'Benzyl ethyl ether',
    formula: 'C9H12O',
    CAS: '539-30-0',
    molecularWeight: 136.19098,
    C1: 0.2029,
    C2: -0.0002226,
    minimumTemperature: 275.65,
    maximumTemperature: 528.6,
    thermalConductivityAtMinimumTemperature: 0.1415,
    thermalConductivityAtMaximumTemperature: 0.0852,
  },

  BenzylMercaptan: {
    name: 'Benzyl mercaptan',
    formula: 'C7H8S',
    CAS: '100-53-8',
    molecularWeight: 124.20342,
    C1: 0.20316,
    C2: -0.00019912,
    minimumTemperature: 243.95,
    maximumTemperature: 472.03,
    thermalConductivityAtMinimumTemperature: 0.1546,
    thermalConductivityAtMaximumTemperature: 0.1092,
  },

  Biphenyl: {
    name: 'Bipheny',
    formula: 'C12H10',
    CAS: '92-52-4',
    molecularWeight: 154.2078,
    C1: 0.19053,
    C2: -0.00015145,
    minimumTemperature: 342.2,
    maximumTemperature: 723.15,
    thermalConductivityAtMinimumTemperature: 0.1387,
    thermalConductivityAtMaximumTemperature: 0.081,
  },

  Bromine: {
    name: 'Bromine',
    formula: 'Br2',
    CAS: '7726-95-6',
    molecularWeight: 159.808,
    C1: -0.2185,
    C2: 0.0042143,
    C3: -0.000017753,
    C4: 3.1041e-8,
    C5: -2.0108e-11,
    minimumTemperature: 266,
    maximumTemperature: 584,
    thermalConductivityAtMinimumTemperature: 0.1299,
    thermalConductivityAtMaximumTemperature: 0.0316,
  },

  Bromobenzene: {
    name: 'Bromobenzene',
    formula: 'C6H5Br',
    CAS: '108-86-1',
    molecularWeight: 157.0079,
    C1: 0.16983,
    C2: -0.0001981,
    minimumTemperature: 242.43,
    maximumTemperature: 429.24,
    thermalConductivityAtMinimumTemperature: 0.1218,
    thermalConductivityAtMaximumTemperature: 0.0848,
  },

  Bromoethane: {
    name: 'Bromoethane',
    formula: 'C2H5Br',
    CAS: '74-96-4',
    molecularWeight: 108.965,
    C1: 0.1629,
    C2: -0.00021198,
    minimumTemperature: 154.25,
    maximumTemperature: 327,
    thermalConductivityAtMinimumTemperature: 0.1302,
    thermalConductivityAtMaximumTemperature: 0.0936,
  },

  Bromomethane: {
    name: 'Bromomethane',
    formula: 'CH3Br',
    CAS: '74-83-9',
    molecularWeight: 94.93852,
    C1: 0.16143,
    C2: -0.00021287,
    minimumTemperature: 179.44,
    maximumTemperature: 413.15,
    thermalConductivityAtMinimumTemperature: 0.1232,
    thermalConductivityAtMaximumTemperature: 0.0735,
  },

  Butadiene12: {
    name: '1,2-Butadiene',
    formula: 'C4H6',
    CAS: '590-19-2',
    molecularWeight: 54.09044,
    C1: 0.21966,
    C2: -0.0003436,
    minimumTemperature: 136.95,
    maximumTemperature: 284,
    thermalConductivityAtMinimumTemperature: 0.1726,
    thermalConductivityAtMaximumTemperature: 0.1221,
  },

  Butadiene13: {
    name: '1,3-Butadiene',
    formula: 'C4H6',
    CAS: '106-99-0',
    molecularWeight: 54.09044,
    C1: 0.22231,
    C2: -0.0003664,
    minimumTemperature: 164.25,
    maximumTemperature: 268.74,
    thermalConductivityAtMinimumTemperature: 0.1621,
    thermalConductivityAtMaximumTemperature: 0.1238,
  },

  Butane: {
    name: 'Butane',
    formula: 'C4H10',
    CAS: '106-97-8',
    molecularWeight: 58.1222,
    C1: 0.27349,
    C2: -0.00071267,
    C3: 5.1555e-7,
    minimumTemperature: 134.86,
    maximumTemperature: 400,
    thermalConductivityAtMinimumTemperature: 0.1868,
    thermalConductivityAtMaximumTemperature: 0.0709,
  },
};
export function calculateDIPPRThermalConductivity(
  compound: string,
  temperature: number
): number {
  const thermalConductivityProps: DIPPRThermalConductivityProps | undefined =
    DIPPRThermalConductivityDictionary[compound];
  let thermalConductivity = NaN;
  if (
    thermalConductivityProps !== undefined &&
    temperature >= thermalConductivityProps.minimumTemperature &&
    temperature <= thermalConductivityProps.maximumTemperature
  ) {
    thermalConductivity =
      thermalConductivityProps.C1 +
      thermalConductivityProps.C2 * temperature +
      (Number.isFinite(thermalConductivityProps.C3)
        ? Math.pow(temperature, 2) * (thermalConductivityProps.C3 as number)
        : 0) +
      (Number.isFinite(thermalConductivityProps.C4)
        ? Math.pow(temperature, 3) * (thermalConductivityProps.C4 as number)
        : 0) +
      (Number.isFinite(thermalConductivityProps.C5)
        ? Math.pow(temperature, 4) * (thermalConductivityProps.C5 as number)
        : 0);
  }
  return thermalConductivity;
}
