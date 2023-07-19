import React from 'react';
import { styled } from '@mui/material';
import { ScrollableContainer } from './ScrollableContainer/ScrollableContainer';
import { ScrollBar } from './ScrollBar/ScrollBar';

const SCROLL_BOX_MIN_HEIGHT = 20;
const SCROLL_BOX_MIN_WIDTH = 20;

const StyledSFScrollable = styled('div')({
  height: '100%',
  position: 'relative',
  boxSizing: 'border-box'
});

const hasScrollVertical = (elem: HTMLDivElement): boolean =>
  elem.scrollHeight > elem.clientHeight;

const hasScrollHorizontal = (elem: HTMLDivElement): boolean =>
  elem.scrollWidth > elem.clientWidth;

export interface SFScrollData {
  host: HTMLDivElement;
  verticalScroll: number;
  horizontalScroll: number;
}

export interface SFScrollableRefHandler {
  scrollToTop: (behavior?: ScrollBehavior) => void;
}

export interface SFScrollableProps {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  onScroll?: (data: SFScrollData) => void;
  onScrollBottom?: () => void;
}

export const SFScrollable = React.forwardRef(
  (
    {
      className,
      containerClassName,
      children,
      onScroll,
      onScrollBottom
    }: SFScrollableProps,
    ref: React.Ref<SFScrollableRefHandler>
  ) => {
    const scrollHostRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(
      null
    );

    React.useImperativeHandle(ref, () => ({
      scrollToTop(behavior?: ScrollBehavior): void {
        if (scrollHostRef.current) {
          scrollHostRef.current.scrollTo({ top: 0, behavior });
        }
      }
    }));

    const [
      hasHorizontalScroll,
      setHasHorizontalScroll
    ] = React.useState<boolean>(false);

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

    const updateScrollbar = (elem: HTMLDivElement): void => {
      const { clientHeight, clientWidth, scrollHeight, scrollWidth } = elem;

      if (hasScrollHorizontal(elem)) {
        const scrollThumbWidth: number = Math.max(
          (clientWidth / scrollWidth) * clientWidth,
          SCROLL_BOX_MIN_WIDTH
        );

        if (scrollThumbWidth !== horizontalScrollWidth) {
          setHorizontalScrollWidth(scrollThumbWidth);
        }

        if (!hasHorizontalScroll) {
          setHasHorizontalScroll(true);
        }
      } else if (hasHorizontalScroll) {
        setHasHorizontalScroll(false);
      }

      if (hasScrollVertical(elem)) {
        const scrollThumbHeight: number = Math.max(
          (clientHeight / scrollHeight) * clientHeight,
          SCROLL_BOX_MIN_HEIGHT
        );

        if (verticalScrollHeight !== scrollThumbHeight) {
          setVerticalScrollHeight(scrollThumbHeight);
        }
      }
    };

    React.useEffect(() => {
      const elem: HTMLDivElement = scrollHostRef.current as HTMLDivElement;

      const resizeObserver = new ResizeObserver(() => {
        updateScrollbar(elem);
      });

      resizeObserver.observe(elem);

      // cleanup
      return (): void => {
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

            if (onScroll) {
              onScroll({
                verticalScroll: verticalScrollTop,
                horizontalScroll: horizontalScrollLeft,
                host: scrollHostRef.current
              });
            }
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
      return (): void => {
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

    const onMouseOver = (): void => {
      if (scrollHostRef.current) {
        if (hasScrollVertical(scrollHostRef.current) && !showVerticalScroll) {
          setShowVerticalScroll(true);
        }

        if (
          hasScrollHorizontal(scrollHostRef.current) &&
          !showHorizontalScroll
        ) {
          setShowHorizontalScroll(true);
        }
      }
    };

    const onMouseOut = (): void => {
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

    const onHostScroll = (): void => {
      if (scrollHostRef.current) {
        const {
          scrollTop,
          scrollHeight,
          scrollLeft,
          scrollWidth,
          offsetHeight,
          offsetWidth,
          clientHeight
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

        if (scrollHeight - scrollTop - clientHeight < 0.5 && onScrollBottom) {
          onScrollBottom();
        }

        if (onScroll) {
          onScroll({
            verticalScroll: newTop,
            horizontalScroll: newLeft,
            host: scrollHostRef.current
          });
        }
      }
    };

    const stopMousePropagation = (
      e:
        | React.MouseEvent<HTMLDivElement, MouseEvent>
        | React.TouchEvent<HTMLDivElement>
    ): void => {
      e.stopPropagation();
    };

    return (
      <StyledSFScrollable
        className={className}
        style={{ paddingBottom: hasHorizontalScroll ? '12px' : '' }}
        onMouseOver={stopMousePropagation}
        onTouchStart={stopMousePropagation}
        onMouseLeave={onMouseOut}
        onTouchEnd={onMouseOut}
      >
        <ScrollableContainer
          className={containerClassName}
          onCursorInteraction={stopMousePropagation}
          onMouseOver={onMouseOver}
          onHostScroll={onHostScroll}
          ref={scrollHostRef}
        >
          {children}
        </ScrollableContainer>

        <ScrollBar
          isVisible={showVerticalScroll}
          orientation='vertical'
          onCursorInteraction={stopMousePropagation}
          scrollThumbProps={{
            onMouseDown: onVerticalScrollMouseDown,
            visibleSpace: verticalScrollHeight,
            spaceLeft: verticalScrollTop
          }}
        />

        <ScrollBar
          isVisible={showHorizontalScroll}
          orientation='horizontal'
          onCursorInteraction={stopMousePropagation}
          scrollThumbProps={{
            onMouseDown: onHorizontalScrollMouseDown,
            visibleSpace: horizontalScrollWidth,
            spaceLeft: horizontalScrollLeft
          }}
        />
      </StyledSFScrollable>
    );
  }
);
