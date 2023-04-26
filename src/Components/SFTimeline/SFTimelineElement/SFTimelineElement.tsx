import * as React from 'react';
import { styled } from '@mui/material';
import {
  TimelineDot,
  TimelineContent,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator
} from '@mui/lab';
import { SFBlue, SFGrey } from '../../../SFColors/SFColors';
import { hexToRgba } from '../../../Helpers';
import { SFTimelineItem, SFTimelineSize } from '../SFTimeline';

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
  letterSpacing: '0px',

  '&:hover': {
    '@media (hover: hover)': {
      backgroundColor:
        theme.palette.mode === 'light'
          ? hexToRgba(SFBlue[100], 0.4)
          : hexToRgba(SFBlue[200], 0.2)
    }
  }
}));

const StyledTimelineItem = styled(TimelineItem)(() => ({
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
}));

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  width: '0px',
  backgroundColor: 'transparent',
  borderLeft: `1px dashed ${
    theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[500]
  }`
}));

interface SFTimelineElementProps extends SFTimelineItem {
  className?: string;
  size: SFTimelineSize;
  hasConnector: boolean;
  isSelected: boolean;
  isLast: boolean;
}

const SFTimelineElementBase = ({
  className = '',
  hasConnector,
  isSelected,
  isLast,
  ...item
}: SFTimelineElementProps): React.ReactElement<SFTimelineElementProps> => {
  return (
    <StyledTimelineItem className={className}>
      <TimelineSeparator>
        <StyledTimelineDot />
        {hasConnector && <StyledTimelineConnector />}
      </TimelineSeparator>
      <StyledTimelineContent
        className={`SFTimelineElement-text ${
          isSelected ? 'SFTimelineElement-selected' : ''
        } ${isLast ? 'SFTimelineElement-last' : ''}`}
      >
        <p className='SFTimelineElement-title'>{item.title}</p>

        {item.children}
        <p className='SFTimelineElement-subtitle'>{item.subtitle}</p>
      </StyledTimelineContent>
    </StyledTimelineItem>
  );
};

export const SFTimelineElement = styled(SFTimelineElementBase)(
  ({ theme, size }) => ({
    '& .SFTimelineElement-text': {
      fontSize: size === 'large' ? '16px' : '14px',
      lineHeight: size === 'large' ? '24px' : '20px'
    },
    '& .SFTimelineElement-title': {
      fontWeight: 500,
      margin: 0
    },
    '& .SFTimelineElement-subtitle': {
      color: theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400],
      margin: 0
    },
    '& .SFTimelineElement-selected': {
      backgroundColor:
        theme.palette.mode === 'light'
          ? hexToRgba(SFBlue[100], 0.6)
          : hexToRgba(SFBlue[200], 0.1)
    },
    '& .SFTimelineElement-last': {
      marginBottom: '0px'
    }
  })
);
