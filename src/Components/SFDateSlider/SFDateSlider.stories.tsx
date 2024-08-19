import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFDateSlider, SFDateSliderProps } from './SFDateSlider';

export default {
  title: 'Components/SFDateSlider',
  component: SFDateSlider,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    minDate: '2023-11-28T22:15',
    maxDate: '2023-11-29T06:30',
    disabled: false,
    'aria-label': 'Date slider'
  },
  argTypes: {
    onSliderChange: {
      action: 'onSliderChange',
      table: {
        disable: true
      }
    },
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFDateSliderProps> = ({ minDate, maxDate, ...args }) => {
  const [value, setValue] = React.useState<string[]>([
    '2023-11-28T23:00',
    '2023-11-29T02:15'
  ]);

  const onChange = (value: string[]): void => {
    setValue(value);
  };

  return (
    <div style={{ width: '536px', height: 'auto' }}>
      <SFDateSlider
        {...args}
        minDate={minDate}
        maxDate={maxDate}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const Default = Template.bind({});
