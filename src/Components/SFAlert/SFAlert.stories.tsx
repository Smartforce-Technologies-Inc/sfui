import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SFAlert } from './SFAlert';

export default {
  title: 'Components/SFAlert',
  component: SFAlert,
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    type: 'error',
    onClose: false
  },
  argTypes: {
    title: {
      description: 'The title of the alert to display.'
    },
    type: {
      description:
        'The type of the alert. This defines the color and icon used.'
    },
    onClose: {
      description:
        'Callback fired when the component requests to be closed. When provided a close icon button is displayed that triggers the callback when clicked.',
      action: 'onClose',
      table: {
        type: {
          summary: 'func'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const AlertStory = ({
  showCloseButton,
  title,
  type,
  onClose,
  ...args
}): JSX.Element => (
  <SFAlert
    {...args}
    title={title}
    type={type}
    onClose={onClose ? () => console.log('onClose') : undefined}
  />
);

export const Alert = AlertStory.bind({});

export const WithContent = AlertStory.bind({});

WithContent.args = {
  title: undefined,
  children: (
    <p style={{ padding: '0px', margin: '0px' }}>
      <strong>Lorem ipsum dolor sit amet</strong>, consect adipiscing elit.
    </p>
  )
};
