import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFNumericField } from './SFNumericField';

export default {
  title: 'Components/SFNumericField',
  component: SFNumericField,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel',
    decimalScale: 2
  },
  argTypes: {
    label: {
      description: 'The label asociated to the input value meaning.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'text'
      }
    },
    thousandSeparator: {
      description: 'If true, separates de number in thousands.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    decimalScale: {
      description: 'If defined it limits to given decimal scale.',
      table: {
        type: {
          summary: 'number'
        }
      },
      control: {
        min: 0,
        max: 10,
        type: 'range',
        step: 1
      }
    },
    fixedDecimalScale: {
      description: 'If true, fixes the decimal scale of the number shown.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    allowNegative: {
      description: 'If true, negative numbers are allowed.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    allowDecimals: {
      description: 'If true, decimals are allowed.'
    },
    prefix: {
      description: 'Add a prefix before the number.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'text'
      }
    },
    suffix: {
      description: 'Add a suffix after the number.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'text'
      }
    },
    format: {
      description: 'If provided, formats the input value.',
      table: {
        type: {
          summary: 'string | func'
        }
      },
      control: {
        type: 'text'
      }
    },
    mask: {
      table: {
        disable: true
      }
    },
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    numberFormatProps: {
      table: {
        disable: true
      }
    },
    focused: {
      table: {
        disable: true
      }
    },
    hiddenLabel: {
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

const Template: Story = ({
  thousandSeparator,
  decimalSeparator,
  decimalScale,
  fixedDecimalScale,
  allowNegative,
  allowLeadingZeros,
  prefix,
  suffix,
  format,
  mask,
  ...args
}) => {
  const [value, setValue] = React.useState<string>('');

  return (
    <div>
      <SFNumericField
        {...args}
        value={value}
        onChange={(e): void => setValue(e.target.value)}
        numberFormatProps={{
          thousandSeparator,
          decimalScale,
          fixedDecimalScale,
          allowNegative,
          allowLeadingZeros,
          prefix,
          suffix,
          format,
          mask
        }}
      />

      <div style={{ marginTop: 30, fontSize: 12 }}>
        <p>
          This component was built with the
          <a href='https://github.com/s-yadav/react-number-format'>
            <code> react-format-number</code>
          </a>{' '}
          library.
        </p>

        <p>
          This component is not controlled, but it's still possible to prevent
          undesirable values using the <code>isAllowed</code> prop
        </p>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
