import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  SFDropdownField,
  SFDropdownFieldProps,
  SFDropdownFieldOption
} from './SFDropdownField';

const getOptions = (): SFDropdownFieldOption[] => {
  return [
    {
      label: 'Option One',
      onClick: (): void => console.log('Option One Clicked!')
    },
    {
      label: 'Option Two',
      onClick: (): void => console.log('Option Two Clicked!')
    },
    {
      label: 'Option Three',
      onClick: (): void => console.log('Option Three Clicked!')
    }
  ];
};

const getOptionsWithDisabled = (): SFDropdownFieldOption[] => {
  const options: SFDropdownFieldOption[] = getOptions();
  options[2].disabled = true;
  return options;
};

export default {
  title: 'Components/SFDropdownField',
  component: SFDropdownField,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    options: getOptions(),
    openButtonAriaLabel: 'Open dropdown'
  },
  argTypes: {
    sfColor: {
      description: 'The color of the button.'
    },
    size: {
      description: 'The size of the button.'
    },
    variant: {
      description: 'The variant to use.'
    },
    options: {
      table: {
        disable: true
      }
    },
    defaultSelected: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFDropdownFieldProps> = (args) => (
  <SFDropdownField {...args} />
);

export const Default = Template.bind({});

export const WithDisabledOption = Template.bind({});
WithDisabledOption.args = {
  options: getOptionsWithDisabled()
};

export const WithDefaultOption = Template.bind({});
WithDefaultOption.args = {
  defaultSelected: 1
};
WithDefaultOption.argTypes = {
  defaultSelected: {
    control: {
      type: 'number',
      min: 0,
      max: 2
    },
    table: {
      disable: false
    }
  }
};

WithDefaultOption.args = {
  defaultSelected: 1
};
