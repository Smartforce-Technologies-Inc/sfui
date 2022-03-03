import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFAlertCollapse } from './SFAlertCollapse';

export default {
  title: 'Components/SFAlertCollapse',
  component: SFAlertCollapse,
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    isOpen: false,
    onClose: false
  },
  argTypes: {
    isOpen: {
      description: 'If true, the component is shown.',
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    mountOnEnter: {
      description:
        'By default the child component is mounted immediately along with the parent Transition component. If you want to "lazy mount" the component on the first you can set mountOnEnter. After the first enter transition the component will stay mounted, even on "exited", unless you also specify unmountOnExit.'
    },
    timeout: {
      description: `The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.
      Set to 'auto' to automatically calculate transition time based on height.`
    },
    title: {
      description: 'The title of the alert to display.'
    },
    type: {},
    unmountOnExit: {
      description:
        'Specifies if the transition should be displayed on item unmount.'
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

const AlertStory = ({ isOpen, title, type, onClose, ...args }): JSX.Element => (
  <SFAlertCollapse
    {...args}
    isOpen={isOpen}
    title={title}
    type={type}
    onClose={onClose ? (): void => console.log('onClose') : undefined}
  />
);

export const AlertCollpase = AlertStory.bind({});

export const WithContent = AlertStory.bind({});

WithContent.args = {
  children: (
    <p style={{ padding: '0px', margin: '0px' }}>
      Lorem ipsum dolor sit amet, consect adipiscing elit.
    </p>
  )
};
