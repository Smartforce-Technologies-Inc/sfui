import * as React from 'react';

import { SFAlert, SFTextField, SFButton } from 'sfui';

const SFDialogsView = () => {
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const [alert2Open, setAlert2Open] = React.useState<boolean>(false);

  const switchAlert = (alertNum: number) => {
    switch (alertNum) {
      case 0:
        setAlertOpen(!alertOpen);
        break;
      default:
        setAlert2Open(!alert2Open);
    }
  };

  return (
    <div className='column'>
      <div className='row'>
        <SFButton sfColor='blue' onClick={() => switchAlert(0)}>
          Open Dialog One
        </SFButton>
      </div>
      <div className='row' style={{ margin: '10px 0' }}>
        <SFButton
          sfColor='red'
          onClick={() => {
            switchAlert(1);
          }}
        >
          Open Dialog Two
        </SFButton>
      </div>

      <SFAlert
        leftAction={{
          label: 'Medium',
          buttonProps: { onClick: () => switchAlert(0) }
        }}
        rightAction={{
          label: 'Medium',
          buttonProps: { onClick: () => switchAlert(0) }
        }}
        title='Alert dialog title'
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Mauris lobortis a erat eu mattis.`}
        open={alertOpen}
      />
      <SFAlert
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Mauris lobortis a erat eu mattis.`}
        open={alert2Open}
        title='Form dialog title'
        leftAction={{
          label: 'Medium',
          buttonProps: { onClick: () => switchAlert(1) }
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
