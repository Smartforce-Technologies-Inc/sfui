import React from 'react';
import { Alert, AlertProps, AlertTitle, styled } from '@mui/material';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { SFRed, SFBlue, SFGreen, SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const StyledAlert = styled(Alert)(({ theme }) => ({
  padding: '16px',
  alignItems: 'flex-start',

  '&.MuiAlert-standardError': {
    backgroundColor: theme.palette.mode === 'light' ? SFRed[50] : SFRed[900],

    '.MuiAlert-icon': {
      '& svg path': {
        fill: `${
          theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]
        } !important`
      }
    },

    '.MuiAlert-message': {
      color: theme.palette.mode === 'light' ? SFRed[900] : SFRed[50]
    },

    '.MuiIconButton-root': {
      'svg path': {
        fill: `${
          theme.palette.mode === 'light' ? SFRed[900] : SFRed[50]
        } !important`
      },

      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? hexToRgba(SFRed[100], 0.4)
              : hexToRgba(SFRed[200], 0.2)
        }
      },

      '&:active': {
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? hexToRgba(SFRed[100], 0.7)
            : hexToRgba(SFRed[200], 0.1)
        } !important`
      }
    }
  },

  '&.MuiAlert-standardInfo	': {
    backgroundColor: theme.palette.mode === 'light' ? SFBlue[50] : SFBlue[900],

    '.MuiAlert-icon': {
      'svg path': {
        fill: `${
          theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
        } !important`
      }
    },

    '.MuiAlert-message': {
      color: theme.palette.mode === 'light' ? SFBlue[900] : SFBlue[50]
    },

    '.MuiIconButton-root': {
      'svg path': {
        fill: `${
          theme.palette.mode === 'light' ? SFBlue[900] : SFBlue[50]
        } !important`
      },

      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? hexToRgba(SFBlue[100], 0.4)
              : hexToRgba(SFBlue[200], 0.2)
        }
      },

      '&:active': {
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? hexToRgba(SFBlue[100], 0.6)
            : hexToRgba(SFBlue[200], 0.1)
        } !important`
      }
    }
  },

  '&.MuiAlert-standardSuccess': {
    backgroundColor:
      theme.palette.mode === 'light' ? SFGreen[50] : SFGreen[900],

    '.MuiAlert-icon': {
      'svg path': {
        fill: `${
          theme.palette.mode === 'light' ? SFGreen[400] : SFGreen[200]
        } !important`
      }
    },

    '.MuiAlert-message': {
      color: theme.palette.mode === 'light' ? SFGreen[900] : SFGreen[50]
    },

    '.MuiIconButton-root': {
      'svg path': {
        fill: `${
          theme.palette.mode === 'light' ? SFGreen[900] : SFGreen[50]
        } !important`
      },

      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? hexToRgba(SFGreen[100], 0.4)
              : hexToRgba(SFGreen[200], 0.2)
        }
      },

      '&:active': {
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? hexToRgba(SFGreen[100], 0.6)
            : hexToRgba(SFGreen[200], 0.1)
        } !important`
      }
    }
  },

  // TODO: We need a Yellow Color palette.
  '&.MuiAlert-standardWarning': {
    backgroundColor: theme.palette.mode === 'light' ? SFGrey[50] : SFGrey[900],

    '.MuiAlert-icon': {
      ' svg path': {
        fill: `${
          theme.palette.mode === 'light' ? SFGrey[400] : SFGrey[200]
        } !important`
      }
    },

    '.MuiAlert-message': {
      color: theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]
    },

    '.MuiIconButton-root': {
      'svg path': {
        fill: `${
          theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]
        } !important`
      },

      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? hexToRgba(SFGrey[100], 0.4)
              : hexToRgba(SFGrey[200], 0.2)
        }
      },

      '&:active': {
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? hexToRgba(SFGrey[100], 0.6)
            : hexToRgba(SFGrey[200], 0.1)
        } !important`
      }
    }
  },

  '.MuiAlert-action': {
    margin: '0 11px',
    padding: '0'
  },

  '.MuiAlert-message': {
    padding: '10px 0 10px 16px',
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

  '.MuiAlert-icon': {
    padding: '0px',
    margin: '8px 0'
  }
}));

export type SFAlertType = 'error' | 'warning' | 'info' | 'success';

export interface SFAlertProps
  extends Omit<AlertProps, 'severity' | 'icon' | 'action'> {
  title?: string;
  type: SFAlertType;
}

const getIcon = (type: SFAlertType): React.ReactNode => {
  switch (type) {
    case 'info':
      return <SFIcon size={22} icon='Information' />;
    case 'success':
      return <SFIcon size={22} icon='Check-1' />;
    default:
      return <SFIcon size={22} icon='Error-Mark' />;
  }
};

const SFAlertBase = ({
  title,
  type = 'error',
  children,
  onClose,
  ...props
}: SFAlertProps): React.ReactElement<SFAlertProps> => {
  const icon: React.ReactNode = getIcon(type);

  return (
    <StyledAlert
      {...props}
      icon={icon}
      severity={type}
      action={
        onClose ? (
          <SFIconButton sfIcon='Close' sfSize='medium' onClick={onClose} />
        ) : undefined
      }
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </StyledAlert>
  );
};

export const SFAlert = styled(SFAlertBase)(({ children }) => ({
  '.MuiAlert-message': {
    '& .MuiAlertTitle-root': {
      marginBottom: children ? '4px' : '0px'
    }
  }
}));
