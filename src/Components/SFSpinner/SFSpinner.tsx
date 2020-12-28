import React from 'react';
import { withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';

const StyledSpinner = withStyles((theme: Theme) => ({
  root: {}
}))(CircularProgress);

const useSpinnerContainer = makeStyles({
  root: {
    display: 'flex',
    gap: '10px',
    margin: '5px',
    alignItems: 'center'
  }
});

export interface SFSpinnerProps extends CircularProgressProps {}

export const SFSpinner = ({
  ...props
}: SFSpinnerProps): React.ReactElement<SFSpinnerProps> => {
  const spinnerContainerStyle: Record<'root', string> = useSpinnerContainer();
  return (
    <div className={spinnerContainerStyle.root}>
      <StyledSpinner {...props} variant='indeterminate' />
    </div>
  );
};
