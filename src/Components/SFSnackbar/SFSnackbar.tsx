import {
  makeStyles,
  Snackbar,
  SnackbarProps,
  Theme,
  withStyles
} from '@material-ui/core';
import React from 'react';
import { SFGrey } from '../../SFColors/SFColors';
import { SFButton } from '../SFButton/SFButton';

const StyledSnackBar = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.type === 'light' ? SFGrey[800] : SFGrey[200]
  }
}))(Snackbar);

const messageStyles = makeStyles((theme: Theme) => ({
  mesageStyle: {
    color: theme.palette.type === 'light' ? SFGrey[50] : SFGrey[900],
    margin: 0
  }
}));

export interface SFSnackBarProps extends SnackbarProps {
  buttonText: string;
  onClick?: () => void;
}

export const SFSnackBar = ({
  buttonText,
  open,
  message,
  anchorOrigin = { vertical: 'top', horizontal: 'center' },
  onClick
}: SFSnackBarProps): React.ReactElement<SFSnackBarProps> => {
  const { mesageStyle } = messageStyles();

  return (
    <StyledSnackBar
      open={open}
      anchorOrigin={anchorOrigin}
      message={<div className={mesageStyle}>{message}</div>}
      action={
        <SFButton variant='text' sfColor='invertedGrey' onClick={onClick}>
          {buttonText}
        </SFButton>
      }
    />
  );
};
