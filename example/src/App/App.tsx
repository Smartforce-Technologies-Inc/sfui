import React, { useState } from 'react';

import {
  SFThemeProvider,
  createSFTheme,
  SFTheme,
  SFPaper,
  SFSwitch,
  useSFMediaQuery,
  SFStylesProvider
} from 'sfui';

import { SFButtonsView } from './ButtonsView/ButtonsView';
import { SFSwitchesView } from './SwitchesView/SwitchesView';
import { SFCheckboxesView } from './CheckboxesView/CheckboxesView';
import { SFRadioView } from './RadioView/RadioView';
import { SFRadioGroupView } from './RadioGroupView/RadioGroupView';
import { SFTextFieldsView } from './TextFieldsView/TextFieldsView';

const App = () => {
  const [nightMode, setNightMode] = useState(false);
  const prefersDarkMode: boolean = useSFMediaQuery(
    '(prefers-color-scheme: dark)'
  );

  let theme: SFTheme = createSFTheme(
    prefersDarkMode || nightMode ? 'night' : 'day'
  );

  const toggleSwitch = () => {
    setNightMode((value) => !value);
  };

  return (
    <SFThemeProvider theme={theme}>
      <SFStylesProvider injectFirst>
        <SFPaper>
          <div className='appWrapper'>
            <h1
              style={{
                margin: '10px 0',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              SmartForce UI Library{' '}
              <SFSwitch
                label='Night Mode'
                checked={nightMode}
                onChange={toggleSwitch}
              />
            </h1>
            <hr style={{ borderColor: theme.palette.primary.main }} />

            <SFButtonsView />

            <div className='appGrid col-3'>
              <SFCheckboxesView />
              <SFRadioView />
              <SFSwitchesView />
            </div>

            <div className='appGrid col-2'>
              <SFTextFieldsView />
              <SFRadioGroupView />
            </div>
          </div>
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default App;
