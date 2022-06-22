export const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const baseUrl = 'https://api.dev.coinghost.com/blogs';

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
	data: {
		data: DataType;
		[x: string]: any;
	};
}
