import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SFTextShadow } from './SFTextShadow';

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
    color: {
      description: 'The color used in the text shadow.',
      control: 'color'
    }
  }
} as ComponentMeta<typeof SFTextShadow>;

const Template: ComponentStory<typeof SFTextShadow> = (args) => (
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
Default.parameters = {
  controls: {
    exclude: ['type', 'repeatTimes', 'repeatBgColor', 'gradientEndColor']
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
Repeated.parameters = {
  controls: {
    exclude: ['type', 'gradientEndColor']
  }
};
Repeated.argTypes = {
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
Gradient.parameters = {
  controls: {
    exclude: ['type', 'repeatTimes', 'repeatBgColor']
  }
};
Gradient.argTypes = {
  gradientEndColor: {
    control: 'color'
  }
};
