import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInfiniteScroll } from '../../lib/useInfiniteScroll';
import Nav from '../../components/blog/Nav';
import IconHeader from '../../components/common/IconHeader';
import WriteButton from '../../components/blog/WriteButton';
import Tabs from '../../components/blog/Tabs';
import BlogList from '../../components/blog/BlogList';
import styled from 'styled-components';

const Blogger = () => {
	const [likes, setLikes] = useState(false);
	const [all, setAll] = useState(true);
	const { blogs, setTarget, isValidating } = useInfiniteScroll({ likes });

	const tabsHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (e.currentTarget.id === 'likes') {
			setAll(false);
			setLikes(true);
		} else if (e.currentTarget.id === 'all') {
			setLikes(false);
			setAll(true);
		}
	};

	return (
		<BlogSection>
			<IconHeader />
			<Nav />
			<Image
				src="/images/banner.png"
				width={750}
				height={170}
				alt="blogger banner"
			/>
			<ButtonsDivide>
				<WriteButton />
				<Tabs tabsHandler={tabsHandler} likes={likes} all={all} />
			</ButtonsDivide>
			<Bar />
			{blogs?.map((blog) => {
				return (
					<Link href="/blogs/[id]" as={`/blogs/${blog.id}`}>
						<a>
							<BlogList key={blog.id} blog={blog} />
						</a>
					</Link>
				);
			})}
			{!isValidating && <TargetElement ref={setTarget}></TargetElement>}
		</BlogSection>
	);
};

const BlogSection = styled.section``;

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
