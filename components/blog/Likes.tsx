import { DataType } from '../../lib/BlogData';
import styled from 'styled-components';
import Image from 'next/image';

const Likes = ({ blog }: { blog: DataType }) => {
	return (
		<Box>
			<Image src="/images/heart.jpg" width={30} height={30} alt="heart icon" />
			<Count>{blog.likes}</Count>
		</Box>
	);
};

const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Count = styled.p`
	width: 15px;
	height: 32px;
	margin: 0 15px 0 12px;
	font-size: 26px;
	font-weight: normal;
	line-height: 1.08;
	letter-spacing: -0.65px;
	color: #5382eb;
`;

export default Likes;
