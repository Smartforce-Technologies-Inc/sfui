import * as React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core';
import { MonthHeader } from './MonthHeader/MonthHeader';
import { SFDateRangeValue } from '../../SFDateRange';
import { SFPaper } from '../../../SFPaper/SFPaper';
import { DatePick } from '../DatePick';

function getDays(year: number, month: number): string[] {
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array(35).fill('');
  const firstDayOfWeek = new Date(year, month, 0).getDay();
  let dayIndex = 1;
  for (let i = firstDayOfWeek; i < firstDayOfWeek + daysInMonth; i++) {
    days[i + 1] = dayIndex.toString();
    dayIndex++;
  }
  return days;
}

function isCurrent(year: number, month: number, day: number): boolean {
  return moment().isSame(new Date(year, month, day), 'day');
}

function isSelected(
  year: number,
  month: number,
  day: number,
  value?: SFDateRangeValue
): boolean {
  return (
    (!!value?.from &&
      moment(value.from).isSame(new Date(year, month, day), 'day')) ||
    (!!value?.to && moment(value.to).isSame(new Date(year, month, day), 'day'))
  );
}

function isDisabled(
  year: number,
  month: number,
  day: number,
  min?: Date,
  max?: Date
): boolean {
  const dayDate = moment(new Date(year, month, day));
  if (min && dayDate.isBefore(min)) {
    return true;
  }
  if (max && dayDate.isAfter(max)) {
    return true;
  }
  return false;
}

function isInRange(
  year: number,
  month: number,
  day: number,
  value?: SFDateRangeValue,
  initialRange?: number
): boolean {
  const dayDate = moment(new Date(year, month, day));
  if (value?.from) {
    if (value.to) {
      return dayDate.isBetween(value.from, value.to, 'day', '[]');
    } else if (initialRange) {
      return dayDate.isBetween(
        value.from,
        moment(value.from).add(initialRange, 'day'),
        'day',
        '[]'
      );
    }
  }

  return false;
}

function isLastInRange(
  year: number,
  month: number,
  day: number,
  value?: SFDateRangeValue,
  initialRange?: number
): boolean {
  const dayDate = moment(new Date(year, month, day));
  if (value?.from) {
    return value.to
      ? dayDate.isSame(value.to, 'day')
      : dayDate.isSame(moment(value.from).add(initialRange, 'day'), 'day');
  }

  return false;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },

  days: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)'
  }
});

export interface MonthProps {
  year: number;
  month: number;
  min?: Date;
  max?: Date;
  value?: SFDateRangeValue;
  initialRange?: number;
  onBack?: () => void;
  onNext?: () => void;
  onSelect: (date: Date) => void;
}

export const Month = ({
  year,
  month,
  min,
  max,
  value,
  initialRange,
  onBack,
  onNext,
  onSelect
}: MonthProps): React.ReactElement<MonthProps> => {
  const classes = useStyles();

  return (
    <SFPaper classes={{ root: classes.root }}>
      <MonthHeader month={month} onBack={onBack} onNext={onNext} />

      <div className={classes.days}>
        {getDays(year, month).map((day, i) => {
          if (day.length === 0) return <span key={`${year}-${month}-${i}`} />;
          else {
            return (
              <DatePick
                key={`${year}-${month}-${i}`}
                label={day}
                selected={isSelected(year, month, +day, value)}
                disabled={isDisabled(year, month, +day, min, max)}
                current={isCurrent(year, month, +day)}
                inRange={isInRange(year, month, +day, value, initialRange)}
                lastInRange={isLastInRange(
                  year,
                  month,
                  +day,
                  value,
                  initialRange
                )}
                onSelect={(): void => onSelect(new Date(year, month, +day))}
              />
            );
          }
        })}
      </div>
    </SFPaper>
  );
};
