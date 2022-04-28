import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SFPeoplePicker,
  SFPeoplePickerProps,
  SFPeopleOption
} from './SFPeoplePicker';
import { values } from 'lodash';

const options: SFPeopleOption[] = [
  {
    name: 'Andrea Johnson'
  },
  {
    name: 'John Carpenter'
  },
  {
    name: 'John Williams'
  }
];

export default {
  title: 'Components/SFPeoplePicker',
  component: SFPeoplePicker,
  args: {
    label: 'Bagel'
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    isAsync: {
      table: {
        disable: true
      }
    },
    options: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    helperText: {
      table: {
        disable: true
      }
    },
    formatUrlQuery: {
      table: {
        disable: true
      }
    },
    formatOption: {
      table: {
        disable: true
      }
    },
    minChar: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFPeoplePickerProps> = (args) => (
  <SFPeoplePicker {...args} />
);

export const Default = Template.bind({});

Default.args = {
  isAsync: false,
  options
};

export const AsyncOptions: Story = () => {
  return (
    <div>
      <p>
        It's possible to get the people options using an api call instead of the
        options array.
      </p>

      <p>
        We need to define the <code>isAsync</code> prop as <code>true</code> and
        define two more props: <code>formatUrlQuery</code> and{' '}
        <code>formatOption</code>.
      </p>

      <code>
        <span>{'<SFPeoplePicker'}</span> <br />
        <div style={{ marginLeft: '20px' }}>
          <span>isAsync</span> <br />
          <span>
            {'formatUrlQuery={(value: string) => API_URL_WITH_QUERY}'}
          </span>
          <br />
          <span>
            {
              'formatOption={(apiResultOption) => ({ name: apiResultOption.full_name })} '
            }
          </span>
        </div>
        <span>{'/>'}</span>
      </code>

      <p>Where,</p>

      <p>
        <code>formatUrlQuery</code> is a function with one parameter, the text
        value of the input, and returns the url to fetch the options.
      </p>

      <p>
        <code>formatOption</code> is a function used to map the options returned
        from the api call to an SFPeopleOption object.
      </p>
    </div>
  );
};

AsyncOptions.parameters = {
  controls: {
    disable: true
  }
};
