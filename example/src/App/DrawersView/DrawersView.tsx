import React, { useState } from 'react';

import { SFButton, SFPanel, SFTextField } from 'sfui';

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
          Open Panel
        </SFButton>
      </div>
      <div className='row'>
        <SFButton
          sfColor='red'
          onClick={() => setDrawerInputOpen(!drawerInputOpen)}
        >
          Open Custom Drawer
        </SFButton>
      </div>

      <SFPanel
        open={drawerTextOpen}
        anchor='right'
        title='Drawer Title'
        rightAction={{
          label: 'Medium',
          buttonProps: { onClick: () => setDrawerTextOpen(!drawerTextOpen) }
        }}
        leftAction={{
          label: 'Medium',
          buttonProps: { onClick: () => setDrawerTextOpen(!drawerTextOpen) }
        }}
        onClose={() => setDrawerTextOpen(!drawerTextOpen)}
      >
        <p>
          {drawerText}
          <br />
          {drawerText}
          <br />
          {drawerText}
          <br />
          {drawerText}
        </p>
      </SFPanel>
      <SFPanel
        open={drawerInputOpen}
        anchor='right'
        title='Drawer title'
        leftAction={{
          label: 'Medium',
          buttonProps: { onClick: () => setDrawerInputOpen(!drawerInputOpen) }
        }}
        rightAction={{
          label: 'Medium',
          buttonProps: { onClick: () => setDrawerInputOpen(!drawerInputOpen) }
        }}
        onClose={() => setDrawerInputOpen(!drawerInputOpen)}
      >
        <p>{drawerText}</p>
        <SFTextField style={{ marginTop: 24 }} label='Bagel' />
        <SFTextField style={{ marginTop: 12 }} label='Bagel' />
        <SFTextField style={{ marginTop: 12 }} label='Bagel' />
        <SFTextField style={{ marginTop: 12 }} label='Bagel' />
      </SFPanel>
    </div>
  );
};
