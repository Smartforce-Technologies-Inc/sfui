import React from 'react';
import {
  SFDialog,
  SFDialogProps,
  SFDialogActions,
  SFDialogContent,
  SFDialogTitle
} from '../SFDialog/SFDialog';
import { SFButtonProps } from '../SFButton/SFButton';

export interface SFAlertProps extends SFDialogProps {
  title: string;
  leftButton?: React.Component<SFButtonProps>;
  rightButton?: React.Component<SFButtonProps>;
}

export const SFAlert = ({
  title,
  leftButton,
  rightButton,
  children,
  ...props
}: SFAlertProps): React.ReactElement<SFAlertProps> => {
  return (
    <div>
      <SFDialog {...props}>
        <SFDialogTitle>{title}</SFDialogTitle>
        <SFDialogContent>{children}</SFDialogContent>
        <SFDialogActions>
          {leftButton !== undefined && leftButton}
          {rightButton !== undefined && rightButton}
        </SFDialogActions>
      </SFDialog>
    </div>
  );
};
