import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SFPeoplePicker,
  SFPeoplePickerProps,
  SFPeopleOption
} from './SFPeoplePicker';

interface ApiPeople {
  name: string;
  avatarUrl?: string;
}

export default {
  title: 'Components/SFPeoplePicker',
  component: SFPeoplePicker,
  args: {
    label: 'Bagel'
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta;

const Template: Story<SFPeoplePickerProps> = (args) => (
  <SFPeoplePicker
    {...args}
    isAsync
    formatUrlQuery={(value: string): string =>
      `https://mocki.io/v1/fa0ef003-9197-4eb1-98f0-f7e29c7096d1`
    }
    formatOption={(option: unknown): SFPeopleOption => ({
      name: (option as ApiPeople).name,
      avatarUrl: (option as ApiPeople).avatarUrl
    })}
  />
);

export const Default = Template.bind({});
