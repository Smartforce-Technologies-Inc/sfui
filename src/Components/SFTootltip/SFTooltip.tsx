import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Tooltip, TooltipProps } from '@material-ui/core';
import { SFGrey, SFRed } from '../../SFColors/SFColors';

const getBackgroundColor = (
  props: Partial<SFTooltipProps>,
  isLight: boolean
): string => {
  if (props.sfColor === 'red') {
    return isLight ? SFRed[700] : SFRed[200];
  } else {
    return isLight ? SFGrey[800] : (SFGrey.A100 as string);
  }
};

const getTitleColor = (
  props: Partial<SFTooltipProps>,
  isLight: boolean
): string => {
  if (props.sfColor === 'red') {
    return isLight ? SFRed[50] : SFRed[900];
  } else {
    return isLight ? SFGrey[50] : SFGrey[900];
  }
};

const getContentColor = (
  props: Partial<SFTooltipProps>,
  isLight: boolean
): string => {
  if (props.sfColor === 'red') {
    return isLight ? SFRed[100] : SFRed[800];
  } else {
    return isLight ? (SFGrey.A200 as string) : SFGrey[700];
  }
};

const useStyles = makeStyles((theme: Theme) => ({
  tooltip: {
    padding: '5px 12px',
    backgroundColor: (props: Partial<SFTooltipProps>): string =>
      getBackgroundColor(props, theme.palette.type === 'light')
  },
  arrow: {
    color: (props: Partial<SFTooltipProps>): string =>
      getBackgroundColor(props, theme.palette.type === 'light')
  },
  title: {
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '22px',
    color: (props: Partial<SFTooltipProps>): string =>
      getTitleColor(props, theme.palette.type === 'light')
  },
  content: {
    fontSize: '12px',
    lineHeight: '18px',
    color: (props: Partial<SFTooltipProps>): string =>
      getContentColor(props, theme.palette.type === 'light')
  }
}));

export interface SFTooltipProps extends TooltipProps {
  title: string;
  content?: React.ReactNode;
  sfColor?: 'default' | 'red';
}

export const SFTooltip = ({
  title,
  content,
  sfColor = 'default',
  arrow = true,
  ...props
}: SFTooltipProps): React.ReactElement<SFTooltipProps> => {
  const classes = useStyles({ sfColor });

  const tooltipTitle: React.ReactNode = (
    <React.Fragment>
      <span className={classes.title}>{title}</span>
      {content && <div className={classes.content}>{content}</div>}
    </React.Fragment>
  );

  return (
    <Tooltip
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
      arrow={arrow}
      title={tooltipTitle}
      {...props}
    />
  );
};
