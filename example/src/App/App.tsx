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

import { MUIButtonsView, SFButtonsView } from './ButtonsView/ButtonsView';
import { SFSwitchesView } from './SwitchesView/SwitchesView';
import { SFCheckboxesView } from './CheckboxesView/CheckboxesView';
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
            <h1>
              SmartForce UI Library{' '}
              <span style={{ float: 'right' }}>
                <SFSwitch
                  label='Night Mode'
                  checked={nightMode}
                  onChange={toggleSwitch}
                />
              </span>
            </h1>
            <br />
           // Borrar
           <br />
            <SFIconButton disabled sfColor='#FF727F' sfSize={12} sfIcon='Bell' />
            <br />
            <h3>Buttons</h3>
            <hr />
            <div className='appGrid'>
              <div>
                <MUIButtonsView />
              </div>
              <div>
                <SFButtonsView />
              </div>
            </div>

            <h3>TextFields</h3>
            <hr />
            <div className='appGrid'>
              <SFTextFieldsView />
            </div>

            <h3>Switches</h3>
            <hr />
            <div className='appGrid'>
              <SFSwitchesView />
            </div>

            <h3>Checkboxes</h3>
            <hr />
            <div className='appGrid'>
              <SFCheckboxesView />
            </div>

            <h3>Radio Group</h3>
            <hr />
            <div className='appGrid'>
              <SFRadioGroupView />
            </div>
          </div>
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default App;
