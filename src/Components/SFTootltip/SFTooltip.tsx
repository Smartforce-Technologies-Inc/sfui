import React from 'react';
import { styled, Tooltip, TooltipProps } from '@mui/material';
import { SFGrey, SFRed } from '../../SFColors/SFColors';

const getBackgroundColor = (sfColor: string, isLight: boolean): string => {
  if (sfColor === 'red') {
    return isLight ? SFRed[700] : SFRed[200];
  } else {
    return isLight ? SFGrey[800] : (SFGrey.A100 as string);
  }
};

const getTitleColor = (sfColor: string, isLight: boolean): string => {
  if (sfColor === 'red') {
    return isLight ? SFRed[50] : SFRed[900];
  } else {
    return isLight ? SFGrey[50] : SFGrey[900];
  }
};

const getContentColor = (sfColor: string, isLight: boolean): string => {
  if (sfColor === 'red') {
    return isLight ? SFRed[100] : SFRed[800];
  } else {
    return isLight ? (SFGrey.A200 as string) : SFGrey[700];
  }
};

export interface SFTooltipProps extends TooltipProps {
  title: string;
  content?: React.ReactNode;
  sfColor?: 'default' | 'red';
}

const SFTooltipBase = ({
  className = '',
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
      arrow={arrow}
      title={tooltipTitle}
      {...props}
      className={className}
    />
  );
};

export const SFTooltip = styled(({ className, ...props }: SFTooltipProps) => (
  <SFTooltipBase {...props} classes={{ popper: className }} />
))(({ theme, sfColor = 'default' }) => ({
  '& .MuiTooltip-tooltip': {
    padding: '5px 12px',
    backgroundColor: getBackgroundColor(sfColor, theme.palette.mode === 'light')
  },
  '&	.MuiTooltip-arrow': {
    color: getBackgroundColor(sfColor, theme.palette.mode === 'light')
  },
  '&[data-popper-placement*="top"] .MuiTooltip-tooltipPlacementTop': {
    marginBottom: '5px'
  },
  '&[data-popper-placement*="left"] .MuiTooltip-tooltipPlacementLeft': {
    marginRight: '5px'
  },
  '&[data-popper-placement*="right"] .MuiTooltip-tooltipPlacementRight': {
    marginLeft: '5px'
  },
  '&[data-popper-placement*="bottom"] .MuiTooltip-tooltipPlacementBottom': {
    marginTop: 5
  },
  '& .SFTooltip-title': {
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '22px',
    color: getTitleColor(sfColor, theme.palette.mode === 'light')
  },
  '& .SFTooltip-content': {
    fontSize: '12px',
    lineHeight: '18px',
    color: getContentColor(sfColor, theme.palette.mode === 'light')
  }
}));
