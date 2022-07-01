import Image from 'next/image';
import styled from 'styled-components';

const Nav = () => {
	return (
		<Header>
			<Image
				src="/images/burger.png"
				width={50}
				height={37}
				alt="burger icon"
			/>
			<Title>블로고</Title>
			<Image
				src="/images/search.jpg"
				width={39}
				height={39}
				alt="search icon"
			/>
		</Header>
	);
};

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 666px;
	height: 50px;
	margin: 0 auto 32px auto;
	color: #5382eb;
`;

const Title = styled.h1`
	display: inline-block;
	width: 150px;
	height: 100%;
	font-size: 40px;
`;

export default Nav;
