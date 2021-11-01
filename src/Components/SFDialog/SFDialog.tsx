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
  DialogActionsProps
} from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';
import React from 'react';

export interface SFDialogTitleProps extends DialogTitleProps {}
export interface SFDialogContentProps extends DialogContentProps {}
export interface SFDialogContentTextProps extends DialogContentTextProps {}
export interface SFDialogActionsProps extends DialogActionsProps {}
export interface SFDialogProps extends DialogProps {}

export const SFDialogTitle = withStyles((theme: Theme) => ({
  root: {
    padding: '36px 36px 24px',
    '& h2': {
      color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '28px'
    }
  }
}))(DialogTitle);

export const SFDialogContent = withStyles(() => ({
  root: {
    padding: '0 36px'
  }
}))(DialogContent);

export const SFDialogContentText = withStyles((theme: Theme) => ({
  root: {
    color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px'
  }
}))(DialogContentText);

export const SFDialogActions = withStyles(() => ({
  root: {
    padding: '24px 36px 36px',
    display: 'flex',
    gap: '17px'
  }
}))(DialogActions);

const StyledDialog = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: `${
      theme.palette.type === 'light'
        ? 'rgba(0, 0, 0, 0.3)'
        : hexToRgba(SFGrey.A400 as string, 0.8)
    }`
  }
}))(Dialog);

export interface SFDialogProps extends DialogProps {
  disableBackdropClick?: boolean;
}

export const SFDialog = ({
  disableBackdropClick = true,
  children,
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
    <StyledDialog {...props} onClose={checkCloseReason}>
      {children}
    </StyledDialog>
  );
};
