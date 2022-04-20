import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';

const StyledPaper = styled(Paper)({
  borderRadius: 0,
  height: '100%'
});

export interface SFPaperProps extends PaperProps {}

export const SFPaper = ({
  elevation = 0,
  ...props
}: SFPaperProps): React.ReactElement<SFPaperProps> => {
  return <StyledPaper elevation={elevation} {...props} />;
};
