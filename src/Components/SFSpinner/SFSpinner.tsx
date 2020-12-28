import * as React from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';

export interface SFSpinnerProps extends CircularProgressProps {}

export const SFSpinner = ({
  color = 'primary',
  ...props
}: SFSpinnerProps): React.ReactElement<SFSpinnerProps> => {
  return <CircularProgress {...props} variant='indeterminate' />;
};
