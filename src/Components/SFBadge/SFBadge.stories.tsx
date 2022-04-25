import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { styled } from '@mui/material/styles';
import { SFBadge } from './SFBadge';
import { SFBadgeProps, SFIcon, SFIconButton } from '../..';

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
        .MuiBadge-anchorOriginTopLeftCircular{' '}
        {`{
          top: '14%';
          left: '14%';
          }`}
      </code>
    </div>
  );
};

const StyledBadge = styled(SFBadge)(({ theme }) => ({
  '& .MuiBadge-anchorOriginTopLeftCircular': {
    top: '28%',
    left: '28%'
  },
  '& .MuiBadge-anchorOriginTopRightCircular': {
    top: '28%',
    right: '28%'
  },
  '& .MuiBadge-anchorOriginBottomLeftCircular': {
    bottom: '28%',
    left: '28%'
  },
  '& .MuiBadge-anchorOriginBottomRightCircular': {
    bottom: '28%',
    right: '28%'
  },
  '& .MuiBadge-anchorOriginTopLeftRectangular': {
    top: '-7%',
    left: '-7%'
  },
  '& .MuiBadge-anchorOriginTopRightRectangular': {
    top: '-7%',
    right: '-7%'
  },
  '& .MuiBadge-anchorOriginBottomLeftRectangular': {
    bottom: '-7%',
    left: '-7%'
  },
  '& .MuiBadge-anchorOriginBottomRightRectangular': {
    bottom: '-7%',
    right: '-7%'
  }
}));

export default {
  title: 'Components/SFBadge',
  component: SFBadge,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    value: 5,
    size: 'small',
    type: 'numeric',
    overlap: 'circular'
  },
  argTypes: {
    value: {
      description: 'The value of the badge.'
    },
    size: {
      description: 'The size of the value.'
    },
    type: {
      description: 'Value representation type.'
    },
    invisible: {
      table: {
        disable: true
      }
    },
    max: {
      table: {
        disable: true
      }
    },
    showZero: {
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
    },
    color: {
      table: {
        disable: true
      }
    },
    badgeContent: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    anchorOrigin: {
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
        <StyledBadge {...args}>
          <SFIcon icon='Bell' />
        </StyledBadge>
        <StyledBadge {...args}>
          <SFIconButton sfSize='medium' sfIcon='Bell' />
        </StyledBadge>
      </div>
    </Fragment>
  );
};

export const Default = BadgeTemplate.bind({});
