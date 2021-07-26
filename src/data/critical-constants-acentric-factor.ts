import { DIPPRCriticalConstantAndAcentricFactorProps } from '../interfaces/utils';

export const DIPPRThermalConductivityDictionary: Record<
  string,
  DIPPRCriticalConstantAndAcentricFactorProps
> = {
  Acetaldehyde: {
    name: 'Acetaldehyde',
    formula: 'C2H4O',
    CAS: '75-07-0',
    molecularWeight: 44.05256,
    criticalTemperature: 446,
    criticalPressure: 5.57,
    criticalVolume: 0.154,
    criticalCompressibilityFactor: 0.221,
    acentricFactor: 0.262493,
  },
};