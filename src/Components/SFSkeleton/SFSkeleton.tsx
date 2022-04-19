import React from 'react';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';

export interface SFSkeletonProps extends SkeletonProps {}

export const SFSkeleton = (
  props: SFSkeletonProps
): React.ReactElement<SFSkeletonProps> => {
  return <Skeleton {...props} />;
};
