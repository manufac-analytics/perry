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
    CAS: "04-01-2207",
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
    name: "2-EthylHexanoicAcid",
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
