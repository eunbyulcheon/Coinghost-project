import styled from 'styled-components';
import Image from 'next/image';

const WriteButton = () => {
	return (
		<LinkButton>
			<PostImage>
				<Image src="/images/post.png" width={72} height={32} alt="post icon" />
			</PostImage>
			<WriteImage>
				<Image
					src="/images/write.jpg"
					width={32}
					height={32}
					alt="writing icon"
				/>
			</WriteImage>
		</LinkButton>
	);
};

const LinkButton = styled.button`
	position: relative;
	width: 157px;
	height: 53px;
	padding: 10px 18px 10px 22px;
	border-radius: 26.5px;
	background-color: #5382eb;
`;

const PostImage = styled.div`
	position: absolute;
	top: 10px;
	left: 22px;
	font-size: 26px;
	font-weight: 500;
	color: #fff;
`;

const WriteImage = styled.div`
	position: absolute;
	top: 10px;
	right: 18px;
	background-color: #5382eb;
`;

export default WriteButton;
