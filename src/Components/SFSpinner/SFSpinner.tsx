import * as React from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';

export interface SFSpinnerProps extends CircularProgressProps {}

export const SFSpinner = ({
  ...props
}: SFSpinnerProps): React.ReactElement<SFSpinnerProps> => {
  return (
    <CircularProgress
      {...props}
      aria-label={props['aria-label'] || 'Loading'}
      color='primary'
      variant='indeterminate'
    />
  );
};
