import * as React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles
} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MomentUtils from '@date-io/moment';
import { SFGrey, SFRed } from '../../SFColors/SFColors';
import { SFIcon } from '../SFIcon/SFIcon';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePickerProps
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

const ButtonBackgrounds = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: `${
        theme.palette.type !== 'light' ? SFGrey[800] : undefined
      }`
    }
  })
);
const PopOverStyle = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: `${
        theme.palette.type !== 'light' ? SFGrey[800] : undefined
      }`
    }
  })
);
const StyledDatePicker = withStyles((theme: Theme) => ({
  root: {
    boxSizing: 'border-box',
    '& .MuiFilledInput-root': {
      border: `1px solid ${
        theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
      }`,
      borderRadius: 2,
      backgroundColor: 'transparent',
      boxSizing: 'border-box',
      '&:before': {
        content: `none !important`
      },
      '&:after': {
        content: `none !important`
      },
      '&:hover': {
        borderColor: `${
          theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
        }`
      },
      '&:active': {
        '& .MuiFilledInput-input': {
          padding: '26px 11px 7px'
        }
      },
      '&.Mui-focused': {
        '& .MuiFilledInput-input': {
          padding: '26px 11px 7px'
        }
      },
      '&.Mui-error': {
        border: `1px solid ${
          theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
        }`,
        '& .MuiFilledInput-input': {
          padding: '26px 11px 7px'
        }
      },
      '&.Mui-disabled': {
        border: `1px solid ${
          theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
        }`,
        '& .MuiFilledInput-input': {
          padding: '27px 11px 7px !important'
        }
      },
      '& .MuiFilledInput-input': {
        fontWeight: 400,
        fontSize: '16px',
        padding: '26px 11px 7px',
        '&.Mui-disabled': {
          color: `${theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]}`
        }
      }
    },
    '& .MuiInputLabel-filled': {
      fontSize: '16px',
      lineHeight: '24px',
      '&.MuiInputLabel-shrink': {
        fontSize: '14px',
        lineHeight: '20px',
        transform: `translate(12px, 6px)`,
        color: `${theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600]}`
      },
      '&.Mui-error': {
        color: `${theme.palette.type === 'light' ? SFRed[700] : SFRed[200]}`
      },
      '&.Mui-disabled': {
        color: `${theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]}`
      }
    },
    '& .MuiFormHelperText-root': {
      '&.Mui-error': {
        color: `${theme.palette.type === 'light' ? SFRed[700] : SFRed[200]}`
      }
    }
  },
  '& .MuiInputAdornment-root': {
    color: `${theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]}`
  }
}))(KeyboardDatePicker);

export interface SFDatePickerProps extends Partial<KeyboardDatePickerProps> {}

export const SFDatePicker = ({
  ...props
}: SFDatePickerProps): React.ReactElement<KeyboardDatePickerProps> => {
  const [selectedDate, handleDateChange] = React.useState<
    MaterialUiPickersDate
  >(null);
  const classes: Record<'paper', string> = PopOverStyle();
  const backgrounds: Record<'root', string> = ButtonBackgrounds();

  return (
    <FormControl fullWidth>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <StyledDatePicker
          {...props}
          disableToolbar
          value={selectedDate}
          variant='inline'
          label='mm/dd/yyyy'
          inputVariant='filled'
          format='MM/DD/YYYY'
          PopoverProps={{ classes: classes }}
          InputProps={{ readOnly: true }}
          rightArrowButtonProps={{ classes: backgrounds }}
          leftArrowButtonProps={{ classes: backgrounds }}
          keyboardIcon={<SFIcon icon='Callendar' size='32' />}
          onChange={(date: MaterialUiPickersDate): void => {
            handleDateChange(date);
          }}
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  );
};
