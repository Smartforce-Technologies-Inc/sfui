import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFCounter, SFCounterProps } from './SFCounter';

export default {
  title: 'Components/SFCounter',
  component: SFCounter,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    value: 0,
    disabled: false,
    decrementButtonProps: { 'aria-label': 'Decrement value' },
    incrementButtonProps: { 'aria-label': 'Increment value' },
    numericFieldProps: { inputProps: { 'aria-label': 'Counter input value' } }
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFCounterProps> = (args) => {
  const [value, setValue] = React.useState<number>(args.value);
  console.log(args);
  return (
    <SFCounter
      {...args}
      value={value}
      onChange={(value: number): void => setValue(value)}
    />
  );
};

export const Default = Template.bind({});
