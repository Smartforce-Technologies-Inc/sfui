import React from 'react';
import { styled } from '@mui/material/styles';
import { SFDrawer, SFDrawerProps } from '../SFDrawer/SFDrawer';
import { SFButton, SFButtonProps } from '../SFButton/SFButton';
import { SFGrey } from '../../SFColors/SFColors';

export interface SFPanelAction {
  label: string;
  buttonProps?: SFButtonProps;
}

export interface SFPanelProps extends SFDrawerProps {
  title?: string;
  maxWidth?: number;
  leftAction?: SFPanelAction;
  rightAction?: SFPanelAction;
}

const SFPanelBase = ({
  title,
  leftAction,
  rightAction,
  children,
  ...props
}: SFPanelProps): React.ReactElement<SFPanelProps> => {
  return (
    <SFDrawer {...props}>
      <div className='SFPanel-title'>{title}</div>

      <div className='SFPanel-content'>{children}</div>

      <div className='SFPanel-actions'>
        {leftAction && (
          <SFButton sfColor='grey' variant='text' {...leftAction.buttonProps}>
            {leftAction.label}
          </SFButton>
        )}

        {rightAction && (
          <SFButton sfColor='blue' {...rightAction.buttonProps}>
            {rightAction.label}
          </SFButton>
        )}
      </div>
    </SFDrawer>
  );
};

export const SFPanel = styled(SFPanelBase)(({ theme, ...props }) => ({
  '& .SFPanel-title': {
    padding: '36px 36px 24px',
    color: `${theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]}`,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 500
  },
  '& .SFPanel-content': {
    maxWidth: props.maxWidth || 'auto',
    padding: '0 36px',
    color: `${theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]}`,
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: '24px'
  },
  '& .SFPanel-actions': {
    padding: '24px 36px 36px',
    display: 'flex',
    gap: '17px',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));
