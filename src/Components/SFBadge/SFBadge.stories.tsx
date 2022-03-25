import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFBadge } from './SFBadge';
import { SFBadgeProps, SFIcon, SFIconButton, SFLink } from '../..';
import { makeStyles, Theme } from '@material-ui/core/styles';

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
        .MuiBadge-anchorOriginTopLeftCircle{' '}
        {`{
          top: '14%';
          left: '14%';
          }`}
      </code>
    </div>
  );
};

const useCircleStyles = makeStyles((theme: Theme) => ({
  custom: {
    '& .MuiBadge-anchorOriginTopLeftCircle': {
      top: '28%',
      left: '28%'
    },
    '& .MuiBadge-anchorOriginTopRightCircle': {
      top: '28%',
      right: '28%'
    },
    '& .MuiBadge-anchorOriginBottomLeftCircle': {
      bottom: '28%',
      left: '28%'
    },
    '& .MuiBadge-anchorOriginBottomRightCircle': {
      bottom: '28%',
      right: '28%'
    }
  }
}));

const useRectangleStyles = makeStyles((theme: Theme) => ({
  custom: {
    '& .MuiBadge-anchorOriginTopLeftRectangle': {
      top: '-7%',
      left: '-7%'
    },
    '& .MuiBadge-anchorOriginTopRightRectangle': {
      top: '-7%',
      right: '-7%'
    },
    '& .MuiBadge-anchorOriginBottomLeftRectangle': {
      bottom: '-7%',
      left: '-7%'
    },
    '& .MuiBadge-anchorOriginBottomRightRectangle': {
      bottom: '-7%',
      right: '-7%'
    }
  }
}));

export default {
  title: 'Components/SFBadge',
  component: SFBadge,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    value: 0,
    size: 'small',
    type: 'numeric'
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

const BadgeTemplate: Story<SFBadgeProps> = ({ overlap, ...args }) => {
  const style =
    overlap && overlap === 'circle' ? useCircleStyles() : useRectangleStyles();

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
        <SFBadge {...args}>
          <SFIcon icon='Bell' />
        </SFBadge>
        <SFBadge className={style.custom} {...args}>
          <SFIconButton sfSize='medium' sfIcon='Bell' />
        </SFBadge>
      </div>
    </Fragment>
  );
};

export const BadgeCircular = BadgeTemplate.bind({});

export const BadgeRectangular = BadgeTemplate.bind({});

BadgeCircular.args = {
  ...BadgeCircular.args,
  overlap: 'circle'
};

BadgeRectangular.args = {
  ...BadgeRectangular.args,
  overlap: 'rectangle'
};
