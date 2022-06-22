import useSWRInfinite from 'swr/infinite';
import { fetcher, baseUrl } from './DataFetcher';

export interface DataType {
	map(arg0: (blog: any) => JSX.Element): any;
	id: number;
	title: string;
	creator: { nickName: string };
	createdAt: string;
	defaultThumbnail: { url: string };
	likes: number;
	comments: number;
}

export interface DataAPIType {
	length: number;
	data: {
		data: DataType;
		[x: string]: any;
	};
}

export const useInfiniteScroll = () => {
	const PAGE_LIMIT = 10;

	const swr = useSWRInfinite<DataAPIType>(
		(index) => `${baseUrl}?limit=${PAGE_LIMIT}&page=${index + 1}&orderBy=likes`,
		fetcher
	);
	const { data, error, size, setSize } = swr;
	// const posts = data ? [].concat(...data) : [];
	const isLoadingInitialData = !data && !error;
	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === 'undefined');
	const isEmpty = data?.[0]?.length === 0;
	const isReachingEnd =
		isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

	return { ...swr, isLoadingMore, isReachingEnd };
};
