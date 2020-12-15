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
import { SFCheckboxesView } from './CheckboxesView/CheckboxesView';
import { SFDatePickerView } from './DatePickerView/DatePickerView';
import { SFIconButtonView } from './IconButtonView/IconButtonView';
import { SFLinksView } from './LinksView/LinksView';
import { SFMultiSelectView } from './MultiSelectView/MultiSelectView';
import { SFRadioView } from './RadioView/RadioView';
import { SFRadioGroupView } from './RadioGroupView/RadioGroupView';
import { SFSwitchesView } from './SwitchesView/SwitchesView';
import { SFSelectView } from './SelectView/SelectView';
import { SFTextFieldsView } from './TextFieldsView/TextFieldsView';
import { SFTextFieldsMultilineView } from './TextFieldsMultilineView/TextFieldsMultilineView';

const App = () => {
  const [nightMode, setNightMode] = useState(false);
  const prefersDarkMode: boolean = useSFMediaQuery(
    '(prefers-color-scheme: dark)'
  );
  const switchLabel = nightMode === true ? 'Day Mode' : 'Night Mode';

  let theme: SFTheme = createSFTheme(
    prefersDarkMode || nightMode ? 'night' : 'day'
  );

  const toggleSwitch = () => {
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
          <div className='layout-body'>
            <h1 className='text text-header'>
              SmartForce UI Library{' '}
              <SFSwitch
                label={switchLabel}
                checked={nightMode}
                onChange={toggleSwitch}
              />
            </h1>

            <hr
              className='contentDivider'
              style={{ borderColor: theme.palette.primary.main }}
            />

            <div className='layout'>
              <div className='layout-content'>
                <h2 className='text-title'>Buttons</h2>
                <SFButtonsView />
              </div>
            </div>

            <div className='layout'>
              <div className='layout-columns five'>
                <div className='layout-content'>
                  <h2 className='text-content'>Icon button</h2>
                  <SFIconButtonView />
                </div>
                <div className='layout-content'>
                  <h2 className='text-content'>Checkboxes</h2>
                  <SFCheckboxesView />
                </div>
                <div className='layout-content'>
                  <h2 className='text-content'>Radio</h2>
                  <SFRadioView />
                </div>
                <div className='layout-content'>
                  <h2 className='text-content'>Radio Group</h2>
                  <SFRadioGroupView />
                </div>
                <div className='layout-content'>
                  <h2 className='text-content'>Switches</h2>
                  <SFSwitchesView />
                </div>
              </div>
            </div>
            <div className='layout'>
              <div className='layout-columns two'>
                <div className='layout-content'>
                  <h1 className='text-content'>Links</h1>
                  <SFLinksView />
                </div>
              </div>
            </div>
            <div className='layout'>
              <div className='layout-columns two'>
                <div className='layout-content large'>
                  <h1 className='text-content'>Text Fields</h1>
                  <SFTextFieldsView />
                </div>
                <div className='layout-content large'>
                  <h1 className='text-content'>Date Pickers</h1>
                  <SFDatePickerView />
                </div>
              </div>
            </div>
            <div className='layout'>
              <div className='layout-columns two'>
                <div className='layout-content large'>
                  <h1 className='text-content'>Text field multiline</h1>
                  <SFTextFieldsMultilineView />
                </div>
                <div className='layout-content large'>
                  <h1 className='text-content'>Simple select</h1>
                  <SFSelectView />
                  <h1 className='text-content'>Multiple select</h1>
                  <SFMultiSelectView />
                </div>
              </div>
            </div>
            <div className='layout'></div>
          </div>
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default App;
