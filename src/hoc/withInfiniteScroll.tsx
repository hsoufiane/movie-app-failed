import React, {useCallback, useEffect, useRef} from 'react';

interface WithInfiniteScrollProps {
  isLoading: boolean;
  isFetching: boolean;
  hasMore: boolean;
  loadMore: () => void;
}

export const withInfiniteScroll = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P & WithInfiniteScrollProps) => {
    const {isLoading, isFetching, hasMore, loadMore, ...rest} = props;
    const observerRef = useRef<IntersectionObserver | null>(null);

    const lastItemRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (isLoading || isFetching) return;

        if (observerRef.current) {
          observerRef.current.disconnect();
        }

        if (node && hasMore) {
          observerRef.current = new IntersectionObserver(
            entries => {
              if (entries[0].isIntersecting) {
                loadMore();
              }
            },
            {threshold: 0.1},
          );

          observerRef.current.observe(node);
        }
      },
      [isLoading, isFetching, hasMore, loadMore],
    );

    useEffect(() => {
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);

    return <WrappedComponent {...(rest as P)} lastItemRef={lastItemRef} />;
  };
};
