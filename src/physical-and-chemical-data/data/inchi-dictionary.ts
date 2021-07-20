import { INCHIProps } from '../interfaces/utils';

export const INCHIDictionary: Record<string, INCHIProps> = {
  Aluminum: {
    inchiString: 'InChI=1S/Al',
    inchiKey: 'XAGFODPZIPBFFR-UHFFFAOYSA-N',
  },
  NormalAluminumAcetate: {
    inchiString: 'InChI=1S/3C2H4O2.Al/c3*1-2(3)4;/h3*1H3,(H,3,4);/q;;;+3/p-3',
    inchiKey: 'WCOATMADISNSBV-UHFFFAOYSA-K',
  },
  BasicAluminumAcetate: {
    inchiString:
      'InChI=1S/2C2H4O2.Al.H2O/c2*1-2(3)4;;/h2*1H3,(H,3,4);;1H2/q;;+3;/p-3',
    inchiKey: 'HQQUTGFAWJNQIP-UHFFFAOYSA-K',
  },
  AluminumBromide: {
    inchiString: 'InChI=1S/Al.3BrH/h;3*1H/q+3;;;/p-3',
    inchiKey: 'PQLAYKMGZDUDLQ-UHFFFAOYSA-K',
  },
  AluminumBromideHexahydrate: {
    inchiString: '',
    inchiKey: '',
  },
  AluminumCarbide: {
    inchiString: 'InChI=1S/3C.4Al',
    inchiKey: 'CAVCGVPGBKGDTG-UHFFFAOYSA-N',
  },
  AluminumChloride: {
    inchiString: 'InChI=1S/Al.3ClH/h;3*1H/q+3;;;/p-3',
    inchiKey: 'VSCWAEJMTAWNJL-UHFFFAOYSA-K',
  },
  AluminumChlorideHexahydrate: {
    inchiString: 'InChI=1S/Al.3ClH.6H2O/h;3*1H;6*1H2/q+3;;;;;;;;;/p-3',
    inchiKey: 'JGDITNMASUZKPW-UHFFFAOYSA-K',
  },
  AluminumFluorideHydrate: {
    inchiString: 'InChI=1S/Al.3FH.H2O/h;3*1H;1H2/q+3;;;;/p-3',
    inchiKey: 'XTXFDUABTPNTFB-UHFFFAOYSA-K',
  },
  DialuminumHexafluoride: {
    inchiString: '',
    inchiKey: '',
  },
  AluminumHydroxide: {
    inchiString: 'InChI=1S/Al.3H2O/h;3*1H2/q+3;;;/p-3',
    inchiKey: 'WNROFYMDJYEPJX-UHFFFAOYSA-K',
  },
  AluminumNitrateNonahydrate: {
    inchiKey: 'SWCIQHXIXUMHKA-UHFFFAOYSA-N',
    inchiString:
      'InChI=1S/Al.3NO3.9H2O/c;3*2-1(3)4;;;;;;;;;/h;;;;9*1H2/q+3;3*-1;;;;;;;;;',
  },
  DialuminumNitride: {
    inchiString: '',
    inchiKey: '',
  },
  AluminumOxide: {
    inchiString: 'InChI=1S/2Al.3O/q2*+3;3*-2',
    inchiKey: 'PNEYBMLMFCGWSK-UHFFFAOYSA-N',
  },
  AluminumOxideCorundum: {
    inchiString: 'InChI=1S/2Al.3O',
    inchiKey: 'TWNQGVIAIRXVLR-UHFFFAOYSA-N',
  },
  AluminumPhosphate: {
    inchiString: 'InChI=1S/Al.H3O4P/c;1-5(2,3)4/h;(H3,1,2,3,4)/q+3;/p-3',
    inchiKey: 'ILRRQNADMUWWFW-UHFFFAOYSA-K',
  },
};
