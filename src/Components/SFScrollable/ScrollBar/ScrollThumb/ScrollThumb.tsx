import React, { CSSProperties } from 'react';
import { styled } from '@mui/material';
import { ScrollBarOrientationType } from '../ScrollBar';
import { hexToRgba } from '../../../../Helpers';
import { SFGrey } from '../../../../SFColors/SFColors';

const StyledScrollThumb = styled('div')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '3px',
  backgroundColor:
    theme.palette.mode === 'light'
      ? hexToRgba(SFGrey.A100 as string, 0.3)
      : hexToRgba(SFGrey[500], 0.3)
}));

export interface ScrollThumbProps {
  onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
  orientation: ScrollBarOrientationType;
  spaceLeft: number;
  visibleSpace: number;
}

const getScrollThumbStyles = (
  orientation: ScrollBarOrientationType,
  spaceLeft: number,
  visibleSpace: number
): CSSProperties => {
  if (orientation === 'horizontal') {
    return { width: visibleSpace, left: spaceLeft, height: '6px' };
  }

  return {
    height: visibleSpace,
    top: spaceLeft,
    marginLeft: '3px',
    width: '6px'
  };
};

const ScrollThumbBase = ({
  onMouseDown
}: ScrollThumbProps): React.ReactElement<ScrollThumbProps> => {
  return <StyledScrollThumb onMouseDown={onMouseDown} />;
};

export const ScrollThumb = styled(ScrollThumbBase)(
  ({ orientation, spaceLeft, visibleSpace }) => ({
    ...getScrollThumbStyles(orientation, spaceLeft, visibleSpace)
  })
);
