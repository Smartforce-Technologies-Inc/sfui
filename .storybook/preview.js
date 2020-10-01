import React from 'react';
import StorybookWrapper from '../src/StorybookWrapper/StorybookWrapper';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  backgrounds: {
    values: [
      { name: 'Day Mode', value: '#FAFAFA' },
      { name: 'Day Mode Component', value: '#FFFFFF' },
      { name: 'Night Mode', value: '#121212' },
      { name: 'Night Mode Component', value: '#1F1F1F' }
    ]
  }
};

export const decorators = [
  (Story) => <StorybookWrapper children={<Story />} />
];
