import React, { ForwardedRef } from 'react';
import { styled } from '@mui/material';

const StyledScrollableContainer = styled('div')({
  height: '100%',
  overflow: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  '&::-webkit-scrollbar': {
    display: 'none'
  }
});

export interface ScrollableContainerProps {
  className?: string;
  children?: React.ReactNode;
  onCursorInteraction: (
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) => void;
  onMouseOver: () => void;
  onHostScroll: () => void;
}

export const ScrollableContainer = React.forwardRef(
  (
    {
      className,
      children,
      onCursorInteraction,
      onMouseOver,
      onHostScroll
    }: ScrollableContainerProps,
    ref: ForwardedRef<HTMLDivElement>
  ): React.ReactElement<ScrollableContainerProps> => {
    return (
      <StyledScrollableContainer
        className={className}
        onMouseOut={onCursorInteraction}
        onMouseOver={onMouseOver}
        onTouchEnd={onCursorInteraction}
        onTouchStart={onMouseOver}
        onScroll={onHostScroll}
        ref={ref}
      >
        {children}
      </StyledScrollableContainer>
    );
  }
);
