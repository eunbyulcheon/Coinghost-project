import Image from 'next/image';
import styled from 'styled-components';

const UserReaction = ({ likes, comments }: any) => {
	return (
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
	);
};

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

export default UserReaction;
