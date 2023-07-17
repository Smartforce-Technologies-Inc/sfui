import React from 'react';
import { SFGrey, SFRed } from '../../SFColors/SFColors';
import { Tooltip, TooltipProps, styled } from '@mui/material';

const getBackgroundColor = (
  sfColor: SFTooltipColor,
  isLight: boolean
): string => {
  if (sfColor === 'red') {
    return isLight ? SFRed[700] : SFRed[200];
  } else {
    return isLight ? SFGrey[800] : (SFGrey.A100 as string);
  }
};

const getTitleColor = (sfColor: SFTooltipColor, isLight: boolean): string => {
  if (sfColor === 'red') {
    return isLight ? SFRed[50] : SFRed[900];
  } else {
    return isLight ? SFGrey[50] : SFGrey[900];
  }
};

const getContentColor = (sfColor: SFTooltipColor, isLight: boolean): string => {
  if (sfColor === 'red') {
    return isLight ? SFRed[100] : SFRed[800];
  } else {
    return isLight ? (SFGrey.A200 as string) : SFGrey[700];
  }
};

export type SFTooltipColor = 'default' | 'red';

export interface SFTooltipProps extends TooltipProps {
  title: string;
  content?: React.ReactNode;
  sfColor?: SFTooltipColor;
}

const SFTooltipBase = ({
  className,
  title,
  content,
  sfColor = 'default',
  arrow = true,
  ...props
}: SFTooltipProps): React.ReactElement<SFTooltipProps> => {
  const tooltipTitle: React.ReactNode = (
    <React.Fragment>
      <span className='SFTooltip-title'>{title}</span>
      {content && <div className='SFTooltip-content'>{content}</div>}
    </React.Fragment>
  );

  return (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      arrow={arrow}
      title={tooltipTitle}
    />
  );
};

export const SFTooltip = styled(SFTooltipBase)(
  ({ theme, sfColor = 'default' }) => ({
    '&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementTop': {
      marginBottom: '5px'
    },
    '&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementLeft': {
      marginRight: '5px'
    },
    '&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementRight': {
      marginLeft: '5px'
    },
    '&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom': {
      marginTop: '5px'
    },
    '.MuiTooltip-tooltip': {
      padding: '5px 12px',
      backgroundColor: getBackgroundColor(
        sfColor,
        theme.palette.mode === 'light'
      )
    },
    '.MuiTooltip-arrow': {
      color: getBackgroundColor(sfColor, theme.palette.mode === 'light')
    },
    '.SFTooltip-title': {
      fontWeight: 500,
      fontSize: '13px',
      lineHeight: '22px',
      color: getTitleColor(sfColor, theme.palette.mode === 'light')
    },
    '.SFTooltip-content': {
      fontSize: '12px',
      lineHeight: '18px',
      color: getContentColor(sfColor, theme.palette.mode === 'light')
    }
  })
);
