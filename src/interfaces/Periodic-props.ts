export interface PeriodicProps {
  name: string;
  appearance?: string;
  atomicMass: number;
  boil?: number;
  category: string;
  color?: string;
  density?: number;
  discoveredBy?: string;
  melt?: number;
  molarHeat?: number;
  namedBy?: string;
  number: number;
  period: number;
  phase: string;
  source: string;
  spectralImg?: string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  shells: number[];
  electronConfiguration: string;
  electronConfigurationSemantic: string;
  electronAffinity?: number;
  electronegativityPauling?: number;
  ionizationEnergies?: number[];
}
