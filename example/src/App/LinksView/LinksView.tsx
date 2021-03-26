import React from 'react';
import { SFLink } from 'sfui';

const SFLinksView = (): JSX.Element => {
  return (
    <div className='column'>
      <div className='row' style={{ alignItems: 'flex-end' }}>
        <SFLink sfSize='medium' color='primary'>
          I am a link example
        </SFLink>
        <SFLink sfSize='small' color='primary'>
          I am a link example
        </SFLink>
      </div>
      <div className='row' style={{ alignItems: 'flex-end' }}>
        <SFLink sfSize='medium'>I am a link example</SFLink>
        <SFLink sfSize='small'>I am a link example</SFLink>
      </div>
    </div>
  );
};
export { SFLinksView };
