export interface SFColorProps {
  A100?: string;
  A200?: string;
  A400?: string;
  A700?: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

const SFBlue: SFColorProps = {
  50: '#E5F6FF',
  100: '#CCEBFF',
  200: '#80C6FF',
  300: '#5CADFF',
  400: '#338FFF',
  500: '#0066FF',
  600: '#0050E6',
  700: '#003DCC',
  800: '#002699',
  900: '#001466'
};

const SFRed: SFColorProps = {
  50: '#FCEEEF',
  100: '#F9DCDE',
  200: '#F0A8AD',
  300: '#EB8E95',
  400: '#E7747C',
  500: '#DB343E',
  600: '#C7232E',
  700: '#AD1F29',
  800: '#821724',
  900: '#5F111E'
};

const SFGrey: SFColorProps = {
  A100: '#CCCCCC',
  A200: '#B2B2B2',
  A400: '#333333',
  A700: '#666666',
  50: '#F2F2F2',
  100: '#E5E5E5',
  200: '#CCCCCC',
  300: '#B2B2B2',
  400: '#999999',
  500: '#808080',
  600: '#666666',
  700: '#4D4D4D',
  800: '#333333',
  900: '#1A1A1A'
};

const SFBlueMainLight = SFBlue[500];
const SFBlueMainDark = SFBlue[200];

const SFRedMainLight = SFRed[700];
const SFRedMainDark = SFRed[200];

const SFGreyMainLight = SFGrey[600];
const SFGreyMainDark = SFGrey[400];

const SFBackgroundLight = '#FAFAFA';
const SFBackgroundDark = '#121212';

const SFSurfaceLight = '#FFFFFF';
const SFSurfaceDark = '#1F1F1F';

const SFTextWhite = '#F2F2F2';
const SFTextBlack = '#1A1A1A';

const SFCommonWhite = '#FFFFFF';
const SFCommonBlack = '#000000';

export {
  SFBlue,
  SFBlueMainLight,
  SFBlueMainDark,
  SFRed,
  SFRedMainLight,
  SFRedMainDark,
  SFGrey,
  SFGreyMainLight,
  SFGreyMainDark,
  SFBackgroundLight,
  SFBackgroundDark,
  SFSurfaceLight,
  SFSurfaceDark,
  SFTextWhite,
  SFTextBlack,
  SFCommonWhite,
  SFCommonBlack
};
