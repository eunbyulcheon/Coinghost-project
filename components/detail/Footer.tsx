import styled from 'styled-components';
import Image from 'next/image';

const Footer = () => {
	return (
		<Container>
			<Image
				src="/images/detail/new-03.png"
				alt="banner"
				width={207}
				height={35}
			/>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 109px;
	margin-top: 43px;
	padding: 35px 271px 39px 272px;
	text-align: center;
	background-color: #f0f6fd;
`;

export default Footer;
