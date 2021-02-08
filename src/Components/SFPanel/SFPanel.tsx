import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SFDrawer, SFDrawerProps } from '../SFDrawer/SFDrawer';
import { SFButton, SFButtonProps } from '../SFButton/SFButton';
import { SFGrey } from '../../SFColors/SFColors';

export interface SFPanelAction {
  label: string;
  buttonProps?: SFButtonProps;
}

export interface SFPanelProps extends SFDrawerProps {
  title?: string;
  maxWidth?: number;
  leftAction?: SFPanelAction;
  rightAction?: SFPanelAction;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      padding: '36px 36px 24px',
      color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 500
    },
    content: {
      maxWidth: (props: SFPanelProps): number | 'auto' =>
        props.maxWidth || 'auto',
      padding: '0 36px',
      color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
      fontSize: 16,
      fontStyle: 'normal',
      lineHeight: '24px'
    },
    actions: {
      padding: '24px 36px 36px',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  })
);

export const SFPanel = ({
  title,
  leftAction,
  rightAction,
  children,
  ...props
}: SFPanelProps): React.ReactElement<SFPanelProps> => {
  const classes = useStyles(props);

  return (
    <div>
      <SFDrawer {...props}>
        <div className={classes.title}>{title}</div>

        <div className={classes.content}>{children}</div>

        <div className={classes.actions}>
          {leftAction && (
            <SFButton sfColor='grey' variant='text' {...leftAction.buttonProps}>
              {leftAction.label}
            </SFButton>
          )}

          {rightAction && (
            <SFButton sfColor='blue' {...rightAction.buttonProps}>
              {rightAction.label}
            </SFButton>
          )}
        </div>
      </SFDrawer>
    </div>
  );
};
