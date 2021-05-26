const Adjectives = {
  Light: 'light',
  Dark: 'dark',
  Very: 'very',
  Slightly: 'slightly',
  Slowly: 'slowly',
  VerySlightly: 'very-slightly',
  Pseudo: 'pseudo',
  Stable: 'stable',
  Unstable: 'unstable',
  FairlyStable: 'fairly-stable',
  Empty: '',
} as const;
type Adjectives = typeof Adjectives[keyof typeof Adjectives];
