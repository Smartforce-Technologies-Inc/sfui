import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../helpers';

const SCROLL_BOX_MIN_HEIGHT = 20;
const SCROLL_BOX_MIN_WIDTH = 20;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      position: 'relative'
    },
    withHorizontalScroll: {
      paddingBottom: 12
    },
    container: {
      height: '100%',
      overflow: 'auto',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',

      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    vScrollBar: {
      height: '100%',
      width: '9px',
      position: 'absolute',
      right: 3,
      top: 0,
      bottom: 0
    },
    vScrollThumb: {
      marginLeft: '3px',
      width: '6px',
      position: 'absolute',
      borderRadius: '3px',
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey.A100 as string, 0.3)
          : hexToRgba(SFGrey[500], 0.3)
    },
    hScrollBar: {
      position: 'absolute',
      width: '100%',
      height: '9px',
      left: 0,
      right: 0,
      bottom: 0
    },
    hScrollThumb: {
      height: '6px',
      position: 'absolute',
      borderRadius: '3px',
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey.A100 as string, 0.3)
          : hexToRgba(SFGrey[500], 0.3)
    }
  })
);

const hasScrollVertical = (elem: HTMLDivElement): boolean =>
  elem.scrollHeight > elem.clientHeight;

const hasScrollHorizontal = (elem: HTMLDivElement): boolean =>
  elem.scrollWidth > elem.clientWidth;

export interface SFScrollableProps {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export const SFScrollable = ({
  className,
  containerClassName,
  children
}: SFScrollableProps): React.ReactElement<SFScrollableProps> => {
  const classes = useStyles();

  const scrollHostRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(
    null
  );

  const [hasHorizontalScroll, setHasHorizontalScroll] = React.useState<boolean>(
    false
  );

  const [
    verticalScrollHeight,
    setVerticalScrollHeight
  ] = React.useState<number>(SCROLL_BOX_MIN_HEIGHT);

  const [
    horizontalScrollWidth,
    setHorizontalScrollWidth
  ] = React.useState<number>(SCROLL_BOX_MIN_WIDTH);

  const [verticalScrollTop, setVerticalScrollTop] = React.useState<number>(0);

  const [
    horizontalScrollLeft,
    setHorizontalScrollLeft
  ] = React.useState<number>(0);

  const [showVerticalScroll, setShowVerticalScroll] = React.useState<boolean>(
    false
  );

  const [
    showHorizontalScroll,
    setShowHorizontalScroll
  ] = React.useState<boolean>(false);

  const [isVerticalDragging, setIsVerticalDragging] = React.useState<boolean>(
    false
  );

  const [
    isHorizontalDragging,
    setIsHorizontalDragging
  ] = React.useState<boolean>(false);

  const [lastVerticalPos, setLastVerticalPos] = React.useState<number>(0);
  const [lastHorizontalPos, setLastHorizontalPos] = React.useState<number>(0);

  const updateScrollbar = (elem: HTMLDivElement) => {
    const { clientHeight, clientWidth, scrollHeight, scrollWidth } = elem;

    if (hasScrollHorizontal(elem)) {
      const scrollThumbWidth: number = Math.max(
        (clientWidth / scrollWidth) * clientWidth,
        SCROLL_BOX_MIN_WIDTH
      );

      setHasHorizontalScroll(true);
      setHorizontalScrollWidth(scrollThumbWidth);
      setHorizontalScrollLeft(0);
    } else {
      setHasHorizontalScroll(false);
    }

    if (hasScrollVertical(elem)) {
      const scrollThumbHeight: number = Math.max(
        (clientHeight / scrollHeight) * clientHeight,
        SCROLL_BOX_MIN_HEIGHT
      );

      setVerticalScrollHeight(scrollThumbHeight);
      setVerticalScrollTop(0);
    }
  };

  React.useEffect(() => {
    const elem: HTMLDivElement = scrollHostRef.current as HTMLDivElement;

    const resizeObserver = new ResizeObserver(() => {
      updateScrollbar(elem);
    });

    resizeObserver.observe(elem);

    // cleanup
    return () => {
      resizeObserver.unobserve(elem);
    };
  }, []);

  const onDocumentMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (scrollHostRef.current) {
        if (isVerticalDragging) {
          e.preventDefault();
          e.stopPropagation();

          const {
            scrollHeight,
            offsetHeight,
            offsetTop
          } = scrollHostRef.current;
          const deltaY = e.clientY - lastVerticalPos;
          const percentage = deltaY * (scrollHeight / offsetHeight);

          setLastVerticalPos(e.clientY);

          setVerticalScrollTop(
            Math.min(
              Math.max(offsetTop, verticalScrollTop + deltaY),
              offsetHeight - verticalScrollHeight + offsetTop
            )
          );

          scrollHostRef.current.scrollTop = Math.min(
            scrollHostRef.current.scrollTop + percentage,
            scrollHeight - offsetHeight
          );
        } else if (isHorizontalDragging) {
          e.preventDefault();
          e.stopPropagation();

          const { scrollWidth, offsetWidth } = scrollHostRef.current;
          const deltaX = e.clientX - lastHorizontalPos;
          const percentage = deltaX * (scrollWidth / offsetWidth);

          setLastHorizontalPos(e.clientX);
          setHorizontalScrollLeft(
            Math.min(
              Math.max(0, horizontalScrollLeft + deltaX),
              offsetWidth - horizontalScrollWidth
            )
          );

          scrollHostRef.current.scrollLeft = Math.min(
            scrollHostRef.current.scrollLeft + percentage,
            scrollWidth - offsetWidth
          );
        }
      }
    },
    [[isHorizontalDragging, isVerticalDragging]]
  );

  const onDocumentMouseUp = React.useCallback(
    (e: MouseEvent) => {
      if (isVerticalDragging) {
        e.preventDefault();
        setIsVerticalDragging(false);
        setShowVerticalScroll(false);
      } else if (isHorizontalDragging) {
        e.preventDefault();
        setIsHorizontalDragging(false);
        setShowHorizontalScroll(false);
      }
    },
    [[isHorizontalDragging, isVerticalDragging]]
  );

  React.useEffect(() => {
    // handle scrollbar dragging
    document.addEventListener('mousemove', onDocumentMouseMove);
    document.addEventListener('mouseup', onDocumentMouseUp);
    document.addEventListener('mouseleave', onDocumentMouseUp);

    // cleanup
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('mouseup', onDocumentMouseUp);
      document.removeEventListener('mouseleave', onDocumentMouseUp);
    };
  }, [onDocumentMouseMove, onDocumentMouseUp]);

  React.useEffect(() => {
    if (scrollHostRef.current) {
      updateScrollbar(scrollHostRef.current as HTMLDivElement);
    }
  }, [children]);

  const onMouseOver = () => {
    if (scrollHostRef.current) {
      if (hasScrollVertical(scrollHostRef.current) && !showVerticalScroll) {
        setShowVerticalScroll(true);
      }

      if (hasScrollHorizontal(scrollHostRef.current) && !showHorizontalScroll) {
        setShowHorizontalScroll(true);
      }
    }
  };

  const onMouseOut = () => {
    if (showHorizontalScroll && !isHorizontalDragging) {
      setShowHorizontalScroll(false);
    }

    if (showVerticalScroll && !isVerticalDragging) {
      setShowVerticalScroll(false);
    }
  };

  const onVerticalScrollMouseDown: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setLastVerticalPos(e.clientY);
    setIsVerticalDragging(true);
  };

  const onHorizontalScrollMouseDown: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setLastHorizontalPos(e.clientX);
    setIsHorizontalDragging(true);
  };

  const onScroll = () => {
    if (scrollHostRef.current) {
      const {
        scrollTop,
        scrollHeight,
        scrollLeft,
        scrollWidth,
        offsetHeight,
        offsetWidth
      } = scrollHostRef.current;

      let newTop = (scrollTop / scrollHeight) * offsetHeight;
      newTop = Math.min(newTop, offsetHeight - verticalScrollHeight);

      let newLeft = (scrollLeft / scrollWidth) * offsetWidth;
      newLeft = Math.min(newLeft, offsetWidth - horizontalScrollLeft);

      if (newTop !== verticalScrollTop) {
        setVerticalScrollTop(newTop);
      }

      if (newLeft !== horizontalScrollLeft) {
        setHorizontalScrollLeft(newLeft);
      }
    }
  };

  return (
    <div
      className={`${classes.root} ${
        hasHorizontalScroll ? classes.withHorizontalScroll : ''
      } ${className || ''}`}
      onMouseOver={onMouseOver}
      onTouchStart={onMouseOver}
      onMouseOut={onMouseOut}
      onTouchEnd={onMouseOut}
    >
      <div
        className={`${classes.container} ${containerClassName || ''}`}
        ref={scrollHostRef}
        onScroll={onScroll}
      >
        {children}
      </div>

      <div
        className={classes.vScrollBar}
        style={{ opacity: showVerticalScroll ? 1 : 0 }}
      >
        <div
          className={classes.vScrollThumb}
          style={{ height: verticalScrollHeight, top: verticalScrollTop }}
          onMouseDown={onVerticalScrollMouseDown}
        />
      </div>

      <div
        className={classes.hScrollBar}
        style={{ opacity: showHorizontalScroll ? 1 : 0 }}
      >
        <div
          className={classes.hScrollThumb}
          style={{ width: horizontalScrollWidth, left: horizontalScrollLeft }}
          onMouseDown={onHorizontalScrollMouseDown}
        />
      </div>
    </div>
  );
};
