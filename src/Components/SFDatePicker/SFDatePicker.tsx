import * as React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles
} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MomentUtils from '@date-io/moment';
import { SFBlue, SFGrey, SFRed } from '../../SFColors/SFColors';
import { SFIcon } from '../SFIcon/SFIcon';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePickerProps
} from '@material-ui/pickers';
import { hexToRgba } from '../../helpers';

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
      backgroundColor: `${
        theme.palette.type !== 'light' ? SFGrey[800] : undefined
      }`
    }
  })
);

const StyledDatePicker = withStyles((theme: Theme) => ({
  root: {
    boxSizing: 'border-box',

    '&.openCalendarStyle': {
      '& .MuiFilledInput-root': {
        border: `2px solid ${
          theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
        }`
      }
    },

    '& .MuiFilledInput-root': {
      height: '56px',
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${
        theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
      }`,
      borderRadius: 2,
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
        border: `2px solid ${
          theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
        }`,

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
          padding: '26px 11px 7px !important'
        }
      },

      '& .MuiFilledInput-input': {
        fontWeight: 400,
        fontSize: '16px',
        padding: '26px 11px 7px',

        '&.Mui-disabled': {
          color: `${theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]}`
        }
      },

      '& .MuiIconButton-root': {
        '&:hover': {
          backgroundColor: `${
            theme.palette.type === 'light'
              ? hexToRgba(SFGrey[200], 0.3)
              : hexToRgba(SFGrey[500], 0.3)
          }`
        },

        '&:active': {
          backgroundColor: `${
            theme.palette.type === 'light'
              ? hexToRgba(SFGrey[200], 0.5)
              : hexToRgba(SFGrey[500], 0.2)
          }`
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
      backgroundColor: 'transparent',

      '&.Mui-error': {
        color: `${theme.palette.type === 'light' ? SFRed[700] : SFRed[200]}`
      }
    }
  }
}))(KeyboardDatePicker);

export interface SFDatePickerProps extends KeyboardDatePickerProps {}

export const SFDatePicker = ({
  value = null,
  ...props
}: SFDatePickerProps): React.ReactElement<KeyboardDatePickerProps> => {
  const popOverStyle: Record<'paper', string> = usePopOverStyle();
  const arrowStyle: Record<'root', string> = useButtonBackgrounds();
  const containerRef = React.createRef<HTMLDivElement>();
  const [openCalendarStyle, setOpenCalendarStyle] = React.useState<boolean>(
    false
  );

  return (
    <FormControl fullWidth>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <StyledDatePicker
          {...props}
          ref={containerRef}
          disableToolbar
          className={openCalendarStyle ? 'openCalendarStyle' : undefined}
          value={value}
          variant='inline'
          inputVariant='filled'
          format='MM/DD/YYYY'
          onOpen={() => setOpenCalendarStyle(true)}
          onClose={() => setOpenCalendarStyle(false)}
          PopoverProps={{
            classes: popOverStyle,
            container: containerRef.current,
            anchorOrigin: { vertical: 'top', horizontal: 'left' },
            transformOrigin: { vertical: 'top', horizontal: 'left' }
          }}
          InputProps={{ readOnly: true }}
          rightArrowButtonProps={{ classes: arrowStyle }}
          rightArrowIcon={<SFIcon icon='Right-2' size='10' />}
          leftArrowButtonProps={{ classes: arrowStyle }}
          leftArrowIcon={<SFIcon icon='Left-2' size='10' />}
          keyboardIcon={<SFIcon icon='Callendar' size='24' />}
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  );
};
