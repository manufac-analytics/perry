import { DIPPRThermalConductivityProps } from "../interfaces/utils";

export const DIPPRThermalConductivityDictionary: Record<string, DIPPRThermalConductivityProps> = {
  Acetaldehyde: {
    name: "Acetaldehyde",
    formula: "C2H4O",
    CAS: "75-07-0",
    molecularWeight: 44.05256,
    C1: 0.33515,
    C2: -0.00055227,
    minimumTemperature: 149.78,
    maximumTemperature: 294.15,
    thermalConductivityAtMinimumTemperature: 0.2524,
    thermalConductivityAtMaximumTemperature: 0.1727
  },

  Acetamide: {
    name: "Acetamide",
    formula: "C2H5NO",
    CAS: "60-35-5",
    molecularWeight: 59.0672,
    C1: 0.39363,
    C2: -0.00037053,
    minimumTemperature: 353.33,
    maximumTemperature: 494.3,
    thermalConductivityAtMinimumTemperature: 0.2627,
    thermalConductivityAtMaximumTemperature: 0.2105
  },

  AceticAcid: {
    name: "Acetic acid",
    formula: "C2H4O2",
    CAS: "64-19-7",
    molecularWeight: 60.052,
    C1: 0.214,
    C2: -0.0001834,
    minimumTemperature: 289.81,
    maximumTemperature: 391.05,
    thermalConductivityAtMinimumTemperature: 0.1608,
    thermalConductivityAtMaximumTemperature: 0.1423
  },

  AceticAnhydride: {
    name: "Acetic anhydride",
    formula: "C4H6O3",
    CAS: "108-24-7",
    molecularWeight: 102.08864,
    C1: 0.23638,
    C2: -0.00024263,
    minimumTemperature: 200.15,
    maximumTemperature: 412.7,
    thermalConductivityAtMinimumTemperature: 0.1878,
    thermalConductivityAtMaximumTemperature: 0.1362
  },

  Acetone: {
    name: "Acetone",
    formula: "C3H6O",
    CAS: "67-64-1",
    molecularWeight: 58.07914,
    C1: 0.2878,
    C2: -0.000427,
    minimumTemperature: 178.45,
    maximumTemperature: 343.15,
    thermalConductivityAtMinimumTemperature: 0.2116,
    thermalConductivityAtMaximumTemperature: 0.1413
  },

  Acetonitrile: {
    name: "Acetonitrile",
    formula: "C2H3N",
    CAS: "75-05-8",
    molecularWeight: 41.0519,
    C1: 0.30755,
    C2: -0.000402,
    minimumTemperature: 229.32,
    maximumTemperature: 354.81,
    thermalConductivityAtMinimumTemperature: 0.2154,
    thermalConductivityAtMaximumTemperature: 0.1649
  },

  Acetylene: {
    name: "Acetylene",
    formula: "C2H2",
    CAS: "74-86-2",
    molecularWeight: 26.03728,
    C1: 0.33363,
    C2: -0.00083655,
    minimumTemperature: 192.4,
    maximumTemperature: 250,
    thermalConductivityAtMinimumTemperature: 0.1727,
    thermalConductivityAtMaximumTemperature: 0.1245
  },

  Acrolein: {
    name: "Acrolein",
    formula: "C3H4O",
    CAS: "107-02-8",
    molecularWeight: 56.06326,
    C1: 0.2703,
    C2: -0.0003764,
    minimumTemperature: 185.45,
    maximumTemperature: 325.84,
    thermalConductivityAtMinimumTemperature: 0.2005,
    thermalConductivityAtMaximumTemperature: 0.1477
  },

  AcrylicAcid: {
    name: "Acrylic acid",
    formula: "C3H4O2",
    CAS: "79-10-7",
    molecularWeight: 72.06266,
    C1: 0.2441,
    C2: -0.0002904,
    minimumTemperature: 286.15,
    maximumTemperature: 484.5,
    thermalConductivityAtMinimumTemperature: 0.161,
    thermalConductivityAtMaximumTemperature: 0.1034
  },

  Acrylonitrile: {
    name: "Acrylonitrile",
    formula: "C3H3N",
    CAS: "107-13-1",
    molecularWeight: 53.0626,
    C1: 0.30751,
    C2: -0.000487,
    minimumTemperature: 189.63,
    maximumTemperature: 350.45,
    thermalConductivityAtMinimumTemperature: 0.2152,
    thermalConductivityAtMaximumTemperature: 0.1368
  },

  Air: {
    name: "Air",
    formula: "Mixture",
    CAS: "132259-10-0",
    molecularWeight: 28.96,
    C1: 0.28472,
    C2: -0.0017393,
    minimumTemperature: 75,
    maximumTemperature: 125,
    thermalConductivityAtMinimumTemperature: 0.1543,
    thermalConductivityAtMaximumTemperature: 0.0673
  },

  Ammonia: {
    name: "Ammonia",
    formula: "H3N",
    CAS: "7664-41-7",
    molecularWeight: 17.03052,
    C1: 1.169,
    C2: -0.002314,
    minimumTemperature: 195.41,
    maximumTemperature: 400.05,
    thermalConductivityAtMinimumTemperature: 0.7168,
    thermalConductivityAtMaximumTemperature: 0.2433
  },

  Anisole: {
    name: "Anisole",
    formula: "C7H8O",
    CAS: "100-66-3",
    molecularWeight: 108.13782,
    C1: 0.23494,
    C2: -0.00026477,
    minimumTemperature: 235.65,
    maximumTemperature: 512.5,
    thermalConductivityAtMinimumTemperature: 0.1725,
    thermalConductivityAtMaximumTemperature: 0.0993
  },

  Argon: {
    name: "Argon",
    formula: "Ar",
    CAS: "7440-37-1",
    molecularWeight: 39.948,
    C1: 0.1819,
    C2: -0.0003176,
    C3: -0.00000411,
    minimumTemperature: 83.78,
    maximumTemperature: 150,
    thermalConductivityAtMinimumTemperature: 0.1264,
    thermalConductivityAtMaximumTemperature: 0.0418
  },

  Benzamide: {
    name: "Benzamide",
    formula: "C7H7NO",
    CAS: "55-21-0",
    molecularWeight: 121.13658,
    C1: 0.28485,
    C2: -0.00025225,
    minimumTemperature: 403,
    maximumTemperature: 563.15,
    thermalConductivityAtMinimumTemperature: 0.1832,
    thermalConductivityAtMaximumTemperature: 0.1428
  },

  Benzene: {
    name: "Benzene",
    formula: "C6H6",
    CAS: "71-43-2",
    molecularWeight: 78.11184,
    C1: 0.23444,
    C2: -0.00030572,
    minimumTemperature: 278.68,
    maximumTemperature: 413.1,
    thermalConductivityAtMinimumTemperature: 0.1492,
    thermalConductivityAtMaximumTemperature: 0.1081
  },

  Benzenethiol: {
    name: "Benzenethiol",
    formula: "C6H6S",
    CAS: "108-98-5",
    molecularWeight: 110.17684,
    C1: 0.20996,
    C2: -0.0002146,
    minimumTemperature: 258.27,
    maximumTemperature: 442.29,
    thermalConductivityAtMinimumTemperature: 0.1545,
    thermalConductivityAtMaximumTemperature: 0.115
  },

  BenzoicAcid: {
    name: "Benzoic acid",
    formula: "C7H6O2",
    CAS: "65-85-0",
    molecularWeight: 122.12134,
    C1: 0.2391,
    C2: -0.0002325,
    minimumTemperature: 395.45,
    maximumTemperature: 596,
    thermalConductivityAtMinimumTemperature: 0.1472,
    thermalConductivityAtMaximumTemperature: 0.1005
  },

  Benzonitrile: {
    name: "Benzonitrile",
    formula: "C7H5N",
    CAS: "100-47-0",
    molecularWeight: 103.1213,
    C1: 0.20603,
    C2: -0.00021023,
    minimumTemperature: 260.28,
    maximumTemperature: 464.15,
    thermalConductivityAtMinimumTemperature: 0.1513,
    thermalConductivityAtMaximumTemperature: 0.1085
  },

  Benzophenone: {
    name: "Benzophenone",
    formula: "C13H10O",
    CAS: "119-61-9",
    molecularWeight: 182.2179,
    C1: 0.25867,
    C2: -0.00022516,
    minimumTemperature: 321.35,
    maximumTemperature: 664,
    thermalConductivityAtMinimumTemperature: 0.1863,
    thermalConductivityAtMaximumTemperature: 0.1092
  },

  BenzylAlcohol: {
    name: "Benzyl alcohol",
    formula: "C7H8O",
    CAS: "100-51-6",
    molecularWeight: 108.13782,
    C1: 0.17847,
    C2: -0.000065843,
    minimumTemperature: 257.85,
    maximumTemperature: 478.6,
    thermalConductivityAtMinimumTemperature: 0.1615,
    thermalConductivityAtMaximumTemperature: 0.147
  },

  BenzylEthylEther: {
    name: "Benzyl ethyl ether",
    formula: "C9H12O",
    CAS: "539-30-0",
    molecularWeight: 136.19098,
    C1: 0.2029,
    C2: -0.0002226,
    minimumTemperature: 275.65,
    maximumTemperature: 528.6,
    thermalConductivityAtMinimumTemperature: 0.1415,
    thermalConductivityAtMaximumTemperature: 0.0852
  },

  BenzylMercaptan: {
    name: "Benzyl mercaptan",
    formula: "C7H8S",
    CAS: "100-53-8",
    molecularWeight: 124.20342,
    C1: 0.20316,
    C2: -0.00019912,
    minimumTemperature: 243.95,
    maximumTemperature: 472.03,
    thermalConductivityAtMinimumTemperature: 0.1546,
    thermalConductivityAtMaximumTemperature: 0.1092
  },

  Biphenyl: {
    name: "Biphenyl",
    formula: "C12H10",
    CAS: "92-52-4",
    molecularWeight: 154.2078,
    C1: 0.19053,
    C2: -0.00015145,
    minimumTemperature: 342.2,
    maximumTemperature: 723.15,
    thermalConductivityAtMinimumTemperature: 0.1387,
    thermalConductivityAtMaximumTemperature: 0.081
  },

  Bromine: {
    name: "Bromine",
    formula: "Br2",
    CAS: "7726-95-6",
    molecularWeight: 159.808,
    C1: -0.2185,
    C2: 0.0042143,
    C3: -0.000017753,
    C4: 3.1041e-8,
    C5: -2.0108e-11,
    minimumTemperature: 266,
    maximumTemperature: 584,
    thermalConductivityAtMinimumTemperature: 0.1299,
    thermalConductivityAtMaximumTemperature: 0.0316
  },

  Bromobenzene: {
    name: "Bromobenzene",
    formula: "C6H5Br",
    CAS: "108-86-1",
    molecularWeight: 157.0079,
    C1: 0.16983,
    C2: -0.0001981,
    minimumTemperature: 242.43,
    maximumTemperature: 429.24,
    thermalConductivityAtMinimumTemperature: 0.1218,
    thermalConductivityAtMaximumTemperature: 0.0848
  },

  Bromoethane: {
    name: "Bromoethane",
    formula: "C2H5Br",
    CAS: "74-96-4",
    molecularWeight: 108.965,
    C1: 0.1629,
    C2: -0.00021198,
    minimumTemperature: 154.25,
    maximumTemperature: 327,
    thermalConductivityAtMinimumTemperature: 0.1302,
    thermalConductivityAtMaximumTemperature: 0.0936
  },

  Bromomethane: {
    name: "Bromomethane",
    formula: "CH3Br",
    CAS: "74-83-9",
    molecularWeight: 94.93852,
    C1: 0.16143,
    C2: -0.00021287,
    minimumTemperature: 179.44,
    maximumTemperature: 413.15,
    thermalConductivityAtMinimumTemperature: 0.1232,
    thermalConductivityAtMaximumTemperature: 0.0735
  },

  "1,2Butadiene": {
    name: "1,2-Butadiene",
    formula: "C4H6",
    CAS: "590-19-2",
    molecularWeight: 54.09044,
    C1: 0.21966,
    C2: -0.0003436,
    minimumTemperature: 136.95,
    maximumTemperature: 284,
    thermalConductivityAtMinimumTemperature: 0.1726,
    thermalConductivityAtMaximumTemperature: 0.1221
  },

  "1,3Butadiene": {
    name: "1,3-Butadiene",
    formula: "C4H6",
    CAS: "106-99-0",
    molecularWeight: 54.09044,
    C1: 0.22231,
    C2: -0.0003664,
    minimumTemperature: 164.25,
    maximumTemperature: 268.74,
    thermalConductivityAtMinimumTemperature: 0.1621,
    thermalConductivityAtMaximumTemperature: 0.1238
  },

  Butane: {
    name: "Butane",
    formula: "C4H10",
    CAS: "106-97-8",
    molecularWeight: 58.1222,
    C1: 0.27349,
    C2: -0.00071267,
    C3: 5.1555e-7,
    minimumTemperature: 134.86,
    maximumTemperature: 400,
    thermalConductivityAtMinimumTemperature: 0.1868,
    thermalConductivityAtMaximumTemperature: 0.0709
  },

  "1,2Butanediol": {
    name: "1,2-Butanediol",
    formula: "C4H10O2",
    CAS: "584-03-2",
    molecularWeight: 90.121,
    C1: 0.064621,
    C2: 0.00067625,
    C3: -1.0491e-6,
    minimumTemperature: 220,
    maximumTemperature: 469.57,
    thermalConductivityAtMinimumTemperature: 0.1626,
    thermalConductivityAtMaximumTemperature: 0.1508
  },

  "1,3Butanediol": {
    name: "1,3-Butanediol",
    formula: "C4H10O2",
    CAS: "107-88-0",
    molecularWeight: 90.121,
    C1: -0.0032865,
    C2: 0.0011463,
    C3: -1.5525e-6,
    minimumTemperature: 196.15,
    maximumTemperature: 481.38,
    thermalConductivityAtMinimumTemperature: 0.1618,
    thermalConductivityAtMaximumTemperature: 0.1888
  },

  "1Butanol": {
    name: "1-Butanol",
    formula: "C4H10O",
    CAS: "71-36-3",
    molecularWeight: 74.1216,
    C1: 0.22888,
    C2: -0.00025,
    minimumTemperature: 183.85,
    maximumTemperature: 391,
    thermalConductivityAtMinimumTemperature: 0.1829,
    thermalConductivityAtMaximumTemperature: 0.1311
  },

  "2Butanol": {
    name: "2-Butanol",
    formula: "C4H10O",
    CAS: "78-92-2",
    molecularWeight: 74.1216,
    C1: 0.18599,
    C2: -0.00017227,
    minimumTemperature: 158.45,
    maximumTemperature: 372.9,
    thermalConductivityAtMinimumTemperature: 0.1587,
    thermalConductivityAtMaximumTemperature: 0.1218
  },

  "1Butene": {
    name: "1-Butene",
    formula: "C4H8",
    CAS: "106-98-9",
    molecularWeight: 56.10632,
    C1: 0.22153,
    C2: -0.00035023,
    minimumTemperature: 87.8,
    maximumTemperature: 266.91,
    thermalConductivityAtMinimumTemperature: 0.1908,
    thermalConductivityAtMaximumTemperature: 0.1281
  },

  cis2Butene: {
    name: "cis-2-Butene",
    formula: "C4H8",
    CAS: "590-18-1",
    molecularWeight: 56.10632,
    C1: 0.21378,
    C2: -0.00035445,
    minimumTemperature: 134.26,
    maximumTemperature: 276.87,
    thermalConductivityAtMinimumTemperature: 0.1662,
    thermalConductivityAtMaximumTemperature: 0.1156
  },

  trans2Butene: {
    name: "trans-2-Butene",
    formula: "C4H8",
    CAS: "624-64-6",
    molecularWeight: 56.10632,
    C1: 0.21153,
    C2: -0.00035056,
    minimumTemperature: 167.62,
    maximumTemperature: 274.03,
    thermalConductivityAtMinimumTemperature: 0.1528,
    thermalConductivityAtMaximumTemperature: 0.1155
  },

  ButylAcetate: {
    name: "Butyl acetate",
    formula: "C6H12O2",
    CAS: "123-86-4",
    molecularWeight: 116.15828,
    C1: 0.21721,
    C2: -0.00026563,
    minimumTemperature: 199.65,
    maximumTemperature: 453.75,
    thermalConductivityAtMinimumTemperature: 0.1642,
    thermalConductivityAtMaximumTemperature: 0.0967
  },

  Butylbenzene: {
    name: "Butylbenzene",
    formula: "C10H14",
    CAS: "104-51-8",
    molecularWeight: 134.21816,
    C1: 0.18707,
    C2: -0.00020037,
    minimumTemperature: 185.3,
    maximumTemperature: 473.15,
    thermalConductivityAtMinimumTemperature: 0.1499,
    thermalConductivityAtMaximumTemperature: 0.0923
  },

  ButylMercaptan: {
    name: "Butyl mercaptan",
    formula: "C4H10S",
    CAS: "109-79-5",
    molecularWeight: 90.1872,
    C1: 0.21143,
    C2: -0.000258,
    minimumTemperature: 157.46,
    maximumTemperature: 371.61,
    thermalConductivityAtMinimumTemperature: 0.1708,
    thermalConductivityAtMaximumTemperature: 0.1156
  },

  secButylmercaptan: {
    name: "sec-Butyl mercaptan",
    formula: "C4H10S",
    CAS: "513-53-1",
    molecularWeight: 90.1872,
    C1: 0.2069,
    C2: -0.0002568,
    minimumTemperature: 133.02,
    maximumTemperature: 358.13,
    thermalConductivityAtMinimumTemperature: 0.1727,
    thermalConductivityAtMaximumTemperature: 0.1149
  },

  "1Butyne": {
    name: "1-Butyne",
    formula: "C4H6",
    CAS: "107-00-6",
    molecularWeight: 54.09044,
    C1: 0.22334,
    C2: -0.0003515,
    minimumTemperature: 147.43,
    maximumTemperature: 281.22,
    thermalConductivityAtMinimumTemperature: 0.1715,
    thermalConductivityAtMaximumTemperature: 0.1245
  },

  Butyraldehyde: {
    name: "Butyraldehyde",
    formula: "C4H8O",
    CAS: "123-72-8",
    molecularWeight: 72.10572,
    C1: 0.24962,
    C2: -0.000325,
    minimumTemperature: 176.8,
    maximumTemperature: 347.94,
    thermalConductivityAtMinimumTemperature: 0.1922,
    thermalConductivityAtMaximumTemperature: 0.1365
  },

  ButyricAcid: {
    name: "Butyric acid",
    formula: "C4H8O2",
    CAS: "107-92-6",
    molecularWeight: 88.1051,
    C1: 0.1967,
    C2: -0.000168,
    minimumTemperature: 267.95,
    maximumTemperature: 573.15,
    thermalConductivityAtMinimumTemperature: 0.1517,
    thermalConductivityAtMaximumTemperature: 0.1004
  },

  Butyronitrile: {
    name: "Butyronitrile",
    formula: "C4H7N",
    CAS: "109-74-0",
    molecularWeight: 69.1051,
    C1: 0.24077,
    C2: -0.00028665,
    minimumTemperature: 161.3,
    maximumTemperature: 390.74,
    thermalConductivityAtMinimumTemperature: 0.1945,
    thermalConductivityAtMaximumTemperature: 0.1288
  },

  CarbonDioxide: {
    name: "Carbon dioxide",
    formula: "CO2",
    CAS: "124-38-9",
    molecularWeight: 44.0095,
    C1: 0.4406,
    C2: -0.0012175,
    minimumTemperature: 216.58,
    maximumTemperature: 300,
    thermalConductivityAtMinimumTemperature: 0.1769,
    thermalConductivityAtMaximumTemperature: 0.0754
  },

  CarbonDisulfide: {
    name: "Carbon disulfide",
    formula: "CS2",
    CAS: "75-15-0",
    molecularWeight: 76.1407,
    C1: 0.2333,
    C2: -0.000275,
    minimumTemperature: 161.11,
    maximumTemperature: 319.37,
    thermalConductivityAtMinimumTemperature: 0.189,
    thermalConductivityAtMaximumTemperature: 0.1455
  },

  CarbonMonoxide: {
    name: "Carbon monoxide",
    formula: "CO",
    CAS: "630-08-0",
    molecularWeight: 28.0101,
    C1: 0.2855,
    C2: -0.001784,
    minimumTemperature: 68.15,
    maximumTemperature: 125,
    thermalConductivityAtMinimumTemperature: 0.1639,
    thermalConductivityAtMaximumTemperature: 0.0625
  },

  CarbonTetrachloride: {
    name: "Carbon tetrachloride",
    formula: "CCl4",
    CAS: "56-23-5",
    molecularWeight: 153.8227,
    C1: 0.1589,
    C2: -0.0001987,
    minimumTemperature: 250.33,
    maximumTemperature: 349.79,
    thermalConductivityAtMinimumTemperature: 0.1092,
    thermalConductivityAtMaximumTemperature: 0.0894
  },

  CarbonTetrafluoride: {
    name: "Carbon tetrafluoride",
    formula: "CF4",
    CAS: "75-73-0",
    molecularWeight: 88.0043,
    C1: 0.20771,
    C2: -0.00078883,
    minimumTemperature: 89.56,
    maximumTemperature: 145.1,
    thermalConductivityAtMinimumTemperature: 0.1371,
    thermalConductivityAtMaximumTemperature: 0.0933
  },

  Chlorine: {
    name: "Chlorine",
    formula: "Cl2",
    CAS: "7782-50-5",
    molecularWeight: 70.906,
    C1: 0.2246,
    C2: -0.000064,
    C3: -0.000000788,
    minimumTemperature: 172.12,
    maximumTemperature: 410,
    thermalConductivityAtMinimumTemperature: 0.1902,
    thermalConductivityAtMaximumTemperature: 0.0659
  },

  Chlorobenzene: {
    name: "Chlorobenzene",
    formula: "C6H5Cl",
    CAS: "108-90-7",
    molecularWeight: 112.5569,
    C1: 0.1841,
    C2: -0.0001917,
    minimumTemperature: 227.95,
    maximumTemperature: 404.87,
    thermalConductivityAtMinimumTemperature: 0.1404,
    thermalConductivityAtMaximumTemperature: 0.1065
  },

  Chloroethane: {
    name: "Chloroethane",
    formula: "C2H5Cl",
    CAS: "75-00-3",
    molecularWeight: 64.5141,
    C1: 0.23779,
    C2: -0.000395209,
    minimumTemperature: 136.75,
    maximumTemperature: 348.15,
    thermalConductivityAtMinimumTemperature: 0.1837,
    thermalConductivityAtMaximumTemperature: 0.1002
  },

  Chloroform: {
    name: "Chloroform",
    formula: "CHCl3",
    CAS: "67-66-3",
    molecularWeight: 119.37764,
    C1: 0.1778,
    C2: -0.0002023,
    minimumTemperature: 209.63,
    maximumTemperature: 400,
    thermalConductivityAtMinimumTemperature: 0.1354,
    thermalConductivityAtMaximumTemperature: 0.0969
  },

  Chloromethane: {
    name: "Chloromethane",
    formula: "CH3Cl",
    CAS: "74-87-3",
    molecularWeight: 50.4875,
    C1: 0.25381,
    C2: -0.000431803,
    minimumTemperature: 175.43,
    maximumTemperature: 333,
    thermalConductivityAtMinimumTemperature: 0.1781,
    thermalConductivityAtMaximumTemperature: 0.11
  },

  "1Chloropropane": {
    name: "1-Chloropropane",
    formula: "C3H7Cl",
    CAS: "540-54-5",
    molecularWeight: 78.54068,
    C1: 0.21851,
    C2: -0.00033762,
    minimumTemperature: 150.35,
    maximumTemperature: 393.15,
    thermalConductivityAtMinimumTemperature: 0.1677,
    thermalConductivityAtMaximumTemperature: 0.0858
  },

  "2Chloropropane": {
    name: "2-Chloropropane",
    formula: "C3H7Cl",
    CAS: "75-29-6",
    molecularWeight: 78.54068,
    C1: 0.21232,
    C2: -0.0003149,
    minimumTemperature: 155.97,
    maximumTemperature: 386.7,
    thermalConductivityAtMinimumTemperature: 0.1632,
    thermalConductivityAtMaximumTemperature: 0.0906
  },

  mCresol: {
    name: "m-Cresol",
    formula: "C7H8O",
    CAS: "108-39-4",
    molecularWeight: 108.13782,
    C1: 0.18241,
    C2: -0.00011109,
    minimumTemperature: 285.39,
    maximumTemperature: 475.43,
    thermalConductivityAtMinimumTemperature: 0.1507,
    thermalConductivityAtMaximumTemperature: 0.1296
  },

  oCresol: {
    name: "o-Cresol",
    formula: "C7H8O",
    CAS: "95-48-7",
    molecularWeight: 108.13782,
    C1: 0.19186,
    C2: -0.0001303,
    minimumTemperature: 304.19,
    maximumTemperature: 464.15,
    thermalConductivityAtMinimumTemperature: 0.1522,
    thermalConductivityAtMaximumTemperature: 0.1314
  },

  pCresol: {
    name: "p-Cresol",
    formula: "C7H8O",
    CAS: "106-44-5",
    molecularWeight: 108.13782,
    C1: 0.17971,
    C2: -0.00012037,
    minimumTemperature: 307.93,
    maximumTemperature: 475.13,
    thermalConductivityAtMinimumTemperature: 0.1426,
    thermalConductivityAtMaximumTemperature: 0.1225
  },

  Cumene: {
    name: "Cumene",
    formula: "C9H12",
    CAS: "98-82-8",
    molecularWeight: 120.19158,
    C1: 0.1855,
    C2: -0.00020895,
    minimumTemperature: 177.14,
    maximumTemperature: 413.15,
    thermalConductivityAtMinimumTemperature: 0.1485,
    thermalConductivityAtMaximumTemperature: 0.0992
  },

  Cyanogen: {
    name: "Cyanogen",
    formula: "C2N2",
    CAS: "460-19-5",
    molecularWeight: 52.0348,
    C1: 0.37845,
    C2: -0.00069945,
    minimumTemperature: 245.25,
    maximumTemperature: 251.9,
    thermalConductivityAtMinimumTemperature: 0.2069,
    thermalConductivityAtMaximumTemperature: 0.2023
  },

  Cyclobutane: {
    name: "Cyclobutane",
    formula: "C4H8",
    CAS: "287-23-0",
    molecularWeight: 56.10632,
    C1: 0.22262,
    C2: -0.00034082,
    minimumTemperature: 182.48,
    maximumTemperature: 285.66,
    thermalConductivityAtMinimumTemperature: 0.1604,
    thermalConductivityAtMaximumTemperature: 0.1253
  },

  Cyclohexane: {
    name: "Cyclohexane",
    formula: "C6H12",
    CAS: "110-82-7",
    molecularWeight: 84.15948,
    C1: 0.19813,
    C2: -0.0002505,
    minimumTemperature: 279.69,
    maximumTemperature: 353.87,
    thermalConductivityAtMinimumTemperature: 0.1281,
    thermalConductivityAtMaximumTemperature: 0.1095
  },

  Cyclohexanol: {
    name: "Cyclohexanol",
    formula: "C6H12O",
    CAS: "108-93-0",
    molecularWeight: 100.15888,
    C1: 0.1715,
    C2: -0.0001255,
    minimumTemperature: 296.6,
    maximumTemperature: 563.15,
    thermalConductivityAtMinimumTemperature: 0.1343,
    thermalConductivityAtMaximumTemperature: 0.1008
  },

  Cyclohexanone: {
    name: "Cyclohexanone",
    formula: "C6H10O",
    CAS: "108-94-1",
    molecularWeight: 98.143,
    C1: 0.17557,
    C2: -0.00012392,
    minimumTemperature: 242,
    maximumTemperature: 428.58,
    thermalConductivityAtMinimumTemperature: 0.1456,
    thermalConductivityAtMaximumTemperature: 0.1225
  },

  Cyclohexene: {
    name: "Cyclohexene",
    formula: "C6H10",
    CAS: "110-83-8",
    molecularWeight: 82.1436,
    C1: 0.20926,
    C2: -0.00026037,
    minimumTemperature: 169.67,
    maximumTemperature: 356.12,
    thermalConductivityAtMinimumTemperature: 0.1651,
    thermalConductivityAtMaximumTemperature: 0.1165
  },

  Cyclopentane: {
    name: "Cyclopentane",
    formula: "C5H10",
    CAS: "287-92-3",
    molecularWeight: 70.1329,
    C1: 0.2066,
    C2: -0.0002696,
    minimumTemperature: 179.28,
    maximumTemperature: 322.4,
    thermalConductivityAtMinimumTemperature: 0.1583,
    thermalConductivityAtMaximumTemperature: 0.1197
  },

  Cyclopentene: {
    name: "Cyclopentene",
    formula: "C5H8",
    CAS: "142-29-0",
    molecularWeight: 68.11702,
    C1: 0.21776,
    C2: -0.00027783,
    minimumTemperature: 138.13,
    maximumTemperature: 333.15,
    thermalConductivityAtMinimumTemperature: 0.1794,
    thermalConductivityAtMaximumTemperature: 0.1252
  },

  Cyclopropane: {
    name: "Cyclopropane",
    formula: "C3H6",
    CAS: "75-19-4",
    molecularWeight: 42.07974,
    C1: 0.24348,
    C2: -0.00042568,
    minimumTemperature: 145.59,
    maximumTemperature: 240.37,
    thermalConductivityAtMinimumTemperature: 0.1815,
    thermalConductivityAtMaximumTemperature: 0.1412
  },

  CyclohexylMercaptan: {
    name: "Cyclohexyl mercaptan",
    formula: "C6H12S",
    CAS: "1569-69-3",
    molecularWeight: 116.22448,
    C1: 0.18374,
    C2: -0.0001925,
    minimumTemperature: 189.64,
    maximumTemperature: 431.95,
    thermalConductivityAtMinimumTemperature: 0.1472,
    thermalConductivityAtMaximumTemperature: 0.1006
  },

  Decanal: {
    name: "Decanal",
    formula: "C10H20O",
    CAS: "112-31-2",
    molecularWeight: 156.2652,
    C1: 0.21363,
    C2: -0.00023004,
    minimumTemperature: 285,
    maximumTemperature: 481.65,
    thermalConductivityAtMinimumTemperature: 0.1481,
    thermalConductivityAtMaximumTemperature: 0.1028
  },

  Decane: {
    name: "Decane",
    formula: "C10H22",
    CAS: "124-18-5",
    molecularWeight: 142.28168,
    C1: 0.2063,
    C2: -0.00025,
    minimumTemperature: 243.51,
    maximumTemperature: 447.3,
    thermalConductivityAtMinimumTemperature: 0.1454,
    thermalConductivityAtMaximumTemperature: 0.0945
  },

  DecanoicAcid: {
    name: "Decanoic acid",
    formula: "C10H20O2",
    CAS: "334-48-5",
    molecularWeight: 172.265,
    C1: 0.206,
    C2: -0.0002,
    minimumTemperature: 304.75,
    maximumTemperature: 543.15,
    thermalConductivityAtMinimumTemperature: 0.1451,
    thermalConductivityAtMaximumTemperature: 0.0974
  },

  "1Decanol": {
    name: "1-Decanol",
    formula: "C10H22O",
    CAS: "112-30-1",
    molecularWeight: 158.28108,
    C1: 0.236171,
    C2: -0.00025,
    minimumTemperature: 280.05,
    maximumTemperature: 503,
    thermalConductivityAtMinimumTemperature: 0.1662,
    thermalConductivityAtMaximumTemperature: 0.1104
  },

  "1Decene": {
    name: "1-Decene",
    formula: "C10H20",
    CAS: "872-05-9",
    molecularWeight: 140.2658,
    C1: 0.20237,
    C2: -0.00024187,
    minimumTemperature: 206.89,
    maximumTemperature: 443.75,
    thermalConductivityAtMinimumTemperature: 0.1523,
    thermalConductivityAtMaximumTemperature: 0.095
  },

  DecylMercaptan: {
    name: "Decyl mercaptan",
    formula: "C10H22S",
    CAS: "143-10-2",
    molecularWeight: 174.34668,
    C1: 0.20134,
    C2: -0.00020826,
    minimumTemperature: 247.56,
    maximumTemperature: 512.35,
    thermalConductivityAtMinimumTemperature: 0.1498,
    thermalConductivityAtMaximumTemperature: 0.0946
  },

  "1Decyne": {
    name: "1-Decyne",
    formula: "C10H18",
    CAS: "764-93-2",
    molecularWeight: 138.24992,
    C1: 0.20839,
    C2: -0.00023622,
    minimumTemperature: 229.15,
    maximumTemperature: 447.15,
    thermalConductivityAtMinimumTemperature: 0.1543,
    thermalConductivityAtMaximumTemperature: 0.1028
  },

  Deuterium: {
    name: "Deuterium",
    formula: "D2",
    CAS: "7782-39-0",
    molecularWeight: 4.0316,
    C1: 1.264,
    minimumTemperature: 20.4,
    maximumTemperature: 20.4,
    thermalConductivityAtMinimumTemperature: 1.264,
    thermalConductivityAtMaximumTemperature: 1.264
  },

  "1,1Dibromoethane": {
    name: "1,1-Dibromoethane",
    formula: "C2H4Br2",
    CAS: "557-91-5",
    molecularWeight: 187.86116,
    C1: 0.1426,
    C2: -0.00016402,
    minimumTemperature: 210.15,
    maximumTemperature: 498.4,
    thermalConductivityAtMinimumTemperature: 0.1081,
    thermalConductivityAtMaximumTemperature: 0.0609
  },

  "1,2Dibromoethane": {
    name: "1,2-Dibromoethane",
    formula: "C2H4Br2",
    CAS: "106-93-4",
    molecularWeight: 187.86116,
    C1: 0.13622,
    C2: -0.0001179,
    minimumTemperature: 282.85,
    maximumTemperature: 404.51,
    thermalConductivityAtMinimumTemperature: 0.1029,
    thermalConductivityAtMaximumTemperature: 0.0885
  },

  Dibromomethane: {
    name: "Dibromomethane",
    formula: "CH2Br2",
    CAS: "74-95-3",
    molecularWeight: 173.83458,
    C1: 0.17558,
    C2: -0.00022499,
    minimumTemperature: 220.6,
    maximumTemperature: 370.1,
    thermalConductivityAtMinimumTemperature: 0.1259,
    thermalConductivityAtMaximumTemperature: 0.0923
  },

  DibutylEther: {
    name: "Dibutyl ether",
    formula: "C8H18O",
    CAS: "142-96-1",
    molecularWeight: 130.22792,
    C1: 0.19418,
    C2: -0.00022246,
    minimumTemperature: 175.3,
    maximumTemperature: 523.15,
    thermalConductivityAtMinimumTemperature: 0.1552,
    thermalConductivityAtMaximumTemperature: 0.0778
  },

  mDichlorobenzene: {
    name: "m-Dichlorobenzene",
    formula: "C6H4Cl2",
    CAS: "541-73-1",
    molecularWeight: 147.00196,
    C1: 0.16694,
    C2: -0.0001667,
    minimumTemperature: 248.39,
    maximumTemperature: 446.23,
    thermalConductivityAtMinimumTemperature: 0.1255,
    thermalConductivityAtMaximumTemperature: 0.0926
  },

  oDichlorobenzene: {
    name: "o-Dichlorobenzene",
    formula: "C6H4Cl2",
    CAS: "95-50-1",
    molecularWeight: 147.00196,
    C1: 0.16994,
    C2: -0.0001637,
    minimumTemperature: 262.87,
    maximumTemperature: 351.71,
    thermalConductivityAtMinimumTemperature: 0.1269,
    thermalConductivityAtMaximumTemperature: 0.1124
  },

  pDichlorobenzene: {
    name: "p-Dichlorobenzene",
    formula: "C6H4Cl2",
    CAS: "106-46-7",
    molecularWeight: 147.00196,
    C1: 0.16977,
    C2: -0.0001799,
    minimumTemperature: 326.14,
    maximumTemperature: 548,
    thermalConductivityAtMinimumTemperature: 0.1111,
    thermalConductivityAtMaximumTemperature: 0.0712
  },

  "1,1Dichloroethane": {
    name: "1,1-Dichloroethane",
    formula: "C2H4Cl2",
    CAS: "75-34-3",
    molecularWeight: 98.95916,
    C1: 0.18881,
    C2: -0.00026083,
    minimumTemperature: 176.19,
    maximumTemperature: 416.9,
    thermalConductivityAtMinimumTemperature: 0.1429,
    thermalConductivityAtMaximumTemperature: 0.0801
  },

  "1,2Dichloroethane": {
    name: "1,2-Dichloroethane",
    formula: "C2H4Cl2",
    CAS: "107-06-2",
    molecularWeight: 98.95916,
    C1: 0.214,
    C2: -0.000266,
    minimumTemperature: 253.15,
    maximumTemperature: 356.59,
    thermalConductivityAtMinimumTemperature: 0.1467,
    thermalConductivityAtMaximumTemperature: 0.1191
  },

  Dichloromethane: {
    name: "Dichloromethane",
    formula: "CH2Cl2",
    CAS: "75-09-2",
    molecularWeight: 84.93258,
    C1: 0.23847,
    C2: -0.00033366,
    minimumTemperature: 178.01,
    maximumTemperature: 325,
    thermalConductivityAtMinimumTemperature: 0.1791,
    thermalConductivityAtMaximumTemperature: 0.13
  },

  "1,1Dichloropropane": {
    name: "1,1-Dichloropropane",
    formula: "C3H6Cl2",
    CAS: "78-99-9",
    molecularWeight: 112.98574,
    C1: 0.18,
    C2: -0.00023144,
    minimumTemperature: 192.5,
    maximumTemperature: 438,
    thermalConductivityAtMinimumTemperature: 0.1354,
    thermalConductivityAtMaximumTemperature: 0.0786
  },

  "1,2Dichloropropane": {
    name: "1,2-Dichloropropane",
    formula: "C3H6Cl2",
    CAS: "78-87-5",
    molecularWeight: 112.98574,
    C1: 0.19653,
    C2: -0.00025012,
    minimumTemperature: 172.71,
    maximumTemperature: 457.6,
    thermalConductivityAtMinimumTemperature: 0.1533,
    thermalConductivityAtMaximumTemperature: 0.0821
  },

  DiethanolAmine: {
    name: "Diethanol amine",
    formula: "C4H11NO2",
    CAS: "111-42-2",
    molecularWeight: 105.13564,
    C1: 0.0218,
    C2: 0.0010315,
    C3: -0.000001355,
    minimumTemperature: 301.15,
    maximumTemperature: 673.15,
    thermalConductivityAtMinimumTemperature: 0.2095,
    thermalConductivityAtMaximumTemperature: 0.1022
  },

  DiethylAmine: {
    name: "Diethyl amine",
    formula: "C4H11N",
    CAS: "109-89-7",
    molecularWeight: 73.13684,
    C1: 0.2587,
    C2: -0.00054343,
    C3: 4.2097e-7,
    minimumTemperature: 223.35,
    maximumTemperature: 453.15,
    thermalConductivityAtMinimumTemperature: 0.1583,
    thermalConductivityAtMaximumTemperature: 0.0989
  },

  DiethylEther: {
    name: "Diethyl ether",
    formula: "C4H10O",
    CAS: "60-29-7",
    molecularWeight: 74.1216,
    C1: 0.2495,
    C2: -0.000407,
    minimumTemperature: 156.85,
    maximumTemperature: 433.15,
    thermalConductivityAtMinimumTemperature: 0.1857,
    thermalConductivityAtMaximumTemperature: 0.0732
  },

  DiethylSulfide: {
    name: "Diethyl sulfide",
    formula: "C4H10S",
    CAS: "352-93-2",
    molecularWeight: 90.1872,
    C1: 0.21065,
    C2: -0.0002623,
    minimumTemperature: 169.2,
    maximumTemperature: 365.25,
    thermalConductivityAtMinimumTemperature: 0.1663,
    thermalConductivityAtMaximumTemperature: 0.1148
  },

  "1,1Difluoroethane": {
    name: "1,1-Difluoroethane",
    formula: "C2H4F2",
    CAS: "75-37-6",
    molecularWeight: 66.04997,
    C1: 0.27019,
    C2: -0.000661,
    C3: 3.443e-7,
    minimumTemperature: 154.56,
    maximumTemperature: 363.15,
    thermalConductivityAtMinimumTemperature: 0.1763,
    thermalConductivityAtMaximumTemperature: 0.0756
  },

  "1,2Difluoroethane": {
    name: "1,2-Difluoroethane",
    formula: "C2H4F2",
    CAS: "624-72-6",
    molecularWeight: 66.04997,
    C1: 0.23171,
    C2: -0.00038503,
    minimumTemperature: 179.6,
    maximumTemperature: 372.8,
    thermalConductivityAtMinimumTemperature: 0.1626,
    thermalConductivityAtMaximumTemperature: 0.0882
  },

  Difluoromethane: {
    name: "Difluoromethane",
    formula: "CH2F2",
    CAS: "75-10-5",
    molecularWeight: 52.02339,
    C1: 0.37296,
    C2: -0.00088707,
    C3: 2.576e-7,
    minimumTemperature: 136.95,
    maximumTemperature: 302.56,
    thermalConductivityAtMinimumTemperature: 0.2563,
    thermalConductivityAtMaximumTemperature: 0.1282
  },

  DiIsopropylAmine: {
    name: "Di-isopropyl amine",
    formula: "C6H15N",
    CAS: "108-18-9",
    molecularWeight: 101.19,
    C1: 0.1844,
    C2: -0.000239,
    minimumTemperature: 176.85,
    maximumTemperature: 357.05,
    thermalConductivityAtMinimumTemperature: 0.1421,
    thermalConductivityAtMaximumTemperature: 0.0991
  },

  DiIsopropylEther: {
    name: "Di-isopropyl ether",
    formula: "C6H14O",
    CAS: "108-20-3",
    molecularWeight: 102.17476,
    C1: 0.19162,
    C2: -0.0002762,
    minimumTemperature: 187.65,
    maximumTemperature: 400.1,
    thermalConductivityAtMinimumTemperature: 0.1398,
    thermalConductivityAtMaximumTemperature: 0.0811
  },

  DiIsopropylKetone: {
    name: "Di-isopropyl ketone",
    formula: "C7H14O",
    CAS: "565-80-0",
    molecularWeight: 114.18546,
    C1: 0.22076,
    C2: -0.00027624,
    minimumTemperature: 204.81,
    maximumTemperature: 460,
    thermalConductivityAtMinimumTemperature: 0.1642,
    thermalConductivityAtMaximumTemperature: 0.0937
  },

  "1,1Dimethoxyethane": {
    name: "1,1-Dimethoxyethane",
    formula: "C4H10O2",
    CAS: "534-15-6",
    molecularWeight: 90.121,
    C1: 0.22078,
    C2: -0.00031271,
    minimumTemperature: 159.95,
    maximumTemperature: 337.45,
    thermalConductivityAtMinimumTemperature: 0.1708,
    thermalConductivityAtMaximumTemperature: 0.1153
  },

  "1,2Dimethoxypropane": {
    name: "1,2-Dimethoxypropane",
    formula: "C5H12O2",
    CAS: "7778-85-0",
    molecularWeight: 104.14758,
    C1: 0.22998,
    C2: -0.00030372,
    minimumTemperature: 226.1,
    maximumTemperature: 366.15,
    thermalConductivityAtMinimumTemperature: 0.1613,
    thermalConductivityAtMaximumTemperature: 0.1188
  },

  DimethylAcetylene: {
    name: "Dimethyl acetylene",
    formula: "C4H6",
    CAS: "503-17-3",
    molecularWeight: 54.09044,
    C1: 0.22773,
    C2: -0.00034804,
    minimumTemperature: 240.91,
    maximumTemperature: 300.13,
    thermalConductivityAtMinimumTemperature: 0.1439,
    thermalConductivityAtMaximumTemperature: 0.1233
  },

  DimethylAmine: {
    name: "Dimethyl amine",
    formula: "C2H7N",
    CAS: "124-40-3",
    molecularWeight: 45.08368,
    C1: 0.2454,
    C2: -0.000338,
    minimumTemperature: 180.96,
    maximumTemperature: 403.15,
    thermalConductivityAtMinimumTemperature: 0.1842,
    thermalConductivityAtMaximumTemperature: 0.1091
  },

  "2,3Dimethylbutane": {
    name: "2,3-Dimethylbutane",
    formula: "C6H14",
    CAS: "79-29-8",
    molecularWeight: 86.17536,
    C1: 0.1774,
    C2: -0.0002436,
    minimumTemperature: 145.19,
    maximumTemperature: 331.15,
    thermalConductivityAtMinimumTemperature: 0.142,
    thermalConductivityAtMaximumTemperature: 0.0967
  },

  "1,1Dimethylcyclohexane": {
    name: "1,1-Dimethylcyclohexane",
    formula: "C8H16",
    CAS: "590-66-9",
    molecularWeight: 112.21264,
    C1: 0.1807,
    C2: -0.0002177,
    minimumTemperature: 239.66,
    maximumTemperature: 392.7,
    thermalConductivityAtMinimumTemperature: 0.1285,
    thermalConductivityAtMaximumTemperature: 0.0952
  },

  "cis1,2Dimethylcyclohexane": {
    name: "cis-1,2-Dimethylcyclohexane",
    formula: "C8H16",
    CAS: "2207-01-4",
    molecularWeight: 112.21264,
    C1: 0.18092,
    C2: -0.0002108,
    minimumTemperature: 223.16,
    maximumTemperature: 402.94,
    thermalConductivityAtMinimumTemperature: 0.1339,
    thermalConductivityAtMaximumTemperature: 0.096
  },

  "trans1,2Dimethylcyclohexane": {
    name: "trans-1,2-Dimethylcyclohexane",
    formula: "C8H16",
    CAS: "6876-23-9",
    molecularWeight: 112.21264,
    C1: 0.17675,
    C2: -0.0002077,
    minimumTemperature: 184.99,
    maximumTemperature: 596.15,
    thermalConductivityAtMinimumTemperature: 0.1383,
    thermalConductivityAtMaximumTemperature: 0.0529
  },

  DimethylDisulfide: {
    name: "Dimethyl disulfide",
    formula: "C2H6S2",
    CAS: "624-92-0",
    molecularWeight: 94.19904,
    C1: 0.21373,
    C2: -0.0002447,
    minimumTemperature: 188.44,
    maximumTemperature: 382.9,
    thermalConductivityAtMinimumTemperature: 0.1676,
    thermalConductivityAtMaximumTemperature: 0.12
  },

  DimethylEther: {
    name: "Dimethyl ether",
    formula: "C2H6O",
    CAS: "115-10-6",
    molecularWeight: 46.06844,
    C1: 0.31174,
    C2: -0.0005638,
    minimumTemperature: 131.65,
    maximumTemperature: 320.03,
    thermalConductivityAtMinimumTemperature: 0.2375,
    thermalConductivityAtMaximumTemperature: 0.1313
  },

  NNDimethylFormamide: {
    name: "N,N-Dimethyl formamide",
    formula: "C3H7NO",
    CAS: "68-12-2",
    molecularWeight: 73.09378,
    C1: 0.26,
    C2: -0.000255,
    minimumTemperature: 250,
    maximumTemperature: 425.15,
    thermalConductivityAtMinimumTemperature: 0.1963,
    thermalConductivityAtMaximumTemperature: 0.1516
  },

  "2,3Dimethylpentane": {
    name: "2,3-Dimethylpentane",
    formula: "C7H16",
    CAS: "565-59-3",
    molecularWeight: 100.20194,
    C1: 0.17964,
    C2: -0.000246,
    minimumTemperature: 160,
    maximumTemperature: 362.93,
    thermalConductivityAtMinimumTemperature: 0.1403,
    thermalConductivityAtMaximumTemperature: 0.0904
  },

  DimethylPhthalate: {
    name: "Dimethyl phthalate",
    formula: "C10H10O4",
    CAS: "131-11-3",
    molecularWeight: 194.184,
    C1: 0.13905,
    C2: 0.0001509,
    C3: -3.98e-7,
    minimumTemperature: 273.15,
    maximumTemperature: 556.85,
    thermalConductivityAtMinimumTemperature: 0.1506,
    thermalConductivityAtMaximumTemperature: 0.0997
  },

  Dimethylsilane: {
    name: "Dimethylsilane",
    formula: "C2H8Si",
    CAS: "1111-74-6",
    molecularWeight: 60.17042,
    C1: 0.25547,
    C2: -0.0004411,
    minimumTemperature: 122.93,
    maximumTemperature: 253.55,
    thermalConductivityAtMinimumTemperature: 0.2012,
    thermalConductivityAtMaximumTemperature: 0.1436
  },

  DimethylSulfide: {
    name: "Dimethyl sulfide",
    formula: "C2H6S",
    CAS: "75-18-3",
    molecularWeight: 62.134,
    C1: 0.23942,
    C2: -0.0003311,
    minimumTemperature: 174.88,
    maximumTemperature: 310.48,
    thermalConductivityAtMinimumTemperature: 0.1815,
    thermalConductivityAtMaximumTemperature: 0.1366
  },

  DimethylSulfoxide: {
    name: "Dimethyl sulfoxide",
    formula: "C2H6OS",
    CAS: "67-68-5",
    molecularWeight: 78.13344,
    C1: 0.3142,
    C2: -0.00030809,
    minimumTemperature: 291.67,
    maximumTemperature: 464,
    thermalConductivityAtMinimumTemperature: 0.2243,
    thermalConductivityAtMaximumTemperature: 0.1712
  },

  DimethylTerephthalate: {
    name: "Dimethyl terephthalate",
    formula: "C10H10O4",
    CAS: "120-61-6",
    molecularWeight: 194.184,
    C1: 0.21956,
    C2: -0.000209955,
    minimumTemperature: 413.79,
    maximumTemperature: 559.2,
    thermalConductivityAtMinimumTemperature: 0.1327,
    thermalConductivityAtMaximumTemperature: 0.1022
  },

  "1,4Dioxane": {
    name: "1,4-Dioxane",
    formula: "C4H8O2",
    CAS: "123-91-1",
    molecularWeight: 88.10512,
    C1: 0.3027,
    C2: -0.0004827,
    minimumTemperature: 284.95,
    maximumTemperature: 374.47,
    thermalConductivityAtMinimumTemperature: 0.1652,
    thermalConductivityAtMaximumTemperature: 0.1219
  },

  DiphenylEther: {
    name: "Diphenyl ether",
    formula: "C12H10O",
    CAS: "101-84-8",
    molecularWeight: 170.2072,
    C1: 0.18686,
    C2: -0.00014953,
    minimumTemperature: 300.03,
    maximumTemperature: 531.46,
    thermalConductivityAtMinimumTemperature: 0.142,
    thermalConductivityAtMaximumTemperature: 0.1074
  },

  DipropylAmine: {
    name: "Dipropyl amine",
    formula: "C6H15N",
    CAS: "142-84-7",
    molecularWeight: 101.19,
    C1: 0.2224,
    C2: -0.000314,
    minimumTemperature: 210.15,
    maximumTemperature: 382,
    thermalConductivityAtMinimumTemperature: 0.1564,
    thermalConductivityAtMaximumTemperature: 0.1025
  },

  Dodecane: {
    name: "Dodecane",
    formula: "C12H26",
    CAS: "112-40-3",
    molecularWeight: 170.33484,
    C1: 0.2047,
    C2: -0.0002326,
    minimumTemperature: 263.57,
    maximumTemperature: 489.47,
    thermalConductivityAtMinimumTemperature: 0.1434,
    thermalConductivityAtMaximumTemperature: 0.0909
  },

  Eicosane: {
    name: "Eicosane",
    formula: "C20H42",
    CAS: "112-95-8",
    molecularWeight: 282.54748,
    C1: 0.2178,
    C2: -0.0002233,
    minimumTemperature: 309.58,
    maximumTemperature: 616.93,
    thermalConductivityAtMinimumTemperature: 0.1487,
    thermalConductivityAtMaximumTemperature: 0.08
  },

  Ethane: {
    name: "Ethane",
    formula: "C2H6",
    CAS: "74-84-0",
    molecularWeight: 30.069,
    C1: 0.35758,
    C2: -0.0011458,
    C3: 6.1866e-7,
    minimumTemperature: 90.35,
    maximumTemperature: 300,
    thermalConductivityAtMinimumTemperature: 0.2591,
    thermalConductivityAtMaximumTemperature: 0.0695
  },

  Ethanol: {
    name: "Ethanol",
    formula: "C2H6O",
    CAS: "64-17-5",
    molecularWeight: 46.06844,
    C1: 0.2468,
    C2: -0.000264,
    minimumTemperature: 159.05,
    maximumTemperature: 353.15,
    thermalConductivityAtMinimumTemperature: 0.2048,
    thermalConductivityAtMaximumTemperature: 0.1536
  },

  EthylAcetate: {
    name: "Ethyl acetate",
    formula: "C4H8O2",
    CAS: "141-78-6",
    molecularWeight: 88.10512,
    C1: 0.2501,
    C2: -0.0003563,
    minimumTemperature: 189.6,
    maximumTemperature: 350.21,
    thermalConductivityAtMinimumTemperature: 0.1825,
    thermalConductivityAtMaximumTemperature: 0.1253
  },

  EthylAmine: {
    name: "Ethyl amine",
    formula: "C2H7N",
    CAS: "75-04-7",
    molecularWeight: 45.08368,
    C1: 0.30059,
    C2: -0.000581,
    C3: 6.602e-7,
    minimumTemperature: 192.15,
    maximumTemperature: 293.15,
    thermalConductivityAtMinimumTemperature: 0.2133,
    thermalConductivityAtMaximumTemperature: 0.187
  },

  Ethylbenzene: {
    name: "Ethylbenzene",
    formula: "C8H10",
    CAS: "100-41-4",
    molecularWeight: 106.165,
    C1: 0.1999,
    C2: -0.00023823,
    minimumTemperature: 178.2,
    maximumTemperature: 413.1,
    thermalConductivityAtMinimumTemperature: 0.1574,
    thermalConductivityAtMaximumTemperature: 0.1015
  },

  EthylBenzoate: {
    name: "Ethyl benzoate",
    formula: "C9H10O2",
    CAS: "93-89-0",
    molecularWeight: 150.1745,
    C1: 0.20771,
    C2: -0.00021265,
    minimumTemperature: 238.45,
    maximumTemperature: 549.4,
    thermalConductivityAtMinimumTemperature: 0.157,
    thermalConductivityAtMaximumTemperature: 0.0909
  },

  "2EthylButanoicAcid": {
    name: "2-Ethyl butanoic acid",
    formula: "C6H12O2",
    CAS: "88-09-5",
    molecularWeight: 116.15828,
    C1: 0.2175,
    C2: -0.0002407,
    minimumTemperature: 258.15,
    maximumTemperature: 516.5,
    thermalConductivityAtMinimumTemperature: 0.1554,
    thermalConductivityAtMaximumTemperature: 0.0932
  },

  EthylButyrate: {
    name: "Ethyl butyrate",
    formula: "C6H12O2",
    CAS: "105-54-4",
    molecularWeight: 116.15828,
    C1: 0.21043,
    C2: -0.00024903,
    minimumTemperature: 175.15,
    maximumTemperature: 453.15,
    thermalConductivityAtMinimumTemperature: 0.1668,
    thermalConductivityAtMaximumTemperature: 0.0976
  },

  Ethylcyclohexane: {
    name: "Ethylcyclohexane",
    formula: "C8H16",
    CAS: "1678-91-7",
    molecularWeight: 112.21264,
    C1: 0.17662,
    C2: -0.0002014,
    minimumTemperature: 161.84,
    maximumTemperature: 404.94,
    thermalConductivityAtMinimumTemperature: 0.144,
    thermalConductivityAtMaximumTemperature: 0.0951
  },

  Ethylcyclopentane: {
    name: "Ethylcyclopentane",
    formula: "C7H14",
    CAS: "1640-89-7",
    molecularWeight: 98.18606,
    C1: 0.18334,
    C2: -0.0002228,
    minimumTemperature: 134.71,
    maximumTemperature: 376.62,
    thermalConductivityAtMinimumTemperature: 0.1533,
    thermalConductivityAtMaximumTemperature: 0.0994
  },

  Ethylene: {
    name: "Ethylene",
    formula: "C2H4",
    CAS: "74-85-1",
    molecularWeight: 28.05316,
    C1: 0.4194,
    C2: -0.001591,
    C3: 0.000001306,
    minimumTemperature: 104,
    maximumTemperature: 280,
    thermalConductivityAtMinimumTemperature: 0.2681,
    thermalConductivityAtMaximumTemperature: 0.0763
  },

  Ethylenediamine: {
    name: "Ethylenediamine",
    formula: "C2H8N2",
    CAS: "107-15-3",
    molecularWeight: 60.09832,
    C1: 0.36434,
    C2: -0.0004433,
    minimumTemperature: 284.29,
    maximumTemperature: 390.41,
    thermalConductivityAtMinimumTemperature: 0.2383,
    thermalConductivityAtMaximumTemperature: 0.1913
  },

  EthyleneGlycol: {
    name: "Ethylene glycol",
    formula: "C2H6O2",
    CAS: "107-21-1",
    molecularWeight: 62.06784,
    C1: 0.088067,
    C2: 0.00094712,
    C3: -1.3114e-6,
    minimumTemperature: 260.15,
    maximumTemperature: 470.45,
    thermalConductivityAtMinimumTemperature: 0.2457,
    thermalConductivityAtMaximumTemperature: 0.2434
  },

  Ethyleneimine: {
    name: "Ethyleneimine",
    formula: "C2H5N",
    CAS: "151-56-4",
    molecularWeight: 43.0678,
    C1: 0.3097,
    C2: -0.0004023,
    minimumTemperature: 195.2,
    maximumTemperature: 329,
    thermalConductivityAtMinimumTemperature: 0.2312,
    thermalConductivityAtMaximumTemperature: 0.1773
  },

  EthyleneOxide: {
    name: "Ethylene oxide",
    formula: "C2H4O",
    CAS: "75-21-8",
    molecularWeight: 44.05256,
    C1: 0.26957,
    C2: -0.0003984,
    minimumTemperature: 160.65,
    maximumTemperature: 283.85,
    thermalConductivityAtMinimumTemperature: 0.2056,
    thermalConductivityAtMaximumTemperature: 0.1565
  },

  EthylFormate: {
    name: "Ethyl formate",
    formula: "C3H6O2",
    CAS: "109-94-4",
    molecularWeight: 74.07854,
    C1: 0.2587,
    C2: -0.00033,
    minimumTemperature: 193.55,
    maximumTemperature: 433.15,
    thermalConductivityAtMinimumTemperature: 0.1948,
    thermalConductivityAtMaximumTemperature: 0.1158
  },

  "2EthylHexanoicAcid": {
    name: "2-Ethyl hexanoic acid",
    formula: "C8H16O2",
    CAS: "149-57-5",
    molecularWeight: 144.211,
    C1: 0.20954,
    C2: -0.00022251,
    minimumTemperature: 155.15,
    maximumTemperature: 500.66,
    thermalConductivityAtMinimumTemperature: 0.175,
    thermalConductivityAtMaximumTemperature: 0.0981
  },

  EthylhexylEther: {
    name: "Ethylhexyl ether",
    formula: "C8H18O",
    CAS: "5756-43-4",
    molecularWeight: 130.22792,
    C1: 0.19356,
    C2: -0.00024102,
    minimumTemperature: 180,
    maximumTemperature: 466.4,
    thermalConductivityAtMinimumTemperature: 0.1502,
    thermalConductivityAtMaximumTemperature: 0.0812
  },

  EthylisopropylEther: {
    name: "Ethylisopropyl ether",
    formula: "C5H12O",
    CAS: "625-54-7",
    molecularWeight: 88.14818,
    C1: 0.21928,
    C2: -0.00032568,
    minimumTemperature: 140,
    maximumTemperature: 391.2,
    thermalConductivityAtMinimumTemperature: 0.1737,
    thermalConductivityAtMaximumTemperature: 0.0919
  },

  EthylisopropylKetone: {
    name: "Ethylisopropyl ketone",
    formula: "C6H12O",
    CAS: "565-69-5",
    molecularWeight: 100.15888,
    C1: 0.22873,
    C2: -0.0002913,
    minimumTemperature: 204.15,
    maximumTemperature: 450.1,
    thermalConductivityAtMinimumTemperature: 0.1693,
    thermalConductivityAtMaximumTemperature: 0.0976
  },

  EthylMercaptan: {
    name: "Ethyl mercaptan",
    formula: "C2H6S",
    CAS: "75-08-1",
    molecularWeight: 62.13404,
    C1: 0.23392,
    C2: -0.0003206,
    minimumTemperature: 125.26,
    maximumTemperature: 308.15,
    thermalConductivityAtMinimumTemperature: 0.1938,
    thermalConductivityAtMaximumTemperature: 0.1351
  },

  EthylPropionate: {
    name: "Ethyl propionate",
    formula: "C5H10O2",
    CAS: "105-37-3",
    molecularWeight: 102.1317,
    C1: 0.2137,
    C2: -0.0002515,
    minimumTemperature: 199.25,
    maximumTemperature: 495,
    thermalConductivityAtMinimumTemperature: 0.1636,
    thermalConductivityAtMaximumTemperature: 0.0892
  },

  EthylpropylEther: {
    name: "Ethylpropyl ether",
    formula: "C5H12O",
    CAS: "628-32-0",
    molecularWeight: 88.14818,
    C1: 0.22717,
    C2: -0.0003298,
    minimumTemperature: 145.65,
    maximumTemperature: 400.07,
    thermalConductivityAtMinimumTemperature: 0.1791,
    thermalConductivityAtMaximumTemperature: 0.0952
  },

  Ethyltrichlorosilane: {
    name: "Ethyltrichlorosilane",
    formula: "C2H5Cl3Si",
    CAS: "115-21-9",
    molecularWeight: 163.506,
    C1: 0.19653,
    C2: -0.00016907,
    C3: -1.6698e-7,
    minimumTemperature: 167.55,
    maximumTemperature: 371.05,
    thermalConductivityAtMinimumTemperature: 0.1635,
    thermalConductivityAtMaximumTemperature: 0.1108
  },

  Fluorine: {
    name: "Fluorine",
    formula: "F2",
    CAS: "7782-41-4",
    molecularWeight: 37.9968064,
    C1: 0.2758,
    C2: -0.0016297,
    minimumTemperature: 53.48,
    maximumTemperature: 130,
    thermalConductivityAtMinimumTemperature: 0.1886,
    thermalConductivityAtMaximumTemperature: 0.0639
  },

  Fluorobenzene: {
    name: "Fluorobenzene",
    formula: "C6H5F",
    CAS: "462-06-6",
    molecularWeight: 96.1023032,
    C1: 0.20962,
    C2: -0.00028034,
    minimumTemperature: 238.15,
    maximumTemperature: 353.15,
    thermalConductivityAtMinimumTemperature: 0.1429,
    thermalConductivityAtMaximumTemperature: 0.1106
  },

  Fluoroethane: {
    name: "Fluoroethane",
    formula: "C2H5F",
    CAS: "353-36-6",
    molecularWeight: 48.0595,
    C1: 0.25866,
    C2: -0.000498,
    minimumTemperature: 129.95,
    maximumTemperature: 235.45,
    thermalConductivityAtMinimumTemperature: 0.1939,
    thermalConductivityAtMaximumTemperature: 0.1414
  },

  Fluoromethane: {
    name: "Fluoromethane",
    formula: "CH3F",
    CAS: "593-53-3",
    molecularWeight: 34.03292,
    C1: 0.48162,
    C2: -0.0010709,
    C3: 0,
    C4: 0,
    minimumTemperature: 131.35,
    maximumTemperature: 194.82,
    thermalConductivityAtMinimumTemperature: 0.341,
    thermalConductivityAtMaximumTemperature: 0.273
  },

  Formaldehyde: {
    name: "Formaldehyde",
    formula: "CH2O",
    CAS: "50-00-0",
    molecularWeight: 30.02598,
    C1: 0.336003243,
    C2: -0.00054,
    minimumTemperature: 155.15,
    maximumTemperature: 253.85,
    thermalConductivityAtMinimumTemperature: 0.2522,
    thermalConductivityAtMaximumTemperature: 0.1989
  },

  Formamide: {
    name: "Formamide",
    formula: "CH3NO",
    CAS: "75-12-7",
    molecularWeight: 45.04062,
    C1: 0.3847,
    C2: -0.0001065,
    minimumTemperature: 275.7,
    maximumTemperature: 493,
    thermalConductivityAtMinimumTemperature: 0.3553,
    thermalConductivityAtMaximumTemperature: 0.3322
  },

  FormicAcid: {
    name: "Formic acid",
    formula: "CH2O2",
    CAS: "64-18-6",
    molecularWeight: 46.0257,
    C1: 0.302,
    C2: -0.000108,
    minimumTemperature: 281.45,
    maximumTemperature: 373.71,
    thermalConductivityAtMinimumTemperature: 0.2716,
    thermalConductivityAtMaximumTemperature: 0.2616
  },

  Furan: {
    name: "Furan",
    formula: "C4H4O",
    CAS: "110-00-9",
    molecularWeight: 68.07396,
    C1: 0.2198,
    C2: -0.00031405,
    minimumTemperature: 187.55,
    maximumTemperature: 304.5,
    thermalConductivityAtMinimumTemperature: 0.1609,
    thermalConductivityAtMaximumTemperature: 0.1242
  },

  Helium4: {
    name: "Helium-4",
    formula: "He",
    CAS: "7440-59-7",
    molecularWeight: 4.0026,
    C1: -0.013833,
    C2: 0.022913,
    C3: -0.0054872,
    C4: 0.0004585,
    minimumTemperature: 2.2,
    maximumTemperature: 4.8,
    thermalConductivityAtMinimumTemperature: 0.0149,
    thermalConductivityAtMaximumTemperature: 0.0204
  },

  Heptadecane: {
    name: "Heptadecane",
    formula: "C17H36",
    CAS: "629-78-7",
    molecularWeight: 240.46774,
    C1: 0.20926,
    C2: -0.0002215,
    minimumTemperature: 295.13,
    maximumTemperature: 575.3,
    thermalConductivityAtMinimumTemperature: 0.1439,
    thermalConductivityAtMaximumTemperature: 0.0818
  },

  Heptanal: {
    name: "Heptanal",
    formula: "C7H14O",
    CAS: "111-71-7",
    molecularWeight: 114.18546,
    C1: 0.22841,
    C2: -0.00026273,
    minimumTemperature: 229.8,
    maximumTemperature: 426.15,
    thermalConductivityAtMinimumTemperature: 0.168,
    thermalConductivityAtMaximumTemperature: 0.1164
  },

  Heptane: {
    name: "Heptane",
    formula: "C7H16",
    CAS: "142-82-5",
    molecularWeight: 100.20194,
    C1: 0.215,
    C2: -0.000303,
    minimumTemperature: 182.57,
    maximumTemperature: 371.58,
    thermalConductivityAtMinimumTemperature: 0.1597,
    thermalConductivityAtMaximumTemperature: 0.1024
  },

  HeptanoicAcid: {
    name: "Heptanoic acid",
    formula: "C7H14O2",
    CAS: "111-14-8",
    molecularWeight: 130.185,
    C1: 0.202,
    C2: -0.0002,
    minimumTemperature: 265.83,
    maximumTemperature: 496.15,
    thermalConductivityAtMinimumTemperature: 0.1488,
    thermalConductivityAtMaximumTemperature: 0.1028
  },

  "1Heptanol": {
    name: "1-Heptanol",
    formula: "C7H16O",
    CAS: "111-70-6",
    molecularWeight: 116.20134,
    C1: 0.234063,
    C2: -0.00025,
    minimumTemperature: 239.15,
    maximumTemperature: 573.15,
    thermalConductivityAtMinimumTemperature: 0.1743,
    thermalConductivityAtMaximumTemperature: 0.0908
  },

  "2Heptanol": {
    name: "2-Heptanol",
    formula: "C7H16O",
    CAS: "543-49-7",
    molecularWeight: 116.20134,
    C1: 0.21142,
    C2: -0.00024793,
    minimumTemperature: 220,
    maximumTemperature: 432.9,
    thermalConductivityAtMinimumTemperature: 0.1569,
    thermalConductivityAtMaximumTemperature: 0.1041
  },

  "3Heptanone": {
    name: "3-Heptanone",
    formula: "C7H14O",
    CAS: "106-35-4",
    molecularWeight: 114.18546,
    C1: 0.2026,
    C2: -0.0002234,
    minimumTemperature: 234.15,
    maximumTemperature: 553.15,
    thermalConductivityAtMinimumTemperature: 0.1503,
    thermalConductivityAtMaximumTemperature: 0.079
  },

  "2Heptanone": {
    name: "2-Heptanone",
    formula: "C7H14O",
    CAS: "110-43-0",
    molecularWeight: 114.18546,
    C1: 0.2108,
    C2: -0.000246,
    minimumTemperature: 238.15,
    maximumTemperature: 424.05,
    thermalConductivityAtMinimumTemperature: 0.1522,
    thermalConductivityAtMaximumTemperature: 0.1065
  },

  "1Heptene": {
    name: "1-Heptene",
    formula: "C7H14",
    CAS: "592-76-7",
    molecularWeight: 98.18606,
    C1: 0.19664,
    C2: -0.00016623,
    C3: -2.52e-7,
    minimumTemperature: 154.12,
    maximumTemperature: 366.79,
    thermalConductivityAtMinimumTemperature: 0.165,
    thermalConductivityAtMaximumTemperature: 0.1017
  },

  HeptylMercaptan: {
    name: "Heptyl mercaptan",
    formula: "C7H16S",
    CAS: "1639-09-4",
    molecularWeight: 132.26694,
    C1: 0.2037,
    C2: -0.0002252,
    minimumTemperature: 229.92,
    maximumTemperature: 450.09,
    thermalConductivityAtMinimumTemperature: 0.1519,
    thermalConductivityAtMaximumTemperature: 0.1023
  },

  "1Heptyne": {
    name: "1-Heptyne",
    formula: "C7H12",
    CAS: "628-71-7",
    molecularWeight: 96.17018,
    C1: 0.21098,
    C2: -0.00026652,
    minimumTemperature: 192.22,
    maximumTemperature: 372.93,
    thermalConductivityAtMinimumTemperature: 0.1597,
    thermalConductivityAtMaximumTemperature: 0.1116
  },

  Hexadecane: {
    name: "Hexadecane",
    formula: "C16H34",
    CAS: "544-76-3",
    molecularWeight: 226.44116,
    C1: 0.20749,
    C2: -0.00021917,
    minimumTemperature: 291.31,
    maximumTemperature: 560.01,
    thermalConductivityAtMinimumTemperature: 0.1436,
    thermalConductivityAtMaximumTemperature: 0.0848
  },

  Hexanal: {
    name: "Hexanal",
    formula: "C6H12O",
    CAS: "66-25-1",
    molecularWeight: 100.15888,
    C1: 0.22832,
    C2: -0.00026482,
    minimumTemperature: 214.93,
    maximumTemperature: 401.15,
    thermalConductivityAtMinimumTemperature: 0.1714,
    thermalConductivityAtMaximumTemperature: 0.1221
  },

  Hexane: {
    name: "Hexane",
    formula: "C6H14",
    CAS: "110-54-3",
    molecularWeight: 86.17536,
    C1: 0.22492,
    C2: -0.0003533,
    minimumTemperature: 177.83,
    maximumTemperature: 370,
    thermalConductivityAtMinimumTemperature: 0.1621,
    thermalConductivityAtMaximumTemperature: 0.0942
  },

  HexanoicAcid: {
    name: "Hexanoic acid",
    formula: "C6H12O2",
    CAS: "142-62-1",
    molecularWeight: 116.158,
    C1: 0.1855,
    C2: -0.000146,
    minimumTemperature: 269.25,
    maximumTemperature: 603.15,
    thermalConductivityAtMinimumTemperature: 0.1462,
    thermalConductivityAtMaximumTemperature: 0.0974
  },

  "1Hexanol": {
    name: "1-Hexanol",
    formula: "C6H14O",
    CAS: "111-27-3",
    molecularWeight: 102.17476,
    C1: 0.230656,
    C2: -0.00025,
    minimumTemperature: 228.55,
    maximumTemperature: 575,
    thermalConductivityAtMinimumTemperature: 0.1735,
    thermalConductivityAtMaximumTemperature: 0.0869
  },

  "2Hexanol": {
    name: "2-Hexanol",
    formula: "C6H14O",
    CAS: "626-93-7",
    molecularWeight: 102.175,
    C1: 0.21391,
    C2: -0.00026042,
    minimumTemperature: 223,
    maximumTemperature: 412.4,
    thermalConductivityAtMinimumTemperature: 0.1558,
    thermalConductivityAtMaximumTemperature: 0.1065
  },

  "2Hexanone": {
    name: "2-Hexanone",
    formula: "C6H12O",
    CAS: "591-78-6",
    molecularWeight: 100.15888,
    C1: 0.21076,
    C2: -0.00024,
    minimumTemperature: 217.35,
    maximumTemperature: 400.85,
    thermalConductivityAtMinimumTemperature: 0.1586,
    thermalConductivityAtMaximumTemperature: 0.1146
  },

  "3Hexanone": {
    name: "3-Hexanone",
    formula: "C6H12O",
    CAS: "589-38-8",
    molecularWeight: 100.15888,
    C1: 0.23493,
    C2: -0.0002912,
    minimumTemperature: 217.5,
    maximumTemperature: 466,
    thermalConductivityAtMinimumTemperature: 0.1716,
    thermalConductivityAtMaximumTemperature: 0.0992
  },

  "1Hexene": {
    name: "1-Hexene",
    formula: "C6H12",
    CAS: "592-41-6",
    molecularWeight: 84.15948,
    C1: 0.19112,
    C2: -8.3519e-5,
    C3: -5.14e-7,
    minimumTemperature: 133.39,
    maximumTemperature: 336.63,
    thermalConductivityAtMinimumTemperature: 0.1708,
    thermalConductivityAtMaximumTemperature: 0.1048
  },

  "3Hexyne": {
    name: "3-Hexyne",
    formula: "C6H10",
    CAS: "928-49-4",
    molecularWeight: 82.1436,
    C1: 0.20996,
    C2: -0.0002692,
    minimumTemperature: 170.05,
    maximumTemperature: 354.35,
    thermalConductivityAtMinimumTemperature: 0.1642,
    thermalConductivityAtMaximumTemperature: 0.1146
  },

  HexylMercaptan: {
    name: "Hexyl mercaptan",
    formula: "C6H14S",
    CAS: "111-31-9",
    molecularWeight: 118.24036,
    C1: 0.2058,
    C2: -0.0002324,
    minimumTemperature: 192.62,
    maximumTemperature: 425.81,
    thermalConductivityAtMinimumTemperature: 0.161,
    thermalConductivityAtMaximumTemperature: 0.1068
  },

  "1Hexyne": {
    name: "1-Hexyne",
    formula: "C6H10",
    CAS: "693-02-7",
    molecularWeight: 82.1436,
    C1: 0.21492,
    C2: -0.0002899,
    minimumTemperature: 141.25,
    maximumTemperature: 344.48,
    thermalConductivityAtMinimumTemperature: 0.174,
    thermalConductivityAtMaximumTemperature: 0.1151
  },

  "2Hexyne": {
    name: "2-Hexyne",
    formula: "C6H10",
    CAS: "764-35-2",
    molecularWeight: 82.1436,
    C1: 0.2119,
    C2: -0.00027048,
    minimumTemperature: 183.65,
    maximumTemperature: 357.67,
    thermalConductivityAtMinimumTemperature: 0.1622,
    thermalConductivityAtMaximumTemperature: 0.1152
  },

  Hydrazine: {
    name: "Hydrazine",
    formula: "H4N2",
    CAS: "302-01-2",
    molecularWeight: 32.04516,
    C1: 1.3675,
    C2: -0.0015895,
    minimumTemperature: 274.69,
    maximumTemperature: 623.15,
    thermalConductivityAtMinimumTemperature: 0.9309,
    thermalConductivityAtMaximumTemperature: 0.377
  },

  Hydrogen: {
    name: "Hydrogen",
    formula: "H2",
    CAS: "1333-74-0",
    molecularWeight: 2.01588,
    C1: -0.0917,
    C2: 0.017678,
    C3: -0.000382,
    C4: -3.33e-6,
    C5: 1.0266e-7,
    minimumTemperature: 13.95,
    maximumTemperature: 31,
    thermalConductivityAtMinimumTemperature: 0.0754,
    thermalConductivityAtMaximumTemperature: 0.0848
  },

  HydrogenBromide: {
    name: "Hydrogen bromide",
    formula: "BrH",
    CAS: "10035-10-6",
    molecularWeight: 80.91194,
    C1: 0.234,
    C2: -0.0004636,
    minimumTemperature: 185.15,
    maximumTemperature: 290.62,
    thermalConductivityAtMinimumTemperature: 0.1482,
    thermalConductivityAtMaximumTemperature: 0.0993
  },

  HydrogenChloride: {
    name: "Hydrogen chloride",
    formula: "ClH",
    CAS: "7647-01-0",
    molecularWeight: 36.46094,
    C1: 0.8045,
    C2: -0.002102,
    minimumTemperature: 273.15,
    maximumTemperature: 323.15,
    thermalConductivityAtMinimumTemperature: 0.2303,
    thermalConductivityAtMaximumTemperature: 0.1252
  },

  HydrogenCyanide: {
    name: "Hydrogen cyanide",
    formula: "CHN",
    CAS: "74-90-8",
    molecularWeight: 27.02534,
    C1: 0.43454,
    C2: -0.0007008,
    minimumTemperature: 259.83,
    maximumTemperature: 298.85,
    thermalConductivityAtMinimumTemperature: 0.2525,
    thermalConductivityAtMaximumTemperature: 0.2251
  },

  HydrogenFluoride: {
    name: "Hydrogen fluoride",
    formula: "FH",
    CAS: "7664-39-3",
    molecularWeight: 20.0063432,
    C1: 0.7516,
    C2: -0.0010874,
    minimumTemperature: 189.79,
    maximumTemperature: 394.45,
    thermalConductivityAtMinimumTemperature: 0.5452,
    thermalConductivityAtMaximumTemperature: 0.3227
  },

  HydrogenSulfide: {
    name: "Hydrogen sulfide",
    formula: "H2S",
    CAS: "7783-06-4",
    molecularWeight: 34.08088,
    C1: 0.4842,
    C2: -0.001184,
    minimumTemperature: 193.15,
    maximumTemperature: 292.42,
    thermalConductivityAtMinimumTemperature: 0.2555,
    thermalConductivityAtMaximumTemperature: 0.138
  },

  IsobutyricAcid: {
    name: "Isobutyric acid",
    formula: "C4H8O2",
    CAS: "79-31-2",
    molecularWeight: 88.10512,
    C1: 0.21668,
    C2: -0.0002556,
    minimumTemperature: 227.15,
    maximumTemperature: 482.75,
    thermalConductivityAtMinimumTemperature: 0.1586,
    thermalConductivityAtMaximumTemperature: 0.0933
  },

  IsopropylAmine: {
    name: "Isopropyl amine",
    formula: "C3H9N",
    CAS: "75-31-0",
    molecularWeight: 59.11026,
    C1: 0.237,
    C2: -0.000332,
    minimumTemperature: 177.95,
    maximumTemperature: 305.55,
    thermalConductivityAtMinimumTemperature: 0.1779,
    thermalConductivityAtMaximumTemperature: 0.1356
  },

  MalonicAcid: {
    name: "Malonic acid",
    formula: "C3H4O4",
    CAS: "141-82-2",
    molecularWeight: 104.06146,
    C1: 0.28231,
    C2: -0.00024019,
    minimumTemperature: 409.15,
    maximumTemperature: 580,
    thermalConductivityAtMinimumTemperature: 0.184,
    thermalConductivityAtMaximumTemperature: 0.143
  },

  MethacrylicAcid: {
    name: "Methacrylic acid",
    formula: "C4H6O2",
    CAS: "79-41-4",
    molecularWeight: 86.08924,
    C1: 0.2306,
    C2: -0.00025201,
    minimumTemperature: 288.15,
    maximumTemperature: 530,
    thermalConductivityAtMinimumTemperature: 0.158,
    thermalConductivityAtMaximumTemperature: 0.097
  },

  Methane: {
    name: "Methane",
    formula: "CH4",
    CAS: "74-82-8",
    molecularWeight: 16.0425,
    C1: 0.41768,
    C2: -0.0024528,
    C3: 3.5588e-6,
    minimumTemperature: 90.69,
    maximumTemperature: 180,
    thermalConductivityAtMinimumTemperature: 0.2245,
    thermalConductivityAtMaximumTemperature: 0.0915
  },

  Methanol: {
    name: "Methanol",
    formula: "CH4O",
    CAS: "67-56-1",
    molecularWeight: 32.04186,
    C1: 0.2837,
    C2: -0.000281,
    minimumTemperature: 175.47,
    maximumTemperature: 337.85,
    thermalConductivityAtMinimumTemperature: 0.2344,
    thermalConductivityAtMaximumTemperature: 0.1888
  },

  NMethylAcetamide: {
    name: "N-Methyl acetamide",
    formula: "C3H7NO",
    CAS: "79-16-3",
    molecularWeight: 73.09378,
    C1: 0.23743,
    C2: -0.0002362,
    minimumTemperature: 301.15,
    maximumTemperature: 478.15,
    thermalConductivityAtMinimumTemperature: 0.1663,
    thermalConductivityAtMaximumTemperature: 0.1245
  },

  MethylAcetate: {
    name: "Methyl acetate",
    formula: "C3H6O2",
    CAS: "79-20-9",
    molecularWeight: 74.07854,
    C1: 0.2777,
    C2: -0.000417,
    minimumTemperature: 175.15,
    maximumTemperature: 386.15,
    thermalConductivityAtMinimumTemperature: 0.2047,
    thermalConductivityAtMaximumTemperature: 0.1167
  },

  MethylAcetylene: {
    name: "Methyl acetylene",
    formula: "C3H4",
    CAS: "74-99-7",
    molecularWeight: 40.06386,
    C1: 0.23648,
    C2: -0.00041639,
    minimumTemperature: 170.45,
    maximumTemperature: 249.94,
    thermalConductivityAtMinimumTemperature: 0.1655,
    thermalConductivityAtMaximumTemperature: 0.1324
  },

  MethylAcrylate: {
    name: "Methyl acrylate",
    formula: "C4H6O2",
    CAS: "96-33-3",
    molecularWeight: 86.08924,
    C1: 0.26082,
    C2: -0.0003506,
    minimumTemperature: 196.32,
    maximumTemperature: 421,
    thermalConductivityAtMinimumTemperature: 0.192,
    thermalConductivityAtMaximumTemperature: 0.1132
  },

  MethylAmine: {
    name: "Methyl amine",
    formula: "CH5N",
    CAS: "74-89-5",
    molecularWeight: 31.0571,
    C1: 0.33446,
    C2: -0.00067427,
    C3: 8.03e-7,
    minimumTemperature: 179.69,
    maximumTemperature: 283.15,
    thermalConductivityAtMinimumTemperature: 0.2392,
    thermalConductivityAtMaximumTemperature: 0.2079
  },

  MethylBenzoate: {
    name: "Methyl benzoate",
    formula: "C8H8O2",
    CAS: "93-58-3",
    molecularWeight: 136.14792,
    C1: 0.22142,
    C2: -0.00022759,
    minimumTemperature: 260.75,
    maximumTemperature: 547.9,
    thermalConductivityAtMinimumTemperature: 0.1621,
    thermalConductivityAtMaximumTemperature: 0.0967
  },

  "3Methyl1,2butadiene": {
    name: "3-Methyl-1,2-butadiene",
    formula: "C5H8",
    CAS: "598-25-4",
    molecularWeight: 68.11702,
    C1: 0.1983,
    C2: -0.0002822,
    minimumTemperature: 159.53,
    maximumTemperature: 314,
    thermalConductivityAtMinimumTemperature: 0.1533,
    thermalConductivityAtMaximumTemperature: 0.1097
  },

  "2Methylbutane": {
    name: "2-Methylbutane",
    formula: "C5H12",
    CAS: "78-78-4",
    molecularWeight: 72.14878,
    C1: 0.21246,
    C2: -0.00033581,
    minimumTemperature: 113.25,
    maximumTemperature: 368.13,
    thermalConductivityAtMinimumTemperature: 0.1744,
    thermalConductivityAtMaximumTemperature: 0.0888
  },

  "2MethylbutanoicAcid": {
    name: "2-Methylbutanoic acid",
    formula: "C5H10O2",
    CAS: "116-53-0",
    molecularWeight: 102.1317,
    C1: 0.22284,
    C2: -0.0002516,
    minimumTemperature: 357.15,
    maximumTemperature: 480.9,
    thermalConductivityAtMinimumTemperature: 0.133,
    thermalConductivityAtMaximumTemperature: 0.1018
  },

  "3Methyl1butanol": {
    name: "3-Methyl-1-butanol",
    formula: "C5H12O",
    CAS: "123-51-3",
    molecularWeight: 88.1482,
    C1: 0.17471,
    C2: -0.0001256,
    minimumTemperature: 155.95,
    maximumTemperature: 404.15,
    thermalConductivityAtMinimumTemperature: 0.1551,
    thermalConductivityAtMaximumTemperature: 0.1239
  },

  "2Methyl1butene": {
    name: "2-Methyl-1-butene",
    formula: "C5H10",
    CAS: "563-46-2",
    molecularWeight: 70.1329,
    C1: 0.19447,
    C2: -0.0002901,
    minimumTemperature: 135.58,
    maximumTemperature: 304.3,
    thermalConductivityAtMinimumTemperature: 0.1551,
    thermalConductivityAtMaximumTemperature: 0.1062
  },

  "2Methyl2butene": {
    name: "2-Methyl-2-butene",
    formula: "C5H10",
    CAS: "513-35-9",
    molecularWeight: 70.1329,
    C1: 0.19636,
    C2: -0.000291,
    minimumTemperature: 139.39,
    maximumTemperature: 311.7,
    thermalConductivityAtMinimumTemperature: 0.1558,
    thermalConductivityAtMaximumTemperature: 0.1057
  },

  "2Methyl1butene3yne": {
    name: "3-Methyl-1-butyne",
    formula: "C5H6",
    CAS: "78-80-8",
    molecularWeight: 66.10114,
    C1: 0.20385,
    C2: -0.0002874,
    minimumTemperature: 160.15,
    maximumTemperature: 305.4,
    thermalConductivityAtMinimumTemperature: 0.1578,
    thermalConductivityAtMaximumTemperature: 0.1161
  },

  MethylbutylEther: {
    name: "Methylbutyl ether",
    formula: "C5H12O",
    CAS: "628-28-4",
    molecularWeight: 88.14818,
    C1: 0.22235,
    C2: -0.0003044,
    minimumTemperature: 157.48,
    maximumTemperature: 463.15,
    thermalConductivityAtMinimumTemperature: 0.1744,
    thermalConductivityAtMaximumTemperature: 0.0814
  },

  MethylbutylSulfide: {
    name: "Methylbutyl sulfide",
    formula: "C5H12S",
    CAS: "628-29-5",
    molecularWeight: 104.214,
    C1: 0.20698,
    C2: -0.00024439,
    minimumTemperature: 175.3,
    maximumTemperature: 396.58,
    thermalConductivityAtMinimumTemperature: 0.1641,
    thermalConductivityAtMaximumTemperature: 0.1101
  },

  "3Methyl1butyne": {
    name: "3-Methyl-1-butyne",
    formula: "C5H8",
    CAS: "598-23-2",
    molecularWeight: 68.11702,
    C1: 0.20348,
    C2: -0.0003106,
    minimumTemperature: 183.45,
    maximumTemperature: 302.15,
    thermalConductivityAtMinimumTemperature: 0.1465,
    thermalConductivityAtMaximumTemperature: 0.1096
  },

  MethylButyrate: {
    name: "Methyl butyrate",
    formula: "C5H10O2",
    CAS: "623-42-7",
    molecularWeight: 102.1317,
    C1: 0.21748,
    C2: -0.00025913,
    minimumTemperature: 187.35,
    maximumTemperature: 493.15,
    thermalConductivityAtMinimumTemperature: 0.1689,
    thermalConductivityAtMaximumTemperature: 0.0897
  },

  Methylchlorosilane: {
    name: "Methylchlorosilane",
    formula: "CH5ClSi",
    CAS: "993-00-0",
    molecularWeight: 80.5889,
    C1: 0.24683,
    C2: -0.00038854,
    minimumTemperature: 139.05,
    maximumTemperature: 281.85,
    thermalConductivityAtMinimumTemperature: 0.1928,
    thermalConductivityAtMaximumTemperature: 0.1373
  },

  Methylcyclohexane: {
    name: "Methylcyclohexane",
    formula: "C7H14",
    CAS: "108-87-2",
    molecularWeight: 98.18606,
    C1: 0.1791,
    C2: -0.0002291,
    minimumTemperature: 273.15,
    maximumTemperature: 374.08,
    thermalConductivityAtMinimumTemperature: 0.1165,
    thermalConductivityAtMaximumTemperature: 0.0934
  },

  "1Methylcyclohexanol": {
    name: "1-Methylcyclohexanol",
    formula: "C7H14O",
    CAS: "590-67-0",
    molecularWeight: 114.18546,
    C1: 0.21558,
    C2: -0.00022728,
    minimumTemperature: 299.15,
    maximumTemperature: 548.8,
    thermalConductivityAtMinimumTemperature: 0.1476,
    thermalConductivityAtMaximumTemperature: 0.0909
  },

  cis2Methylcyclohexanol: {
    name: "cis-2-Methylcyclohexanol",
    formula: "C7H14O",
    CAS: "7443-70-1",
    molecularWeight: 114.18546,
    C1: 0.21839,
    C2: -0.00025776,
    minimumTemperature: 280.15,
    maximumTemperature: 484.2,
    thermalConductivityAtMinimumTemperature: 0.1462,
    thermalConductivityAtMaximumTemperature: 0.0936
  },

  trans2Methylcyclohexanol: {
    name: "trans-2-Methylcyclohexanol",
    formula: "C7H14O",
    CAS: "7443-52-9",
    molecularWeight: 114.18546,
    C1: 0.21828,
    C2: -0.0002557,
    minimumTemperature: 269.15,
    maximumTemperature: 484.8,
    thermalConductivityAtMinimumTemperature: 0.1495,
    thermalConductivityAtMaximumTemperature: 0.0943
  },

  Methylcyclopentane: {
    name: "Methylcyclopentane",
    formula: "C6H12",
    CAS: "96-37-7",
    molecularWeight: 84.15948,
    C1: 0.1929,
    C2: -0.0002492,
    minimumTemperature: 130.73,
    maximumTemperature: 344.95,
    thermalConductivityAtMinimumTemperature: 0.1603,
    thermalConductivityAtMaximumTemperature: 0.1069
  },

  "1Methylcyclopentene": {
    name: "1-Methylcyclopentene",
    formula: "C6H10",
    CAS: "693-89-0",
    molecularWeight: 82.1436,
    C1: 0.20023,
    C2: -0.00025581,
    minimumTemperature: 146.62,
    maximumTemperature: 348.64,
    thermalConductivityAtMinimumTemperature: 0.1627,
    thermalConductivityAtMaximumTemperature: 0.111
  },

  "3Methylcyclopentene": {
    name: "3-Methylcyclopentene",
    formula: "C6H10",
    CAS: "1120-62-3",
    molecularWeight: 82.1436,
    C1: 0.1994,
    C2: -0.00026149,
    minimumTemperature: 168.54,
    maximumTemperature: 338.05,
    thermalConductivityAtMinimumTemperature: 0.1553,
    thermalConductivityAtMaximumTemperature: 0.111
  },

  Methyldichlorosilane: {
    name: "Methyldichlorosilane",
    formula: "CH4Cl2Si",
    CAS: "75-54-7",
    molecularWeight: 115.03396,
    C1: 0.21956,
    C2: -0.00032153,
    minimumTemperature: 182.55,
    maximumTemperature: 314.7,
    thermalConductivityAtMinimumTemperature: 0.1609,
    thermalConductivityAtMaximumTemperature: 0.1184
  },

  MethylethylEther: {
    name: "Methylethyl ether",
    formula: "C3H8O",
    CAS: "540-67-0",
    molecularWeight: 60.09502,
    C1: 0.27304,
    C2: -0.0004518,
    minimumTemperature: 160,
    maximumTemperature: 341.34,
    thermalConductivityAtMinimumTemperature: 0.2008,
    thermalConductivityAtMaximumTemperature: 0.1188
  },

  MethylethylKetone: {
    name: "Methylethyl ketone",
    formula: "C4H8O",
    CAS: "78-93-3",
    molecularWeight: 72.10572,
    C1: 0.2197,
    C2: -0.0002505,
    minimumTemperature: 186.48,
    maximumTemperature: 352.79,
    thermalConductivityAtMinimumTemperature: 0.173,
    thermalConductivityAtMaximumTemperature: 0.1313
  },

  MethylethylSulfide: {
    name: "Methylethyl sulfide",
    formula: "C3H8S",
    CAS: "624-89-5",
    molecularWeight: 76.1606,
    C1: 0.22136,
    C2: -0.00028938,
    minimumTemperature: 167.23,
    maximumTemperature: 339.8,
    thermalConductivityAtMinimumTemperature: 0.173,
    thermalConductivityAtMaximumTemperature: 0.123
  },

  MethylFormate: {
    name: "Methyl formate",
    formula: "C2H4O2",
    CAS: "107-31-3",
    molecularWeight: 60.05196,
    C1: 0.3246,
    C2: -0.000468,
    minimumTemperature: 174.15,
    maximumTemperature: 373.15,
    thermalConductivityAtMinimumTemperature: 0.2431,
    thermalConductivityAtMaximumTemperature: 0.15
  },

  MethylisobutylEther: {
    name: "Methylisobutyl ether",
    formula: "C5H12O",
    CAS: "625-44-5",
    molecularWeight: 88.14818,
    C1: 0.222,
    C2: -0.00032217,
    minimumTemperature: 188,
    maximumTemperature: 390,
    thermalConductivityAtMinimumTemperature: 0.1614,
    thermalConductivityAtMaximumTemperature: 0.0964
  },

  MethylisobutylKetone: {
    name: "Methylisobutyl ketone",
    formula: "C6H12O",
    CAS: "108-10-1",
    molecularWeight: 100.15888,
    C1: 0.2301,
    C2: -0.00028899,
    minimumTemperature: 189.15,
    maximumTemperature: 451.42,
    thermalConductivityAtMinimumTemperature: 0.1754,
    thermalConductivityAtMaximumTemperature: 0.0996
  },

  MethylIsocyanate: {
    name: "Methyl Isocyanate",
    formula: "C2H3NO",
    CAS: "624-83-9",
    molecularWeight: 57.05132,
    C1: 0.2822,
    C2: -0.00042037,
    minimumTemperature: 256.15,
    maximumTemperature: 312,
    thermalConductivityAtMinimumTemperature: 0.1745,
    thermalConductivityAtMaximumTemperature: 0.151
  },

  MethylisopropylEther: {
    name: "Methylisopropyl ether",
    formula: "C4H10O",
    CAS: "598-53-8",
    molecularWeight: 74.1216,
    C1: 0.24154,
    C2: -0.0003774,
    minimumTemperature: 127.93,
    maximumTemperature: 370,
    thermalConductivityAtMinimumTemperature: 0.1933,
    thermalConductivityAtMaximumTemperature: 0.1019
  },

  MethylisopropylKetone: {
    name: "Methylisopropyl ketone",
    formula: "C5H10O",
    CAS: "563-80-4",
    molecularWeight: 86.1323,
    C1: 0.2332,
    C2: -0.0003044,
    minimumTemperature: 180.15,
    maximumTemperature: 435.9,
    thermalConductivityAtMinimumTemperature: 0.1784,
    thermalConductivityAtMaximumTemperature: 0.1005
  },

  MethylisopropylSulfide: {
    name: "Methylisopropyl sulfide",
    formula: "C4H10S",
    CAS: "1551-21-9",
    molecularWeight: 90.1872,
    C1: 0.20978,
    C2: -0.00026468,
    minimumTemperature: 171.64,
    maximumTemperature: 357.91,
    thermalConductivityAtMinimumTemperature: 0.1644,
    thermalConductivityAtMaximumTemperature: 0.115
  },

  MethylMercaptan: {
    name: "Methyl mercaptan",
    formula: "CH4S",
    CAS: "74-93-1",
    molecularWeight: 48.10746,
    C1: 0.26119,
    C2: -0.00038345,
    minimumTemperature: 150.18,
    maximumTemperature: 279.11,
    thermalConductivityAtMinimumTemperature: 0.2036,
    thermalConductivityAtMaximumTemperature: 0.1542
  },

  MethylMethacrylate: {
    name: "Methyl methacrylate",
    formula: "C5H8O2",
    CAS: "80-62-6",
    molecularWeight: 100.11582,
    C1: 0.2583,
    C2: -0.000379,
    minimumTemperature: 290.15,
    maximumTemperature: 363.45,
    thermalConductivityAtMinimumTemperature: 0.1483,
    thermalConductivityAtMaximumTemperature: 0.1206
  },

  "2MethyloctanoicAcid": {
    name: "2-Methyloctanoic acid",
    formula: "C9H18O2",
    CAS: "3004-93-1",
    molecularWeight: 158.23802,
    C1: 0.20911,
    C2: -0.00021852,
    minimumTemperature: 208.2,
    maximumTemperature: 555.2,
    thermalConductivityAtMinimumTemperature: 0.1636,
    thermalConductivityAtMaximumTemperature: 0.0878
  },

  "2Methylpentane": {
    name: "2-Methylpentane",
    formula: "C6H14",
    CAS: "107-83-5",
    molecularWeight: 86.17536,
    C1: 0.19334,
    C2: -0.00028038,
    minimumTemperature: 119.55,
    maximumTemperature: 389.25,
    thermalConductivityAtMinimumTemperature: 0.1598,
    thermalConductivityAtMaximumTemperature: 0.0842
  },

  MethylPentylEther: {
    name: "Methyl pentyl ether",
    formula: "C6H14O",
    CAS: "628-80-8",
    molecularWeight: 102.17476,
    C1: 0.21698,
    C2: -0.00028998,
    minimumTemperature: 176,
    maximumTemperature: 432.3,
    thermalConductivityAtMinimumTemperature: 0.1659,
    thermalConductivityAtMaximumTemperature: 0.0916
  },

  "2Methylpropane": {
    name: "2-Methylpropane",
    formula: "C4H10",
    CAS: "75-28-5",
    molecularWeight: 58.1222,
    C1: 0.20455,
    C2: -0.00036589,
    minimumTemperature: 113.54,
    maximumTemperature: 400,
    thermalConductivityAtMinimumTemperature: 0.163,
    thermalConductivityAtMaximumTemperature: 0.0582
  },

  "2Methyl2propanol": {
    name: "2-Methyl-2-propanol",
    formula: "C4H10O",
    CAS: "75-65-0",
    molecularWeight: 74.1216,
    C1: 0.21258,
    C2: -0.00029864,
    minimumTemperature: 298.97,
    maximumTemperature: 404.96,
    thermalConductivityAtMinimumTemperature: 0.1233,
    thermalConductivityAtMaximumTemperature: 0.0916
  },

  "2MethylPropene": {
    name: "2-Methyl propene",
    formula: "C4H8",
    CAS: "115-11-7",
    molecularWeight: 56.10632,
    C1: 0.2802,
    C2: -0.000786,
    C3: 6.516e-7,
    minimumTemperature: 132.81,
    maximumTemperature: 395.2,
    thermalConductivityAtMinimumTemperature: 0.1873,
    thermalConductivityAtMaximumTemperature: 0.0713
  },

  MethylPropionate: {
    name: "Methyl propionate",
    formula: "C4H8O2",
    CAS: "554-12-1",
    molecularWeight: 88.10512,
    C1: 0.22534,
    C2: -0.0002683,
    minimumTemperature: 185.65,
    maximumTemperature: 475,
    thermalConductivityAtMinimumTemperature: 0.1755,
    thermalConductivityAtMaximumTemperature: 0.0979
  },

  MethylpropylEther: {
    name: "Methylpropyl ether",
    formula: "C4H10O",
    CAS: "557-17-5",
    molecularWeight: 74.1216,
    C1: 0.24817,
    C2: -0.0003774,
    minimumTemperature: 133.97,
    maximumTemperature: 373,
    thermalConductivityAtMinimumTemperature: 0.1976,
    thermalConductivityAtMaximumTemperature: 0.1074
  },

  MethylpropylSulfide: {
    name: "Methylpropyl sulfide",
    formula: "C4H10S",
    CAS: "3877-15-4",
    molecularWeight: 90.1872,
    C1: 0.21103,
    C2: -0.00025985,
    minimumTemperature: 160.17,
    maximumTemperature: 368.69,
    thermalConductivityAtMinimumTemperature: 0.1694,
    thermalConductivityAtMaximumTemperature: 0.1152
  },

  Methylsilane: {
    name: "Methylsilane",
    formula: "CH6Si",
    CAS: "992-94-9",
    molecularWeight: 46.14384,
    C1: 0.2774,
    C2: -0.00054608,
    minimumTemperature: 116.34,
    maximumTemperature: 216.25,
    thermalConductivityAtMinimumTemperature: 0.2139,
    thermalConductivityAtMaximumTemperature: 0.1593
  },

  alphaMethylStyrene: {
    name: "alpha-Methyl styrene",
    formula: "C9H10",
    CAS: "98-83-9",
    molecularWeight: 118.1757,
    C1: 0.19657,
    C2: -0.0002118,
    minimumTemperature: 249.95,
    maximumTemperature: 438.65,
    thermalConductivityAtMinimumTemperature: 0.1436,
    thermalConductivityAtMaximumTemperature: 0.1037
  },

  MethylTertbutylEther: {
    name: "Methyl tert-butyl ether",
    formula: "C5H12O",
    CAS: "1634-04-4",
    molecularWeight: 88.1482,
    C1: 0.22526,
    C2: -0.00037235,
    C3: 1.1689e-7,
    C4: 0,
    C5: 0,
    minimumTemperature: 164.55,
    maximumTemperature: 328.2,
    thermalConductivityAtMinimumTemperature: 0.1672,
    thermalConductivityAtMaximumTemperature: 0.1156
  },

  MethylVinylEther: {
    name: "Methyl vinyl ether",
    formula: "C3H6O",
    CAS: "107-25-5",
    molecularWeight: 58.07914,
    C1: 0.28035,
    C2: -0.0004646,
    minimumTemperature: 151.15,
    maximumTemperature: 341.1,
    thermalConductivityAtMinimumTemperature: 0.2101,
    thermalConductivityAtMaximumTemperature: 0.1219
  },

  Naphthalene: {
    name: "Naphthalene",
    formula: "C10H8",
    CAS: "91-20-3",
    molecularWeight: 128.17052,
    C1: 0.17096,
    C2: -0.00010059,
    minimumTemperature: 353.43,
    maximumTemperature: 646.97,
    thermalConductivityAtMinimumTemperature: 0.1354,
    thermalConductivityAtMaximumTemperature: 0.1059
  },

  Neon: {
    name: "Neon",
    formula: "Ne",
    CAS: "7440-01-9",
    molecularWeight: 20.1797,
    C1: 0.2971,
    C2: -0.017356,
    C3: 0.0005911,
    C4: -0.000007421,
    minimumTemperature: 25,
    maximumTemperature: 44,
    thermalConductivityAtMinimumTemperature: 0.1167,
    thermalConductivityAtMaximumTemperature: 0.0457
  },

  Nitroethane: {
    name: "Nitroethane",
    formula: "C2H5NO2",
    CAS: "79-24-3",
    molecularWeight: 75.0666,
    C1: 0.247,
    C2: -0.0002814,
    minimumTemperature: 183.63,
    maximumTemperature: 387.22,
    thermalConductivityAtMinimumTemperature: 0.1953,
    thermalConductivityAtMaximumTemperature: 0.138
  },

  Nitrogen: {
    name: "Nitrogen",
    formula: "N2",
    CAS: "7727-37-9",
    molecularWeight: 28.0134,
    C1: 0.2654,
    C2: -0.001677,
    minimumTemperature: 63.15,
    maximumTemperature: 124,
    thermalConductivityAtMinimumTemperature: 0.1595,
    thermalConductivityAtMaximumTemperature: 0.0575
  },

  NitrogenTrifluoride: {
    name: "Nitrogen trifluoride",
    formula: "F3N",
    CAS: "7783-54-2",
    molecularWeight: 71.00191
  },

  Nitromethane: {
    name: "Nitromethane",
    formula: "CH3NO2",
    CAS: "75-52-5",
    molecularWeight: 61.04002,
    C1: 0.3276,
    C2: -0.000405,
    minimumTemperature: 244.6,
    maximumTemperature: 374.35,
    thermalConductivityAtMinimumTemperature: 0.2285,
    thermalConductivityAtMaximumTemperature: 0.176
  },

  NitrousOxide: {
    name: "Nitrous oxide",
    formula: "N2O",
    CAS: "10024-97-2",
    molecularWeight: 44.0128,
    C1: 0.10112,
    minimumTemperature: 277.59,
    maximumTemperature: 277.59,
    thermalConductivityAtMinimumTemperature: 0.1011,
    thermalConductivityAtMaximumTemperature: 0.1011
  },

  NitricOxide: {
    name: "Nitric oxide",
    formula: "NO",
    CAS: "10102-43-9",
    molecularWeight: 30.0061,
    C1: 0.1878,
    C2: 0.0010293,
    C3: -9.43e-6,
    minimumTemperature: 110,
    maximumTemperature: 176.4,
    thermalConductivityAtMinimumTemperature: 0.1869,
    thermalConductivityAtMaximumTemperature: 0.0759
  },

  Nonadecane: {
    name: "Nonadecane",
    formula: "C19H40",
    CAS: "629-92-5",
    molecularWeight: 268.5209,
    C1: 0.21229,
    C2: -0.00022,
    minimumTemperature: 305.04,
    maximumTemperature: 603.05,
    thermalConductivityAtMinimumTemperature: 0.1452,
    thermalConductivityAtMaximumTemperature: 0.0796
  },

  Nonanal: {
    name: "Nonanal",
    formula: "C9H18O",
    CAS: "124-19-6",
    molecularWeight: 142.23862,
    C1: 0.21905,
    C2: -0.00024013,
    minimumTemperature: 267.3,
    maximumTemperature: 465.52,
    thermalConductivityAtMinimumTemperature: 0.1549,
    thermalConductivityAtMaximumTemperature: 0.1073
  },

  Nonane: {
    name: "Nonane",
    formula: "C9H20",
    CAS: "111-84-2",
    molecularWeight: 128.2551,
    C1: 0.209,
    C2: -0.000264,
    minimumTemperature: 219.66,
    maximumTemperature: 423.97,
    thermalConductivityAtMinimumTemperature: 0.151,
    thermalConductivityAtMaximumTemperature: 0.0971
  },

  NonanoicAcid: {
    name: "Nonanoic acid",
    formula: "C9H18O2",
    CAS: "112-05-0",
    molecularWeight: 158.238,
    C1: 0.204,
    C2: -0.0002,
    minimumTemperature: 285.55,
    maximumTemperature: 528.75,
    thermalConductivityAtMinimumTemperature: 0.1469,
    thermalConductivityAtMaximumTemperature: 0.0983
  },

  "1Nonanol": {
    name: "1-Nonanol",
    formula: "C9H20O",
    CAS: "143-08-8",
    molecularWeight: 144.2545,
    C1: 0.240538,
    C2: -0.00025,
    minimumTemperature: 268.15,
    maximumTemperature: 578.65,
    thermalConductivityAtMinimumTemperature: 0.1735,
    thermalConductivityAtMaximumTemperature: 0.0959
  },

  "2Nonanol": {
    name: "2-Nonanol",
    formula: "C9H20O",
    CAS: "628-99-9",
    molecularWeight: 144.255,
    C1: 0.2081,
    C2: -0.00022869,
    minimumTemperature: 238.15,
    maximumTemperature: 471.7,
    thermalConductivityAtMinimumTemperature: 0.1536,
    thermalConductivityAtMaximumTemperature: 0.1002
  },

  "1Nonene": {
    name: "1-Nonene",
    formula: "C9H18",
    CAS: "124-11-8",
    molecularWeight: 126.23922,
    C1: 0.20468,
    C2: -0.00025738,
    minimumTemperature: 191.91,
    maximumTemperature: 420.02,
    thermalConductivityAtMinimumTemperature: 0.1553,
    thermalConductivityAtMaximumTemperature: 0.0966
  },

  NonylMercaptan: {
    name: "Nonyl mercaptan",
    formula: "C9H20S",
    CAS: "1455-21-6",
    molecularWeight: 160.3201,
    C1: 0.20244,
    C2: -0.00021343,
    minimumTemperature: 253.05,
    maximumTemperature: 492.95,
    thermalConductivityAtMinimumTemperature: 0.1484,
    thermalConductivityAtMaximumTemperature: 0.0972
  },

  "1Nonyne": {
    name: "1-Nonyne",
    formula: "C9H16",
    CAS: "3452-09-3",
    molecularWeight: 124.22334,
    C1: 0.20954,
    C2: -0.00024588,
    minimumTemperature: 223.15,
    maximumTemperature: 423.85,
    thermalConductivityAtMinimumTemperature: 0.1547,
    thermalConductivityAtMaximumTemperature: 0.1053
  },

  Octadecane: {
    name: "Octadecane",
    formula: "C18H38",
    CAS: "593-45-3",
    molecularWeight: 254.49432,
    C1: 0.2137,
    C2: -0.0002252,
    minimumTemperature: 301.31,
    maximumTemperature: 589.86,
    thermalConductivityAtMinimumTemperature: 0.1458,
    thermalConductivityAtMaximumTemperature: 0.0809
  },

  Octanal: {
    name: "Octanal",
    formula: "C8H16O",
    CAS: "124-13-0",
    molecularWeight: 128.212,
    C1: 0.22273,
    C2: -0.00025037,
    minimumTemperature: 251.65,
    maximumTemperature: 445.15,
    thermalConductivityAtMinimumTemperature: 0.1597,
    thermalConductivityAtMaximumTemperature: 0.1113
  },

  Octane: {
    name: "Octane",
    formula: "C8H18",
    CAS: "111-65-9",
    molecularWeight: 114.22852,
    C1: 0.2156,
    C2: -0.00029483,
    minimumTemperature: 216.38,
    maximumTemperature: 398.83,
    thermalConductivityAtMinimumTemperature: 0.1518,
    thermalConductivityAtMaximumTemperature: 0.098
  },

  OctanoicAcid: {
    name: "Octanoic acid",
    formula: "C8H16O2",
    CAS: "124-07-2",
    molecularWeight: 144.211,
    C1: 0.203,
    C2: -0.0002,
    minimumTemperature: 289.65,
    maximumTemperature: 512.85,
    thermalConductivityAtMinimumTemperature: 0.1451,
    thermalConductivityAtMaximumTemperature: 0.1004
  },

  "1Octanol": {
    name: "1-Octanol",
    formula: "C8H18O",
    CAS: "111-87-5",
    molecularWeight: 130.22792,
    C1: 0.235281,
    C2: -0.00025,
    minimumTemperature: 257.65,
    maximumTemperature: 570.15,
    thermalConductivityAtMinimumTemperature: 0.1709,
    thermalConductivityAtMaximumTemperature: 0.0927
  },

  "2Octanol": {
    name: "2-Octanol",
    formula: "C8H18O",
    CAS: "123-96-6",
    molecularWeight: 130.228,
    C1: 0.20955,
    C2: -0.00023733,
    minimumTemperature: 241.55,
    maximumTemperature: 452.9,
    thermalConductivityAtMinimumTemperature: 0.1522,
    thermalConductivityAtMaximumTemperature: 0.1021
  },

  "2Octanone": {
    name: "2-Octanone",
    formula: "C8H16O",
    CAS: "111-13-7",
    molecularWeight: 128.21204,
    C1: 0.2132,
    C2: -0.0002494,
    minimumTemperature: 252.85,
    maximumTemperature: 499,
    thermalConductivityAtMinimumTemperature: 0.1501,
    thermalConductivityAtMaximumTemperature: 0.0888
  },

  "3Octanone": {
    name: "3-Octanone",
    formula: "C8H16O",
    CAS: "106-68-3",
    molecularWeight: 128.21204,
    C1: 0.21732,
    C2: -0.00024969,
    minimumTemperature: 255.55,
    maximumTemperature: 440.65,
    thermalConductivityAtMinimumTemperature: 0.1535,
    thermalConductivityAtMaximumTemperature: 0.1073
  },

  "1Octene": {
    name: "1-Octene",
    formula: "C8H16",
    CAS: "111-66-0",
    molecularWeight: 112.21264,
    C1: 0.20467,
    C2: -0.0002675,
    minimumTemperature: 171.45,
    maximumTemperature: 394.41,
    thermalConductivityAtMinimumTemperature: 0.1588,
    thermalConductivityAtMaximumTemperature: 0.0992
  },

  OctylMercaptan: {
    name: "Octyl mercaptan",
    formula: "C8H18S",
    CAS: "111-88-6",
    molecularWeight: 146.29352,
    C1: 0.2012,
    C2: -0.0002142,
    minimumTemperature: 223.95,
    maximumTemperature: 472.19,
    thermalConductivityAtMinimumTemperature: 0.1532,
    thermalConductivityAtMaximumTemperature: 0.1001
  },

  "1Octyne": {
    name: "1-Octyne",
    formula: "C8H14",
    CAS: "629-05-0",
    molecularWeight: 110.19676,
    C1: 0.2095,
    C2: -0.00025334,
    minimumTemperature: 193.55,
    maximumTemperature: 399.35,
    thermalConductivityAtMinimumTemperature: 0.1605,
    thermalConductivityAtMaximumTemperature: 0.1083
  },

  OxalicAcid: {
    name: "Oxalic acid",
    formula: "C2H2O4",
    CAS: "144-62-7",
    molecularWeight: 90.03488,
    C1: 0.26335,
    C2: -0.00022461,
    minimumTemperature: 462.65,
    maximumTemperature: 516,
    thermalConductivityAtMinimumTemperature: 0.1594,
    thermalConductivityAtMaximumTemperature: 0.1475
  },

  Oxygen: {
    name: "Oxygen",
    formula: "O2",
    CAS: "7782-44-7",
    molecularWeight: 31.9988,
    C1: 0.2741,
    C2: -0.00138,
    minimumTemperature: 60,
    maximumTemperature: 150,
    thermalConductivityAtMinimumTemperature: 0.1913,
    thermalConductivityAtMaximumTemperature: 0.0671
  },

  Ozone: {
    name: "Ozone",
    formula: "O3",
    CAS: "10028-15-6",
    molecularWeight: 47.9982,
    C1: 0.17483,
    C2: 0.00075288,
    C3: -2.5228e-6,
    minimumTemperature: 77.35,
    maximumTemperature: 161.85,
    thermalConductivityAtMinimumTemperature: 0.218,
    thermalConductivityAtMaximumTemperature: 0.2306
  },

  Pentadecane: {
    name: "Pentadecane",
    formula: "C15H32",
    CAS: "629-62-9",
    molecularWeight: 212.41458,
    C1: 0.20649,
    C2: -0.00021911,
    minimumTemperature: 283.07,
    maximumTemperature: 543.84,
    thermalConductivityAtMinimumTemperature: 0.1445,
    thermalConductivityAtMaximumTemperature: 0.0873
  },

  Pentanal: {
    name: "Pentanal",
    formula: "C5H10O",
    CAS: "110-62-3",
    molecularWeight: 86.1323,
    C1: 0.23894,
    C2: -0.00029724,
    minimumTemperature: 191.59,
    maximumTemperature: 375.15,
    thermalConductivityAtMinimumTemperature: 0.182,
    thermalConductivityAtMaximumTemperature: 0.1274
  },

  Pentane: {
    name: "Pentane",
    formula: "C5H12",
    CAS: "109-66-0",
    molecularWeight: 72.14878,
    C1: 0.2537,
    C2: -0.000576,
    C3: 3.44e-7,
    minimumTemperature: 143.42,
    maximumTemperature: 445,
    thermalConductivityAtMinimumTemperature: 0.1782,
    thermalConductivityAtMaximumTemperature: 0.0655
  },

  PentanoicAcid: {
    name: "Pentanoic acid",
    formula: "C5H10O2",
    CAS: "109-52-4",
    molecularWeight: 102.132,
    C1: 0.1848,
    C2: -0.0001434,
    minimumTemperature: 239.15,
    maximumTemperature: 458.65,
    thermalConductivityAtMinimumTemperature: 0.1505,
    thermalConductivityAtMaximumTemperature: 0.119
  },

  "1Pentanol": {
    name: "1-Pentanol",
    formula: "C5H12O",
    CAS: "71-41-0",
    molecularWeight: 88.1482,
    C1: 0.223042,
    C2: -0.00025,
    minimumTemperature: 273.15,
    maximumTemperature: 353.15,
    thermalConductivityAtMinimumTemperature: 0.1548,
    thermalConductivityAtMaximumTemperature: 0.1348
  },

  "2Pentanol": {
    name: "2-Pentanol",
    formula: "C5H12O",
    CAS: "6032-29-7",
    molecularWeight: 88.1482,
    C1: 0.21875,
    C2: -0.00027849,
    minimumTemperature: 200,
    maximumTemperature: 392.2,
    thermalConductivityAtMinimumTemperature: 0.1631,
    thermalConductivityAtMaximumTemperature: 0.1095
  },

  "2Pentanone": {
    name: "2-Pentanone",
    formula: "C5H10O",
    CAS: "107-87-9",
    molecularWeight: 86.1323,
    C1: 0.2161,
    C2: -0.00024866,
    minimumTemperature: 196.29,
    maximumTemperature: 375.46,
    thermalConductivityAtMinimumTemperature: 0.1673,
    thermalConductivityAtMaximumTemperature: 0.1227
  },

  "3Pentanone": {
    name: "3-Pentanone",
    formula: "C5H10O",
    CAS: "96-22-0",
    molecularWeight: 86.1323,
    C1: 0.21569,
    C2: -0.00024081,
    minimumTemperature: 234.18,
    maximumTemperature: 375.14,
    thermalConductivityAtMinimumTemperature: 0.1593,
    thermalConductivityAtMaximumTemperature: 0.1254
  },

  "1Pentene": {
    name: "1-Pentene",
    formula: "C5H10",
    CAS: "109-67-1",
    molecularWeight: 70.1329,
    C1: 0.21361,
    C2: -0.00030777,
    minimumTemperature: 108.02,
    maximumTemperature: 303.22,
    thermalConductivityAtMinimumTemperature: 0.1804,
    thermalConductivityAtMaximumTemperature: 0.1203
  },

  "2PentylMercaptan": {
    name: "2-Pentyl mercaptan",
    formula: "C5H12S",
    CAS: "2084-19-7",
    molecularWeight: 104.21378,
    C1: 0.20597,
    C2: -0.00024518,
    minimumTemperature: 160.75,
    maximumTemperature: 385.15,
    thermalConductivityAtMinimumTemperature: 0.1666,
    thermalConductivityAtMaximumTemperature: 0.1115
  },

  PentylMercaptan: {
    name: "Pentyl mercaptan",
    formula: "C5H12S",
    CAS: "110-66-7",
    molecularWeight: 104.21378,
    C1: 0.2086,
    C2: -0.00024536,
    minimumTemperature: 197.45,
    maximumTemperature: 399.79,
    thermalConductivityAtMinimumTemperature: 0.1602,
    thermalConductivityAtMaximumTemperature: 0.1105
  },

  "1Pentyne": {
    name: "1-Pentyne",
    formula: "C5H8",
    CAS: "627-19-0",
    molecularWeight: 68.11702,
    C1: 0.22102,
    C2: -0.000322,
    minimumTemperature: 167.45,
    maximumTemperature: 313.33,
    thermalConductivityAtMinimumTemperature: 0.1671,
    thermalConductivityAtMaximumTemperature: 0.1201
  },

  "2Pentyne": {
    name: "2-Pentyne",
    formula: "C5H8",
    CAS: "627-21-4",
    molecularWeight: 68.11702,
    C1: 0.21282,
    C2: -0.0002856,
    minimumTemperature: 163.83,
    maximumTemperature: 329.27,
    thermalConductivityAtMinimumTemperature: 0.166,
    thermalConductivityAtMaximumTemperature: 0.1188
  },

  Phenanthrene: {
    name: "Phenanthrene",
    formula: "C14H10",
    CAS: "85-01-8",
    molecularWeight: 178.2292,
    C1: 0.13753,
    C2: -0.000025247,
    minimumTemperature: 372.38,
    maximumTemperature: 610.03,
    thermalConductivityAtMinimumTemperature: 0.1281,
    thermalConductivityAtMaximumTemperature: 0.1221
  },

  Phenol: {
    name: "Phenol",
    formula: "C6H6O",
    CAS: "108-95-2",
    molecularWeight: 94.11124,
    C1: 0.18831,
    C2: -0.0001,
    minimumTemperature: 314.06,
    maximumTemperature: 454.99,
    thermalConductivityAtMinimumTemperature: 0.1569,
    thermalConductivityAtMaximumTemperature: 0.1428
  },

  PhenylIsocyanate: {
    name: "Phenyl isocyanate",
    formula: "C7H5NO",
    CAS: "103-71-9",
    molecularWeight: 119.1207,
    C1: 0.16326,
    C2: -0.00017777,
    minimumTemperature: 243.15,
    maximumTemperature: 439.43,
    thermalConductivityAtMinimumTemperature: 0.12,
    thermalConductivityAtMaximumTemperature: 0.0851
  },

  PhthalicAnhydride: {
    name: "Phthalic anhydride",
    formula: "C8H4O3",
    CAS: "85-44-9",
    molecularWeight: 148.11556,
    C1: 0.22946,
    C2: -0.00021345,
    minimumTemperature: 404.15,
    maximumTemperature: 557.65,
    thermalConductivityAtMinimumTemperature: 0.1432,
    thermalConductivityAtMaximumTemperature: 0.1104
  },

  Propadiene: {
    name: "Propadiene",
    formula: "C3H4",
    CAS: "463-49-0",
    molecularWeight: 40.06386,
    C1: 0.23081,
    C2: -0.0004078,
    minimumTemperature: 136.87,
    maximumTemperature: 238.65,
    thermalConductivityAtMinimumTemperature: 0.175,
    thermalConductivityAtMaximumTemperature: 0.1335
  },

  Propane: {
    name: "Propane",
    formula: "C3H8",
    CAS: "74-98-6",
    molecularWeight: 44.09562,
    C1: 0.26755,
    C2: -0.00066457,
    C3: 2.774e-7,
    minimumTemperature: 85.47,
    maximumTemperature: 350,
    thermalConductivityAtMinimumTemperature: 0.2128,
    thermalConductivityAtMaximumTemperature: 0.0689
  },

  "1Propanol": {
    name: "1-Propanol",
    formula: "C3H8O",
    CAS: "71-23-8",
    molecularWeight: 60.09502,
    C1: 0.23144,
    C2: -0.00025,
    minimumTemperature: 200,
    maximumTemperature: 370.35,
    thermalConductivityAtMinimumTemperature: 0.1814,
    thermalConductivityAtMaximumTemperature: 0.1389
  },

  "2Propanol": {
    name: "2-Propanol",
    formula: "C3H8O",
    CAS: "67-63-0",
    molecularWeight: 60.095,
    C1: 0.20161,
    C2: -0.00021529,
    minimumTemperature: 185.26,
    maximumTemperature: 425,
    thermalConductivityAtMinimumTemperature: 0.1617,
    thermalConductivityAtMaximumTemperature: 0.1101
  },

  Propenylcyclohexene: {
    name: "Propenylcyclohexene",
    formula: "C9H14",
    CAS: "13511-13-2",
    molecularWeight: 122.20746,
    C1: 0.1831,
    C2: -0.00020275,
    minimumTemperature: 199,
    maximumTemperature: 431.65,
    thermalConductivityAtMinimumTemperature: 0.1428,
    thermalConductivityAtMaximumTemperature: 0.0956
  },

  Propionaldehyde: {
    name: "Propionaldehyde",
    formula: "C3H6O",
    CAS: "123-38-6",
    molecularWeight: 58.07914,
    C1: 0.31721,
    C2: -0.000528,
    minimumTemperature: 165,
    maximumTemperature: 322.15,
    thermalConductivityAtMinimumTemperature: 0.2301,
    thermalConductivityAtMaximumTemperature: 0.1471
  },

  PropionicAcid: {
    name: "Propionic acid",
    formula: "C3H6O2",
    CAS: "79-09-4",
    molecularWeight: 74.0785,
    C1: 0.1954,
    C2: -0.000164,
    minimumTemperature: 252.45,
    maximumTemperature: 543.15,
    thermalConductivityAtMinimumTemperature: 0.154,
    thermalConductivityAtMaximumTemperature: 0.1063
  },

  Propionitrile: {
    name: "Propionitrile",
    formula: "C3H5N",
    CAS: "107-12-0",
    molecularWeight: 55.0785,
    C1: 0.26743,
    C2: -0.00033418,
    minimumTemperature: 180.37,
    maximumTemperature: 370.25,
    thermalConductivityAtMinimumTemperature: 0.2072,
    thermalConductivityAtMaximumTemperature: 0.1437
  },

  PropylAcetate: {
    name: "Propyl acetate",
    formula: "C5H10O2",
    CAS: "109-60-4",
    molecularWeight: 102.1317,
    C1: 0.2332,
    C2: -0.0003096,
    minimumTemperature: 178.15,
    maximumTemperature: 434.82,
    thermalConductivityAtMinimumTemperature: 0.178,
    thermalConductivityAtMaximumTemperature: 0.0986
  },

  PropylAmine: {
    name: "Propyl amine",
    formula: "C3H9N",
    CAS: "107-10-8",
    molecularWeight: 59.11026,
    C1: 0.2632,
    C2: -0.0004278,
    C3: 0.000000412,
    minimumTemperature: 188.36,
    maximumTemperature: 333.15,
    thermalConductivityAtMinimumTemperature: 0.1972,
    thermalConductivityAtMaximumTemperature: 0.1664
  },

  Propylbenzene: {
    name: "Propylbenzene",
    formula: "C9H12",
    CAS: "103-65-1",
    molecularWeight: 120.19158,
    C1: 0.18707,
    C2: -0.00019846,
    minimumTemperature: 173.55,
    maximumTemperature: 583.15,
    thermalConductivityAtMinimumTemperature: 0.1526,
    thermalConductivityAtMaximumTemperature: 0.0713
  },

  Propylene: {
    name: "Propylene",
    formula: "C3H6",
    CAS: "115-07-1",
    molecularWeight: 42.07974,
    C1: 0.24719,
    C2: -0.00048824,
    minimumTemperature: 87.89,
    maximumTemperature: 340.49,
    thermalConductivityAtMinimumTemperature: 0.2043,
    thermalConductivityAtMaximumTemperature: 0.081
  },

  PropylFormate: {
    name: "Propyl formate",
    formula: "C4H8O2",
    CAS: "110-74-7",
    molecularWeight: 88.10512,
    C1: 0.2247,
    C2: -0.000264,
    minimumTemperature: 180.25,
    maximumTemperature: 483.15,
    thermalConductivityAtMinimumTemperature: 0.1771,
    thermalConductivityAtMaximumTemperature: 0.0972
  },

  "2PropylMercaptan": {
    name: "2-Propyl mercaptan",
    formula: "C3H8S",
    CAS: "75-33-2",
    molecularWeight: 76.16062,
    C1: 0.21706,
    C2: -0.00028952,
    minimumTemperature: 142.61,
    maximumTemperature: 325.71,
    thermalConductivityAtMinimumTemperature: 0.1758,
    thermalConductivityAtMaximumTemperature: 0.1228
  },

  PropylMercaptan: {
    name: "Propyl mercaptan",
    formula: "C3H8S",
    CAS: "107-03-9",
    molecularWeight: 76.16062,
    C1: 0.2202,
    C2: -0.00028535,
    minimumTemperature: 159.95,
    maximumTemperature: 340.87,
    thermalConductivityAtMinimumTemperature: 0.1746,
    thermalConductivityAtMaximumTemperature: 0.1229
  },

  "1,2PropyleneGlycol": {
    name: "1,2-Propylene glycol",
    formula: "C3H8O2",
    CAS: "57-55-6",
    molecularWeight: 76.09442,
    C1: 0.2152,
    C2: -0.0000497,
    minimumTemperature: 213.15,
    maximumTemperature: 460.75,
    thermalConductivityAtMinimumTemperature: 0.2046,
    thermalConductivityAtMaximumTemperature: 0.1923
  },

  Quinone: {
    name: "Quinone",
    formula: "C6H4O2",
    CAS: "106-51-4",
    molecularWeight: 108.09476,
    C1: 0.26524,
    C2: -0.00028676,
    minimumTemperature: 388.85,
    maximumTemperature: 545,
    thermalConductivityAtMinimumTemperature: 0.1537,
    thermalConductivityAtMaximumTemperature: 0.109
  },

  SiliconTetrafluoride: {
    name: "Silicon tetrafluoride",
    formula: "F4Si",
    CAS: "7783-61-1",
    molecularWeight: 104.07911
  },

  Styrene: {
    name: "Styrene",
    formula: "C8H8",
    CAS: "100-42-5",
    molecularWeight: 104.14912,
    C1: 0.20215,
    C2: -0.0002201,
    minimumTemperature: 242.54,
    maximumTemperature: 418.31,
    thermalConductivityAtMinimumTemperature: 0.1488,
    thermalConductivityAtMaximumTemperature: 0.1101
  },

  SuccinicAcid: {
    name: "Succinic acid",
    formula: "C4H6O4",
    CAS: "110-15-6",
    molecularWeight: 118.08804,
    C1: 0.27216,
    C2: -0.00023183,
    minimumTemperature: 460.85,
    maximumTemperature: 591,
    thermalConductivityAtMinimumTemperature: 0.1653,
    thermalConductivityAtMaximumTemperature: 0.1351
  },

  SulfurDioxide: {
    name: "Sulfur dioxide",
    formula: "O2S",
    CAS: "7446-09-5",
    molecularWeight: 64.0638,
    C1: 0.38218,
    C2: -0.0006254,
    minimumTemperature: 197.67,
    maximumTemperature: 400,
    thermalConductivityAtMinimumTemperature: 0.2586,
    thermalConductivityAtMaximumTemperature: 0.132
  },

  SulfurHexafluoride: {
    name: "Sulfur hexafluoride",
    formula: "F6S",
    CAS: "2551-62-4",
    molecularWeight: 146.0554192,
    C1: 0.2544,
    C2: -0.0006595,
    minimumTemperature: 223.15,
    maximumTemperature: 318.69,
    thermalConductivityAtMinimumTemperature: 0.1072,
    thermalConductivityAtMaximumTemperature: 0.0442
  },

  SulfurTrioxide: {
    name: "Sulfur trioxide",
    formula: "O3S",
    CAS: "7446-11-9",
    molecularWeight: 80.0632,
    C1: 0.92882,
    C2: -0.0030803,
    C3: 0.00000266,
    minimumTemperature: 289.95,
    maximumTemperature: 481.47,
    thermalConductivityAtMinimumTemperature: 0.2593,
    thermalConductivityAtMaximumTemperature: 0.0624
  },

  TerephthalicAcid: {
    name: "Terephthalic acid",
    formula: "C8H6O4",
    CAS: "100-21-0",
    molecularWeight: 166.13084,
    C1: 0.3063,
    C2: -0.00028541,
    minimumTemperature: 700.15,
    maximumTemperature: 795.28,
    thermalConductivityAtMinimumTemperature: 0.1065,
    thermalConductivityAtMaximumTemperature: 0.0793
  },

  oTerphenyl: {
    name: "o-Terphenyl",
    formula: "C18H14",
    CAS: "84-15-1",
    molecularWeight: 230.30376,
    C1: 0.16853,
    C2: -0.00010817,
    minimumTemperature: 329.35,
    maximumTemperature: 723.15,
    thermalConductivityAtMinimumTemperature: 0.1329,
    thermalConductivityAtMaximumTemperature: 0.0903
  },

  Tetradecane: {
    name: "Tetradecane",
    formula: "C14H30",
    CAS: "629-59-4",
    molecularWeight: 198.388,
    C1: 0.20293,
    C2: -0.00021798,
    minimumTemperature: 279.01,
    maximumTemperature: 526.73,
    thermalConductivityAtMinimumTemperature: 0.1421,
    thermalConductivityAtMaximumTemperature: 0.0881
  },

  Tetrahydrofuran: {
    name: "Tetrahydrofuran",
    formula: "C4H8O",
    CAS: "109-99-9",
    molecularWeight: 72.10572,
    C1: 0.19428,
    C2: -0.000249,
    minimumTemperature: 164.65,
    maximumTemperature: 339.12,
    thermalConductivityAtMinimumTemperature: 0.1533,
    thermalConductivityAtMaximumTemperature: 0.1098
  },

  "1,2,3,4Tetrahydronaphthalene": {
    name: "1,2,3,4-Tetrahydronaphthalene",
    formula: "C10H12",
    CAS: "119-64-2",
    molecularWeight: 132.20228,
    C1: 0.14563,
    C2: -5.36e-5,
    minimumTemperature: 237.38,
    maximumTemperature: 480.77,
    thermalConductivityAtMinimumTemperature: 0.1329,
    thermalConductivityAtMaximumTemperature: 0.1199
  },

  Tetrahydrothiophene: {
    name: "Tetrahydrothiophene",
    formula: "C4H8S",
    CAS: "110-01-0",
    molecularWeight: 88.17132,
    C1: 0.20414,
    C2: -0.00021217,
    minimumTemperature: 176.98,
    maximumTemperature: 394.27,
    thermalConductivityAtMinimumTemperature: 0.1666,
    thermalConductivityAtMaximumTemperature: 0.1205
  },

  "2,2,3,3Tetramethylbutane": {
    name: "2,2,3,3-Tetramethylbutane",
    formula: "C8H18",
    CAS: "594-82-1",
    molecularWeight: 114.22852,
    C1: 0.17835,
    C2: -0.00023704,
    minimumTemperature: 373.96,
    maximumTemperature: 426,
    thermalConductivityAtMinimumTemperature: 0.0897,
    thermalConductivityAtMaximumTemperature: 0.0774
  },

  Thiophene: {
    name: "Thiophene",
    formula: "C4H4S",
    CAS: "110-02-1",
    molecularWeight: 84.13956,
    C1: 0.20571,
    C2: -0.00020028,
    minimumTemperature: 234.94,
    maximumTemperature: 357.31,
    thermalConductivityAtMinimumTemperature: 0.1587,
    thermalConductivityAtMaximumTemperature: 0.1341
  },

  Toluene: {
    name: "Toluene",
    formula: "C7H8",
    CAS: "108-88-3",
    molecularWeight: 92.13842,
    C1: 0.20463,
    C2: -0.00024252,
    minimumTemperature: 178.18,
    maximumTemperature: 474.85,
    thermalConductivityAtMinimumTemperature: 0.1614,
    thermalConductivityAtMaximumTemperature: 0.0895
  },

  "1,1,2Trichloroethane": {
    name: "1,1,2-Trichloroethane",
    formula: "C2H3Cl3",
    CAS: "79-00-5",
    molecularWeight: 133.40422,
    C1: 0.20731,
    C2: -0.00024997,
    minimumTemperature: 236.5,
    maximumTemperature: 482,
    thermalConductivityAtMinimumTemperature: 0.1482,
    thermalConductivityAtMaximumTemperature: 0.0868
  },

  Tridecane: {
    name: "Tridecane",
    formula: "C13H28",
    CAS: "629-50-5",
    molecularWeight: 184.36142,
    C1: 0.20447,
    C2: -0.00022612,
    minimumTemperature: 267.76,
    maximumTemperature: 508.62,
    thermalConductivityAtMinimumTemperature: 0.1439,
    thermalConductivityAtMaximumTemperature: 0.0895
  },

  TriethylAmine: {
    name: "Triethyl amine",
    formula: "C6H15N",
    CAS: "121-44-8",
    molecularWeight: 101.19,
    C1: 0.1918,
    C2: -0.0002453,
    minimumTemperature: 158.45,
    maximumTemperature: 483.15,
    thermalConductivityAtMinimumTemperature: 0.1529,
    thermalConductivityAtMaximumTemperature: 0.0733
  },

  TrimethylAmine: {
    name: "Trimethyl amine",
    formula: "C3H9N",
    CAS: "75-50-3",
    molecularWeight: 59.11026,
    C1: 0.23813,
    C2: -0.00038397,
    minimumTemperature: 156.08,
    maximumTemperature: 276.02,
    thermalConductivityAtMinimumTemperature: 0.1782,
    thermalConductivityAtMaximumTemperature: 0.1321
  },

  "1,2,3Trimethylbenzene": {
    name: "1,2,3-Trimethylbenzene",
    formula: "C9H12",
    CAS: "526-73-8",
    molecularWeight: 120.19158,
    C1: 0.18854,
    C2: -0.0001963,
    minimumTemperature: 247.79,
    maximumTemperature: 449.27,
    thermalConductivityAtMinimumTemperature: 0.1399,
    thermalConductivityAtMaximumTemperature: 0.1003
  },

  "1,2,4Trimethylbenzene": {
    name: "1,2,4-Trimethylbenzene",
    formula: "C9H12",
    CAS: "95-63-6",
    molecularWeight: 120.19158,
    C1: 0.19216,
    C2: -0.0002105,
    minimumTemperature: 229.33,
    maximumTemperature: 442.53,
    thermalConductivityAtMinimumTemperature: 0.1439,
    thermalConductivityAtMaximumTemperature: 0.099
  },

  "2,2,4Trimethylpentane": {
    name: "2,2,4-Trimethylpentane",
    formula: "C8H18",
    CAS: "540-84-1",
    molecularWeight: 114.22852,
    C1: 0.1659,
    C2: -0.00022686,
    minimumTemperature: 165.78,
    maximumTemperature: 372.39,
    thermalConductivityAtMinimumTemperature: 0.1283,
    thermalConductivityAtMaximumTemperature: 0.0814
  },

  "2,3,3Trimethylpentane": {
    name: "2,3,3-Trimethylpentane",
    formula: "C8H18",
    CAS: "560-21-4",
    molecularWeight: 114.22852,
    C1: 0.16815,
    C2: -0.00020535,
    minimumTemperature: 172.22,
    maximumTemperature: 387.91,
    thermalConductivityAtMinimumTemperature: 0.1328,
    thermalConductivityAtMaximumTemperature: 0.0885
  },

  "1,3,5Trinitrobenzene": {
    name: "1,3,5-Trinitrobenzene",
    formula: "C6H3N3O6",
    CAS: "99-35-4",
    molecularWeight: 213.10452,
    C1: 0.18421,
    C2: -0.00016097,
    minimumTemperature: 398.4,
    maximumTemperature: 629.6,
    thermalConductivityAtMinimumTemperature: 0.1201,
    thermalConductivityAtMaximumTemperature: 0.0829
  },

  "2,4,6Trinitrotoluene": {
    name: "2,4,6-Trinitrotoluene",
    formula: "C7H5N3O6",
    CAS: "118-96-7",
    molecularWeight: 227.1311,
    C1: 0.19898,
    C2: -0.00017659,
    minimumTemperature: 354,
    maximumTemperature: 625,
    thermalConductivityAtMinimumTemperature: 0.1365,
    thermalConductivityAtMaximumTemperature: 0.0886
  },

  Undecane: {
    name: "Undecane",
    formula: "C11H24",
    CAS: "1120-21-4",
    molecularWeight: 156.30826,
    C1: 0.20515,
    C2: -0.00023933,
    minimumTemperature: 247.57,
    maximumTemperature: 469.08,
    thermalConductivityAtMinimumTemperature: 0.1459,
    thermalConductivityAtMaximumTemperature: 0.0929
  },

  "1Undecanol": {
    name: "1-Undecanol",
    formula: "C11H24O",
    CAS: "112-42-5",
    molecularWeight: 172.30766,
    C1: 0.218744,
    C2: -0.00025,
    minimumTemperature: 281,
    maximumTemperature: 561.2,
    thermalConductivityAtMinimumTemperature: 0.1485,
    thermalConductivityAtMaximumTemperature: 0.0784
  },

  VinylAcetate: {
    name: "Vinyl acetate",
    formula: "C4H6O2",
    CAS: "108-05-4",
    molecularWeight: 86.08924,
    C1: 0.256,
    C2: -0.0003542,
    minimumTemperature: 180.35,
    maximumTemperature: 410,
    thermalConductivityAtMinimumTemperature: 0.1921,
    thermalConductivityAtMaximumTemperature: 0.1108
  },

  VinylAcetylene: {
    name: "Vinyl acetylene",
    formula: "C4H4",
    CAS: "689-97-4",
    molecularWeight: 52.07456,
    C1: 0.22838,
    C2: -0.00035173,
    minimumTemperature: 173.15,
    maximumTemperature: 278.25,
    thermalConductivityAtMinimumTemperature: 0.1675,
    thermalConductivityAtMaximumTemperature: 0.1305
  },

  VinylChloride: {
    name: "Vinyl chloride",
    formula: "C2H3Cl",
    CAS: "75-01-4",
    molecularWeight: 62.49822,
    C1: 0.2333,
    C2: -0.00039223,
    minimumTemperature: 119.36,
    maximumTemperature: 345.6,
    thermalConductivityAtMinimumTemperature: 0.1865,
    thermalConductivityAtMaximumTemperature: 0.0978
  },

  VinylTrichlorosilane: {
    name: "Vinyl trichlorosilane",
    formula: "C2H3Cl3Si",
    CAS: "75-94-5",
    molecularWeight: 161.48972,
    C1: 0.21831,
    C2: -0.00029122,
    minimumTemperature: 178.35,
    maximumTemperature: 434.52,
    thermalConductivityAtMinimumTemperature: 0.1664,
    thermalConductivityAtMaximumTemperature: 0.0918
  },

  Water: {
    name: "Water",
    formula: "H2O",
    CAS: "7732-18-5",
    molecularWeight: 18.01528,
    C1: -0.432,
    C2: 0.0057255,
    C3: -8.078e-6,
    C4: 1.861e-9,
    minimumTemperature: 273.16,
    maximumTemperature: 633.15,
    thermalConductivityAtMinimumTemperature: 0.5672,
    thermalConductivityAtMaximumTemperature: 0.4272
  },

  mXylene: {
    name: "m-Xylene",
    formula: "C8H10",
    CAS: "108-38-3",
    molecularWeight: 106.165,
    C1: 0.20044,
    C2: -0.00023544,
    minimumTemperature: 225.3,
    maximumTemperature: 413.1,
    thermalConductivityAtMinimumTemperature: 0.1474,
    thermalConductivityAtMaximumTemperature: 0.1032
  },

  oXylene: {
    name: "o-Xylene",
    formula: "C8H10",
    CAS: "95-47-6",
    molecularWeight: 106.165,
    C1: 0.19989,
    C2: -0.0002299,
    minimumTemperature: 247.98,
    maximumTemperature: 417.58,
    thermalConductivityAtMinimumTemperature: 0.1429,
    thermalConductivityAtMaximumTemperature: 0.1039
  },

  pXylene: {
    name: "p-Xylene",
    formula: "C8H10",
    CAS: "106-42-3",
    molecularWeight: 106.165,
    C1: 0.20003,
    C2: -0.00023573,
    minimumTemperature: 286.41,
    maximumTemperature: 413.1,
    thermalConductivityAtMinimumTemperature: 0.1325,
    thermalConductivityAtMaximumTemperature: 0.1026
  }
};

export function calculateDIPPRThermalConductivity(compound: string, temperature: number): number {
  const thermalConductivityProps: DIPPRThermalConductivityProps | undefined =
    DIPPRThermalConductivityDictionary[compound];
  let thermalConductivity = NaN;
  if (
    thermalConductivityProps !== undefined &&
    typeof thermalConductivityProps.minimumTemperature === "number" &&
    typeof thermalConductivityProps.maximumTemperature === "number" &&
    temperature >= thermalConductivityProps.minimumTemperature &&
    temperature <= thermalConductivityProps.maximumTemperature
  ) {
    thermalConductivity =
      (Number.isFinite(thermalConductivityProps.C1) ? (thermalConductivityProps.C1 as number) : 0) +
      (Number.isFinite(thermalConductivityProps.C2) ? (thermalConductivityProps.C2 as number) * temperature : 0) +
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
