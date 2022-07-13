import {
  makeStyles,
  Snackbar,
  SnackbarProps,
  SnackbarOrigin,
  Theme,
  withStyles
} from '@material-ui/core';
import React from 'react';
import { hexToRgba } from '../../Helpers';
import { SFGrey } from '../../SFColors/SFColors';
import { SFButton } from '../SFButton/SFButton';

const StyledSnackBar = withStyles((theme: Theme) => ({
  root: {
    '& .MuiSnackbarContent-root': {
      backgroundColor:
        theme.palette.type === 'light' ? SFGrey[800] : SFGrey[200],
      boxShadow:
        theme.palette.type === 'light'
          ? '0px 3px 3px -2px rgba(0, 0, 0, 0.02), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)'
          : '0px 3px 3px -2px rgba(0, 0, 0, 0.02), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)',
      borderRadius: '2px',
      '& .MuiButtonBase-root': {
        '&:hover': {
          backgroundColor: hexToRgba(SFGrey[500], 0.3)
        },
        '&:active': {
          backgroundColor: hexToRgba(SFGrey[500], 0.2)
        }
      }
    }
  }
}))(Snackbar);

const messageStyles = makeStyles((theme: Theme) => ({
  mesageStyle: {
    color: theme.palette.type === 'light' ? SFGrey[50] : SFGrey[900],
    margin: 0
  }
}));

export type SFSnackbarOrigin = SnackbarOrigin;

export interface SFSnackBarProps extends SnackbarProps {
  buttonText?: string;
  onClick?: () => void;
}

export const SFSnackBar = ({
  buttonText,
  open,
  message,
  anchorOrigin = { vertical: 'top', horizontal: 'center' },
  autoHideDuration,
  onClick,
  ...props
}: SFSnackBarProps): React.ReactElement<SFSnackBarProps> => {
  const { mesageStyle } = messageStyles();
  const showActionButton = !autoHideDuration;

  return (
    <StyledSnackBar
      {...props}
      open={open}
      anchorOrigin={anchorOrigin}
      message={<div className={mesageStyle}>{message}</div>}
      autoHideDuration={autoHideDuration}
      action={
        showActionButton && (
          <SFButton variant='text' sfColor='invertedGrey' onClick={onClick}>
            {buttonText}
          </SFButton>
        )
      }
    />
  );
};
