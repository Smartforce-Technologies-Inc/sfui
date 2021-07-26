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
          onClick={(): void => setDrawerTextOpen(!drawerTextOpen)}
        >
          Open Panel
        </SFButton>
      </div>
      <div className='row'>
        <SFButton
          sfColor='red'
          onClick={(): void => setDrawerInputOpen(!drawerInputOpen)}
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
          buttonProps: {
            onClick: (): void => setDrawerTextOpen(!drawerTextOpen)
          }
        }}
        leftAction={{
          label: 'Medium',
          buttonProps: {
            onClick: (): void => setDrawerTextOpen(!drawerTextOpen)
          }
        }}
        onClose={(): void => setDrawerTextOpen(!drawerTextOpen)}
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
          buttonProps: {
            onClick: (): void => setDrawerInputOpen(!drawerInputOpen)
          }
        }}
        rightAction={{
          label: 'Medium',
          buttonProps: {
            onClick: (): void => setDrawerInputOpen(!drawerInputOpen)
          }
        }}
        onClose={(): void => setDrawerInputOpen(!drawerInputOpen)}
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
