import React from 'react';
import {
  SFDialog,
  SFDialogProps,
  SFDialogActions,
  SFDialogContent,
  SFDialogContentText,
  SFDialogTitle
} from '../SFDialog/SFDialog';
import { SFButton, SFButtonProps } from '../SFButton/SFButton';
import { withStyles } from '@material-ui/core';

const SFAlertDialogActions = withStyles(() => ({
  root: {
    // if first child it's also last child (only one button)
    '& button:first-child:nth-last-child(1)': {
      width: '100%'
    },
    '@media screen and (min-width: 768px)': {
      '& button:first-child:nth-last-child(1)': {
        width: 'auto'
      }
    }
  }
}))(SFDialogActions);

export interface SFAlertDialogProps extends SFDialogProps {
  title: string;
  content: string;
  leftAction?: SFAlertDialogAction;
  rightAction?: SFAlertDialogAction;
}

export interface SFAlertDialogAction {
  label: string;
  buttonProps?: SFButtonProps;
}

export const SFAlertDialog = ({
  title,
  content,
  leftAction,
  rightAction,
  children,
  ...props
}: SFAlertDialogProps): React.ReactElement<SFAlertDialogProps> => {
  return (
    <div>
      <SFDialog {...props}>
        <SFDialogTitle>{title}</SFDialogTitle>

        <SFDialogContent>
          <SFDialogContentText>{content}</SFDialogContentText>

          {children}
        </SFDialogContent>

        <SFAlertDialogActions>
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
        </SFAlertDialogActions>
      </SFDialog>
    </div>
  );
};
