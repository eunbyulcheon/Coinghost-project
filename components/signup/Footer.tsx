import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			<Flex>
				<Use>이용약관</Use>
				<PersonalInfo>개인정보 처리방침</PersonalInfo>
				<Atlas>백서 바로가기</Atlas>
				<Announcements>공지사항</Announcements>
			</Flex>
			<Email>coinghost@coinghost.com</Email>
		</Container>
	);
};

const Container = styled.div`
	width: 490px;
	height: 99px;
	margin: 0 auto;
	padding: 32px 0 23px 0;
`;

const Flex = styled.div`
	display: flex;
	justify-content: center;
`;

const Use = styled.p`
	width: 48px;
	height: 17px;
	font-size: 13px;
	text-align: left;
	color: #acacac;
`;

const PersonalInfo = styled(Use)`
	width: 99px;
	height: 17px;
	margin-left: 28px;
`;

const Atlas = styled(Use)`
	width: 75px;
	height: 17px;
	margin-left: 28px;
`;

const Announcements = styled(Use)`
	width: 48px;
	height: 17px;
	margin-left: 28px;
`;

const Email = styled(Use)`
	width: 163px;
	height: 17px;
	margin: 10px 165px;
`;

export default Footer;
