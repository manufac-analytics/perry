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
