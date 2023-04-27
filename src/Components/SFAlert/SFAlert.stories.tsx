import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SFAlert } from './SFAlert';

export default {
  title: 'Components/SFAlert',
  component: SFAlert,
  parameters: {
    controls: { sort: 'alpha', include: ['title', 'type', 'onClose'] }
  },
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    type: 'error'
  },
  argTypes: {
    onClose: {
      description:
        'Callback fired when the component requests to be closed. When provided a close icon button is displayed that triggers the callback when clicked.',
      action: 'onClose',
      control: {
        disabled: true
      },
      table: {
        type: {
          summary: 'func'
        }
      }
    },
    title: {
      description: 'The title of the alert to display.'
    },
    type: {
      description:
        'The type of the alert. This defines the color and icon used.'
    }
  }
} as ComponentMeta<typeof SFAlert>;

const AlertStory = ({ title, type, ...args }): JSX.Element => (
  <SFAlert {...args} title={title} type={type} />
);

export const Alert = AlertStory.bind({});

export const WithContent = AlertStory.bind({});

export const WithoutCloseButton = AlertStory.bind({});

WithContent.args = {
  title: undefined,
  children: (
    <p style={{ padding: '0px', margin: '0px' }}>
      <strong>Lorem ipsum dolor sit amet</strong>, consect adipiscing elit.
    </p>
  )
};

WithoutCloseButton.args = {
  onClose: null
};
WithoutCloseButton.argTypes = {
  onClose: {
    table: {
      disable: true
    }
  }
};
