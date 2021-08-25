import React from 'react';
import { Alert, AlertTitle, AlertProps } from '@material-ui/lab';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { Theme, withStyles } from '@material-ui/core/styles';
import { SFRed } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const StyledIconButton = withStyles((theme: Theme) => ({
  root: {
    '& .MuiIconButton-label': {
      '& svg': {
        fill: theme.palette.type === 'light' ? SFRed[900] : SFRed[50]
      }
    },

    '&:hover': {
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFRed[100], 0.4)
          : hexToRgba(SFRed[200], 0.2)
    },

    '&:active': {
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFRed[100], 0.7)
          : hexToRgba(SFRed[200], 0.1)
    }
  }
}))(SFIconButton);

const StyledAlert = withStyles((theme: Theme) => ({
  root: {
    padding: '16px',

    '&.MuiAlert-standardError': {
      backgroundColor: theme.palette.type === 'light' ? SFRed[50] : SFRed[900],

      '& .MuiAlert-message': {
        color: theme.palette.type === 'light' ? SFRed[900] : SFRed[50],
        padding: '0px 24px 0px 16px',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',

        '& .MuiAlertTitle-root': {
          fontWeight: 700
        }
      },

      '& .MuiAlert-icon': {
        padding: '0px',
        margin: '0px',

        '& svg': {
          fill: theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
        }
      }
    }
  }
}))(Alert);

export interface SFAlertProps extends AlertProps {
  title: string;
  type: 'error' | 'warning' | 'info' | 'success';
  onClose?: () => void;
}

const getIcons = (
  type: string
): { icon: JSX.Element; closeIcon?: JSX.Element } | undefined => {
  switch (type) {
    case 'error':
      return {
        icon: <SFIcon icon='Error-Mark' />,
        closeIcon: <StyledIconButton sfIcon='Close' sfSize='medium' />
      };

    default:
      return undefined;
  }
};

export const SFAlert = ({
  title,
  type = 'error',
  children,
  onClose
}: SFAlertProps): React.ReactElement<SFAlertProps> => {
  const icons = getIcons(type);

  return (
    <StyledAlert
      icon={icons?.icon}
      severity={type}
      action={icons?.closeIcon}
      onClose={onClose}
    >
      <AlertTitle>{title}</AlertTitle>
      {children}
    </StyledAlert>
  );
};
