import Likes from './Likes';
import Comments from './Comments';
import { DataType } from '../../lib/Interface';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';
import Image from 'next/image';

const BlogList = ({ blog }: { blog: DataType }) => {
	return (
		<>
			<Container>
				<Image
					src={blog.defaultThumbnail.url}
					width={131}
					height={102}
					alt="user blog post"
				/>
				<Content>
					<Title>{blog.title}</Title>
					<Info>
						<Left>
							<Nickname>{blog.creator.nickName}</Nickname>
							<Time>{moment(blog.createdAt).locale('ko').fromNow()}</Time>
						</Left>
						<Right>
							<Likes blog={blog} />
							<Comments blog={blog} />
						</Right>
					</Info>
				</Content>
			</Container>
			<Divider />
		</>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 666px;
	height: 102px;
	margin: 0 auto;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 516px;
	height: 100%;
`;

const Title = styled.h1`
	width: 516px;
	height: 64px;
	font-size: 25px;
	font-weight: 500;
	line-height: 1.23;
	letter-spacing: -0.65px;
	text-align: left;
	color: #2b2b2b;
`;

const Info = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 30px;
`;

const Left = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;

const Nickname = styled.h2`
	min-width: 65px;
	height: 100%;
	margin-right: 19px;
	font-size: 24px;
	font-weight: normal;
	line-height: 1.17;
	letter-spacing: -0.6px;
	text-align: left;
	color: #5382eb;
`;

const Time = styled(Nickname)`
	width: 76px;
	margin-right: 0;
	color: #6f7070;
`;

const Right = styled(Left)``;

const Divider = styled.div`
	width: 666px;
	height: 0.5px;
	margin: 23.8px 41.5px 24.8px 42.5px;
	background-color: #ccc;
`;

export default BlogList;
