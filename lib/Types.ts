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

export interface BlogType {
	title: string;
	createdAt: string;
	defaultThumbnail: { url: string };
	thumbnail: { url: string };
	creator: { nickName: string };
	views: number;
	likes: number;
	comments: number;
	contents: string;
}

export interface TermsListType {
	id: number;
	title: string;
	name: string;
	require: string;
	text: string;
}

export interface FormInputData {
	preventDefault: any;
	phone: string;
	code: string;
	password: string;
	pwConfirm: string;
	nickname: string;
}
