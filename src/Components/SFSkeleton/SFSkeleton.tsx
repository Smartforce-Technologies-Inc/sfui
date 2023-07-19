import React from 'react';
import { Skeleton, SkeletonProps, styled } from '@mui/material';
import { SFBlue } from '../../SFColors/SFColors';

export interface SFSkeletonProps extends SkeletonProps {}

const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  '&::after': {
    background: `linear-gradient(90deg, transparent, ${
      theme.palette.mode === 'light' ? SFBlue[100] : SFBlue[200]
    }, transparent)`
  }
}));

export const SFSkeleton = (
  props: SFSkeletonProps
): React.ReactElement<SFSkeletonProps> => {
  return <StyledSkeleton {...props} />;
};
