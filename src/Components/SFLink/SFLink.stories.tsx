import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFLink, SFLinkProps } from './SFLink';

export default {
  title: 'Components/SFLink',
  component: SFLink
} as Meta;

const Template: Story<SFLinkProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      justifyItems: 'center',
      alignItems: 'center'
    }}
  >
    <SFLink {...args} sfSize='medium'>
      I am a link example
    </SFLink>
    <SFLink {...args} sfSize='small'>
      I am a link example
    </SFLink>
  </div>
);

export const Default = Template.bind({});
Default.argTypes = {
  onClick: { action: 'clicked' }
};
export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};
Primary.argTypes = {
  onClick: { action: 'clicked' }
};
