import React from 'react';
import { Skeleton, SkeletonProps } from '@material-ui/lab';

export interface SFSkeletonProps extends SkeletonProps {}

export const SFSkeleton = (props: SFSkeletonProps) => {
  return <Skeleton {...props} />;
};
