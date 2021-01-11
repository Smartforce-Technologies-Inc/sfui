import * as React from 'react';

import { SFAlert, SFTextField, SFButton } from 'sfui';

const SFDialogsView = (): JSX.Element => {
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [alertTextOpen, setAlertTextOpen] = React.useState<boolean>(false);
  const [alertFormOpen, setAlertFormOpen] = React.useState<boolean>(false);

  return (
    <div className='column'>
      <div className='row'>
        <SFButton
          sfColor='blue'
          onClick={() => setAlertTextOpen(!alertTextOpen)}
        >
          Open Dialog One
        </SFButton>
      </div>
      <div className='row' style={{ margin: '10px 0' }}>
        <SFButton
          sfColor='red'
          onClick={() => {
            setAlertFormOpen(!alertFormOpen);
          }}
        >
          Open Dialog Two
        </SFButton>
      </div>

      <SFAlert
        leftAction={{
          label: 'Medium',
          buttonProps: { onClick: () => setAlertTextOpen(!alertTextOpen) }
        }}
        rightAction={{
          label: 'Medium',
          buttonProps: { onClick: () => setAlertTextOpen(!alertTextOpen) }
        }}
        title='Alert dialog title'
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Mauris lobortis a erat eu mattis.`}
        open={alertTextOpen}
      />
      <SFAlert
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Mauris lobortis a erat eu mattis.`}
        open={alertFormOpen}
        title='Form dialog title'
        leftAction={{
          label: 'Medium',
          buttonProps: { onClick: () => setAlertFormOpen(!alertFormOpen) }
        }}
        rightAction={{ label: 'Medium', buttonProps: { disabled } }}
      >
        <SFTextField
          style={{ marginTop: 20 }}
          label='Bagel'
          placeholder='Please write something to enable button'
          onChange={(event): void =>
            setDisabled(event.target.value.length === 0)
          }
        />
      </SFAlert>
    </div>
  );
};

export { SFDialogsView };
