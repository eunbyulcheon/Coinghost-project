import { DataType } from '../../lib/types';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
	blog: DataType;
}

const Comments = ({ blog }: Props) => {
	return (
		<CommentDivide>
			<Image
				src="/images/comment.png"
				width={28}
				height={28}
				alt="comment icon"
			/>
			<Amount>{blog.comments}</Amount>
		</CommentDivide>
	);
};

const CommentDivide = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 15px;
`;

const Amount = styled.p`
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
