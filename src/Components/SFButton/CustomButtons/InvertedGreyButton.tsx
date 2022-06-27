import ButtonMixin, { ButtonMixinProps } from './ButtonMixin';
import { SFGrey } from '../../../SFColors/SFColors';

const sfButtonConfig: ButtonMixinProps = {
  contained: {
    light: {
      color: '#F2F2F2',
      backgroundColor: SFGrey[500],
      backgroundColorHover: SFGrey[600],
      backgroundColorActive: SFGrey[700],
      backgroundColorDisabled: SFGrey[800]
    },
    dark: {
      color: '#1A1A1A',
      backgroundColor: SFGrey[100],
      backgroundColorHover: SFGrey[200],
      backgroundColorActive: SFGrey[300],
      backgroundColorDisabled: SFGrey[100]
    }
  },
  outlined: {
    light: {
      color: '#F2F2F2',
      colorHover: SFGrey[50],
      colorActive: SFGrey[50],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(128, 128, 128, 0.3)',
      backgroundColorActive: 'rgba(128, 128, 128, 0.2)',
      backgroundColorDisabled: SFGrey[800],
      borderColor: SFGrey[500],
      borderColorHover: SFGrey[600],
      borderColorActive: SFGrey[700]
    },
    dark: {
      color: '#1A1A1A',
      colorHover: SFGrey[900],
      colorActive: SFGrey[900],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(204, 204, 204, 0.3)',
      backgroundColorActive: 'rgba(204, 204, 204, 0.5)',
      backgroundColorDisabled: SFGrey[100],
      borderColor: SFGrey[400],
      borderColorHover: SFGrey[600],
      borderColorActive: SFGrey[800]
    }
  },
  text: {
    light: {
      color: '#F2F2F2',
      colorHover: SFGrey[50],
      colorActive: SFGrey[50],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(128, 128, 128, 0.3)',
      backgroundColorActive: 'rgba(128, 128, 128, 0.2)',
      backgroundColorDisabled: SFGrey[800]
    },
    dark: {
      color: '#1A1A1A',
      colorHover: SFGrey[900],
      colorActive: SFGrey[900],
      backgroundColor: 'transparent',
      backgroundColorHover: 'rgba(204, 204, 204, 0.3)',
      backgroundColorActive: 'rgba(204, 204, 204, 0.5)',
      backgroundColorDisabled: SFGrey[100]
    }
  }
};

const InvertedGreyButton = ButtonMixin(sfButtonConfig);

export default InvertedGreyButton;
