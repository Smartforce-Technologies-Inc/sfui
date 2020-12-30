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

import { SFSelectView } from './SelectView/SelectView';
import { SFSpinnerView } from './SpinnerView/SpinnerView';
import { SFSwitchesView } from './SwitchesView/SwitchesView';
import { SFTextFieldsView } from './TextFieldsView/TextFieldsView';
import { SFTextFieldsMultilineView } from './TextFieldsMultilineView/TextFieldsMultilineView';
import { SFTableView } from './TableView/TableView';

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
          <h1 className='textHeader'>
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
          <div className='content firstSection'>
            <div className='section'>
              <h4 className='title'>Buttons</h4>
              <SFButtonsView />
            </div>
            <div className='section'>
              <h4 className='title'>Links</h4>
              <SFLinksView />
            </div>
            <div className='section'>
              <h4 className='title'>Progress Circular indeterminate</h4>
              <SFSpinnerView />
            </div>
          </div>
          <div className='content secondSection'>
            <div className='section'>
              <h4 className='title'>Icon Button</h4>
              <SFIconButtonView />
            </div>
            <div className='section'>
              <h4 className='title'>Checkbox</h4>
              <SFCheckboxesView />
            </div>
            <div className='section'>
              <h4 className='title'>Radio button</h4>
              <SFRadioView />
            </div>
            <div className='section'>
              <h4 className='title'>Radio group button</h4>
              <SFRadioGroupView />
            </div>
            <div className='section'>
              <h4 className='title'>Switch</h4>
              <SFSwitchesView />
            </div>
          </div>
          <div className='content thirdSection'>
            <div className='section'>
              <h4 className='title'>Text field</h4>
              <SFTextFieldsView />
            </div>
            <div className='section'>
              <h4 className='title'>Date picker</h4>
              <SFDatePickerView />
            </div>
          </div>
          <div className='content fourthSection'>
            <div className='section'>
              <h4 className='title'>Text field multiline</h4>
              <SFTextFieldsMultilineView />
            </div>
          </div>
          <div className='content thirdSection'>
            <div className='section'>
              <h4 className='title'>Simple Select</h4>
              <SFSelectView />
            </div>
            <div className='section'>
              <h4 className='title'>Multiline Select</h4>
              <SFMultiSelectView />
            </div>
          </div>
          <div className='content fifthSection'>
            <div className='section'>
              <h4>Tables</h4>
              <SFTableView />
            </div>
          </div>
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default App;
