import React, { forwardRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper, { PaperProps } from '@material-ui/core/Paper';

const StyledPaper = withStyles({
  root: {
    borderRadius: 0,
    height: '100%'
  }
})(Paper);

export interface SFPaperProps extends PaperProps {}

export const SFPaper = forwardRef(
  (
    { elevation = 0, ...props }: SFPaperProps,
    ref?: React.Ref<unknown> | undefined
  ): React.ReactElement<SFPaperProps> => {
    return <StyledPaper elevation={elevation} {...props} ref={ref} />;
  }
);
