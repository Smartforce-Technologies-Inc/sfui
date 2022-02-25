import React from 'react';
import { Alert, AlertTitle, AlertProps } from '@material-ui/lab';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { SFRed, SFBlue, SFGreen, SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const StyledAlert = withStyles((theme: Theme) => ({
  root: {
    padding: '16px',
    alignItems: 'flex-start'
  },
  action: {
    margin: '0 11px',
    padding: '0'
  },
  message: {
    padding: '10px 0 0 16px',
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
    margin: '8px 0 0 0'
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
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.type === 'light'
              ? hexToRgba(SFRed[100], 0.4)
              : hexToRgba(SFRed[200], 0.2)
        }
      },

      '&:active': {
        backgroundColor: `${
          theme.palette.type === 'light'
            ? hexToRgba(SFRed[100], 0.7)
            : hexToRgba(SFRed[200], 0.1)
        } !important`
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
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.type === 'light'
              ? hexToRgba(SFBlue[100], 0.4)
              : hexToRgba(SFBlue[200], 0.2)
        }
      },

      '&:active': {
        backgroundColor: `${
          theme.palette.type === 'light'
            ? hexToRgba(SFBlue[100], 0.6)
            : hexToRgba(SFBlue[200], 0.1)
        } !important`
      }
    }
  },
  standardSuccess: {
    backgroundColor:
      theme.palette.type === 'light' ? SFGreen[50] : SFGreen[900],

    '& .MuiAlert-icon': {
      '& svg path': {
        fill: `${
          theme.palette.type === 'light' ? SFGreen[400] : SFGreen[200]
        } !important`
      }
    },

    '& .MuiAlert-message': {
      color: theme.palette.type === 'light' ? SFGreen[900] : SFGreen[50]
    },

    '& .MuiIconButton-root': {
      '& .MuiIconButton-label': {
        '& svg path': {
          fill: `${
            theme.palette.type === 'light' ? SFGreen[900] : SFGreen[50]
          } !important`
        }
      },

      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.type === 'light'
              ? hexToRgba(SFGreen[100], 0.4)
              : hexToRgba(SFGreen[200], 0.2)
        }
      },

      '&:active': {
        backgroundColor: `${
          theme.palette.type === 'light'
            ? hexToRgba(SFGreen[100], 0.6)
            : hexToRgba(SFGreen[200], 0.1)
        } !important`
      }
    }
  },
  // TODO: We need a Yellow Color palette.
  standardWarning: {
    backgroundColor: theme.palette.type === 'light' ? SFGrey[50] : SFGrey[900],

    '& .MuiAlert-icon': {
      '& svg path': {
        fill: `${
          theme.palette.type === 'light' ? SFGrey[400] : SFGrey[200]
        } !important`
      }
    },

    '& .MuiAlert-message': {
      color: theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
    },

    '& .MuiIconButton-root': {
      '& .MuiIconButton-label': {
        '& svg path': {
          fill: `${
            theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
          } !important`
        }
      },

      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.type === 'light'
              ? hexToRgba(SFGrey[100], 0.4)
              : hexToRgba(SFGrey[200], 0.2)
        }
      },

      '&:active': {
        backgroundColor: `${
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey[100], 0.6)
            : hexToRgba(SFGrey[200], 0.1)
        } !important`
      }
    }
  }
}))(Alert);

export interface SFAlertProps extends AlertProps {
  title?: string;
  type: 'error' | 'warning' | 'info' | 'success';
}

const getIcon = (type: string): JSX.Element | undefined => {
  switch (type) {
    case 'error':
    case 'warning':
      return <SFIcon size={22} icon='Error-Mark' />;
    case 'info':
      return <SFIcon size={22} icon='Information' />;
    case 'success':
      return <SFIcon size={22} icon='Check-1' />;
    default:
      return undefined;
  }
};

const useStyles = makeStyles({
  message: {
    '& .MuiTypography-gutterBottom': {
      marginBottom: (props: Partial<SFAlertProps>): string =>
        props.children ? '' : '0'
    }
  }
});

export const SFAlert = ({
  title,
  type = 'error',
  children,
  onClose,
  ...props
}: SFAlertProps): React.ReactElement<SFAlertProps> => {
  const classes = useStyles({ children });
  const icon: JSX.Element | undefined = getIcon(type);

  return (
    <StyledAlert
      {...props}
      classes={classes}
      icon={icon}
      severity={type}
      action={
        onClose ? (
          <SFIconButton sfIcon='Close' sfSize='medium' onClick={onClose} />
        ) : undefined
      }
      onClose={onClose}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </StyledAlert>
  );
};
