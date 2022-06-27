import Image from 'next/image';
import styled from 'styled-components';

const Header = () => {
	return (
		<BlueHeader>
			<NextIcon>
				<Image
					src="/images/detail/next.png"
					width={34}
					height={34}
					alt="next"
				/>
			</NextIcon>
			<Logo>
				<Image
					src="/images/detail/new-03.png"
					width={318}
					height={54.7}
					alt="new banner"
				/>
			</Logo>
		</BlueHeader>
	);
};

const BlueHeader = styled.div`
	position: relative;
	width: 100%;
	height: 181px;
	background-color: #5382eb;
`;

const NextIcon = styled.div`
	position: absolute;
	top: 117px;
	left: 42px;
`;

const Logo = styled.div`
	position: absolute;
	top: 101px;
	left: 216px;
	color: #fff;
`;

export default Header;
