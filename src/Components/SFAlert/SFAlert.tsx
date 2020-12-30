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

export interface SFAlertProps extends SFDialogProps {
  title: string;
  content: string;
  leftAction?: SFAlertAction;
  rightAction?: SFAlertAction;
}

export interface SFAlertAction {
  label: string;
  buttonProps?: SFButtonProps;
}

export const SFAlert = ({
  title,
  content,
  leftAction,
  rightAction,
  children,
  ...props
}: SFAlertProps): React.ReactElement<SFAlertProps> => {
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
