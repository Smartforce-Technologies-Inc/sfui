import React, { useState } from 'react';

import { SFButton, SFDrawer, SFTextField } from 'sfui';

export const SFDrawersView = (): JSX.Element => {
  const [drawerTextOpen, setDrawerTextOpen] = useState<boolean>(false);
  const [drawerInputOpen, setDrawerInputOpen] = useState<boolean>(false);
  const drawerText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus eius asperiores incidunt voluptates.';

  return (
    <div className='column'>
      <div className='row'>
        <SFButton
          sfColor='blue'
          onClick={() => setDrawerTextOpen(!drawerTextOpen)}
        >
          Open Drawer One
        </SFButton>
      </div>
      <div className='row' style={{ margin: '10px 0' }}>
        <SFButton
          sfColor='red'
          onClick={() => setDrawerInputOpen(!drawerInputOpen)}
        >
          Open Drawer Two
        </SFButton>
      </div>

      <SFDrawer
        open={drawerTextOpen}
        anchor='right'
        onClose={() => setDrawerTextOpen(!drawerTextOpen)}
      >
        <h4>Drawer Title</h4>
        <p>
          {drawerText}
          <br />
          {drawerText}
          <br />
          {drawerText}
          <br />
          {drawerText}
        </p>
      </SFDrawer>
      <SFDrawer
        open={drawerInputOpen}
        anchor='right'
        onClose={() => setDrawerInputOpen(!drawerInputOpen)}
      >
        <h4>Drawer Title</h4>
        <p>{drawerText}</p>
        <SFTextField />
      </SFDrawer>
    </div>
  );
};
