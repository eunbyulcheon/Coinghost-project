import Image from 'next/image';
import styled from 'styled-components';

const Header = () => {
	return (
		<Container>
			<Image
				src="/images/signup/coinghost_logo.png"
				width={390}
				height={66.6}
				alt="coinghost logo"
			/>
			<Description>고인고스트 계정 및 Wallet을 생상합니다.</Description>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 186.5px;
	margin-bottom: 25.5px;
	padding: 45px 0 24.5px 0;
	border-bottom: 1px solid #5382eb;
	text-align: center;
`;

const Description = styled.h1`
	margin-top: 29.4px;
	color: #6f94e9;
	font-size: 16px;
	font-weight: 500;
`;

export default Header;
