import React from 'react';
import { Dialog, DialogProps } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';

export {
  DialogActions as SFDialogActions,
  DialogActionsProps as SFDialogActionsProps,
  DialogContent as SFDialogContent,
  DialogContentProps as SFDialogContentProps,
  DialogContentText as SFDialogContentText,
  DialogContentTextProps as SFDialogContentTextProps,
  DialogTitle as SFDialogTitle,
  DialogTitleProps as SFDialogTitleProps
} from '@material-ui/core';

export interface SFDialogProps extends DialogProps {}

const StyledDialog = withStyles((theme: Theme) => ({
  root: {
    background: 'inherit'
  }
}))(Dialog);

export const SFDialog = ({
  ...props
}: SFDialogProps): React.ReactElement<SFDialogProps> => {
  return <StyledDialog {...props} />;
};
