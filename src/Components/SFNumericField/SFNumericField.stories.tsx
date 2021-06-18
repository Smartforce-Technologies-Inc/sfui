import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFNumericField } from './SFNumericField';

export default {
  title: 'Components/SFNumericField',
  component: SFNumericField,
  args: {
    label: 'Bagel'
  },
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    thousandSeparator: {
      control: {
        type: 'boolean'
      }
    },
    decimalScale: {
      defaultValue: 2,
      control: {
        min: 0,
        max: 10,
        type: 'range',
        step: 1
      }
    },
    fixedDecimalScale: {
      control: {
        type: 'boolean'
      }
    },
    allowNegative: {
      control: {
        type: 'boolean'
      }
    },
    prefix: {
      control: {
        type: 'text'
      }
    },
    suffix: {
      control: {
        type: 'text'
      }
    },
    format: {
      control: {
        type: 'text'
      }
    },
    mask: {
      control: {
        type: 'text'
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
