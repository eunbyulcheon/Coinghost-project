import styled from 'styled-components';
import Image from 'next/image';

const Tabs = () => {
	return (
		<TabsDivide>
			<MostLikedButton>
				<Image
					src="/images/mostliked.png"
					width={72}
					height={32}
					alt="most liked"
				/>
			</MostLikedButton>

			<AllButton>
				<Image
					src="/images/allposts.png"
					width={72}
					height={32}
					alt="all posts"
				/>
			</AllButton>
		</TabsDivide>
	);
};

const TabsDivide = styled.div`
	position: relative;
	width: 250px;
	height: 65px;
	padding: 6px 30px 6px 8px;
	border-radius: 32.5px;
	background-color: #f0f6fd;
`;

const MostLikedButton = styled.button`
	position: absolute;
	top: 17px;
	right: 30px;
	color: #909090;
	font-size: 26px;
	font-weight: 500;
`;

const AllButton = styled.button`
	position: absolute;
	top: 6px;
	left: 8px;
	width: 250px;
	width: 116px;
	height: 53px;
	padding: 11px 22px 10px;
	border-radius: 26.5px;
	color: #fff;
	background-color: #5382eb;
	text-align: center;
	font-size: 26px;
	font-weight: 500;
`;

export default Tabs;
