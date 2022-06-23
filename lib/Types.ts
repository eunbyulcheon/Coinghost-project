export interface DataType {
	// map(arg0: (blog: any) => JSX.Element): any;
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
