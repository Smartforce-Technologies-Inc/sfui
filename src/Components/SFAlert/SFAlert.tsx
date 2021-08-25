import React from 'react';
import { Alert, AlertTitle, AlertProps } from '@material-ui/lab';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { Theme, withStyles } from '@material-ui/core/styles';
import { SFRed } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

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
      },

      '& .MuiAlert-action': {
        '& .MuiIconButton-root': {
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
      }
    }
  }
}))(Alert);

export interface SFAlertProps extends AlertProps {
  title: string;
  type: 'error' | 'warning' | 'info' | 'success';
}

const getIcons = (type: string): JSX.Element | undefined => {
  switch (type) {
    case 'error':
      return <SFIcon icon='Error-Mark' />;

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
  const icon = getIcons(type);

  return (
    <StyledAlert
      icon={icon}
      severity={type}
      action={
        onClose ? (
          <SFIconButton sfIcon='Close' sfSize='medium' onClick={onClose} />
        ) : undefined
      }
      onClose={onClose}
    >
      <AlertTitle>{title}</AlertTitle>
      {children}
    </StyledAlert>
  );
};
