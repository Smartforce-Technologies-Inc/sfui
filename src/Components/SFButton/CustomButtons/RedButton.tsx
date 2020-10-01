import ButtonMixin, { ButtonMixinProps } from './ButtonMixin';
import { SFRed, SFGrey } from '../../../SFColors/SFColors';

const sfButtonConfig: ButtonMixinProps = {
  contained: {
    light: {
      color: '#FFFFFF',
      backgroundColor: SFRed[700],
      backgroundColorHover: SFRed[800],
      backgroundColorActive: SFRed[900],
      backgroundColorDisabled: SFGrey[100]
    },
    dark: {
      color: '#1A1A1A',
      backgroundColor: SFRed[200],
      backgroundColorHover: SFRed[300],
      backgroundColorActive: SFRed[400],
      backgroundColorDisabled: SFGrey[800]
    }
  },
  outlined: {
    light: {
      color: SFRed[700],
      colorHover: SFRed[800],
      colorActive: SFRed[900],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(249, 220, 222, 0.4)',
      backgroundColorActive: 'rgba(249, 220, 222, 0.7)',
      backgroundColorDisabled: SFGrey[100],
      borderColor: SFRed[700],
      borderColorHover: SFRed[800],
      borderColorActive: SFRed[900]
    },
    dark: {
      color: SFRed[200],
      colorHover: SFRed[300],
      colorActive: SFRed[400],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(240, 168, 173, 0.2)',
      backgroundColorActive: 'rgba(240, 168, 173, 0.1)',
      backgroundColorDisabled: SFGrey[800],
      borderColor: SFRed[200],
      borderColorHover: SFRed[300],
      borderColorActive: SFRed[400]
    }
  },
  text: {
    light: {
      color: SFRed[700],
      colorHover: SFRed[800],
      colorActive: SFRed[900],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(249, 220, 222, 0.4)',
      backgroundColorActive: 'rgba(249, 220, 222, 0.7)',
      backgroundColorDisabled: SFGrey[100]
    },
    dark: {
      color: SFRed[200],
      colorHover: SFRed[300],
      colorActive: SFRed[400],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(240, 168, 173, 0.2)',
      backgroundColorActive: 'rgba(240, 168, 173, 0.1)',
      backgroundColorDisabled: SFGrey[800]
    }
  }
};

const RedButton = ButtonMixin(sfButtonConfig);

export default RedButton;
