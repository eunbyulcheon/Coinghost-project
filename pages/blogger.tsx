import IconHeader from '../components/IconHeader';
import Blog from '../components/blog/Blog';
import Filter from '../components/blog/Filter';
import BlogList from '../components/blog/BlogList';
import Image from 'next/image';
// import useSWR from 'swr';
// import { baseUrl, fetcher, DataAPIType } from '../lib/BlogData';
import { useInfiniteScroll } from '../lib/BlogData';
import Layout from '../layout/Basic';
import styled from 'styled-components';

const Blogger = () => {
	// const { data, error } = useSWR<DataAPIType>(baseUrl, fetcher);

	const { data, error, isLoadingMore, size, setSize, isReachingEnd } =
		useInfiniteScroll();

	if (error) return <h1>Something went wrong</h1>;
	if (!data) return <h1>Loading...</h1>;
	console.log(data.data);

	return (
		<Layout>
			<IconHeader />
			<Header>
				<Image
					src="/images/burger.png"
					width={50}
					height={37}
					alt="burger icon"
				/>
				<Title>블로고</Title>
				<Image
					src="/images/search.jpg"
					width={39}
					height={39}
					alt="search icon"
				/>
			</Header>
			<Image
				src="/images/banner.png"
				width={750}
				height={170}
				alt="blogger banner"
			/>
			<Divide>
				<Blog />
				<Filter />
			</Divide>
			<Bar />
			{data?.data?.map((blog) => (
				<BlogList blog={blog} key={blog.id} />
			))}
		</Layout>
	);
};

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 666px;
	height: 50px;
	margin: 0 auto 32px auto;
	color: #5382eb;
`;

const Title = styled.h1`
	display: inline-block;
	width: 150px;
	height: 100%;
	font-size: 40px;
`;

const Divide = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 666px;
	margin: 22px auto 0 auto;
`;

const Bar = styled.div`
	width: 666px;
	height: 4px;
	margin: 14px 42px 23px;
	background-color: #5382eb;
`;

export default Blogger;
