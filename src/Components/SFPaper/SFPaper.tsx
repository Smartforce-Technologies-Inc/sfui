import React, { forwardRef } from 'react';
import { styled, Paper, PaperProps } from '@mui/material';

const StyledPaper = styled(Paper)({
  borderRadius: 0,
  height: '100%'
});

export interface SFPaperProps extends PaperProps {}

export const SFPaper = forwardRef(
  (
    { elevation = 0, ...props }: SFPaperProps,
    ref:
      | ((instance: HTMLDivElement | null) => void)
      | React.RefObject<HTMLDivElement>
      | null
      | undefined
  ): React.ReactElement<SFPaperProps> => {
    return <StyledPaper elevation={elevation} {...props} ref={ref} />;
  }
);
