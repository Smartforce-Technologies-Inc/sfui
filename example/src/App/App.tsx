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
import { SFDatePickerView } from './DatePickerView/DatePickerView';
import { SFIconButtonView } from './IconButtonView/IconButtonView';
import { SFRadioView } from './RadioView/RadioView';
import { SFSelectView } from './SelectView/SelectView';
import { SFRadioGroupView } from './RadioGroupView/RadioGroupView';
import { SFTextFieldsView } from './TextFieldsView/TextFieldsView';

const App = (): JSX.Element => {
  const [nightMode, setNightMode] = useState(false);
  const prefersDarkMode: boolean = useSFMediaQuery(
    '(prefers-color-scheme: dark)'
  );

  const theme: SFTheme = createSFTheme(
    prefersDarkMode || nightMode ? 'night' : 'day'
  );

  const toggleSwitch = (): void => {
    setNightMode((value) => !value);
  };

  return (
    <SFThemeProvider theme={theme}>
      <SFStylesProvider injectFirst>
        <SFPaper
          style={{
            backgroundColor: theme.palette.background.default
          }}
        >
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

            <div className='appGrid col-4'>
              <SFIconButtonView />
              <SFCheckboxesView />
              <SFRadioView />
              <SFSwitchesView />
            </div>

            <div className='appGrid col-2'>
              <SFTextFieldsView />
              <SFRadioGroupView />
            </div>
            <div className='appGrid col-2'>
              <SFSelectView />
              <SFDatePickerView />
            </div>
          </div>
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default App;
