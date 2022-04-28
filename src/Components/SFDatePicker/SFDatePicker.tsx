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
  SFCommonBlack,
  SFCommonWhite,
  SFGrey
} from '../../SFColors/SFColors';
import { SFIcon } from '../SFIcon/SFIcon';
import { hexToRgba } from '../../Helpers';
import { TextFieldProps } from '@mui/material';

export interface SFDatePickerProps extends DatePickerProps {
  className?: string;
  error?: boolean;
  helperText?: string;
}

const StyledTextField = styled(SFTextField)(({ theme }) => ({
  paddingRight: '12px',

  '& .MuiIconButton-root': {
    padding: '12px',
    '&:hover': {
      '@media (hover: hover)': {
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? 'rgba(204, 204, 204, 0.3)'
            : 'rgba(128, 128, 128, 0.3)'
        }`
      }
    },
    '&:active': {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? 'rgba(204, 204, 204, 0.5)'
          : 'rgba(128, 128, 128, 0.2)'
      }`
    }
  }
}));

const CustomPickersDay = styled(PickersDay)(({ theme }) => ({
  backgroundColor: 'transparent',

  '&:hover, &:active, &:focus': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? hexToRgba(SFGrey[200], 0.3)
        : hexToRgba(SFGrey[200], 0.3)
  },

  '&.MuiPickersDay-today': {
    color: theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200],
    borderColor: theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200],
    '&.Mui-selected': {
      color: theme.palette.mode === 'light' ? SFCommonWhite : SFCommonBlack
    }
  },

  '&.Mui-selected': {
    backgroundColor: theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200],
    '&:hover, &:active, &:focus': {
      backgroundColor:
        theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
    }
  }
})) as React.ComponentType<PickersDayProps<Date>>;

const renderDay = (
  _day: Date,
  _selectedDates: Array<Date | null>,
  pickersDayProps: PickersDayProps<Date>
): JSX.Element => <CustomPickersDay {...pickersDayProps} />;

const SFDatePickerBase = ({
  value = null,
  label,
  error = false,
  helperText = '',
  ...props
}: SFDatePickerProps): React.ReactElement<SFDatePickerProps> => {
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
        showToolbar
        toolbarFormat='ddd, MMM D YYYY'
        onOpen={(): void => setOpenCalendarStyle(true)}
        onClose={(): void => setOpenCalendarStyle(false)}
        components={{
          OpenPickerIcon: (): JSX.Element => (
            <SFIcon icon='Callendar' size='24' />
          )
        }}
        renderInput={(
          props: TextFieldProps
        ): React.ReactElement<SFTextFieldProps> => (
          <StyledTextField
            {...props}
            fullWidth
            variant='outlined'
            helperText={helperText}
            error={error}
            focused={openCalendarStyle || undefined}
          />
        )}
        renderDay={renderDay}
      />
    </LocalizationProvider>
  );
};

export const SFDatePicker = styled(
  ({ className, ...props }: SFDatePickerProps) => (
    <SFDatePickerBase
      {...props}
      PaperProps={{ classes: { root: className } }}
      DialogProps={{ classes: { root: className } }}
    />
  )
)(({ theme }) => ({
  marginTop: '3px',

  '& .MuiDialogActions-root': {
    display: 'none'
  },

  '& .PrivatePickersToolbar-root': {
    padding: '20px 24px 0 24px',

    '& > span': {
      display: 'none'
    },

    '& .PrivatePickersToolbar-dateTitleContainer': {
      '> button': {
        display: 'none'
      }
    }
  },

  '& .MuiCalendarPicker-root': {
    '& .PrivatePickersSlideTransition-root': {
      minHeight: '216px'
    },
    '& .MuiIconButton-root': {
      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor: `${
            theme.palette.mode === 'light'
              ? 'rgba(204, 204, 204, 0.3)'
              : 'rgba(128, 128, 128, 0.3)'
          }`
        }
      },
      '&:active': {
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? 'rgba(204, 204, 204, 0.5)'
            : 'rgba(128, 128, 128, 0.2)'
        }`
      }
    },

    '& .MuiYearPicker-root': {
      '& .PrivatePickersYear-yearButton': {
        '&:hover, &:active, &:focus': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? hexToRgba(SFGrey[200], 0.3)
              : hexToRgba(SFGrey[200], 0.3)
        },

        '&.Mui-selected': {
          backgroundColor:
            theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200],
          '&:hover, &:active, &:focus': {
            backgroundColor:
              theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
          }
        }
      }
    }
  }
}));
