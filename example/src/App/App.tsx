import React from 'react';

import { SFButton, SFThemeProvider, createSFTheme, SFTheme } from 'sfui';

const App = () => {
  const theme: SFTheme = createSFTheme('night');
  return (
    <SFThemeProvider theme={theme}>
      <SFButton>Button Text</SFButton>
    </SFThemeProvider>
  );
};

export default App;
