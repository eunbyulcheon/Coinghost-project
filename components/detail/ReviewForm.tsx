import Image from 'next/image';
import styled from 'styled-components';

const ReviewForm = ({ creator }: any) => {
	return (
		<>
			<UserReview>
				<UserName>{creator?.nickName}</UserName>
				<ReviewInput placeholder="댓글을 남겨주세요." />
				<FormBtn>등록</FormBtn>
			</UserReview>
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
		</>
	);
};

const UserReview = styled.form`
	width: 666px;
	height: 225px;
	margin: 26px 42px 120px;
	padding: 22px 21px 17px 25px;
	border-radius: 15px;
	border: solid 1px #6f94e9;
	background-color: #fff;
`;

const UserName = styled.h3`
	width: 300px;
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

export default ReviewForm;
