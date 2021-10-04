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

        <SFDialogActions>
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
        </SFDialogActions>
      </SFDialog>
    </div>
  );
};
