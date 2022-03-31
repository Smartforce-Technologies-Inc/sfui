import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  SFSplitButton,
  SFSplitButtonProps,
  SFSplitButtonOption
} from './SFSplitButton';

const getOptions = (): SFSplitButtonOption[] => {
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

const getOptionsWithDisabled = (): SFSplitButtonOption[] => {
  const options: SFSplitButtonOption[] = getOptions();
  options[2].disabled = true;
  return options;
};

export default {
  title: 'Components/SFSplitButton',
  component: SFSplitButton,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    options: getOptions()
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

const Template: Story<SFSplitButtonProps> = (args) => (
  <SFSplitButton {...args} />
);

export const Default = Template.bind({});

export const WithDisabledOption = Template.bind({});
WithDisabledOption.args = {
  options: getOptionsWithDisabled()
};

export const WithDefaultOption = Template.bind({});
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
