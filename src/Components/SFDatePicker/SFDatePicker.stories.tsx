import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFDatePicker, SFDatePickerProps } from './SFDatePicker';

export default {
  title: 'Components/SFDatePicker',
  component: SFDatePicker,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel',
    KeyboardButtonProps: { 'aria-label': 'Open calendar' },
    leftArrowButtonProps: { 'aria-label': 'See previous month' },
    rightArrowButtonProps: { 'aria-label': 'See next month' }
  },
  argTypes: {
    onChange: { action: 'onChange', table: { disable: true } },
    value: {
      description: 'Datepicker value.',
      table: {
        type: {
          summary: 'ParsableDate'
        }
      },
      control: {
        type: 'date'
      }
    },
    label: {
      description: 'The label asociated to the input value meaning.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    disabled: {
      description: 'Disable picker and text field.',
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
      description: 'Displays the error state.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    helperText: {
      description: 'Text to help understand input values.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'text'
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFDatePickerProps> = (args) => {
  return <SFDatePicker {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: Date.now()
};

export const Empty = Default.bind({});
Empty.argTypes = {
  value: {
    table: {
      disable: true
    }
  }
};

const AllTemplate: Story<SFDatePickerProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      columnGap: '16px',
      rowGap: '10px'
    }}
  >
    <SFDatePicker {...args} />
    <SFDatePicker {...args} error />
    <SFDatePicker {...args} disabled />
    <SFDatePicker {...args} value={Date.now()} />
    <SFDatePicker
      {...args}
      helperText='Error message'
      error
      value={Date.now()}
    />
    <SFDatePicker
      {...args}
      helperText='Helper message'
      disabled
      value={Date.now()}
    />
  </div>
);

export const AllTogether = AllTemplate.bind({});
AllTogether.parameters = {
  controls: {
    disable: true
  }
};
