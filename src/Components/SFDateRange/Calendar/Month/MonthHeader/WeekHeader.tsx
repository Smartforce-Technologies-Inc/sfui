import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { SFText } from '../../../../SFText/SFText';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 36px)'
  }
});

export const WeekHeader = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SFText type='component-3' sfColor='neutral'>
        Sun
      </SFText>
      <SFText type='component-3' sfColor='neutral'>
        Mon
      </SFText>
      <SFText type='component-3' sfColor='neutral'>
        Tue
      </SFText>
      <SFText type='component-3' sfColor='neutral'>
        Wed
      </SFText>
      <SFText type='component-3' sfColor='neutral'>
        Thu
      </SFText>
      <SFText type='component-3' sfColor='neutral'>
        Fri
      </SFText>
      <SFText type='component-3' sfColor='neutral'>
        Sat
      </SFText>
    </div>
  );
};
