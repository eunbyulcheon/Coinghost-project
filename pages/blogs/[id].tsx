import Header from '../../components/detail/Header';
import ReviewForm from '../../components/detail/ReviewForm';
import Transition from '../../components/detail/Transition';
import MoreReviews from '../../components/detail/MoreReviews';
import Footer from '../../components/detail/Footer';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { baseUrl } from '../../lib/DataFetcher';
import moment from 'moment';
import styled from 'styled-components';
import { AiOutlineMore } from 'react-icons/ai';
import UserReaction from '../../components/detail/UserReaction';

const Detail = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { title, createdAt, creator, views, likes, comments, contents } =
		blog.data.data;

	return (
		<DetailSection>
			<Header />
			<Title>{title}</Title>
			<PostDetail>
				<ImageDivide>
					<Image
						src="/images/detail/default_user.png"
						width={80}
						height={80}
						layout="responsive"
						alt="user profile"
					/>
				</ImageDivide>
				<PostInfo>
					<Nickname>{creator?.nickName}</Nickname>
					<TimeInfo>
						<Time>{moment(createdAt).format('YYYY.MM.DD hh:mm')}</Time>
						<Views>조회수 {views}</Views>
					</TimeInfo>
				</PostInfo>
				<AiOutlineMore
					style={{
						position: 'absolute',
						right: '0',
						bottom: '0',
						width: '45px',
						height: '42px',
						color: '#6f7070',
					}}
				/>
			</PostDetail>
			<Bar />
			<UserReview>{contents}</UserReview>
			<Transition />
			<BlogBanner>
				<Image
					src="/images/detail/blogBanner.png"
					alt="blog banner"
					width={666}
					height={130}
				/>
			</BlogBanner>
			<UserReaction likes={likes} comments={comments} />
			<ReviewForm creator={creator} />
			<MoreReviews />
			<Footer />
		</DetailSection>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${baseUrl}`);
	const data = await res.json();
	const blogs = data?.data.data;

	const paths = blogs.map((blog: { id: number }) => ({
		params: { id: blog.id.toString() },
	}));

	return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(`${baseUrl}/${params?.id}`);
	const blog = await res.json();

	return { props: { blog } };
};

const DetailSection = styled.section``;

const Title = styled.h1`
	width: 666px;
	height: 41px;
	margin: 40px 36px 45px 42px;
	font-size: 33px;
	font-weight: 500;
	line-height: 0.97;
	letter-spacing: -0.83px;
	text-align: left;
	color: #2b2b2b;
`;

const PostDetail = styled.div`
	display: flex;
	position: relative;
	width: 666px;
	height: 80px;
	margin: 0 auto;
`;

const ImageDivide = styled.div`
	width: 80px;
	height: 80px;
	margin-right: 22px;
	border-radius: 50%;
`;

const PostInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
`;

const Nickname = styled.h2`
	min-width: 81px;
	height: 37px;
	margin-bottom: 9px;
	font-size: 30px;
	font-weight: 500;
	line-height: 1;
	letter-spacing: -0.75px;
	text-align: left;
	color: #2b2b2b;
`;

const TimeInfo = styled.div`
	display: flex;
	color: #6f7070;
`;

const Time = styled.p`
	min-width: 187px;
	height: 30px;
	margin-right: 14px;
	font-size: 24px;
`;

const Views = styled.p`
	min-width: 111px;
	height: 30px;
	font-size: 24px;
`;

const Bar = styled.div`
	width: 666px;
	height: 0.5px;
	margin: 22.8px 41.5px 25.8px 42.5px;
	background-color: #5382eb;
`;

const UserReview = styled.div`
	width: 666px;
	height: 152px;
	margin: 25.8px 21px 23px 42px;
	overflow: hidden;
	font-size: 26px;
	line-height: 1.54;
	letter-spacing: normal;
	text-align: left;
	color: #2b2b2b;
`;

const BlogBanner = styled.div`
	margin-left: 42px;
`;

export default Detail;
