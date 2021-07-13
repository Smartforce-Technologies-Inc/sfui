import React, { useState } from 'react';
import './App.scss';

import {
  SFThemeProvider,
  createSFTheme,
  SFTheme,
  SFThemeType,
  SFPaper,
  SFSwitch,
  useSFMediaQuery,
  SFStylesProvider,
  SFButton
} from 'sfui';

import { ComponentsPage } from './Pages/ComponentsPage';
import { DemosPage } from './Pages/DemosPage';

const setThemeType = (theme: SFThemeType): void => {
  localStorage.setItem('Smartforce.SFuiExample.ThemeType', theme);
};

const getThemeType = (): SFThemeType | undefined => {
  return localStorage.getItem('Smartforce.SFuiExample.ThemeType') as
    | SFThemeType
    | undefined;
};

const App = (): JSX.Element => {
  const prefersDarkMode: boolean = useSFMediaQuery(
    '(prefers-color-scheme: dark)'
  );

  const [nightMode, setNightMode] = useState(prefersDarkMode);
  const [showDemo, setShowDemo] = useState(false);

  const switchLabel = nightMode === true ? 'Night' : 'Day';

  const theme: SFTheme = createSFTheme(nightMode ? 'night' : 'day');
  const toggleSwitch = (): void => {
    setThemeType(nightMode ? 'day' : 'night');
    setNightMode((value) => !value);
  };

  React.useEffect(() => {
    const getLocalStorageThemeType: SFThemeType | undefined = getThemeType();
    if (getLocalStorageThemeType) {
      setNightMode(getLocalStorageThemeType === 'night');
    } else {
      setThemeType(prefersDarkMode ? 'night' : 'day');
      setNightMode(prefersDarkMode);
    }
  }, []);

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
              <span>
                SFUI <span className='libText'>Library </span>
                <span
                  className='textBrand'
                  style={{ color: theme.palette.primary.main }}
                >
                  by Smartforce
                </span>
              </span>
              <SFSwitch
                label={switchLabel}
                checked={nightMode}
                onChange={toggleSwitch}
              />
            </h1>
            <div className='row topBar'>
              <SFButton
                size='medium'
                sfColor='blue'
                variant='text'
                onClick={(): void => setShowDemo(false)}
              >
                Components
              </SFButton>
              <SFButton
                size='medium'
                sfColor='blue'
                variant='text'
                onClick={(): void => setShowDemo(true)}
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
