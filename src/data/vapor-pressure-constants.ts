import { DIPPRVaporPressureProps } from "../interfaces/utils";

export const DIPPRVaporPressureDictionary: Record<string, DIPPRVaporPressureProps> = {
  Acetaldehyde: {
    name: "Acetaldehyde",
    formula: "C2H4O",
    CAS: "75-07-0",
    C1: 52.9107,
    C2: -4643.14,
    C3: -4.50683,
    C4: 2.7e-17,
    C5: 6,
    minimumTemperature: 149.78,
    maximumTemperature: 466,
    pressureAtMinimumTemperature: 5.15e-1,
    pressureAtMaximumTemperature: 5.57e6
  },

  Acetalmide: {
    name: "Acetalmide",
    formula: "C2H5NO",
    CAS: "60-35-5",
    C1: 125.81,
    C2: -12376,
    C3: -14.589,
    C4: 5.0824e-6,
    C5: 2,
    minimumTemperature: 353.33,
    maximumTemperature: 761,
    pressureAtMinimumTemperature: 3.36e2,
    pressureAtMaximumTemperature: 6.569e6
  },

  AceticAcid: {
    name: "Acetic acid",
    formula: "C2H4O2",
    CAS: "64-19-7",
    C1: 53.27,
    C2: -6304.5,
    C3: -4.2985,
    C4: 8.89e-18,
    C5: 6,
    minimumTemperature: 289.81,
    maximumTemperature: 591.95,
    pressureAtMinimumTemperature: 1.28e3,
    pressureAtMaximumTemperature: 5.739e6
  },

  AceticAnhydride: {
    name: "Acetic anhydride",
    formula: "C4H6O3",
    CAS: "108-24-7",
    C1: 67.1818,
    C2: -7463.47,
    C3: -6.24388,
    C4: 6.86e-18,
    C5: 6,
    minimumTemperature: 200.15,
    maximumTemperature: 606,
    pressureAtMinimumTemperature: 4.1e-2,
    pressureAtMaximumTemperature: 4.0e6
  },

  Acetone: {
    name: "Acetone",
    formula: "C3H6O",
    CAS: "67-64-1",
    C1: 69.006,
    C2: -5599.6,
    C3: -7.0985,
    C4: 6.2237e-6,
    C5: 2,
    minimumTemperature: 178.45,
    maximumTemperature: 508.2,
    pressureAtMinimumTemperature: 2.79,
    pressureAtMaximumTemperature: 4.709e6
  },

  Acetonitrile: {
    name: "Acetonitrile",
    formula: "C2H3N",
    CAS: "75-05-8",
    C1: 46.735,
    C2: -5126.18,
    C3: -3.54064,
    C4: 1.4e-17,
    C5: 6,
    minimumTemperature: 229.32,
    maximumTemperature: 545.5,
    pressureAtMinimumTemperature: 1.71e2,
    pressureAtMaximumTemperature: 4.85e6
  },

  Acetylene: {
    name: "Acetylene",
    formula: "C2H2",
    CAS: "74-86-2",
    C1: 39.63,
    C2: -2552.2,
    C3: -2.78,
    C4: 2.39e-16,
    C5: 6,
    minimumTemperature: 192.4,
    maximumTemperature: 308.3,
    pressureAtMinimumTemperature: 1.27e5,
    pressureAtMaximumTemperature: 6.106e6
  },

  Acrolein: {
    name: "Acrolein",
    formula: "C3H4O",
    CAS: "107-02-8",
    C1: 138.4,
    C2: -7122.7,
    C3: -19.638,
    C4: 0.026447,
    C5: 1,
    minimumTemperature: 185.45,
    maximumTemperature: 506,
    pressureAtMinimumTemperature: 1.03e1,
    pressureAtMaximumTemperature: 5.02e6
  },

  Acrylicacid: {
    name: "AcrylicAcid",
    formula: "C3H4O2",
    CAS: "79-10-7",
    C1: 46.745,
    C2: -6587.1,
    C3: -3.2208,
    C4: 5.2253e-7,
    C5: 2,
    minimumTemperature: 286.15,
    maximumTemperature: 615,
    pressureAtMinimumTemperature: 2.57e2,
    pressureAtMaximumTemperature: 5.661e6
  },

  Acrylonitrile: {
    name: "Acrylonitrile",
    formula: "C3H3N",
    CAS: "107-13-1",
    C1: 57.3157,
    C2: -5662.2,
    C3: -5.06221,
    C4: 1.51e-17,
    C5: 6,
    minimumTemperature: 189.63,
    maximumTemperature: 540,
    pressureAtMinimumTemperature: 2.47,
    pressureAtMaximumTemperature: 4.66e6
  },

  Air: {
    name: "Air",
    formula: "Mixture",
    CAS: "132259-10-0",
    C1: 21.662,
    C2: -692.39,
    C3: -0.39208,
    C4: 0.0047574,
    C5: 1,
    minimumTemperature: 59.15,
    maximumTemperature: 132.45,
    pressureAtMinimumTemperature: 5.64e3,
    pressureAtMaximumTemperature: 3.793e6
  },

  Ammonia: {
    name: "Ammonia",
    formula: "NH3",
    CAS: "7664-41-7",
    C1: 90.483,
    C2: -4669.7,
    C3: -11.607,
    C4: 0.017194,
    C5: 1,
    minimumTemperature: 195.41,
    maximumTemperature: 405.65,
    pressureAtMinimumTemperature: 6.11e3,
    pressureAtMaximumTemperature: 1.13e7
  },

  Anisole: {
    name: "Anisole",
    formula: "C7H8O",
    CAS: "100-66-3",
    C1: 128.06,
    C2: -9307.7,
    C3: -16.693,
    C4: 0.014919,
    C5: 1,
    minimumTemperature: 235.65,
    maximumTemperature: 645.6,
    pressureAtMinimumTemperature: 2.45,
    pressureAtMaximumTemperature: 4.273e6
  },

  Argon: {
    name: "Argon",
    formula: "Ar",
    CAS: "7440-37-1",
    C1: 42.127,
    C2: -1093.1,
    C3: -4.1425,
    C4: 0.000057254,
    C5: 2,
    minimumTemperature: 83.78,
    maximumTemperature: 150.86,
    pressureAtMinimumTemperature: 6.87e4,
    pressureAtMaximumTemperature: 4.896e6
  },

  Benzamide: {
    name: "Banzamide",
    formula: "C7H7NO",
    CAS: "55-21-0",
    C1: 85.474,
    C2: -11932,
    C3: -8.3348,
    C4: 1.29e-18,
    C5: 6,
    minimumTemperature: 403,
    maximumTemperature: 824,
    pressureAtMinimumTemperature: 3.55e2,
    pressureAtMaximumTemperature: 5.047e6
  },

  Benzene: {
    name: "Benzene",
    formula: "C6H6",
    CAS: "71-43-2",
    C1: 83.107,
    C2: -6486.2,
    C3: -9.2194,
    C4: 6.9844e-6,
    C5: 2,
    minimumTemperature: 278.68,
    maximumTemperature: 562.05,
    pressureAtMinimumTemperature: 4.76e3,
    pressureAtMaximumTemperature: 4.875e6
  },

  Benzenethiol: {
    name: "Benzenethiol",
    formula: "C6H6S",
    CAS: "108-98-5",
    C1: 77.765,
    C2: -8455.1,
    C3: -7.7404,
    C4: 4.31e-18,
    C5: 6,
    minimumTemperature: 258.27,
    maximumTemperature: 689,
    pressureAtMinimumTemperature: 7.68,
    pressureAtMaximumTemperature: 4.728e6
  },

  BenzoicAcid: {
    name: "Benzoic acid",
    formula: "C7H6O2",
    CAS: "65-85-0",
    C1: 88.513,
    C2: -11829,
    C3: -8.6826,
    C4: 2.32e-19,
    C5: 6,
    minimumTemperature: 395.45,
    maximumTemperature: 751,
    pressureAtMinimumTemperature: 7.96e2,
    pressureAtMaximumTemperature: 4.469e6
  },

  Benzonitrile: {
    name: "Benzonitrile",
    formula: "C7H5N",
    CAS: "100-47-0",
    C1: 55.0403,
    C2: -7363.83,
    C3: -4.50612,
    C4: 1.95e-18,
    C5: 6,
    minimumTemperature: 260.28,
    maximumTemperature: 702.3,
    pressureAtMinimumTemperature: 5.4,
    pressureAtMaximumTemperature: 4.215e6
  },

  Benzophenone: {
    name: "Benzophenone",
    formula: "C13H10O",
    CAS: "119-61-9",
    C1: 88.404,
    C2: -11769,
    C3: -8.9014,
    C4: 1.93e-18,
    C5: 6,
    minimumTemperature: 321.35,
    maximumTemperature: 830,
    pressureAtMinimumTemperature: 1.49,
    pressureAtMaximumTemperature: 3.357e6
  },

  BenzylAlcohol: {
    name: "Benzyl alcohol",
    formula: "C7H8O",
    CAS: "100-51-6",
    C1: 100.68,
    C2: -11059,
    C3: -10.709,
    C4: 3.06e-18,
    C5: 6,
    minimumTemperature: 257.85,
    maximumTemperature: 720.15,
    pressureAtMinimumTemperature: 1.88e-1,
    pressureAtMaximumTemperature: 4.372e6
  },

  BenzylEthylEther: {
    name: "Benzyl ethyl ether",
    formula: "C9H12O",
    CAS: "539-30-0",
    C1: 68.541,
    C2: -7886.2,
    C3: -6.5804,
    C4: 2.4285e-6,
    C5: 2,
    minimumTemperature: 275.65,
    maximumTemperature: 662,
    pressureAtMinimumTemperature: 2.31e1,
    pressureAtMaximumTemperature: 3.113e6
  },

  BenzylMercaptan: {
    name: "Benzyl mercaptan",
    formula: "C7H8S",
    CAS: "100-53-8",
    C1: 118.02,
    C2: -10527,
    C3: -13.91,
    C4: 6.4794e-6,
    C5: 2,
    minimumTemperature: 243.95,
    maximumTemperature: 718,
    pressureAtMinimumTemperature: 2.98e-1,
    pressureAtMaximumTemperature: 4.0074e6
  },

  Biphenyl: {
    name: "Biphenyl",
    formula: "C12H10",
    CAS: "92-52-4",
    C1: 77.314,
    C2: -9910.4,
    C3: -7.5079,
    C4: 2.24e-18,
    C5: 6,
    minimumTemperature: 342.2,
    maximumTemperature: 773,
    pressureAtMinimumTemperature: 9.42e1,
    pressureAtMaximumTemperature: 3.407e6
  },

  Bromine: {
    name: "Bromine",
    formula: "Br2",
    CAS: "7726-95-6",
    C1: 108.26,
    C2: -6592,
    C3: -14.16,
    C4: 0.016043,
    C5: 1,
    minimumTemperature: 265.85,
    maximumTemperature: 584.15,
    pressureAtMinimumTemperature: 5.85e3,
    pressureAtMaximumTemperature: 1.028e7
  },

  Bromobenzene: {
    name: "Bromobenzene",
    formula: "C6H5Br",
    CAS: "108-86-1",
    C1: 63.749,
    C2: -7130.2,
    C3: -5.879,
    C4: 5.21e-18,
    C5: 6,
    minimumTemperature: 242.43,
    maximumTemperature: 670.15,
    pressureAtMinimumTemperature: 7.84,
    pressureAtMaximumTemperature: 4.52e6
  },

  Bromoethane: {
    name: "Bromoethane",
    formula: "C2H5Br",
    CAS: "74-96-4",
    C1: 57.3242,
    C2: -4931.2,
    C3: -5.2244,
    C4: 3.08e-17,
    C5: 6,
    minimumTemperature: 154.25,
    maximumTemperature: 503.8,
    pressureAtMinimumTemperature: 3.8e-1,
    pressureAtMaximumTemperature: 5.565e6
  },

  Bromomethane: {
    name: "Bromomethane",
    formula: "CH3Br",
    CAS: "74-83-9",
    C1: 44.7643,
    C2: -3907.8,
    C3: -3.4016,
    C4: 2.95e-17,
    C5: 6,
    minimumTemperature: 179.44,
    maximumTemperature: 464,
    pressureAtMinimumTemperature: 2.07e2,
    pressureAtMaximumTemperature: 6.929e6
  },

  "1,2Butadiene": {
    name: "1,2-Butadiene",
    formula: "C4H6",
    CAS: "590-19-2",
    C1: 39.714,
    C2: -3769.9,
    C3: -2.6407,
    C4: 6.94e-18,
    C5: 6,
    minimumTemperature: 136.95,
    maximumTemperature: 452,
    pressureAtMinimumTemperature: 4.47e-1,
    pressureAtMaximumTemperature: 4.361e6
  },

  "1,3Butadiene": {
    name: "1,3-Butadiene",
    formula: "C4H6",
    CAS: "106-99-0",
    C1: 75.572,
    C2: -4621.9,
    C3: -8.5323,
    C4: 0.000012269,
    C5: 2,
    minimumTemperature: 164.25,
    maximumTemperature: 425,
    pressureAtMinimumTemperature: 6.92e1,
    pressureAtMaximumTemperature: 4.303e6
  },

  Butane: {
    name: "Butane",
    formula: "C4H10",
    CAS: "106-97-8",
    C1: 66.343,
    C2: -4363.2,
    C3: -7.046,
    C4: 9.4509e-6,
    C5: 2,
    minimumTemperature: 134.86,
    maximumTemperature: 425.12,
    pressureAtMinimumTemperature: 6.74e-1,
    pressureAtMaximumTemperature: 3.77e6
  },

  "1,2Butanediol": {
    name: "1,2-Butanediol",
    formula: "C4H10O2",
    CAS: "584-03-2",
    C1: 103.28,
    C2: -11548,
    C3: -10.925,
    C4: 4.26e-18,
    C5: 6,
    minimumTemperature: 220,
    maximumTemperature: 680,
    pressureAtMinimumTemperature: 2.93e-4,
    pressureAtMaximumTemperature: 5.202e6
  },

  "1,3Butanediol": {
    name: "1,3-Butanediol",
    formula: "C4H10O2",
    CAS: "107-88-0",
    C1: 123.22,
    C2: -12620,
    C3: -13.986,
    C4: 0.000003926,
    C5: 2,
    minimumTemperature: 196.15,
    maximumTemperature: 676,
    pressureAtMinimumTemperature: 3.74e-7,
    pressureAtMaximumTemperature: 4.033e6
  },

  "1Butanol": {
    name: "1-Butanol",
    formula: "C4H10O",
    CAS: "71-36-3",
    C1: 106.29483,
    C2: -9866.35511,
    C3: -11.6553,
    C4: 1.08e-17,
    C5: 6,
    minimumTemperature: 183.85,
    maximumTemperature: 563.1,
    pressureAtMinimumTemperature: 2.91e-4,
    pressureAtMaximumTemperature: 4.414e6
  },

  "2Butanol": {
    name: "2-Butanol",
    formula: "C4H10O",
    CAS: "78-92-2",
    C1: 122.552,
    C2: -10236.2,
    C3: -14.125,
    C4: 2.36e-17,
    C5: 6,
    minimumTemperature: 158.45,
    maximumTemperature: 535.9,
    pressureAtMinimumTemperature: 1.24e-6,
    pressureAtMaximumTemperature: 4.19e6
  },

  "1Butene": {
    name: "1-Butene",
    formula: "C4H8",
    CAS: "106-98-9",
    C1: 51.836,
    C2: -4019.2,
    C3: -4.5229,
    C4: 4.48e-17,
    C5: 6,
    minimumTemperature: 87.8,
    maximumTemperature: 419.5,
    pressureAtMinimumTemperature: 6.94e-7,
    pressureAtMaximumTemperature: 4.021e6
  },

  cis2Butene: {
    name: "cis-2-Butene",
    formula: "C4H8",
    CAS: "590-18-1",
    C1: 72.541,
    C2: -4691.2,
    C3: -7.9776,
    C4: 0.000010368,
    C5: 2,
    minimumTemperature: 134.26,
    maximumTemperature: 435.5,
    pressureAtMinimumTemperature: 2.72e-1,
    pressureAtMaximumTemperature: 4.238e6
  },

  trans2Butene: {
    name: "trans-2-Butene",
    formula: "C4H8",
    CAS: "624-64-6",
    C1: 71.704,
    C2: -4563.1,
    C3: -7.9053,
    C4: 0.000011319,
    C5: 2,
    minimumTemperature: 167.62,
    maximumTemperature: 428.6,
    pressureAtMinimumTemperature: 7.45e1,
    pressureAtMaximumTemperature: 4.1e6
  },

  Butylacetate: {
    name: "Butyl acetate",
    formula: "C6H12O2",
    CAS: "123-86-4",
    C1: 122.82,
    C2: -9253.2,
    C3: -14.99,
    C4: 0.00001047,
    C5: 2,
    minimumTemperature: 199.65,
    maximumTemperature: 575.4,
    pressureAtMinimumTemperature: 8.17e-2,
    pressureAtMaximumTemperature: 3.087e6
  },

  Butylbenzene: {
    name: "Butylbenzene",
    formula: "C10H14",
    CAS: "104-51-8",
    C1: 101.22,
    C2: -9255.4,
    C3: -11.538,
    C4: 5.9208e-6,
    C5: 2,
    minimumTemperature: 185.3,
    maximumTemperature: 660.5,
    pressureAtMinimumTemperature: 1.54e-4,
    pressureAtMaximumTemperature: 2.882e6
  },

  ButylMercaptan: {
    name: "Butyl mercaptan",
    formula: "C4H10S",
    CAS: "109-79-5",
    C1: 65.382,
    C2: -6262.4,
    C3: -6.2585,
    C4: 1.49e-17,
    C5: 6,
    minimumTemperature: 157.46,
    maximumTemperature: 570.1,
    pressureAtMinimumTemperature: 2.35e-3,
    pressureAtMaximumTemperature: 3.973e6
  },

  secButylMercaptan: {
    name: "sec-Butyl mercaptan",
    formula: "C4H10S",
    CAS: "513-53-1",
    C1: 60.649,
    C2: -5785.9,
    C3: -5.6113,
    C4: 1.59e-17,
    C5: 6,
    minimumTemperature: 133.02,
    maximumTemperature: 554,
    pressureAtMinimumTemperature: 3.4e-5,
    pressureAtMaximumTemperature: 4.06e6
  },

  IButyne: {
    name: "I-Butyne",
    formula: "C4H6",
    CAS: "107-00-6",
    C1: 77.004,
    C2: -5054.5,
    C3: -8.5665,
    C4: 0.000010161,
    C5: 2,
    minimumTemperature: 147.43,
    maximumTemperature: 440,
    pressureAtMinimumTemperature: 1.18,
    pressureAtMaximumTemperature: 4.599e6
  },

  Butyraldehyde: {
    name: "Butyraldehyde",
    formula: "C4H8O",
    CAS: "123-72-8",
    C1: 51.648,
    C2: -5301.36,
    C3: -4.2559,
    C4: 1.14e-17,
    C5: 6,
    minimumTemperature: 176.8,
    maximumTemperature: 537.2,
    pressureAtMinimumTemperature: 6.97e-1,
    pressureAtMaximumTemperature: 4.41e6
  },

  ButyricAcid: {
    name: "Butyric acid",
    formula: "C4H8O2",
    CAS: "107-92-6",
    C1: 78.1171,
    C2: -8924.37,
    C3: -7.59929,
    C4: 7.39e-18,
    C5: 6,
    minimumTemperature: 267.95,
    maximumTemperature: 615.7,
    pressureAtMinimumTemperature: 1.03e1,
    pressureAtMaximumTemperature: 4.06e6
  },

  Butyronitrile: {
    name: "Butyronitrile",
    formula: "C4H7N",
    CAS: "109-74-0",
    C1: 60.6576,
    C2: -6404.32,
    C3: -5.49286,
    C4: 1.13e-17,
    C5: 6,
    minimumTemperature: 161.3,
    maximumTemperature: 585.4,
    pressureAtMinimumTemperature: 9.41e-4,
    pressureAtMaximumTemperature: 3.88e6
  },

  CarbonDioxide: {
    name: "Carbon dioxide",
    formula: "C02",
    CAS: "124-38-9",
    C1: 47.0169,
    C2: -2839,
    C3: -3.86388,
    C4: 2.81e-16,
    C5: 6,
    minimumTemperature: 216.58,
    maximumTemperature: 304.21,
    pressureAtMinimumTemperature: 5.18e5,
    pressureAtMaximumTemperature: 7.384e6
  },

  CarbonDisulphide: {
    name: "Carbon disulphide",
    formula: "CS2",
    CAS: "75-15-0.",
    C1: 67.114,
    C2: -4820.4,
    C3: -7.5303,
    C4: 0.0091695,
    C5: 1,
    minimumTemperature: 161.11,
    maximumTemperature: 552,
    pressureAtMinimumTemperature: 1.49,
    pressureAtMaximumTemperature: 8.041e6
  },

  CarbonMonoxide: {
    name: "Carbon monoxide",
    formula: "CO",
    CAS: "630-08-0",
    C1: 45.698,
    C2: -1076.6,
    C3: -4.8814,
    C4: 0.000075673,
    C5: 2,
    minimumTemperature: 68.15,
    maximumTemperature: 132.92,
    pressureAtMinimumTemperature: 1.54e4,
    pressureAtMaximumTemperature: 3.494e6
  },

  CarbonTetrachloride: {
    name: "Carbon tetrachloride",
    formula: "CCl4",
    CAS: "56-23-5",
    C1: 78.441,
    C2: -6128.1,
    C3: -8.5766,
    C4: 6.8465e-6,
    C5: 2,
    minimumTemperature: 250.33,
    maximumTemperature: 556.35,
    pressureAtMinimumTemperature: 1.12e3,
    pressureAtMaximumTemperature: 4.544e6
  },

  CarbonTetrafluoride: {
    name: "Carbon tetraflouride",
    formula: "CF4",
    CAS: "75-73-0",
    C1: 61.89,
    C2: -2296.3,
    C3: -7.086,
    C4: 0.000034687,
    C5: 2,
    minimumTemperature: 89.56,
    maximumTemperature: 227.51,
    pressureAtMinimumTemperature: 1.08e2,
    pressureAtMaximumTemperature: 3.742e6
  },

  Chlorine: {
    name: "Chlorine",
    formula: "Cl2",
    CAS: "7782-50-5",
    C1: 71.334,
    C2: -3855,
    C3: -8.5171,
    C4: 0.012378,
    C5: 1,
    minimumTemperature: 172.12,
    maximumTemperature: 417.15,
    pressureAtMinimumTemperature: 1.37e3,
    pressureAtMaximumTemperature: 7.793e6
  },

  Chlorobenzene: {
    name: "Chlorobenzene",
    formula: "C6H5Cl",
    CAS: "108-90-5",
    C1: 54.144,
    C2: -6244.4,
    C3: -4.5343,
    C4: 4.7e-18,
    C5: 6,
    minimumTemperature: 227.95,
    maximumTemperature: 632.35,
    pressureAtMinimumTemperature: 8.45,
    pressureAtMaximumTemperature: 4.529e6
  },

  Chloroethane: {
    name: "Chloroethane",
    formula: "C2H5Cl",
    CAS: "75-00-3",
    C1: 44.677,
    C2: -4026,
    C3: -3.371,
    C4: 2.27e-17,
    C5: 6,
    minimumTemperature: 136.75,
    maximumTemperature: 460.35,
    pressureAtMinimumTemperature: 2.61e-1,
    pressureAtMaximumTemperature: 5.267e6
  },

  Chloroform: {
    name: "Chloroform",
    formula: "CHCl3",
    CAS: "67-66-3",
    C1: 146.43,
    C2: -7792.3,
    C3: -20.614,
    C4: 0.024578,
    C5: 1,
    minimumTemperature: 207.15,
    maximumTemperature: 536.4,
    pressureAtMinimumTemperature: 5.25e1,
    pressureAtMaximumTemperature: 5.554e6
  },

  Chloromethane: {
    name: "Chloromethane",
    formula: "CH3Cl",
    CAS: "74-87-3",
    C1: 44.555,
    C2: -3521.3,
    C3: -3.4258,
    C4: 5.63e-17,
    C5: 6,
    minimumTemperature: 175.45,
    maximumTemperature: 416.25,
    pressureAtMinimumTemperature: 8.84e2,
    pressureAtMaximumTemperature: 6.759e6
  },

  "1Chloropropane": {
    name: "1-Chloropropane",
    formula: "C3H7Cl",
    CAS: "540-54-5",
    C1: 58.3592,
    C2: -5111.33,
    C3: -5.35261,
    C4: 2.47e-17,
    C5: 6,
    minimumTemperature: 150.35,
    maximumTemperature: 503.15,
    pressureAtMinimumTemperature: 8.47e-2,
    pressureAtMaximumTemperature: 4.425e6
  },

  "2Chloropropane": {
    name: "2-Chloropropane",
    formula: "C3H7Cl",
    CAS: "75-29-6",
    C1: 46.854,
    C2: -4445.5,
    C3: -3.6533,
    C4: 1.33e-17,
    C5: 6,
    minimumTemperature: 155.97,
    maximumTemperature: 489,
    pressureAtMinimumTemperature: 9.08e-1,
    pressureAtMaximumTemperature: 4.51e6
  },

  mCresol: {
    name: "m-Cresol",
    formula: "C7H8O",
    CAS: "108-39-4",
    C1: 95.403,
    C2: -10581,
    C3: -10.004,
    C4: 4.3e-18,
    C5: 6,
    minimumTemperature: 285.39,
    maximumTemperature: 705.85,
    pressureAtMinimumTemperature: 5.86,
    pressureAtMaximumTemperature: 4.522e6
  },

  oCresol: {
    name: "o-Cresol",
    formula: "C7H8O",
    CAS: "95-48-7",
    C1: 210.88,
    C2: -13928,
    C3: -29.483,
    C4: 0.025182,
    C5: 1,
    minimumTemperature: 304.19,
    maximumTemperature: 697.55,
    pressureAtMinimumTemperature: 6.53e1,
    pressureAtMaximumTemperature: 5.058e6
  },

  pCresol: {
    name: "p-Cresol",
    formula: "C7H8O",
    CAS: "106-44-5",
    C1: 118.53,
    C2: -11957,
    C3: -13.293,
    C4: 8.7e-18,
    C5: 6,
    minimumTemperature: 307.93,
    maximumTemperature: 704.65,
    pressureAtMinimumTemperature: 3.45e1,
    pressureAtMaximumTemperature: 5.151e6
  },

  Cumene: {
    name: "Cumene",
    formula: "C9H12",
    CAS: "98-82-8",
    C1: 102.81,
    C2: -8674.6,
    C3: -11.922,
    C4: 7.0048e-6,
    C5: 2,
    minimumTemperature: 177.14,
    maximumTemperature: 631,
    pressureAtMinimumTemperature: 4.71e-4,
    pressureAtMaximumTemperature: 3.226e6
  },

  Cyanogen: {
    name: "Cyanogen",
    formula: "C2N2",
    CAS: "460-19-5",
    C1: 39.0596,
    C2: -3473.98,
    C3: -2.48683,
    C4: 2.86e-17,
    C5: 6,
    minimumTemperature: 245.25,
    maximumTemperature: 400.15,
    pressureAtMinimumTemperature: 7.44e4,
    pressureAtMaximumTemperature: 5.924e6
  },

  Cyclobutane: {
    name: "Cyclobutane",
    formula: "C4H8",
    CAS: "287-23-0",
    C1: 85.899,
    C2: -4884.4,
    C3: -10.883,
    C4: 0.014934,
    C5: 1,
    minimumTemperature: 182.48,
    maximumTemperature: 459.93,
    pressureAtMinimumTemperature: 1.8e2,
    pressureAtMaximumTemperature: 4.991e6
  },

  Cyclohexane: {
    name: "Cyclohexane",
    formula: "C6H12",
    CAS: "110-82-7",
    C1: 51.087,
    C2: -5226.4,
    C3: -4.2278,
    C4: 9.76e-18,
    C5: 6,
    minimumTemperature: 279.69,
    maximumTemperature: 553.8,
    pressureAtMinimumTemperature: 5.36e3,
    pressureAtMaximumTemperature: 4.093e6
  },

  Cyclohexanol: {
    name: "Cyclohexanol",
    formula: "C6H12O",
    CAS: "108-93-0",
    C1: 189.19,
    C2: -14337,
    C3: -24.148,
    C4: 0.00001074,
    C5: 2,
    minimumTemperature: 296.6,
    maximumTemperature: 650.1,
    pressureAtMinimumTemperature: 7.65e1,
    pressureAtMaximumTemperature: 4.265e6
  },

  Cyclohexanone: {
    name: "Cyclohexanone",
    formula: "C6H10O",
    CAS: "108-94-1",
    C1: 85.424,
    C2: -7944.4,
    C3: -9.2862,
    C4: 4.9957e-6,
    C5: 2,
    minimumTemperature: 242,
    maximumTemperature: 653,
    pressureAtMinimumTemperature: 6.8,
    pressureAtMaximumTemperature: 3.989e6
  },

  Cyclohexene: {
    name: "Cyclohexene",
    formula: "C6H10",
    CAS: "110-83-8",
    C1: 88.184,
    C2: -6624.9,
    C3: -10.059,
    C4: 8.2566e-6,
    C5: 2,
    minimumTemperature: 169.67,
    maximumTemperature: 560.4,
    pressureAtMinimumTemperature: 1.04e-1,
    pressureAtMaximumTemperature: 4.392e6
  },

  Cyclopentane: {
    name: "Cyclopentane",
    formula: "C5H10",
    CAS: "287-92-3",
    C1: 66.341,
    C2: -5198.5,
    C3: -6.8103,
    C4: 0.000006193,
    C5: 2,
    minimumTemperature: 179.28,
    maximumTemperature: 511.7,
    pressureAtMinimumTemperature: 9.07,
    pressureAtMaximumTemperature: 4.513e6
  },

  Cyclopentene: {
    name: "Cyclopentene",
    formula: "C5H8",
    CAS: "142-29-0",
    C1: 67.952,
    C2: -5187.5,
    C3: -7.0785,
    C4: 6.8165e-6,
    C5: 2,
    minimumTemperature: 138.13,
    maximumTemperature: 507,
    pressureAtMinimumTemperature: 1.28e-2,
    pressureAtMaximumTemperature: 4.799e6
  },

  Cyclopropane: {
    name: "Cyclopropane",
    formula: "C3H6",
    CAS: "75-19-4",
    C1: 40.608,
    C2: -3179.6,
    C3: -2.8937,
    C4: 5.61e-17,
    C5: 6,
    minimumTemperature: 145.59,
    maximumTemperature: 398,
    pressureAtMinimumTemperature: 7.8e1,
    pressureAtMaximumTemperature: 5.494e6
  },

  CyclohexylMercaptan: {
    name: "Cyclohexyl mercaptan",
    formula: "C6H12S",
    CAS: "1569-69-3",
    C1: 85.146,
    C2: -7843.7,
    C3: -9.2982,
    C4: 5.1788e-6,
    C5: 2,
    minimumTemperature: 189.64,
    maximumTemperature: 664,
    pressureAtMinimumTemperature: 8.24e-3,
    pressureAtMaximumTemperature: 3.97e6
  },

  Decanal: {
    name: "Decanal",
    formula: "C10H20O",
    CAS: "112-31-2",
    C1: 93.5742,
    C2: -10403.8,
    C3: -9.79483,
    C4: 4.57e-18,
    C5: 6,
    minimumTemperature: 285,
    maximumTemperature: 674,
    pressureAtMinimumTemperature: 5.51,
    pressureAtMaximumTemperature: 2.6e6
  },

  Decane: {
    name: "Decane",
    formula: "C10H22",
    CAS: "124-18-5",
    C1: 112.73,
    C2: -9749.6,
    C3: -13.245,
    C4: 7.1266e-6,
    C5: 2,
    minimumTemperature: 243.51,
    maximumTemperature: 617.7,
    pressureAtMinimumTemperature: 1.39,
    pressureAtMaximumTemperature: 2.091e6
  },

  DecanoicAcid: {
    name: "Decanoic acid",
    formula: "C10H20O2",
    CAS: "334-48-5",
    C1: 126.405,
    C2: -14864.6,
    C3: -13.9067,
    C4: 2.51e-18,
    C5: 6,
    minimumTemperature: 304.55,
    maximumTemperature: 722.1,
    pressureAtMinimumTemperature: 1.45e-1,
    pressureAtMaximumTemperature: 2.28e6
  },

  "1Decanol": {
    name: "1-Decanol",
    formula: "C10H22O",
    CAS: "112-30-1",
    C1: 156.23933,
    C2: -15212.33492,
    C3: -18.42393,
    C4: 8.5e-18,
    C5: 6,
    minimumTemperature: 280.05,
    maximumTemperature: 688,
    pressureAtMinimumTemperature: 1.5e-1,
    pressureAtMaximumTemperature: 2.308e6
  },

  "1Decene": {
    name: "1-Decene",
    formula: "C10H20",
    CAS: "872-05-9",
    C1: 68.401,
    C2: -7776.9,
    C3: -6.4637,
    C4: 6.38e-18,
    C5: 6,
    minimumTemperature: 206.89,
    maximumTemperature: 616.6,
    pressureAtMinimumTemperature: 2.59e-2,
    pressureAtMaximumTemperature: 2.223e6
  },

  DecylMercaptan: {
    name: "Decyl mercaptan",
    formula: "C10H22S",
    CAS: "143-10-2",
    C1: 91.91,
    C2: -10565,
    C3: -9.5957,
    C4: 5.7e-18,
    C5: 6,
    minimumTemperature: 247.56,
    maximumTemperature: 696,
    pressureAtMinimumTemperature: 2.59e-2,
    pressureAtMaximumTemperature: 2.13e6
  },

  "1Decyne": {
    name: "1-Decyne",
    formula: "C10H18",
    CAS: "764-93-2",
    C1: 142.94,
    C2: -11119,
    C3: -17.818,
    C4: 0.00001102,
    C5: 2,
    minimumTemperature: 229.15,
    maximumTemperature: 619.85,
    pressureAtMinimumTemperature: 1.6e-1,
    pressureAtMaximumTemperature: 2.363e6
  },

  Deuterium: {
    name: "Deuterium",
    formula: "D2",
    CAS: "7782-39-0",
    C1: 18.947,
    C2: -154.47,
    C3: -0.57226,
    C4: 0.038899,
    C5: 1,
    minimumTemperature: 18.73,
    maximumTemperature: 38.35,
    pressureAtMinimumTemperature: 1.72e4,
    pressureAtMaximumTemperature: 1.663e6
  },

  "1,1Dibromoethane": {
    name: "1,1-Dibromoethane",
    formula: "C2H4Br2",
    CAS: "557-91-5",
    C1: 62.711,
    C2: -6503.5,
    C3: -5.7669,
    C4: 1.0427e-6,
    C5: 2,
    minimumTemperature: 210.15,
    maximumTemperature: 628,
    pressureAtMinimumTemperature: 2.64,
    pressureAtMaximumTemperature: 6.034e6
  },

  "1,2Dibromoethane": {
    name: "1,2-Dibromoethane",
    formula: "C2H4Br2",
    CAS: "106-93-4",
    C1: 43.751,
    C2: -5587.7,
    C3: -3.0891,
    C4: 8.2664e-7,
    C5: 2,
    minimumTemperature: 282.85,
    maximumTemperature: 650.15,
    pressureAtMinimumTemperature: 7.53e2,
    pressureAtMaximumTemperature: 5.375e6
  },

  Dibromomethane: {
    name: "Dibromomethane",
    formula: "CH2Br2",
    CAS: "74-95-3",
    C1: 86.295,
    C2: -7010.3,
    C3: -9.5972,
    C4: 6.7794e-6,
    C5: 2,
    minimumTemperature: 220.6,
    maximumTemperature: 611,
    pressureAtMinimumTemperature: 2.13e1,
    pressureAtMaximumTemperature: 7.17e6
  },

  DibutylEther: {
    name: "Dibutyl ether",
    formula: "C8H18O",
    CAS: "142-96-1",
    C1: 72.227,
    C2: -7537.6,
    C3: -7.0596,
    C4: 9.14e-18,
    C5: 6,
    minimumTemperature: 175.3,
    maximumTemperature: 584.1,
    pressureAtMinimumTemperature: 7.14e-4,
    pressureAtMaximumTemperature: 2.459e6
  },

  mDichlorobenzene: {
    name: "m-Dichlorobenzene",
    formula: "C6H4Cl2",
    CAS: "541-73-1",
    C1: 53.187,
    C2: -6827.5,
    C3: -4.3233,
    C4: 2.31e-18,
    C5: 6,
    minimumTemperature: 248.39,
    maximumTemperature: 683.95,
    pressureAtMinimumTemperature: 6.41,
    pressureAtMaximumTemperature: 4.07e6
  },

  oDichlorobenzene: {
    name: "o-Dichlorobenzene",
    formula: "C6H4Cl2",
    CAS: "95-50-1",
    C1: 77.105,
    C2: -8111.1,
    C3: -7.8886,
    C4: 2.7267e-6,
    C5: 2,
    minimumTemperature: 256.15,
    maximumTemperature: 705,
    pressureAtMinimumTemperature: 6.49,
    pressureAtMaximumTemperature: 4.074e6
  },

  pDichlorobenzene: {
    name: "p-Dichlorobenzene",
    formula: "C6H4Cl2",
    CAS: "106-46-7",
    C1: 88.31,
    C2: -8463.4,
    C3: -9.6308,
    C4: 4.5833e-6,
    C5: 2,
    minimumTemperature: 326.14,
    maximumTemperature: 684.75,
    pressureAtMinimumTemperature: 1.23e3,
    pressureAtMaximumTemperature: 4.07e6
  },

  "1,1Dichloroethane": {
    name: "1,1-Dichloroethane",
    formula: "C2H4Cl2",
    CAS: "75-34-3",
    C1: 66.611,
    C2: -5493.1,
    C3: -6.7301,
    C4: 5.3579e-6,
    C5: 2,
    minimumTemperature: 176.19,
    maximumTemperature: 523,
    pressureAtMinimumTemperature: 2.21,
    pressureAtMaximumTemperature: 5.106e6
  },

  "1,2Dichloroethane": {
    name: "1,2-Dichloroethane",
    formula: "C2H4Cl2",
    CAS: "107-06-2",
    C1: 92.355,
    C2: -6920.4,
    C3: -10.651,
    C4: 9.1426e-6,
    C5: 2,
    minimumTemperature: 237.49,
    maximumTemperature: 561.6,
    pressureAtMinimumTemperature: 2.37e2,
    pressureAtMaximumTemperature: 5.318e6
  },

  Dichloromethane: {
    name: "Dichloromethane",
    formula: "CH2Cl2",
    CAS: "75-09-2",
    C1: 101.6,
    C2: -6541.6,
    C3: -12.247,
    C4: 0.000012311,
    C5: 2,
    minimumTemperature: 178.01,
    maximumTemperature: 510,
    pressureAtMinimumTemperature: 5.93,
    pressureAtMaximumTemperature: 6.093e6
  },

  "1,1Dichloropropane": {
    name: "1,1-Dichloropropane",
    formula: "C3H6Cl2",
    CAS: "78-99-9",
    C1: 83.495,
    C2: -6661.4,
    C3: -9.2386,
    C4: 6.7652e-6,
    C5: 2,
    minimumTemperature: 192.5,
    maximumTemperature: 560,
    pressureAtMinimumTemperature: 1.72,
    pressureAtMaximumTemperature: 4.239e6
  },

  "1,2Dichloropropane": {
    name: "1,2-Dichloropropane",
    formula: "C3H6Cl2",
    CAS: "78-87-5",
    C1: 65.955,
    C2: -6015.6,
    C3: -6.5509,
    C4: 4.3172e-6,
    C5: 2,
    minimumTemperature: 172.71,
    maximumTemperature: 572,
    pressureAtMinimumTemperature: 8.25e-2,
    pressureAtMaximumTemperature: 4.232e6
  },

  DiethanolAmine: {
    name: "Diethanol amine",
    formula: "C4H11NO2",
    CAS: "111-42-2",
    C1: 106.38,
    C2: -13714,
    C3: -11.06,
    C4: 3.26e-18,
    C5: 6,
    minimumTemperature: 301.15,
    maximumTemperature: 736.6,
    pressureAtMinimumTemperature: 1.02e-1,
    pressureAtMaximumTemperature: 4.26e6
  },

  DiethylAmine: {
    name: "Diethyl amine",
    formula: "C4H11N",
    CAS: "109-89-7",
    C1: 49.314,
    C2: -4949,
    C3: -3.9256,
    C4: 9.2e-18,
    C5: 6,
    minimumTemperature: 223.35,
    maximumTemperature: 496.6,
    pressureAtMinimumTemperature: 3.74e2,
    pressureAtMaximumTemperature: 3.674e6
  },

  DiethylEther: {
    name: "Diethyl ether",
    formula: "C4H10O",
    CAS: "60-29-7",
    C1: 136.9,
    C2: -6954.3,
    C3: -19.254,
    C4: 0.024508,
    C5: 1,
    minimumTemperature: 156.85,
    maximumTemperature: 466.7,
    pressureAtMinimumTemperature: 3.95e-1,
    pressureAtMaximumTemperature: 3.641e6
  },

  DiethylSulphide: {
    name: "Diethyl sulphide",
    formula: "C4H10S",
    CAS: "352-93-2",
    C1: 46.705,
    C2: -5177.4,
    C3: -3.5985,
    C4: 1.7147e-6,
    C5: 2,
    minimumTemperature: 169.2,
    maximumTemperature: 557.15,
    pressureAtMinimumTemperature: 9.93e-2,
    pressureAtMaximumTemperature: 3.961e6
  },

  "1,1Difluoroethane": {
    name: "1,1-Difluoroethane",
    formula: "C2H4F2",
    CAS: "75-37-6",
    C1: 73.491,
    C2: -4385.9,
    C3: -8.1851,
    C4: 0.000012978,
    C5: 2,
    minimumTemperature: 154.56,
    maximumTemperature: 386.44,
    pressureAtMinimumTemperature: 6.45e1,
    pressureAtMaximumTemperature: 4.507e6
  },

  "1,2Difluoroethane": {
    name: "1,2-Difluoroethane",
    formula: "C2H4F2",
    CAS: "624-72-6",
    C1: 84.625,
    C2: -5217.4,
    C3: -9.871,
    C4: 0.00001305,
    C5: 2,
    minimumTemperature: 179.6,
    maximumTemperature: 445,
    pressureAtMinimumTemperature: 1.17e2,
    pressureAtMaximumTemperature: 4.372e6
  },

  Difluoromethane: {
    name: "Difluoromethane",
    formula: "CH2F2",
    CAS: "75-10-5",
    C1: 69.132,
    C2: -3847.7,
    C3: -7.5868,
    C4: 0.000015065,
    C5: 2,
    minimumTemperature: 136.95,
    maximumTemperature: 351.26,
    pressureAtMinimumTemperature: 5.43e1,
    pressureAtMaximumTemperature: 5.761e6
  },

  DisopropylAmine: {
    name: "Di-sopropyl amine",
    formula: "C6H15N",
    CAS: "108-18-9",
    C1: 462.84,
    C2: -18227,
    C3: -73.734,
    C4: 0.092794,
    C5: 1,
    minimumTemperature: 176.85,
    maximumTemperature: 523.1,
    pressureAtMinimumTemperature: 4.47e-3,
    pressureAtMaximumTemperature: 3.199e6
  },

  DisopropylEther: {
    name: "Di-sopropyl ether",
    formula: "C6H14O",
    CAS: "108-20-3",
    C1: 41.631,
    C2: -4668.7,
    C3: -2.8551,
    C4: 0.00063693,
    C5: 1,
    minimumTemperature: 187.65,
    maximumTemperature: 500.05,
    pressureAtMinimumTemperature: 6.86,
    pressureAtMaximumTemperature: 2.869e6
  },

  DisopropylKetone: {
    name: "Di-sopropyl ketone",
    formula: "C7H14O",
    CAS: "565-80-0",
    C1: 50.868,
    C2: -6036.5,
    C3: -4.066,
    C4: 1.1326e-6,
    C5: 2,
    minimumTemperature: 204.81,
    maximumTemperature: 576,
    pressureAtMinimumTemperature: 8.21e-1,
    pressureAtMaximumTemperature: 3.017e6
  },

  "1,1Dimethoxyethane": {
    name: "1,1-Dimethoxyethane",
    formula: "C4H10O2",
    CAS: "534-15-6",
    C1: 53.637,
    C2: -5251.2,
    C3: -4.5649,
    C4: 1.68e-17,
    C5: 6,
    minimumTemperature: 159.95,
    maximumTemperature: 507.8,
    pressureAtMinimumTemperature: 9.45e-2,
    pressureAtMaximumTemperature: 3.773e6
  },

  "1,2Dimethoxypropane": {
    name: "1,2-Dimethoxypropane",
    formula: "C5H12O2",
    CAS: "7778-85-0",
    C1: 62.097,
    C2: -6174.9,
    C3: -5.715,
    C4: 1.23e-17,
    C5: 6,
    minimumTemperature: 226.1,
    maximumTemperature: 543,
    pressureAtMinimumTemperature: 4.5e1,
    pressureAtMaximumTemperature: 3.447e6
  },

  DimethylAcetylene: {
    name: "Dimethyl acetylene",
    formula: "C4H6",
    CAS: "503-17-3",
    C1: 66.592,
    C2: -4999.8,
    C3: -6.8387,
    C4: 6.6793e-6,
    C5: 2,
    minimumTemperature: 240.91,
    maximumTemperature: 473.2,
    pressureAtMinimumTemperature: 6.12e3,
    pressureAtMaximumTemperature: 4.87e6
  },

  DimethylAmine: {
    name: "Dimethyl amine",
    formula: "C2H7N",
    CAS: "124-40-3",
    C1: 71.738,
    C2: -5302,
    C3: -7.3324,
    C4: 6.42e-17,
    C5: 6,
    minimumTemperature: 180.96,
    maximumTemperature: 437.2,
    pressureAtMinimumTemperature: 7.56e1,
    pressureAtMaximumTemperature: 5.258e6
  },

  "2,3Dimethylbutane": {
    name: "2,3-Dimethylbutane",
    formula: "C6H14",
    CAS: "79-29-8",
    C1: 77.161,
    C2: -5691.1,
    C3: -8.501,
    C4: 8.0325e-6,
    C5: 2,
    minimumTemperature: 145.19,
    maximumTemperature: 500,
    pressureAtMinimumTemperature: 1.52e-2,
    pressureAtMaximumTemperature: 3.13e6
  },

  "1,1Dimethylcyclohexane": {
    name: "1,1-Dimethylcyclohexane",
    formula: "C8H16",
    CAS: "590-66-9",
    C1: 81.184,
    C2: -6927,
    C3: -8.8498,
    C4: 0.000005458,
    C5: 2,
    minimumTemperature: 239.66,
    maximumTemperature: 591.15,
    pressureAtMinimumTemperature: 6.06e1,
    pressureAtMaximumTemperature: 2.939e6
  },

  "cis1,2Dimethylcyclohexane": {
    name: "cis-1,2-Dimethylcyclohexane",
    formula: "C8H16",
    CAS: "2207-01-4",
    C1: 78.952,
    C2: -7075.4,
    C3: -8.4344,
    C4: 4.5035e-6,
    C5: 2,
    minimumTemperature: 223.16,
    maximumTemperature: 606.15,
    pressureAtMinimumTemperature: 6.41,
    pressureAtMaximumTemperature: 2.939e6
  },

  "trans1,2Dimethylcyclohexane": {
    name: "trans-1,2-Dimethylcyclohexane",
    formula: "C8H16",
    CAS: "6876-23-9",
    C1: 78.429,
    C2: -6882.1,
    C3: -8.4129,
    C4: 4.9831e-6,
    C5: 2,
    minimumTemperature: 184.99,
    maximumTemperature: 596.15,
    pressureAtMinimumTemperature: 8.04e-2,
    pressureAtMaximumTemperature: 2.938e6
  },

  DimethylDisulfide: {
    name: "Dimethyl disulfide",
    formula: "C2H6S2",
    CAS: "624-92-0",
    C1: 81.045,
    C2: -6941.3,
    C3: -8.777,
    C4: 5.5501e-6,
    C5: 2,
    minimumTemperature: 188.44,
    maximumTemperature: 615,
    pressureAtMinimumTemperature: 2.07e-1,
    pressureAtMaximumTemperature: 5.363e6
  },

  DimethylEther: {
    name: "Dimethyl ether",
    formula: "C2H60",
    CAS: "115-10-6",
    C1: 44.704,
    C2: -3525.6,
    C3: -3.4444,
    C4: 5.46e-17,
    C5: 6,
    minimumTemperature: 131.65,
    maximumTemperature: 400.1,
    pressureAtMinimumTemperature: 3.05,
    pressureAtMaximumTemperature: 5.274e6
  },

  NNDimethylFormamide: {
    name: "N,N-Dimethyl formamide",
    formula: "C3H7NO",
    CAS: "68-12-2",
    C1: 82.762,
    C2: -7955.5,
    C3: -8.8038,
    C4: 4.2431e-6,
    C5: 2,
    minimumTemperature: 212.72,
    maximumTemperature: 649.6,
    pressureAtMinimumTemperature: 1.95e-1,
    pressureAtMaximumTemperature: 4.365e6
  },

  "2,3Dimethylpentane": {
    name: "2,3-Dimethylpentane",
    formula: "C7H16",
    CAS: "565-59-3",
    C1: 78.335,
    C2: -6348.7,
    C3: -8.5105,
    C4: 6.4311e-6,
    C5: 2,
    minimumTemperature: 160,
    maximumTemperature: 537.3,
    pressureAtMinimumTemperature: 1.26e-2,
    pressureAtMaximumTemperature: 2.882e6
  },

  DimethylPhthalate: {
    name: "Dimethyl phthalate",
    formula: "C10H10O4",
    CAS: "131-11-3",
    C1: 72.517,
    C2: -10415,
    C3: -6.755,
    C4: 1.3269e-6,
    C5: 2,
    minimumTemperature: 274.18,
    maximumTemperature: 766,
    pressureAtMinimumTemperature: 3.72e-2,
    pressureAtMaximumTemperature: 2.779e6
  },

  Dimethylsilane: {
    name: "Dimethylsilane",
    formula: "C2H8Si",
    CAS: "1111-74-6",
    C1: 63.08,
    C2: -4062.3,
    C3: -6.425,
    C4: 1.51e-16,
    C5: 6,
    minimumTemperature: 122.93,
    maximumTemperature: 402,
    pressureAtMinimumTemperature: 4.15e-1,
    pressureAtMaximumTemperature: 3.561e6
  },

  DimethylSulfide: {
    name: "Dimethyl sulfide",
    formula: "C2H6S",
    CAS: "75-18-3",
    C1: 84.39,
    C2: -5740.6,
    C3: -9.6454,
    C4: 0.000010073,
    C5: 2,
    minimumTemperature: 174.88,
    maximumTemperature: 503.04,
    pressureAtMinimumTemperature: 7.86,
    pressureAtMaximumTemperature: 5.533e6
  },

  DimethylSulfoxide: {
    name: "Dimethyl sulfoxide",
    formula: "C2H6OS",
    CAS: "67-68-5",
    C1: 56.273,
    C2: -7620.6,
    C3: -4.6279,
    C4: 4.3819e-7,
    C5: 2,
    minimumTemperature: 291.67,
    maximumTemperature: 729,
    pressureAtMinimumTemperature: 5.02e1,
    pressureAtMaximumTemperature: 5.648e6
  },

  DimethylTerephthalate: {
    name: "Dimethyl terephthalate",
    formula: "C10H10O4",
    CAS: "120-61-6",
    C1: 66.1795,
    C2: -9870.41,
    C3: -5.85599,
    C4: 1.47e-18,
    C5: 6,
    minimumTemperature: 413.79,
    maximumTemperature: 777.4,
    pressureAtMinimumTemperature: 1.15e3,
    pressureAtMaximumTemperature: 2.759e6
  },

  "1,4Dioxane": {
    name: "1,4-Dioxane",
    formula: "C4H8O2",
    CAS: "123-91-1",
    C1: 44.494,
    C2: -5406.7,
    C3: -3.1287,
    C4: 2.89e-18,
    C5: 6,
    minimumTemperature: 284.95,
    maximumTemperature: 587,
    pressureAtMinimumTemperature: 2.53e3,
    pressureAtMaximumTemperature: 5.158e6
  },

  DiphenylEther: {
    name: "Diphenyl ether",
    formula: "C12H10O",
    CAS: "101-84-8",
    C1: 59.969,
    C2: -8585.5,
    C3: -5.1538,
    C4: 2.0e-18,
    C5: 6,
    minimumTemperature: 300.03,
    maximumTemperature: 766.8,
    pressureAtMinimumTemperature: 7.09,
    pressureAtMaximumTemperature: 3.097e6
  },

  DipropylAmine: {
    name: "Dipropyl amine",
    formula: "C6H15N",
    CAS: "142-84-7",
    C1: 54,
    C2: -6018.5,
    C3: -4.4981,
    C4: 9.97e-18,
    C5: 6,
    minimumTemperature: 210.15,
    maximumTemperature: 550,
    pressureAtMinimumTemperature: 3.69,
    pressureAtMaximumTemperature: 3.111e6
  },

  Dodecane: {
    name: "Dodecane",
    formula: "C12H26",
    CAS: "112-40-3",
    C1: 137.47,
    C2: -11976,
    C3: -16.698,
    C4: 8.0906e-6,
    C5: 2,
    minimumTemperature: 263.57,
    maximumTemperature: 658,
    pressureAtMinimumTemperature: 6.15e-1,
    pressureAtMaximumTemperature: 1.822e6
  },

  Eicosane: {
    name: "Eicosane",
    formula: "C20H42",
    CAS: "112-95-8",
    C1: 203.66,
    C2: -19441,
    C3: -25.525,
    C4: 8.8382e-6,
    C5: 2,
    minimumTemperature: 309.58,
    maximumTemperature: 768,
    pressureAtMinimumTemperature: 9.26e-3,
    pressureAtMaximumTemperature: 1.175e6
  },

  Ethane: {
    name: "Ethane",
    formula: "C2H6",
    CAS: "74-84-0",
    C1: 51.857,
    C2: -2598.7,
    C3: -5.1283,
    C4: 0.000014913,
    C5: 2,
    minimumTemperature: 90.35,
    maximumTemperature: 305.32,
    pressureAtMinimumTemperature: 1.13,
    pressureAtMaximumTemperature: 4.852e6
  },

  Ethanol: {
    name: "Ethanol",
    formula: "C2H6O",
    CAS: "64-17-5",
    C1: 73.304,
    C2: -7122.3,
    C3: -7.1424,
    C4: 2.8853e-6,
    C5: 2,
    minimumTemperature: 159.05,
    maximumTemperature: 514,
    pressureAtMinimumTemperature: 4.96e-4,
    pressureAtMaximumTemperature: 6.109e6
  },

  EthylAcetate: {
    name: "Ethyl acetate",
    formula: "C4H8O2",
    CAS: "141-78-6",
    C1: 66.824,
    C2: -6227.6,
    C3: -6.41,
    C4: 1.79e-17,
    C5: 6,
    minimumTemperature: 189.6,
    maximumTemperature: 523.3,
    pressureAtMinimumTemperature: 1.43,
    pressureAtMaximumTemperature: 3.85e6
  },

  EthylAmine: {
    name: "Ethyl amine",
    formula: "C2H7N",
    CAS: "75-04-7",
    C1: 81.56,
    C2: -5596.9,
    C3: -9.0779,
    C4: 0.000008792,
    C5: 2,
    minimumTemperature: 192.15,
    maximumTemperature: 456.15,
    pressureAtMinimumTemperature: 1.52e2,
    pressureAtMaximumTemperature: 5.594e6
  },

  Ethylbenzene: {
    name: "Ethylbenzene",
    formula: "C8H10",
    CAS: "100-41-4",
    C1: 89.063,
    C2: -7733.7,
    C3: -9.917,
    C4: 0.000005986,
    C5: 2,
    minimumTemperature: 178.2,
    maximumTemperature: 617.15,
    pressureAtMinimumTemperature: 3.91e-3,
    pressureAtMaximumTemperature: 3.59e6
  },

  EthylBenzoate: {
    name: "Ethyl benzoate",
    formula: "C9H10O2",
    CAS: "93-89-0",
    C1: 52.923,
    C2: -7531.7,
    C3: -4.2347,
    C4: 1.1835e-6,
    C5: 2,
    minimumTemperature: 238.45,
    maximumTemperature: 698,
    pressureAtMinimumTemperature: 1.69e-1,
    pressureAtMaximumTemperature: 3.203e6
  },

  "2EthylButanoicAcid": {
    name: "2-Ethyl butanoic acid",
    formula: "C6H12O2",
    CAS: "88-09-5",
    C1: 90.464,
    C2: -10243,
    C3: -9.2836,
    C4: 5.26e-18,
    C5: 6,
    minimumTemperature: 258.15,
    maximumTemperature: 655,
    pressureAtMinimumTemperature: 4.63e-1,
    pressureAtMaximumTemperature: 3.403e6
  },

  EthylButyrate: {
    name: "Ethyl butyrate",
    formula: "C6H12O2",
    CAS: "105-54-4",
    C1: 57.661,
    C2: -6346.5,
    C3: -5.032,
    C4: 8.25e-18,
    C5: 6,
    minimumTemperature: 175.15,
    maximumTemperature: 571,
    pressureAtMinimumTemperature: 1.04e-2,
    pressureAtMaximumTemperature: 2.935e6
  },

  Ethylcyclohexane: {
    name: "Ethylcyclohexane",
    formula: "C8H16",
    CAS: "1678-91-7",
    C1: 80.208,
    C2: -7203.2,
    C3: -8.6023,
    C4: 4.5901e-6,
    C5: 2,
    minimumTemperature: 161.84,
    maximumTemperature: 609.15,
    pressureAtMinimumTemperature: 3.57e-4,
    pressureAtMaximumTemperature: 3.041e6
  },

  Ethylcyclopentane: {
    name: "Ethylcyclopentane",
    formula: "C7H14",
    CAS: "1640-89-7",
    C1: 88.671,
    C2: -7012.7,
    C3: -10.045,
    C4: 7.4578e-6,
    C5: 2,
    minimumTemperature: 134.71,
    maximumTemperature: 569.5,
    pressureAtMinimumTemperature: 3.71e-6,
    pressureAtMaximumTemperature: 3.412e6
  },

  Ethylene: {
    name: "Ethylene",
    formula: "C2H4",
    CAS: "74-85-1",
    C1: 53.963,
    C2: -2443,
    C3: -5.5643,
    C4: 0.000019079,
    C5: 2,
    minimumTemperature: 104,
    maximumTemperature: 282.34,
    pressureAtMinimumTemperature: 1.26e2,
    pressureAtMaximumTemperature: 5.032e6
  },

  Ethylenediamine: {
    name: "Ethylenediamine",
    formula: "C2H8N2",
    CAS: "107-15-3",
    C1: 73.51,
    C2: -7572.7,
    C3: -7.1435,
    C4: 1.21e-17,
    C5: 6,
    minimumTemperature: 284.29,
    maximumTemperature: 593,
    pressureAtMinimumTemperature: 6.78e2,
    pressureAtMaximumTemperature: 6.29e6
  },

  EthyleneGlycol: {
    name: "Ethylene glycol",
    formula: "C2H6O2",
    CAS: "107-21-1",
    C1: 84.09,
    C2: -10411,
    C3: -8.1976,
    C4: 1.65e-18,
    C5: 6,
    minimumTemperature: 260.15,
    maximumTemperature: 720,
    pressureAtMinimumTemperature: 2.19e-1,
    pressureAtMaximumTemperature: 8.257e6
  },

  Ethyleneimine: {
    name: "Ethyleneimine",
    formula: "C2H5N",
    CAS: "151-56-4",
    C1: 66.51,
    C2: -6019.2,
    C3: -6.3332,
    C4: 1.04e-17,
    C5: 6,
    minimumTemperature: 195.2,
    maximumTemperature: 537,
    pressureAtMinimumTemperature: 9.71,
    pressureAtMaximumTemperature: 6.85e6
  },

  EthyleneOxide: {
    name: "Ethylene oxide",
    formula: "C2H4O",
    CAS: "75-21-8",
    C1: 91.944,
    C2: -5293.4,
    C3: -11.682,
    C4: 0.014902,
    C5: 1,
    minimumTemperature: 160.65,
    maximumTemperature: 469.15,
    pressureAtMinimumTemperature: 7.79,
    pressureAtMaximumTemperature: 7.255e6
  },

  EthylFormate: {
    name: "Ethyl formate",
    formula: "C3H6O2",
    CAS: "109-94-4",
    C1: 73.833,
    C2: -5817,
    C3: -7.809,
    C4: 0.00000632,
    C5: 2,
    minimumTemperature: 193.55,
    maximumTemperature: 508.4,
    pressureAtMinimumTemperature: 1.81e1,
    pressureAtMaximumTemperature: 4.708e6
  },

  "2EthylHexanoicAcid": {
    name: "2-Ethyl hexanoic acid",
    formula: "C8H16O2",
    CAS: "149-57-5",
    C1: 122.364,
    C2: -13308.8,
    C3: -13.5709,
    C4: 6.42e-18,
    C5: 6,
    minimumTemperature: 155.15,
    maximumTemperature: 674.6,
    pressureAtMinimumTemperature: 1.44e-14,
    pressureAtMaximumTemperature: 2.78e6
  },

  EthylhexylEther: {
    name: "Ethylhexyl ether",
    formula: "C8H18O",
    CAS: "5756-43-6",
    C1: 77.523,
    C2: -7978.8,
    C3: -7.7757,
    C4: 1.01e-17,
    C5: 6,
    minimumTemperature: 180,
    maximumTemperature: 583,
    pressureAtMinimumTemperature: 7.6e-4,
    pressureAtMaximumTemperature: 2.46e6
  },

  EthylisopropylEther: {
    name: "Ethylisopropyl ether",
    formula: "C5H12O",
    CAS: "625-54-7",
    C1: 57.723,
    C2: -5236.9,
    C3: -5.2136,
    C4: 2.3e-17,
    C5: 6,
    minimumTemperature: 140,
    maximumTemperature: 489,
    pressureAtMinimumTemperature: 4.31e-3,
    pressureAtMaximumTemperature: 3.414e6
  },

  EthylisopropylKetone: {
    name: "Ethylisopropyl ketone",
    formula: "C6H12O",
    CAS: "565-69-5",
    C1: 57.459,
    C2: -6356.8,
    C3: -4.9545,
    C4: 5.2e-18,
    C5: 6,
    minimumTemperature: 204.15,
    maximumTemperature: 567,
    pressureAtMinimumTemperature: 9.7e-1,
    pressureAtMaximumTemperature: 3.293e6
  },

  EthylMercaptan: {
    name: "Ethyl mercaptan",
    formula: "C2H6S",
    CAS: "75-08-1",
    C1: 65.551,
    C2: -5027.4,
    C3: -6.6853,
    C4: 6.3208e-6,
    C5: 2,
    minimumTemperature: 125.26,
    maximumTemperature: 499.15,
    pressureAtMinimumTemperature: 1.14e-3,
    pressureAtMaximumTemperature: 5.492e6
  },

  EthylPropionate: {
    name: "Ethyl propionate",
    formula: "C5H10O2",
    CAS: "105-37-3",
    C1: 105.64,
    C2: -8007,
    C3: -12.477,
    C4: 0.000009,
    C5: 2,
    minimumTemperature: 199.25,
    maximumTemperature: 546,
    pressureAtMinimumTemperature: 7.8e-1,
    pressureAtMaximumTemperature: 3.336e6
  },

  EthylpropylEther: {
    name: "Ethylpropyl ether",
    formula: "C5H12O",
    CAS: "628-32-0",
    C1: 86.898,
    C2: -6646.4,
    C3: -9.5758,
    C4: 5.96e-17,
    C5: 6,
    minimumTemperature: 145.65,
    maximumTemperature: 500.23,
    pressureAtMinimumTemperature: 1.61e-3,
    pressureAtMaximumTemperature: 3.372e6
  },

  Ethyltrichlorosilane: {
    name: "Ethyltrichlorosilane",
    formula: "C2H5Cl3Si",
    CAS: "115-21-9",
    C1: 61.6271,
    C2: -6095.88,
    C3: -5.69714,
    C4: 1.06e-17,
    C5: 6,
    minimumTemperature: 167.55,
    maximumTemperature: 559.95,
    pressureAtMinimumTemperature: 1.96e-2,
    pressureAtMaximumTemperature: 3.321e6
  },

  Fluorine: {
    name: "Fluorine",
    formula: "F2",
    CAS: "7782-41-4",
    C1: 42.393,
    C2: -1103.3,
    C3: -4.1203,
    C4: 0.000057815,
    C5: 2,
    minimumTemperature: 53.48,
    maximumTemperature: 144.12,
    pressureAtMinimumTemperature: 2.53e2,
    pressureAtMaximumTemperature: 5.167e6
  },

  Fluorobenzene: {
    name: "Fluorobenzene",
    formula: "C6H5F",
    CAS: "462-06-6",
    C1: 51.915,
    C2: -5439,
    C3: -4.2896,
    C4: 8.75e-18,
    C5: 6,
    minimumTemperature: 230.94,
    maximumTemperature: 560.09,
    pressureAtMinimumTemperature: 1.51e2,
    pressureAtMaximumTemperature: 4.544e6
  },

  Fluoroethane: {
    name: "Fluoroethane",
    formula: "C2H5F",
    CAS: "353-36-6",
    C1: 38.593,
    C2: -3123.34,
    C3: -2.53014,
    C4: 5.3e-17,
    C5: 6,
    minimumTemperature: 129.95,
    maximumTemperature: 375.31,
    pressureAtMinimumTemperature: 9.43,
    pressureAtMaximumTemperature: 4.98e6
  },

  Fluoromethane: {
    name: "Fluoromethane",
    formula: "CH3F",
    CAS: "593-53-3",
    C1: 41.2744,
    C2: -2676.65,
    C3: -3.03914,
    C4: 2.45e-16,
    C5: 6,
    minimumTemperature: 131.35,
    maximumTemperature: 317.42,
    pressureAtMinimumTemperature: 4.34e2,
    pressureAtMaximumTemperature: 5.875e6
  },

  Formaldehyde: {
    name: "Formaldehyde",
    formula: "CH2O",
    CAS: "50-00-0",
    C1: 49.3632,
    C2: -3847.87,
    C3: -4.09834,
    C4: 4.64e-17,
    C5: 6,
    minimumTemperature: 155.15,
    maximumTemperature: 420,
    pressureAtMinimumTemperature: 4.89e1,
    pressureAtMaximumTemperature: 6.59e6
  },

  Formamide: {
    name: "Formamide",
    formula: "CH3NO",
    CAS: "75-12-7",
    C1: 100.3,
    C2: -10763,
    C3: -10.946,
    C4: 3.8503e-6,
    C5: 2,
    minimumTemperature: 275.6,
    maximumTemperature: 771,
    pressureAtMinimumTemperature: 1.04,
    pressureAtMaximumTemperature: 7.751e6
  },

  FormicAcid: {
    name: "Formic acid",
    formula: "CH2O2",
    CAS: "64-18-6",
    C1: 43.80666,
    C2: -5131.03,
    C3: -3.18777,
    C4: 2.37819e-6,
    C5: 2,
    minimumTemperature: 281.45,
    maximumTemperature: 588,
    pressureAtMinimumTemperature: 2.41e3,
    pressureAtMaximumTemperature: 5.81e6
  },

  Furan: {
    name: "Furan",
    formula: "C4H4O",
    CAS: "110-00-9",
    C1: 74.738,
    C2: -5417,
    C3: -8.0636,
    C4: 0.00000747,
    C5: 2,
    minimumTemperature: 187.55,
    maximumTemperature: 490.15,
    pressureAtMinimumTemperature: 5e1,
    pressureAtMaximumTemperature: 5.55e6
  },

  Helium4: {
    name: "Helium-4",
    formula: "He",
    CAS: "7440-59-7",
    C1: 11.533,
    C2: -8.99,
    C3: 0.6724,
    C4: 0.2743,
    C5: 1,
    minimumTemperature: 1.76,
    maximumTemperature: 5.2,
    pressureAtMinimumTemperature: 1.46e3,
    pressureAtMaximumTemperature: 2.284e5
  },

  Heptadecane: {
    name: "Heptadecane",
    formula: "C17H36",
    CAS: "629-78-7",
    C1: 156.95,
    C2: -15557,
    C3: -18.966,
    C4: 6.4559e-6,
    C5: 2,
    minimumTemperature: 295.13,
    maximumTemperature: 736,
    pressureAtMinimumTemperature: 4.65e-2,
    pressureAtMaximumTemperature: 1.344e6
  },

  Heptanal: {
    name: "Heptanal",
    formula: "C7H14O",
    CAS: "111-71-7",
    C1: 55.3058,
    C2: -6694.68,
    C3: -4.64122,
    C4: 5.28e-18,
    C5: 6,
    minimumTemperature: 229.8,
    maximumTemperature: 620,
    pressureAtMinimumTemperature: 2.56,
    pressureAtMaximumTemperature: 3.16e6
  },

  Heptane: {
    name: "Heptane",
    formula: "C7H16",
    CAS: "142-82-5",
    C1: 87.829,
    C2: -6996.4,
    C3: -9.8802,
    C4: 7.2099e-6,
    C5: 2,
    minimumTemperature: 182.57,
    maximumTemperature: 540.2,
    pressureAtMinimumTemperature: 1.83e-1,
    pressureAtMaximumTemperature: 2.719e6
  },

  HeptanoicAcid: {
    name: "Heptanoic acid",
    formula: "C7H14O2",
    CAS: "111-14-8",
    C1: 112.372,
    C2: -12660.1,
    C3: -12.147,
    C4: 4.39e-18,
    C5: 6,
    minimumTemperature: 265.83,
    maximumTemperature: 677.3,
    pressureAtMinimumTemperature: 4.66e-2,
    pressureAtMaximumTemperature: 3.042e6
  },

  "1Heptanol": {
    name: "1-Heptanol",
    formula: "C7H16O",
    CAS: "111-70-6",
    C1: 147.41,
    C2: -13466,
    C3: -17.353,
    C4: 1.13e-17,
    C5: 6,
    minimumTemperature: 239.15,
    maximumTemperature: 632.3,
    pressureAtMinimumTemperature: 1.95e-2,
    pressureAtMaximumTemperature: 3.013e6
  },

  "2Heptanol": {
    name: "2-Heptanol",
    formula: "C7H16O",
    CAS: "543-49-7",
    C1: 153.088,
    C2: -12618.7,
    C3: -18.7479,
    C4: 7.45073e-6,
    C5: 2,
    minimumTemperature: 220,
    maximumTemperature: 608.3,
    pressureAtMinimumTemperature: 6.55e-3,
    pressureAtMaximumTemperature: 3.0e6
  },

  "3Heptanone": {
    name: "3-Heptanone",
    formula: "C7H14O",
    CAS: "106-35-4",
    C1: 78.463,
    C2: -8077.2,
    C3: -7.9062,
    C4: 8.05e-18,
    C5: 6,
    minimumTemperature: 234.15,
    maximumTemperature: 606.6,
    pressureAtMinimumTemperature: 2.3,
    pressureAtMaximumTemperature: 2.919e6
  },

  "2Heptanone": {
    name: "2-Heptanone",
    formula: "C7H14O",
    CAS: "110-43-0",
    C1: 75.494,
    C2: -7896.5,
    C3: -7.5047,
    C4: 8.91e-18,
    C5: 6,
    minimumTemperature: 238.15,
    maximumTemperature: 611.4,
    pressureAtMinimumTemperature: 3.54,
    pressureAtMaximumTemperature: 2.946e6
  },

  "1Heptene": {
    name: "1-Heptene",
    formula: "C7H14",
    CAS: "592-76-7",
    C1: 65.922,
    C2: -6189,
    C3: -6.3629,
    C4: 2.01e-17,
    C5: 6,
    minimumTemperature: 154.12,
    maximumTemperature: 537.4,
    pressureAtMinimumTemperature: 1.86e-3,
    pressureAtMaximumTemperature: 2.921e6
  },

  HeptylMercaptan: {
    name: "Heptyl mercaptan",
    formula: "C7H16S",
    CAS: "1639-09-4",
    C1: 79.858,
    C2: -8501.8,
    C3: -8.1043,
    C4: 8.15e-18,
    C5: 6,
    minimumTemperature: 229.92,
    maximumTemperature: 645,
    pressureAtMinimumTemperature: 3.05e-1,
    pressureAtMaximumTemperature: 2.772e6
  },

  "1Heptyne": {
    name: "1-Heptyne ",
    formula: "C7H12",
    CAS: "628-71-7",
    C1: 59.083,
    C2: -6031.8,
    C3: -5.3072,
    C4: 1.44e-17,
    C5: 6,
    minimumTemperature: 192.22,
    maximumTemperature: 547,
    pressureAtMinimumTemperature: 8.15e-1,
    pressureAtMaximumTemperature: 3.209e6
  },

  Hexadecane: {
    name: "Hexadecane",
    formula: "C16H34",
    CAS: "544-76-3",
    C1: 156.06,
    C2: -15015,
    C3: -18.941,
    C4: 6.8172e-6,
    C5: 2,
    minimumTemperature: 291.31,
    maximumTemperature: 723,
    pressureAtMinimumTemperature: 9.23e-2,
    pressureAtMaximumTemperature: 1.411e6
  },

  Hexanal: {
    name: "Hexanal",
    formula: "C6H12O",
    CAS: "66-25-1",
    C1: 58.7734,
    C2: -6529.3,
    C3: -5.17151,
    C4: 6.95e-18,
    C5: 6,
    minimumTemperature: 214.93,
    maximumTemperature: 594,
    pressureAtMinimumTemperature: 1.86,
    pressureAtMaximumTemperature: 3.46e6
  },

  Hexane: {
    name: "Hexane",
    formula: "C6H14",
    CAS: "110-54-3",
    C1: 104.65,
    C2: -6995.5,
    C3: -12.702,
    C4: 0.000012381,
    C5: 2,
    minimumTemperature: 177.83,
    maximumTemperature: 507.6,
    pressureAtMinimumTemperature: 9.02e-1,
    pressureAtMaximumTemperature: 3.045e6
  },

  HexanoicAcid: {
    name: "Hexanoic acid",
    formula: "C6H12O2",
    CAS: "142-62-1",
    C1: 98.3767,
    C2: -11394,
    C3: -10.2239,
    C4: 3.29e-18,
    C5: 6,
    minimumTemperature: 269.25,
    maximumTemperature: 660.2,
    pressureAtMinimumTemperature: 3.17e-1,
    pressureAtMaximumTemperature: 3.309e6
  },

  "1Hexanol": {
    name: "1-Hexanol",
    formula: "C6H14O",
    CAS: "111-27-3",
    C1: 135.42149,
    C2: -12288.40621,
    C3: -15.73191,
    C4: 1.27e-17,
    C5: 6,
    minimumTemperature: 228.55,
    maximumTemperature: 611.3,
    pressureAtMinimumTemperature: 2.25e-2,
    pressureAtMaximumTemperature: 3.446e6
  },

  "2Hexanol": {
    name: "2-Hexanol",
    formula: "C6H14O",
    CAS: "626-93-7",
    C1: 122.695,
    C2: -10870,
    C3: -14.192,
    C4: 0.000003871,
    C5: 2,
    minimumTemperature: 223,
    maximumTemperature: 585.3,
    pressureAtMinimumTemperature: 7.46e-2,
    pressureAtMaximumTemperature: 3.323e6
  },

  "2Hexanone": {
    name: "2-Hexanone",
    formula: "C6H12O",
    CAS: "591-78-6",
    C1: 107.44,
    C2: -8528.6,
    C3: -12.679,
    C4: 8.4606e-6,
    C5: 2,
    minimumTemperature: 217.35,
    maximumTemperature: 587.61,
    pressureAtMinimumTemperature: 1.45,
    pressureAtMaximumTemperature: 3.286e6
  },

  "3Hexanone": {
    name: "3-Hexanone",
    formula: "C6H12O",
    CAS: "589-38-8",
    C1: 73.155,
    C2: -7242.9,
    C3: -7.2569,
    C4: 1.27e-17,
    C5: 6,
    minimumTemperature: 217.5,
    maximumTemperature: 582.82,
    pressureAtMinimumTemperature: 2.22,
    pressureAtMaximumTemperature: 3.322e6
  },

  "1Hexene": {
    name: "1-Hexene",
    formula: "C6H12",
    CAS: "592-41-6",
    C1: 51.9766,
    C2: -5104.66,
    C3: -4.34844,
    C4: 1.17e-17,
    C5: 6,
    minimumTemperature: 133.39,
    maximumTemperature: 504,
    pressureAtMinimumTemperature: 5.16e-4,
    pressureAtMaximumTemperature: 3.21e6
  },

  "3Hexyne": {
    name: "3-Hexyne",
    formula: "C6H10",
    CAS: "928-49-4",
    C1: 47.091,
    C2: -5104,
    C3: -3.6371,
    C4: 0.00051621,
    C5: 1,
    minimumTemperature: 170.05,
    maximumTemperature: 544,
    pressureAtMinimumTemperature: 2.2e-1,
    pressureAtMaximumTemperature: 3.54e6
  },

  HexylMercaptan: {
    name: "Hexyl mercaptan",
    formula: "C6H14S",
    CAS: "111-31-9",
    C1: 68.467,
    C2: -7390.5,
    C3: -6.5456,
    C4: 7.76e-18,
    C5: 6,
    minimumTemperature: 192.62,
    maximumTemperature: 623,
    pressureAtMinimumTemperature: 1.31e-2,
    pressureAtMaximumTemperature: 3.079e6
  },

  "1Hexyne": {
    name: "1-Hexyne",
    formula: "C6H10",
    CAS: "693-02-7",
    C1: 133.2,
    C2: -7492.9,
    C3: -18.405,
    C4: 0.022062,
    C5: 1,
    minimumTemperature: 141.25,
    maximumTemperature: 516.2,
    pressureAtMinimumTemperature: 3.92e-4,
    pressureAtMaximumTemperature: 3.635e6
  },

  "2Hexyne": {
    name: "2-Hexyne",
    formula: "C6H10",
    CAS: "764-35-2",
    C1: 123.71,
    C2: -7639,
    C3: -16.451,
    C4: 0.016495,
    C5: 1,
    minimumTemperature: 183.65,
    maximumTemperature: 549,
    pressureAtMinimumTemperature: 5.4e-1,
    pressureAtMaximumTemperature: 3.53e6
  },

  Hydrazine: {
    name: "Hydrazine",
    formula: "H4N2",
    CAS: "302-01-2",
    C1: 76.858,
    C2: -7245.2,
    C3: -8.22,
    C4: 0.0061557,
    C5: 1,
    minimumTemperature: 274.69,
    maximumTemperature: 653.15,
    pressureAtMinimumTemperature: 4.08e2,
    pressureAtMaximumTemperature: 1.473e7
  },

  Hydrogen: {
    name: "Hydrogen",
    formula: "H2",
    CAS: "1333-74-0",
    C1: 12.69,
    C2: -94.896,
    C3: 1.1125,
    C4: 0.00032915,
    C5: 2,
    minimumTemperature: 13.95,
    maximumTemperature: 33.19,
    pressureAtMinimumTemperature: 7.21e3,
    pressureAtMaximumTemperature: 1.315e6
  },

  HydrogenBromide: {
    name: "Hydrogen bromide",
    formula: "BrH",
    CAS: "10035-10-6",
    C1: 29.315,
    C2: -2424.5,
    C3: -1.1354,
    C4: 2.38e-18,
    C5: 6,
    minimumTemperature: 185.15,
    maximumTemperature: 363.15,
    pressureAtMinimumTemperature: 2.95e4,
    pressureAtMaximumTemperature: 8.463e6
  },

  HydrogenChloride: {
    name: "Hydrogen chloride",
    formula: "ClH",
    CAS: "7647-01-0",
    C1: 104.27,
    C2: -3731.2,
    C3: -15.047,
    C4: 0.03134,
    C5: 1,
    minimumTemperature: 158.97,
    maximumTemperature: 324.65,
    pressureAtMinimumTemperature: 1.35e4,
    pressureAtMaximumTemperature: 8.356e6
  },

  HydrogenCyanide: {
    name: "Hydrogen cyanide",
    formula: "CHN",
    CAS: "74-90-8",
    C1: 36.75,
    C2: -3927.1,
    C3: -2.1245,
    C4: 3.89e-17,
    C5: 6,
    minimumTemperature: 259.83,
    maximumTemperature: 456.65,
    pressureAtMinimumTemperature: 1.87e4,
    pressureAtMaximumTemperature: 5.353e6
  },

  HydrogenFluoride: {
    name: "Hydrogen fluoride",
    formula: "FH",
    CAS: "7664-39-3",
    C1: 59.544,
    C2: -4143.8,
    C3: -6.1764,
    C4: 0.000014161,
    C5: 2,
    minimumTemperature: 189.79,
    maximumTemperature: 461.15,
    pressureAtMinimumTemperature: 3.37e2,
    pressureAtMaximumTemperature: 6.487e6
  },

  HydrogenSulfide: {
    name: "Hydrogen sulfide",
    formula: "H2S",
    CAS: "7783-06-04",
    C1: 85.584,
    C2: -3839.9,
    C3: -11.199,
    C4: 0.018848,
    C5: 1,
    minimumTemperature: 187.68,
    maximumTemperature: 373.53,
    pressureAtMinimumTemperature: 2.29e4,
    pressureAtMaximumTemperature: 88.999e6
  },

  IsobutyricAcid: {
    name: "Isobutyric acid",
    formula: "C4H8O2",
    CAS: "79-31-2",
    C1: 110.38,
    C2: -10540,
    C3: -12.262,
    C4: 1.43e-17,
    C5: 6,
    minimumTemperature: 227.15,
    maximumTemperature: 605,
    pressureAtMinimumTemperature: 7.82e-2,
    pressureAtMaximumTemperature: 3.683e6
  },

  IsopropylAmine: {
    name: "Isopropyl amine",
    formula: "C3H9N",
    CAS: "75-31-0",
    C1: 136.66,
    C2: -7201.5,
    C3: -18.934,
    C4: 0.022255,
    C5: 1,
    minimumTemperature: 177.95,
    maximumTemperature: 471.85,
    pressureAtMinimumTemperature: 7.73,
    pressureAtMaximumTemperature: 4.54e6
  },

  MalonicAcid: {
    name: "Malonic acid",
    formula: "C3H4O4",
    CAS: "141-82-2",
    C1: 119.172,
    C2: -15688.8,
    C3: -12.6757,
    C4: 1.55e-18,
    C5: 6,
    minimumTemperature: 409.15,
    maximumTemperature: 834,
    pressureAtMinimumTemperature: 9.97e1,
    pressureAtMaximumTemperature: 6.097e6
  },

  MethacrylicAcid: {
    name: "Methacrylic acid",
    formula: "C4H6O2",
    CAS: "79-41-4",
    C1: 109.53,
    C2: -10410,
    C3: -12.289,
    C4: 0.000003199,
    C5: 2,
    minimumTemperature: 288.15,
    maximumTemperature: 662,
    pressureAtMinimumTemperature: 5.86e1,
    pressureAtMaximumTemperature: 4.812e6
  },

  Methane: {
    name: "Methane",
    formula: "CH4",
    CAS: "74-82-8",
    C1: 39.205,
    C2: -1324.4,
    C3: -3.4366,
    C4: 0.000031019,
    C5: 2,
    minimumTemperature: 90.69,
    maximumTemperature: 190.56,
    pressureAtMinimumTemperature: 1.17e4,
    pressureAtMaximumTemperature: 4.59e6
  },

  Methanol: {
    name: "Methanol",
    formula: "CH4O",
    CAS: "67-56-1",
    C1: 82.718,
    C2: -6904.5,
    C3: -8.8622,
    C4: 7.4664e-6,
    C5: 2,
    minimumTemperature: 175.47,
    maximumTemperature: 512.5,
    pressureAtMinimumTemperature: 1.11e-1,
    pressureAtMaximumTemperature: 8.145e6
  },

  NMethylAcetamide: {
    name: "N-Methyl acetamide",
    formula: "C3H7NO",
    CAS: "79-16-3",
    C1: 79.128,
    C2: -9523.9,
    C3: -7.7355,
    C4: 3.16e-18,
    C5: 6,
    minimumTemperature: 301.15,
    maximumTemperature: 718,
    pressureAtMinimumTemperature: 2.86e1,
    pressureAtMaximumTemperature: 4.997e6
  },

  MethylAcetate: {
    name: "Methyl acetate",
    formula: "C3H6O2",
    CAS: "79-20-9",
    C1: 61.267,
    C2: -5618.6,
    C3: -5.6473,
    C4: 2.11e-17,
    C5: 6,
    minimumTemperature: 175.15,
    maximumTemperature: 506.55,
    pressureAtMinimumTemperature: 1.02,
    pressureAtMaximumTemperature: 4.695e6
  },

  MethylAcetylene: {
    name: "Methyl acetylene",
    formula: "C3H4",
    CAS: "74-99-7",
    C1: 50.242,
    C2: -3811.9,
    C3: -4.2526,
    C4: 6.53e-17,
    C5: 6,
    minimumTemperature: 170.45,
    maximumTemperature: 402.4,
    pressureAtMinimumTemperature: 4.15e2,
    pressureAtMaximumTemperature: 5.619e6
  },

  MethylAcrylate: {
    name: "Methyl acrylate",
    formula: "C4H6O2",
    CAS: "96-33-3",
    C1: 107.69,
    C2: -7027.2,
    C3: -13.916,
    C4: 0.015185,
    C5: 1,
    minimumTemperature: 196.32,
    maximumTemperature: 536,
    pressureAtMinimumTemperature: 4.07,
    pressureAtMaximumTemperature: 4.277e6
  },

  MethylAmine: {
    name: "Methyl amine",
    formula: "CH5N",
    CAS: "74-89-5",
    C1: 75.206,
    C2: -5082.8,
    C3: -8.0919,
    C4: 0.000008113,
    C5: 2,
    minimumTemperature: 179.69,
    maximumTemperature: 430.05,
    pressureAtMinimumTemperature: 1.77e2,
    pressureAtMaximumTemperature: 7.414e6
  },

  MethylBenzoate: {
    name: "Methyl benzoate",
    formula: "C8H8O2",
    CAS: "93-58-3",
    C1: 84.828,
    C2: -9334.7,
    C3: -8.7063,
    C4: 6.17e-18,
    C5: 6,
    minimumTemperature: 260.75,
    maximumTemperature: 693,
    pressureAtMinimumTemperature: 1.81,
    pressureAtMaximumTemperature: 3.589e6
  },

  "3Methyl1,2butadiene": {
    name: "3-Methyl-1,2-butadiene",
    formula: "C5H8",
    CAS: "598-25-4",
    C1: 66.575,
    C2: -5213.4,
    C3: -6.7693,
    C4: 4.8106e-6,
    C5: 2,
    minimumTemperature: 159.53,
    maximumTemperature: 490,
    pressureAtMinimumTemperature: 7.28e-1,
    pressureAtMaximumTemperature: 3.831e6
  },

  "2Methylbutane": {
    name: "2-Methylbutane",
    formula: "C5H12",
    CAS: "78-78-4",
    C1: 71.308,
    C2: -4976,
    C3: -7.7169,
    C4: 8.7271e-6,
    C5: 2,
    minimumTemperature: 113.25,
    maximumTemperature: 460.4,
    pressureAtMinimumTemperature: 1.21e-4,
    pressureAtMaximumTemperature: 3.366e6
  },

  "2MethylbutanoicAcid": {
    name: "2-Methylbutanoic acid",
    formula: "C5H10O2",
    CAS: "116-53-0",
    C1: 85.383,
    C2: -9575.4,
    C3: -8.6164,
    C4: 5.61e-18,
    C5: 6,
    minimumTemperature: 193,
    maximumTemperature: 643,
    pressureAtMinimumTemperature: 6.94e-5,
    pressureAtMaximumTemperature: 3.886e6
  },

  "3Methyl1butanol": {
    name: "3-Methyl-1-butanol",
    formula: "C5H12O",
    CAS: "123-51-3",
    C1: 117.074,
    C2: -10743.2,
    C3: -13.1654,
    C4: 1.17e-17,
    C5: 6,
    minimumTemperature: 155.95,
    maximumTemperature: 577.2,
    pressureAtMinimumTemperature: 1.14e-8,
    pressureAtMaximumTemperature: 3.933e6
  },

  "2Methyl1butene": {
    name: "2-Methyl-1-butene",
    formula: "C5H10",
    CAS: "563-46-2",
    C1: 93.131,
    C2: -5525.4,
    C3: -11.852,
    C4: 0.014205,
    C5: 1,
    minimumTemperature: 135.58,
    maximumTemperature: 465,
    pressureAtMinimumTemperature: 2.05e-2,
    pressureAtMaximumTemperature: 3.465e6
  },

  "2Methyl2butene": {
    name: "2-Methyl-2-butene",
    formula: "C5H10",
    CAS: "513-35-9",
    C1: 83.927,
    C2: -5640.5,
    C3: -9.6453,
    C4: 0.000011121,
    C5: 2,
    minimumTemperature: 139.39,
    maximumTemperature: 470,
    pressureAtMinimumTemperature: 1.94e-2,
    pressureAtMaximumTemperature: 3.394e6
  },

  "2Methyl1butene3yne": {
    name: "2-Methyl-1-butene-3-yne",
    formula: "C5H6",
    CAS: "78-80-8",
    C1: 95.453,
    C2: -5448.8,
    C3: -12.384,
    C4: 0.015643,
    C5: 1,
    minimumTemperature: 160.15,
    maximumTemperature: 492,
    pressureAtMinimumTemperature: 2.92,
    pressureAtMaximumTemperature: 4.469e6
  },

  MethylbutylEther: {
    name: "Methylbutyl ether",
    formula: "C5H12O",
    CAS: "628-28-4",
    C1: 60.164,
    C2: -5621.7,
    C3: -5.53,
    C4: 1.86e-17,
    C5: 6,
    minimumTemperature: 157.48,
    maximumTemperature: 512.74,
    pressureAtMinimumTemperature: 2.99e-2,
    pressureAtMaximumTemperature: 3.377e6
  },

  MethylbutylSulfide: {
    name: "Methylbutyl sulfide",
    formula: "C5H12S",
    CAS: "628-29-5",
    C1: 96.344,
    C2: -7856.3,
    C3: -11.058,
    C4: 0.000007308,
    C5: 2,
    minimumTemperature: 175.3,
    maximumTemperature: 593,
    pressureAtMinimumTemperature: 4.61e-3,
    pressureAtMaximumTemperature: 3.464e6
  },

  "3Methyl1butyne": {
    name: "3-Methyl-1-butyne",
    formula: "C5H8",
    CAS: "598-23-2",
    C1: 69.459,
    C2: -5250,
    C3: -7.1125,
    C4: 7.93e-17,
    C5: 6,
    minimumTemperature: 183.45,
    maximumTemperature: 463.2,
    pressureAtMinimumTemperature: 4.36e1,
    pressureAtMaximumTemperature: 4.199e6
  },

  MethylButyrate: {
    name: "Methyl butyrate",
    formula: "C5H10O2",
    CAS: "623-42-7",
    C1: 71.87,
    C2: -6885.7,
    C3: -7.0944,
    C4: 1.49e-17,
    C5: 6,
    minimumTemperature: 187.35,
    maximumTemperature: 554.5,
    pressureAtMinimumTemperature: 1.34e-1,
    pressureAtMaximumTemperature: 3.48e6
  },

  Methylchlorosilicane: {
    name: "Methylchlorosilane",
    formula: "CH5ClSi",
    CAS: "993-00-0",
    C1: 95.984,
    C2: -5401.7,
    C3: -11.829,
    C4: 0.000018092,
    C5: 2,
    minimumTemperature: 139.05,
    maximumTemperature: 442,
    pressureAtMinimumTemperature: 4.12e-1,
    pressureAtMaximumTemperature: 4.17e6
  },

  Methylcyclohexane: {
    name: "Methylcyclohexane",
    formula: "C7H14",
    CAS: "108-87-2",
    C1: 92.684,
    C2: -7080.8,
    C3: -10.695,
    C4: 8.1366e-6,
    C5: 2,
    minimumTemperature: 146.58,
    maximumTemperature: 572.1,
    pressureAtMinimumTemperature: 1.52e-4,
    pressureAtMaximumTemperature: 3.486e6
  },

  "1Methylcyclohexanol": {
    name: "1-Methylcyclohexanol",
    formula: "C7H14O",
    CAS: "590-67-0",
    C1: 134.63,
    C2: -10682,
    C3: -16.511,
    C4: 8.4427e-6,
    C5: 2,
    minimumTemperature: 299.15,
    maximumTemperature: 686,
    pressureAtMinimumTemperature: 2.57e2,
    pressureAtMaximumTemperature: 3.994e6
  },

  cis2Methylcyclohexanol: {
    name: "cis-2-Methylcyclohexanol",
    formula: "C7H14O",
    CAS: "7443-70-1",
    C1: 125.1,
    C2: -10288,
    C3: -15.157,
    C4: 0.000010918,
    C5: 2,
    minimumTemperature: 280.15,
    maximumTemperature: 614,
    pressureAtMinimumTemperature: 4.56e1,
    pressureAtMaximumTemperature: 3.807e6
  },

  trans2Methylcyclohexanol: {
    name: "trans-2-Methylcyclohexanol",
    formula: "C7H14O",
    CAS: "7443-52-9",
    C1: 54.179,
    C2: -7477.2,
    C3: -4.22,
    C4: 3.52e-18,
    C5: 6,
    minimumTemperature: 269.15,
    maximumTemperature: 617,
    pressureAtMinimumTemperature: 1.62e1,
    pressureAtMaximumTemperature: 3.767e6
  },

  Methylcyclopentane: {
    name: "Methylcyclopentane",
    formula: "C6H12",
    CAS: "96-37-7",
    C1: 55.368,
    C2: -5149.8,
    C3: -5.0136,
    C4: 0.000003222,
    C5: 2,
    minimumTemperature: 130.73,
    maximumTemperature: 532.7,
    pressureAtMinimumTemperature: 2.25e-4,
    pressureAtMaximumTemperature: 3.759e6
  },

  "1Methylcyclopentene": {
    name: "1-Methylcyclopentene",
    formula: "C6H10",
    CAS: "693-89-0",
    C1: 52.732,
    C2: -5286.9,
    C3: -4.4509,
    C4: 1.09e-17,
    C5: 6,
    minimumTemperature: 146.62,
    maximumTemperature: 542,
    pressureAtMinimumTemperature: 3.98e-3,
    pressureAtMaximumTemperature: 4.13e6
  },

  "3Methylcyclopentene": {
    name: "3-Methylcyclopentene",
    formula: "C6H10",
    CAS: "1120-62-3",
    C1: 52.601,
    C2: -5120.3,
    C3: -4.4554,
    C4: 1.33e-17,
    C5: 6,
    minimumTemperature: 168.54,
    maximumTemperature: 526,
    pressureAtMinimumTemperature: 5.37e-1,
    pressureAtMaximumTemperature: 4.129e6
  },

  Methyldichlorosilane: {
    name: "Methyldichlorosilane",
    formula: "CH4Cl2Si",
    CAS: "75-54-7",
    C1: 79.788,
    C2: -5420,
    C3: -9.0702,
    C4: 0.000011489,
    C5: 2,
    minimumTemperature: 182.55,
    maximumTemperature: 483,
    pressureAtMinimumTemperature: 2.58e1,
    pressureAtMaximumTemperature: 3.964e6
  },

  MethylethylEther: {
    name: "Methylethyl ether",
    formula: "C3H8O",
    CAS: "540-67-0",
    C1: 78.586,
    C2: -5176.3,
    C3: -8.7501,
    C4: 9.1727e-6,
    C5: 2,
    minimumTemperature: 160,
    maximumTemperature: 437.8,
    pressureAtMinimumTemperature: 7.85,
    pressureAtMaximumTemperature: 4.433e6
  },

  MethylethylKetone: {
    name: "Methylethyl ketone",
    formula: "C4H8O",
    CAS: "78-93-3",
    C1: 72.698,
    C2: -6143.6,
    C3: -7.5779,
    C4: 5.6476e-6,
    C5: 2,
    minimumTemperature: 186.48,
    maximumTemperature: 535.5,
    pressureAtMinimumTemperature: 1.39,
    pressureAtMaximumTemperature: 4.12e6
  },

  MethylethylSulfide: {
    name: "Methylethyl sulfide",
    formula: "C3H8S",
    CAS: "624-89-5",
    C1: 79.07,
    C2: -6114.1,
    C3: -8.631,
    C4: 6.5333e-6,
    C5: 2,
    minimumTemperature: 167.23,
    maximumTemperature: 533,
    pressureAtMinimumTemperature: 2.25e-1,
    pressureAtMaximumTemperature: 4.261e6
  },

  MethylFormate: {
    name: "Methyl formate",
    formula: "C2H4O2",
    CAS: "107-31-3",
    C1: 77.184,
    C2: -5606.1,
    C3: -8.392,
    C4: 7.8468e-6,
    C5: 2,
    minimumTemperature: 174.15,
    maximumTemperature: 487.2,
    pressureAtMinimumTemperature: 6.88,
    pressureAtMaximumTemperature: 5.983e6
  },

  MethylisobutylEther: {
    name: "Methylisobutyl ether",
    formula: "C5H12O",
    CAS: "625-44-5",
    C1: 57.984,
    C2: -5339.6,
    C3: -5.2362,
    C4: 2.08e-17,
    C5: 6,
    minimumTemperature: 188,
    maximumTemperature: 497,
    pressureAtMinimumTemperature: 8.7,
    pressureAtMaximumTemperature: 3.416e6
  },

  MethylisobutylKetone: {
    name: "Methylisobutyl ketone",
    formula: "C6H12O",
    CAS: "108-10-1",
    C1: 80.503,
    C2: -7421.8,
    C3: -8.379,
    C4: 1.81e-17,
    C5: 6,
    minimumTemperature: 189.15,
    maximumTemperature: 574.6,
    pressureAtMinimumTemperature: 6.99e-2,
    pressureAtMaximumTemperature: 3.272e6
  },

  MethylIsocyanate: {
    name: "Methyl Isocyanate",
    formula: "C2H3NO",
    CAS: "624-83-9",
    C1: 57.612,
    C2: -5197.9,
    C3: -5.1269,
    C4: 2.17e-17,
    C5: 6,
    minimumTemperature: 256.15,
    maximumTemperature: 488,
    pressureAtMinimumTemperature: 7.28e3,
    pressureAtMaximumTemperature: 5.48e6
  },

  MethylisopropylEther: {
    name: "Methylisopropyl ether",
    formula: "C4H10O",
    CAS: "598-53-8",
    C1: 53.867,
    C2: -4701,
    C3: -4.7052,
    C4: 2.88e-17,
    C5: 6,
    minimumTemperature: 127.93,
    maximumTemperature: 464.48,
    pressureAtMinimumTemperature: 3.32e-3,
    pressureAtMaximumTemperature: 3.764e6
  },

  MethylisopropylKetone: {
    name: "Methylisopropyl ketone",
    formula: "C5H10O",
    CAS: "563-80-4",
    C1: 45.242,
    C2: -5324.4,
    C3: -3.2551,
    C4: 3.04e-18,
    C5: 6,
    minimumTemperature: 180.15,
    maximumTemperature: 553.4,
    pressureAtMinimumTemperature: 2.95e-1,
    pressureAtMaximumTemperature: 3.792e6
  },

  MethylisopropylSulfide: {
    name: "Methylisopropyl sulfide",
    formula: "C4H10S",
    CAS: "1551-21-9",
    C1: 52.82,
    C2: -5437.7,
    C3: -4.442,
    C4: 9.51e-18,
    C5: 6,
    minimumTemperature: 171.64,
    maximumTemperature: 553.1,
    pressureAtMinimumTemperature: 1.8e-1,
    pressureAtMaximumTemperature: 4.022e6
  },

  MethylMercaptan: {
    name: "Methyl mercaptan",
    formula: "CH4S",
    CAS: "74-93-1",
    C1: 54.15,
    C2: -4337.7,
    C3: -4.8127,
    C4: 4.5e-17,
    C5: 6,
    minimumTemperature: 150.18,
    maximumTemperature: 469.95,
    pressureAtMinimumTemperature: 3.15,
    pressureAtMaximumTemperature: 7.231e6
  },

  MethylMethacrylate: {
    name: "Methyl methacrylate",
    formula: "C5H8O2",
    CAS: "80-62-6",
    C1: 107.36,
    C2: -8085.3,
    C3: -12.72,
    C4: 8.3307e-6,
    C5: 2,
    minimumTemperature: 224.95,
    maximumTemperature: 566,
    pressureAtMinimumTemperature: 1.91e1,
    pressureAtMaximumTemperature: 3.674e6
  },

  "2MethyloctanoicAcid": {
    name: "2-Methyloctanoic acid",
    formula: "C9H18O2",
    CAS: "3004-93-1",
    C1: 105.7,
    C2: -12458,
    C3: -11.234,
    C4: 4.46e-18,
    C5: 6,
    minimumTemperature: 240,
    maximumTemperature: 694,
    pressureAtMinimumTemperature: 4.19e-4,
    pressureAtMaximumTemperature: 2.545e6
  },

  "2Methylpentane": {
    name: "2-Methylpentane",
    formula: "C6H14",
    CAS: "107-83-5",
    C1: 53.579,
    C2: -5041.2,
    C3: -4.6404,
    C4: 1.94e-17,
    C5: 6,
    minimumTemperature: 119.55,
    maximumTemperature: 497.7,
    pressureAtMinimumTemperature: 2.07e-5,
    pressureAtMaximumTemperature: 3.044e6
  },

  MethylPentylEther: {
    name: "Methyl pentyl ether",
    formula: "C6H14O",
    CAS: "628-80-8",
    C1: 61.907,
    C2: -6188.9,
    C3: -5.706,
    C4: 1.18e-17,
    C5: 6,
    minimumTemperature: 176,
    maximumTemperature: 546.49,
    pressureAtMinimumTemperature: 6.33e-2,
    pressureAtMaximumTemperature: 3.041e6
  },

  "2Methylpropane": {
    name: "2-Methylpropane",
    formula: "C4H10",
    CAS: "75-28-5",
    C1: 108.43,
    C2: -5039.9,
    C3: -15.012,
    C4: 0.022725,
    C5: 1,
    minimumTemperature: 113.54,
    maximumTemperature: 407.8,
    pressureAtMinimumTemperature: 1.21e-2,
    pressureAtMaximumTemperature: 3.63e6
  },

  "2Methyl2propanol": {
    name: "2-Methyl-2-propanol",
    formula: "C4H10O",
    CAS: "75-65-0",
    C1: 172.27,
    C2: -11589,
    C3: -22.113,
    C4: 0.000013703,
    C5: 2,
    minimumTemperature: 298.97,
    maximumTemperature: 506.2,
    pressureAtMinimumTemperature: 5.88e3,
    pressureAtMaximumTemperature: 3.957e6
  },

  "2MethylPropene": {
    name: "2-Methyl propene",
    formula: "C4H8",
    CAS: "115-11-7",
    C1: 78.01,
    C2: -4634.1,
    C3: -8.9575,
    C4: 0.000013413,
    C5: 2,
    minimumTemperature: 132.81,
    maximumTemperature: 417.9,
    pressureAtMinimumTemperature: 6.45e-1,
    pressureAtMaximumTemperature: 4.004e6
  },

  MethylPropionate: {
    name: "Methyl propionate",
    formula: "C4H8O2",
    CAS: "554-12-1",
    C1: 70.717,
    C2: -6439.7,
    C3: -6.9845,
    C4: 2.01e-17,
    C5: 6,
    minimumTemperature: 185.65,
    maximumTemperature: 530.6,
    pressureAtMinimumTemperature: 6.34e-1,
    pressureAtMaximumTemperature: 4.028e6
  },

  MethylpropylEther: {
    name: "Methylpropyl ether",
    formula: "C4H10O",
    CAS: "557-17-5",
    C1: 67.942,
    C2: -5419.1,
    C3: -6.8067,
    C4: 4.78e-17,
    C5: 6,
    minimumTemperature: 133.97,
    maximumTemperature: 476.25,
    pressureAtMinimumTemperature: 2.9e-3,
    pressureAtMaximumTemperature: 3.802e6
  },

  MethylpropylSulfide: {
    name: "Methylpropyl sulfide",
    formula: "C4H10S",
    CAS: "3877-15-4",
    C1: 83.711,
    C2: -6786.9,
    C3: -9.2526,
    C4: 6.6666e-6,
    C5: 2,
    minimumTemperature: 160.17,
    maximumTemperature: 565,
    pressureAtMinimumTemperature: 4.26e-3,
    pressureAtMaximumTemperature: 3.972e6
  },

  Methylsilane: {
    name: "Methylsilane",
    formula: "CH6Si",
    CAS: "992-94-9",
    C1: 37.205,
    C2: -2590.3,
    C3: -2.5993,
    C4: 6.0508e-6,
    C5: 2,
    minimumTemperature: 116.34,
    maximumTemperature: 352.5,
    pressureAtMinimumTemperature: 1.43e1,
    pressureAtMaximumTemperature: 4.702e6
  },

  alphaMethylStyrene: {
    name: "alpha-Methyl styrene",
    formula: "C9H10",
    CAS: "98-83-9",
    C1: 56.485,
    C2: -6954.2,
    C3: -4.7889,
    C4: 2.78e-18,
    C5: 6,
    minimumTemperature: 249.95,
    maximumTemperature: 654,
    pressureAtMinimumTemperature: 9.23,
    pressureAtMaximumTemperature: 3.341e6
  },

  MethylTertbutylEther: {
    name: "Methyl tert-butyl ether",
    formula: "C5H12O",
    CAS: "1634-04-4",
    C1: 57.1299,
    C2: -5200.7,
    C3: -5.13976,
    C4: 1.65e-17,
    C5: 6,
    minimumTemperature: 164.55,
    maximumTemperature: 497.1,
    pressureAtMinimumTemperature: 4.94e-1,
    pressureAtMaximumTemperature: 3.286e6
  },

  MethylVinylEther: {
    name: "Methyl vinyl ether",
    formula: "C3H6O",
    CAS: "107-25-5",
    C1: 51.085,
    C2: -4271,
    C3: -4.307,
    C4: 3.05e-17,
    C5: 6,
    minimumTemperature: 151.15,
    maximumTemperature: 437,
    pressureAtMinimumTemperature: 3.37,
    pressureAtMaximumTemperature: 4.583e6
  },

  Naphthalene: {
    name: "Naphthalene",
    formula: "C10H8",
    CAS: "91-20-3",
    C1: 62.964,
    C2: -8137.5,
    C3: -5.6317,
    C4: 2.27e-18,
    C5: 6,
    minimumTemperature: 353.43,
    maximumTemperature: 748.4,
    pressureAtMinimumTemperature: 9.91e2,
    pressureAtMaximumTemperature: 4.069e6
  },

  Neon: {
    name: "Neon",
    formula: "Ne",
    CAS: "7440-01-9",
    C1: 29.755,
    C2: -271.06,
    C3: -2.6081,
    C4: 0.000527,
    C5: 2,
    minimumTemperature: 24.56,
    maximumTemperature: 44.4,
    pressureAtMinimumTemperature: 4.38e4,
    pressureAtMaximumTemperature: 2.665e6
  },

  Nitroethane: {
    name: "Nitroethane",
    formula: "C2H5NO2",
    CAS: "79-24-3",
    C1: 75.632,
    C2: -7202.3,
    C3: -7.6464,
    C4: 1.83e-17,
    C5: 6,
    minimumTemperature: 183.63,
    maximumTemperature: 593,
    pressureAtMinimumTemperature: 3.18e-2,
    pressureAtMaximumTemperature: 5.159e6
  },

  Nitrogen: {
    name: "Nitrogen",
    formula: "N2",
    CAS: "7727-37-9",
    C1: 58.282,
    C2: -1084.1,
    C3: -8.3144,
    C4: 0.044127,
    C5: 1,
    minimumTemperature: 63.15,
    maximumTemperature: 126.2,
    pressureAtMinimumTemperature: 1.25e4,
    pressureAtMaximumTemperature: 3.391e6
  },

  NitrogenTrifluoride: {
    name: "Nitrogen trifluoride",
    formula: "F3N",
    CAS: "7783-54-2",
    C1: 68.149,
    C2: -2257.9,
    C3: -8.9118,
    C4: 0.023233,
    C5: 1,
    minimumTemperature: 66.46,
    maximumTemperature: 234,
    pressureAtMinimumTemperature: 1.86e-1,
    pressureAtMaximumTemperature: 4.5e6
  },

  Nitromethane: {
    name: "Nitromethane",
    formula: "CH3NO2",
    CAS: "75-52-5",
    C1: 57.278,
    C2: -6089,
    C3: -4.9821,
    C4: 1.22e-17,
    C5: 6,
    minimumTemperature: 244.6,
    maximumTemperature: 588.15,
    pressureAtMinimumTemperature: 1.47e2,
    pressureAtMaximumTemperature: 6.309e6
  },

  NitrousOxide: {
    name: "Nitrous oxide",
    formula: "N2O",
    CAS: "10024-97-2",
    C1: 96.512,
    C2: -4045,
    C3: -12.277,
    C4: 0.00002886,
    C5: 2,
    minimumTemperature: 182.3,
    maximumTemperature: 309.57,
    pressureAtMinimumTemperature: 8.69e4,
    pressureAtMaximumTemperature: 7.278e6
  },

  NitricOxide: {
    name: "Nitric oxide",
    formula: "NO",
    CAS: "10102-43-9",
    C1: 72.974,
    C2: -2650,
    C3: -8.261,
    C4: 9.7e-15,
    C5: 6,
    minimumTemperature: 109.5,
    maximumTemperature: 180.15,
    pressureAtMinimumTemperature: 2.2e4,
    pressureAtMaximumTemperature: 6.516e6
  },

  Nonadecane: {
    name: "Nonadecane",
    formula: "C19H40",
    CAS: "629-92-5",
    C1: 182.54,
    C2: -17897,
    C3: -22.498,
    C4: 7.4008e-6,
    C5: 2,
    minimumTemperature: 305.04,
    maximumTemperature: 758,
    pressureAtMinimumTemperature: 1.59e-2,
    pressureAtMaximumTemperature: 1.208e6
  },

  Nonanal: {
    name: "Nonanal",
    formula: "C9H18O",
    CAS: "124-19-6",
    C1: 80.3832,
    C2: -9096.15,
    C3: -8.03581,
    C4: 4.71e-18,
    C5: 6,
    minimumTemperature: 267.3,
    maximumTemperature: 658.5,
    pressureAtMinimumTemperature: 4.25,
    pressureAtMaximumTemperature: 2.68e6
  },

  Nonane: {
    name: "Nonane",
    formula: "C9H20",
    CAS: "111-84-2",
    C1: 109.35,
    C2: -9030.4,
    C3: -12.882,
    C4: 7.8544e-6,
    C5: 2,
    minimumTemperature: 219.66,
    maximumTemperature: 594.6,
    pressureAtMinimumTemperature: 4.31e-1,
    pressureAtMaximumTemperature: 2.305e6
  },

  NonanoicAcid: {
    name: "Nonanoic acid",
    formula: "C9H18O2",
    CAS: "112-05-0",
    C1: 123.374,
    C2: -14215.3,
    C3: -13.5607,
    C4: 3.17e-18,
    C5: 6,
    minimumTemperature: 285.55,
    maximumTemperature: 710.7,
    pressureAtMinimumTemperature: 4.58e-2,
    pressureAtMaximumTemperature: 2.513e6
  },

  "1Nonanol": {
    name: "1-Nonanol",
    formula: "C9H20O",
    CAS: "143-08-8",
    C1: 162.854,
    C2: -15204.55331,
    C3: -19.42436,
    C4: 1.07e-17,
    C5: 6,
    minimumTemperature: 268.15,
    maximumTemperature: 670.9,
    pressureAtMinimumTemperature: 8.58e-2,
    pressureAtMaximumTemperature: 2.528e6
  },

  "2Nonanol": {
    name: "2-Nonanol",
    formula: "C9H20O",
    CAS: "628-99-9",
    C1: 213.069,
    C2: -16246,
    C3: -27.6195,
    C4: 1.31827e-5,
    C5: 2,
    minimumTemperature: 238.15,
    maximumTemperature: 649.5,
    pressureAtMinimumTemperature: 3.85e-3,
    pressureAtMaximumTemperature: 2.54e6
  },

  "1Nonene": {
    name: "1-Nonene",
    formula: "C9H18",
    CAS: "124-11-8",
    C1: 63.313,
    C2: -7040.4,
    C3: -5.8055,
    C4: 7.58e-18,
    C5: 6,
    minimumTemperature: 191.91,
    maximumTemperature: 593.1,
    pressureAtMinimumTemperature: 2.04e-2,
    pressureAtMaximumTemperature: 2.427e6
  },

  NonylMercaptan: {
    name: "Nonyl mercaptan",
    formula: "C9H20S",
    CAS: "1455-21-6",
    C1: 106.2,
    C2: -10982,
    C3: -11.696,
    C4: 8.9e-18,
    C5: 6,
    minimumTemperature: 253.05,
    maximumTemperature: 681,
    pressureAtMinimumTemperature: 1.47e-1,
    pressureAtMaximumTemperature: 2.33e6
  },

  "1Nonyne": {
    name: "1-Nonyne",
    formula: "C9H16",
    CAS: "3452-09-3",
    C1: 114.77,
    C2: -9430.8,
    C3: -13.631,
    C4: 8.1918e-6,
    C5: 2,
    minimumTemperature: 223.15,
    maximumTemperature: 598.05,
    pressureAtMinimumTemperature: 4.5e-1,
    pressureAtMaximumTemperature: 2.619e6
  },

  Octadecane: {
    name: "Octadecane",
    formula: "C18H38",
    CAS: "593-45-3",
    C1: 157.68,
    C2: -16093,
    C3: -18.954,
    C4: 5.9272e-6,
    C5: 2,
    minimumTemperature: 301.31,
    maximumTemperature: 747,
    pressureAtMinimumTemperature: 3.39e-2,
    pressureAtMaximumTemperature: 1.255e6
  },

  Octanal: {
    name: "Octanal",
    formula: "C8H16O",
    CAS: "124-13-0",
    C1: 74.0298,
    C2: -8302.12,
    C3: -7.19776,
    C4: 5.31e-18,
    C5: 6,
    minimumTemperature: 251.65,
    maximumTemperature: 638.9,
    pressureAtMinimumTemperature: 3.49,
    pressureAtMaximumTemperature: 2.96e6
  },

  Octane: {
    name: "Octane",
    formula: "C8H18",
    CAS: "111-65-9",
    C1: 96.084,
    C2: -7900.2,
    C3: -11.003,
    C4: 7.1802e-6,
    C5: 2,
    minimumTemperature: 216.38,
    maximumTemperature: 568.7,
    pressureAtMinimumTemperature: 2.11,
    pressureAtMaximumTemperature: 2.467e6
  },

  OctanoicAcid: {
    name: "Octanoic acid",
    formula: "C8H16O2",
    CAS: "124-07-2",
    C1: 116.477,
    C2: -13300.4,
    C3: -12.6746,
    C4: 3.98e-18,
    C5: 6,
    minimumTemperature: 289.65,
    maximumTemperature: 694.26,
    pressureAtMinimumTemperature: 2.76e-1,
    pressureAtMaximumTemperature: 2.779e6
  },

  "1Octanol": {
    name: "1-Octanol",
    formula: "C8H18O",
    CAS: "111-87-5",
    C1: 144.11083,
    C2: -13667.15667,
    C3: -16.82611,
    C4: 9.37e-18,
    C5: 6,
    minimumTemperature: 257.65,
    maximumTemperature: 652.3,
    pressureAtMinimumTemperature: 9.6e-2,
    pressureAtMaximumTemperature: 2.781e6
  },

  "2Octanol": {
    name: "2-Octanol",
    formula: "C8H18O",
    CAS: "123-96-6",
    C1: 185.828,
    C2: -14520.2,
    C3: -23.6236,
    C4: 1.08854e-5,
    C5: 2,
    minimumTemperature: 241.55,
    maximumTemperature: 629.8,
    pressureAtMinimumTemperature: 3.79e-2,
    pressureAtMaximumTemperature: 2.749e6
  },

  "2Octanone": {
    name: "2-Octanone",
    formula: "C8H16O",
    CAS: "111-13-7",
    C1: 63.775,
    C2: -7711.3,
    C3: -5.7359,
    C4: 3.09e-18,
    C5: 6,
    minimumTemperature: 252.85,
    maximumTemperature: 632.7,
    pressureAtMinimumTemperature: 4.68,
    pressureAtMaximumTemperature: 2.647e6
  },

  "3Octanone": {
    name: "3-Octanone",
    formula: "C8H16O",
    CAS: "106-68-3",
    C1: 72.382,
    C2: -8054.8,
    C3: -7.0002,
    C4: 5.83e-18,
    C5: 6,
    minimumTemperature: 255.55,
    maximumTemperature: 627.7,
    pressureAtMinimumTemperature: 7.84,
    pressureAtMaximumTemperature: 2.705e6
  },

  "1Octene": {
    name: "1-Octene",
    formula: "C8H16",
    CAS: "111-66-0",
    C1: 74.936,
    C2: -7155.9,
    C3: -7.5843,
    C4: 1.71e-17,
    C5: 6,
    minimumTemperature: 171.45,
    maximumTemperature: 566.9,
    pressureAtMinimumTemperature: 2.98e-3,
    pressureAtMaximumTemperature: 2.663e6
  },

  OctylMercaptan: {
    name: "Octyl mercaptan",
    formula: "C8H18S",
    CAS: "111-88-6",
    C1: 78.368,
    C2: -8855.4,
    C3: -7.8202,
    C4: 5.66e-18,
    C5: 6,
    minimumTemperature: 223.95,
    maximumTemperature: 667.3,
    pressureAtMinimumTemperature: 3.05e-2,
    pressureAtMaximumTemperature: 2.523e6
  },

  "1Octyne": {
    name: "1-Octyne",
    formula: "C8H14",
    CAS: "629-05-0",
    C1: 64.612,
    C2: -6802.5,
    C3: -6.0261,
    C4: 1.1e-17,
    C5: 6,
    minimumTemperature: 193.55,
    maximumTemperature: 574,
    pressureAtMinimumTemperature: 1.04e-1,
    pressureAtMaximumTemperature: 2.88e6
  },

  OxalicAcid: {
    name: "Oxalic acid",
    formula: "C2H2O4",
    CAS: "144-62-7",
    C1: 107.476,
    C2: -12833.4,
    C3: -11.3837,
    C4: 1.34e-18,
    C5: 6,
    minimumTemperature: 462.65,
    maximumTemperature: 828,
    pressureAtMinimumTemperature: 1.97e4,
    pressureAtMaximumTemperature: 8.203e6
  },

  Oxygen: {
    name: "Oxygen",
    formula: "O2",
    CAS: "7782-44-7",
    C1: 51.245,
    C2: -1200.2,
    C3: -6.4361,
    C4: 0.028405,
    C5: 1,
    minimumTemperature: 54.36,
    maximumTemperature: 154.58,
    pressureAtMinimumTemperature: 1.48e2,
    pressureAtMaximumTemperature: 5.021e6
  },

  Ozone: {
    name: "Ozone",
    formula: "O3",
    CAS: "10028-15-6",
    C1: 40.067,
    C2: -2204.8,
    C3: -2.9351,
    C4: 7.75e-16,
    C5: 6,
    minimumTemperature: 80.15,
    maximumTemperature: 261,
    pressureAtMinimumTemperature: 7.35e-1,
    pressureAtMaximumTemperature: 5.566e6
  },

  Pentadecane: {
    name: "Pentadecane",
    formula: "C15H32",
    CAS: "629-62-9",
    C1: 135.57,
    C2: -13478,
    C3: -16.022,
    C4: 5.6136e-6,
    C5: 2,
    minimumTemperature: 283.07,
    maximumTemperature: 708,
    pressureAtMinimumTemperature: 1.29e-1,
    pressureAtMaximumTemperature: 1.474e6
  },

  Pentanal: {
    name: "Pentanal",
    formula: "C5H10O",
    CAS: "110-62-3",
    C1: 28.3041,
    C2: -4657.56,
    C3: -0.732149,
    C4: -8.31e-18,
    C5: 6,
    minimumTemperature: 191.59,
    maximumTemperature: 566.1,
    pressureAtMinimumTemperature: 1.16,
    pressureAtMaximumTemperature: 3.845e6
  },

  Pentane: {
    name: "Pentane",
    formula: "C5H12",
    CAS: "109-66-0",
    C1: 78.741,
    C2: -5420.3,
    C3: -8.8253,
    C4: 9.6171e-6,
    C5: 2,
    minimumTemperature: 143.42,
    maximumTemperature: 469.7,
    pressureAtMinimumTemperature: 6.86e-2,
    pressureAtMaximumTemperature: 3.364e6
  },

  PentanoicAcid: {
    name: "Pentanoic acid",
    formula: "C5H10O2",
    CAS: "109-52-4",
    C1: 93.2079,
    C2: -10470.5,
    C3: -9.61345,
    C4: 5.62e-18,
    C5: 6,
    minimumTemperature: 239.15,
    maximumTemperature: 639.16,
    pressureAtMinimumTemperature: 3.97e-2,
    pressureAtMaximumTemperature: 3.63e6
  },

  "1Pentanol": {
    name: "1-Pentanol",
    formula: "C5H12O",
    CAS: "71-41-0",
    C1: 114.74801,
    C2: -10643.3,
    C3: -12.85754,
    C4: 1.25e-17,
    C5: 6,
    minimumTemperature: 195.56,
    pressureAtMinimumTemperature: 5.47e-4,
    maximumTemperature: 588.1,
    pressureAtMaximumTemperature: 3.897e6
  },

  "2Pentanol": {
    name: "2-Pentanol",
    formula: "C5H12O",
    CAS: "6032-29-7",
    C1: 116.828,
    C2: -10453,
    C3: -13.1768,
    C4: 1.07e-17,
    C5: 6,
    minimumTemperature: 200,
    maximumTemperature: 561,
    pressureAtMinimumTemperature: 5.24e-3,
    pressureAtMaximumTemperature: 3.699e6
  },

  "2Pentanone": {
    name: "2-Pentanone",
    formula: "C5H10O",
    CAS: "107-87-9",
    C1: 84.635,
    C2: -7078.4,
    C3: -9.3,
    C4: 6.2702e-6,
    C5: 2,
    minimumTemperature: 196.29,
    maximumTemperature: 561.08,
    pressureAtMinimumTemperature: 7.52e-1,
    pressureAtMaximumTemperature: 3.706e6
  },

  "3Pentanone": {
    name: "3-Pentanone",
    formula: "C5H10O",
    CAS: "96-22-0",
    C1: 44.286,
    C2: -5415.1,
    C3: -3.0913,
    C4: 1.86e-18,
    C5: 6,
    minimumTemperature: 234.18,
    maximumTemperature: 560.95,
    pressureAtMinimumTemperature: 7.34e1,
    pressureAtMaximumTemperature: 3.699e6
  },

  "1Pentene": {
    name: "1-Pentene",
    formula: "C5H10",
    CAS: "109-67-1",
    C1: 46.994,
    C2: -4289.5,
    C3: -3.7345,
    C4: 2.54e-17,
    C5: 6,
    minimumTemperature: 108.02,
    maximumTemperature: 464.8,
    pressureAtMinimumTemperature: 3.71e-5,
    pressureAtMaximumTemperature: 3.562e6
  },

  "2PentylMercaptan": {
    name: "2-Pentyl mercaptan",
    formula: "C5H12S",
    CAS: "2084-19-7",
    C1: 58.985,
    C2: -6193.1,
    C3: -5.2746,
    C4: 7.4e-18,
    C5: 6,
    minimumTemperature: 160.75,
    maximumTemperature: 584.3,
    pressureAtMinimumTemperature: 1.77e-3,
    pressureAtMaximumTemperature: 3.537e6
  },

  PentylMercaptan: {
    name: "Pentyl mercaptan",
    formula: "C5H12S",
    CAS: "110-66-7",
    C1: 67.309,
    C2: -6880.8,
    C3: -6.4449,
    C4: 1.01e-17,
    C5: 6,
    minimumTemperature: 197.45,
    maximumTemperature: 598,
    pressureAtMinimumTemperature: 0.201,
    pressureAtMaximumTemperature: 3.473e6
  },

  "1Pentyne": {
    name: "1-Pentyne",
    formula: "C5H8",
    CAS: "627-19-0",
    C1: 82.805,
    C2: -5683.8,
    C3: -9.4301,
    C4: 0.000010767,
    C5: 2,
    minimumTemperature: 167.45,
    maximumTemperature: 481.2,
    pressureAtMinimumTemperature: 2.4,
    pressureAtMaximumTemperature: 4.17e6
  },

  "2Pentyne": {
    name: "2-Pentyne",
    formula: "C5H8",
    CAS: "627-21-4",
    C1: 137.29,
    C2: -7447.1,
    C3: -19.01,
    C4: 0.021415,
    C5: 1,
    minimumTemperature: 163.83,
    maximumTemperature: 519,
    pressureAtMinimumTemperature: 2.05e-1,
    pressureAtMaximumTemperature: 4.02e6
  },

  Phenanthrene: {
    name: "Phenanthrene",
    formula: "C14H10",
    CAS: "85-01-8",
    C1: 72.958,
    C2: -10943,
    C3: -6.7902,
    C4: 1.09e-18,
    C5: 6,
    minimumTemperature: 372.38,
    maximumTemperature: 869,
    pressureAtMinimumTemperature: 2.93e1,
    pressureAtMaximumTemperature: 2.902e6
  },

  Phenol: {
    name: "Phenol",
    formula: "C6H6O",
    CAS: "108-95-2",
    C1: 95.444,
    C2: -10113,
    C3: -10.09,
    C4: 6.76e-18,
    C5: 6,
    minimumTemperature: 314.06,
    maximumTemperature: 694.25,
    pressureAtMinimumTemperature: 1.88e2,
    pressureAtMaximumTemperature: 6.058e6
  },

  PhenylIsocyanate: {
    name: "Phenyl isocyanate",
    formula: "C7H5NO",
    CAS: "103-71-9",
    C1: 86.779,
    C2: -8101.8,
    C3: -9.5303,
    C4: 6.1367e-6,
    C5: 2,
    minimumTemperature: 243.15,
    pressureAtMinimumTemperature: 4.33,
    maximumTemperature: 653,
    pressureAtMaximumTemperature: 4.063e6
  },

  PhthalicAnhydride: {
    name: "Phthalic anhydride",
    formula: "C8H4O3",
    CAS: "85-44-9",
    C1: 126.5,
    C2: -12551,
    C3: -15.002,
    C4: 7.7521e-6,
    C5: 2,
    minimumTemperature: 404.15,
    maximumTemperature: 791,
    pressureAtMinimumTemperature: 7.9e2,
    pressureAtMaximumTemperature: 4.734e6
  },

  Propadiene: {
    name: "Propadiene",
    formula: "C3H4",
    CAS: "463-49-0",
    C1: 57.069,
    C2: -3682.7,
    C3: -5.5662,
    C4: 6.5133e-6,
    C5: 2,
    minimumTemperature: 136.87,
    pressureAtMinimumTemperature: 1.82e1,
    maximumTemperature: 394,
    pressureAtMaximumTemperature: 5.218e6
  },

  Propane: {
    name: "Propane",
    formula: "C3H8",
    CAS: "74-98-6",
    C1: 59.078,
    C2: -3492.6,
    C3: -6.0669,
    C4: 0.000010919,
    C5: 2,
    minimumTemperature: 85.47,
    maximumTemperature: 369.83,
    pressureAtMinimumTemperature: 1.68e-4,
    pressureAtMaximumTemperature: 4.213e6
  },

  "1Propanol": {
    name: "1-Propanol",
    formula: "C3H8O",
    CAS: "71-23-8",
    C1: 84.66416,
    C2: -8307.24422,
    C3: -8.57673,
    C4: 7.51e-18,
    C5: 6,
    minimumTemperature: 146.95,
    maximumTemperature: 536.8,
    pressureAtMinimumTemperature: 4.27e-7,
    pressureAtMaximumTemperature: 5.169e6
  },

  "2Propanol": {
    name: "2-Propanol",
    formula: "C3H8O",
    CAS: "67-63-0",
    C1: 110.717,
    C2: -9040,
    C3: -12.676,
    C4: 0.000005538,
    C5: 2,
    minimumTemperature: 185.26,
    maximumTemperature: 508.3,
    pressureAtMinimumTemperature: 1.69e-2,
    pressureAtMaximumTemperature: 4.771e6
  },

  Propenylcyclohexene: {
    name: "Propenylcyclohexene",
    formula: "C9H14",
    CAS: "13511-13-2",
    C1: 64.268,
    C2: -7298.9,
    C3: -5.9109,
    C4: 4.85e-18,
    C5: 6,
    minimumTemperature: 199,
    maximumTemperature: 636,
    pressureAtMinimumTemperature: 2.48e-2,
    pressureAtMaximumTemperature: 3.13e6
  },

  Propionaldehyde: {
    name: "Propionaldehyde",
    formula: "C3H6O",
    CAS: "123-38-6",
    C1: 50.8769,
    C2: -4931,
    C3: -4.16673,
    C4: 1.67e-17,
    C5: 6,
    minimumTemperature: 165,
    maximumTemperature: 503.6,
    pressureAtMinimumTemperature: 7.54e-1,
    pressureAtMaximumTemperature: 5.04e6
  },

  PropionicAcid: {
    name: "Propionic acid",
    formula: "C3H6O2",
    CAS: "79-09-4",
    C1: 54.552,
    C2: -7149.4,
    C3: -4.2769,
    C4: 1.18e-18,
    C5: 6,
    minimumTemperature: 252.45,
    maximumTemperature: 600.81,
    pressureAtMinimumTemperature: 1.31e1,
    pressureAtMaximumTemperature: 4.608e6
  },

  Propionitrile: {
    name: "Propionitrile",
    formula: "C3H5N",
    CAS: "107-12-0",
    C1: 59.9958,
    C2: -6006.16,
    C3: -5.46004,
    C4: 1.7e-17,
    C5: 6,
    minimumTemperature: 180.37,
    maximumTemperature: 561.3,
    pressureAtMinimumTemperature: 1.89e-1,
    pressureAtMaximumTemperature: 4.26e6
  },

  PropylAcetate: {
    name: "Propyl acetate",
    formula: "C5H10O2",
    CAS: "109-60-4",
    C1: 115.16,
    C2: -8433.9,
    C3: -13.934,
    C4: 0.000010346,
    C5: 2,
    minimumTemperature: 178.15,
    maximumTemperature: 549.73,
    pressureAtMinimumTemperature: 1.71e-2,
    pressureAtMaximumTemperature: 3.366e6
  },

  PropylAmine: {
    name: "Propyl amine",
    formula: "C3H9N",
    CAS: "107-10-8",
    C1: 58.398,
    C2: -5312.7,
    C3: -5.2876,
    C4: 1.9913e-6,
    C5: 2,
    minimumTemperature: 188.36,
    maximumTemperature: 496.95,
    pressureAtMinimumTemperature: 1.3e1,
    pressureAtMaximumTemperature: 4.738e6
  },

  Propylbenzene: {
    name: "Propylbenzene",
    formula: "C9H12",
    CAS: "103-65-1",
    C1: 91.379,
    C2: -8276.8,
    C3: -10.176,
    C4: 0.000005624,
    C5: 2,
    minimumTemperature: 173.55,
    maximumTemperature: 638.35,
    pressureAtMinimumTemperature: 1.81e-4,
    pressureAtMaximumTemperature: 3.202e6
  },

  Propylene: {
    name: "Propylene",
    formula: "C3H6",
    CAS: "115-07-01",
    C1: 43.905,
    C2: -3097.8,
    C3: -3.4425,
    C4: 1e-16,
    C5: 6,
    minimumTemperature: 87.89,
    maximumTemperature: 364.85,
    pressureAtMinimumTemperature: 1.17e-3,
    pressureAtMaximumTemperature: 4.599e6
  },

  // batch 11 review from here

  PropylFormate: {
    name: "Propyl formate",
    formula: "C4H8O2",
    CAS: "110-74-7",
    C1: 104.08,
    C2: -7535.9,
    C3: -12.348,
    C4: 0.000009602,
    C5: 2,
    minimumTemperature: 180.25,
    maximumTemperature: 538,
    pressureAtMinimumTemperature: 2.11e-1,
    pressureAtMaximumTemperature: 4.031e6
  },

  "2PropylMercaptan": {
    name: "2-Propyl mercaptan",
    formula: "C3H8S",
    CAS: "75-33-2",
    C1: 60.43,
    C2: -5276.9,
    C3: -5.6572,
    C4: 2.6e-17,
    C5: 6,
    minimumTemperature: 142.61,
    maximumTemperature: 517,
    pressureAtMinimumTemperature: 9.73e-3,
    pressureAtMaximumTemperature: 4.752e6
  },

  PropylMercaptan: {
    name: "Propyl mercaptan",
    formula: "C3H8S",
    CAS: "107-03-9",
    C1: 62.165,
    C2: -5624,
    C3: -5.8595,
    C4: 2.06e-17,
    C5: 6,
    minimumTemperature: 159.95,
    maximumTemperature: 536.6,
    pressureAtMinimumTemperature: 6.51e-2,
    pressureAtMaximumTemperature: 4.627e6
  },

  "1,2PropyleneGlycol": {
    name: "1,2-Propylene glycol",
    formula: "C3H8O2",
    CAS: "57-55-6",
    C1: 212.8,
    C2: -15420,
    C3: -28.109,
    C4: 0.000021564,
    C5: 2,
    minimumTemperature: 213.15,
    maximumTemperature: 626,
    pressureAtMinimumTemperature: 9.29e-5,
    pressureAtMaximumTemperature: 6.041e6
  },

  Quinone: {
    name: "Quinone",
    formula: "C6H4O2",
    CAS: "106-51-4",
    C1: 48.651,
    C2: -7289.5,
    C3: -3.4453,
    C4: 1.01e-18,
    C5: 6,
    minimumTemperature: 388.85,
    maximumTemperature: 683,
    pressureAtMinimumTemperature: 1.17e4,
    pressureAtMaximumTemperature: 5.925e6
  },

  SiliconTetrafluoride: {
    name: "Silicon tetrafluoride",
    formula: "F4Si",
    CAS: "7783-61-1",
    C1: 272.85,
    C2: -9548.9,
    C3: -40.089,
    C4: 6.37e-15,
    C5: 6,
    minimumTemperature: 186.35,
    maximumTemperature: 259,
    pressureAtMinimumTemperature: 2.21e5,
    pressureAtMaximumTemperature: 3.748e6
  },

  Styrene: {
    name: "Styrene",
    formula: "C8H8",
    CAS: "100-42-5",
    C1: 105.93,
    C2: -8685.9,
    C3: -12.42,
    C4: 7.5583e-6,
    C5: 2,
    minimumTemperature: 242.54,
    maximumTemperature: 636,
    pressureAtMinimumTemperature: 1.06e1,
    pressureAtMaximumTemperature: 3.823e6
  },

  SuccinicAcid: {
    name: "Succinic acid",
    formula: "C4H6O4",
    CAS: "110-15-6",
    C1: 165.977,
    C2: -19914.4,
    C3: -18.9344,
    C4: 1.91e-18,
    C5: 6,
    minimumTemperature: 460.85,
    maximumTemperature: 838,
    pressureAtMinimumTemperature: 7.78e2,
    pressureAtMaximumTemperature: 5.001e6
  },

  SulfurDioxide: {
    name: "Sulfur dioxide",
    formula: "O2S",
    CAS: "7446-09-5",
    C1: 47.365,
    C2: -4084.5,
    C3: -3.6469,
    C4: 1.8e-17,
    C5: 6,
    minimumTemperature: 197.67,
    maximumTemperature: 430.75,
    pressureAtMinimumTemperature: 1.67e3,
    pressureAtMaximumTemperature: 7.86e6
  },

  SulfurHexafluoride: {
    name: "Sulfur hexafluoride",
    formula: "F6S",
    CAS: "2551-62-4",
    C1: 29.16,
    C2: -2383.6,
    C3: -1.1342,
    minimumTemperature: 223.15,
    maximumTemperature: 318.69,
    pressureAtMinimumTemperature: 2.3e5,
    pressureAtMaximumTemperature: 3.771e6
  },

  SulfurTrioxide: {
    name: "Sulfur trioxide",
    formula: "O3S",
    CAS: "7446-11-9",
    C1: 180.99,
    C2: -12060,
    C3: -22.839,
    C4: 7.24e-17,
    C5: 6,
    minimumTemperature: 289.95,
    maximumTemperature: 490.85,
    pressureAtMinimumTemperature: 2.09e4,
    pressureAtMaximumTemperature: 8.192e6
  },

  TerephthalicAcid: {
    name: "Terephthalic acid",
    formula: "C8H6O4",
    CAS: "100-21-0",
    C1: 124.004,
    C2: -17894.4,
    C3: -13.156,
    C4: 1.18e-18,
    C5: 6,
    minimumTemperature: 700.15,
    pressureAtMinimumTemperature: 2.42e5,
    maximumTemperature: 883.6,
    pressureAtMaximumTemperature: 3.487e6
  },

  oTerphenyl: {
    name: "o-Terphenyl",
    formula: "C18H14",
    CAS: "84-15-1",
    C1: 110.52,
    C2: -14045,
    C3: -11.861,
    C4: 2.21e-18,
    C5: 6,
    minimumTemperature: 329.35,
    maximumTemperature: 857,
    pressureAtMinimumTemperature: 4.14e-1,
    pressureAtMaximumTemperature: 2.974e6
  },

  Tetradecane: {
    name: "Tetradecane",
    formula: "C14H30",
    CAS: "629-59-4",
    C1: 140.47,
    C2: -13231,
    C3: -16.859,
    C4: 6.5877e-6,
    C5: 2,
    minimumTemperature: 279.01,
    maximumTemperature: 693,
    pressureAtMinimumTemperature: 2.53e-1,
    pressureAtMaximumTemperature: 1.569e6
  },

  Tetrahydrofuran: {
    name: "Tetrahydrofuran",
    formula: "C4H8O",
    CAS: "109-99-9",
    C1: 54.898,
    C2: -5305.4,
    C3: -4.7627,
    C4: 1.43e-17,
    C5: 6,
    minimumTemperature: 164.65,
    maximumTemperature: 540.15,
    pressureAtMinimumTemperature: 1.96e-1,
    pressureAtMaximumTemperature: 5.203e6
  },

  "1,2,3,4Tetrahydronaphthalene": {
    name: "1,2,3,4-Tetrahydronaphthalene",
    formula: "C10H12",
    CAS: "119-64-2",
    C1: 137.23,
    C2: -10620,
    C3: -17.908,
    C4: 0.014506,
    C5: 1,
    minimumTemperature: 237.38,
    maximumTemperature: 720,
    pressureAtMinimumTemperature: 1.33e-1,
    pressureAtMaximumTemperature: 3.624e6
  },

  Tetrahydrothiophene: {
    name: "Tetrahydrothiophene",
    formula: "C4H8S",
    CAS: "110-01-0",
    C1: 75.881,
    C2: -6910.6,
    C3: -7.9499,
    C4: 4.4315e-6,
    C5: 2,
    minimumTemperature: 176.99,
    maximumTemperature: 631.95,
    pressureAtMinimumTemperature: 1.54e-2,
    pressureAtMaximumTemperature: 5.117e6
  },

  "2,2,3,3Tetramethylbutane": {
    name: "2,2,3,3-Tetramethylbutane",
    formula: "C8H18",
    CAS: "594-82-1",
    C1: 57.963,
    C2: -5901.5,
    C3: -5.2048,
    C4: 9.13e-18,
    C5: 6,
    minimumTemperature: 373.96,
    maximumTemperature: 568,
    pressureAtMinimumTemperature: 8.69e4,
    pressureAtMaximumTemperature: 2.871e6
  },

  Thiophene: {
    name: "Thiophene",
    formula: "C4H4S",
    CAS: "110-02-1",
    C1: 93.193,
    C2: -7001.5,
    C3: -10.738,
    C4: 8.2308e-6,
    C5: 2,
    minimumTemperature: 234.94,
    maximumTemperature: 579.35,
    pressureAtMinimumTemperature: 1.86e2,
    pressureAtMaximumTemperature: 5.702e6
  },

  Toluene: {
    name: "Toluene",
    formula: "C7H8",
    CAS: "108-88-3",
    C1: 76.945,
    C2: -6729.8,
    C3: -8.179,
    C4: 5.3017e-6,
    C5: 2,
    minimumTemperature: 178.18,
    maximumTemperature: 591.75,
    pressureAtMinimumTemperature: 4.75e-2,
    pressureAtMaximumTemperature: 4.08e6
  },

  "1,1,2Trichloroethane": {
    name: "1,1,2-Trichloroethane",
    formula: "C2H3Cl3",
    CAS: "79-00-5",
    C1: 54.153,
    C2: -6041.8,
    C3: -4.5383,
    C4: 4.98e-18,
    C5: 6,
    minimumTemperature: 236.5,
    maximumTemperature: 602,
    pressureAtMinimumTemperature: 4.47e1,
    pressureAtMaximumTemperature: 4.447e6
  },

  Tridecane: {
    name: "Tridecane",
    formula: "C13H28",
    CAS: "629-50-5",
    C1: 137.45,
    C2: -12549,
    C3: -16.543,
    C4: 7.1275e-6,
    C5: 2,
    minimumTemperature: 267.76,
    maximumTemperature: 675,
    pressureAtMinimumTemperature: 2.51e-1,
    pressureAtMaximumTemperature: 1.679e6
  },

  TriethylAmine: {
    name: "Triethyl amine",
    formula: "C6H15N",
    CAS: "121-44-8",
    C1: 56.55,
    C2: -5681.9,
    C3: -4.9815,
    C4: 1.24e-17,
    C5: 6,
    minimumTemperature: 158.45,
    maximumTemperature: 535.15,
    pressureAtMinimumTemperature: 1.06e-2,
    pressureAtMaximumTemperature: 3.037e6
  },

  TrimethylAmine: {
    name: "Trimethyl amine",
    formula: "C3H9N",
    CAS: "75-50-3",
    C1: 134.68,
    C2: -6055.8,
    C3: -19.415,
    C4: 0.028619,
    C5: 1,
    minimumTemperature: 156.08,
    maximumTemperature: 433.25,
    pressureAtMinimumTemperature: 9.92,
    pressureAtMaximumTemperature: 4.102e6
  },

  "1,2,3Trimethylbenzene": {
    name: "1,2,3-Trimethylbenzene",
    formula: "C9H12",
    CAS: "526-73-8",
    C1: 78.341,
    C2: -8019.8,
    C3: -8.1458,
    C4: 3.8971e-6,
    C5: 2,
    minimumTemperature: 247.79,
    maximumTemperature: 664.5,
    pressureAtMinimumTemperature: 3.71,
    pressureAtMaximumTemperature: 3.447e6
  },

  "1,2,4Trimethylbenzene": {
    name: "1,2,4-Trimethylbenzene",
    formula: "C9H12",
    CAS: "95-63-6",
    C1: 85.301,
    C2: -8215.9,
    C3: -9.2166,
    C4: 4.7979e-6,
    C5: 2,
    minimumTemperature: 229.33,
    maximumTemperature: 649.1,
    pressureAtMinimumTemperature: 6.93e-1,
    pressureAtMaximumTemperature: 3.211e6
  },

  "2,2,4Trimethylpentane": {
    name: "2,2,4-Trimethylpentane",
    formula: "C8H18",
    CAS: "540-84-1",
    C1: 84.912,
    C2: -6722.2,
    C3: -9.5157,
    C4: 7.2244e-6,
    C5: 2,
    minimumTemperature: 165.78,
    maximumTemperature: 543.8,
    pressureAtMinimumTemperature: 1.71e-2,
    pressureAtMaximumTemperature: 2.55e6
  },

  "2,3,3Trimethylpentane": {
    name: "2,3,3-Trimethylpentane",
    formula: "C8H18",
    CAS: "560-21-4",
    C1: 83.105,
    C2: -6903.7,
    C3: -9.1858,
    C4: 6.4703e-6,
    C5: 2,
    minimumTemperature: 172.22,
    maximumTemperature: 573.5,
    pressureAtMinimumTemperature: 1.68e-2,
    pressureAtMaximumTemperature: 2.812e6
  },

  "1,3,5Trinitrobenzene": {
    name: "1,3,5-Trinitrobenzene",
    formula: "C6H3N3O6",
    CAS: "99-35-4",
    C1: 506.33,
    C2: -37483,
    C3: -69.22,
    C4: 0.000027381,
    C5: 2,
    minimumTemperature: 398.4,
    maximumTemperature: 846,
    pressureAtMinimumTemperature: 8.5,
    pressureAtMaximumTemperature: 3.41e6
  },

  "2,4,6Trinitrotoluene": {
    name: "2,4,6-Trinitrotoluene",
    formula: "C7H5N3O6",
    CAS: "118-96-7",
    C1: 302,
    C2: -24324,
    C3: -40.13,
    C4: 0.000017403,
    C5: 2,
    minimumTemperature: 354,
    maximumTemperature: 828,
    pressureAtMinimumTemperature: 9.36e-1,
    pressureAtMaximumTemperature: 3.019e6
  },

  Undecane: {
    name: "Undecane",
    formula: "C11H24",
    CAS: "1120-21-4",
    C1: 131,
    C2: -11143,
    C3: -15.855,
    C4: 8.1871e-6,
    C5: 2,
    minimumTemperature: 247.57,
    maximumTemperature: 639,
    pressureAtMinimumTemperature: 4.08e-1,
    pressureAtMaximumTemperature: 1.949e6
  },

  "1Undecanol": {
    name: "1-Undecanol",
    formula: "C11H24O",
    CAS: "112-42-5",
    C1: 182.57122,
    C2: -17112.47062,
    C3: -22.1251,
    C4: 1.13e-17,
    C5: 6,
    minimumTemperature: 288.45,
    maximumTemperature: 703.9,
    pressureAtMinimumTemperature: 1.25e-1,
    pressureAtMaximumTemperature: 2.119e6
  },

  VinylAcetate: {
    name: "Vinyl acetate",
    formula: "C4H6O2",
    CAS: "108-05-4",
    C1: 57.406,
    C2: -5702.8,
    C3: -5.0307,
    C4: 1.1e-17,
    C5: 6,
    minimumTemperature: 180.35,
    pressureAtMinimumTemperature: 7.06e-1,
    maximumTemperature: 519.13,
    pressureAtMaximumTemperature: 3.93e6
  },

  VinylAcetylene: {
    name: "Vinyl acetylene",
    formula: "C4H4",
    CAS: "689-97-4",
    C1: 55.682,
    C2: -4439.3,
    C3: -5.0136,
    C4: 1.97e-17,
    C5: 6,
    minimumTemperature: 173.15,
    maximumTemperature: 454,
    pressureAtMinimumTemperature: 6.69e1,
    pressureAtMaximumTemperature: 4.887e6
  },

  VinylChloride: {
    name: "Vinyl chloride",
    formula: "C2H3Cl",
    CAS: "75-01-4",
    C1: 91.432,
    C2: -5141.7,
    C3: -10.981,
    C4: 0.000014318,
    C5: 2,
    minimumTemperature: 119.36,
    pressureAtMinimumTemperature: 1.92e-2,
    maximumTemperature: 432,
    pressureAtMaximumTemperature: 5.749e6
  },

  VinylTrichlorosilane: {
    name: "Vinyl trichlorosilane",
    formula: "C2H3Cl3Si",
    CAS: "75-94-5",
    C1: 54.571,
    C2: -5561.5,
    C3: -4.712,
    C4: 1.07e-17,
    C5: 6,
    minimumTemperature: 178.35,
    maximumTemperature: 543.15,
    pressureAtMinimumTemperature: 3.54e-1,
    pressureAtMaximumTemperature: 3.058e6
  },

  Water: {
    name: "Water",
    formula: "H2O",
    CAS: "7732-18-5",
    C1: 73.649,
    C2: -7258.2,
    C3: -7.3037,
    C4: 4.1653e-6,
    C5: 2,
    minimumTemperature: 273.16,
    maximumTemperature: 647.1,
    pressureAtMinimumTemperature: 6.11e2,
    pressureAtMaximumTemperature: 2.193e7
  },

  mXylene: {
    name: "m-Xylene",
    formula: "C8H10",
    CAS: "108-38-3",
    C1: 85.099,
    C2: -7615.9,
    C3: -9.3072,
    C4: 5.5643e-6,
    C5: 2,
    minimumTemperature: 225.3,
    maximumTemperature: 617,
    pressureAtMinimumTemperature: 3.18,
    pressureAtMaximumTemperature: 3.528e6
  },

  oXylene: {
    name: "o-Xylene",
    formula: "C8H10",
    CAS: "95-47-6",
    C1: 90.405,
    C2: -7955.2,
    C3: -10.086,
    C4: 5.9594e-6,
    C5: 2,
    minimumTemperature: 247.98,
    maximumTemperature: 630.3,
    pressureAtMinimumTemperature: 2.18e1,
    pressureAtMaximumTemperature: 3.741e6
  },

  pXylene: {
    name: "p-Xylene",
    formula: "C8H10",
    CAS: "106-42-3",
    C1: 88.72,
    C2: -7741.2,
    C3: -9.8693,
    C4: 0.000006077,
    C5: 2,
    minimumTemperature: 286.41,
    maximumTemperature: 616.2,
    pressureAtMinimumTemperature: 5.76e2,
    pressureAtMaximumTemperature: 3.501e6
  }
} as const;

export function calculateDIPPRVaporPressure(compound: string, temperature: number): number {
  const vaporPressureProps: DIPPRVaporPressureProps | undefined = DIPPRVaporPressureDictionary[compound];
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
        (Number.isFinite(vaporPressureProps.C4) ? (vaporPressureProps.C4 as number) : 0) *
          Math.pow(temperature, Number.isFinite(vaporPressureProps.C5) ? (vaporPressureProps.C5 as number) : 0)
    );
  }
  return vaporPressure;
}
