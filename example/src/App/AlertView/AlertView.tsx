import React from 'react';

import { SFAlert } from 'sfui';

export const SFAlertView = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <SFAlert type='error' title='Lorem ipsum dolor sit amet.'>
        <p style={{ margin: '0px' }}>
          Lorem ipsum dolor sit amet, consect adipiscing elit.
        </p>
      </SFAlert>
      <SFAlert type='warning' title='Lorem ipsum dolor sit amet.'>
        <p style={{ margin: '0px' }}>
          Lorem ipsum dolor sit amet, consect adipiscing elit.
        </p>
      </SFAlert>
      <SFAlert type='info' title='Lorem ipsum dolor sit amet.'>
        <p style={{ margin: '0px' }}>
          Lorem ipsum dolor sit amet, consect adipiscing elit.
        </p>
      </SFAlert>
      <SFAlert type='success' title='Lorem ipsum dolor sit amet.'>
        <p style={{ margin: '0px' }}>
          Lorem ipsum dolor sit amet, consect adipiscing elit.
        </p>
      </SFAlert>
    </div>
  );
};
