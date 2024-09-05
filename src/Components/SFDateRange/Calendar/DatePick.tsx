import * as React from 'react';
import { IconButton, makeStyles, Theme } from '@material-ui/core';
import {
  SFBlueMainDark,
  SFBlueMainLight,
  SFCommonWhite,
  SFGrey,
  SFTextBlack,
  SFTextWhite
} from '../../../SFColors/SFColors';

function getColor(props: DatePickProps, darkMode: boolean): string {
  if (props.disabled) {
    if (darkMode) return SFGrey[500];
    else return SFGrey[300];
  } else if (props.selected) {
    if (darkMode) return SFTextBlack;
    else return SFCommonWhite;
  } else if (props.current) {
    if (darkMode) return SFBlueMainDark;
    else return SFBlueMainLight;
  } else {
    if (darkMode) return SFTextWhite;
    else return SFTextBlack;
  }
}

function getBgColor(props: DatePickProps, darkMode: boolean): string {
  if (props.selected) {
    if (darkMode) return SFBlueMainDark;
    else return SFBlueMainLight;
  } else return 'transparent';
}

function getHoverBgColor(props: DatePickProps, darkMode: boolean): string {
  if (props.selected) {
    if (darkMode) return SFBlueMainDark;
    else return SFBlueMainLight;
  } else {
    if (darkMode) return 'rgba(128, 128, 128, 0.3)';
    else return 'rgba(204, 204, 204, 0.3)';
  }
}

function getActiveBgColor(props: DatePickProps, darkMode: boolean): string {
  if (props.selected) {
    if (darkMode) return SFBlueMainDark;
    else return SFBlueMainLight;
  } else {
    if (darkMode) return 'rgba(128, 128, 128, 0.2)';
    else return 'rgba(204, 204, 204, 0.5)';
  }
}

function getBorder(props: DatePickProps, darkMode: boolean): string {
  if (props.current) {
    if (darkMode) return `1px solid ${SFBlueMainDark}`;
    else return `1px solid ${SFBlueMainLight}`;
  } else return 'none';
}

function getRootBg(props: DatePickProps, darkMode: boolean): string {
  if (props.inRange) {
    if (darkMode) return 'rgba(128, 128, 128, 0.3)';
    else return 'rgba(204, 204, 204, 0.3)';
  } else return 'transparent';
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '36px',
    height: '36px',
    borderTopLeftRadius: (props: DatePickProps): string =>
      props.selected && !props.lastInRange ? '50%' : 'unset',
    borderBottomLeftRadius: (props: DatePickProps): string =>
      props.selected && !props.lastInRange ? '50%' : 'unset',
    borderTopRightRadius: (props: DatePickProps): string =>
      props.lastInRange ? '50%' : 'unset',
    borderBottomRightRadius: (props: DatePickProps): string =>
      props.lastInRange ? '50%' : 'unset',
    backgroundColor: (props: DatePickProps): string =>
      getRootBg(props, theme.palette.type === 'dark')
  },
  label: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    textAlign: 'center',
    color: (props: DatePickProps): string =>
      getColor(props, theme.palette.type === 'dark')
  },
  buttonRoot: {
    width: '36px',
    height: '36px',
    backgroundColor: (props: DatePickProps): string =>
      getBgColor(props, theme.palette.type === 'dark'),

    '@media (hover: hover)': {
      '&:hover, &:focus-visible': {
        backgroundColor: (props: DatePickProps): string =>
          getHoverBgColor(props, theme.palette.type === 'dark')
      }
    },

    '@media (hover: none)': {
      '&:hover': {
        backgroundColor: (props: DatePickProps): string =>
          getBgColor(props, theme.palette.type === 'dark')
      }
    },

    '&:active': {
      backgroundColor: (props: DatePickProps): string =>
        getActiveBgColor(props, theme.palette.type === 'dark')
    },

    border: (props: DatePickProps): string =>
      getBorder(props, theme.palette.type === 'dark'),

    borderRadius: '50%'
  }
}));

export interface DatePickProps {
  className?: string;
  label: string;
  current?: boolean;
  selected?: boolean;
  disabled?: boolean;
  inRange?: boolean;
  lastInRange?: boolean;
  onSelect: () => void;
}

export const DatePick = (
  props: DatePickProps
): React.ReactElement<DatePickProps> => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <IconButton
        className={props.className}
        classes={{ root: classes.buttonRoot, label: classes.label }}
        disabled={props.disabled}
        onClick={props.onSelect}
      >
        {props.label}
      </IconButton>
    </div>
  );
};
