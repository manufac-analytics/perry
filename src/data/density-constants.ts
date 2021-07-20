import { DIPPRDensityProps } from '../interfaces/utils';

export const DIPPRDensityDictionary: Record<string, DIPPRDensityProps> = {
  Acetaldehyde: {
    name: 'Acetaldehyde',
    formula: 'C2H4O',
    CAS: '75-07-0',
    molecularWeight: 44.05256,
    C1: 1.711365,
    C2: 0.26355,
    C3: 466,
    C4: 0.28571,
    minimumTemperature: 149.78,
    maximumTemperature: 466,
    densityAtMinimumTemperature: 21.423,
    densityAtMaximumTemperature: 6.4935,
  },
  oTerphenyl: {
    name: 'o-Terphenyl',
    formula: 'C18H14',
    CAS: '84-15-1',
    molecularWeight: 230.30376,
    C1: 5.7136,
    C2: -0.003474,
    C3: NaN,
    C4: NaN,
    minimumTemperature: 288.15,
    maximumTemperature: 313.19,
    densityAtMinimumTemperature: 4.7126,
    densityAtMaximumTemperature: 4.6256,
  },
  oTerphenylExtended: {
    name: 'o-Terphenyl',
    formula: 'C18H14',
    CAS: '84-15-1',
    molecularWeight: 230.30376,
    C1: 0.3448,
    C2: 0.25116,
    C3: 857,
    C4: 0.29268,
    minimumTemperature: 329.35,
    maximumTemperature: 857.0,
    densityAtMinimumTemperature: 4.5526,
    densityAtMaximumTemperature: 1.3728,
  },
  Water: {
    name: 'Water',
    formula: 'H2O',
    CAS: '7732-18-5',
    molecularWeight: 18.01528,
    C1: -13.851,
    C2: 0.64038,
    C3: -0.0019124,
    C4: 1.8211e-6,
    minimumTemperature: 273.16,
    maximumTemperature: 353.15,
    densityAtMinimumTemperature: 55.497,
    densityAtMaximumTemperature: 54.001,
  },
  WaterExtended: {
    name: 'Water',
    formula: 'H2O',
    CAS: '7732-18-5',
    molecularWeight: 18.01528,
    C1: 17.874,
    C2: 35.618,
    C3: 19.655,
    C4: -9.1306,
    C5: -31.367,
    C6: -813.56,
    C7: -17421000,
    minimumTemperature: 273.16,
    maximumTemperature: 647.096,
    densityAtMinimumTemperature: 55.487,
    densityAtMaximumTemperature: 17.874,
  },
};

function calculateDIPPRDensityForOTerphenyl(temperature: number): number {
  const densityProps = DIPPRDensityDictionary['oTerphenyl'];
  const densityPropsExtended = DIPPRDensityDictionary['oTerphenylExtended'];
  let density = NaN;
  if (
    temperature >= densityProps.minimumTemperature &&
    temperature <= densityProps.maximumTemperature
  ) {
    density = densityProps.C1 + densityProps.C2 * temperature;
  } else if (
    temperature >= densityPropsExtended.minimumTemperature &&
    temperature <= densityPropsExtended.maximumTemperature
  ) {
    const exponent =
      1 +
      Math.pow(
        1 - temperature / densityPropsExtended.C3,
        densityPropsExtended.C4
      );
    density =
      densityPropsExtended.C1 / Math.pow(densityPropsExtended.C2, exponent);
  }
  return density;
}

function calculateDIPPRDensityForWater(temperature: number): number {
  const densityProps = DIPPRDensityDictionary['Water'];
  const densityPropsExtended = DIPPRDensityDictionary['WaterExtended'];
  let density = NaN;
  if (
    temperature >= densityProps.minimumTemperature &&
    temperature <= densityProps.maximumTemperature
  ) {
    density =
      densityProps.C1 +
      densityProps.C2 * temperature +
      densityProps.C3 * Math.pow(temperature, 2) +
      densityProps.C4 * Math.pow(temperature, 3);
  } else if (
    temperature >= densityPropsExtended.minimumTemperature &&
    temperature < densityPropsExtended.maximumTemperature
  ) {
    const criticalTemperature = 647.096;
    const tau = 1 - temperature / criticalTemperature;
    density =
      densityProps.C1 +
      densityProps.C2 * Math.pow(tau, 1 / 3) +
      densityProps.C3 * Math.pow(tau, 2 / 3) +
      densityProps.C4 * Math.pow(tau, 5 / 3) +
      (densityProps.C5 as number) * Math.pow(tau, 16 / 3) +
      (densityProps.C6 as number) * Math.pow(tau, 43 / 3) +
      (densityProps.C7 as number) * Math.pow(tau, 110 / 3);
  } else if (
    Math.abs(temperature - densityPropsExtended.maximumTemperature) < 1e-4
  ) {
    density = densityPropsExtended.densityAtMaximumTemperature;
  }
  return density;
}

export function calculateDIPPRDensity(
  compound: string,
  temperature: number
): number {
  const densityProps: DIPPRDensityProps | undefined =
    DIPPRDensityDictionary[compound];
  let density = NaN;
  if (compound === 'Water') {
    density = calculateDIPPRDensityForWater(temperature);
  } else if (compound === 'oTerphenyl') {
    density = calculateDIPPRDensityForOTerphenyl(temperature);
  } else if (
    densityProps !== undefined &&
    temperature >= densityProps.minimumTemperature &&
    temperature <= densityProps.maximumTemperature
  ) {
    const exponent =
      1 + Math.pow(1 - temperature / densityProps.C3, densityProps.C4);
    density = densityProps.C1 / Math.pow(densityProps.C2, exponent);
  }
  return density;
}
