import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFAlertCollapse } from './SFAlertCollapse';

export default {
  title: 'Components/SFAlertCollapse',
  component: SFAlertCollapse,
  args: {
    title: 'Lorem ipsum dolor sit amet.'
  },
  argTypes: {
    title: {
      description: 'The title of the alert to display.'
    },
    isOpen: {
      description: 'If true, the component is shown.',
      defaultValue: false,
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
    unmountOnExit: {
      description:
        'Specifies if the transition should be displayed on item unmount.'
    },
    timeout: {
      description: `The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.
      Set to 'auto' to automatically calculate transition time based on height.`
    },
    onClose: {
      action: 'onClose',
      table: {
        disable: true
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
    },
    showCloseButton: {
      defaultValue: true,
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const AlertCollpase = ({
  isOpen,
  title,
  type,
  onClose,
  ...args
}): JSX.Element => (
  <SFAlertCollapse
    {...args}
    isOpen={isOpen}
    title={title}
    type={type}
    onClose={(): void => onClose()}
  />
);

export const WithContent = ({
  isOpen,
  title,
  type,
  onClose,
  ...args
}): JSX.Element => (
  <SFAlertCollapse
    {...args}
    isOpen={isOpen}
    title={title}
    type={type}
    onClose={(): void => onClose()}
  >
    <p style={{ padding: '0px', margin: '0px' }}>
      Lorem ipsum dolor sit amet, consect adipiscing elit.
    </p>
  </SFAlertCollapse>
);
