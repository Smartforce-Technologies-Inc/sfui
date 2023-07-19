import React, { CSSProperties } from 'react';
import { styled } from '@mui/material';
import { ScrollThumb, ScrollThumbProps } from './ScrollThumb/ScrollThumb';

export type ScrollBarOrientationType = 'horizontal' | 'vertical';

const getScrollBarPositions = (
  orientation: ScrollBarOrientationType
): CSSProperties => {
  if (orientation === 'horizontal') {
    return {
      height: '9px',
      width: '100%',
      left: 0,
      right: 0,
      bottom: 0
    };
  }

  return {
    height: '100%',
    width: '9px',
    right: 3,
    top: 0,
    bottom: 0
  };
};

const StyledScrollBar = styled('div')({
  position: 'absolute',
  '@media print': {
    display: 'none'
  }
});

export interface ScrollBarProps {
  isVisible: boolean;
  onCursorInteraction: (
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) => void;
  orientation: ScrollBarOrientationType;
  scrollThumbProps: Omit<ScrollThumbProps, 'orientation'>;
}

export const ScrollBar = ({
  isVisible,
  onCursorInteraction,
  scrollThumbProps,
  orientation
}: ScrollBarProps): React.ReactElement<ScrollBarProps> => {
  return (
    <StyledScrollBar
      onMouseOver={onCursorInteraction}
      onMouseOut={onCursorInteraction}
      onTouchEnd={onCursorInteraction}
      onTouchStart={onCursorInteraction}
      style={{
        opacity: isVisible ? 1 : 0,
        ...getScrollBarPositions(orientation)
      }}
    >
      <ScrollThumb {...scrollThumbProps} orientation={orientation} />
    </StyledScrollBar>
  );
};
