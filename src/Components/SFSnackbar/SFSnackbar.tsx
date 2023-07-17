import React from 'react';
import { Snackbar, SnackbarOrigin, SnackbarProps, styled } from '@mui/material';
import { hexToRgba } from '../../Helpers';
import { SFGrey } from '../../SFColors/SFColors';
import { SFButton } from '../SFButton/SFButton';
import { SFSnackBarMessage } from './SFSnackBarMessage/SFSnackBarMessage';

const StyledSnackBar = styled(Snackbar)(({ theme }) => ({
  '.MuiSnackbarContent-root': {
    backgroundColor: theme.palette.mode === 'light' ? SFGrey[800] : SFGrey[200],
    boxShadow:
      theme.palette.mode === 'light'
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
}));

export type SFSnackbarOrigin = SnackbarOrigin;

export interface SFSnackBarProps extends SnackbarProps {
  buttonText?: string;
  onClick?: () => void;
}

const defaultAnchorOrigin: SFSnackbarOrigin = {
  vertical: 'top',
  horizontal: 'center'
};

export const SFSnackBar = ({
  anchorOrigin = defaultAnchorOrigin,
  autoHideDuration,
  buttonText,
  message,
  onClick,
  open,
  ...props
}: SFSnackBarProps): React.ReactElement<SFSnackBarProps> => {
  const showActionButton = !autoHideDuration;

  return (
    <StyledSnackBar
      {...props}
      open={open}
      anchorOrigin={anchorOrigin}
      message={<SFSnackBarMessage message={message} />}
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
