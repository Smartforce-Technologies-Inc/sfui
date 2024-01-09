import React, { CSSProperties } from 'react';
import { styled } from '@mui/material';
import { ScrollBarOrientationType } from '../ScrollBar';
import { hexToRgba } from '../../../../Helpers';
import { SFGrey } from '../../../../SFColors/SFColors';
import { SFTheme } from '../../../../SFTheme/SFTheme';

const getScrollThumbStyles = (
  theme: SFTheme,
  orientation: ScrollBarOrientationType,
  spaceLeft: number,
  visibleSpace: number
): CSSProperties => {
  let styles: CSSProperties = {
    position: 'absolute',
    borderRadius: '3px',
    backgroundColor:
      theme.palette.mode === 'light'
        ? hexToRgba(SFGrey.A100 as string, 0.3)
        : hexToRgba(SFGrey[500], 0.3)
  };

  if (orientation === 'horizontal') {
    styles = { ...styles, width: visibleSpace, left: spaceLeft, height: '6px' };
  } else {
    styles = {
      ...styles,
      height: visibleSpace,
      top: spaceLeft,
      marginLeft: '3px',
      width: '6px'
    };
  }

  return styles;
};

export interface ScrollThumbProps {
  className?: string;
  onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
  orientation: ScrollBarOrientationType;
  spaceLeft: number;
  visibleSpace: number;
}

const ScrollThumbBase = ({
  className = '',
  onMouseDown
}: ScrollThumbProps): React.ReactElement<ScrollThumbProps> => (
  <div className={className} onMouseDown={onMouseDown} />
);

export const ScrollThumb = styled(ScrollThumbBase)(
  ({ orientation, spaceLeft, visibleSpace, theme }) => ({
    ...getScrollThumbStyles(theme, orientation, spaceLeft, visibleSpace)
  })
);
