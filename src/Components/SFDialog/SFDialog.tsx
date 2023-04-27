import {
  Dialog,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
  DialogContent,
  DialogContentProps,
  DialogContentText,
  DialogContentTextProps,
  DialogActions,
  DialogActionsProps,
  styled
} from '@mui/material';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';
import React from 'react';

export interface SFDialogTitleProps extends DialogTitleProps {}
export interface SFDialogContentProps extends DialogContentProps {}
export interface SFDialogContentTextProps extends DialogContentTextProps {}
export interface SFDialogActionsProps extends DialogActionsProps {}
export interface SFDialogProps extends DialogProps {}

export const SFDialogTitle = styled(DialogTitle)(({ theme }) => ({
  padding: 0,
  '& h2': {
    color: `${theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]}`,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '28px'
  }
}));

export const SFDialogContent = styled(DialogContent)(() => ({
  padding: 0
}));

export const SFDialogContentText = styled(DialogContentText)(({ theme }) => ({
  margin: 0,
  color: `${theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]}`,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px'
}));

export const SFDialogActions = styled(DialogActions)(() => ({
  padding: 0,
  display: 'flex'
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  backgroundColor: `${
    theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.3)'
      : hexToRgba(SFGrey.A400 as string, 0.8)
  }`
}));

export interface SFDialogProps extends DialogProps {
  disableBackdropClick?: boolean;
}

export const SFDialog = ({
  disableBackdropClick = true,
  children,
  transitionDuration = 360,
  onClose,
  ...props
}: SFDialogProps): React.ReactElement<SFDialogProps> => {
  const checkCloseReason = (
    e: Record<string, unknown>,
    reason: 'backdropClick' | 'escapeKeyDown'
  ): void => {
    if (disableBackdropClick) {
      if (reason !== ('backdropClick' || 'escapeKeyDown')) {
        onClose && onClose(e, reason);
      }
    } else {
      onClose && onClose(e, reason);
    }
  };

  return (
    <StyledDialog
      {...props}
      transitionDuration={transitionDuration}
      onClose={checkCloseReason}
    >
      {children}
    </StyledDialog>
  );
};
