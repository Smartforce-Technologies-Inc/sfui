// .storybook/manager.js

import { addons } from '@storybook/addons';
import SmartforceTheme from './smartforceTheme';

addons.setConfig({
  theme: SmartforceTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false
  }
});
