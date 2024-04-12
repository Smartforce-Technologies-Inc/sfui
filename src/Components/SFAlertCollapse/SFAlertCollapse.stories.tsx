import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { SFAlertCollapse } from './SFAlertCollapse';

export default {
  title: 'Components/SFAlertCollapse',
  component: SFAlertCollapse,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['isOpen', 'timeout', 'title', 'type', 'onClose']
    }
  },
  args: {
    isOpen: false,
    mountOnEnter: true,
    timeout: 'auto',
    title: 'Lorem ipsum dolor sit amet.',
    type: 'error',
    unmountOnExit: true
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
    onClose: {
      description:
        'Callback fired when the component requests to be closed. When provided a close icon button is displayed that triggers the callback when clicked.',
      action: 'onClose',
      control: false,
      table: {
        type: {
          summary: 'func'
        }
      }
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
    }
  }
} as ComponentMeta<typeof SFAlertCollapse>;

const AlertCollapseStory = ({ isOpen, title, type, ...args }): JSX.Element => (
  <SFAlertCollapse {...args} isOpen={isOpen} title={title} type={type} />
);

export const AlertCollpase = AlertCollapseStory.bind({});

export const WithContent = AlertCollapseStory.bind({});

WithContent.args = {
  children: (
    <p style={{ padding: '0px', margin: '0px' }}>
      Lorem ipsum dolor sit amet, consect adipiscing elit.
    </p>
  )
};
