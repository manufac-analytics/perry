export const Colors = {
  Silver: "silver",
  White: "white",
  Colorless: "colorless",
  Yellow: "yellow",
  PaleYellow: "pale-yellow",
  Green: "green",
  Violet: "violet",
  Black: "black",
  Brown: "brown",
  Orange: "orange",
  Purple: "purple",
  Rose: "rose",
  Red: "red",
  SteelGray: "steel-gray",
  LeadGray: "lead-gray",
  Blue: "blue",
  BrickRed: "brick-red",
  RoseRed: "rose-red",
  ScarletRed: "scarlet-red",
  BlueGreen: "blue-green",
  RedYellow: "red-yellow",
  GreenBlack: "green-black",
  BlueBlack: "blue-black"
} as const;
export type Colors = typeof Colors[keyof typeof Colors];

export const CrystallineForms = {
  Amorphous: "amorphous",
  Anhydrous: "anhydrous",
  Cubic: "cubic",
  Crystalline: "crystalline",
  Deliquescent: "deliquescent",
  DeliquescentCrystal: "deliquescent-crystal",
  CrystallinePowder: "crystalline-powder",
  Hexagonal: "hexagonal",
  Hygroscopic: "hygroscopic",
  Monoclinic: "monoclinic",
  Needles: "needles",
  Octahedral: "octahedral",
  Powder: "powder",
  Plates: "plates",
  Prismatic: "prismatic",
  Rhombic: "rhombic",
  Tetragonal: "tetragonal",
  Triclinic: "triclinic",
  Trigonal: "trigonal",
  Liquid: "liquid",
  Gas: "gas",
  Porous: "porous"
} as const;
export type CrystallineForms = typeof CrystallineForms[keyof typeof CrystallineForms];

export const SpecificGravityReference = {
  Water: "water",
  Air: "air",
  Hydrogen: "hydrogen"
} as const;
export type SpecificGravityReference = typeof SpecificGravityReference[keyof typeof SpecificGravityReference];

export const MeasureKind = {
  Greater: "greater",
  Less: "less",
  Approximate: "approximate"
} as const;
export type MeasureKind = typeof MeasureKind[keyof typeof MeasureKind];
