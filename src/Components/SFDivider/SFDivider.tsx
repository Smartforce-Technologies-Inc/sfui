import React from 'react';
import { Theme, makeStyles } from '@material-ui/core';
import { SFGrey } from '../../SFColors/SFColors';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    margin: 0,
    border: 0,
    borderBottomStyle: 'solid',
    borderBottomColor:
      theme.palette.type === 'light' ? SFGrey['100'] : SFGrey['700'],
    borderBottomWidth: (props: Partial<SFDividerProps>): string =>
      `${props.size}px`
  }
}));

export interface SFDividerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
  > {
  className?: string;
  size?: number;
}

export const SFDivider = ({
  size = 1,
  ...props
}: SFDividerProps): React.ReactElement<SFDividerProps> => {
  const classes = useStyles({ size });
  return <hr className={`${props.className} ${classes.root}`} {...props} />;
};
