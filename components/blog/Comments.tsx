import { DataType } from '../../lib/BlogData';
import styled from 'styled-components';
import Image from 'next/image';

const Comments = ({ blog }: { blog: DataType }) => {
	return (
		<Box>
			<Image
				src="/images/comment.png"
				width={28}
				height={28}
				alt="comment icon"
			/>
			<Count>{blog.comments}</Count>
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
	margin-left: 12px;
	color: #5382eb;
	font-size: 26px;
	font-weight: normal;
	line-height: 1.08;
	letter-spacing: -0.65px;
`;

export default Comments;
