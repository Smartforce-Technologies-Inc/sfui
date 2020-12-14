import React from 'react';

import { SFLink } from 'sfui';

const SFLinksView = () => {
  return (
    <div className='contentBody item two'>
      <SFLink sfSize='medium' color='primary'>
        I am a link example
      </SFLink>
      <SFLink sfSize='small' color='primary'>
        I am a link example
      </SFLink>
      <SFLink sfSize='medium'>I am a link example</SFLink>
      <SFLink sfSize='small'>I am a link example</SFLink>
    </div>
  );
};

export { SFLinksView };
