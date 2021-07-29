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

  BenzylEthylEther: {
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
    name: 'Biphenyl',
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

  '1,2Butadiene': {
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

  '1,3Butadiene': {
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

  Chlorine: {
    name: 'Chlorine',
    formula: 'Cl2',
    CAS: '7782-50-5',
    molecularWeight: 70.906,
    C1: 0.2246,
    C2: -0.000064,
    C3: -0.000000788,
    minimumTemperature: 172.12,
    maximumTemperature: 410,
    thermalConductivityAtMinimumTemperature: 0.1902,
    thermalConductivityAtMaximumTemperature: 0.0659,
  },

  Chlorobenzene: {
    name: 'Chlorobenzene',
    formula: 'C6H5Cl',
    CAS: '108-90-7',
    molecularWeight: 112.5569,
    C1: 0.1841,
    C2: -0.0001917,
    minimumTemperature: 227.95,
    maximumTemperature: 404.87,
    thermalConductivityAtMinimumTemperature: 0.1404,
    thermalConductivityAtMaximumTemperature: 0.1065,
  },

  Chloroethane: {
    name: 'Chloroethane',
    formula: 'C2H5Cl',
    CAS: '75-00-3',
    molecularWeight: 64.5141,
    C1: 0.23779,
    C2: -0.000395209,
    minimumTemperature: 136.75,
    maximumTemperature: 348.15,
    thermalConductivityAtMinimumTemperature: 0.1837,
    thermalConductivityAtMaximumTemperature: 0.1002,
  },

  Chloroform: {
    name: 'Chloroform',
    formula: 'CHCl3',
    CAS: '67-66-3',
    molecularWeight: 119.37764,
    C1: 0.1778,
    C2: -0.0002023,
    minimumTemperature: 209.63,
    maximumTemperature: 400.0,
    thermalConductivityAtMinimumTemperature: 0.1354,
    thermalConductivityAtMaximumTemperature: 0.0969,
  },

  Chloromethane: {
    name: 'Chloromethane',
    formula: 'CH3Cl',
    CAS: '74-87-3',
    molecularWeight: 50.4875,
    C1: 0.25381,
    C2: -0.000431803,
    minimumTemperature: 175.43,
    maximumTemperature: 333.0,
    thermalConductivityAtMinimumTemperature: 0.1781,
    thermalConductivityAtMaximumTemperature: 0.11,
  },

  '1Chloropropane': {
    name: '1-Chloropropane',
    formula: 'C3H7Cl',
    CAS: '540-54-5',
    molecularWeight: 78.54068,
    C1: 0.21851,
    C2: -0.00033762,
    minimumTemperature: 150.35,
    maximumTemperature: 393.15,
    thermalConductivityAtMinimumTemperature: 0.1677,
    thermalConductivityAtMaximumTemperature: 0.0858,
  },

  '2Chloropropane': {
    name: '2-Chloropropane',
    formula: 'C3H7Cl',
    CAS: '75-29-6',
    molecularWeight: 78.54068,
    C1: 0.21232,
    C2: -0.0003149,
    minimumTemperature: 155.97,
    maximumTemperature: 386.7,
    thermalConductivityAtMinimumTemperature: 0.1632,
    thermalConductivityAtMaximumTemperature: 0.0906,
  },

  mCresol: {
    name: 'm-Cresol',
    formula: 'C7H8O',
    CAS: '108-39-4',
    molecularWeight: 108.13782,
    C1: 0.18241,
    C2: -0.00011109,
    minimumTemperature: 285.39,
    maximumTemperature: 475.43,
    thermalConductivityAtMinimumTemperature: 0.1507,
    thermalConductivityAtMaximumTemperature: 0.1296,
  },

  oCresol: {
    name: 'o-Cresol',
    formula: 'C7H8O',
    CAS: '95-48-7',
    molecularWeight: 108.13782,
    C1: 0.19186,
    C2: -0.0001303,
    minimumTemperature: 304.19,
    maximumTemperature: 464.15,
    thermalConductivityAtMinimumTemperature: 0.1522,
    thermalConductivityAtMaximumTemperature: 0.1314,
  },

  pCresol: {
    name: 'p-Cresol',
    formula: 'C7H8O',
    CAS: '106-44-5',
    molecularWeight: 108.13782,
    C1: 0.17971,
    C2: -0.00012037,
    minimumTemperature: 307.93,
    maximumTemperature: 475.13,
    thermalConductivityAtMinimumTemperature: 0.1426,
    thermalConductivityAtMaximumTemperature: 0.1225,
  },

  Cumene: {
    name: 'Cumene',
    formula: 'C9H12',
    CAS: '98-82-8',
    molecularWeight: 120.19158,
    C1: 0.1855,
    C2: -0.00020895,
    minimumTemperature: 177.14,
    maximumTemperature: 413.15,
    thermalConductivityAtMinimumTemperature: 0.1485,
    thermalConductivityAtMaximumTemperature: 0.0992,
  },

  Cyanogen: {
    name: 'Cyanogen',
    formula: 'C2N2',
    CAS: '460-19-5',
    molecularWeight: 52.0348,
    C1: 0.37845,
    C2: -0.00069945,
    minimumTemperature: 245.25,
    maximumTemperature: 251.9,
    thermalConductivityAtMinimumTemperature: 0.2069,
    thermalConductivityAtMaximumTemperature: 0.2023,
  },

  Cyclobutane: {
    name: 'Cyclobutane',
    formula: 'C4H8',
    CAS: '287-23-0',
    molecularWeight: 56.10632,
    C1: 0.22262,
    C2: -0.00034082,
    minimumTemperature: 182.48,
    maximumTemperature: 285.66,
    thermalConductivityAtMinimumTemperature: 0.1604,
    thermalConductivityAtMaximumTemperature: 0.1253,
  },

  Cyclohexane: {
    name: 'Cyclohexane',
    formula: 'C6H12',
    CAS: '110-82-7',
    molecularWeight: 84.15948,
    C1: 0.19813,
    C2: -0.0002505,
    minimumTemperature: 279.69,
    maximumTemperature: 353.87,
    thermalConductivityAtMinimumTemperature: 0.1281,
    thermalConductivityAtMaximumTemperature: 0.1095,
  },

  Cyclohexanol: {
    name: 'Cyclohexanol',
    formula: 'C6H12O',
    CAS: '108-93-0',
    molecularWeight: 100.15888,
    C1: 0.1715,
    C2: -0.0001255,
    minimumTemperature: 296.6,
    maximumTemperature: 563.15,
    thermalConductivityAtMinimumTemperature: 0.1343,
    thermalConductivityAtMaximumTemperature: 0.1008,
  },

  Cyclohexanone: {
    name: 'Cyclohexanone',
    formula: 'C6H10O',
    CAS: '108-94-1',
    molecularWeight: 98.143,
    C1: 0.17557,
    C2: -0.00012392,
    minimumTemperature: 242.0,
    maximumTemperature: 428.58,
    thermalConductivityAtMinimumTemperature: 0.1456,
    thermalConductivityAtMaximumTemperature: 0.1225,
  },

  Cyclohexene: {
    name: 'Cyclohexene',
    formula: 'C6H10',
    CAS: '110-83-8',
    molecularWeight: 82.1436,
    C1: 0.20926,
    C2: -0.00026037,
    minimumTemperature: 169.67,
    maximumTemperature: 356.12,
    thermalConductivityAtMinimumTemperature: 0.1651,
    thermalConductivityAtMaximumTemperature: 0.1165,
  },

  Cyclopentane: {
    name: 'Cyclopentane',
    formula: 'C5H10',
    CAS: '287-92-3',
    molecularWeight: 70.1329,
    C1: 0.2066,
    C2: -0.0002696,
    minimumTemperature: 179.28,
    maximumTemperature: 322.4,
    thermalConductivityAtMinimumTemperature: 0.1583,
    thermalConductivityAtMaximumTemperature: 0.1197,
  },

  Cyclopentene: {
    name: 'Cyclopentene',
    formula: 'C5H8',
    CAS: '142-29-0',
    molecularWeight: 68.11702,
    C1: 0.21776,
    C2: -0.00027783,
    minimumTemperature: 138.13,
    maximumTemperature: 333.15,
    thermalConductivityAtMinimumTemperature: 0.1794,
    thermalConductivityAtMaximumTemperature: 0.1252,
  },

  Cyclopropane: {
    name: 'Cyclopropane',
    formula: 'C3H6',
    CAS: '75-19-4',
    molecularWeight: 42.07974,
    C1: 0.24348,
    C2: -0.00042568,
    minimumTemperature: 145.59,
    maximumTemperature: 240.37,
    thermalConductivityAtMinimumTemperature: 0.1815,
    thermalConductivityAtMaximumTemperature: 0.1412,
  },

  CyclohexylMercaptan: {
    name: 'Cyclohexyl mercaptan',
    formula: 'C6H12S',
    CAS: '1569-69-3',
    molecularWeight: 116.22448,
    C1: 0.18374,
    C2: -0.0001925,
    minimumTemperature: 189.64,
    maximumTemperature: 431.95,
    thermalConductivityAtMinimumTemperature: 0.1472,
    thermalConductivityAtMaximumTemperature: 0.1006,
  },

  Decanal: {
    name: 'Decanal',
    formula: 'C10H20O',
    CAS: '112-31-2',
    molecularWeight: 156.2652,
    C1: 0.21363,
    C2: -0.00023004,
    minimumTemperature: 285.0,
    maximumTemperature: 481.65,
    thermalConductivityAtMinimumTemperature: 0.1481,
    thermalConductivityAtMaximumTemperature: 0.1028,
  },

  Decane: {
    name: 'Decane',
    formula: 'C10H22',
    CAS: '124-18-5',
    molecularWeight: 142.28168,
    C1: 0.2063,
    C2: -0.00025,
    minimumTemperature: 243.51,
    maximumTemperature: 447.3,
    thermalConductivityAtMinimumTemperature: 0.1454,
    thermalConductivityAtMaximumTemperature: 0.0945,
  },

  DecanoicAcid: {
    name: 'Decanoic acid',
    formula: 'C10H20O2',
    CAS: '334-48-5',
    molecularWeight: 172.265,
    C1: 0.206,
    C2: -0.0002,
    minimumTemperature: 304.75,
    maximumTemperature: 543.15,
    thermalConductivityAtMinimumTemperature: 0.1451,
    thermalConductivityAtMaximumTemperature: 0.0974,
  },

  '1Decanol': {
    name: '1-Decanol',
    formula: 'C10H22O',
    CAS: '112-30-1',
    molecularWeight: 158.28108,
    C1: 0.236171,
    C2: -0.00025,
    minimumTemperature: 280.05,
    maximumTemperature: 503.0,
    thermalConductivityAtMinimumTemperature: 0.1662,
    thermalConductivityAtMaximumTemperature: 0.1104,
  },

  '1Decene': {
    name: '1-Decene',
    formula: 'C10H20',
    CAS: '872-05-9',
    molecularWeight: 140.2658,
    C1: 0.20237,
    C2: -0.00024187,
    minimumTemperature: 206.89,
    maximumTemperature: 443.75,
    thermalConductivityAtMinimumTemperature: 0.1523,
    thermalConductivityAtMaximumTemperature: 0.095,
  },

  DecylMercaptan: {
    name: 'Decyl mercaptan',
    formula: 'C10H22S',
    CAS: '143-10-2',
    molecularWeight: 174.34668,
    C1: 0.20134,
    C2: -0.00020826,
    minimumTemperature: 247.56,
    maximumTemperature: 512.35,
    thermalConductivityAtMinimumTemperature: 0.1498,
    thermalConductivityAtMaximumTemperature: 0.0946,
  },

  '1Decyne': {
    name: '1-Decyne',
    formula: 'C10H18',
    CAS: '764-93-2',
    molecularWeight: 138.24992,
    C1: 0.20839,
    C2: -0.00023622,
    minimumTemperature: 229.15,
    maximumTemperature: 447.15,
    thermalConductivityAtMinimumTemperature: 0.1543,
    thermalConductivityAtMaximumTemperature: 0.1028,
  },

  Deuterium: {
    name: 'Deuterium',
    formula: 'D2',
    CAS: '7782-39-0',
    molecularWeight: 4.0316,
    C1: 1.264,
    C2: NaN,
    minimumTemperature: 20.4,
    maximumTemperature: 20.4,
    thermalConductivityAtMinimumTemperature: 1.264,
    thermalConductivityAtMaximumTemperature: 1.264,
  },

  '1,1Dibromoethane': {
    name: '1,1-Dibromoethane',
    formula: 'C2H4Br2',
    CAS: '557-91-5',
    molecularWeight: 187.86116,
    C1: 0.1426,
    C2: -0.00016402,
    minimumTemperature: 210.15,
    maximumTemperature: 498.4,
    thermalConductivityAtMinimumTemperature: 0.1081,
    thermalConductivityAtMaximumTemperature: 0.0609,
  },

  '1,2Dibromoethane': {
    name: '1,2-Dibromoethane',
    formula: 'C2H4Br2',
    CAS: '106-93-4',
    molecularWeight: 187.86116,
    C1: 0.13622,
    C2: -0.0001179,
    minimumTemperature: 282.85,
    maximumTemperature: 404.51,
    thermalConductivityAtMinimumTemperature: 0.1029,
    thermalConductivityAtMaximumTemperature: 0.0885,
  },

  Dibromomethane: {
    name: 'Dibromomethane',
    formula: 'CH2Br2',
    CAS: '74-95-3',
    molecularWeight: 173.83458,
    C1: 0.17558,
    C2: -0.00022499,
    minimumTemperature: 220.6,
    maximumTemperature: 370.1,
    thermalConductivityAtMinimumTemperature: 0.1259,
    thermalConductivityAtMaximumTemperature: 0.0923,
  },

  DibutylEther: {
    name: 'Dibutyl ether',
    formula: 'C8H18O',
    CAS: '142-96-1',
    molecularWeight: 130.22792,
    C1: 0.19418,
    C2: -0.00022246,
    minimumTemperature: 175.3,
    maximumTemperature: 523.15,
    thermalConductivityAtMinimumTemperature: 0.1552,
    thermalConductivityAtMaximumTemperature: 0.0778,
  },

  mDichlorobenzene: {
    name: 'm-Dichlorobenzene',
    formula: 'C6H4Cl2',
    CAS: '541-73-1',
    molecularWeight: 147.00196,
    C1: 0.16694,
    C2: -0.0001667,
    minimumTemperature: 248.39,
    maximumTemperature: 446.23,
    thermalConductivityAtMinimumTemperature: 0.1255,
    thermalConductivityAtMaximumTemperature: 0.0926,
  },

  oDichlorobenzene: {
    name: 'o-Dichlorobenzene',
    formula: 'C6H4Cl2',
    CAS: '95-50-1',
    molecularWeight: 147.00196,
    C1: 0.16994,
    C2: -0.0001637,
    minimumTemperature: 262.87,
    maximumTemperature: 351.71,
    thermalConductivityAtMinimumTemperature: 0.1269,
    thermalConductivityAtMaximumTemperature: 0.1124,
  },

  pDichlorobenzene: {
    name: 'p-Dichlorobenzene',
    formula: 'C6H4Cl2',
    CAS: '106-46-7',
    molecularWeight: 147.00196,
    C1: 0.16977,
    C2: -0.0001799,
    minimumTemperature: 326.14,
    maximumTemperature: 548.0,
    thermalConductivityAtMinimumTemperature: 0.1111,
    thermalConductivityAtMaximumTemperature: 0.0712,
  },

  '1,1Dichloroethane': {
    name: '1,1-Dichloroethane',
    formula: 'C2H4Cl2',
    CAS: '75-34-3',
    molecularWeight: 98.95916,
    C1: 0.18881,
    C2: -0.00026083,
    minimumTemperature: 176.19,
    maximumTemperature: 416.9,
    thermalConductivityAtMinimumTemperature: 0.1429,
    thermalConductivityAtMaximumTemperature: 0.0801,
  },

  '1,2Dichloroethane': {
    name: '1,2-Dichloroethane',
    formula: 'C2H4Cl2',
    CAS: '107-06-2',
    molecularWeight: 98.95916,
    C1: 0.214,
    C2: -0.000266,
    minimumTemperature: 253.15,
    maximumTemperature: 356.59,
    thermalConductivityAtMinimumTemperature: 0.1467,
    thermalConductivityAtMaximumTemperature: 0.1191,
  },

  Dichloromethane: {
    name: 'Dichloromethane',
    formula: 'CH2Cl2',
    CAS: '75-09-2',
    molecularWeight: 84.93258,
    C1: 0.23847,
    C2: -0.00033366,
    minimumTemperature: 178.01,
    maximumTemperature: 325.0,
    thermalConductivityAtMinimumTemperature: 0.1791,
    thermalConductivityAtMaximumTemperature: 0.13,
  },

  '1,1Dichloropropane': {
    name: '1,1-Dichloropropane',
    formula: 'C3H6Cl2',
    CAS: '78-99-9',
    molecularWeight: 112.98574,
    C1: 0.18,
    C2: -0.00023144,
    minimumTemperature: 192.5,
    maximumTemperature: 438.0,
    thermalConductivityAtMinimumTemperature: 0.1354,
    thermalConductivityAtMaximumTemperature: 0.0786,
  },

  '1,2Dichloropropane': {
    name: '1,2-Dichloropropane',
    formula: 'C3H6Cl2',
    CAS: '78-87-5',
    molecularWeight: 112.98574,
    C1: 0.19653,
    C2: -0.00025012,
    minimumTemperature: 172.71,
    maximumTemperature: 457.6,
    thermalConductivityAtMinimumTemperature: 0.1533,
    thermalConductivityAtMaximumTemperature: 0.0821,
  },

  DiethanolAmine: {
    name: 'Diethanol amine',
    formula: 'C4H11NO2',
    CAS: '111-42-2',
    molecularWeight: 105.13564,
    C1: 0.0218,
    C2: 0.0010315,
    C3: -0.000001355,
    minimumTemperature: 301.15,
    maximumTemperature: 673.15,
    thermalConductivityAtMinimumTemperature: 0.2095,
    thermalConductivityAtMaximumTemperature: 0.1022,
  },

  DiethylAmine: {
    name: 'Diethyl amine',
    formula: 'C4H11N',
    CAS: '109-89-7',
    molecularWeight: 73.13684,
    C1: 0.2587,
    C2: -0.00054343,
    C3: 4.2097e-7,
    minimumTemperature: 223.35,
    maximumTemperature: 453.15,
    thermalConductivityAtMinimumTemperature: 0.1583,
    thermalConductivityAtMaximumTemperature: 0.0989,
  },

  DiethylEther: {
    name: 'Diethyl ether',
    formula: 'C4H10O',
    CAS: '60-29-7',
    molecularWeight: 74.1216,
    C1: 0.2495,
    C2: -0.000407,
    minimumTemperature: 156.85,
    maximumTemperature: 433.15,
    thermalConductivityAtMinimumTemperature: 0.1857,
    thermalConductivityAtMaximumTemperature: 0.0732,
  },

  DiethylSulfide: {
    name: 'Diethyl sulfide',
    formula: 'C4H10S',
    CAS: '352-93-2',
    molecularWeight: 90.1872,
    C1: 0.21065,
    C2: -0.0002623,
    minimumTemperature: 169.2,
    maximumTemperature: 365.25,
    thermalConductivityAtMinimumTemperature: 0.1663,
    thermalConductivityAtMaximumTemperature: 0.1148,
  },

  '1,1Difluoroethane': {
    name: '1,1-Difluoroethane',
    formula: 'C2H4F2',
    CAS: '75-37-6',
    molecularWeight: 66.04997,
    C1: 0.27019,
    C2: -0.000661,
    C3: 3.443e-7,
    minimumTemperature: 154.56,
    maximumTemperature: 363.15,
    thermalConductivityAtMinimumTemperature: 0.1763,
    thermalConductivityAtMaximumTemperature: 0.0756,
  },

  '1,2Difluoroethane': {
    name: '1,2-Difluoroethane',
    formula: 'C2H4F2',
    CAS: '624-72-6',
    molecularWeight: 66.04997,
    C1: 0.23171,
    C2: -0.00038503,
    minimumTemperature: 179.6,
    maximumTemperature: 372.8,
    thermalConductivityAtMinimumTemperature: 0.1626,
    thermalConductivityAtMaximumTemperature: 0.0882,
  },

  Difluoromethane: {
    name: 'Difluoromethane',
    formula: 'CH2F2',
    CAS: '75-10-5',
    molecularWeight: 52.02339,
    C1: 0.37296,
    C2: -0.00088707,
    C3: 2.576e-7,
    minimumTemperature: 136.95,
    maximumTemperature: 302.56,
    thermalConductivityAtMinimumTemperature: 0.2563,
    thermalConductivityAtMaximumTemperature: 0.1282,
  },

  DiIsopropylAmine: {
    name: 'Di-isopropyl amine',
    formula: 'C6H15N',
    CAS: '108-18-9',
    molecularWeight: 101.19,
    C1: 0.1844,
    C2: -0.000239,
    minimumTemperature: 176.85,
    maximumTemperature: 357.05,
    thermalConductivityAtMinimumTemperature: 0.1421,
    thermalConductivityAtMaximumTemperature: 0.0991,
  },

  DiIsopropylEther: {
    name: 'Di-isopropyl ether',
    formula: 'C6H14O',
    CAS: '108-20-3',
    molecularWeight: 102.17476,
    C1: 0.19162,
    C2: -0.0002762,
    minimumTemperature: 187.65,
    maximumTemperature: 400.1,
    thermalConductivityAtMinimumTemperature: 0.1398,
    thermalConductivityAtMaximumTemperature: 0.0811,
  },

  DiIsopropylKetone: {
    name: 'Di-isopropyl ketone',
    formula: 'C7H14O',
    CAS: '565-80-0',
    molecularWeight: 114.18546,
    C1: 0.22076,
    C2: -0.00027624,
    minimumTemperature: 204.81,
    maximumTemperature: 460.0,
    thermalConductivityAtMinimumTemperature: 0.1642,
    thermalConductivityAtMaximumTemperature: 0.0937,
  },

  '1,1Dimethoxyethane': {
    name: '1,1-Dimethoxyethane',
    formula: 'C4H10O2',
    CAS: '534-15-6',
    molecularWeight: 90.121,
    C1: 0.22078,
    C2: -0.00031271,
    minimumTemperature: 159.95,
    maximumTemperature: 337.45,
    thermalConductivityAtMinimumTemperature: 0.1708,
    thermalConductivityAtMaximumTemperature: 0.1153,
  },

  '1,2Dimethoxypropane': {
    name: '1,2-Dimethoxypropane',
    formula: 'C5H12O2',
    CAS: '7778-85-0',
    molecularWeight: 104.14758,
    C1: 0.22998,
    C2: -0.00030372,
    minimumTemperature: 226.1,
    maximumTemperature: 366.15,
    thermalConductivityAtMinimumTemperature: 0.1613,
    thermalConductivityAtMaximumTemperature: 0.1188,
  },

  DimethylAcetylene: {
    name: 'Dimethyl acetylene',
    formula: 'C4H6',
    CAS: '503-17-3',
    molecularWeight: 54.09044,
    C1: 0.22773,
    C2: -0.00034804,
    minimumTemperature: 240.91,
    maximumTemperature: 300.13,
    thermalConductivityAtMinimumTemperature: 0.1439,
    thermalConductivityAtMaximumTemperature: 0.1233,
  },

  DimethylAmine: {
    name: 'Dimethyl amine',
    formula: 'C2H7N',
    CAS: '124-40-3',
    molecularWeight: 45.08368,
    C1: 0.2454,
    C2: -0.000338,
    minimumTemperature: 180.96,
    maximumTemperature: 403.15,
    thermalConductivityAtMinimumTemperature: 0.1842,
    thermalConductivityAtMaximumTemperature: 0.1091,
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
