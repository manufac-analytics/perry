import { DIPPRVaporThermalConductivityProps } from "../interfaces/utils";

export const DIPPRVaporThermalConductivityDictionary: Record<string, DIPPRVaporThermalConductivityProps> = {
  Acetaldehyde: {
    name: "Acetaldehyde",
    formula: "C2H4O",
    CAS: "75-07-0",
    molecularWeight: 44.05256,
    C1: 1.0943e-7,
    C2: 2.0279,
    minimumTemperature: 294.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0111,
    thermalConductivityAtMaximumTemperature: 0.13269
  },

  Acetamide: {
    name: "Acetamide",
    formula: "C2H5NO",
    CAS: "60-35-5",
    molecularWeight: 59.0672,
    C1: 0.00013195,
    C2: 0.97,
    C3: 728.3,
    minimumTemperature: 494.3,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02189,
    thermalConductivityAtMaximumTemperature: 0.06206
  },

  AceticAcid: {
    name: "Acetic acid",
    formula: "C2H4O2",
    CAS: "64-19-7",
    molecularWeight: 60.052,
    C1: 2.4148,
    C2: -0.020867,
    C3: 0.000059409,
    C4: -5.4718e-8,
    minimumTemperature: 391.05,
    maximumTemperature: 458.15,
    thermalConductivityAtMinimumTemperature: 0.06749,
    thermalConductivityAtMaximumTemperature: 0.06259
  },

  AceticAcidExtended1: {
    name: "Acetic acid",
    formula: "C2H4O2",
    CAS: "64-19-7",
    molecularWeight: 60.052,
    C1: 1.0879,
    C2: -0.0038977,
    C3: 3.6227e-6,
    minimumTemperature: 458.15,
    maximumTemperature: 541.5,
    thermalConductivityAtMinimumTemperature: 0.06258,
    thermalConductivityAtMaximumTemperature: 0.03955
  },

  AceticAcidExtended2: {
    name: "Acetic acid",
    formula: "C2H4O2",
    CAS: "64-19-7",
    molecularWeight: 60.052,
    C1: 3.3901e-6, // All 4 contants may be wrong
    C2: 1.9588,
    C3: 36053,
    C4: 14086000,
    minimumTemperature: 541.5,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.03925,
    thermalConductivityAtMaximumTemperature: 0.11105
  },

  AceticAnhydride: {
    name: "AceticAnhydride",
    formula: "C4H6O3",
    CAS: "108-24-7",
    molecularWeight: 102.08864,
    C1: 3.1289e-6,
    C2: 1.4618,
    minimumTemperature: 412.7,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02084,
    thermalConductivityAtMaximumTemperature: 0.076
  },

  Acetone: {
    name: "Acetone",
    formula: "C3H6O",
    CAS: "67-64-1",
    molecularWeight: 58.07914,
    C1: 26.8, // printed value is -26.8
    C2: 0.9098,
    C3: 126500000,
    minimumTemperature: 329.44,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01363,
    thermalConductivityAtMaximumTemperature: 0.11362
  },

  Acetonitrile: {
    name: "Acetonitrile",
    formula: "C2H3N",
    CAS: "75-05-8",
    molecularWeight: 41.0519,
    C1: 8.3653e-7,
    C2: 1.6481,
    minimumTemperature: 339.09,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01238,
    thermalConductivityAtMaximumTemperature: 0.07358
  },

  Acetylene: {
    name: "Acetylene",
    formula: "C2H2",
    CAS: "74-86-2",
    molecularWeight: 26.03728,
    C1: 7.5782e-5,
    C2: 1.0327,
    C3: -36.227,
    C4: 31432,
    minimumTemperature: 189.35,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01011,
    thermalConductivityAtMaximumTemperature: 0.09545
  },

  Acrolein: {
    name: "Acrolein",
    formula: "C3H4O",
    CAS: "107-02-8",
    molecularWeight: 56.06326,
    C1: 0.024098,
    C2: 0.3285,
    C3: 1325.3,
    C4: 577830,
    minimumTemperature: 325.84,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01534,
    thermalConductivityAtMaximumTemperature: 0.08028
  },

  AcrylicAcid: {
    name: "Acrylic acid",
    formula: "C3H4O2",
    CAS: "79-10-7",
    molecularWeight: 72.06266,
    C1: 0.0009265,
    C2: 0.7035,
    C3: 627.58,
    C4: 112460,
    minimumTemperature: 414.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02027,
    thermalConductivityAtMaximumTemperature: 0.06867
  },

  Acrylonitrile: {
    name: "Acrylonitrile",
    formula: "C3H3N",
    CAS: "107-13-1",
    molecularWeight: 53.0626,
    C1: -0.000861,
    C2: 0.77281,
    C3: -2555.2,
    minimumTemperature: 298.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00929,
    thermalConductivityAtMaximumTemperature: 0.11525
  },

  Air: {
    name: "Air",
    formula: "Mixture",
    CAS: "132259-10-0",
    molecularWeight: 28.96,
    C1: 0.00031417,
    C2: 0.7786,
    C3: -0.7116,
    C4: 2121.7,
    minimumTemperature: 70,
    maximumTemperature: 2000,
    thermalConductivityAtMinimumTemperature: 0.00603,
    thermalConductivityAtMaximumTemperature: 0.11675
  },

  Ammonia: {
    name: "Ammonia",
    formula: "H3N",
    CAS: "7664-41-7",
    molecularWeight: 17.03052,
    C1: 9.6608e-6,
    C2: 1.3799,
    minimumTemperature: 200,
    maximumTemperature: 900,
    thermalConductivityAtMinimumTemperature: 0.01446,
    thermalConductivityAtMaximumTemperature: 0.11523
  },

  Anisole: {
    name: "Anisole",
    formula: "C7H8O",
    CAS: "100-66-3",
    molecularWeight: 108.13782,
    C1: 0.00059858,
    C2: 0.7527,
    C3: 354.04,
    C4: 241830,
    minimumTemperature: 426.73,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01809,
    thermalConductivityAtMaximumTemperature: 0.06796
  },

  Argon: {
    name: "Argon",
    formula: "Ar",
    CAS: "7440-37-1",
    molecularWeight: 39.948,
    C1: 0.000633,
    C2: 0.6221,
    C3: 70,
    minimumTemperature: 90,
    maximumTemperature: 3273.1,
    thermalConductivityAtMinimumTemperature: 0.00585,
    thermalConductivityAtMaximumTemperature: 0.09525
  },

  Benzamide: {
    name: "Benzamide",
    formula: "C7H7NO",
    CAS: "55-21-0",
    molecularWeight: 121.13658,
    C1: 0.025389,
    C2: 0.28547,
    C3: 1018.3,
    C4: 1228600,
    minimumTemperature: 563.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02317,
    thermalConductivityAtMaximumTemperature: 0.05618
  },

  Benzene: {
    name: "Benzene",
    formula: "C6H6",
    CAS: "71-43-2",
    molecularWeight: 78.11184,
    C1: 1.652e-5,
    C2: 1.3117,
    C3: 491,
    minimumTemperature: 339.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01407,
    thermalConductivityAtMaximumTemperature: 0.09542
  },

  Benzenethiol: {
    name: "Benzenethiol",
    formula: "C6H6S",
    CAS: "108-98-5",
    molecularWeight: 110.17684,
    C1: 0.00047951,
    C2: 0.7818,
    C3: 463.4,
    C4: 189410,
    minimumTemperature: 442.29,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01861,
    thermalConductivityAtMaximumTemperature: 0.06427
  },

  BenzoicAcid: {
    name: "Benzoic acid",
    formula: "C7H6O2",
    CAS: "65-85-0",
    molecularWeight: 122.12134,
    C1: 0.0001163,
    C2: 0.9705,
    C3: 740,
    minimumTemperature: 522.4,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0209,
    thermalConductivityAtMaximumTemperature: 0.05452
  },

  Benzonitrile: {
    name: "Benzonitrile",
    formula: "C7H5N",
    CAS: "100-47-0",
    molecularWeight: 103.1213,
    C1: 1.3917e-6,
    C2: 1.5389,
    minimumTemperature: 464.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01767,
    thermalConductivityAtMaximumTemperature: 0.05758
  },

  Benzophenone: {
    name: "Benzophenone",
    formula: "C13H10O",
    CAS: "119-61-9",
    molecularWeight: 182.2179,
    C1: 0.0001235,
    C2: 0.9495,
    C3: 778.7,
    minimumTemperature: 579.24,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02213,
    thermalConductivityAtMaximumTemperature: 0.04899
  },

  BenzylAlcohol: {
    name: "Benzyl alcohol",
    formula: "C7H8O",
    CAS: "100-51-6",
    molecularWeight: 108.13782,
    C1: 0.00023476,
    C2: 0.8639,
    C3: 187.8,
    C4: 193840,
    minimumTemperature: 478.6,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02167,
    thermalConductivityAtMaximumTemperature: 0.06636
  },

  BenzylEthylEther: {
    name: "Benzyl ethyl ether",
    formula: "C9H12O",
    CAS: "539-30-0",
    molecularWeight: 136.19098,
    C1: 0.00096451,
    C2: 0.69225,
    C3: 519.99,
    C4: 278930,
    minimumTemperature: 458.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01936,
    thermalConductivityAtMaximumTemperature: 0.06398
  },

  BenzylMercaptan: {
    name: "Benzyl mercaptan",
    formula: "C7H8S",
    CAS: "100-53-8",
    molecularWeight: 124.20342,
    C1: 0.00015525,
    C2: 0.9446,
    C3: 715.78,
    minimumTemperature: 472.03,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02071,
    thermalConductivityAtMaximumTemperature: 0.06171
  },

  Biphenyl: {
    name: "Biphenyl",
    formula: "C12H10",
    CAS: "92-52-4",
    molecularWeight: 154.2078,
    C1: 2.8646e-6,
    C2: 1.4098,
    C3: -391.35,
    C4: 156820,
    minimumTemperature: 373.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01123,
    thermalConductivityAtMaximumTemperature: 0.06347
  },

  Bromine: {
    name: "Bromine",
    formula: "Br2",
    CAS: "7726-95-6",
    molecularWeight: 159.808,
    C1: 1.0404e-6,
    C2: 1.4685,
    minimumTemperature: 300,
    maximumTemperature: 500,
    thermalConductivityAtMinimumTemperature: 0.00452,
    thermalConductivityAtMaximumTemperature: 0.00956
  },

  Bromobenzene: {
    name: "Bromobenzene",
    formula: "C6H5Br",
    CAS: "108-86-1",
    molecularWeight: 157.0079,
    C1: 0.00027085,
    C2: 0.7932,
    C3: 278.33,
    C4: 165880,
    minimumTemperature: 429.24,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01302,
    thermalConductivityAtMaximumTemperature: 0.04495
  },

  Bromoethane: {
    name: "Bromoethane",
    formula: "C2H5Br",
    CAS: "74-96-4",
    molecularWeight: 108.965,
    C1: 0.00099879,
    C2: 0.71894,
    C3: 2358.4,
    minimumTemperature: 311.49,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00723,
    thermalConductivityAtMaximumTemperature: 0.04267
  },

  Bromomethane: {
    name: "Bromomethane",
    formula: "CH3Br",
    CAS: "74-83-9",
    molecularWeight: 94.93852,
    C1: 5.7816e-7,
    C2: 1.6666,
    minimumTemperature: 273,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00664,
    thermalConductivityAtMaximumTemperature: 0.05779
  },

  "1,2Butadiene": {
    name: "1,2-Butadiene",
    formula: "C4H6",
    CAS: "590-19-2",
    molecularWeight: 54.09044,
    C1: 8.8221e-5,
    C2: 1.0273,
    C3: 75.316,
    C4: 99063,
    minimumTemperature: 284,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01172,
    thermalConductivityAtMaximumTemperature: 0.09071
  },

  "1,3Butadiene": {
    name: "1,3-Butadiene",
    formula: "C4H6",
    CAS: "106-99-0",
    molecularWeight: 54.09044,
    C1: -20890,
    C2: 0.9593,
    C3: -93820000000,
    minimumTemperature: 268.74,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01281,
    thermalConductivityAtMaximumTemperature: 0.16809
  },

  Butane: {
    name: "Butane",
    formula: "C4H10",
    CAS: "106-97-8",
    molecularWeight: 58.1222,
    C1: 0.051094,
    C2: 0.45253,
    C3: 5455.5,
    C4: 1979800,
    minimumTemperature: 272.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01357,
    thermalConductivityAtMaximumTemperature: 0.13799
  },

  "1,2Butanediol": {
    name: "1,2-Butanediol",
    formula: "C4H10O2",
    CAS: "584-03-2",
    molecularWeight: 90.121,
    C1: 0.00014035,
    C2: 1.0032,
    C3: 711.66,
    minimumTemperature: 469.57,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02672,
    thermalConductivityAtMaximumTemperature: 0.08383
  },

  "1,3Butanediol": {
    name: "1,3-Butanediol",
    formula: "C4H10O2",
    CAS: "107-88-0",
    molecularWeight: 90.121,
    C1: -918.39,
    C2: -0.21199,
    C3: 334420,
    C4: -2884200000,
    minimumTemperature: 481.38,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0211,
    thermalConductivityAtMaximumTemperature: 0.08332
  },

  "1Butanol": {
    name: "1-Butanol",
    formula: "C4H10O",
    CAS: "71-36-3",
    molecularWeight: 74.1216,
    C1: 0.0011484,
    C2: 0.87647,
    C3: 3253.7,
    minimumTemperature: 370.7,
    maximumTemperature: 712.94,
    thermalConductivityAtMinimumTemperature: 0.02097,
    thermalConductivityAtMaximumTemperature: 0.06536
  },

  "2Butanol": {
    name: "2-Butanol",
    formula: "C4H10O",
    CAS: "78-92-2",
    molecularWeight: 74.1216,
    C1: 4.5894e-6,
    C2: 1.4484,
    minimumTemperature: 372.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02435,
    thermalConductivityAtMaximumTemperature: 0.10161
  },

  "1Butene": {
    name: "1-Butene",
    formula: "C4H8",
    CAS: "106-98-9",
    molecularWeight: 56.10632,
    C1: 9.6809e-5,
    C2: 1.1153,
    C3: 781.82,
    minimumTemperature: 266.91,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01252,
    thermalConductivityAtMaximumTemperature: 0.12049
  },

  cis2Butene: {
    name: "cis-2-Butene",
    formula: "C4H8",
    CAS: "590-18-1",
    molecularWeight: 56.10632,
    C1: 6.7737e-5,
    C2: 1.0709,
    C3: -65.881,
    C4: 129390,
    minimumTemperature: 273.15,
    maximumTemperature: 1273.15,
    thermalConductivityAtMinimumTemperature: 0.01105,
    thermalConductivityAtMaximumTemperature: 0.13926
  },

  trans2Butene: {
    name: "trans-2-Butene",
    formula: "C4H8",
    CAS: "624-64-6",
    molecularWeight: 56.10632,
    C1: 7.8576e-5,
    C2: 1.0565,
    C3: 14.63,
    C4: 105920,
    minimumTemperature: 274.03,
    maximumTemperature: 1257,
    thermalConductivityAtMinimumTemperature: 0.012,
    thermalConductivityAtMaximumTemperature: 0.13704
  },

  ButylAcetate: {
    name: "Butyl acetate",
    formula: "C6H12O2",
    CAS: "123-86-4",
    molecularWeight: 116.15828,
    C1: 5.86e-9,
    C2: 2.376,
    C3: -401.32,
    C4: 69280,
    minimumTemperature: 273,
    maximumTemperature: 800,
    thermalConductivityAtMinimumTemperature: 0.00783,
    thermalConductivityAtMaximumTemperature: 0.07634
  },

  Butylbenzene: {
    name: "Butylbenzene",
    formula: "C10H14",
    CAS: "104-51-8",
    molecularWeight: 134.21816,
    C1: 0.1807,
    C2: 0.0082225,
    C3: -129.42,
    C4: 1691500,
    minimumTemperature: 456.46,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02151,
    thermalConductivityAtMaximumTemperature: 0.07465
  },

  ButylMercaptan: {
    name: "Butyl mercaptan",
    formula: "C4H10S",
    CAS: "109-79-5",
    molecularWeight: 90.1872,
    C1: 0.00097826,
    C2: 0.78643,
    C3: 1531.5,
    C4: 67115,
    minimumTemperature: 371.61,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01832,
    thermalConductivityAtMaximumTemperature: 0.0861
  },

  secButylMercaptan: {
    name: "sec-Butyl mercaptan",
    formula: "C4H10S",
    CAS: "513-53-1",
    molecularWeight: 90.1872,
    C1: 0.9719,
    C2: -0.111,
    C3: 1167.2,
    C4: 3163200,
    minimumTemperature: 358.13,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01749,
    thermalConductivityAtMaximumTemperature: 0.0847
  },

  "1Butyne": {
    name: "1-Butyne",
    formula: "C4H6",
    CAS: "107-00-6",
    molecularWeight: 54.09044,
    C1: 3.7269e-5,
    C2: 1.1427,
    C3: -43.844,
    C4: 79421,
    minimumTemperature: 281.22,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01268,
    thermalConductivityAtMaximumTemperature: 0.09644
  },

  Butyraldehyde: {
    name: "Butyraldehyde",
    formula: "C4H8O",
    CAS: "123-72-8",
    molecularWeight: 72.10572,
    C1: 9.9652e-7,
    C2: 1.6558,
    minimumTemperature: 347.94,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0161,
    thermalConductivityAtMaximumTemperature: 0.09245
  },

  ButyricAcid: {
    name: "Butyric acid",
    formula: "C4H8O2",
    CAS: "107-92-6",
    molecularWeight: 88.1051,
    C1: 0.7873,
    C2: -0.0036161,
    C3: 5.6641e-6,
    C4: -2.8451e-9,
    minimumTemperature: 436.42,
    maximumTemperature: 706.95,
    thermalConductivityAtMinimumTemperature: 0.05147,
    thermalConductivityAtMaximumTemperature: 0.05647
  },

  ButyricAcidExtended: {
    name: "Butyric acid",
    formula: "C4H8O2",
    CAS: "107-92-6",
    molecularWeight: 88.1051,
    C1: 9.2069e-8,
    C2: 2.0312,
    minimumTemperature: 706.95,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.05647,
    thermalConductivityAtMaximumTemperature: 0.11421
  },

  Butyronitrile: {
    name: "Butyronitrile",
    formula: "C4H7N",
    CAS: "109-74-0",
    molecularWeight: 69.1051,
    C1: 1.3751e-6,
    C2: 1.5786,
    minimumTemperature: 390.74,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01698,
    thermalConductivityAtMaximumTemperature: 0.07484
  },

  CarbonDioxide: {
    name: "Carbon dioxide",
    formula: "CO2",
    CAS: "124-38-9",
    molecularWeight: 44.0095,
    C1: 3.69,
    C2: -0.3838,
    C3: 964,
    C4: 1860000,
    minimumTemperature: 194.67,
    maximumTemperature: 1500,
    thermalConductivityAtMinimumTemperature: 0.00887,
    thermalConductivityAtMaximumTemperature: 0.09025
  },

  CarbonDisulfide: {
    name: "Carbon disulfide",
    formula: "CS2",
    CAS: "75-15-0",
    molecularWeight: 76.1407,
    C1: 0.0003467,
    C2: 0.7345,
    C3: 479,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00776,
    thermalConductivityAtMaximumTemperature: 0.03745
  },

  CarbonMonoxide: {
    name: "Carbon monoxide",
    formula: "CO",
    CAS: "630-08-0",
    molecularWeight: 28.0101,
    C1: 0.00059882,
    C2: 0.6863,
    C3: 57.13,
    C4: 501.92,
    minimumTemperature: 70,
    maximumTemperature: 1500,
    thermalConductivityAtMinimumTemperature: 0.00576,
    thermalConductivityAtMaximumTemperature: 0.08724
  },

  CarbonTetrachloride: {
    name: "Carbon tetrachloride",
    formula: "CCl4",
    CAS: "56-23-5",
    molecularWeight: 153.8227,
    C1: 0.00016599,
    C2: 0.94375,
    C3: 1449.6,
    minimumTemperature: 349.79,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00812,
    thermalConductivityAtMaximumTemperature: 0.04595
  },

  CarbonTetrafluoride: {
    name: "Carbon tetrafluoride",
    formula: "CF4",
    CAS: "75-73-0",
    molecularWeight: 88.0043,
    C1: 0.000092004,
    C2: 1.0164,
    C3: 270.83,
    minimumTemperature: 145.1,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00505,
    thermalConductivityAtMaximumTemperature: 0.08108
  },

  Chlorine: {
    name: "Chlorine",
    formula: "Cl2",
    CAS: "7782-50-5",
    molecularWeight: 70.906,
    C1: 0.0009993,
    C2: 0.5472,
    C3: 458.6,
    minimumTemperature: 200,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00551,
    thermalConductivityAtMaximumTemperature: 0.03002
  },

  Chlorobenzene: {
    name: "Chlorobenzene",
    formula: "C6H5Cl",
    CAS: "108-90-7",
    molecularWeight: 112.5569,
    C1: 0.0004783,
    C2: 0.8994,
    C3: 1845.5,
    C4: 163000,
    minimumTemperature: 400,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01579,
    thermalConductivityAtMaximumTemperature: 0.07935
  },

  Chloroethane: {
    name: "Chloroethane",
    formula: "C2H5Cl",
    CAS: "75-00-3",
    molecularWeight: 64.5141,
    C1: 4.92e-7,
    C2: 1.70639,
    C3: -232.008,
    C4: 46603.4,
    minimumTemperature: 285.45,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01004,
    thermalConductivityAtMaximumTemperature: 0.07943
  },

  Chloroform: {
    name: "Chloroform",
    formula: "CHCl3",
    CAS: "67-66-3",
    molecularWeight: 119.37764,
    C1: 0.00043073,
    C2: 0.83878,
    C3: 1874.5,
    minimumTemperature: 334.33,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00854,
    thermalConductivityAtMaximumTemperature: 0.0492
  },

  Chloromethane: {
    name: "Chloromethane",
    formula: "CH3Cl",
    CAS: "74-87-3",
    molecularWeight: 50.4875,
    C1: -3263.77,
    C2: 0.0675,
    C3: -46803200,
    C4: -25000700000,
    minimumTemperature: 248.95,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00801,
    thermalConductivityAtMaximumTemperature: 0.07246
  },

  "1Chloropropane": {
    name: "1-Chloropropane",
    formula: "C3H7Cl",
    CAS: "540-54-5",
    molecularWeight: 78.54068,
    C1: 0.01652,
    C2: 0.44154,
    C3: 2444.42,
    C4: 793392,
    minimumTemperature: 319.67,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01285,
    thermalConductivityAtMaximumTemperature: 0.08232
  },

  "2Chloropropane": {
    name: "2-Chloropropane",
    formula: "C3H7Cl",
    CAS: "75-29-6",
    molecularWeight: 78.54068,
    C1: 0.00009154,
    C2: 1.0681,
    C3: 746.6,
    minimumTemperature: 308.85,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01222,
    thermalConductivityAtMaximumTemperature: 0.08389
  },

  mCresol: {
    name: "m-Cresol",
    formula: "C7H8O",
    CAS: "108-39-4",
    molecularWeight: 108.13782,
    C1: 0.00019307,
    C2: 0.9248,
    C3: 710,
    minimumTemperature: 475.43,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02316,
    thermalConductivityAtMaximumTemperature: 0.06716
  },

  oCresol: {
    name: "o-Cresol",
    formula: "C7H8O",
    CAS: "95-48-7",
    molecularWeight: 108.13782,
    C1: 0.00018648,
    C2: 0.9302,
    C3: 709.37,
    minimumTemperature: 464.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0223,
    thermalConductivityAtMaximumTemperature: 0.06736
  },

  pCresol: {
    name: "p-Cresol",
    formula: "C7H8O",
    CAS: "106-44-5",
    molecularWeight: 108.13782,
    C1: 0.00019063,
    C2: 0.9282,
    C3: 716.91,
    minimumTemperature: 475.13,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02319,
    thermalConductivityAtMaximumTemperature: 0.06762
  },

  Cumene: {
    name: "Cumene",
    formula: "C9H12",
    CAS: "98-82-8",
    molecularWeight: 120.19158,
    C1: 1.67e-7,
    C2: 1.8369,
    C3: -449.46,
    C4: 112760,
    minimumTemperature: 380,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01534,
    thermalConductivityAtMaximumTemperature: 0.08181
  },

  Cyanogen: {
    name: "Cyanogen",
    formula: "C2N2",
    CAS: "460-19-5",
    molecularWeight: 52.0348,
    C1: 0.000014433,
    C2: 1.2104,
    minimumTemperature: 251.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01164,
    thermalConductivityAtMaximumTemperature: 0.06174
  },

  Cyclobutane: {
    name: "Cyclobutane",
    formula: "C4H8",
    CAS: "287-23-0",
    molecularWeight: 56.10632,
    C1: -449910,
    C2: 0.27364,
    C3: -10001000000,
    C4: -9.87e12,
    minimumTemperature: 285.66,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01356,
    thermalConductivityAtMaximumTemperature: 0.14994
  },

  Cyclohexane: {
    name: "Cyclohexane",
    formula: "C6H12",
    CAS: "110-82-7",
    molecularWeight: 84.15948,
    C1: 0.000000859,
    C2: 1.7709,
    C3: 243,
    minimumTemperature: 325,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0138,
    thermalConductivityAtMaximumTemperature: 0.14198
  },

  Cyclohexanol: {
    name: "Cyclohexanol",
    formula: "C6H12O",
    CAS: "108-93-0",
    molecularWeight: 100.15888,
    C1: 0.0032207,
    C2: 0.5991,
    C3: 608.69,
    C4: 509290,
    minimumTemperature: 434,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02399,
    thermalConductivityAtMaximumTemperature: 0.09535
  },

  Cyclohexanone: {
    name: "Cyclohexanone",
    formula: "C6H10O",
    CAS: "108-94-1",
    molecularWeight: 98.143,
    C1: -1095.5,
    C2: -0.023408,
    C3: 498780,
    C4: -7835500000,
    minimumTemperature: 428.58,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02291,
    thermalConductivityAtMaximumTemperature: 0.12704
  },

  Cyclohexene: {
    name: "Cyclohexene",
    formula: "C6H10",
    CAS: "110-83-8",
    molecularWeight: 82.1436,
    C1: 0.0000901,
    C2: 1.0897,
    C3: 655,
    minimumTemperature: 356.12,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01914,
    thermalConductivityAtMaximumTemperature: 0.10116
  },

  Cyclopentane: {
    name: "Cyclopentane",
    formula: "C5H10",
    CAS: "287-92-3",
    molecularWeight: 70.1329,
    C1: 9.55e-6,
    C2: 1.4641,
    C3: 632.62,
    minimumTemperature: 273,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01061,
    thermalConductivityAtMaximumTemperature: 0.14429
  },

  Cyclopentene: {
    name: "Cyclopentene",
    formula: "C5H8",
    CAS: "142-29-0",
    molecularWeight: 68.11702,
    C1: 0.0010949,
    C2: 0.71644,
    C3: 175.55,
    C4: 346040,
    minimumTemperature: 317.38,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0136,
    thermalConductivityAtMaximumTemperature: 0.10148
  },

  Cyclopropane: {
    name: "Cyclopropane",
    formula: "C3H6",
    CAS: "75-19-4",
    molecularWeight: 42.07974,
    C1: -91.383,
    C2: 0.89718,
    C3: -283310000,
    minimumTemperature: 240.37,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01061,
    thermalConductivityAtMaximumTemperature: 0.15854
  },

  CyclohexylMercaptan: {
    name: "Cyclohexyl mercaptan",
    formula: "C6H12S",
    CAS: "1569-69-3",
    molecularWeight: 116.22448,
    C1: 0.0000813,
    C2: 1.0674,
    C3: 697.6,
    minimumTemperature: 431.95,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02022,
    thermalConductivityAtMaximumTemperature: 0.07629
  },

  Decanal: {
    name: "Decanal",
    formula: "C10H20O",
    CAS: "112-31-2",
    molecularWeight: 156.2652,
    C1: 1.97e-6,
    C2: 1.5349,
    minimumTemperature: 481.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0259,
    thermalConductivityAtMaximumTemperature: 0.07948
  },

  Decane: {
    name: "Decane",
    formula: "C10H22",
    CAS: "124-18-5",
    molecularWeight: 142.28168,
    C1: -668.4,
    C2: 0.9323,
    C3: -4071000000,
    minimumTemperature: 447.3,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02173,
    thermalConductivityAtMaximumTemperature: 0.10286
  },

  DecanoicAcid: {
    name: "Decanoic acid",
    formula: "C10H20O2",
    CAS: "334-48-5",
    molecularWeight: 172.265,
    C1: 3.33e-9,
    C2: 2.4876,
    C3: -124.9,
    minimumTemperature: 543.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02746,
    thermalConductivityAtMaximumTemperature: 0.11029
  },

  "1Decanol": {
    name: "1-Decanol",
    formula: "C10H22O",
    CAS: "112-30-1",
    molecularWeight: 158.28108,
    C1: -0.3072,
    C2: 0.489,
    C3: -67500,
    C4: -29400000,
    minimumTemperature: 504,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0259,
    thermalConductivityAtMaximumTemperature: 0.09389
  },

  "1Decene": {
    name: "1-Decene",
    formula: "C10H20",
    CAS: "872-05-9",
    molecularWeight: 140.2658,
    C1: 0.000027232,
    C2: 1.257,
    C3: 751.7,
    minimumTemperature: 443.75,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02149,
    thermalConductivityAtMaximumTemperature: 0.09175
  },

  DecylMercaptan: {
    name: "Decyl mercaptan",
    formula: "C10H22S",
    CAS: "143-10-2",
    molecularWeight: 174.34668,
    C1: 0.00012058,
    C2: 1.0111,
    C3: 740,
    minimumTemperature: 512.35,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02709,
    thermalConductivityAtMaximumTemperature: 0.07482
  },

  "1Decyne": {
    name: "1-Decyne",
    formula: "C10H18",
    CAS: "764-93-2",
    molecularWeight: 138.24992,
    C1: 0.000016707,
    C2: 1.2128,
    C3: -206.08,
    C4: 153850,
    minimumTemperature: 447.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02092,
    thermalConductivityAtMaximumTemperature: 0.07667
  },

  Deuterium: {
    name: "Deuterium",
    formula: "D2",
    CAS: "7782-39-0",
    molecularWeight: 4.0316,
    C1: 0.00028527,
    C2: 0.9874,
    C3: -200.51,
    C4: 21807,
    minimumTemperature: 233.15,
    maximumTemperature: 1500,
    thermalConductivityAtMinimumTemperature: 0.11474,
    thermalConductivityAtMaximumTemperature: 0.44547
  },

  "1,1Dibromoethane": {
    name: "1,1-Dibromoethane",
    formula: "C2H4Br2",
    CAS: "557-91-5",
    molecularWeight: 187.86116,
    C1: 0.00021231,
    C2: 0.8052,
    C3: 649.51,
    minimumTemperature: 381.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0094,
    thermalConductivityAtMaximumTemperature: 0.03351
  },

  "1,2Dibromoethane": {
    name: "1,2-Dibromoethane",
    formula: "C2H4Br2",
    CAS: "106-93-4",
    molecularWeight: 187.86116,
    C1: 0.00015878,
    C2: 0.8636,
    C3: 659.5,
    minimumTemperature: 404.51,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01077,
    thermalConductivityAtMaximumTemperature: 0.03729
  },

  Dibromomethane: {
    name: "Dibromomethane",
    formula: "CH2Br2",
    CAS: "74-95-3",
    molecularWeight: 173.83458,
    C1: 0.00021302,
    C2: 0.8719,
    C3: 1620,
    minimumTemperature: 370.1,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00687,
    thermalConductivityAtMaximumTemperature: 0.03356
  },

  DibutylEther: {
    name: "Dibutyl ether",
    formula: "C8H18O",
    CAS: "142-96-1",
    molecularWeight: 130.22792,
    C1: 0.0032694,
    C2: 0.58633,
    C3: 1259.9,
    C4: 300890,
    minimumTemperature: 323.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01244,
    thermalConductivityAtMaximumTemperature: 0.0733
  },

  mDichlorobenzene: {
    name: "m-Dichlorobenzene",
    formula: "C6H4Cl2",
    CAS: "541-73-1",
    molecularWeight: 147.00196,
    C1: -1067.8,
    C2: 0.754,
    C3: -3036100000,
    minimumTemperature: 446.23,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01561,
    thermalConductivityAtMaximumTemperature: 0.0643
  },

  oDichlorobenzene: {
    name: "o-Dichlorobenzene",
    formula: "C6H4Cl2",
    CAS: "95-50-1",
    molecularWeight: 147.00196,
    C1: -1420,
    C2: 0.7614,
    C3: -4504000000,
    minimumTemperature: 453.57,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01507,
    thermalConductivityAtMaximumTemperature: 0.06066
  },

  pDichlorobenzene: {
    name: "p-Dichlorobenzene",
    formula: "C6H4Cl2",
    CAS: "106-46-7",
    molecularWeight: 147.00196,
    C1: -1520.8,
    C2: 0.754,
    C3: -4332800000,
    minimumTemperature: 447.21,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01564,
    thermalConductivityAtMaximumTemperature: 0.06417
  },

  "1,1Dichloroethane": {
    name: "1,1-Dichloroethane",
    formula: "C2H4Cl2",
    CAS: "75-34-3",
    molecularWeight: 98.95916,
    C1: 0.0001315,
    C2: 1.0113,
    C3: 1023.8,
    minimumTemperature: 330.45,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01132,
    thermalConductivityAtMaximumTemperature: 0.07025
  },

  "1,2Dichloroethane": {
    name: "1,2-Dichloroethane",
    formula: "C2H4Cl2",
    CAS: "107-06-2",
    molecularWeight: 98.95916,
    C1: 0.00021054,
    C2: 0.9574,
    C3: 1414,
    minimumTemperature: 356.59,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01177,
    thermalConductivityAtMaximumTemperature: 0.06498
  },

  Dichloromethane: {
    name: "Dichloromethane",
    formula: "CH2Cl2",
    CAS: "75-09-2",
    molecularWeight: 84.93258,
    C1: 0.0014796,
    C2: 0.69531,
    C3: 2657.4,
    minimumTemperature: 312.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00847,
    thermalConductivityAtMaximumTemperature: 0.04931
  },

  "1,1Dichloropropane": {
    name: "1,1-Dichloropropane",
    formula: "C3H6Cl2",
    CAS: "78-99-9",
    molecularWeight: 112.98574,
    C1: 0.000057603,
    C2: 1.1148,
    C3: 849.98,
    minimumTemperature: 361.25,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0122,
    thermalConductivityAtMaximumTemperature: 0.06881
  },

  "1,2Dichloropropane": {
    name: "1,2-Dichloropropane",
    formula: "C3H6Cl2",
    CAS: "78-87-5",
    molecularWeight: 112.98574,
    C1: 0.000062435,
    C2: 1.103,
    C3: 913.43,
    minimumTemperature: 369.52,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01222,
    thermalConductivityAtMaximumTemperature: 0.06647
  },

  DiethanolAmine: {
    name: "Diethanol amine",
    formula: "C4H11NO2",
    CAS: "111-42-2",
    molecularWeight: 105.13564,
    C1: -11633,
    C2: 0.4621,
    C3: -3793900000,
    minimumTemperature: 541.54,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.03044,
    thermalConductivityAtMaximumTemperature: 0.07463
  },

  DiethylAmine: {
    name: "Diethyl amine",
    formula: "C4H11N",
    CAS: "109-89-7",
    molecularWeight: 73.13684,
    C1: 0.00001706,
    C2: 1.248,
    C3: -112.8,
    C4: 77960,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01148,
    thermalConductivityAtMaximumTemperature: 0.09804
  },

  DiethylEther: {
    name: "Diethyl ether",
    formula: "C4H10O",
    CAS: "60-29-7",
    molecularWeight: 74.1216,
    C1: -0.0044894,
    C2: 0.6155,
    C3: -3266.3,
    minimumTemperature: 200,
    maximumTemperature: 600,
    thermalConductivityAtMinimumTemperature: 0.00764,
    thermalConductivityAtMaximumTemperature: 0.05181
  },

  DiethylSulfide: {
    name: "Diethyl sulfide",
    formula: "C4H10S",
    CAS: "352-93-2",
    molecularWeight: 90.1872,
    C1: 0.0018097,
    C2: 0.67406,
    C3: 1179.7,
    C4: 174850,
    minimumTemperature: 365.25,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01743,
    thermalConductivityAtMaximumTemperature: 0.08089
  },

  "1,1Difluoroethane": {
    name: "1,1-Difluoroethane",
    formula: "C2H4F2",
    CAS: "75-37-6",
    molecularWeight: 66.04997,
    C1: 0.000059249,
    C2: 1.0713,
    C3: 101.84,
    C4: 45974,
    minimumTemperature: 248.95,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01016,
    thermalConductivityAtMaximumTemperature: 0.08447
  },

  "1,2Difluoroethane": {
    name: "1,2-Difluoroethane",
    formula: "C2H4F2",
    CAS: "624-72-6",
    molecularWeight: 66.04997,
    C1: 2.4194e-6,
    C2: 1.4456,
    minimumTemperature: 303.65,
    maximumTemperature: 993.65,
    thermalConductivityAtMinimumTemperature: 0.00938,
    thermalConductivityAtMaximumTemperature: 0.05206
  },

  Difluoromethane: {
    name: "Difluoromethane",
    formula: "CH2F2",
    CAS: "75-10-5",
    molecularWeight: 52.02339,
    C1: 1.3015e-5,
    C2: 1.1897,
    minimumTemperature: 221.5,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00803,
    thermalConductivityAtMaximumTemperature: 0.04826
  },

  DiisopropylAmine: {
    name: "Diisopropyl amine",
    formula: "C6H15N",
    CAS: "108-18-9",
    molecularWeight: 101.19,
    C1: 0.00051305,
    C2: 0.8076,
    C3: 360.19,
    C4: 154510,
    minimumTemperature: 357.05,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01836,
    thermalConductivityAtMaximumTemperature: 0.08967
  },

  DiisopropylEther: {
    name: "Diisopropyl ether",
    formula: "C6H14O",
    CAS: "108-20-3",
    molecularWeight: 102.17476,
    C1: 0.00019879,
    C2: 0.9423,
    C3: 306.8,
    C4: 106230,
    minimumTemperature: 328.05,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01598,
    thermalConductivityAtMaximumTemperature: 0.09444
  },

  DiisopropylKetone: {
    name: "Diisopropyl ketone",
    formula: "C7H14O",
    CAS: "565-80-0",
    molecularWeight: 114.18546,
    C1: -8.5357,
    C2: -0.0056423,
    C3: 1882.1,
    C4: -65622000,
    minimumTemperature: 397.55,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02015,
    thermalConductivityAtMaximumTemperature: 0.13085
  },

  "1,1Dimethoxyethane": {
    name: "1,1-Dimethoxyethane",
    formula: "C4H10O2",
    CAS: "534-15-6",
    molecularWeight: 90.121,
    C1: 0.00046265,
    C2: 0.81968,
    C3: 539.34,
    C4: 104530,
    minimumTemperature: 337.45,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01554,
    thermalConductivityAtMaximumTemperature: 0.08099
  },

  "1,2Dimethoxypropane": {
    name: "1,2-Dimethoxypropane",
    formula: "C5H12O2",
    CAS: "7778-85-0",
    molecularWeight: 104.14758,
    C1: 3.7962e-6,
    C2: 1.4462,
    minimumTemperature: 366.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01936,
    thermalConductivityAtMaximumTemperature: 0.08279
  },

  DimethylAcetylene: {
    name: "Dimethyl acetylene",
    formula: "C4H6",
    CAS: "503-17-3",
    molecularWeight: 54.09044,
    C1: 0.00021761,
    C2: 0.9187,
    C3: 217,
    C4: 132070,
    minimumTemperature: 300.13,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01288,
    thermalConductivityAtMaximumTemperature: 0.09199
  },

  DimethylAmine: {
    name: "Dimethyl amine",
    formula: "C2H7N",
    CAS: "124-40-3",
    molecularWeight: 45.08368,
    C1: 1.6085,
    C2: -0.1103,
    C3: 2160.3,
    C4: 2989300,
    minimumTemperature: 280.03,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01845,
    thermalConductivityAtMaximumTemperature: 0.12209
  },

  "2,3Dimethylbutane": {
    name: "2,3-Dimethylbutane",
    formula: "C6H14",
    CAS: "79-29-8",
    molecularWeight: 86.17536,
    C1: 3.4741e-5,
    C2: 1.1646,
    C3: -99.956,
    C4: 130820,
    minimumTemperature: 331.13,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01581,
    thermalConductivityAtMaximumTemperature: 0.10506
  },

  "1,1Dimethylcyclohexane": {
    name: "1,1-Dimethylcyclohexane",
    formula: "C8H16",
    CAS: "590-66-9",
    molecularWeight: 112.21264,
    C1: 0.008856,
    C2: 0.4215,
    C3: -50.645,
    C4: 764580,
    minimumTemperature: 392.7,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01884,
    thermalConductivityAtMaximumTemperature: 0.095
  },

  "cis1,2Dimethylcyclohexane": {
    name: "cis-1,2-Dimethylcyclohexane",
    formula: "C8H16",
    CAS: "2207-01-4",
    molecularWeight: 112.21264,
    C1: 0.013298,
    C2: 0.3692,
    C3: 0.1027,
    C4: 852540,
    minimumTemperature: 402.94,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01948,
    thermalConductivityAtMaximumTemperature: 0.09196
  },

  "trans1,2Dimethylcyclohexane": {
    name: "trans-1,2-Dimethylcyclohexane",
    formula: "C8H16",
    CAS: "6876-23-9",
    molecularWeight: 112.21264,
    C1: 0.012144,
    C2: 0.3854,
    C3: 52.191,
    C4: 803590,
    minimumTemperature: 396.58,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01952,
    thermalConductivityAtMaximumTemperature: 0.09376
  },

  DimethylDisulfide: {
    name: "Dimethyl disulfide",
    formula: "C2H6S2",
    CAS: "624-92-0",
    molecularWeight: 94.19904,
    C1: 0.00022578,
    C2: 0.892,
    C3: 697,
    minimumTemperature: 382.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01613,
    thermalConductivityAtMaximumTemperature: 0.0631
  },

  DimethylEther: {
    name: "Dimethyl ether",
    formula: "C2H6O",
    CAS: "115-10-6",
    molecularWeight: 46.06844,
    C1: 0.059975,
    C2: 0.2667,
    C3: 1018.6,
    C4: 1098800,
    minimumTemperature: 248.31,
    maximumTemperature: 1500,
    thermalConductivityAtMinimumTemperature: 0.01139,
    thermalConductivityAtMaximumTemperature: 0.19458
  },

  NNDimethylFormamide: {
    name: "N,N-Dimethyl formamide",
    formula: "C3H7NO",
    CAS: "68-12-2",
    molecularWeight: 73.09378,
    C1: 0.014449,
    C2: 0.3612,
    C3: 595.22,
    C4: 728130,
    minimumTemperature: 425.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02001,
    thermalConductivityAtMaximumTemperature: 0.07539
  },

  "2,3Dimethylpentane": {
    name: "2,3-Dimethylpentane",
    formula: "C7H16",
    CAS: "565-59-3",
    molecularWeight: 100.20194,
    C1: 2.2421e-5,
    C2: 1.2137,
    C3: -146.91,
    C4: 131830,
    minimumTemperature: 362.93,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01797,
    thermalConductivityAtMaximumTemperature: 0.09962
  },

  DimethylPhthalate: {
    name: "Dimethyl phthalate",
    formula: "C10H10O4",
    CAS: "131-11-3",
    molecularWeight: 194.184,
    C1: 0.00012822,
    C2: 0.9324,
    C3: 752.5,
    minimumTemperature: 556.85,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01981,
    thermalConductivityAtMaximumTemperature: 0.04587
  },

  Dimethylsilane: {
    name: "Dimethylsilane",
    formula: "C2H8Si",
    CAS: "1111-74-6",
    molecularWeight: 60.17042,
    C1: 0.0011808,
    C2: 0.742,
    C3: 1131,
    C4: 6400,
    minimumTemperature: 253.55,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01291,
    thermalConductivityAtMaximumTemperature: 0.09296
  },

  DimethylSulfide: {
    name: "Dimethyl sulfide",
    formula: "C2H6S",
    CAS: "75-18-3",
    molecularWeight: 62.134,
    C1: 0.00023614,
    C2: 0.9204,
    C3: 638,
    minimumTemperature: 310.48,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0152,
    thermalConductivityAtMaximumTemperature: 0.08319
  },

  DimethylSulfoxide: {
    name: "Dimethyl sulfoxide",
    formula: "C2H6OS",
    CAS: "67-68-5",
    molecularWeight: 78.13344,
    C1: 0.00064761,
    C2: 0.7716,
    C3: 1013.3,
    C4: 82563,
    minimumTemperature: 462.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02059,
    thermalConductivityAtMaximumTemperature: 0.06379
  },

  DimethylTerephthalate: {
    name: "Dimethyl terephthalate",
    formula: "C10H10O4",
    CAS: "120-61-6",
    molecularWeight: 194.184,
    C1: 0.00402358,
    C2: 0.57548,
    C3: 3598.32,
    minimumTemperature: 559.2,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02063,
    thermalConductivityAtMaximumTemperature: 0.04661
  },

  "1,4Dioxane": {
    name: "1,4-Dioxane",
    formula: "C4H8O2",
    CAS: "123-91-1",
    molecularWeight: 88.10512,
    C1: 6.4032e-7,
    C2: 1.7194,
    minimumTemperature: 337.85,
    maximumTemperature: 768.01,
    thermalConductivityAtMinimumTemperature: 0.01427,
    thermalConductivityAtMaximumTemperature: 0.05855
  },

  DiphenylEther: {
    name: "Diphenyl ether",
    formula: "C12H10O",
    CAS: "101-84-8",
    molecularWeight: 170.2072,
    C1: 0.00014629,
    C2: 0.9377,
    C3: 745.89,
    minimumTemperature: 531.46,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02188,
    thermalConductivityAtMaximumTemperature: 0.05449
  },

  DipropylAmine: {
    name: "Dipropyl amine",
    formula: "C6H15N",
    CAS: "142-84-7",
    molecularWeight: 101.19,
    C1: 0.0001123,
    C2: 0.9958,
    C3: 183.2,
    C4: 98000,
    minimumTemperature: 279.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01055,
    thermalConductivityAtMaximumTemperature: 0.08515
  },

  Dodecane: {
    name: "Dodecane",
    formula: "C12H26",
    CAS: "112-40-3",
    molecularWeight: 170.33484,
    C1: 5.719e-6,
    C2: 1.4699,
    C3: 579.4,
    minimumTemperature: 489.47,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02354,
    thermalConductivityAtMaximumTemperature: 0.09301
  },

  Eicosane: {
    name: "Eicosane",
    formula: "C20H42",
    CAS: "112-95-8",
    molecularWeight: 282.54748,
    C1: -375.32,
    C2: 1.0708,
    C3: -8783600000,
    minimumTemperature: 616.93,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02563,
    thermalConductivityAtMaximumTemperature: 0.06968
  },

  Ethane: {
    name: "Ethane",
    formula: "C2H6",
    CAS: "74-84-0",
    molecularWeight: 30.069,
    C1: 7.3869e-5,
    C2: 1.1689,
    C3: 500.73,
    minimumTemperature: 184.55,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00886,
    thermalConductivityAtMaximumTemperature: 0.15807
  },

  Ethanol: {
    name: "Ethanol",
    formula: "C2H6O",
    CAS: "64-17-5",
    molecularWeight: 46.06844,
    C1: -0.010109,
    C2: 0.6475,
    C3: -7332,
    C4: -268000,
    minimumTemperature: 293.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01475,
    thermalConductivityAtMaximumTemperature: 0.13417
  },

  EthylAcetate: {
    name: "Ethyl acetate",
    formula: "C4H8O2",
    CAS: "141-78-6",
    molecularWeight: 88.10512,
    C1: 1.3575e-7,
    C2: 1.9681,
    minimumTemperature: 273.15,
    maximumTemperature: 990.21,
    thermalConductivityAtMinimumTemperature: 0.00847,
    thermalConductivityAtMaximumTemperature: 0.10681
  },

  EthylAmine: {
    name: "Ethyl amine",
    formula: "C2H7N",
    CAS: "75-04-7",
    molecularWeight: 45.08368,
    C1: 0.3935,
    C2: 0.0131,
    C3: 1380,
    C4: 1710000,
    minimumTemperature: 289.73,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01622,
    thermalConductivityAtMaximumTemperature: 0.10532
  },

  Ethylbenzene: {
    name: "Ethylbenzene",
    formula: "C8H10",
    CAS: "100-41-4",
    molecularWeight: 106.165,
    C1: 1.7537e-5,
    C2: 1.3144,
    C3: 560.65,
    minimumTemperature: 409.35,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02007,
    thermalConductivityAtMaximumTemperature: 0.09859
  },

  EthylBenzoate: {
    name: "Ethyl benzoate",
    formula: "C9H10O2",
    CAS: "93-89-0",
    molecularWeight: 150.1745,
    C1: 2.012e-5,
    C2: 1.1513,
    C3: -89.583,
    C4: 125410,
    minimumTemperature: 486.55,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01855,
    thermalConductivityAtMaximumTemperature: 0.05524
  },

  "2EthylButanoicAcid": {
    name: "2-Ethyl butanoic acid",
    formula: "C6H12O2",
    CAS: "88-09-5",
    molecularWeight: 116.15828,
    C1: 0.00017727,
    C2: 0.9428,
    C3: 712.4,
    minimumTemperature: 466.95,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02306,
    thermalConductivityAtMaximumTemperature: 0.06973
  },

  EthylButyrate: {
    name: "Ethyl butyrate",
    formula: "C6H12O2",
    CAS: "105-54-4",
    molecularWeight: 116.15828,
    C1: 829.29,
    C2: 1.0156,
    C3: 8955300000,
    minimumTemperature: 394.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01583,
    thermalConductivityAtMaximumTemperature: 0.10314
  },

  Ethylcyclohexane: {
    name: "Ethylcyclohexane",
    formula: "C8H16",
    CAS: "1678-91-7",
    molecularWeight: 112.21264,
    C1: 7.48e-5,
    C2: 1.1103,
    C3: 686,
    minimumTemperature: 404.95,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0218,
    thermalConductivityAtMaximumTemperature: 0.09505
  },

  Ethylcyclopentane: {
    name: "Ethylcyclopentane",
    formula: "C7H14",
    CAS: "1640-89-7",
    molecularWeight: 98.18606,
    C1: 0.0043244,
    C2: 0.5429,
    C3: 333.67,
    C4: 570470,
    minimumTemperature: 376.62,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01832,
    thermalConductivityAtMaximumTemperature: 0.09659
  },

  Ethylene: {
    name: "Ethylene",
    formula: "C2H4",
    CAS: "74-85-1",
    molecularWeight: 28.05316,
    C1: 8.6806e-6,
    C2: 1.4559,
    C3: 299.72,
    C4: -29403,
    minimumTemperature: 170,
    maximumTemperature: 590.92,
    thermalConductivityAtMinimumTemperature: 0.00879,
    thermalConductivityAtMaximumTemperature: 0.06613
  },

  Ethylenediamine: {
    name: "Ethylenediamine",
    formula: "C2H8N2",
    CAS: "107-15-3",
    molecularWeight: 60.09832,
    C1: 0.1655,
    C2: 0.1798,
    C3: 3827.9,
    C4: 1600000,
    minimumTemperature: 390.41,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02272,
    thermalConductivityAtMaximumTemperature: 0.08915
  },

  EthyleneGlycol: {
    name: "Ethylene glycol",
    formula: "C2H6O2",
    CAS: "107-21-1",
    molecularWeight: 62.06784,
    C1: -8145800,
    C2: -0.30502,
    C3: 1832500000,
    C4: -1.1842e13,
    minimumTemperature: 470.45,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02513,
    thermalConductivityAtMaximumTemperature: 0.09896
  },

  Ethyleneimine: {
    name: "Ethyleneimine",
    formula: "C2H5N",
    CAS: "151-56-4",
    molecularWeight: 43.0678,
    C1: 0.00077079,
    C2: 0.7713,
    C3: 446.16,
    C4: 197930,
    minimumTemperature: 329,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0161,
    thermalConductivityAtMaximumTemperature: 0.09659
  },

  EthyleneOxide: {
    name: "Ethylene oxide",
    formula: "C2H4O",
    CAS: "75-21-8",
    molecularWeight: 44.05256,
    C1: -0.0003788,
    C2: 1.115,
    C3: -5641,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01004,
    thermalConductivityAtMaximumTemperature: 0.18063
  },

  EthylFormate: {
    name: "Ethyl formate",
    formula: "C3H6O2",
    CAS: "109-94-4",
    molecularWeight: 74.07854,
    C1: 508,
    C2: 0.9023,
    C3: 2170000000,
    minimumTemperature: 327.46,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01426,
    thermalConductivityAtMaximumTemperature: 0.11921
  },

  "2EthylHexanoicAcid": {
    name: "2-Ethyl hexanoic acid",
    formula: "C8H16O2",
    CAS: "149-57-5",
    molecularWeight: 144.211,
    C1: 2.5804e-6,
    C2: 1.4669,
    minimumTemperature: 500.66,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02353,
    thermalConductivityAtMaximumTemperature: 0.06492
  },

  EthylhexylEther: {
    name: "Ethylhexyl ether",
    formula: "C8H18O",
    CAS: "5756-43-4",
    molecularWeight: 130.22792,
    C1: 0.0052833,
    C2: 0.52982,
    C3: 1415.7,
    C4: 378180,
    minimumTemperature: 417.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01967,
    thermalConductivityAtMaximumTemperature: 0.07348
  },

  EthylisopropylEther: {
    name: "Ethylisopropyl ether",
    formula: "C5H12O",
    CAS: "625-54-7",
    molecularWeight: 88.14818,
    C1: 0.00021652,
    C2: 0.94192,
    C3: 632.16,
    minimumTemperature: 326.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01717,
    thermalConductivityAtMaximumTemperature: 0.08882
  },

  EthylisopropylKetone: {
    name: "Ethylisopropyl ketone",
    formula: "C6H12O",
    CAS: "565-69-5",
    molecularWeight: 100.15888,
    C1: -152400,
    C2: -0.049106,
    C3: 80955000,
    C4: -9.3122e11,
    minimumTemperature: 386.55,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01889,
    thermalConductivityAtMaximumTemperature: 0.12768
  },

  EthylMercaptan: {
    name: "Ethyl mercaptan",
    formula: "C2H6S",
    CAS: "75-08-1",
    molecularWeight: 62.13404,
    C1: 0.0015251,
    C2: 0.70243,
    C3: 1347.5,
    C4: 35085,
    minimumTemperature: 308.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01487,
    thermalConductivityAtMaximumTemperature: 0.08195
  },

  EthylPropionate: {
    name: "Ethyl propionate",
    formula: "C5H10O2",
    CAS: "105-37-3",
    molecularWeight: 102.1317,
    C1: 1.0507e-7,
    C2: 1.9854,
    minimumTemperature: 400,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0154,
    thermalConductivityAtMaximumTemperature: 0.09499
  },

  EthylpropylEther: {
    name: "Ethylpropyl ether",
    formula: "C5H12O",
    CAS: "628-32-0",
    molecularWeight: 88.14818,
    C1: 5.8174e-8,
    C2: 2.0116,
    C3: -372.68,
    C4: 57690,
    minimumTemperature: 273.15,
    maximumTemperature: 550,
    thermalConductivityAtMinimumTemperature: 0.01133,
    thermalConductivityAtMaximumTemperature: 0.0369
  },

  Ethyltrichlorosilane: {
    name: "Ethyltrichlorosilane",
    formula: "C2H5Cl3Si",
    CAS: "115-21-9",
    molecularWeight: 163.506,
    C1: 2.7142e-6,
    C2: 1.4281,
    minimumTemperature: 371.05,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01268,
    thermalConductivityAtMaximumTemperature: 0.05223
  },

  Fluorine: {
    name: "Fluorine",
    formula: "F2",
    CAS: "7782-41-4",
    molecularWeight: 37.9968064,
    C1: 0.00012144,
    C2: 0.93831,
    minimumTemperature: 70,
    maximumTemperature: 700,
    thermalConductivityAtMinimumTemperature: 0.00654,
    thermalConductivityAtMaximumTemperature: 0.05675
  },

  Fluorobenzene: {
    name: "Fluorobenzene",
    formula: "C6H5F",
    CAS: "462-06-6",
    molecularWeight: 96.1023032,
    C1: 5.3432e-5,
    C2: 1.1576,
    C3: 760.75,
    minimumTemperature: 357.88,
    maximumTemperature: 600,
    thermalConductivityAtMinimumTemperature: 0.01546,
    thermalConductivityAtMaximumTemperature: 0.03874
  },

  Fluoroethane: {
    name: "Fluoroethane",
    formula: "C2H5F",
    CAS: "353-36-6",
    molecularWeight: 48.0595,
    C1: 6.3522e-6,
    C2: 1.346,
    minimumTemperature: 235.45,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0099,
    thermalConductivityAtMaximumTemperature: 0.06933
  },

  Fluoromethane: {
    name: "Fluoromethane",
    formula: "CH3F",
    CAS: "593-53-3",
    molecularWeight: 34.03292,
    C1: 4.8998e-5,
    C2: 1.0175,
    minimumTemperature: 194.82,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01047,
    thermalConductivityAtMaximumTemperature: 0.05529
  },

  Formaldehyde: {
    name: "Formaldehyde",
    formula: "CH2O",
    CAS: "50-00-0",
    molecularWeight: 30.02598,
    C1: 5.2201e-6,
    C2: 1.417,
    minimumTemperature: 253.85,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01333,
    thermalConductivityAtMaximumTemperature: 0.09304
  },

  Formamide: {
    name: "Formamide",
    formula: "CH3NO",
    CAS: "75-12-7",
    molecularWeight: 45.04062,
    C1: 0.00025893,
    C2: 0.9083,
    C3: 723.6,
    minimumTemperature: 493,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0293,
    thermalConductivityAtMaximumTemperature: 0.07973
  },

  FormicAcid: {
    name: "Formic acid",
    formula: "CH2O2",
    CAS: "64-18-6",
    molecularWeight: 46.0257,
    C1: -0.8303,
    C2: 0.0046141,
    C3: -5.7466e-6,
    minimumTemperature: 420,
    maximumTemperature: 470,
    thermalConductivityAtMinimumTemperature: 0.09392,
    thermalConductivityAtMaximumTemperature: 0.0689
  },

  FormicAcidExtended1: {
    name: "Formic acid",
    formula: "CH2O2",
    CAS: "64-18-6",
    molecularWeight: 46.0257,
    C1: 1.8897,
    C2: -0.006901,
    C3: 6.4407e-6,
    minimumTemperature: 470,
    maximumTemperature: 537.9,
    thermalConductivityAtMinimumTemperature: 0.06898,
    thermalConductivityAtMaximumTemperature: 0.04118
  },

  FormicAcidExtended2: {
    name: "Formic acid",
    formula: "CH2O2",
    CAS: "64-18-6",
    molecularWeight: 46.0257,
    C1: 0.00072291,
    C2: 1.8898,
    C3: 4877600,
    C4: -1889300000,
    minimumTemperature: 537.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0412,
    thermalConductivityAtMaximumTemperature: 0.11296
  },

  Furan: {
    name: "Furan",
    formula: "C4H4O",
    CAS: "110-00-9",
    molecularWeight: 68.07396,
    C1: -644950,
    C2: 0.2862,
    C3: -16794000000,
    C4: -1.737e13,
    minimumTemperature: 304.5,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01367,
    thermalConductivityAtMaximumTemperature: 0.13631
  },

  Helium4: {
    name: "Helium-4",
    formula: "He",
    CAS: "7440-59-7",
    molecularWeight: 4.0026,
    C1: 0.00226,
    C2: 0.7305,
    C3: -18.63,
    C4: 440,
    minimumTemperature: 30,
    maximumTemperature: 2000,
    thermalConductivityAtMinimumTemperature: 0.03124,
    thermalConductivityAtMaximumTemperature: 0.5882
  },

  Heptadecane: {
    name: "Heptadecane",
    formula: "C17H36",
    CAS: "629-78-7",
    molecularWeight: 240.46774,
    C1: -114.41,
    C2: 1.0566,
    C3: -2211400000,
    minimumTemperature: 575.3,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02454,
    thermalConductivityAtMaximumTemperature: 0.07649
  },

  Heptanal: {
    name: "Heptanal",
    formula: "C7H14O",
    CAS: "111-71-7",
    molecularWeight: 114.18546,
    C1: 1.4326e-6,
    C2: 1.5896,
    minimumTemperature: 426.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02168,
    thermalConductivityAtMaximumTemperature: 0.08413
  },

  Heptane: {
    name: "Heptane",
    formula: "C7H16",
    CAS: "142-82-5",
    molecularWeight: 100.20194,
    C1: -0.070028,
    C2: 0.38068,
    C3: -7049.9,
    C4: -2400500,
    minimumTemperature: 339.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01583,
    thermalConductivityAtMaximumTemperature: 0.11493
  },

  HeptanoicAcid: {
    name: "Heptanoic acid",
    formula: "C7H14O2",
    CAS: "111-14-8",
    molecularWeight: 130.185,
    C1: -0.088162,
    C2: 0.00065022,
    C3: -1.28e-6,
    C4: 9.1349e-10,
    minimumTemperature: 496.15,
    maximumTemperature: 643.11,
    thermalConductivityAtMinimumTemperature: 0.03085,
    thermalConductivityAtMaximumTemperature: 0.04346
  },

  HeptanoicAcidExtended: {
    name: "Heptanoic acid",
    formula: "C7H14O2",
    CAS: "111-14-8",
    molecularWeight: 130.185,
    C1: 4.449e-8,
    C2: 2.133,
    minimumTemperature: 643.11,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.04349,
    thermalConductivityAtMaximumTemperature: 0.1115
  },

  "1Heptanol": {
    name: "1-Heptanol",
    formula: "C7H16O",
    CAS: "111-70-6",
    molecularWeight: 116.20134,
    C1: -0.061993,
    C2: 0.2792,
    C3: -3336,
    C4: -1642000,
    minimumTemperature: 449.45,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02345,
    thermalConductivityAtMaximumTemperature: 0.10722
  },

  "2Heptanol": {
    name: "2-Heptanol",
    formula: "C7H16O",
    CAS: "543-49-7",
    molecularWeight: 116.20134,
    C1: 0.00018818,
    C2: 0.96338,
    C3: 696.02,
    minimumTemperature: 432.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02501,
    thermalConductivityAtMaximumTemperature: 0.08616
  },

  "3Heptanone": {
    name: "3-Heptanone",
    formula: "C7H14O",
    CAS: "106-35-4",
    molecularWeight: 114.18546,
    C1: 1348.6,
    C2: 1.0313,
    C3: 14832000000,
    minimumTemperature: 420.55,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01943,
    thermalConductivityAtMaximumTemperature: 0.11287
  },

  "2Heptanone": {
    name: "2-Heptanone",
    formula: "C7H14O",
    CAS: "110-43-0",
    molecularWeight: 114.18546,
    C1: 2049.3,
    C2: 1.0323,
    C3: 22983000000,
    minimumTemperature: 424.18,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01951,
    thermalConductivityAtMaximumTemperature: 0.11145
  },

  "1Heptene": {
    name: "1-Heptene",
    formula: "C7H14",
    CAS: "592-76-7",
    molecularWeight: 98.18606,
    C1: 2.133e-5,
    C2: 1.2885,
    C3: 487.8,
    minimumTemperature: 366.79,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01845,
    thermalConductivityAtMaximumTemperature: 0.10518
  },

  HeptylMercaptan: {
    name: "Heptyl mercaptan",
    formula: "C7H16S",
    CAS: "1639-09-4",
    molecularWeight: 132.26694,
    C1: 0.0083145,
    C2: 0.51862,
    C3: 2253,
    C4: 532590,
    minimumTemperature: 450.09,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02289,
    thermalConductivityAtMaximumTemperature: 0.07899
  },

  "1Heptyne": {
    name: "1-Heptyne",
    formula: "C7H12",
    CAS: "628-71-7",
    molecularWeight: 96.17018,
    C1: 6.0732e-5,
    C2: 1.0586,
    C3: -102.79,
    C4: 143140,
    minimumTemperature: 372.93,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01827,
    thermalConductivityAtMaximumTemperature: 0.08751
  },

  Hexadecane: {
    name: "Hexadecane",
    formula: "C16H34",
    CAS: "544-76-3",
    molecularWeight: 226.44116,
    C1: 4.438e-6,
    C2: 1.4949,
    C3: 682,
    minimumTemperature: 560.01,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02568,
    thermalConductivityAtMaximumTemperature: 0.08055
  },

  Hexanal: {
    name: "Hexanal",
    formula: "C6H12O",
    CAS: "66-25-1",
    molecularWeight: 100.15888,
    C1: 1.5427e-6,
    C2: 1.5824,
    minimumTemperature: 401.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02031,
    thermalConductivityAtMaximumTemperature: 0.0862
  },

  Hexane: {
    name: "Hexane",
    formula: "C6H14",
    CAS: "110-54-3",
    molecularWeight: 86.17536,
    C1: -650.5,
    C2: 0.8053,
    C3: -1412100000,
    minimumTemperature: 339.09,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01704,
    thermalConductivityAtMaximumTemperature: 0.12003
  },

  HexanoicAcid: {
    name: "Hexanoic acid",
    formula: "C6H12O2",
    CAS: "142-62-1",
    molecularWeight: 116.158,
    C1: 1204900000,
    C2: -4.0059,
    C3: -1668.8,
    C4: 722550,
    minimumTemperature: 478.85,
    maximumTemperature: 641.42,
    thermalConductivityAtMinimumTemperature: 0.03317,
    thermalConductivityAtMaximumTemperature: 0.04435
  },

  HexanoicAcidExtended: {
    name: "Hexanoic acid",
    formula: "C6H12O2",
    CAS: "142-62-1",
    molecularWeight: 116.158,
    C1: 6.1268e-8,
    C2: 2.0874,
    minimumTemperature: 641.42,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.04435,
    thermalConductivityAtMaximumTemperature: 0.11206
  },

  "1Hexanol": {
    name: "1-Hexanol",
    formula: "C6H14O",
    CAS: "111-27-3",
    molecularWeight: 102.17476,
    C1: -4935500,
    C2: -0.1653,
    C3: 1563100000,
    C4: -1.5752e13,
    minimumTemperature: 429.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0222,
    thermalConductivityAtMaximumTemperature: 0.11104
  },

  "2Hexanol": {
    name: "2-Hexanol",
    formula: "C6H14O",
    CAS: "626-93-7",
    molecularWeight: 102.175,
    C1: 0.00018361,
    C2: 0.97199,
    C3: 677.05,
    minimumTemperature: 412.4,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02421,
    thermalConductivityAtMaximumTemperature: 0.09022
  },

  "2Hexanone": {
    name: "2-Hexanone",
    formula: "C6H12O",
    CAS: "591-78-6",
    molecularWeight: 100.15888,
    C1: -1.2158,
    C2: 0.026637,
    C3: -1711.6,
    C4: -13176000,
    minimumTemperature: 273,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00775,
    thermalConductivityAtMaximumTemperature: 0.10523
  },

  "3Hexanone": {
    name: "3-Hexanone",
    formula: "C6H12O",
    CAS: "589-38-8",
    molecularWeight: 100.15888,
    C1: -0.33262,
    C2: 0.12054,
    C3: -2472.6,
    C4: -5493400,
    minimumTemperature: 273,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.008,
    thermalConductivityAtMaximumTemperature: 0.1098
  },

  "1Hexene": {
    name: "1-Hexene",
    formula: "C6H12",
    CAS: "592-41-6",
    molecularWeight: 84.15948,
    C1: 6.4256e-5,
    C2: 1.1355,
    C3: 445.15,
    C4: 64810,
    minimumTemperature: 336.63,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01644,
    thermalConductivityAtMaximumTemperature: 0.1085
  },

  "3Hexyne": {
    name: "3-Hexyne",
    formula: "C6H10",
    CAS: "928-49-4",
    molecularWeight: 82.1436,
    C1: 6.9682e-6,
    C2: 1.347,
    C3: -214.35,
    C4: 110480,
    minimumTemperature: 354.35,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01485,
    thermalConductivityAtMaximumTemperature: 0.08546
  },

  HexylMercaptan: {
    name: "Hexyl mercaptan",
    formula: "C6H14S",
    CAS: "111-31-9",
    molecularWeight: 118.24036,
    C1: 0.074318,
    C2: 0.30035,
    C3: 4470.1,
    C4: 1775800,
    minimumTemperature: 425.81,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02151,
    thermalConductivityAtMaximumTemperature: 0.08167
  },

  "1Hexyne": {
    name: "1-Hexyne",
    formula: "C6H10",
    CAS: "693-02-7",
    molecularWeight: 82.1436,
    C1: 5.8116e-5,
    C2: 1.0724,
    C3: -77.165,
    C4: 123900,
    minimumTemperature: 344.48,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01679,
    thermalConductivityAtMaximumTemperature: 0.09155
  },

  "2Hexyne": {
    name: "2-Hexyne",
    formula: "C6H10",
    CAS: "764-35-2",
    molecularWeight: 82.1436,
    C1: 1.1631e-5,
    C2: 1.2753,
    C3: -202.84,
    C4: 122990,
    minimumTemperature: 357.67,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01506,
    thermalConductivityAtMaximumTemperature: 0.08466
  },

  Hydrazine: {
    name: "Hydrazine",
    formula: "H4N2",
    CAS: "302-01-2",
    molecularWeight: 32.04516,
    C1: 0.00043196,
    C2: 0.86603,
    C3: 641.48,
    minimumTemperature: 386.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02828,
    thermalConductivityAtMaximumTemperature: 0.1043
  },

  Hydrogen: {
    name: "Hydrogen",
    formula: "H2",
    CAS: "1333-74-0",
    molecularWeight: 2.01588,
    C1: 0.002653,
    C2: 0.7452,
    C3: 12,
    minimumTemperature: 22,
    maximumTemperature: 1600,
    thermalConductivityAtMinimumTemperature: 0.01718,
    thermalConductivityAtMaximumTemperature: 0.64299
  },

  HydrogenBromide: {
    name: "Hydrogen bromide",
    formula: "BrH",
    CAS: "10035-10-6",
    molecularWeight: 80.91194,
    C1: 0.00049725,
    C2: 0.63088,
    C3: 331.62,
    minimumTemperature: 206.45,
    maximumTemperature: 600,
    thermalConductivityAtMinimumTemperature: 0.00551,
    thermalConductivityAtMaximumTemperature: 0.01812
  },

  HydrogenChloride: {
    name: "Hydrogen chloride",
    formula: "ClH",
    CAS: "7647-01-0",
    molecularWeight: 36.46094,
    C1: 0.001865,
    C2: 0.49755,
    C3: 358,
    minimumTemperature: 190,
    maximumTemperature: 700,
    thermalConductivityAtMinimumTemperature: 0.0088,
    thermalConductivityAtMaximumTemperature: 0.03213
  },

  HydrogenCyanide: {
    name: "Hydrogen cyanide",
    formula: "CHN",
    CAS: "74-90-8",
    molecularWeight: 27.02534,
    C1: 4.6496e-6,
    C2: 1.3669,
    C3: -210.76,
    C4: 58295,
    minimumTemperature: 273.15,
    maximumTemperature: 673.15,
    thermalConductivityAtMinimumTemperature: 0.00985,
    thermalConductivityAtMaximumTemperature: 0.04185
  },

  HydrogenFluoride: {
    name: "Hydrogen fluoride",
    formula: "FH",
    CAS: "7664-39-3",
    molecularWeight: 20.0063432,
    C1: 3.4629e-5,
    C2: 1.1224,
    C3: 18.744,
    minimumTemperature: 350,
    maximumTemperature: 450,
    thermalConductivityAtMinimumTemperature: 0.02356,
    thermalConductivityAtMaximumTemperature: 0.0316
  },

  HydrogenSulfide: {
    name: "Hydrogen sulfide",
    formula: "H2S",
    CAS: "7783-06-4",
    molecularWeight: 34.08088,
    C1: 1.381e-7,
    C2: 1.8379,
    C3: -352.09,
    C4: 46041,
    minimumTemperature: 212.8,
    maximumTemperature: 600,
    thermalConductivityAtMinimumTemperature: 0.00724,
    thermalConductivityAtMaximumTemperature: 0.03258
  },

  IsobutyricAcid: {
    name: "Isobutyric acid",
    formula: "C4H8O2",
    CAS: "79-31-2",
    molecularWeight: 88.10512,
    C1: 0.000214,
    C2: 0.9248,
    C3: 698,
    minimumTemperature: 427.85,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02206,
    thermalConductivityAtMaximumTemperature: 0.07497
  },

  IsopropylAmine: {
    name: "Isopropyl amine",
    formula: "C3H9N",
    CAS: "75-31-0",
    molecularWeight: 59.11026,
    C1: 0.00028183,
    C2: 0.92094,
    C3: 619.17,
    minimumTemperature: 304.92,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01804,
    thermalConductivityAtMaximumTemperature: 0.10081
  },

  MalonicAcid: {
    name: "Malonic acid",
    formula: "C3H4O4",
    CAS: "141-82-2",
    molecularWeight: 104.06146,
    C1: 4.828e-6,
    C2: 1.3599,
    minimumTemperature: 580,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02766,
    thermalConductivityAtMaximumTemperature: 0.05801
  },

  MethacrylicAcid: {
    name: "Methacrylic acid",
    formula: "C4H6O2",
    CAS: "79-41-4",
    molecularWeight: 86.08924,
    C1: 0.00019847,
    C2: 0.9284,
    C3: 678.69,
    minimumTemperature: 434.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02176,
    thermalConductivityAtMaximumTemperature: 0.0721
  },

  Methane: {
    name: "Methane",
    formula: "CH4",
    CAS: "74-82-8",
    molecularWeight: 16.0425,
    C1: 8.3983e-6,
    C2: 1.4268,
    C3: -49.654,
    minimumTemperature: 111.63,
    maximumTemperature: 600,
    thermalConductivityAtMinimumTemperature: 0.01263,
    thermalConductivityAtMaximumTemperature: 0.08425
  },

  Methanol: {
    name: "Methanol",
    formula: "CH4O",
    CAS: "67-56-1",
    molecularWeight: 32.04186,
    C1: 5.7992e-7,
    C2: 1.7862,
    minimumTemperature: 273,
    maximumTemperature: 684.37,
    thermalConductivityAtMinimumTemperature: 0.01303,
    thermalConductivityAtMaximumTemperature: 0.06726
  },

  NMethylAcetamide: {
    name: "N-Methyl acetamide",
    formula: "C3H7NO",
    CAS: "79-16-3",
    molecularWeight: 73.09378,
    C1: 0.034177,
    C2: 0.3312,
    C3: 2070,
    C4: 1195600,
    minimumTemperature: 478.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02498,
    thermalConductivityAtMaximumTemperature: 0.07895
  },

  MethylAcetate: {
    name: "Methyl acetate",
    formula: "C3H6O2",
    CAS: "79-20-9",
    molecularWeight: 74.07854,
    C1: -25343,
    C2: -0.1934,
    C3: 11164000,
    C4: -67259000000,
    minimumTemperature: 330.09,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01415,
    thermalConductivityAtMaximumTemperature: 0.11878
  },

  MethylAcetylene: {
    name: "Methyl acetylene",
    formula: "C3H4",
    CAS: "74-99-7",
    molecularWeight: 40.06386,
    C1: 0.00026544,
    C2: 0.8921,
    C3: 222.19,
    C4: 79869,
    minimumTemperature: 249.94,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01154,
    thermalConductivityAtMaximumTemperature: 0.09675
  },

  MethylAcrylate: {
    name: "Methyl acrylate",
    formula: "C4H6O2",
    CAS: "96-33-3",
    molecularWeight: 86.08924,
    C1: 0.4734,
    C2: -0.1111,
    C3: 533.57,
    C4: 1649600,
    minimumTemperature: 353.35,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01569,
    thermalConductivityAtMaximumTemperature: 0.06904
  },

  MethylAmine: {
    name: "Methyl amine",
    formula: "CH5N",
    CAS: "74-89-5",
    molecularWeight: 31.0571,
    C1: -55.13,
    C2: 1.065,
    C3: -448200000,
    minimumTemperature: 266.82,
    maximumTemperature: 650,
    thermalConductivityAtMinimumTemperature: 0.01259,
    thermalConductivityAtMaximumTemperature: 0.07917
  },

  MethylBenzoate: {
    name: "Methyl benzoate",
    formula: "C8H8O2",
    CAS: "93-58-3",
    molecularWeight: 136.14792,
    C1: 2.3963e-5,
    C2: 1.1308,
    C3: -67.272,
    C4: 125720,
    minimumTemperature: 472.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01784,
    thermalConductivityAtMaximumTemperature: 0.05588
  },

  "3Methyl1,2butadiene": {
    name: "3-Methyl-1,2-butadiene",
    formula: "C5H8",
    CAS: "598-25-4",
    molecularWeight: 68.11702,
    C1: 0.0002509,
    C2: 0.899,
    C3: 253.4,
    C4: 149500,
    minimumTemperature: 314,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01326,
    thermalConductivityAtMaximumTemperature: 0.08902
  },

  "2Methylbutane": {
    name: "2-Methylbutane",
    formula: "C5H12",
    CAS: "78-78-4",
    molecularWeight: 72.14878,
    C1: 0.0008968,
    C2: 0.7742,
    C3: 456,
    C4: 230640,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01198,
    thermalConductivityAtMaximumTemperature: 0.11176
  },

  "2MethylbutanoicAcid": {
    name: "2-Methylbutanoic acid",
    formula: "C5H10O2",
    CAS: "116-53-0",
    molecularWeight: 102.1317,
    C1: 0.0001799,
    C2: 0.9457,
    C3: 704.6,
    minimumTemperature: 450.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02266,
    thermalConductivityAtMaximumTemperature: 0.07253
  },

  "3Methyl1butanol": {
    name: "3-Methyl-1-butanol",
    formula: "C5H12O",
    CAS: "123-51-3",
    molecularWeight: 88.1482,
    C1: 2054.5,
    C2: 0.90109,
    C3: 8760500000,
    minimumTemperature: 404.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02116,
    thermalConductivityAtMaximumTemperature: 0.11843
  },

  "2Methyl1butene": {
    name: "2-Methyl-1-butene",
    formula: "C5H10",
    CAS: "563-46-2",
    molecularWeight: 70.1329,
    C1: 0.00019098,
    C2: 0.9341,
    C3: 84.07,
    C4: 155720,
    minimumTemperature: 304.3,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01348,
    thermalConductivityAtMaximumTemperature: 0.09771
  },

  "2Methyl2butene": {
    name: "2-Methyl-2-butene",
    formula: "C5H10",
    CAS: "513-35-9",
    molecularWeight: 70.1329,
    C1: 0.00021736,
    C2: 0.9171,
    C3: 112.3,
    C4: 177690,
    minimumTemperature: 311.71,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0132,
    thermalConductivityAtMaximumTemperature: 0.09504
  },

  "2Methyl1butene3yne": {
    name: "2-Methyl-1-butene-3-yne",
    formula: "C5H6",
    CAS: "78-80-8",
    molecularWeight: 66.10114,
    C1: 0.00015498,
    C2: 0.9364,
    C3: 15.366,
    C4: 137400,
    minimumTemperature: 305.4,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01304,
    thermalConductivityAtMaximumTemperature: 0.08664
  },

  MethylbutylEther: {
    name: "Methylbutyl ether",
    formula: "C5H12O",
    CAS: "628-28-4",
    molecularWeight: 88.14818,
    C1: 2.3993e-5,
    C2: 1.1976,
    C3: 58.59,
    C4: 35667,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01173,
    thermalConductivityAtMaximumTemperature: 0.08586
  },

  MethylbutylSulfide: {
    name: "Methylbutyl sulfide",
    formula: "C5H12S",
    CAS: "628-29-5",
    molecularWeight: 104.214,
    C1: 0.079414,
    C2: 0.23442,
    C3: 2671.9,
    C4: 1366100,
    minimumTemperature: 396.58,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01966,
    thermalConductivityAtMaximumTemperature: 0.0796
  },

  "3Methyl1butyne": {
    name: "3-Methyl-1-butyne",
    formula: "C5H8",
    CAS: "598-23-2",
    molecularWeight: 68.11702,
    C1: 6.5855e-5,
    C2: 1.072,
    C3: -36.369,
    C4: 106430,
    minimumTemperature: 302.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01468,
    thermalConductivityAtMaximumTemperature: 0.1012
  },

  MethylButyrate: {
    name: "Methyl butyrate",
    formula: "C5H10O2",
    CAS: "623-42-7",
    molecularWeight: 102.1317,
    C1: 1333.1,
    C2: 0.9962,
    C3: 12317000000,
    minimumTemperature: 375.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01495,
    thermalConductivityAtMaximumTemperature: 0.10543
  },

  Methylchlorosilane: {
    name: "Methylchlorosilane",
    formula: "CH5ClSi",
    CAS: "993-00-0",
    molecularWeight: 80.5889,
    C1: 0.00037057,
    C2: 0.81367,
    C3: 609.17,
    minimumTemperature: 281.85,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01155,
    thermalConductivityAtMaximumTemperature: 0.06357
  },

  Methylcyclohexane: {
    name: "Methylcyclohexane",
    formula: "C7H14",
    CAS: "108-87-2",
    molecularWeight: 98.18606,
    C1: 7.19e-5,
    C2: 1.1274,
    C3: 667,
    minimumTemperature: 374.08,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02056,
    thermalConductivityAtMaximumTemperature: 0.10399
  },

  "1Methylcyclohexanol": {
    name: "1-Methylcyclohexanol",
    formula: "C7H14O",
    CAS: "590-67-0",
    molecularWeight: 114.18546,
    C1: 0.00011359,
    C2: 1.0311,
    C3: 709.27,
    minimumTemperature: 441.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02322,
    thermalConductivityAtMaximumTemperature: 0.08238
  },

  cis2Methylcyclohexanol: {
    name: "cis-2-Methylcyclohexanol",
    formula: "C7H14O",
    CAS: "7443-70-1",
    molecularWeight: 114.18546,
    C1: 0.069565,
    C2: 0.1633,
    C3: 208.7,
    C4: 1209500,
    minimumTemperature: 438.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02415,
    thermalConductivityAtMaximumTemperature: 0.08888
  },

  trans2Methylcyclohexanol: {
    name: "trans-2-Methylcyclohexanol",
    formula: "C7H14O",
    CAS: "7443-52-9",
    molecularWeight: 114.18546,
    C1: 0.075448,
    C2: 0.155,
    C3: 218.44,
    C4: 1252500,
    minimumTemperature: 440.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02435,
    thermalConductivityAtMaximumTemperature: 0.08908
  },

  Methylcyclopentane: {
    name: "Methylcyclopentane",
    formula: "C6H12",
    CAS: "96-37-7",
    molecularWeight: 84.15948,
    C1: 0.0024385,
    C2: 0.61774,
    C3: 223.01,
    C4: 477570,
    minimumTemperature: 344.96,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01592,
    thermalConductivityAtMaximumTemperature: 0.10227
  },

  "1Methylcyclopentene": {
    name: "1-Methylcyclopentene",
    formula: "C6H10",
    CAS: "693-89-0",
    molecularWeight: 82.1436,
    C1: 0.0040082,
    C2: 0.54462,
    C3: 242.12,
    C4: 559040,
    minimumTemperature: 348.64,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01544,
    thermalConductivityAtMaximumTemperature: 0.09578
  },

  "3Methylcyclopentene": {
    name: "3-Methylcyclopentene",
    formula: "C6H10",
    CAS: "1120-62-3",
    molecularWeight: 82.1436,
    C1: 0.0019845,
    C2: 0.6393,
    C3: 227.11,
    C4: 434120,
    minimumTemperature: 338.05,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01501,
    thermalConductivityAtMaximumTemperature: 0.09888
  },

  Methyldichlorosilane: {
    name: "Methyldichlorosilane",
    formula: "CH4Cl2Si",
    CAS: "75-54-7",
    molecularWeight: 115.03396,
    C1: 0.00041077,
    C2: 0.75688,
    C3: 591.5,
    minimumTemperature: 314.7,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01109,
    thermalConductivityAtMaximumTemperature: 0.04813
  },

  MethylethylEther: {
    name: "Methylethyl ether",
    formula: "C3H8O",
    CAS: "540-67-0",
    molecularWeight: 60.09502,
    C1: 0.00024036,
    C2: 0.93177,
    C3: 588.14,
    minimumTemperature: 273,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01419,
    thermalConductivityAtMaximumTemperature: 0.09447
  },

  MethylethylKetone: {
    name: "Methylethyl ketone",
    formula: "C4H8O",
    CAS: "78-93-3",
    molecularWeight: 72.10572,
    C1: -4202700,
    C2: -0.1524,
    C3: 2084600000,
    C4: -1.4577e13,
    minimumTemperature: 352.79,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01546,
    thermalConductivityAtMaximumTemperature: 0.1174
  },

  MethylethylSulfide: {
    name: "Methylethyl sulfide",
    formula: "C3H8S",
    CAS: "624-89-5",
    molecularWeight: 76.1606,
    C1: 0.0034805,
    C2: 0.61906,
    C3: 1810.8,
    C4: 166290,
    minimumTemperature: 339.8,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01653,
    thermalConductivityAtMaximumTemperature: 0.08415
  },

  MethylFormate: {
    name: "Methyl formate",
    formula: "C2H4O2",
    CAS: "107-31-3",
    molecularWeight: 60.05196,
    C1: -800040,
    C2: -0.2285,
    C3: 248100000,
    C4: -1.5034e12,
    minimumTemperature: 300,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01369,
    thermalConductivityAtMaximumTemperature: 0.13148
  },

  MethylisobutylEther: {
    name: "Methylisobutyl ether",
    formula: "C5H12O",
    CAS: "625-44-5",
    molecularWeight: 88.14818,
    C1: 0.00020053,
    C2: 0.95381,
    C3: 644.42,
    minimumTemperature: 331.7,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01729,
    thermalConductivityAtMaximumTemperature: 0.08863
  },

  MethylisobutylKetone: {
    name: "Methylisobutyl ketone",
    formula: "C6H12O",
    CAS: "108-10-1",
    molecularWeight: 100.15888,
    C1: -2483300,
    C2: -0.046517,
    C3: 1313100000,
    C4: -1.5798e13,
    minimumTemperature: 389.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01869,
    thermalConductivityAtMaximumTemperature: 0.12433
  },

  MethylIsocyanate: {
    name: "Methyl Isocyanate",
    formula: "C2H3NO",
    CAS: "624-83-9",
    molecularWeight: 57.05132,
    C1: 0.0026136,
    C2: 0.62,
    C3: 1631.7,
    C4: 126720,
    minimumTemperature: 312,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01221,
    thermalConductivityAtMaximumTemperature: 0.06864
  },

  MethylisopropylEther: {
    name: "Methylisopropyl ether",
    formula: "C4H10O",
    CAS: "598-53-8",
    molecularWeight: 74.1216,
    C1: 2.1191,
    C2: -0.19015,
    C3: 1453.4,
    C4: 3575500,
    minimumTemperature: 303.92,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01606,
    thermalConductivityAtMaximumTemperature: 0.09451
  },

  MethylisopropylKetone: {
    name: "Methylisopropyl ketone",
    formula: "C5H10O",
    CAS: "563-80-4",
    molecularWeight: 86.1323,
    C1: -5935000,
    C2: -0.089497,
    C3: 3098800000,
    C4: -2.7994e13,
    minimumTemperature: 367.55,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0176,
    thermalConductivityAtMaximumTemperature: 0.12847
  },

  MethylisopropylSulfide: {
    name: "Methylisopropyl sulfide",
    formula: "C4H10S",
    CAS: "1551-21-9",
    molecularWeight: 90.1872,
    C1: 0.0071536,
    C2: 0.53907,
    C3: 2700.7,
    C4: 241730,
    minimumTemperature: 171.64,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00459,
    thermalConductivityAtMaximumTemperature: 0.07516
  },

  MethylMercaptan: {
    name: "Methyl mercaptan",
    formula: "CH4S",
    CAS: "74-93-1",
    molecularWeight: 48.10746,
    C1: 2.653e-5,
    C2: 1.1631,
    C3: 29.996,
    C4: 32519,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01171,
    thermalConductivityAtMaximumTemperature: 0.07704
  },

  MethylMethacrylate: {
    name: "Methyl methacrylate",
    formula: "C5H8O2",
    CAS: "80-62-6",
    molecularWeight: 100.11582,
    C1: 0.00072502,
    C2: 0.7395,
    C3: 365.68,
    C4: 204360,
    minimumTemperature: 373.45,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0168,
    thermalConductivityAtMaximumTemperature: 0.07637
  },

  "2MethyloctanoicAcid": {
    name: "2-Methyloctanoic acid",
    formula: "C9H18O2",
    CAS: "3004-93-1",
    molecularWeight: 158.23802,
    C1: 0.0001813,
    C2: 0.92912,
    C3: 793.45,
    minimumTemperature: 518.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02383,
    thermalConductivityAtMaximumTemperature: 0.06195
  },

  "2Methylpentane": {
    name: "2-Methylpentane",
    formula: "C6H14",
    CAS: "107-83-5",
    molecularWeight: 86.17536,
    C1: 6.1119e-5,
    C2: 1.0861,
    C3: -59.592,
    C4: 141260,
    minimumTemperature: 333.41,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01606,
    thermalConductivityAtMaximumTemperature: 0.10242
  },

  MethylPentylEther: {
    name: "Methyl pentyl ether",
    formula: "C6H14O",
    CAS: "628-80-8",
    molecularWeight: 102.17476,
    C1: 0.93312,
    C2: -0.1172,
    C3: 1154.3,
    C4: 2961700,
    minimumTemperature: 372,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01828,
    thermalConductivityAtMaximumTemperature: 0.08117
  },

  "2Methylpropane": {
    name: "2-Methylpropane",
    formula: "C4H10",
    CAS: "75-28-5",
    molecularWeight: 58.1222,
    C1: 0.089772,
    C2: 0.18501,
    C3: 639.23,
    C4: 1114700,
    minimumTemperature: 261.43,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01273,
    thermalConductivityAtMaximumTemperature: 0.11701
  },

  "2Methyl2propanol": {
    name: "2-Methyl-2-propanol",
    formula: "C4H10O",
    CAS: "75-65-0",
    molecularWeight: 74.1216,
    C1: 1.1776e-6,
    C2: 1.6618,
    minimumTemperature: 333.82,
    maximumTemperature: 766.87,
    thermalConductivityAtMinimumTemperature: 0.01839,
    thermalConductivityAtMaximumTemperature: 0.07325
  },

  "2MethylPropene": {
    name: "2-MethylPropene",
    formula: "C4H8",
    CAS: "115-11-7",
    molecularWeight: 56.10632,
    C1: -488.1,
    C2: 0.8877,
    C3: -1448500000,
    minimumTemperature: 266.25,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01276,
    thermalConductivityAtMaximumTemperature: 0.15513
  },

  MethylPropionate: {
    name: "Methyl propionate",
    formula: "C4H8O2",
    CAS: "554-12-1",
    molecularWeight: 88.10512,
    C1: -200.9,
    C2: -0.1321,
    C3: 104000,
    C4: -846000000,
    minimumTemperature: 350,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01402,
    thermalConductivityAtMaximumTemperature: 0.10886
  },

  MethylpropylEther: {
    name: "Methylpropyl ether",
    formula: "C4H10O",
    CAS: "557-17-5",
    molecularWeight: 74.1216,
    C1: 0.011136,
    C2: 0.4831,
    C3: 2170.3,
    C4: 281220,
    minimumTemperature: 312.2,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01648,
    thermalConductivityAtMaximumTemperature: 0.09079
  },

  MethylpropylSulfide: {
    name: "Methylpropyl sulfide",
    formula: "C4H10S",
    CAS: "3877-15-4",
    molecularWeight: 90.1872,
    C1: 0.0023574,
    C2: 0.67434,
    C3: 1804.1,
    C4: 155660,
    minimumTemperature: 368.69,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01802,
    thermalConductivityAtMaximumTemperature: 0.08398
  },

  Methylsilane: {
    name: "Methylsilane",
    formula: "CH6Si",
    CAS: "992-94-9",
    molecularWeight: 46.14384,
    C1: 12.248,
    C2: -0.5611,
    C3: -1067,
    C4: 2715200,
    minimumTemperature: 216.25,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01108,
    thermalConductivityAtMaximumTemperature: 0.0959
  },

  alphaMethylStyrene: {
    name: "alpha-Methyl styrene",
    formula: "C9H10",
    CAS: "98-83-9",
    molecularWeight: 118.1757,
    C1: 0.21276,
    C2: -0.022299,
    C3: -194.68,
    C4: 1708700,
    minimumTemperature: 438.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01969,
    thermalConductivityAtMaximumTemperature: 0.07255
  },

  MethylTertbutylEther: {
    name: "Methyl tert-butyl ether",
    formula: "C5H12O",
    CAS: "1634-04-4",
    molecularWeight: 88.1482,
    C1: 0.0002084,
    C2: 0.93034,
    C3: 364.832,
    C4: 73041,
    minimumTemperature: 328.2,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01638,
    thermalConductivityAtMaximumTemperature: 0.08958
  },

  MethylVinylEther: {
    name: "Methyl vinyl ether",
    formula: "C3H6O",
    CAS: "107-25-5",
    molecularWeight: 58.07914,
    C1: 0.00032359,
    C2: 0.8892,
    C3: 623.22,
    minimumTemperature: 278.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01493,
    thermalConductivityAtMaximumTemperature: 0.09273
  },

  Naphthalene: {
    name: "Naphthalene",
    formula: "C10H8",
    CAS: "91-20-3",
    molecularWeight: 128.17052,
    C1: 9.1828e-5,
    C2: 1.0345,
    C3: 731.78,
    minimumTemperature: 491.14,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02243,
    thermalConductivityAtMaximumTemperature: 0.0673
  },

  Neon: {
    name: "Neon",
    formula: "Ne",
    CAS: "7440-01-9",
    molecularWeight: 20.1797,
    C1: 0.0011385,
    C2: 0.6646,
    C3: 8.7,
    minimumTemperature: 30,
    maximumTemperature: 3273.1,
    thermalConductivityAtMinimumTemperature: 0.00846,
    thermalConductivityAtMaximumTemperature: 0.24616
  },

  Nitroethane: {
    name: "Nitroethane",
    formula: "C2H5NO2",
    CAS: "79-24-3",
    molecularWeight: 75.0666,
    C1: 0.0011282,
    C2: 0.6895,
    C3: 679.11,
    C4: 238800,
    minimumTemperature: 387.22,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0158,
    thermalConductivityAtMaximumTemperature: 0.06887
  },

  Nitrogen: {
    name: "Nitrogen",
    formula: "N2",
    CAS: "7727-37-9",
    molecularWeight: 28.0134,
    C1: 0.00033143,
    C2: 0.7722,
    C3: 16.323,
    C4: 373.72,
    minimumTemperature: 63.15,
    maximumTemperature: 2000,
    thermalConductivityAtMinimumTemperature: 0.00602,
    thermalConductivityAtMaximumTemperature: 0.11638
  },

  NitrogenTrifluoride: {
    name: "Nitrogen trifluoride",
    formula: "F3N",
    CAS: "7783-54-2",
    molecularWeight: 71.00191,
    C1: 2.1443,
    C2: -0.30545,
    C3: 1860.3,
    C4: 1216700,
    minimumTemperature: 144.09,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00648,
    thermalConductivityAtMaximumTemperature: 0.06377
  },

  Nitromethane: {
    name: "Nitromethane",
    formula: "CH3NO2",
    CAS: "75-52-5",
    molecularWeight: 61.04002,
    C1: 3.135e-5,
    C2: 1.1119,
    C3: -91.6,
    C4: 128000,
    minimumTemperature: 374.35,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01365,
    thermalConductivityAtMaximumTemperature: 0.06553
  },

  NitrousOxide: {
    name: "Nitrous oxide",
    formula: "N2O",
    CAS: "10024-97-2",
    molecularWeight: 44.0128,
    C1: 0.001096,
    C2: 0.667,
    C3: 540,
    minimumTemperature: 182.3,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00891,
    thermalConductivityAtMaximumTemperature: 0.07133
  },

  NitricOxide: {
    name: "Nitric oxide",
    formula: "NO",
    CAS: "10102-43-9",
    molecularWeight: 30.0061,
    C1: 0.0004096,
    C2: 0.7509,
    C3: 45.6,
    minimumTemperature: 121.38,
    maximumTemperature: 750,
    thermalConductivityAtMinimumTemperature: 0.01094,
    thermalConductivityAtMaximumTemperature: 0.05567
  },

  Nonadecane: {
    name: "Nonadecane",
    formula: "C19H40",
    CAS: "629-92-5",
    molecularWeight: 268.5209,
    C1: 4.9571e-5,
    C2: 1.2652,
    C3: 3332.3,
    minimumTemperature: 603.05,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02502,
    thermalConductivityAtMaximumTemperature: 0.07147
  },

  Nonanal: {
    name: "Nonanal",
    formula: "C9H18O",
    CAS: "124-19-6",
    molecularWeight: 142.23862,
    C1: 1.75e-6,
    C2: 1.5534,
    minimumTemperature: 465.52,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0244,
    thermalConductivityAtMaximumTemperature: 0.08003
  },

  Nonane: {
    name: "Nonane",
    formula: "C9H20",
    CAS: "111-84-2",
    molecularWeight: 128.2551,
    C1: -0.065771,
    C2: 0.27198,
    C3: -3482.3,
    C4: -1580300,
    minimumTemperature: 423.97,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0213,
    thermalConductivityAtMaximumTemperature: 0.10597
  },

  NonanoicAcid: {
    name: "Nonanoic acid",
    formula: "C9H18O2",
    CAS: "112-05-0",
    molecularWeight: 158.238,
    C1: 46.08,
    C2: -1.0037,
    C3: -2460.2,
    C4: 1867000,
    minimumTemperature: 528.75,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02815,
    thermalConductivityAtMaximumTemperature: 0.11042
  },

  "1Nonanol": {
    name: "1-Nonanol",
    formula: "C9H20O",
    CAS: "143-08-8",
    molecularWeight: 144.2545,
    C1: -30.715,
    C2: -0.1075,
    C3: 8107,
    C4: -156830000,
    minimumTemperature: 485.2,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02436,
    thermalConductivityAtMaximumTemperature: 0.09895
  },

  "2Nonanol": {
    name: "2-Nonanol",
    formula: "C9H20O",
    CAS: "628-99-9",
    molecularWeight: 144.255,
    C1: 0.00016806,
    C2: 0.96876,
    C3: 713.67,
    minimumTemperature: 471.7,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02603,
    thermalConductivityAtMaximumTemperature: 0.07904
  },

  "1Nonene": {
    name: "1-Nonene",
    formula: "C9H18",
    CAS: "124-11-8",
    molecularWeight: 126.23922,
    C1: 2.1269e-5,
    C2: 1.2943,
    C3: 662.21,
    minimumTemperature: 420.02,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02051,
    thermalConductivityAtMaximumTemperature: 0.09772
  },

  NonylMercaptan: {
    name: "Nonyl mercaptan",
    formula: "C9H20S",
    CAS: "1455-21-6",
    molecularWeight: 160.3201,
    C1: 0.047041,
    C2: 0.29733,
    C3: 2460.6,
    C4: 1367200,
    minimumTemperature: 492.95,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02559,
    thermalConductivityAtMaximumTemperature: 0.07598
  },

  "1Nonyne": {
    name: "1-Nonyne",
    formula: "C9H16",
    CAS: "3452-09-3",
    molecularWeight: 124.22334,
    C1: 1.6681e-5,
    C2: 1.218,
    C3: -199.41,
    C4: 144580,
    minimumTemperature: 423.85,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01981,
    thermalConductivityAtMaximumTemperature: 0.07956
  },

  Octadecane: {
    name: "Octadecane",
    formula: "C18H38",
    CAS: "593-45-3",
    molecularWeight: 254.49432,
    C1: -291.08,
    C2: 1.0615,
    C3: -6019900000,
    minimumTemperature: 589.86,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02491,
    thermalConductivityAtMaximumTemperature: 0.07395
  },

  Octanal: {
    name: "Octanal",
    formula: "C8H16O",
    CAS: "124-13-0",
    molecularWeight: 128.212,
    C1: 1.66e-6,
    C2: 1.5669,
    minimumTemperature: 445.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02345,
    thermalConductivityAtMaximumTemperature: 0.08333
  },

  Octane: {
    name: "Octane",
    formula: "C8H18",
    CAS: "111-65-9",
    molecularWeight: 114.22852,
    C1: -8758,
    C2: 0.8448,
    C3: -27121000000,
    minimumTemperature: 339,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01503,
    thermalConductivityAtMaximumTemperature: 0.11053
  },

  OctanoicAcid: {
    name: "Octanoic acid",
    formula: "C8H16O2",
    CAS: "124-07-2",
    molecularWeight: 144.211,
    C1: -0.20973,
    C2: 0.0012201,
    C3: -2.1843e-6,
    C4: 1.3942e-9,
    minimumTemperature: 512.85,
    maximumTemperature: 637.35,
    thermalConductivityAtMinimumTemperature: 0.02955,
    thermalConductivityAtMaximumTemperature: 0.04157
  },

  OctanoicAcidExtended: {
    name: "Octanoic acid",
    formula: "C8H16O2",
    CAS: "124-07-2",
    molecularWeight: 144.211,
    C1: 3.2008e-8,
    C2: 2.18,
    minimumTemperature: 637.35,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.04157,
    thermalConductivityAtMaximumTemperature: 0.11097
  },

  "1Octanol": {
    name: "1-Octanol",
    formula: "C8H18O",
    CAS: "111-87-5",
    molecularWeight: 130.22792,
    C1: -0.0030238,
    C2: 0.8745,
    C3: -13352,
    minimumTemperature: 468.35,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0238,
    thermalConductivityAtMaximumTemperature: 0.10288
  },

  "2Octanol": {
    name: "2-Octanol",
    formula: "C8H18O",
    CAS: "123-96-6",
    molecularWeight: 130.228,
    C1: 0.00016915,
    C2: 0.97238,
    C3: 698.55,
    minimumTemperature: 452.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02545,
    thermalConductivityAtMaximumTemperature: 0.08229
  },

  "2Octanone": {
    name: "2-Octanone",
    formula: "C8H16O",
    CAS: "111-13-7",
    molecularWeight: 128.21204,
    C1: -0.0020184,
    C2: 1.0027,
    C3: -20406,
    minimumTemperature: 446.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02046,
    thermalConductivityAtMaximumTemperature: 0.10597
  },

  "3Octanone": {
    name: "3-Octanone",
    formula: "C8H16O",
    CAS: "106-68-3",
    molecularWeight: 128.21204,
    C1: 8.1833e-8,
    C2: 2.0418,
    minimumTemperature: 440.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0205,
    thermalConductivityAtMaximumTemperature: 0.10923
  },

  "1Octene": {
    name: "1-Octene",
    formula: "C8H16",
    CAS: "111-66-0",
    molecularWeight: 112.21264,
    C1: 1.33e-5,
    C2: 1.3554,
    C3: 504.59,
    minimumTemperature: 394.41,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01926,
    thermalConductivityAtMaximumTemperature: 0.10295
  },

  OctylMercaptan: {
    name: "Octyl mercaptan",
    formula: "C8H18S",
    CAS: "111-88-6",
    molecularWeight: 146.29352,
    C1: -3965.5,
    C2: 0.5213,
    C3: -1851900000,
    minimumTemperature: 472.19,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02505,
    thermalConductivityAtMaximumTemperature: 0.07845
  },

  "1Octyne": {
    name: "1-Octyne",
    formula: "C8H14",
    CAS: "629-05-0",
    molecularWeight: 110.19676,
    C1: 6.0734e-5,
    C2: 1.0516,
    C3: -124.91,
    C4: 158300,
    minimumTemperature: 399.35,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01967,
    thermalConductivityAtMaximumTemperature: 0.08394
  },

  OxalicAcid: {
    name: "Oxalic acid",
    formula: "C2H2O4",
    CAS: "144-62-7",
    molecularWeight: 90.03488,
    C1: 2.7969e-6,
    C2: 1.3164,
    minimumTemperature: 516,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01041,
    thermalConductivityAtMaximumTemperature: 0.02488
  },

  Oxygen: {
    name: "Oxygen",
    formula: "O2",
    CAS: "7782-44-7",
    molecularWeight: 31.9988,
    C1: 0.00044994,
    C2: 0.7456,
    C3: 56.699,
    minimumTemperature: 80,
    maximumTemperature: 2000,
    thermalConductivityAtMinimumTemperature: 0.00691,
    thermalConductivityAtMaximumTemperature: 0.12655
  },

  Ozone: {
    name: "Ozone",
    formula: "O3",
    CAS: "10028-15-6",
    molecularWeight: 47.9982,
    C1: 0.0043147,
    C2: 0.47999,
    C3: 700.09,
    minimumTemperature: 161.85,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00931,
    thermalConductivityAtMaximumTemperature: 0.0699
  },

  Pentadecane: {
    name: "Pentadecane",
    formula: "C15H32",
    CAS: "629-62-9",
    molecularWeight: 212.41458,
    C1: 4.7796e-6,
    C2: 1.4851,
    C3: 643.13,
    minimumTemperature: 543.84,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02529,
    thermalConductivityAtMaximumTemperature: 0.08299
  },

  Pentanal: {
    name: "Pentanal",
    formula: "C5H10O",
    CAS: "110-62-3",
    molecularWeight: 86.1323,
    C1: 1.13e-6,
    C2: 1.6323,
    minimumTemperature: 375.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01799,
    thermalConductivityAtMaximumTemperature: 0.08912
  },

  Pentane: {
    name: "Pentane",
    formula: "C5H12",
    CAS: "109-66-0",
    molecularWeight: 72.14878,
    C1: -684.4,
    C2: 0.764,
    C3: -1055000000,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01288,
    thermalConductivityAtMaximumTemperature: 0.12707
  },

  PentanoicAcid: {
    name: "Pentanoic acid",
    formula: "C5H10O2",
    CAS: "109-52-4",
    molecularWeight: 102.132,
    C1: 0.44736,
    C2: -0.0019667,
    C3: 2.9973e-6,
    C4: -1.4141e-9,
    minimumTemperature: 458.95,
    maximumTemperature: 706.95,
    thermalConductivityAtMinimumTemperature: 0.03938,
    thermalConductivityAtMaximumTemperature: 0.05536
  },

  PentanoicAcidExtended: {
    name: "Pentanoic acid",
    formula: "C5H10O2",
    CAS: "109-52-4",
    molecularWeight: 102.132,
    C1: 7.5284e-8,
    C2: 2.0589,
    minimumTemperature: 706.95,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.05537,
    thermalConductivityAtMaximumTemperature: 0.11308
  },

  "1Pentanol": {
    name: "1-Pentanol",
    formula: "C5H12O",
    CAS: "71-41-0",
    molecularWeight: 88.1482,
    C1: 2896,
    C2: 0.8985,
    C3: 12735000000,
    minimumTemperature: 410.9,
    maximumTemperature: 990.95,
    thermalConductivityAtMinimumTemperature: 0.02084,
    thermalConductivityAtMaximumTemperature: 0.11087
  },

  "2Pentanol": {
    name: "2-Pentanol",
    formula: "C5H12O",
    CAS: "6032-29-7",
    molecularWeight: 88.1482,
    C1: 0.00019575,
    C2: 0.9692,
    C3: 664.04,
    minimumTemperature: 392.2,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02372,
    thermalConductivityAtMaximumTemperature: 0.09509
  },

  "2Pentanone": {
    name: "2-Pentanone",
    formula: "C5H10O",
    CAS: "107-87-9",
    molecularWeight: 86.1323,
    C1: -0.01719,
    C2: 0.4832,
    C3: -3798,
    C4: -1235000,
    minimumTemperature: 273,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00877,
    thermalConductivityAtMaximumTemperature: 0.12002
  },

  "3Pentanone": {
    name: "3-Pentanone",
    formula: "C5H10O",
    CAS: "96-22-0",
    molecularWeight: 86.1323,
    C1: 22.775,
    C2: 1.0019,
    C3: 191000000,
    minimumTemperature: 273,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00898,
    thermalConductivityAtMaximumTemperature: 0.12082
  },

  "1Pentene": {
    name: "1-Pentene",
    formula: "C5H10",
    CAS: "109-67-1",
    molecularWeight: 70.1329,
    C1: 2.7081e-6,
    C2: 1.5493,
    C3: 41.075,
    C4: 8301.3,
    minimumTemperature: 303.22,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01546,
    thermalConductivityAtMaximumTemperature: 0.11472
  },

  "2PentylMercaptan": {
    name: "2-Pentyl mercaptan",
    formula: "C5H12S",
    CAS: "2084-19-7",
    molecularWeight: 104.21378,
    C1: 0.00022307,
    C2: 0.93358,
    C3: 794.16,
    minimumTemperature: 385.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0189,
    thermalConductivityAtMaximumTemperature: 0.07858
  },

  PentylMercaptan: {
    name: "Pentyl mercaptan",
    formula: "C5H12S",
    CAS: "110-66-7",
    molecularWeight: 104.21378,
    C1: 0.00011261,
    C2: 1.034,
    C3: 693.05,
    minimumTemperature: 399.79,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02019,
    thermalConductivityAtMaximumTemperature: 0.08412
  },

  "1Pentyne": {
    name: "1-Pentyne",
    formula: "C5H8",
    CAS: "627-19-0",
    molecularWeight: 68.11702,
    C1: 5.2415e-5,
    C2: 1.0948,
    C3: -51.09,
    C4: 101160,
    minimumTemperature: 313.33,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01517,
    thermalConductivityAtMaximumTemperature: 0.09608
  },

  "2Pentyne": {
    name: "2-Pentyne",
    formula: "C5H8",
    CAS: "627-21-4",
    molecularWeight: 68.11702,
    C1: 0.00025623,
    C2: 1.0073,
    C3: 1423.7,
    minimumTemperature: 329.27,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01653,
    thermalConductivityAtMaximumTemperature: 0.11119
  },

  Phenanthrene: {
    name: "Phenanthrene",
    formula: "C14H10",
    CAS: "85-01-8",
    molecularWeight: 178.2292,
    C1: 0.00010167,
    C2: 0.988,
    C3: 797,
    minimumTemperature: 610.03,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0249,
    thermalConductivityAtMaximumTemperature: 0.05208
  },

  Phenol: {
    name: "Phenol",
    formula: "C6H6O",
    CAS: "108-95-2",
    molecularWeight: 94.11124,
    C1: 0.038846,
    C2: 0.2392,
    C3: 985.81,
    C4: 937170,
    minimumTemperature: 454.99,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02183,
    thermalConductivityAtMaximumTemperature: 0.06936
  },

  PhenylIsocyanate: {
    name: "Phenyl isocyanate",
    formula: "C7H5NO",
    CAS: "103-71-9",
    molecularWeight: 119.1207,
    C1: 0.00016675,
    C2: 0.91777,
    C3: 730.1,
    minimumTemperature: 439.43,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01669,
    thermalConductivityAtMaximumTemperature: 0.05461
  },

  PhthalicAnhydride: {
    name: "Phthalic anhydride",
    formula: "C8H4O3",
    CAS: "85-44-9",
    molecularWeight: 148.11556,
    C1: 5.93e-5,
    C2: 1.046,
    C3: 765.5,
    minimumTemperature: 557.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01864,
    thermalConductivityAtMaximumTemperature: 0.04615
  },

  Propadiene: {
    name: "Propadiene",
    formula: "C3H4",
    CAS: "463-49-0",
    molecularWeight: 40.06386,
    C1: 6.1629e-5,
    C2: 1.0731,
    C3: 1.8579,
    C4: 70128,
    minimumTemperature: 238.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0098,
    thermalConductivityAtMaximumTemperature: 0.09526
  },

  Propane: {
    name: "Propane",
    formula: "C3H8",
    CAS: "74-98-6",
    molecularWeight: 44.09562,
    C1: -1.12,
    C2: 0.10972,
    C3: -9834.6,
    C4: -7535800,
    minimumTemperature: 231.11,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01114,
    thermalConductivityAtMaximumTemperature: 0.14599
  },

  "1Propanol": {
    name: "1-Propanol",
    formula: "C3H8O",
    CAS: "71-23-8",
    molecularWeight: 60.09502,
    C1: -613.84,
    C2: 0.7927,
    C3: -1157400000,
    minimumTemperature: 370.35,
    maximumTemperature: 720.25,
    thermalConductivityAtMinimumTemperature: 0.02135,
    thermalConductivityAtMaximumTemperature: 0.07034
  },

  "2Propanol": {
    name: "2-Propanol",
    formula: "C3H8O",
    CAS: "67-63-0",
    molecularWeight: 60.095,
    C1: 7.3907e-7,
    C2: 1.7419,
    minimumTemperature: 355.3,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02049,
    thermalConductivityAtMaximumTemperature: 0.12428
  },

  Propenylcyclohexene: {
    name: "Propenylcyclohexene",
    formula: "C9H14",
    CAS: "13511-13-2",
    molecularWeight: 122.20746,
    C1: 0.00010242,
    C2: 1.0486,
    C3: 701.56,
    minimumTemperature: 431.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02262,
    thermalConductivityAtMaximumTemperature: 0.08421
  },

  Propionaldehyde: {
    name: "Propionaldehyde",
    formula: "C3H6O",
    CAS: "123-38-6",
    molecularWeight: 58.07914,
    C1: 9.0711e-7,
    C2: 1.6709,
    minimumTemperature: 322.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01407,
    thermalConductivityAtMaximumTemperature: 0.0934
  },

  PropionicAcid: {
    name: "Propionic acid",
    formula: "C3H6O2",
    CAS: "79-09-4",
    molecularWeight: 74.0785,
    C1: 1.0014,
    C2: -0.0045954,
    C3: 7.1517e-6,
    C4: -3.5878e-9,
    minimumTemperature: 414.32,
    maximumTemperature: 616.15,
    thermalConductivityAtMinimumTemperature: 0.06993,
    thermalConductivityAtMaximumTemperature: 0.04578
  },

  PropionicAcidExtended: {
    name: "Propionic acid",
    formula: "C3H6O2",
    CAS: "79-09-4",
    molecularWeight: 74.0785,
    C1: 1.8905e-7,
    C2: 1.93,
    minimumTemperature: 616.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.04578,
    thermalConductivityAtMaximumTemperature: 0.11657
  },

  Propionitrile: {
    name: "Propionitrile",
    formula: "C3H5N",
    CAS: "107-12-0",
    molecularWeight: 55.0785,
    C1: 1.17e-6,
    C2: 1.6033,
    minimumTemperature: 370.25,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01532,
    thermalConductivityAtMaximumTemperature: 0.07534
  },

  PropylAcetate: {
    name: "Propyl acetate",
    formula: "C5H10O2",
    CAS: "109-60-4",
    molecularWeight: 102.1317,
    C1: 1325.3,
    C2: 1,
    C3: 12235000000,
    minimumTemperature: 374.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0152,
    thermalConductivityAtMaximumTemperature: 0.10832
  },

  PropylAmine: {
    name: "Propyl amine",
    formula: "C3H9N",
    CAS: "107-10-8",
    molecularWeight: 59.11026,
    C1: 0.2833,
    C2: 0.055046,
    C3: 1325.9,
    C4: 1817600,
    minimumTemperature: 321,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01709,
    thermalConductivityAtMaximumTemperature: 0.1
  },

  Propylbenzene: {
    name: "Propylbenzene",
    formula: "C9H12",
    CAS: "103-65-1",
    molecularWeight: 120.19158,
    C1: 0.16992,
    C2: 0.021288,
    C3: -54.484,
    C4: 1624800,
    minimumTemperature: 432.39,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02022,
    thermalConductivityAtMaximumTemperature: 0.07658
  },

  Propylene: {
    name: "Propylene",
    formula: "C3H6",
    CAS: "115-07-1",
    molecularWeight: 42.07974,
    C1: 4.49e-5,
    C2: 1.2018,
    C3: 421,
    minimumTemperature: 225.45,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01054,
    thermalConductivityAtMaximumTemperature: 0.12737
  },

  PropylFormate: {
    name: "Propyl formate",
    formula: "C4H8O2",
    CAS: "110-74-7",
    molecularWeight: 88.10512,
    C1: 740.1,
    C2: 0.9732,
    C3: 5646000000,
    minimumTemperature: 353.97,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01403,
    thermalConductivityAtMaximumTemperature: 0.10893
  },

  "2PropylMercaptan": {
    name: "2-Propyl mercaptan",
    formula: "C3H8S",
    CAS: "75-33-2",
    molecularWeight: 76.16062,
    C1: 0.00018367,
    C2: 0.9627,
    C3: 646.01,
    minimumTemperature: 325.71,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01616,
    thermalConductivityAtMaximumTemperature: 0.08624
  },

  PropylMercaptan: {
    name: "Propyl mercaptan",
    formula: "C3H8S",
    CAS: "107-03-9",
    molecularWeight: 76.16062,
    C1: 0.0087425,
    C2: 0.51733,
    C3: 2358.1,
    C4: 334590,
    minimumTemperature: 340.87,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01654,
    thermalConductivityAtMaximumTemperature: 0.08439
  },

  "1,2PropyleneGlycol": {
    name: "1,2-Propylene glycol",
    formula: "C3H8O2",
    CAS: "57-55-6",
    molecularWeight: 76.09442,
    C1: 0.0001666,
    C2: 0.9765,
    C3: 706,
    minimumTemperature: 460.75,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02624,
    thermalConductivityAtMaximumTemperature: 0.08302
  },

  Quinone: {
    name: "Quinone",
    formula: "C6H4O2",
    CAS: "106-51-4",
    molecularWeight: 108.09476,
    C1: -5678600,
    C2: -0.045252,
    C3: 2615700000,
    C4: -3.5415e13,
    minimumTemperature: 454,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02593,
    thermalConductivityAtMaximumTemperature: 0.12665
  },

  SiliconTetrafluoride: {
    name: "Silicon tetrafluoride",
    formula: "F4Si",
    CAS: "7783-61-1",
    molecularWeight: 104.07911,
    C1: 9.55e-5,
    C2: 0.928,
    C3: 63.6,
    minimumTemperature: 333.55,
    maximumTemperature: 702.45,
    thermalConductivityAtMinimumTemperature: 0.01761,
    thermalConductivityAtMaximumTemperature: 0.03837
  },

  Styrene: {
    name: "Styrene",
    formula: "C8H8",
    CAS: "100-42-5",
    molecularWeight: 104.14912,
    C1: 0.010048,
    C2: 0.4033,
    C3: 553.74,
    C4: 685570,
    minimumTemperature: 418.31,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01837,
    thermalConductivityAtMaximumTemperature: 0.07276
  },

  SuccinicAcid: {
    name: "Succinic acid",
    formula: "C4H6O4",
    CAS: "110-15-6",
    molecularWeight: 118.08804,
    C1: 5.5263e-6,
    C2: 1.344,
    minimumTemperature: 591,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02934,
    thermalConductivityAtMaximumTemperature: 0.05949
  },

  SulfurDioxide: {
    name: "Sulfur dioxide",
    formula: "O2S",
    CAS: "7446-09-5",
    molecularWeight: 64.0638,
    C1: 10.527,
    C2: -0.7732,
    C3: -1333,
    C4: 1506400,
    minimumTemperature: 250,
    maximumTemperature: 900,
    thermalConductivityAtMinimumTemperature: 0.00745,
    thermalConductivityAtMaximumTemperature: 0.03969
  },

  SulfurHexafluoride: {
    name: "Sulfur hexafluoride",
    formula: "F6S",
    CAS: "2551-62-4",
    molecularWeight: 146.0554192,
    C1: 0.00048883,
    C2: 0.6518,
    C3: -117.08,
    C4: 78863,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01163,
    thermalConductivityAtMaximumTemperature: 0.04587
  },

  SulfurTrioxide: {
    name: "Sulfur trioxide",
    formula: "O3S",
    CAS: "09-11-7446",
    molecularWeight: 80.0632,
    C1: 1.0702,
    C2: -0.2348,
    C3: 2010.4,
    C4: 1277000,
    minimumTemperature: 317.9,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01386,
    thermalConductivityAtMaximumTemperature: 0.0493
  },

  TerephthalicAcid: {
    name: "Terephthalic acid",
    formula: "C8H6O4",
    CAS: "100-21-0",
    molecularWeight: 166.13084,
    C1: 3.4082e-6,
    C2: 1.3647,
    minimumTemperature: 795.28,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.03097,
    thermalConductivityAtMaximumTemperature: 0.04233
  },

  oTerphenyl: {
    name: "o-Terphenyl",
    formula: "C18H14",
    CAS: "84-15-1",
    molecularWeight: 230.30376,
    C1: 7.8652e-5,
    C2: 0.95174,
    C3: -282.82,
    C4: 289490,
    minimumTemperature: 373.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0095,
    thermalConductivityAtMaximumTemperature: 0.05598
  },

  Tetradecane: {
    name: "Tetradecane",
    formula: "C14H30",
    CAS: "629-59-4",
    molecularWeight: 198.388,
    C1: -163.62,
    C2: 0.9193,
    C3: -1087600000,
    minimumTemperature: 526.73,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02517,
    thermalConductivityAtMaximumTemperature: 0.08615
  },

  Tetrahydrofuran: {
    name: "Tetrahydrofuran",
    formula: "C4H8O",
    CAS: "109-99-9",
    molecularWeight: 72.10572,
    C1: 9.5521e-6,
    C2: 1.4561,
    C3: 662.22,
    minimumTemperature: 339.12,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01564,
    thermalConductivityAtMaximumTemperature: 0.13419
  },

  "1,2,3,4Tetrahydronaphthalene": {
    name: "1,2,3,4-Tetrahydronaphthalene",
    formula: "C10H12",
    CAS: "119-64-2",
    molecularWeight: 132.20228,
    C1: 7.754e-5,
    C2: 1.0778,
    C3: 729,
    minimumTemperature: 480.77,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02395,
    thermalConductivityAtMaximumTemperature: 0.07676
  },

  Tetrahydrothiophene: {
    name: "Tetrahydrothiophene",
    formula: "C4H8S",
    CAS: "110-01-0",
    molecularWeight: 88.17132,
    C1: 0.00085604,
    C2: 0.7297,
    C3: 531.99,
    C4: 213840,
    minimumTemperature: 394.27,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01801,
    thermalConductivityAtMaximumTemperature: 0.07579
  },

  "2,2,3,3Tetramethylbutane": {
    name: "2,2,3,3-Tetramethylbutane",
    formula: "C8H18",
    CAS: "594-82-1",
    molecularWeight: 114.22852,
    C1: 1.5235e-5,
    C2: 1.2816,
    C3: -111.88,
    C4: 124120,
    minimumTemperature: 379.44,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01964,
    thermalConductivityAtMaximumTemperature: 0.10528
  },

  Thiophene: {
    name: "Thiophene",
    formula: "C4H4S",
    CAS: "110-02-1",
    molecularWeight: 84.13956,
    C1: 0.00013384,
    C2: 0.98115,
    C3: 645.95,
    minimumTemperature: 357.31,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01525,
    thermalConductivityAtMaximumTemperature: 0.07139
  },

  Toluene: {
    name: "Toluene",
    formula: "C7H8",
    CAS: "108-88-3",
    molecularWeight: 92.13842,
    C1: 2.392e-5,
    C2: 1.2694,
    C3: 537,
    minimumTemperature: 383.78,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01901,
    thermalConductivityAtMaximumTemperature: 0.10007
  },

  "1,1,2-Trichloroethane": {
    name: "1,1,2-Trichloroethane",
    formula: "C2H3Cl3",
    CAS: "79-00-5",
    molecularWeight: 133.40422,
    C1: 9.52e-5,
    C2: 1.0423,
    C3: 1243.3,
    minimumTemperature: 387,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01125,
    thermalConductivityAtMaximumTemperature: 0.05684
  },

  Tridecane: {
    name: "Tridecane",
    formula: "C13H28",
    CAS: "629-50-5",
    molecularWeight: 184.36142,
    C1: 5.3701e-6,
    C2: 1.4751,
    C3: 599.09,
    minimumTemperature: 508.62,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02422,
    thermalConductivityAtMaximumTemperature: 0.08942
  },

  TriethylAmine: {
    name: "Triethyl amine",
    formula: "C6H15N",
    CAS: "121-44-8",
    molecularWeight: 101.19,
    C1: 0.000106,
    C2: 1.0161,
    C3: 91,
    C4: 132900,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01018,
    thermalConductivityAtMaximumTemperature: 0.0968
  },

  TrimethylAmine: {
    name: "Trimethyl amine",
    formula: "C3H9N",
    CAS: "75-50-3",
    molecularWeight: 59.11026,
    C1: 0.00027648,
    C2: 0.901,
    C3: 167.68,
    C4: 132200,
    minimumTemperature: 273.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0128,
    thermalConductivityAtMaximumTemperature: 0.10734
  },

  "1,2,3Trimethylbenzene": {
    name: "1,2,3-Trimethylbenzene",
    formula: "C9H12",
    CAS: "526-73-8",
    molecularWeight: 120.19158,
    C1: 9.8408e-5,
    C2: 1.0452,
    C3: 720.49,
    minimumTemperature: 449.27,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02238,
    thermalConductivityAtMaximumTemperature: 0.07816
  },

  "1,2,4-Trimethylbenzene": {
    name: "1,2,4-Trimethylbenzene",
    formula: "C9H12",
    CAS: "95-63-6",
    molecularWeight: 120.19158,
    C1: 8.498e-5,
    C2: 1.061,
    C3: 708,
    minimumTemperature: 442.53,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02098,
    thermalConductivityAtMaximumTemperature: 0.07583
  },

  "2,2,4Trimethylpentane": {
    name: "2,2,4-Trimethylpentane",
    formula: "C8H18",
    CAS: "540-84-1",
    molecularWeight: 114.22852,
    C1: 1.758e-5,
    C2: 1.3114,
    C3: 392.9,
    minimumTemperature: 355.15,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01846,
    thermalConductivityAtMaximumTemperature: 0.10847
  },

  "2,3,3Trimethylpentane": {
    name: "2,3,3-Trimethylpentane",
    formula: "C8H18",
    CAS: "560-21-4",
    molecularWeight: 114.22852,
    C1: 2.0248e-5,
    C2: 1.2284,
    C3: -174.72,
    C4: 147800,
    minimumTemperature: 387.91,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02001,
    thermalConductivityAtMaximumTemperature: 0.10079
  },

  "1,3,5Trinitrobenzene": {
    name: "1,3,5-Trinitrobenzene",
    formula: "C6H3N3O6",
    CAS: "99-35-4",
    molecularWeight: 213.10452,
    C1: 0.00020544,
    C2: 0.87137,
    C3: 807.3,
    minimumTemperature: 629.6,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02474,
    thermalConductivityAtMaximumTemperature: 0.04675
  },

  "2,4,6Trinitrotoluene": {
    name: "2,4,6-Trinitrotoluene",
    formula: "C7H5N3O6",
    CAS: "118-96-7",
    molecularWeight: 227.1311,
    C1: 0.00018189,
    C2: 0.88744,
    C3: 803.39,
    minimumTemperature: 625,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.0241,
    thermalConductivityAtMaximumTemperature: 0.04635
  },

  Undecane: {
    name: "Undecane",
    formula: "C11H24",
    CAS: "1120-21-4",
    molecularWeight: 156.30826,
    C1: 0.038012,
    C2: 0.68615,
    C3: 34663,
    C4: 8721900,
    minimumTemperature: 469.08,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02259,
    thermalConductivityAtMaximumTemperature: 0.09798
  },

  "1Undecanol": {
    name: "1-Undecanol",
    formula: "C11H24O",
    CAS: "112-42-5",
    molecularWeight: 172.30766,
    C1: 2498.8,
    C2: 0.95209,
    C3: 20167000000,
    minimumTemperature: 520.3,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.02486,
    thermalConductivityAtMaximumTemperature: 0.08899
  },

  VinylAcetate: {
    name: "Vinyl acetate",
    formula: "C4H6O2",
    CAS: "108-05-4",
    molecularWeight: 86.08924,
    C1: -3279500,
    C2: -0.12941,
    C3: 1710400000,
    C4: -1.2727e13,
    minimumTemperature: 345.65,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01515,
    thermalConductivityAtMaximumTemperature: 0.12177
  },

  VinylAcetylene: {
    name: "Vinyl acetylene",
    formula: "C4H4",
    CAS: "689-97-4",
    molecularWeight: 52.07456,
    C1: 5.4197e-5,
    C2: 1.0632,
    C3: -70.589,
    C4: 90617,
    minimumTemperature: 278.25,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01123,
    thermalConductivityAtMaximumTemperature: 0.08222
  },

  VinylChloride: {
    name: "Vinyl chloride",
    formula: "C2H3Cl",
    CAS: "75-01-4",
    molecularWeight: 62.49822,
    C1: -229.41,
    C2: 0.59582,
    C3: -169430000,
    minimumTemperature: 259.25,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00963,
    thermalConductivityAtMaximumTemperature: 0.083
  },

  VinylTrichlorosilane: {
    name: "Vinyl trichlorosilane",
    formula: "C2H3Cl3Si",
    CAS: "75-94-5",
    molecularWeight: 161.48972,
    C1: 3510.8,
    C2: 0.225,
    C3: 401720000,
    minimumTemperature: 363.85,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01198,
    thermalConductivityAtMaximumTemperature: 0.04135
  },

  Water: {
    name: "Water",
    formula: "H2O",
    CAS: "7732-18-5",
    molecularWeight: 18.01528,
    C1: 6.2041e-6,
    C2: 1.3973,
    minimumTemperature: 273.16,
    maximumTemperature: 1073.15,
    thermalConductivityAtMinimumTemperature: 0.01574,
    thermalConductivityAtMaximumTemperature: 0.10652
  },

  mXylene: {
    name: "m-Xylene",
    formula: "C8H10",
    CAS: "108-38-3",
    molecularWeight: 106.165,
    C1: 3.0593e-9,
    C2: 2.4182,
    C3: -569.28,
    C4: 121060,
    minimumTemperature: 320,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.00867,
    thermalConductivityAtMaximumTemperature: 0.09965
  },

  oXylene: {
    name: "o-Xylene",
    formula: "C8H10",
    CAS: "95-47-6",
    molecularWeight: 106.165,
    C1: 4.9707e-6,
    C2: 1.3787,
    C3: -225.64,
    C4: 66786,
    minimumTemperature: 320,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01492,
    thermalConductivityAtMaximumTemperature: 0.08084
  },

  pXylene: {
    name: "p-Xylene",
    formula: "C8H10",
    CAS: "106-42-3",
    molecularWeight: 106.165,
    C1: 9.9305e-8,
    C2: 1.9229,
    C3: -469.93,
    C4: 113460,
    minimumTemperature: 320,
    maximumTemperature: 1000,
    thermalConductivityAtMinimumTemperature: 0.01019,
    thermalConductivityAtMaximumTemperature: 0.0906
  }
};

function calculateDIPPRVaporThermalConductivityForGeneralCompound(
  temperature: number,
  props?: DIPPRVaporThermalConductivityProps
): number {
  let thermalConductivity = NaN;
  if (props !== undefined && temperature >= props.minimumTemperature && temperature <= props.maximumTemperature) {
    thermalConductivity =
      (props.C1 * Math.pow(temperature, props.C2)) /
      (1 +
        (Number.isFinite(props.C3) ? (props.C3 as number) / temperature : 0) +
        (Number.isFinite(props.C4) ? (props.C4 as number) / Math.pow(temperature, 2) : 0));
  }
  return thermalConductivity;
}

function calculateDIPPRVaporThermalConductivityForSpecialCompound(
  temperature: number,
  props?: DIPPRVaporThermalConductivityProps
): number {
  let thermalConductivity = NaN;
  if (props !== undefined && temperature >= props.minimumTemperature && temperature <= props.maximumTemperature) {
    thermalConductivity =
      props.C1 +
      props.C2 * temperature +
      (Number.isFinite(props.C3) ? Math.pow(temperature, 2) * (props.C3 as number) : 0) +
      (Number.isFinite(props.C4) ? Math.pow(temperature, 3) * (props.C4 as number) : 0);
  }
  return thermalConductivity;
}

function calculateDIPPRVaporThermalConductivityForAceticAcid(temperature: number): number {
  let props = DIPPRVaporThermalConductivityDictionary["AceticAcid"];
  let thermalConductivity = calculateDIPPRVaporThermalConductivityForSpecialCompound(temperature, props);
  if (temperature > 458.15 && temperature <= 541.5) {
    props = DIPPRVaporThermalConductivityDictionary["AceticAcidExtended1"];
    thermalConductivity = calculateDIPPRVaporThermalConductivityForSpecialCompound(temperature, props);
  }
  // } else if (temperature > 541.5) { // Constants in this range may be wrong
  //   props = DIPPRVaporThermalConductivityDictionary["AceticAcidExtended2"];
  //   thermalConductivity = calculateDIPPRVaporThermalConductivityForGeneralCompound(temperature, props);
  // }
  return thermalConductivity;
}

function calculateDIPPRVaporThermalConductivityForButyricAcid(temperature: number): number {
  let props = DIPPRVaporThermalConductivityDictionary["ButyricAcid"];
  let thermalConductivity = calculateDIPPRVaporThermalConductivityForSpecialCompound(temperature, props);
  if (temperature > 706.95 && temperature <= 1000) {
    props = DIPPRVaporThermalConductivityDictionary["ButyricAcidExtended"];
    thermalConductivity = calculateDIPPRVaporThermalConductivityForGeneralCompound(temperature, props);
  }
  return thermalConductivity;
}

function calculateDIPPRVaporThermalConductivityForFormicAcid(temperature: number): number {
  let props = DIPPRVaporThermalConductivityDictionary["FormicAcid"];
  let thermalConductivity = calculateDIPPRVaporThermalConductivityForSpecialCompound(temperature, props);
  if (temperature > 470 && temperature <= 537.9) {
    props = DIPPRVaporThermalConductivityDictionary["FormicAcidExtended1"];
    thermalConductivity = calculateDIPPRVaporThermalConductivityForSpecialCompound(temperature, props);
  } else if (temperature > 537.9 && temperature <= 1000) {
    props = DIPPRVaporThermalConductivityDictionary["FormicAcidExtended2"];
    thermalConductivity = calculateDIPPRVaporThermalConductivityForGeneralCompound(temperature, props);
  }
  return thermalConductivity;
}

function calculateDIPPRVaporThermalConductivityForHeptanoicAcid(temperature: number): number {
  let props = DIPPRVaporThermalConductivityDictionary["HeptanoicAcid"];
  let thermalConductivity = calculateDIPPRVaporThermalConductivityForSpecialCompound(temperature, props);
  if (temperature > 643.11 && temperature <= 1000) {
    props = DIPPRVaporThermalConductivityDictionary["HeptanoicAcidExtended"];
    thermalConductivity = calculateDIPPRVaporThermalConductivityForGeneralCompound(temperature, props);
  }
  return thermalConductivity;
}

function calculateDIPPRVaporThermalConductivityForOctanoicAcid(temperature: number): number {
  let props = DIPPRVaporThermalConductivityDictionary["OctanoicAcid"];
  let thermalConductivity = calculateDIPPRVaporThermalConductivityForSpecialCompound(temperature, props);
  if (temperature > 637.35 && temperature <= 1000) {
    props = DIPPRVaporThermalConductivityDictionary["OctanoicAcidExtended"];
    thermalConductivity = calculateDIPPRVaporThermalConductivityForGeneralCompound(temperature, props);
  }
  return thermalConductivity;
}

function calculateDIPPRVaporThermalConductivityForPentanoicAcid(temperature: number): number {
  let props = DIPPRVaporThermalConductivityDictionary["PentanoicAcid"];
  let thermalConductivity = calculateDIPPRVaporThermalConductivityForSpecialCompound(temperature, props);
  if (temperature > 607.95 && temperature <= 1000) {
    props = DIPPRVaporThermalConductivityDictionary["PentanoicAcidExtended"];
    thermalConductivity = calculateDIPPRVaporThermalConductivityForGeneralCompound(temperature, props);
  }
  return thermalConductivity;
}

function calculateDIPPRVaporThermalConductivityForPropionicAcid(temperature: number): number {
  let props = DIPPRVaporThermalConductivityDictionary["PropionicAcid"];
  let thermalConductivity = calculateDIPPRVaporThermalConductivityForSpecialCompound(temperature, props);
  if (temperature > 616.15 && temperature <= 1000) {
    props = DIPPRVaporThermalConductivityDictionary["PropionicAcidExtended"];
    thermalConductivity = calculateDIPPRVaporThermalConductivityForGeneralCompound(temperature, props);
  }
  return thermalConductivity;
}

export function calculateDIPPRVaporThermalConductivity(compound: string, temperature: number): number {
  let thermalConductivity = NaN;
  switch (compound) {
    case "AceticAcid":
      thermalConductivity = calculateDIPPRVaporThermalConductivityForAceticAcid(temperature);
      break;
    case "ButyricAcid":
      thermalConductivity = calculateDIPPRVaporThermalConductivityForButyricAcid(temperature);
      break;
    case "FormicAcid":
      thermalConductivity = calculateDIPPRVaporThermalConductivityForFormicAcid(temperature);
      break;
    case "HeptanoicAcid":
      thermalConductivity = calculateDIPPRVaporThermalConductivityForHeptanoicAcid(temperature);
      break;
    case "OctanoicAcid":
      thermalConductivity = calculateDIPPRVaporThermalConductivityForOctanoicAcid(temperature);
      break;
    case "PentanoicAcid":
      thermalConductivity = calculateDIPPRVaporThermalConductivityForPentanoicAcid(temperature);
      break;
    case "PropionicAcid":
      thermalConductivity = calculateDIPPRVaporThermalConductivityForPropionicAcid(temperature);
      break;
    default:
      thermalConductivity = calculateDIPPRVaporThermalConductivityForGeneralCompound(
        temperature,
        DIPPRVaporThermalConductivityDictionary[compound]
      );
      break;
  }
  return thermalConductivity;
}
