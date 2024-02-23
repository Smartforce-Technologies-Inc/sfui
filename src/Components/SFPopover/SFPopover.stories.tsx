import React, { Fragment } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFButton } from '../SFButton/SFButton';
import { SFPopover, SFPopoverProps } from './SFPopover';

export default {
  title: 'Components/SFPopover',
  component: SFPopover,
  parameters: { controls: { sort: 'alpha' } },
  argTypes: {
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

interface AnchorElementProps {
  anchorOriginVertical: 'bottom' | 'center' | 'top';
  anchorOriginHorizontal: 'left' | 'center' | 'right';
  transformOriginVertical: 'bottom' | 'center' | 'top';
  transformOriginHorizontal: 'left' | 'center' | 'right';
}

export const AnchorElement: Story<SFPopoverProps & AnchorElementProps> = ({
  open,
  anchorOriginVertical,
  anchorOriginHorizontal,
  transformOriginVertical,
  transformOriginHorizontal,
  ...args
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onClick = (event): void => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = (): void => setAnchorEl(null);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SFButton variant='contained' color='primary' onClick={onClick}>
        Open Popover
      </SFButton>

      <SFPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: anchorOriginVertical,
          horizontal: anchorOriginHorizontal
        }}
        transformOrigin={{
          vertical: transformOriginVertical,
          horizontal: transformOriginHorizontal
        }}
        onClose={onClose}
        {...args}
      >
        <div style={{ padding: 24 }}>This is a Popover</div>
      </SFPopover>
    </div>
  );
};
AnchorElement.argTypes = {
  anchorOriginVertical: {
    defaultValue: 'center',
    control: {
      type: 'radio',
      options: ['top', 'center', 'bottom']
    }
  },
  anchorOriginHorizontal: {
    defaultValue: 'center',
    control: {
      type: 'radio',
      options: ['left', 'center', 'right']
    }
  },
  transformOriginVertical: {
    defaultValue: 'center',
    control: {
      type: 'radio',
      options: ['top', 'center', 'bottom']
    }
  },
  transformOriginHorizontal: {
    defaultValue: 'center',
    control: {
      type: 'radio',
      options: ['left', 'center', 'right']
    }
  }
};

interface AnchorPositionProps {
  left: number;
  top: number;
}

export const AnchorPosition: Story<SFPopoverProps & AnchorPositionProps> = ({
  open,
  left,
  top,
  ...args
}) => {
  const [isOpen, setOpen] = React.useState(false);
  const onClick = (): void => setOpen(true);
  const onClose = (): void => setOpen(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SFButton variant='contained' color='primary' onClick={onClick}>
        Open Popover
      </SFButton>

      <SFPopover
        open={isOpen}
        anchorReference='anchorPosition'
        anchorPosition={{ left, top }}
        onClose={onClose}
        {...args}
      >
        <div style={{ padding: 24 }}>This is a Popover</div>
      </SFPopover>
    </div>
  );
};
AnchorPosition.argTypes = {
  left: {
    defaultValue: 0,
    control: {
      type: 'number'
    }
  },
  top: {
    defaultValue: 0,
    control: {
      type: 'number'
    }
  }
};
