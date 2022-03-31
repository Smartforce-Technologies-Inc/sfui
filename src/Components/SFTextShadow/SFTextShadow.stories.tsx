import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFTextShadow, SFTextShadowProps } from './SFTextShadow';

export default {
  title: 'Components/SFTextShadow',
  component: SFTextShadow,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    text: 'Bagel',
    size: 20
  },
  argTypes: {
    angle: {
      description: 'The angle of the text shadow in degrees.'
    },
    blur: {
      description: 'The blur of the text shadow.'
    },
    opacity: {
      description: 'The opacity of the text shadow, rangeing from 0 to 1.'
    },
    text: {
      description: 'The text to apply the shadow on.'
    },
    size: {
      description: 'The size of the text shadow.'
    },
    type: {
      table: {
        disable: true
      }
    },
    color: {
      description: 'The color used in the text shadow.',
      control: 'color'
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
  },
  repeatBgColor: {
    control: 'color'
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
  },
  gradientEndColor: {
    control: 'color'
  }
};
