import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  LocalizationProvider,
  DatePicker,
  DatePickerProps,
  PickersDay,
  PickersDayProps
} from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { SFTextField, SFTextFieldProps } from '../SFTextField/SFTextField';
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
import { hexToRgba } from '../../Helpers';
import { SFIconButton, SFIconButtonProps } from '../SFIconButton/SFIconButton';
import { TextFieldProps } from '@mui/material';

// const useButtonBackgrounds = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       backgroundColor: `${
//         theme.palette.mode !== 'light' ? SFGrey[800] : undefined
//       }`
//     }
//   })
// );

export interface SFDatePickerProps extends DatePickerProps {
  className?: string;
  error?: boolean;
  helperText?: string;
}

const CustomPickersDay = styled(PickersDay)(({ theme }) => ({
  '&.MuiPickersDay-today': {
    backgroundColor: 'transparent'
  },
  '&.Mui-selected': {
    backgroundColor: 'red',
    '&:hover, &:active': {
      backgroundColor: 'red'
    }
  }
})) as React.ComponentType<PickersDayProps<Date>>;

const SFDatePickerBase = ({
  value = null,
  label,
  error = false,
  helperText = '',
  ...props
}: SFDatePickerProps): React.ReactElement<SFDatePickerProps> => {
  // const popOverStyle: Record<'paper', string> = usePopOverStyle();
  // const arrowStyle: Record<'root', string> = useButtonBackgrounds();
  const [openCalendarStyle, setOpenCalendarStyle] = React.useState<boolean>(
    false
  );

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        {...props}
        inputFormat='MM/DD/YYYY'
        value={value}
        label={label}
        onOpen={(): void => {
          setOpenCalendarStyle(true);
        }}
        onClose={(): void => {
          setOpenCalendarStyle(false);
        }}
        // DialogProps={{
        //   classes: popOverStyle,
        //   anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
        //   transformOrigin: { vertical: 'top', horizontal: 'left' }
        // }}
        renderInput={(
          props: TextFieldProps
        ): React.ReactElement<SFTextFieldProps> => (
          <SFTextField
            {...props}
            fullWidth
            variant='outlined'
            helperText={helperText}
            error={error}
            focused={openCalendarStyle || undefined}
          />
        )}
        renderDay={(
          day: Date,
          selectedDates: Array<Date | null>,
          pickersDayProps: PickersDayProps<Date>
        ) => <CustomPickersDay {...pickersDayProps} />}
      />
    </LocalizationProvider>
  );
};

export const SFDatePicker = styled(
  ({ className, ...props }: SFDatePickerProps) => (
    <SFDatePickerBase {...props} />
  )
)(({ theme }) => ({
  marginTop: '3px',
  marginLeft: '-2px',
  backgroundColor: `${
    theme.palette.mode !== 'light' ? SFGrey[800] : undefined
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
      theme.palette.mode !== 'light' ? SFGrey[800] : SFSurfaceLight
    }`,
    width: '100%',
    // Toolbar buttons
    '& .MuiPickersToolbarButton-toolbarBtn': {
      marginLeft: 24,
      padding: '0 12px',
      height: 34,
      borderRadius: 34,
      border: `1px solid ${
        theme.palette.mode !== 'light' ? SFBlueMainDark : SFBlueMainLight
      }`,
      '&:first-of-type': {
        marginLeft: 0
      },
      '&:hover': {
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? hexToRgba(SFBlue[100], 0.4)
            : hexToRgba(SFBlue[200], 0.2)
        }`
      },
      '&:active': {
        backgroundColor: `${
          theme.palette.mode === 'light'
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
        theme.palette.mode !== 'light' ? SFBlueMainDark : SFBlueMainLight
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
            theme.palette.mode !== 'light' ? SFTextWhite : SFTextBlack
          }`,
          backgroundColor: `${
            theme.palette.mode === 'light'
              ? hexToRgba(SFGrey[200], 0.3)
              : hexToRgba(SFGrey[500], 0.3)
          }`
        }
      },
      '& .MuiPickersYear-yearSelected': {
        margin: 0,
        color: `${theme.palette.mode !== 'light' ? SFTextBlack : SFTextWhite}`,
        backgroundColor: `${
          theme.palette.mode !== 'light' ? SFBlueMainDark : SFBlueMainLight
        }`,
        '&:hover': {
          backgroundColor: `${
            theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
          } !important`
        }
      }
    }
  }

  // '& .MuiPickersDay-root': {
  //   '&.MuiPickersDay-today': {
  //     // color: theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200],
  //     border: `1px solid ${
  //       theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
  //     }`
  //   },

  //   '&.Mui-selected': {
  //     backgroundColor: `${
  //       theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
  //     }`,

  //     '&:hover': {
  //       backgroundColor: `${
  //         theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
  //       }`
  //     }
  //   }
  // }
}));
