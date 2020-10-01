import { withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { SFGrey } from '../../../SFColors/SFColors';

export interface ButtonMixinProps {
  contained: {
    light: {
      color: string;
      backgroundColor: string;
      backgroundColorHover: string;
      backgroundColorActive: string;
      backgroundColorDisabled: string;
    };
    dark: {
      color: string;
      backgroundColor: string;
      backgroundColorHover: string;
      backgroundColorActive: string;
      backgroundColorDisabled: string;
    };
  };
  outlined: {
    light: {
      color: string;
      colorHover: string;
      colorActive: string;
      backgroundColor: string;
      backgroundColorHover: string;
      backgroundColorActive: string;
      backgroundColorDisabled: string;
      borderColor: string;
      borderColorHover: string;
      borderColorActive: string;
    };
    dark: {
      color: string;
      colorHover: string;
      colorActive: string;
      backgroundColor: string;
      backgroundColorHover: string;
      backgroundColorActive: string;
      backgroundColorDisabled: string;
      borderColor: string;
      borderColorHover: string;
      borderColorActive: string;
    };
  };
  text: {
    light: {
      color: string;
      colorHover: string;
      colorActive: string;
      backgroundColor: string;
      backgroundColorHover: string;
      backgroundColorActive: string;
      backgroundColorDisabled: string;
    };
    dark: {
      color: string;
      colorHover: string;
      colorActive: string;
      backgroundColor: string;
      backgroundColorHover: string;
      backgroundColorActive: string;
      backgroundColorDisabled: string;
    };
  };
}

export default function ButtonMixin(sfButtonConfig: ButtonMixinProps): any {
  return withStyles((theme: Theme) => ({
    root: {
      color: sfButtonConfig.contained[theme.palette.type].color,
      backgroundColor:
        sfButtonConfig.contained[theme.palette.type].backgroundColor,
      '&:hover': {
        backgroundColor:
          sfButtonConfig.contained[theme.palette.type].backgroundColorHover
      },
      '&:active': {
        backgroundColor:
          sfButtonConfig.contained[theme.palette.type].backgroundColorActive
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600],
        backgroundColor:
          theme.palette.type === 'light' ? SFGrey[100] : SFGrey[800]
      }
    },
    disabled: {
      color: theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600],
      backgroundColor:
        theme.palette.type === 'light' ? SFGrey[100] : SFGrey[800]
    },
    outlined: {
      color: sfButtonConfig.outlined[theme.palette.type].color,
      borderColor: sfButtonConfig.outlined[theme.palette.type].borderColor,
      backgroundColor:
        sfButtonConfig.outlined[theme.palette.type].backgroundColor,
      '&:hover': {
        color: sfButtonConfig.outlined[theme.palette.type].colorHover,
        borderColor:
          sfButtonConfig.outlined[theme.palette.type].borderColorHover,
        backgroundColor:
          sfButtonConfig.outlined[theme.palette.type].backgroundColorHover
      },
      '&:active': {
        color: sfButtonConfig.outlined[theme.palette.type].colorActive,
        borderColor:
          sfButtonConfig.outlined[theme.palette.type].borderColorActive,
        backgroundColor:
          sfButtonConfig.outlined[theme.palette.type].backgroundColorActive
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600],
        backgroundColor: 'transparent',
        borderColor: theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
      }
    },
    text: {
      color: sfButtonConfig.text[theme.palette.type].color,
      backgroundColor: sfButtonConfig.text[theme.palette.type].backgroundColor,
      border: 'none',
      '&:hover': {
        color: sfButtonConfig.text[theme.palette.type].colorHover,
        backgroundColor:
          sfButtonConfig.text[theme.palette.type].backgroundColorHover,
        border: 'none'
      },
      '&:active': {
        color: sfButtonConfig.text[theme.palette.type].colorActive,
        backgroundColor:
          sfButtonConfig.text[theme.palette.type].backgroundColorActive,
        border: 'none'
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600],
        backgroundColor: 'transparent',
        borderColor: 'none'
      }
    }
  }))(Button);
}
