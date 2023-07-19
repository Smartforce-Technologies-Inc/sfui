import React from 'react';
import { styled } from '@mui/material';
import {
  SFDialog,
  SFDialogProps,
  SFDialogActions,
  SFDialogContent,
  SFDialogContentText,
  SFDialogTitle
} from '../SFDialog/SFDialog';
import { SFButton, SFButtonProps } from '../SFButton/SFButton';

const StyledSFDialog = styled(SFDialog)(() => ({
  '& .MuiDialog-paper': {
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
}));

const SFAlertDialogActions = styled(SFDialogActions)(() => ({
  // if first child it's also last child (only one button)
  '& button:first-child:nth-last-child(1)': {
    width: '100%'
  },
  '@media screen and (min-width: 768px)': {
    '& button:first-child:nth-last-child(1)': {
      width: 'auto'
    }
  }
}));

export interface SFAlertDialogProps extends SFDialogProps {
  contentText?: string;
  leftAction?: SFAlertDialogAction;
  rightAction?: SFAlertDialogAction;
  title: string;
}

export interface SFAlertDialogAction {
  buttonProps?: SFButtonProps;
  label: string;
}

export const SFAlertDialog = ({
  children,
  contentText,
  leftAction,
  rightAction,
  title,
  ...props
}: SFAlertDialogProps): React.ReactElement<SFAlertDialogProps> => {
  return (
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
  );
};
