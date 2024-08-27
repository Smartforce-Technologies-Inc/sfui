import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { DatePick } from './DatePick';

function getYearList(min: number, max: number): number[] {
  let result: number[] = [];
  for (let i = min; i <= max; i++) {
    result = [...result, i];
  }
  return result;
}

const useStyles = makeStyles({
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '312px',
    height: '270px',
    overflowY: 'auto',
    padding: '0 24px',
    boxSizing: 'border-box'
  },
  year: {
    width: '62px',
    height: '36px',
    margin: 0,
    display: 'inline-flex',
    borderRadius: '36px'
  }
});

export interface YearListProps {
  open: boolean;
  min?: number;
  max?: number;
  selected: number;
  onSelect: (year: number) => void;
}

export const YearList = ({
  open,
  min = 1899,
  max = 2099,
  selected,
  onSelect
}: YearListProps): React.ReactElement<YearListProps> => {
  const classes = useStyles();
  const refSelected = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refSelected.current && open) {
      refSelected.current.scrollIntoView({ block: 'center' });
    }
  }, [open]);

  return (
    <div className={classes.list} style={{ display: open ? 'grid' : 'none' }}>
      {getYearList(min, max).map((year: number) => (
        <div
          key={`select-year-${year}`}
          ref={selected === year ? refSelected : undefined}
        >
          <DatePick
            className={classes.year}
            label={year.toString()}
            selected={selected === year}
            onSelect={(): void => onSelect(year)}
          />
        </div>
      ))}
    </div>
  );
};
