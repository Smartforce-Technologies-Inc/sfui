import React from 'react';
import { Skeleton, SkeletonProps } from '@material-ui/lab';

export interface SFSkeletonProps extends SkeletonProps {}

export const SFSkeleton = (
  props: SFSkeletonProps
): React.ReactElement<SFSkeletonProps> => {
  return <Skeleton {...props} />;
};
