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
      defaultValue: 'default',
      control: {
        type: 'radio',
        options: ['default', 'primary']
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

export const Default: Story = ({ text, color, ...args }) => {
  return (
    <SFLink
      {...(args as SFLinkProps)}
      color={color === 'default' ? undefined : color}
    >
      {text}
    </SFLink>
  );
};
