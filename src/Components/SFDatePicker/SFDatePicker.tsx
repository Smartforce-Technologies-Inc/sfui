import * as React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles
} from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import {
  SFBlue,
  SFBlueMainDark,
  SFBlueMainLight,
  SFGrey,
  SFRed,
  SFSurfaceLight,
  SFTextBlack,
  SFTextWhite
} from '../../SFColors/SFColors';
import { SFIcon } from '../SFIcon/SFIcon';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePickerProps
} from '@material-ui/pickers';
import { hexToRgba } from '../../Helpers';
import { SFMaterialUiPickersDate } from '../../SFTypes';
import { SFTextField } from '../SFTextField/SFTextField';

const useButtonBackgrounds = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: `${
        theme.palette.type !== 'light' ? SFGrey[800] : undefined
      }`
    }
  })
);

const usePopOverStyle = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: '3px',
      marginLeft: '-2px',
      backgroundColor: `${
        theme.palette.type !== 'light' ? SFGrey[800] : undefined
      }`,
      '& .MuiPickersBasePicker-container': {
        paddingTop: 20
      },
      // Toolbar
      '& .MuiPickersDatePickerRoot-toolbar': {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 2,
        height: 40,
        minHeight: 40,
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: `${
          theme.palette.type !== 'light' ? SFGrey[800] : SFSurfaceLight
        }`,
        width: '100%',
        // Toolbar buttons
        '& .MuiPickersToolbarButton-toolbarBtn': {
          marginLeft: 24,
          padding: '0 12px',
          height: 34,
          borderRadius: 34,
          border: `1px solid ${
            theme.palette.type !== 'light' ? SFBlueMainDark : SFBlueMainLight
          }`,
          '&:first-child': {
            marginLeft: 0
          },
          '&:hover': {
            backgroundColor: `${
              theme.palette.type === 'light'
                ? hexToRgba(SFBlue[100], 0.4)
                : hexToRgba(SFBlue[200], 0.2)
            }`
          },
          '&:active': {
            backgroundColor: `${
              theme.palette.type === 'light'
                ? hexToRgba(SFBlue[100], 0.6)
                : hexToRgba(SFBlue[200], 0.1)
            }`
          }
        },
        '& .MuiPickersToolbarText-toolbarBtnSelected, & .MuiPickersToolbarText-toolbarTxt': {
          fontSize: 16,
          lineHeight: '24px',
          fontWeight: 400,
          color: `${
            theme.palette.type !== 'light' ? SFBlueMainDark : SFBlueMainLight
          }`
        }
      },
      // Calendar Header
      '& .MuiPickersCalendarHeader-switchHeader': {
        gap: 4,
        padding: '0px 24px',
        marginTop: 0,
        marginBottom: 18,
        '& .MuiPickersCalendarHeader-transitionContainer p': {
          fontSize: 16,
          lineHeight: '24px',
          fontWeight: 400
        }
      },
      // Day/Year Picker
      '& .MuiPickersBasePicker-pickerView': {
        maxWidth: 312,
        minWidth: 312,
        marginTop: 10,
        '& .MuiPickersYearSelection-container': {
          padding: '0 24px 0',
          marginTop: 0,
          '& .MuiPickersYear-root': {
            display: 'inline-flex',
            height: 36,
            width: 62,
            margin: 0,
            fontSize: 14,
            lineHeight: '20px',
            borderRadius: 36,
            '&:hover, &:active': {
              color: `${
                theme.palette.type !== 'light' ? SFTextWhite : SFTextBlack
              }`,
              backgroundColor: `${
                theme.palette.type === 'light'
                  ? hexToRgba(SFGrey[200], 0.3)
                  : hexToRgba(SFGrey[500], 0.3)
              }`
            }
          },
          '& .MuiPickersYear-yearSelected': {
            margin: 0,
            color: `${
              theme.palette.type !== 'light' ? SFTextBlack : SFTextWhite
            }`,
            backgroundColor: `${
              theme.palette.type !== 'light' ? SFBlueMainDark : SFBlueMainLight
            }`,
            '&:hover': {
              backgroundColor: `${
                theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
              } !important`
            }
          }
        }
      },
      '& .MuiPickersDay-current': {
        border: `1px solid ${
          theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
        }`
      },
      '& .MuiIconButton-root:hover': {
        backgroundColor: `${
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey[200], 0.3)
            : hexToRgba(SFGrey[500], 0.3)
        }`
      },
      '& .MuiPickersDay-daySelected:hover': {
        backgroundColor: `${
          theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
        }`
      }
    }
  })
);

const StyledDatePicker = withStyles((theme: Theme) => ({
  root: {
    boxSizing: 'border-box',

    '&.openCalendarStyle': {
      '& .MuiInputBase-root': {
        border: `2px solid ${
          theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
        }`,

        '& .MuiInputBase-input': {
          padding: '26px 10px 7px'
        }
      },
      '& .MuiInputLabel-root': {
        '&.MuiInputLabel-shrink': {
          color: theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
        }
      }
    },

    '& .MuiInputBase-root': {
      '&:before': {
        content: `none !important`
      },

      '&:after': {
        content: `none !important`
      },

      '&.Mui-focused': {
        '& .MuiInputBase-input': {
          padding: '26px 10px 7px'
        },
        '& .MuiInputAdornment-root': {
          marginRight: '-1px'
        }
      },

      '&.Mui-error': {
        '&.MuiInputBase-adornedEnd': {
          paddingRight: '12px'
        }
      },

      '&.Mui-disabled': {
        '&.MuiInputBase-adornedEnd': {
          paddingRight: '12px'
        }
      },

      '& .MuiInputBase-input': {
        fontWeight: 400,
        fontSize: '16px',
        padding: '26px 11px 7px',

        '&.MuiInputBase-adornedEnd': {
          paddingRight: '12px'
        }
      },

      '& .MuiIconButton-root': {
        '@media (hover: hover)': {
          '&:hover': {
            backgroundColor: `${
              theme.palette.type === 'light'
                ? hexToRgba(SFGrey[200], 0.3)
                : hexToRgba(SFGrey[500], 0.3)
            }`
          }
        },

        '&:active': {
          backgroundColor: `${
            theme.palette.type === 'light'
              ? hexToRgba(SFGrey[200], 0.5)
              : hexToRgba(SFGrey[500], 0.2)
          }`
        },

        '&.Mui-disabled': {
          '& .MuiIconButton-label': {
            '& svg path': {
              fill: `${
                theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
              } !important`
            }
          }
        }
      }
    }
  }
}))(KeyboardDatePicker);

export interface SFDatePickerProps extends KeyboardDatePickerProps {
  onChange: (
    date: SFMaterialUiPickersDate | null,
    value?: string | null
  ) => void;
}

export const SFDatePicker = ({
  value = null,
  label,
  ...props
}: SFDatePickerProps): React.ReactElement<KeyboardDatePickerProps> => {
  const popOverStyle: Record<'paper', string> = usePopOverStyle();
  const arrowStyle: Record<'root', string> = useButtonBackgrounds();
  const [openCalendarStyle, setOpenCalendarStyle] = React.useState<boolean>(
    false
  );

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <StyledDatePicker
        {...props}
        fullWidth
        className={openCalendarStyle ? 'openCalendarStyle' : ''}
        value={value}
        variant='inline'
        format='MM/DD/YYYY'
        label={label}
        onOpen={(): void => {
          setOpenCalendarStyle(true);
        }}
        onClose={(): void => {
          setOpenCalendarStyle(false);
        }}
        PopoverProps={{
          classes: popOverStyle,
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          transformOrigin: { vertical: 'top', horizontal: 'left' }
        }}
        rightArrowButtonProps={{
          classes: arrowStyle,
          ...props.rightArrowButtonProps
        }}
        rightArrowIcon={<SFIcon icon='Right-2' size='10' />}
        leftArrowButtonProps={{
          classes: arrowStyle,
          ...props.leftArrowButtonProps
        }}
        leftArrowIcon={<SFIcon icon='Left-2' size='10' />}
        keyboardIcon={<SFIcon icon='Callendar' size='24' />}
        TextFieldComponent={SFTextField}
      />
    </MuiPickersUtilsProvider>
  );
};
