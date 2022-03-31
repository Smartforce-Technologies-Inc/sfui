import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFTextField, SFTextFieldProps } from './SFTextField';

export default {
  title: 'Components/SFTextField',
  component: SFTextField,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel',
    value: 'Some text',
    type: 'text'
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    disabled: {
      description: 'If true, the component will be disabled.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    error: {
      description: 'If true, the component will display the error state.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
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
    label: {
      description: 'The label asociated to the input value meaning.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    multiline: {
      description: 'If true, the textfield becames multiline input.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    focused: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    hiddenLabel: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    type: {
      description: `Type of the input element. It should be a valid HTML5 input type.`,
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    value: {
      description: 'The value of the input element.',
      table: {
        type: {
          summary: 'any'
        }
      }
    },
    defaultValue: {
      table: {
        disable: true
      }
    },
    variant: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFTextFieldProps> = (args) => <SFTextField {...args} />;

export const Default = Template.bind({});
Default.argTypes = {
  value: {
    control: {
      type: 'text'
    }
  },
  type: {
    options: ['text', 'password'],
    control: {
      type: 'select'
    }
  }
};

Default.args = {
  value: 'Some text',
  type: 'text'
};

export const Number = Template.bind({});

Number.argTypes = {
  value: {
    control: {
      type: 'number'
    }
  },
  type: {
    table: {
      disable: true
    }
  }
};

Number.args = {
  type: 'number',
  value: 20
};

const AllTemplate: Story<SFTextFieldProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      columnGap: '16px'
    }}
  >
    <SFTextField {...args} />
    <SFTextField {...args} error helperText='Incorrect value' />
    <SFTextField {...args} disabled />
    <SFTextField {...args} value='' helperText='Helper message' />
  </div>
);

export const AllTogether = AllTemplate.bind({});
AllTogether.parameters = {
  controls: {
    disable: true
  }
};
