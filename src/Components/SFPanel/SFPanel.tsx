import React from 'react';
import { styled } from '@mui/material';
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

const StyledContent = styled('div')<SFPanelProps>(({ theme, maxWidth }) => ({
  maxWidth: maxWidth || 'auto',
  padding: '0 36px',
  color: `${theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]}`,
  fontSize: 16,
  fontStyle: 'normal',
  lineHeight: '24px'
}));

const StyledTitle = styled('div')(({ theme }) => ({
  padding: '36px 36px 24px',
  color: `${theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]}`,
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 500
}));

const StyledActionSection = styled('div')(() => ({
  padding: '24px 36px 36px',
  display: 'flex',
  gap: '17px',
  alignItems: 'center',
  justifyContent: 'flex-end'
}));

export const SFPanel = ({
  title,
  leftAction,
  rightAction,
  children,
  ...props
}: SFPanelProps): React.ReactElement<SFPanelProps> => {
  return (
    <SFDrawer {...props}>
      <StyledTitle>{title}</StyledTitle>

      <StyledContent {...props}>{children}</StyledContent>

      <StyledActionSection>
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
      </StyledActionSection>
    </SFDrawer>
  );
};
