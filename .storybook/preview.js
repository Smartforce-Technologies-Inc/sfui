import React from 'react';
import { SFThemeProvider, createSFTheme } from '../src/SFTheme/SFTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: [
      { name: 'Day Mode', value: '#FAF9F8' },
      { name: 'Day Mode Component', value: '#FFFFFF' },
      { name: 'Night Mode', value: '#1A1A1A' },
      { name: 'Night Mode Component', value: '#1F1F1F' }
    ]
  }
};

const theme = createSFTheme('day');
export const decorators = [
  (Story) => (
    <SFThemeProvider theme={theme} style={{ padding: '1em' }}>
      <Story />
    </SFThemeProvider>
  )
];
