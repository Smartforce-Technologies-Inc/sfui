import React from 'react';
import { Alert, AlertTitle, AlertProps } from '@material-ui/lab';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { Theme, withStyles } from '@material-ui/core/styles';
import { SFRed, SFBlue } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const StyledAlert = withStyles((theme: Theme) => ({
  root: {
    padding: '16px'
  },
  action: {
    margin: '0 11px',
    padding: '0'
  },
  message: {
    padding: '0 0 0 16px',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    flexGrow: 1,

    '& .MuiAlertTitle-root': {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
      marginTop: '0'
    }
  },
  icon: {
    padding: '0px',
    margin: '0px'
  },
  standardError: {
    backgroundColor: theme.palette.type === 'light' ? SFRed[50] : SFRed[900],

    '& .MuiAlert-icon': {
      '& svg path': {
        fill: `${
          theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
        } !important`
      }
    },

    '& .MuiAlert-message': {
      color: theme.palette.type === 'light' ? SFRed[900] : SFRed[50]
    },

    '& .MuiIconButton-root': {
      '& .MuiIconButton-label': {
        '& svg path': {
          fill: `${
            theme.palette.type === 'light' ? SFRed[900] : SFRed[50]
          } !important`
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
  },
  standardInfo: {
    backgroundColor: theme.palette.type === 'light' ? SFBlue[50] : SFBlue[900],

    '& .MuiAlert-icon': {
      '& svg path': {
        fill: `${
          theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
        } !important`
      }
    },

    '& .MuiAlert-message': {
      color: theme.palette.type === 'light' ? SFBlue[900] : SFBlue[50]
    },

    '& .MuiIconButton-root': {
      '& .MuiIconButton-label': {
        '& svg path': {
          fill: `${
            theme.palette.type === 'light' ? SFBlue[900] : SFBlue[50]
          } !important`
        }
      },

      '&:hover': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFBlue[100], 0.4)
            : hexToRgba(SFBlue[200], 0.2)
      },

      '&:active': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFBlue[100], 0.7)
            : hexToRgba(SFBlue[200], 0.1)
      }
    }
  }
}))(Alert);

export interface SFAlertProps extends AlertProps {
  title: string;
  type: 'error' | 'warning' | 'info' | 'success';
}

const getIcon = (type: string): JSX.Element | undefined => {
  switch (type) {
    case 'error':
      return <SFIcon size={22} icon='Error-Mark' />;
    case 'info':
      return <SFIcon size={22} icon='Information' />;
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
  const icon: JSX.Element | undefined = getIcon(type);

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
