import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper, { PaperProps } from '@material-ui/core/Paper';

const StyledPaper = withStyles({
  root: {
    borderRadius: 0
  }
})(Paper);

export interface SFPaperProps extends PaperProps {}

export const SFPaper = ({
  elevation = 0,
  ...props
}: SFPaperProps): React.ReactElement<SFPaperProps> => {
  return <StyledPaper elevation={elevation} {...props} />;
};
