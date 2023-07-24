import React, { CSSProperties } from 'react';
import { styled } from '@mui/material';

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
  children: React.ReactElement;
  isVisible: boolean;
  onCursorInteraction: (
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) => void;
  orientation: ScrollBarOrientationType;
}

const ScrollBarBase = ({
  children,
  onCursorInteraction
}: ScrollBarProps): React.ReactElement<ScrollBarProps> => {
  return (
    <StyledScrollBar
      onMouseOver={onCursorInteraction}
      onMouseOut={onCursorInteraction}
      onTouchEnd={onCursorInteraction}
      onTouchStart={onCursorInteraction}
    >
      {children}
    </StyledScrollBar>
  );
};

export const ScrollBar = styled(ScrollBarBase)(
  ({ isVisible, orientation }) => ({
    opacity: isVisible ? 1 : 0,
    ...getScrollBarPositions(orientation)
  })
);
