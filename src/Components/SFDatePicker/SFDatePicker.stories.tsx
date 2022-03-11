import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFDatePicker, SFDatePickerProps } from './SFDatePicker';

export default {
  title: 'Components/SFDatePicker',
  component: SFDatePicker,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'mm/dd/yyyy'
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
      description: 'The label content.',
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
      description: '	The helper text content.',
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
    <SFDatePicker error {...args} />
    <SFDatePicker disabled {...args} />
    <SFDatePicker value={Date.now()} {...args} />
    <SFDatePicker
      value={Date.now()}
      helperText='Error message'
      error
      {...args}
    />
    <SFDatePicker
      value={Date.now()}
      helperText='Helper message'
      disabled
      {...args}
    />
  </div>
);

export const AllTogether = AllTemplate.bind({});
AllTogether.parameters = {
  controls: {
    disabled: true
  }
};
