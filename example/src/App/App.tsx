import React, { useState } from 'react';

import {
  SFThemeProvider,
  createSFTheme,
  SFTheme,
  SFButton,
  SFPaper,
  SFSwitch
} from 'sfui';

const App = () => {
  const [nightMode, setNightMode] = useState(false);
  let theme: SFTheme = createSFTheme(nightMode ? 'night' : 'day');

  const toggleSwitch = () => {
    setNightMode((value) => !value);
  };

  return (
    <SFThemeProvider theme={theme}>
      <SFPaper>
        <div className='appWrapper'>
          <h1>SmartForce UI Library</h1>
          <hr />
          <div className='appRow'>
            <SFSwitch checked={nightMode} onChange={toggleSwitch} />
            <label>Night Mode</label>
          </div>
          <div className='appRow'>
            <SFButton>Button Text</SFButton>
          </div>
        </div>
      </SFPaper>
    </SFThemeProvider>
  );
};

export default App;
