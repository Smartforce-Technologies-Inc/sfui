import React from 'react';
import { styled } from '@mui/material';
import { SFGrey } from '../../../SFColors/SFColors';

export interface SFSnackBarMessageProps {
  message: React.ReactNode;
}
const StyledSnackBarMessage = styled('div')(({ theme }) => ({
  color: theme.palette.mode === 'light' ? SFGrey[50] : SFGrey[900],
  margin: 0
}));

export const SFSnackBarMessage = ({
  message
}: SFSnackBarMessageProps): React.ReactElement<SFSnackBarMessageProps> => {
  return <StyledSnackBarMessage>{message}</StyledSnackBarMessage>;
};
