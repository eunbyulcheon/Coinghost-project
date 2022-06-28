import Header from '../../components/detail/Header';
import MoreReviews from '../../components/detail/MoreReviews';
import Footer from '../../components/detail/Footer';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { baseUrl } from '../../lib/DataFetcher';
import moment from 'moment';
import styled from 'styled-components';
import { AiOutlineMore } from 'react-icons/ai';

const Detail = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { title, createdAt, creator, views, likes, comments, contents } =
		blog.data.data;

	return (
		<>
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
			<MultiBtn>
				<ListBtn>몰록</ListBtn>
				<UrlBtn>URL 복사</UrlBtn>
			</MultiBtn>
			<BlogBanner>
				<Image
					src="/images/detail/blogBanner.png"
					alt="blog banner"
					width={666}
					height={130}
				/>
			</BlogBanner>
			<ReviewHead>
				<ReviewTitle>댓글</ReviewTitle>
				<Icons>
					<Image
						src="/images/blog/heart.jpg"
						alt="heart"
						width={39}
						height={39}
					/>
					<LikesAmount>{likes}</LikesAmount>
					<Image
						src="/images/blog/comment.png"
						alt="review"
						width={39}
						height={39}
					/>
					<ReviewAmount>{comments}</ReviewAmount>
				</Icons>
			</ReviewHead>
			<ReviewForm>
				<UserName>{creator?.nickName}</UserName>
				<ReviewInput placeholder="댓글을 남겨주세요." />
				<FormBtn>등록</FormBtn>
			</ReviewForm>
			<ReviewViewer>
				<Image
					src="/images/detail/pencil.jpg"
					width={88}
					height={88}
					alt="pencil"
				/>
				<Content>
					댓글이 없습니다.
					<br />첫 댓글을 작성해 보세요.
				</Content>
			</ReviewViewer>
			<MoreReviews />
			<Footer />
		</>
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
	console.log(params);

	return { props: { blog } };
};

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
	width: 608px;
	height: 152px;
	margin: 25.8px 21px 23px 42px;
	font-size: 26px;
	line-height: 1.54;
	letter-spacing: normal;
	text-align: left;
	color: #2b2b2b;
`;

const MultiBtn = styled.div`
	display: flex;
	justify-content: space-between;
	width: 666px;
	height: 53px;
	margin: 45px auto;
`;

const BlogBanner = styled.div`
	margin-left: 42px;
`;

const ListBtn = styled.button`
	width: 97px;
	height: 100%;
	border-radius: 15px;
	background-color: #5382eb;
	color: #fff;
	font-size: 26px;
`;

const UrlBtn = styled(ListBtn)`
	width: 157px;
`;

const ReviewHead = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 666px;
	height: 40px;
	margin: 40px auto;
`;

const ReviewTitle = styled.h1`
	width: 57px;
	color: #2b2b2b;
	font-size: 31px;
	text-align: left;
`;

const Icons = styled.div`
	display: flex;
	align-items: center;
`;

const LikesAmount = styled.p`
	min-width: 37px;
	height: 40px;
	margin: 0 13px 0 26px;
	color: #5382eb;
	font-size: 34px;
	line-height: 1.06;
	letter-spacing: -0.8px;
`;

const ReviewAmount = styled(LikesAmount)`
	margin-right: 0;
`;

const ReviewForm = styled.form`
	width: 666px;
	height: 225px;
	margin: 26px 42px 120px;
	padding: 22px 21px 17px 25px;
	border-radius: 15px;
	border: solid 1px #6f94e9;
	background-color: #fff;
`;

const UserName = styled.h3`
	width: 76px;
	height: 35px;
	margin: 0 451px 14px 0;
	text-align: left;
	color: #2b2b2b;
	font-size: 28px;
	font-weight: 500;
`;

const ReviewInput = styled.input`
	width: 536px;
	min-height: 32px;
	max-height: 64px;
	border: none;
	font-size: 26px;
	line-height: 1.15;
	letter-spacing: -0.65px;
	text-align: left;
	color: #bfbfbf;
`;

const FormBtn = styled.button`
	width: 93px;
	height: 53px;
	margin: 52px 21px 0 531px;
	padding: 12px 24px 11px 25px;
	border-radius: 15px;
	background-color: #909090;
	color: #fff;
	font-size: 24px;
`;

const ReviewViewer = styled.div`
	width: 666px;
	margin: 0 auto;
	text-align: center;
`;

const Content = styled.div`
	width: 256px;
	height: 62px;
	margin: 24px auto 120px auto;
	color: #d9e0e9;
	font-size: 26px;
	line-height: 1.15;
	letter-spacing: -0.65px;
`;

export default Detail;
