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
import { hexToRgba } from '../../helpers';

export interface SFDialogTitleProps extends DialogTitleProps {}
export interface SFDialogContentProps extends DialogContentProps {}
export interface SFDialogContentTextProps extends DialogContentTextProps {}
export interface SFDialogActionsProps extends DialogActionsProps {}
export interface SFDialogProps extends DialogProps {}

export const SFDialogTitle = withStyles((theme: Theme) => ({
  root: {
    padding: '24px',
    '& h2': {
      color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 500
    }
  }
}))(DialogTitle);

export const SFDialogContent = withStyles(() => ({
  root: {
    padding: '0 24px'
  }
}))(DialogContent);

export const SFDialogContentText = withStyles((theme: Theme) => ({
  root: {
    color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400
  }
}))(DialogContentText);

export const SFDialogActions = withStyles(() => ({
  root: {
    padding: '24px'
  }
}))(DialogActions);

export const SFDialog = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: `${
      theme.palette.type === 'light'
        ? 'rgba(0, 0, 0, 0.3)'
        : hexToRgba(SFGrey.A400 as string, 0.8)
    }`
  }
}))(Dialog);
