import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';

import { SFBlue, SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200],
  margin: '0px',
  padding: '2px',
  boxShadow: 'none'
}));

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  padding: '12px',
  marginTop: '-16px',
  marginBottom: '16px',
  letterSpacing: 0,

  '&:hover': {
    '@media (hover: hover)': {
      backgroundColor:
        theme.palette.mode === 'light'
          ? hexToRgba(SFBlue[100], 0.4)
          : hexToRgba(SFBlue[200], 0.2)
    }
  }
}));

const StyledTimelineItem = styled(TimelineItem)({
  gap: '3px',
  minHeight: 'auto',

  '&:hover': {
    '@media (hover: hover)': {
      cursor: 'pointer'
    }
  },

  '&::before': {
    content: 'none'
  }
});

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  width: '0px',
  backgroundColor: 'transparent',
  borderLeft: `1px dashed ${
    theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[500]
  }`
}));

const StyledTimeline = styled(Timeline)({
  margin: '16px 0 0',
  padding: 0
});

export interface SFTimelineItem {
  title: string;
  subtitle: string;
}

export interface SFTimelineProps {
  className?: string;
  items: SFTimelineItem[];
  size?: 'medium' | 'large';
  selectedIndex?: number;
  onItemClick?: (item: SFTimelineItem, index: number) => void;
}

const SFTimelineBase = ({
  className = '',
  items,
  selectedIndex = 0,
  onItemClick
}: SFTimelineProps): React.ReactElement<SFTimelineProps> => {
  const itemsLength: number = items.length;

  return (
    <StyledTimeline position='right' className={className}>
      {items.map((item: SFTimelineItem, index: number) => {
        const hasConnector: boolean =
          (index > 0 && index < itemsLength - 1) ||
          (index === 0 && itemsLength > 1);

        return (
          <div
            key={`timeline-item-${index}`}
            onClick={(): void => onItemClick && onItemClick(item, index)}
          >
            <StyledTimelineItem>
              <TimelineSeparator>
                <StyledTimelineDot />
                {hasConnector && <StyledTimelineConnector />}
              </TimelineSeparator>
              <StyledTimelineContent
                className={`SFTimeline-text ${
                  selectedIndex === index ? 'SFTimeline-isSelected' : ''
                } ${index === itemsLength - 1 ? 'SFTimeline-lastItem' : ''}`}
              >
                <span className='SFTimeline-title'>{item.title}</span>
                <br />
                <span className='SFTimeline-subtitle'>{item.subtitle}</span>
              </StyledTimelineContent>
            </StyledTimelineItem>
          </div>
        );
      })}
    </StyledTimeline>
  );
};

export const SFTimeline = styled(SFTimelineBase)(
  ({ theme, size = 'medium' }) => ({
    '& .SFTimeline-text': {
      fontSize: size === 'large' ? '16px' : '14px',
      lineHeight: size === 'large' ? '24px' : '20px'
    },
    '& .SFTimeline-title': {
      fontWeight: 500
    },
    '& .SFTimeline-subtitle': {
      color: theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400]
    },
    '& .SFTimeline-isSelected': {
      backgroundColor:
        theme.palette.mode === 'light'
          ? hexToRgba(SFBlue[100], 0.6)
          : hexToRgba(SFBlue[200], 0.1)
    },
    '& .SFTimeline-lastItem': {
      marginBottom: '0px'
    }
  })
);
