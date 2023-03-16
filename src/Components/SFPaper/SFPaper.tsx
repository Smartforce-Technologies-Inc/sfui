import React, { forwardRef } from 'react';
import { styled, Paper, PaperProps } from '@mui/material';

const StyledPaper = styled(Paper)({
  borderRadius: 0,
  height: '100%'
});

export interface SFPaperProps extends Omit<PaperProps, 'ref'> {}

export const SFPaper = forwardRef<HTMLDivElement, SFPaperProps>(
  ({ elevation = 0, ...props }, ref): React.ReactElement<SFPaperProps> => {
    return <StyledPaper elevation={elevation} {...props} ref={ref} />;
  }
);
