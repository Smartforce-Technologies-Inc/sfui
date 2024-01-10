import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SFCounter, SFCounterProps } from './SFCounter';

export default {
  title: 'Components/SFCounter',
  component: SFCounter,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    value: 0,
    disabled: false
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof SFCounter>;

const Template: ComponentStory<typeof SFCounter> = (args) => {
  const [value, setValue] = React.useState<number>(args.value);
  return (
    <SFCounter
      {...args}
      value={value}
      onChange={(value: number): void => setValue(value)}
    />
  );
};

export const Default = Template.bind({});
