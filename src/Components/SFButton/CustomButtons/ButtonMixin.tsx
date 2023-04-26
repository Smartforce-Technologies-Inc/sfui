import { Button, styled } from '@mui/material';
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

// TODO: Fix this 'any' return type
export default function ButtonMixin(sfButtonConfig: ButtonMixinProps): any {
  return styled(Button)(({ theme }) => ({
    display: 'flex',
    gap: '6px',
    color: sfButtonConfig.contained[theme.palette.mode].color,
    textTransform: 'unset',
    backgroundColor:
      sfButtonConfig.contained[theme.palette.mode].backgroundColor,
    '@media (hover: hover)': {
      '&:hover, &:focus': {
        backgroundColor:
          sfButtonConfig.contained[theme.palette.mode].backgroundColorHover
      },
      '&:active': {
        backgroundColor:
          sfButtonConfig.contained[theme.palette.mode].backgroundColorActive
      }
    },
    '@media (hover: none)': {
      '&:hover, &:focus': {
        color: sfButtonConfig.contained[theme.palette.mode].color,
        backgroundColor:
          sfButtonConfig.contained[theme.palette.mode].backgroundColor
      },
      '&:active': {
        backgroundColor:
          sfButtonConfig.contained[theme.palette.mode].backgroundColorActive
      }
    },
    '& .MuiCircularProgress-circle': {
      color: sfButtonConfig.contained[theme.palette.mode].color
    },
    '&.MuiButton-outlined': {
      color: sfButtonConfig.outlined[theme.palette.mode].color,
      borderColor: sfButtonConfig.outlined[theme.palette.mode].borderColor,
      textTransform: 'unset',
      backgroundColor:
        sfButtonConfig.outlined[theme.palette.mode].backgroundColor,
      '@media (hover: hover)': {
        '&:hover, &:focus': {
          color: sfButtonConfig.outlined[theme.palette.mode].colorHover,
          borderColor:
            sfButtonConfig.outlined[theme.palette.mode].borderColorHover,
          backgroundColor:
            sfButtonConfig.outlined[theme.palette.mode].backgroundColorHover
        },
        '&:active': {
          color: sfButtonConfig.outlined[theme.palette.mode].colorActive,
          borderColor:
            sfButtonConfig.outlined[theme.palette.mode].borderColorActive,
          backgroundColor:
            sfButtonConfig.outlined[theme.palette.mode].backgroundColorActive
        }
      },
      '@media (hover: none)': {
        '&:hover, &:focus': {
          color: sfButtonConfig.outlined[theme.palette.mode].color,
          borderColor: sfButtonConfig.outlined[theme.palette.mode].borderColor,
          backgroundColor:
            sfButtonConfig.outlined[theme.palette.mode].backgroundColor
        },
        '&:active': {
          color: sfButtonConfig.outlined[theme.palette.mode].colorActive,
          borderColor:
            sfButtonConfig.outlined[theme.palette.mode].borderColorActive,
          backgroundColor:
            sfButtonConfig.outlined[theme.palette.mode].backgroundColorActive
        }
      },
      '& .MuiCircularProgress-circle': {
        color: sfButtonConfig.outlined[theme.palette.mode].color
      }
    },
    '&.MuiButton-text': {
      color: sfButtonConfig.text[theme.palette.mode].color,
      backgroundColor: sfButtonConfig.text[theme.palette.mode].backgroundColor,
      border: 'none',
      '@media (hover: hover)': {
        '&:hover, &:focus': {
          color: sfButtonConfig.text[theme.palette.mode].colorHover,
          backgroundColor:
            sfButtonConfig.text[theme.palette.mode].backgroundColorHover,
          border: 'none'
        },
        '&:active': {
          color: sfButtonConfig.text[theme.palette.mode].colorActive,
          backgroundColor:
            sfButtonConfig.text[theme.palette.mode].backgroundColorActive,
          border: 'none'
        }
      },
      '@media (hover: none)': {
        '&:hover, &:focus': {
          color: sfButtonConfig.text[theme.palette.mode].color,
          backgroundColor:
            sfButtonConfig.text[theme.palette.mode].backgroundColor,
          border: 'none'
        },
        '&:active': {
          color: sfButtonConfig.text[theme.palette.mode].colorActive,
          backgroundColor:
            sfButtonConfig.text[theme.palette.mode].backgroundColorActive,
          border: 'none'
        }
      },
      '& .MuiCircularProgress-circle': {
        color: sfButtonConfig.text[theme.palette.mode].color
      }
    },
    '&.Mui-disabled': {
      color: theme.palette.mode === 'light' ? SFGrey[400] : SFGrey[600],
      backgroundColor:
        theme.palette.mode === 'light' ? SFGrey[100] : SFGrey[800],
      '& .MuiCircularProgress-circle': {
        color: theme.palette.mode === 'light' ? SFGrey[400] : SFGrey[600]
      },

      '&.MuiButton-outlined': {
        backgroundColor: 'transparent',
        borderColor: theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
      },

      '&.MuiButton-text': {
        backgroundColor: 'transparent'
      }
    }
  }));
}
