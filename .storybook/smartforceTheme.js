import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#1f1f1f',
  colorSecondary: '#0084FF',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#B1B1B1',
  appBorderRadius: 0,

  // Typography
  fontBase:
    '"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", sans-serif',
  fontCode:
    '"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", sans-serif',

  // Text colors
  textColor: '#1f1f1f',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#0084FF',
  barBg: '#212121',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#B1B1B1',
  inputTextColor: '#333333',
  inputBorderRadius: 2,

  brandTitle: 'Smartforce',
  brandUrl: 'https://smartforcetech.com/#/home',
  brandImage:
    'https://adventoscorp.github.io/SFPublic/assets/branding/sf_logo.png'
});
