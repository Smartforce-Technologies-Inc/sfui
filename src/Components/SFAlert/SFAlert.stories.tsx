import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFAlert, SFAlertProps } from './SFAlert';
import { SFButton } from '../SFButton/SFButton';

export default {
  title: 'Components/SFAlert',
  component: SFAlert,
  args: {
    title: 'Lorem Ipsum',
    leftButton: <SFButton sfColor='red'>Cancel</SFButton>,
    rightButton: <SFButton sfColor='blue'>Agree</SFButton>,
    open: true
  },
  argTypes: {
    onClose: { action: 'onClose' },
    actions: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFAlertProps> = (args) => (
  <SFAlert {...args}>
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  </SFAlert>
);

export const Default = Template.bind({});
