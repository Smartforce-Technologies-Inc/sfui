import React from 'react';

import { SFAlert } from 'sfui';

export const SFAlertView = (): JSX.Element => {
  return (
    <div>
      <SFAlert
        title='Lorem ipsum dolor sit amet.'
        text='Lorem ipsum dolor sit amet, consect adipiscing elit.'
      />
    </div>
  );
};
