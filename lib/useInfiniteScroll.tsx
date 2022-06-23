import { useEffect, useRef, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import { fetcher, baseUrl } from './DataFetcher';
import { DataAPIType } from './types';

export const useInfiniteScroll = () => {
	const PAGE_LIMIT = 10;

	const { data, error, size, setSize } = useSWRInfinite<DataAPIType>(
		(index) => `${baseUrl}?limit=${PAGE_LIMIT}&page=${index + 1}&orderBy=likes`,
		fetcher
	);

	const isLoadingInitialData = !data && !error;
	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === 'undefined');

	const isEmpty = data?.[0]?.length === 0;
	const isReachingEnd =
		isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

	return { data, error, setSize, isLoadingMore, isReachingEnd };
};

//2nd try
// 	const [observationTarget, setObservationTarget] = useState<
// 		HTMLElement | null | undefined
// 	>(null);

// 	const observer = useRef(
// 		new IntersectionObserver(
// 			([entry]) => {
// 				if (entry.isIntersecting) {
// 					setSize((prev) => prev + 1);
// 				}
// 			},
// 			{ threshold: 1 }
// 		)
// 	);

// 	useEffect(() => {
// 		const currentTarget = observationTarget;
// 		const currentObserver = observer.current;

// 		if (currentTarget) {
// 			currentObserver.observe(currentTarget);
// 		}

// 		return () => {
// 			if (currentTarget) {
// 				currentObserver.unobserve(currentTarget);
// 			}
// 		};
// 	}, [observationTarget]);

// 	return { data, setObservationTarget };
// };

// 1st try
// export const useIntersectionObserver = (callback: any) => {
// 	const [observationTarget, setObservationTarget] = useState(null);

// const observer = useRef(
// 	new IntersectionObserver(
// 		([entry]) => {
// 			if (!entry.isIntersecting) return;
// 			callback();
// 		},
// 		{ threshold: 1 }
// 	)
// );

// 	useEffect(() => {
// 		const currentTarget = observationTarget;
// 		const currentObserver = observer.current;

// 		if (currentTarget) {
// 			currentObserver.observe(currentTarget);
// 		}

// 		return () => {
// 			if (currentTarget) {
// 				currentObserver.unobserve(currentTarget);
// 			}
// 		};
// 	}, [observationTarget]);

// 	return setObservationTarget;
// };
