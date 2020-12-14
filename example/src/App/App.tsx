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
          <div className='appWrapper'>
            <h1 className='title main'>
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

            <div className='contentContainer'>
              <h1 className='title content'>Buttons</h1>
              <SFButtonsView />
            </div>

            <div className='contentContainer'>
              <div className='contentBody item five group'>
                <div className='contentBody'>
                  <h1 className='title content'>Icon button</h1>
                  <SFIconButtonView />
                </div>
                <div className='contentBody'>
                  <h1 className='title content'>Checkboxes</h1>
                  <SFCheckboxesView />
                </div>
                <div className='contentBody'>
                  <h1 className='title content'>Radio</h1>
                  <SFRadioView />
                </div>
                <div className='contentBody'>
                  <h1 className='title content'>Radio Group</h1>
                  <SFRadioGroupView />
                </div>
                <div className='contentBody'>
                  <h1 className='title content'>Switches</h1>
                  <SFSwitchesView />
                </div>
              </div>
            </div>

            <div className='contentContainer'>
              <div className='contentBody item two group'>
                <div className='contentBody item large'>
                  <h1 className='title content'>Text Fields</h1>
                  <SFTextFieldsView />
                </div>
                <div className='contentBody item large'>
                  <h1 className='title content'>Date Pickers</h1>
                  <SFDatePickerView />
                </div>
              </div>
            </div>
            <div className='contentContainer'>
              <div className='contentBody item two group'>
                <div className='contentBody item large'>
                  <h1 className='title content'>Text field multiline</h1>
                  <SFTextFieldsMultilineView />
                </div>
                <div className='contentBody item large'>
                  <h1 className='title content'>Simple select</h1>
                  <SFSelectView />
                  <h1 className='title content'>Multiple select</h1>
                  <SFMultiSelectView />
                </div>
              </div>
            </div>
            <div className='contentContainer'>
              <h1 className='title content'>Links</h1>
              <SFLinksView />
            </div>
          </div>
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default App;
