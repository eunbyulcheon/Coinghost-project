import Image from 'next/image';
import styled from 'styled-components';

const MoreReviews = () => {
	return (
		<>
			<PrevReview>
				<Image src="/images/detail/up.png" alt="up" width={20} height={15} />
				<Category>이전글</Category>
				<Text>이전 글</Text>
				<ReviewTime>2021.10.12</ReviewTime>
			</PrevReview>
			<SecondBar />
			<NextReview>
				<Image src="/images/detail/down.png" alt="up" width={20} height={15} />
				<Category>다음글</Category>
				<Text>다음 글</Text>
				<ReviewTime>2021.10.12</ReviewTime>
			</NextReview>
		</>
	);
};

const PrevReview = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 666px;
	height: 71px;
	margin: 0 auto;
`;

const Category = styled.p`
	width: 60px;
	height: 27px;
	margin: 25px 23px 19px 21px;
	font-size: 22px;
	font-weight: 500;
	text-align: left;
	color: #6f7070;
`;

const Text = styled.p`
	max-width: 390px;
	height: 27px;
	margin: 25px 90px 19px 23px;
	font-size: 22px;
	text-align: left;
	color: #6f7070;
`;

const ReviewTime = styled.p`
	position: absolute;
	right: 0;
	width: 112px;
	height: 27px;
	margin: 25px 0 19px 1px;
	font-size: 22px;
	text-align: right;
	color: #6f7070;
`;

const SecondBar = styled.div`
	width: 666px;
	height: 1px;
	margin: 0 42px 0 42.5px;
	background-color: #d5d5d5;
`;

const NextReview = styled(PrevReview)``;

export default MoreReviews;
