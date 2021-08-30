import React, { useState } from 'react';

import { SFThemeProvider, createSFTheme, SFTheme } from '../SFTheme/SFTheme';

import { SFPaper } from '../Components/SFPaper/SFPaper';
import { SFSwitch } from '../Components/SFSwitch/SFSwitch';
import { useSFMediaQuery, SFStylesProvider } from '../SFUtils/SFUtils';

export interface StorybookWrapperProps {
  children: React.ReactNode;
}

const StorybookWrapper = ({
  children
}: StorybookWrapperProps): React.ReactElement<StorybookWrapperProps> => {
  const prefersDarkMode: boolean = useSFMediaQuery(
    '(prefers-color-scheme: dark)'
  );
  const [nightMode, setNightMode] = useState(prefersDarkMode);

  const theme: SFTheme = createSFTheme(nightMode ? 'night' : 'day');

  const toggleSwitch = (): void => {
    setNightMode(!nightMode);
  };

  return (
    <SFThemeProvider theme={theme}>
      <SFStylesProvider injectFirst>
        <div
          id='sf-topbar'
          style={{
            backgroundColor: theme.palette.background.default
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '5px 1rem',
              borderBottom: `2px solid ${theme.palette.primary.main}`
            }}
          >
            <h2
              style={{
                display: 'inline-block',
                margin: '7px 0',
                color: theme.palette.text.primary
              }}
            >
              SFUI Library
            </h2>
            <SFSwitch checked={nightMode} onChange={toggleSwitch} />
          </div>
          <br />
        </div>
        <SFPaper
          id='sf-story-wrapper'
          style={{
            height: '100%',
            minHeight: 'calc(100vh - 106px)',
            padding: '1rem',
            backgroundColor: theme.palette.background.default
          }}
        >
          {children}
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default StorybookWrapper;
