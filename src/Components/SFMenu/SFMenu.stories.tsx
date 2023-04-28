import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SFMenu, SFMenuProps } from './SFMenu';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

export default {
  title: 'Components/SFMenu',
  component: SFMenu,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['transitionDuration', 'open', 'onClose']
    }
  },
  args: {
    transitionDuration: 'auto',
    open: false
  },
  argTypes: {
    transitionDuration: {
      description: `The duration of the transition in ms, or 'auto'.`,
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
    onClose: { action: 'onClose', table: { disable: true } }
  }
} as ComponentMeta<typeof SFMenu>;

const Template: Story<SFMenuProps> = (args) => {
  const refAnchorEl = React.useRef<HTMLDivElement>(null);

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
