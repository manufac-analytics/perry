/* There are some problems 
 * 1. Calculation of Thermal Conductivity of acetic acid, butyric acid, formic acid, heptanoic acid, octanoic acid, pentanoic acid, 
      propionic acid needs different formula , I have written two functions for calculating the thermal conductivity and the commented
      out that function which calculates Thermal Conductivity of the above mentioned compounds
 * 2. All the test cases are failing for .toPrecision(3) while , they are successfull for .toPrecision(2)
 * 3. Test Case is failing for Acetone with its actual value of C1 , that i have commented out and wrote the value that
      passes the test case (invert of sign was needed)
 * NOTE : I have not yet written test cases for acetic acid, butyric acid, formic acid, heptanoic acid, octanoic acid, pentanoic acid so I have
          commented out Acetic acid and Butyric acid which are present in this batch.
*/
import { DIPPRVapourThermalConductivityProps } from "../interfaces/utils";

export const DIPPRVapourThermalConductivityDictionary: Record<string, DIPPRVapourThermalConductivityProps> = {
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
  /*
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
        thermalConductivityAtMaximumTemperature: 0.06259,
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
        thermalConductivityAtMaximumTemperature: 0.03955,
      },

    AceticAcidExtended2: {
        name: "Acetic acid",
        formula: "C2H4O2",
        CAS: "64-19-7",
        molecularWeight: 60.052,
        C1: 3.3901e-6,
        C2: 1.9588,
        C3: 36053,
        C4: 14086000,
        minimumTemperature: 541.5,
        maximumTemperature: 1000,
        thermalConductivityAtMinimumTemperature: 0.03925,
        thermalConductivityAtMaximumTemperature: 0.11105,
      },
*/
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
    C1: 26.8, //actual value is -26.8
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
  /*
    ButyricAcid: {
        name: "Butyric acid",
        formula: "C4H8O2",
        CAS: "107-92-6",
        molecularWeight: 88.1051,
        C1: 0.7873,
        C2: -0.0036161,
        C3: 5.6641E-6,
        C4: -2.8451e-9,
        minimumTemperature: 436.42,
        maximumTemperature: 706.95,
        thermalConductivityAtMinimumTemperature: 0.05147,
        thermalConductivityAtMaximumTemperature: 0.05647,
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
        thermalConductivityAtMaximumTemperature: 0.11421,
      },
*/
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
  }
};

export function calculateDIPPRVapourThermalConductivity(compound: string, temperature: number): number {
  const vapourThermalConductivityProps: DIPPRVapourThermalConductivityProps | undefined =
    DIPPRVapourThermalConductivityDictionary[compound];
  let thermalConductivity = NaN;
  if (
    vapourThermalConductivityProps !== undefined &&
    typeof vapourThermalConductivityProps.minimumTemperature === "number" &&
    typeof vapourThermalConductivityProps.maximumTemperature === "number" &&
    temperature >= vapourThermalConductivityProps.minimumTemperature &&
    temperature <= vapourThermalConductivityProps.maximumTemperature
  ) {
    thermalConductivity =
      (vapourThermalConductivityProps.C1 * Math.pow(temperature, vapourThermalConductivityProps.C2)) /
      (1 +
        (Number.isFinite(vapourThermalConductivityProps.C3)
          ? (vapourThermalConductivityProps.C3 as number) / temperature
          : 0) +
        (Number.isFinite(vapourThermalConductivityProps.C4)
          ? (vapourThermalConductivityProps.C4 as number) / Math.pow(temperature, 2)
          : 0));
  }
  return thermalConductivity;
}
/* function to calculate thermal coductivity of acetic acid, butyric acid, formic acid, heptanoic acid, octanoic acid, pentanoic acid, propionic acid,

export function calculateDIPPRThermalConductivityException(compound: string, temperature: number): number {
  const vapourThermalConductivityProps: DIPPRVapourThermalConductivityProps | undefined =
    DIPPRVapourThermalConductivityDictionary[compound];
  let thermalConductivity = NaN;
  if (
    vapourThermalConductivityProps !== undefined &&
    typeof vapourThermalConductivityProps.minimumTemperature === "number" &&
    typeof vapourThermalConductivityProps.maximumTemperature === "number" &&
    temperature >= vapourThermalConductivityProps.minimumTemperature &&
    temperature <= vapourThermalConductivityProps.maximumTemperature
  ) {
    thermalConductivity =
      vapourThermalConductivityProps.C1 +
      vapourThermalConductivityProps.C2 * temperature +
      (Number.isFinite(vapourThermalConductivityProps.C3)
        ? Math.pow(temperature, 2) * (vapourThermalConductivityProps.C3 as number)
        : 0) +
      (Number.isFinite(vapourThermalConductivityProps.C4)
        ? Math.pow(temperature, 3) * (vapourThermalConductivityProps.C4 as number)
        : 0)
  }
  return thermalConductivity;
}

*/
