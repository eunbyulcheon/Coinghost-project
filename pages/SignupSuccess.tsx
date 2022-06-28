import Image from 'next/image';
import styled from 'styled-components';

const SignupSuccess = () => {
	return (
		<View>
			<Image
				src="/images/signup/coinghost_logo.png"
				width={390}
				height={66.6}
				alt="coinghost logo"
			/>
			<Message>계정 및 Wallet 생성 완료!</Message>
			<Image
				src="/images/signup/ghost.png"
				width={180}
				height={313}
				alt="coinghost"
			/>
			<EnterBtn>메인페이지로 이동</EnterBtn>
		</View>
	);
};

const View = styled.section`
	width: 100%;
	text-align: center;
	padding-top: 197px;
	background-color: #fff;
`;

const Message = styled.p`
	width: 168px;
	height: 21px;
	margin: 29.4px auto 107px;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: -0.16px;
	color: #6f94e9;
`;

const EnterBtn = styled.button`
	display: block;
	width: 390px;
	height: 50px;
	margin: 93px auto 196px;
	border-radius: 7px;
	background-color: #6f94e9;
	color: #fff;
	font-size: 16px;
	font-weight: bold;
`;

export default SignupSuccess;
