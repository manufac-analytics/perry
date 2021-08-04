export interface ElementProps {
  name: string;
  appearance?: string;
  atomicMass: number;
  boil?: number;
  category: string;
  color?: string;
  /**
   * Given in `g/l` for gases and `g/cm³` for solids and liquids
   */
  density?: number;
  discoveredBy?: string;
  melt?: number;
  /**
   * In (mol*K)
   */
  molarHeat?: number;
  namedBy?: string;
  number: number;
  period: number;
  phase: string;
  source: string;
  spectralImage?: string;
  summary: string;
  symbol: string;
  xPosition: number;
  yPosition: number;
  shells: number[];
  electronConfiguration: string;
  electronConfigurationSemantic: string;
  electronAffinity?: number;
  electronegativityPauling?: number;
  ionizationEnergies?: number[];
}
