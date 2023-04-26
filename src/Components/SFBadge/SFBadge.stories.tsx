import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFBadge } from './SFBadge';
import { SFBadgeProps, SFIcon, SFIconButton } from '../..';
import { styled } from '@mui/material';

const AnchorOrigins = {
  topLeft: { vertical: 'top', horizontal: 'left' },
  topRight: { vertical: 'top', horizontal: 'right' },
  bottomLeft: { vertical: 'bottom', horizontal: 'left' },
  bottomRight: { vertical: 'bottom', horizontal: 'right' }
};

const headerNote = (): JSX.Element => {
  return (
    <div>
      <p>
        <span>
          <b>NOTE: </b>
        </span>
        You should adjust the badge absolute position, depending on the
        anchorOrigin value set, inside your application code.
      </p>
      <p>For example, if you set: </p>
      <code>anchorOrigin={`{ vertical: 'top', horizontal: 'left' }`}</code>
      <p>you should be to adjust the following class:</p>
      <code>
        .MuiBadge-anchorOriginTopLeft{' '}
        {`{
          top: '14%';
          left: '14%';
          }`}
      </code>
    </div>
  );
};

const CustomBadge = styled(SFBadge)(() => ({
  '.MuiBadge-anchorOriginTopLeft': {
    top: '14%',
    left: '14%'
  },
  '.MuiBadge-anchorOriginTopRight': {
    top: '14%',
    right: '14%'
  },
  '.MuiBadge-anchorOriginBottomLeft': {
    bottom: '14%',
    left: '14%'
  },
  ' .MuiBadge-anchorOriginBottomRight': {
    bottom: '14%',
    right: '14%'
  }
}));

export default {
  title: 'Components/SFBadge',
  component: SFBadge,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['anchorOrigin', 'overlap', 'size', 'value']
    }
  },
  args: {
    value: 2,
    size: 'small',
    overlap: 'circular'
  },
  argTypes: {
    value: {
      description: 'The value of the badge.'
    },
    size: {
      description: 'The size of the value.'
    },
    anchorOrigin: {
      defaultValue: 'topLeft',
      options: Object.keys(AnchorOrigins),
      mapping: AnchorOrigins,
      control: {
        type: 'select',
        labels: {
          topLeft: 'Top Left',
          topRight: 'Top Right',
          botttmLeft: 'Bottom Left',
          bottomRight: 'Bottom Right'
        }
      }
    }
  }
} as Meta;

const BadgeTemplate: Story<SFBadgeProps> = (args) => {
  return (
    <Fragment>
      {headerNote()}
      <h4>Default config</h4>
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <SFBadge {...args}>
          <SFIcon icon='Bell' />
        </SFBadge>
        <SFBadge {...args}>
          <SFIconButton sfSize='medium' sfIcon='Bell' />
        </SFBadge>
      </div>
      <h4>Position adjusted</h4>
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <CustomBadge {...args}>
          <SFIcon icon='Bell' />
        </CustomBadge>
        <CustomBadge {...args}>
          <SFIconButton sfSize='medium' sfIcon='Bell' />
        </CustomBadge>
      </div>
    </Fragment>
  );
};

export const Default = BadgeTemplate.bind({});
