import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFTextShadow, SFTextShadowProps } from './SFTextShadow';

export default {
  title: 'Components/SFTextShadow',
  component: SFTextShadow,
  args: {
    text: 'Bagel',
    size: 20
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFTextShadowProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      fontSize: '80px',
      marginTop: '50px'
    }}
  >
    <SFTextShadow {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  color: '#fcc'
};
Default.argTypes = {
  repeatTimes: {
    table: {
      disable: true
    }
  },
  repeatBgColor: {
    table: {
      disable: true
    }
  },
  gradientEndColor: {
    table: {
      disable: true
    }
  }
};

export const Repeated = Template.bind({});
Repeated.args = {
  type: 'repeated',
  color: '#000',
  size: 21,
  repeatTimes: 3,
  repeatBgColor: '#fff'
};
Repeated.argTypes = {
  gradientEndColor: {
    table: {
      disable: true
    }
  }
};

export const Gradient = Template.bind({});
Gradient.args = {
  type: 'gradient',
  color: 'rgb(2,172,181)',
  gradientEndColor: 'rgb(26,255,213)'
};
Gradient.argTypes = {
  repeatTimes: {
    table: {
      disable: true
    }
  },
  repeatBgColor: {
    table: {
      disable: true
    }
  }
};
