import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFLink, SFLinkProps } from './SFLink';

export default {
  title: 'Components/SFLink',
  component: SFLink,
  argTypes: {
    onClick: {
      action: 'onClick',
      table: {
        disable: true
      }
    },
    text: {
      defaultValue: 'I am a link example',
      control: {
        type: 'text'
      }
    },
    color: {
      defaultValue: 'inherited',
      control: {
        type: 'radio',
        options: ['inherited', 'primary']
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    variantMapping: {
      table: {
        disable: true
      }
    },
    TypographyClasses: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Default: Story = ({ text, ...args }) => {
  return <SFLink {...(args as SFLinkProps)}>{text}</SFLink>;
};
