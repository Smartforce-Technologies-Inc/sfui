import React, { useState } from 'react';

import {
  SFThemeProvider,
  createSFTheme,
  SFTheme,
  SFPaper,
  SFSwitch,
  useSFMediaQuery,
  SFStylesProvider,
  SFButton
} from 'sfui';

import { ComponentsPage } from './Pages/ComponentsPage';
import { DemosPage } from './Pages/DemosPage';

const App = (): JSX.Element => {
  const prefersDarkMode: boolean = useSFMediaQuery(
    '(prefers-color-scheme: dark)'
  );

  const [nightMode, setNightMode] = useState(prefersDarkMode);
  const [showDemo, setShowDemo] = useState(false);

  const switchLabel = nightMode === true ? 'Day Mode' : 'Night Mode';

  const theme: SFTheme = createSFTheme(nightMode ? 'night' : 'day');

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
          className={`${nightMode ? 'night' : 'day'}`}
        >
          <div className='bodyContent'>
            <h1 className='textHeader'>
              SmartForce UI Library{' '}
              <SFSwitch
                label={switchLabel}
                checked={nightMode}
                onChange={toggleSwitch}
              />
            </h1>
            <div className='row'>
              <SFButton
                size='medium'
                sfColor='red'
                onClick={() => setShowDemo(false)}
              >
                Components
              </SFButton>
              <SFButton
                size='medium'
                sfColor='red'
                onClick={() => setShowDemo(true)}
              >
                Demos
              </SFButton>
            </div>
            {showDemo === false ? <ComponentsPage /> : <DemosPage />}
          </div>
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default App;
