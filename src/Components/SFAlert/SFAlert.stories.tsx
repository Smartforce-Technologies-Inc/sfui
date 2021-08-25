import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFAlert, SFAlertProps } from './SFAlert';

export default {
  title: 'Components/SFAlert',
  component: SFAlert,
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    children: (
      <p style={{ padding: '0px', margin: '0px' }}>
        Lorem ipsum dolor sit amet, consect adipiscing elit.
      </p>
    )
  }
} as Meta;

export const Alert = (args: SFAlertProps): JSX.Element => <SFAlert {...args} />;
