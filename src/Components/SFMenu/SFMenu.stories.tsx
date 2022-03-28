import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFMenu, SFMenuProps } from './SFMenu';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

export default {
  title: 'Components/SFMenu',
  component: SFMenu,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    transitionDuration: 'auto',
    open: false
  },
  argTypes: {
    transitionDuration: {
      description: `The length of the transition in ms, or 'auto'.`,
      table: {
        defaultValue: {
          summary: 'auto'
        },
        type: {
          summary: `'auto'
          | number
          | { appear?: number, enter?: number, exit?: number }`
        }
      },
      control: {
        type: 'number'
      }
    },
    open: {
      description: 'If true, the menu is visible.',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    onClose: { action: 'onClose', table: { disable: true } },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFMenuProps> = (args) => {
  const refAnchorEl = React.useRef<HTMLDivElement | null>();

  return (
    <div>
      <div ref={refAnchorEl}>Menu anchorEl element</div>

      <SFMenu {...args} anchorEl={refAnchorEl ? refAnchorEl.current : null}>
        <SFMenuItem>Bagel 1</SFMenuItem>
        <SFMenuItem>Bagel 2</SFMenuItem>
        <SFMenuItem>Bagel 3</SFMenuItem>
      </SFMenu>
    </div>
  );
};
export const Default = Template.bind({});
