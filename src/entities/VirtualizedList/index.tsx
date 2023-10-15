import { IEntries } from '@shared/model';
import { FC, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Entries } from '..';
import { Box, CircularProgress } from '@mui/material';
import { ContainerList } from './virtualizedList.styled';

interface UseFixedSizeListProps {
  itemsCount: number;
  itemHeight: number;
  listHeight: number;
  overscan?: number;
  scrollingDelay?: number;
  getScrollElement: () => HTMLElement | null;
}

const DEFAULT_OVERSCAN = 3;
const DEFAULT_SCROLLING_DELAY = 150;

function useFixedSizeList(props: UseFixedSizeListProps) {
  const {
    itemHeight,
    itemsCount,
    scrollingDelay = DEFAULT_SCROLLING_DELAY,
    overscan = DEFAULT_OVERSCAN,
    listHeight,
    getScrollElement,
  } = props;

  const [scrollTop, setScrollTop] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useLayoutEffect(() => {
    const scrollElement = getScrollElement();

    if (!scrollElement) {
      return;
    }

    const handleScroll = () => {
      const scrollTop = scrollElement.scrollTop;

      setScrollTop(scrollTop);
    };

    handleScroll();

    scrollElement.addEventListener('scroll', handleScroll);

    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, [getScrollElement]);

  useEffect(() => {
    const scrollElement = getScrollElement();

    if (!scrollElement) {
      return;
    }

    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      setIsScrolling(true);

      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, scrollingDelay);
    };

    scrollElement.addEventListener('scroll', handleScroll);

    return () => {
      if (typeof timeoutId === 'number') {
        clearTimeout(timeoutId);
      }
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [getScrollElement]);

  const { virtualItems, startIndex, endIndex } = useMemo(() => {
    const rangeStart = scrollTop;
    const rangeEnd = scrollTop + listHeight;

    let startIndex = Math.floor(rangeStart / itemHeight);
    let endIndex = Math.ceil(rangeEnd / itemHeight);

    startIndex = Math.max(0, startIndex - overscan);
    endIndex = Math.min(itemsCount - 1, endIndex + overscan);

    const virtualItems = [];

    for (let index = startIndex; index <= endIndex; index++) {
      virtualItems.push({
        index,
        offsetTop: index * itemHeight,
      });
    }
    return { virtualItems, startIndex, endIndex };
  }, [scrollTop, listHeight, itemsCount]);

  const totalHeight = itemHeight * itemsCount;

  return {
    virtualItems,
    totalHeight,
    startIndex,
    endIndex,
    isScrolling,
  };
}

const itemHeight = 400;
const containerHeight = 600;

interface IVirtualizedList {
  data: IEntries[];
  onDelete: (str: string) => void;
}

export const VirtualizedList: FC<IVirtualizedList> = ({ data, onDelete }) => {
  const [listItems] = useState(data);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const { isScrolling, virtualItems, totalHeight } = useFixedSizeList({
    itemHeight: itemHeight,
    itemsCount: listItems.length,
    listHeight: containerHeight,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  });

  return (
    <div
      ref={scrollElementRef}
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <ContainerList style={{ height: totalHeight }}>
        {virtualItems.map((virtualItem) => {
          const item = listItems[virtualItem.index]!;

          return (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '25%',
                transform: `translateY(${virtualItem.offsetTop}px)`,
                height: itemHeight,
                padding: '6px 12px',
                width: '50%',
              }}
            >
              {isScrolling ? (
                <Box className="containerLoader">
                  <CircularProgress />
                </Box>
              ) : (
                <Entries
                  API={item.API}
                  Category={item.Category}
                  Description={item.Description}
                  Auth={item.Auth}
                  Cors={item.Cors}
                  HTTPS={item.HTTPS}
                  Link={item.Link}
                  onDelete={onDelete}
                />
              )}
            </div>
          );
        })}
      </ContainerList>
    </div>
  );
};
