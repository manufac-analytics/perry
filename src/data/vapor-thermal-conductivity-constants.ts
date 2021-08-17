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

export function calculateDIPPRVaporThermalConductivity(compound: string, temperature: number): number {
  let thermalConductivity = NaN;
  // const compoundExceptionList = [
  //   "FormicAcid",
  //   "HeptanoicAcid",
  //   "OctanoicAcid",
  //   "PentanoicAcid",
  //   "PropionicAcid"
  // ];
  switch (compound) {
    case "AceticAcid":
      thermalConductivity = calculateDIPPRVaporThermalConductivityForAceticAcid(temperature);
      break;
    case "ButyricAcid":
      thermalConductivity = calculateDIPPRVaporThermalConductivityForButyricAcid(temperature);
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
