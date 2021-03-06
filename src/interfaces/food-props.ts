interface ElementProps {
  name: string;
  text: string;
}

export interface FoodProps {
  name: string;
  CASNumber: string;
  id: string;
  formula: string;
  SMILES: string;
  molarWeight: number;
  criticalTemperature: number;
  criticalPressure: number;
  criticalVolume: number;
  criticalCompressibility: number;
  accentricFactor: number;
  zRackett: number;
  prVolumeTransalationCoefficient: number;
  srkVolumeTransalationCoefficient: number;
  csAccentricFactor: number;
  csSolubilityParameter: number;
  csLiquidMolarVolume: number;
  igEnthalpyOfFormation25C: number;
  igGibbsEnergyOfFormation25C: number;
  vaporPressureConstantEqnNumber: number;
  vaporPressureConstantA: number;
  vaporPressureConstantB: number;
  vaporPressureConstantC: number;
  vaporPressureConstantD: number;
  vaporPressureConstantE: number;
  idealGasHeatCapacityEqnNumber: number;
  idealGasHeatCapacityConstantA: number;
  idealGasHeatCapacityConstantB: number;
  idealGasHeatCapacityConstantC: number;
  idealGasHeatCapacityConstantD: number;
  idealGasHeatCapacityConstantE: number;
  liquidHeatCapacityEqnNumber: number;
  liquidHeatCapacityConstantA: number;
  liquidHeatCapacityConstantB: number;
  liquidHeatCapacityConstantC: number;
  liquidHeatCapacityConstantD: number;
  liquidHeatCapacityConstantE: number;
  liquidHeatCapacityTMin: number;
  liquidHeatCapacityTMax: number;
  liquidThermalConductivityEqnNumber: number;
  liquidThermalConductivityConstantA: number;
  liquidThermalConductivityConstantB: number;
  liquidThermalConductivityConstantC: number;
  liquidThermalConductivityConstantD: number;
  liquidThermalConductivityConstantE: number;
  liquidThermalConductivityTMin: number;
  liquidThermalConductivityTMax: number;
  liquidViscocityEqnNumber: number;
  liquidViscocityConstantA: number;
  liquidViscocityConstantB: number;
  liquidViscocityConstantC: number;
  liquidViscocityConstantD: number;
  liquidViscocityConstantE: number;
  liquidDensityEqnNumber: number;
  liquidDensityConstantA: number;
  liquidDensityConstantB: number;
  liquidDensityConstantC: number;
  liquidDensityConstantD: number;
  liquidDensityConstantE: number;
  vaporViscocityEqnNumber: number;
  vaporViscocityConstantA: number;
  vaporViscocityConstantB: number;
  vaporViscocityConstantC: number;
  vaporViscocityConstantD: number;
  vaporViscocityConstantE: number;
  vaporThermalConductivityEqnNumber: number;
  vaporThermalConductivityConstantA: number;
  vaporThermalConductivityConstantB: number;
  vaporThermalConductivityConstantC: number;
  vaporThermalConductivityConstantD: number;
  vaporThermalConductivityConstantE: number;
  vaporThermalConductivityTMin: number;
  vaporThermalConductivityTMax: number;
  solidHeatCapacityEqnNumber: number;
  solidHeatCapacityConstantA: number;
  solidHeatCapacityConstantB: number;
  solidHeatCapacityConstantC: number;
  solidHeatCapacityConstantD: number;
  solidHeatCapacityConstantE: number;
  solidHeatCapacityTMin: number;
  solidHeatCapacityTMax: number;
  solidDensityEqnNumber: number;
  solidDensityConstantA: number;
  solidDensityConstantB: number;
  solidDensityConstantC: number;
  solidDensityConstantD: number;
  solidDensityConstantE: number;
  solidDensityTMin: number;
  solidDensityTMax: number;
  normalBoilingPoint: number;
  UNIQUACq: number;
  UNIQUACr: number;
  temperatureOfFusion: number;
  enthalpyOfFusion: number;
  PCSAFTsigma: number;
  PCSAFTm: number;
  PCSAFTepsilonK: number;
  isBlackOil: boolean;
  blackOilGOR: number;
  blackOilBSW: number;
  blackOilSGG: number;
  blackOilSGO: number;
  blackOilViscosity1: number;
  blackOilViscosity2: number;
  blackOilViscosityTemperature1: number;
  blackOilViscosityTemperature2: number;
  blackOilPNAA: number;
  blackOilPNAN: number;
  blackOilPNAP: number;
  ion: boolean;
  salt: boolean;
  hydratedSalt: boolean;
  hydrationNumber: number;
  charge: number;
  positiveIon: number;
  negativeIon: number;
  positiveIonStoichiometricCoefficient: number;
  negativeIonStoichiometricCoefficient: number;
  stoichiometricSum: number;
  delGfkjmol: number;
  delHfkjmol: number;
  CpJmolK: number;
  TfC: number;
  HfusAtTfkJmol: number;
  densityTC: number;
  densitygmL: number;
  elements: ElementProps[];
}
