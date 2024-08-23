import * as React from 'react';
import moment from 'moment';
import { InputAdornment, makeStyles } from '@material-ui/core';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { Calendar } from './Calendar/Calendar';

const useStyles = makeStyles({
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',

    '@media screen and (min-width: 768px)': {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)'
    }
  }
});

export interface SFDateRangeValue {
  from?: Date;
  to?: Date;
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
  initialRange = 31,
  onChange,
  ...props
}: SFDateRangeProps): React.ReactElement<SFDateRangeProps> => {
  const classes = useStyles();

  const [isCalendarOpen, setIsCalendarOpen] = React.useState<boolean>(false);
  const [isFromFocused, setIsFromFocused] = React.useState<boolean>(false);
  const [isToFocused, setIsToFocused] = React.useState<boolean>(false);
  const refFromInput = React.useRef<HTMLDivElement>(null);
  const refToInput = React.useRef<HTMLDivElement>(null);

  const onOpenCalendar = (): void => setIsCalendarOpen(true);

  const onClickAway = (e: React.MouseEvent<Document>): void => {
    if (
      e.target !== refFromInput.current?.querySelector('input') &&
      e.target !== refToInput.current?.querySelector('input')
    ) {
      setIsCalendarOpen(false);
      setIsFromFocused(false);
      setIsToFocused(false);
    }
  };

  const onSetFrom = (date: Date): void => {
    setIsToFocused(true);
    setIsFromFocused(false);
    onChange({
      from: date,
      to: undefined
    });
  };

  const onSetTo = (date: Date): void => {
    setIsToFocused(false);
    setIsFromFocused(true);
    onChange({
      from: props.value?.from,
      to: date
    });
  };

  const onSelect = (date: Date): void => {
    if (
      props.value?.from &&
      !props.value.to &&
      moment(date).isSameOrAfter(props.value.from)
    ) {
      onSetTo(date);
    } else {
      onSetFrom(date);
    }
  };

  return (
    <React.Fragment>
      <Calendar
        className={props.calendarClassName}
        open={isCalendarOpen}
        anchorEl={refFromInput.current}
        onClickAway={onClickAway}
        onSelect={onSelect}
        initialRange={initialRange}
        {...props}
      />

      <div className={classes.inputs}>
        <SFTextField
          ref={refFromInput}
          label='From'
          required
          error={props.error}
          focused={isFromFocused}
          placeholder='mm/dd/yyyy'
          onFocus={(): void => {
            setIsFromFocused(true);
            onOpenCalendar();
          }}
          helperText={helperText}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position='end'>
                <SFIconButton
                  aria-label='Open calendar'
                  sfIcon='Callendar'
                  sfSize='medium'
                  onClick={onOpenCalendar}
                />
              </InputAdornment>
            )
          }}
          value={
            props.value?.from
              ? moment(props.value.from).format('MM/DD/YYYY')
              : ''
          }
        />

        <SFTextField
          aria-label='Date to'
          ref={refToInput}
          label='To'
          required
          error={props.error}
          focused={isToFocused}
          placeholder='mm/dd/yyyy'
          onFocus={onOpenCalendar}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position='end'>
                <SFIconButton
                  aria-label='Open calendar'
                  sfIcon='Callendar'
                  sfSize='medium'
                  onClick={(): void => setIsCalendarOpen(true)}
                />
              </InputAdornment>
            )
          }}
          value={
            props.value?.to ? moment(props.value.to).format('MM/DD/YYYY') : ''
          }
        />
      </div>
    </React.Fragment>
  );
};
