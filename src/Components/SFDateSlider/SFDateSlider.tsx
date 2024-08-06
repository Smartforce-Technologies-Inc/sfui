import React from 'react';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Slider, { Mark, SliderProps } from '@material-ui/core/Slider';
import {
  SFBlue,
  SFGrey,
  SFSurfaceDark,
  SFSurfaceLight,
  SFTextWhite,
  SFTextBlack
} from '../../SFColors/SFColors';
import moment, { Moment } from 'moment';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  dates: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    lineHeight: '20px'
  },
  wrapper: {
    padding: '0 8px'
  }
});

const StyledSlider = withStyles((theme: Theme) => ({
  root: {
    color: `${theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]}`,
    height: 6,
    padding: '12px 0'
  },
  thumb: {
    height: 16,
    width: 16,
    marginTop: -4,
    marginLeft: -8,
    backgroundColor: `${
      theme.palette.type === 'light' ? SFSurfaceLight : SFSurfaceDark
    }`,
    border: '2px solid currentColor',

    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    },
    '&.Mui-disabled': {
      height: 16,
      width: 16,
      marginTop: -4,
      marginLeft: -8
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4,
    color: `${
      theme.palette.type === 'light' ? SFGrey[100] : SFGrey[700]
    } !important`,
    opacity: 1
  },
  marked: {
    margin: '40px 0 0 0'
  },
  mark: {
    backgroundColor: `${
      theme.palette.type === 'light' ? SFGrey[300] : SFGrey[600]
    } !important`,
    width: '1px',
    height: '6px',
    top: -18,
    '&:nth-child(8n+4)': {
      height: '14px',
      top: -26
    }
  },
  markActive: {
    backgroundColor: `${
      theme.palette.type === 'light' ? SFGrey[300] : SFGrey[600]
    } !important`
  },
  markLabel: {
    color: `${
      theme.palette.type === 'light' ? SFTextBlack : SFTextWhite
    } !important`,
    fontSize: '10px',
    top: -12
  }
}))(Slider);

const getMax = (minDate: Moment, maxDate: Moment): number => {
  return moment.duration(maxDate.diff(minDate)).as('minutes');
};

const getMarks = (minDate: Moment, timeUnit: number, max: number): Mark[] => {
  let marks: Mark[] = [];
  const fraction: number = 60 / timeUnit;
  const cloneStartDate: Moment = minDate.clone();

  for (let i = 0; i <= max; i = i + timeUnit) {
    let label = '';

    if (i % fraction === 0) {
      label = `${cloneStartDate.format('HH:mm')}`;
      if (label.endsWith(':00')) {
        label = label.split(':')[0];
      }
    }

    cloneStartDate.add(timeUnit, 'minutes');

    marks = [...marks, { value: i, label: label }];
  }

  return marks;
};

const getValue = (
  minDate: Moment,
  selectedStartDate: Moment,
  selectedEndDate: Moment
): number[] => {
  return [
    moment.duration(selectedStartDate.diff(minDate)).as('minutes'),
    moment.duration(selectedEndDate.diff(minDate)).as('minutes')
  ];
};

export interface SFDateSliderProps
  extends Omit<
    SliderProps,
    | 'color'
    | 'min'
    | 'max'
    | 'step'
    | 'marks'
    | 'orientation'
    | 'valueLabelDisplay'
    | 'value'
    | 'onChange'
  > {
  minDate: string;
  maxDate: string;
  value?: string[];
  onChange: (value: string[]) => void;
}

export const SFDateSlider = ({
  minDate,
  maxDate,
  value,
  onChange,
  ...props
}: SFDateSliderProps): React.ReactElement<SFDateSliderProps> => {
  const classes = useStyles();
  const timeUnit = 15;

  const startDateM = moment(minDate);
  const endDateM = moment(maxDate);

  const selectedStartDateM = moment(value ? value[0] : minDate);
  const selectedEndDateM = moment(value ? value[1] : maxDate);

  const max: number = getMax(startDateM, endDateM);
  const marks: Mark[] = getMarks(startDateM, timeUnit, max);

  const internaValue: number[] = getValue(
    startDateM,
    selectedStartDateM,
    selectedEndDateM
  );

  const onSilderChange = (
    _event: React.ChangeEvent<Record<string, unknown>>,
    val: number | number[]
  ): void => {
    onChange([
      startDateM.clone().add(val[0], 'minutes').format('YYYY-MM-DDTHH:mm'),
      startDateM.clone().add(val[1], 'minutes').format('YYYY-MM-DDTHH:mm')
    ]);
  };

  const getAriaValueText = (value: number): string =>
    startDateM.clone().add(value, 'minutes').toDate().toDateString();

  return (
    <div className={classes.root}>
      <div className={classes.dates}>
        <span>{startDateM.format('MM/DD/YYYY')}</span>
        <span>{endDateM.format('MM/DD/YYYY')}</span>
      </div>
      <div className={classes.wrapper}>
        <StyledSlider
          {...props}
          min={0}
          max={max}
          step={null}
          orientation='horizontal'
          valueLabelDisplay='off'
          value={internaValue}
          marks={marks}
          onChange={onSilderChange}
          getAriaValueText={getAriaValueText}
        />
      </div>
    </div>
  );
};
