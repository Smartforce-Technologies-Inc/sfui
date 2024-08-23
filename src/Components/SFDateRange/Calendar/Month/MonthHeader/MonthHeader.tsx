import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { SFIconButton } from '../../../../SFIconButton/SFIconButton';
import { SFText } from '../../../../SFText/SFText';
import { WeekHeader } from './WeekHeader';

function getName(month: number): string {
  return new Date(2000, month, 1).toLocaleString('default', {
    month: 'long'
  });
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'center'
  },
  monthName: {
    display: 'grid',
    gridTemplateColumns: '34px 1fr 34px',
    gap: '8px',
    alignItems: 'center'
  }
});

export interface MonthHeaderProps {
  month: number;
  onBack?: () => void;
  onNext?: () => void;
}

export const MonthHeader = ({
  month,
  onBack,
  onNext
}: MonthHeaderProps): React.ReactElement<MonthHeaderProps> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.monthName}>
        {onBack ? (
          <SFIconButton sfSize='small' sfIcon='Left-2' onClick={onBack} />
        ) : (
          <span />
        )}

        <SFText type='component-1'>{getName(month)}</SFText>

        {onNext ? (
          <SFIconButton sfSize='small' sfIcon='Right-2' onClick={onNext} />
        ) : (
          <span />
        )}
      </div>

      <WeekHeader />
    </div>
  );
};
