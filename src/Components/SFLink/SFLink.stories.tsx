import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFLink, SFLinkProps } from './SFLink';

export default {
  title: 'Components/SFLink',
  component: SFLink,
  parameters: {
    controls: { sort: 'alpha', include: ['color', 'sfSize', 'text'] }
  },
  args: {
    text: 'I am a link example',
    color: 'inherited',
    sfSize: 'medium'
  },
  argTypes: {
    onClick: {
      action: 'onClick',
      table: {
        disable: true
      }
    },
    text: {
      description: 'The text to display.',
      control: {
        type: 'text'
      }
    },
    color: {
      description: 'The color of the link.',
      options: ['inherited', 'primary'],
      control: {
        type: 'radio'
      }
    },
    sfSize: {
      description: 'The size of the link.'
    }
  }
} as Meta;

export const Default: Story = ({ text, ...args }) => {
  return <SFLink {...(args as SFLinkProps)}>{text}</SFLink>;
};
