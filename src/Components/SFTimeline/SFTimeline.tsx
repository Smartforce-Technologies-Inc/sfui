import * as React from 'react';
import { styled } from '@mui/material';
import { Timeline } from '@mui/lab';
import { SFTimelineElement } from './SFTimelineElement/SFTimelineElement';

const StyledTimeline = styled(Timeline)(() => ({
  margin: '16px 0 0',
  padding: 0
}));

export interface SFTimelineItem {
  title: string;
  subtitle: string;
  children?: React.ReactElement;
}

export type SFTimelineSize = 'medium' | 'large';

export interface SFTimelineProps {
  className?: string;
  items: SFTimelineItem[];
  size?: SFTimelineSize;
  selectedIndex?: number;
  onItemClick?: (item: SFTimelineItem, index: number) => void;
}

export const SFTimeline = ({
  className,
  items,
  selectedIndex = 0,
  size = 'medium',
  onItemClick
}: SFTimelineProps): React.ReactElement<SFTimelineProps> => {
  const itemsLength: number = items.length;

  return (
    <StyledTimeline position='right' className={className}>
      {items.map((item: SFTimelineItem, index: number) => {
        const hasConnector: boolean =
          (index > 0 && index < itemsLength - 1) ||
          (index === 0 && itemsLength > 1);

        const isSelected = selectedIndex === index;
        const isLast = index === itemsLength - 1;

        return (
          <div
            key={`timeline-item-${index}`}
            onClick={(): void => onItemClick && onItemClick(item, index)}
          >
            <SFTimelineElement
              size={size}
              hasConnector={hasConnector}
              isSelected={isSelected}
              isLast={isLast}
              {...item}
            />
          </div>
        );
      })}
    </StyledTimeline>
  );
};
