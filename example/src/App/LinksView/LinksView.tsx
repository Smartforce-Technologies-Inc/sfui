import React from 'react';
import { SFLink } from 'sfui';

const SFLinksView = (): JSX.Element => {
  return (
    <div className='links'>
      <div className='row'>
        <SFLink sfSize='medium' color='primary'>
          I am a link example
        </SFLink>
        <SFLink sfSize='small' color='primary'>
          I am a link example
        </SFLink>
      </div>
      <div className='row'>
        <SFLink sfSize='medium'>I am a link example</SFLink>
        <SFLink sfSize='small'>I am a link example</SFLink>
      </div>
    </div>
  );
};
export { SFLinksView };
