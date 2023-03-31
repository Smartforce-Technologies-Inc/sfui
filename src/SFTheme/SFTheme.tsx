import {
  Theme,
  ThemeOptions,
  ThemeProvider as SFThemeProvider
} from '@mui/material/styles';

import { NightTheme } from './NightTheme';
import { DayTheme } from './DayTheme';

interface SFTheme extends Theme {}
interface SFThemeOptions extends ThemeOptions {}

export { SFThemeProvider, SFTheme, SFThemeOptions };

export type SFThemeType = 'day' | 'night';

export function createSFTheme(type: SFThemeType): SFTheme {
  return type === 'day' ? DayTheme : NightTheme;
}
