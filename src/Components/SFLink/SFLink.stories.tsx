import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SFLink, SFLinkProps } from './SFLink';

export default {
  title: 'Components/SFLink',
  component: SFLink,
  parameters: {
    controls: { sort: 'alpha', include: ['sfColor', 'sfSize', 'text'] }
  },
  args: {
    text: 'I am a link example',
    sfColor: 'default',
    sfSize: 'medium'
  },
  argTypes: {
    onClick: {
      action: 'onClick'
    },
    text: {
      description: 'The text to display.',
      control: {
        type: 'text'
      }
    },
    sfColor: {
      description: 'The color of the link.',
      options: ['default', 'primary'],
      control: {
        type: 'radio'
      }
    },
    sfSize: {
      description: 'The size of the link.'
    }
  }
} as ComponentMeta<typeof SFLink>;

export const Default: Story = ({ text, ...args }) => {
  return <SFLink {...args}>{text}</SFLink>;
};
