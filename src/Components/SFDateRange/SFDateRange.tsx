import * as React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core';
import { Calendar } from './Calendar/Calendar';
import { StyledDatePicker } from '../SFDatePicker/SFDatePicker';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { SFIcon } from '../SFIcon/SFIcon';

const useStyles = makeStyles({
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',

    '@media screen and (min-width: 768px)': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)'
    }
  },
  inputContainer: {
    '& > div': {
      width: '100%'
    }
  },
  calendarButton: {
    '&:focus-visible': {
      outline: 'auto'
    }
  }
});

export interface SFDateRangeValue {
  from?: string;
  to?: string;
}

export interface SFDateRangeProps {
  helperText?: string;
  value?: SFDateRangeValue;
  error?: boolean;
  min?: Date;
  max?: Date;
  initialRange?: number;
  disableFuture?: boolean;
  calendarClassName?: string;
  onChange: (value: SFDateRangeValue) => void;
}

export const SFDateRange = ({
  helperText,
  initialRange = 30,
  onChange,
  ...props
}: SFDateRangeProps): React.ReactElement<SFDateRangeProps> => {
  const classes = useStyles();

  const [isCalendarOpen, setIsCalendarOpen] = React.useState<boolean>(false);
  const [isFromFocused, setIsFromFocused] = React.useState<boolean>(false);
  const [isToFocused, setIsToFocused] = React.useState<boolean>(false);
  const refFrom = React.useRef<HTMLDivElement>(null);
  const refTo = React.useRef<HTMLDivElement>(null);
  const refFromInput = React.useRef<HTMLDivElement>(null);
  const refToInput = React.useRef<HTMLDivElement>(null);

  const onOpenCalendar = (target: 'from' | 'to'): void => {
    if (target === 'from') {
      setIsFromFocused(true);
      setIsToFocused(false);
    } else {
      setIsToFocused(true);
      setIsFromFocused(false);
    }
    setIsCalendarOpen(true);
  };

  const onClickAway = (e: React.MouseEvent<Document>): void => {
    if (
      (refFrom.current && refFrom.current?.contains(e.target as Node)) ||
      (refTo.current && refTo.current?.contains(e.target as Node))
    ) {
      return;
    }

    setIsCalendarOpen(false);
    setIsFromFocused(false);
    setIsToFocused(false);
  };

  const onSetFrom = (date: string | undefined | null): void => {
    onChange({
      from: date || undefined,
      to: undefined
    });

    if (refToInput.current && date && moment(date).isValid()) {
      refToInput.current.focus();
      setIsFromFocused(false);
      setIsToFocused(true);
    }
  };

  const onSetTo = (date: string | undefined | null): void => {
    onChange({
      from: props.value?.from,
      to: date || undefined
    });

    if (refFromInput.current && date && moment(date).isValid()) {
      refFromInput.current.focus();
      setIsFromFocused(true);
      setIsToFocused(false);
    }
  };

  const onSelect = (date: Date): void => {
    if (
      props.value?.from &&
      !props.value.to &&
      moment(date).isSameOrAfter(props.value.from)
    ) {
      onSetTo(date.toISOString());
    } else {
      onSetFrom(date.toISOString());
    }
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Escape') {
      setIsCalendarOpen(false);
    }
  };

  return (
    <React.Fragment>
      <Calendar
        className={props.calendarClassName}
        open={isCalendarOpen}
        anchorEl={refFrom.current}
        onClickAway={onClickAway}
        onSelect={onSelect}
        initialRange={initialRange}
        onClose={(): void => setIsCalendarOpen(false)}
        {...props}
      />

      <div className={classes.inputs}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div className={classes.inputContainer} ref={refFrom}>
            <StyledDatePicker
              inputRef={refFromInput}
              label='From'
              inputVariant='filled'
              format='MM/DD/YYYY'
              open={false}
              onOpen={(): void => onOpenCalendar('from')}
              helperText={helperText}
              value={props.value?.from || null}
              error={
                (!!props.value?.from && !moment(props.value.from).isValid()) ||
                props.error
              }
              keyboardIcon={<SFIcon icon='Callendar' size='24' />}
              required
              focused={isFromFocused}
              placeholder='mm/dd/yyyy'
              onFocus={(): void => onOpenCalendar('from')}
              onChange={(_d, v): void => onSetFrom(v)}
              onKeyDown={onKeyDown}
              KeyboardButtonProps={{
                className: classes.calendarButton,
                'aria-label': 'Open calendar'
              }}
            />
          </div>

          <div className={classes.inputContainer} ref={refTo}>
            <StyledDatePicker
              inputRef={refToInput}
              label='To'
              inputVariant='filled'
              format='MM/DD/YYYY'
              open={false}
              onOpen={(): void => onOpenCalendar('to')}
              helperText={helperText}
              value={props.value?.to || null}
              error={
                (!!props.value?.to && !moment(props.value.to).isValid()) ||
                props.error
              }
              keyboardIcon={<SFIcon icon='Callendar' size='24' />}
              required
              focused={isToFocused}
              placeholder='mm/dd/yyyy'
              onFocus={(): void => onOpenCalendar('to')}
              onChange={(_d, v): void => onSetTo(v)}
              onKeyDown={onKeyDown}
              KeyboardButtonProps={{
                className: classes.calendarButton,
                'aria-label': 'Open calendar'
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
    </React.Fragment>
  );
};
