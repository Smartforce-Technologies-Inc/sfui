import React, { useState } from 'react';

import {
  SFThemeProvider,
  createSFTheme,
  SFTheme,
  SFPaper,
  SFSwitch,
  useSFMediaQuery,
  SFStylesProvider,
  SFLink
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
              <SFLink sfSize='medium' onClick={() => setShowDemo(false)}>
                Components
              </SFLink>
              <SFLink sfSize='medium' onClick={() => setShowDemo(true)}>
                Demos
              </SFLink>
            </div>
            {showDemo === false ? <ComponentsPage /> : <DemosPage />}
          </div>
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default App;
