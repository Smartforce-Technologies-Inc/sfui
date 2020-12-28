import * as React from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';

export interface SFSpinnerProps extends CircularProgressProps {}

export const SFSpinner = ({
  ...props
}: SFSpinnerProps): React.ReactElement<SFSpinnerProps> => {
  return <CircularProgress {...props} variant='indeterminate' />;
};
