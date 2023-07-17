import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SFSplitButton, SFSplitButtonOption } from './SFSplitButton';

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
  parameters: {
    controls: { sort: 'alpha', exclude: ['options', 'defaultSelected'] }
  },
  args: {
    options: getOptions()
  },
  argTypes: {
    sfColor: {
      defaultValue: 'blue',
      description: 'The color of the button.'
    },
    size: {
      defaultValue: 'medium',
      description: 'The size of the button.'
    },
    variant: {
      defaultValue: 'contained',
      description: 'The variant to use.'
    }
  }
} as ComponentMeta<typeof SFSplitButton>;

const Template: ComponentStory<typeof SFSplitButton> = (args) => (
  <SFSplitButton {...args} />
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
