import * as React from 'react';
import moment from 'moment';
import {
  Chip,
  ClickAwayListener,
  makeStyles,
  Popper,
  Theme,
  useMediaQuery,
  withStyles
} from '@material-ui/core';
import { SFPaper } from '../../SFPaper/SFPaper';
import { SFMedia } from '../../../SFMedia/SFMedia';
import { Month } from './Month/Month';
import { YearList } from './YearList';
import { SFDateRangeValue } from '../SFDateRange';

function getInitialYear(value?: SFDateRangeValue): number {
  return (value?.from || new Date()).getFullYear();
}

function getInitialMonth(value?: SFDateRangeValue): number {
  return (value?.from || new Date()).getMonth() - 1;
}

function getNextMonth(year: number, month: number): Date {
  const nextYear = month === 11 ? year + 1 : year;
  const nextMonth = month === 11 ? 0 : month + 1;
  return new Date(nextYear, nextMonth, 1);
}

function getPrevMonth(year: number, month: number): Date {
  const prevYear = month === 0 ? year - 1 : year;
  const prevMonth = month === 0 ? 11 : month - 1;
  return new Date(prevYear, prevMonth, 1);
}

function formatDate(date: Date): string {
  return moment(date).format('ddd, MMM DD');
}

function getDateChipLabel(value?: SFDateRangeValue): string {
  let label = '';
  if (!value?.from) {
    return 'From - To';
  } else {
    label = `${formatDate(value.from)} - ${
      value?.to ? formatDate(value.to) : ''
    }`;
  }
  return label;
}

const StyledChip = withStyles((theme: Theme) => ({
  colorPrimary: {
    '&:hover, &:focus-visible': {
      '@media (hover: hover)': {
        backgroundColor:
          theme.palette.type === 'light'
            ? 'rgba(204, 235, 255, 0.4) !important'
            : 'rgba(128, 198, 255, 0.2) !important'
      }
    },
    '&:active': {
      backgroundColor:
        theme.palette.type === 'light'
          ? 'rgba(204, 235, 255, 0.6) !important'
          : 'rgba(128, 198, 255, 0.1) !important'
    }
  }
}))(Chip);

const useStyles = makeStyles({
  root: {
    zIndex: 2,
    boxShadow: '0px 8px 10px 1px rgba(0, 0, 0, 0.14)',
    marginTop: '3px'
  },
  paper: {
    boxSizing: 'border-box',
    padding: '24px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  chips: {
    display: 'flex',
    gap: '3px',
    padding: '0 24px'
  },
  days: {
    width: '312px',
    height: '304px',
    display: 'grid',
    gap: '20px',
    padding: '0 24px',
    boxSizing: 'border-box',
    gridTemplateColumns: '1fr',

    '@media screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
      width: '596px'
    }
  }
});

export interface CalendarProps {
  className?: string;
  open: boolean;
  anchorEl: HTMLDivElement | null;
  value?: SFDateRangeValue;
  min?: Date;
  max?: Date;
  initialRange?: number;
  disableFuture?: boolean;
  onSelect: (date: Date) => void;
  onClickAway: (e: React.MouseEvent<Document>) => void;
}

export const Calendar = (
  props: CalendarProps
): React.ReactElement<CalendarProps> => {
  const classes = useStyles();
  const isPhone = useMediaQuery(`(max-width: ${SFMedia.SM_WIDTH - 1}px)`);
  const [view, setView] = React.useState<'month' | 'year'>('month');
  const [year, setYear] = React.useState<number>(getInitialYear(props.value));
  const [month, setMonth] = React.useState<number>(
    getInitialMonth(props.value)
  );

  const onClickAway = (e: React.MouseEvent<Document>): void => {
    setView('month');
    props.onClickAway(e);
  };

  const onBack = (): void => {
    const prevMonth = getPrevMonth(year, month);
    setYear(prevMonth.getFullYear());
    setMonth(prevMonth.getMonth());
  };

  const onNext = (): void => {
    const nextMonth = getNextMonth(year, month);
    setYear(nextMonth.getFullYear());
    setMonth(nextMonth.getMonth());
  };

  const onSelectYear = (value: number): void => {
    setYear(value);
    setView('month');
  };

  const nextMonth = getNextMonth(year, month);

  return (
    <Popper
      className={`${props.className} ${classes.root}`}
      open={props.open}
      anchorEl={props.anchorEl}
      placement='top-start'
    >
      <ClickAwayListener onClickAway={onClickAway}>
        <SFPaper classes={{ root: classes.paper }}>
          <div className={classes.chips}>
            <StyledChip
              color='primary'
              variant='outlined'
              label={getDateChipLabel(props.value)}
              clickable
              onClick={(): void => setView('month')}
            />
            <StyledChip
              color='primary'
              variant='outlined'
              label={year}
              clickable
              onClick={(): void => setView('year')}
            />
          </div>

          {view === 'month' && (
            <div className={classes.days}>
              <Month
                year={year}
                month={month}
                min={props.min}
                max={props.disableFuture ? new Date() : props.max}
                value={props.value}
                initialRange={props.initialRange}
                onBack={onBack}
                onNext={isPhone ? onNext : undefined}
                onSelect={props.onSelect}
              />

              {!isPhone && (
                <Month
                  year={nextMonth.getFullYear()}
                  month={nextMonth.getMonth()}
                  min={props.min}
                  max={props.disableFuture ? new Date() : props.max}
                  value={props.value}
                  initialRange={props.initialRange}
                  onNext={onNext}
                  onSelect={props.onSelect}
                />
              )}
            </div>
          )}

          <YearList
            open={view === 'year'}
            selected={year}
            onSelect={onSelectYear}
          />
        </SFPaper>
      </ClickAwayListener>
    </Popper>
  );
};
