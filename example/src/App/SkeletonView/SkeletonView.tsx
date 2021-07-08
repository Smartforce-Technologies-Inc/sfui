import React from 'react';

import { SFSkeleton } from 'sfui';

export const SFSkeletonView = (): JSX.Element => {
  return (
    <div className='column'>
      <div className='row'>
        <SFSkeleton variant='circle' height={50} width={50} />
        <SFSkeleton variant='rect' height={50} width='90%' />
      </div>
      <SFSkeleton variant='text' height={30} />
      <SFSkeleton variant='text' height={30} />
      <SFSkeleton variant='text' height={30} />
    </div>
  );
};
