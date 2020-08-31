import {
  Theme as SFTheme,
  ThemeProvider as SFThemeProvider
} from '@material-ui/core/styles';

import { NightTheme } from './NightTheme';
import { DayTheme } from './DayTheme';

export { SFThemeProvider, SFTheme };

export type SFThemeType = 'day' | 'night';

export function createSFTheme(type: SFThemeType): SFTheme {
  return type === 'day' ? DayTheme : NightTheme;
}
