import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';

const StyledSpinner = withStyles((theme: Theme) => ({
  root: {}
}))(CircularProgress);

export interface SFSpinnerProps extends CircularProgressProps {}

export const SFSpinner = ({}: SFSpinnerProps): React.ReactElement<
  SFSpinnerProps
> => {
  return <StyledSpinner></StyledSpinner>;
};
