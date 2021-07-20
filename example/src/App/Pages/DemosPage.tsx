import React from 'react';

import { FormView } from '../FormView/FormView';
import { SFScrollable } from 'sfui';

export const DemosPage = (): JSX.Element => {
  return (
    <div className='demoPage'>
      <SFScrollable>
        <FormView />
      </SFScrollable>
    </div>
  );
};
