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

const StyledSFDialog = withStyles(() => ({
  paper: {
    width: '270px',
    margin: '0px',
    padding: '36px',
    maxWidth: 'unset',
    overflowY: 'unset',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,

    '@media screen and (min-width: 768px)': {
      width: '462px'
    },

    '@media screen and (min-width: 1024px)': {
      width: '404px'
    },

    '@media screen and (min-width: 1280px)': {
      width: '532px'
    },

    '@media screen and (min-width: 1600px)': {
      width: '430px'
    },

    '@media screen and (min-width: 1920px)': {
      width: '536px'
    }
  }
}))(SFDialog);

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
  contentText?: string;
  leftAction?: SFAlertDialogAction;
  rightAction?: SFAlertDialogAction;
}

export interface SFAlertDialogAction {
  label: string;
  buttonProps?: SFButtonProps;
}

export const SFAlertDialog = ({
  title,
  contentText,
  leftAction,
  rightAction,
  children,
  ...props
}: SFAlertDialogProps): React.ReactElement<SFAlertDialogProps> => {
  return (
    <div>
      <StyledSFDialog {...props}>
        <SFDialogTitle>{title}</SFDialogTitle>

        <SFDialogContent>
          {contentText && (
            <SFDialogContentText>{contentText}</SFDialogContentText>
          )}

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
      </StyledSFDialog>
    </div>
  );
};
