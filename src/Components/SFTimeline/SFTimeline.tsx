import * as React from 'react';

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@material-ui/lab';

import { makeStyles, Theme, withStyles } from '@material-ui/core';
import { SFBlue, SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const StyledTimelineDot = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200],
    margin: '0px',
    padding: '2px',
    boxShadow: 'none'
  }
}))(TimelineDot);

const StyledTimelineContent = withStyles((theme: Theme) => ({
  root: {
    padding: '12px',
    marginTop: '-16px',
    marginBottom: '16px',

    '&:hover': {
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFBlue[100], 0.4)
          : hexToRgba(SFBlue[200], 0.2)
    }
  }
}))(TimelineContent);

const StyledTimelineItem = withStyles(() => ({
  root: {
    gap: '3px',

    '&::before': {
      content: 'none'
    }
  }
}))(TimelineItem);

const StyledTimelineConnector = withStyles((theme: Theme) => ({
  root: {
    width: '0px',
    backgroundColor: 'transparent',
    borderLeft: `1px dashed ${
      theme.palette.type === 'light' ? SFGrey[200] : SFGrey[500]
    }`
  }
}))(TimelineConnector);

export interface SFTimelineItem {
  title: string;
  subtitle: string;
}

export interface SFTimelineProps {
  className?: string;
  items: SFTimelineItem[];
  size?: 'medium' | 'large';
  selectedIndex?: number;
  onItemClick?: (item: SFTimelineItem) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: ({ size }: Partial<SFTimelineProps>): string =>
      size === 'large' ? '16px' : '14px',
    lineHeight: ({ size }: Partial<SFTimelineProps>): string =>
      size === 'large' ? '24px' : '20px'
  },
  title: {
    fontWeight: 500
  },
  subtitle: {
    color: theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]
  },
  isSelected: {
    backgroundColor:
      theme.palette.type === 'light'
        ? hexToRgba(SFBlue[100], 0.6)
        : hexToRgba(SFBlue[200], 0.1)
  }
}));

export const SFTimeline = ({
  className = '',
  items,
  selectedIndex = 0,
  size = 'medium',
  onItemClick
}: SFTimelineProps): React.ReactElement<SFTimelineProps> => {
  const classes = useStyles({ size });
  const itemsLength: number = items.length;

  return (
    <Timeline align='left' className={className}>
      {items.map((item: SFTimelineItem, index: number) => {
        const hasConnector: boolean =
          (index > 0 && index < itemsLength - 1) ||
          (index === 0 && itemsLength > 1);

        return (
          <div
            key={`timeline-item-${index}`}
            onClick={(): void => onItemClick && onItemClick(item)}
          >
            <StyledTimelineItem>
              <TimelineSeparator>
                <StyledTimelineDot />
                {hasConnector && <StyledTimelineConnector />}
              </TimelineSeparator>
              <StyledTimelineContent
                className={`${classes.text} ${
                  selectedIndex === index ? classes.isSelected : ''
                }`}
              >
                <span className={classes.title}>{item.title}</span>
                <br />
                <span className={classes.subtitle}>{item.subtitle}</span>
              </StyledTimelineContent>
            </StyledTimelineItem>
          </div>
        );
      })}
    </Timeline>
  );
};