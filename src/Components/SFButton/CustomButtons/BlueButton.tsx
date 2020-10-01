import ButtonMixin, { ButtonMixinProps } from './ButtonMixin';
import { SFBlue, SFGrey } from '../../../SFColors/SFColors';

const sfButtonConfig: ButtonMixinProps = {
  contained: {
    light: {
      color: '#FFFFFF',
      backgroundColor: SFBlue[500],
      backgroundColorHover: SFBlue[700],
      backgroundColorActive: SFBlue[800],
      backgroundColorDisabled: SFGrey[100]
    },
    dark: {
      color: '#1A1A1A',
      backgroundColor: SFBlue[200],
      backgroundColorHover: SFBlue[300],
      backgroundColorActive: SFBlue[400],
      backgroundColorDisabled: SFGrey[800]
    }
  },
  outlined: {
    light: {
      color: SFBlue[500],
      colorHover: SFBlue[700],
      colorActive: SFBlue[800],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(204, 235, 255, 0.4)',
      backgroundColorActive: 'rgba(204, 235, 255, 0.6)',
      backgroundColorDisabled: SFGrey[100],
      borderColor: SFBlue[500],
      borderColorHover: SFBlue[700],
      borderColorActive: SFBlue[800]
    },
    dark: {
      color: SFBlue[200],
      colorHover: SFBlue[300],
      colorActive: SFBlue[400],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(128, 198, 255, 0.2)',
      backgroundColorActive: 'rgba(128, 198, 255, 0.1)',
      backgroundColorDisabled: SFGrey[800],
      borderColor: SFBlue[200],
      borderColorHover: SFBlue[300],
      borderColorActive: SFBlue[400]
    }
  },
  text: {
    light: {
      color: SFBlue[500],
      colorHover: SFBlue[700],
      colorActive: SFBlue[800],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(204, 235, 255, 0.4)',
      backgroundColorActive: 'rgba(204, 235, 255, 0.6)',
      backgroundColorDisabled: SFGrey[100]
    },
    dark: {
      color: SFBlue[200],
      colorHover: SFBlue[300],
      colorActive: SFBlue[400],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(128, 198, 255, 0.2)',
      backgroundColorActive: 'rgba(128, 198, 255, 0.1)',
      backgroundColorDisabled: SFGrey[800]
    }
  }
};

const BlueButton = ButtonMixin(sfButtonConfig);

export default BlueButton;
