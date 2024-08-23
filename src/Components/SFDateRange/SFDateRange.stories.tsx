import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFDateRange, SFDateRangeProps, SFDateRangeValue } from './SFDateRange';

export default {
  title: 'Components/SFDateRange',
  component: SFDateRange,
  parameters: { controls: { sort: 'alpha' } },
  argTypes: {
    initialRange: {
      table: {
        type: {
          summary: 'n'
        }
      },
      control: {
        type: 'number',
        min: 1
      }
    },
    disableFuture: {
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    error: {
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    min: {
      table: {
        type: {
          summary: 'date'
        }
      },
      control: {
        type: 'date'
      }
    },
    max: {
      table: {
        type: {
          summary: 'date'
        }
      },
      control: {
        type: 'date'
      }
    },
    value: {
      action: 'onChange',
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

const Template: Story<SFDateRangeProps> = (args) => {
  return <SFDateRange {...args} />;
};

export const Default = Template.bind({});

export const Playground: Story<SFDateRangeProps> = (args) => {
  const [value, setValue] = useState<SFDateRangeValue>();

  return (
    <SFDateRange {...args} value={value} onChange={(v): void => setValue(v)} />
  );
};
