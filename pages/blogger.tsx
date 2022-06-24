import { useInfiniteScroll } from '../lib/useInfiniteScroll';
import IconHeader from '../components/common/IconHeader';
import WriteButton from '../components/blog/WriteButton';
import Tabs from '../components/blog/Tabs';
import BlogList from '../components/blog/BlogList';
import Image from 'next/image';
import Layout from '../layout/Basic';
import styled from 'styled-components';

const Blogger = () => {
	const { blogs, setTarget, isValidating } = useInfiniteScroll();

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
			<ButtonsDivide>
				<WriteButton />
				<Tabs />
			</ButtonsDivide>
			<Bar />
			{blogs?.map((blog) => {
				return <BlogList key={blog.id} blog={blog} />;
			})}
			{isValidating && <div>로딩중...</div>}
			{!isValidating && <TargetElement ref={setTarget}></TargetElement>}
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

const ButtonsDivide = styled.div`
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

const TargetElement = styled.section`
	width: 100%;
	height: 100px;
`;

export default Blogger;
