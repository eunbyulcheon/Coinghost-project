import styled from 'styled-components';
import React from 'react';

interface Props {
	likes: boolean;
	all: boolean;
	tabsHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface ButtonProps {
	active: boolean;
}

const Tabs = ({ likes, all, tabsHandler }: Props) => {
	return (
		<TabsDivide>
			<AllButton id="all" active={likes} onClick={(e) => tabsHandler(e)}>
				전체글
			</AllButton>

			<MostLikedButton id="likes" active={all} onClick={(e) => tabsHandler(e)}>
				인기글
			</MostLikedButton>
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

const AllButton = styled.button<ButtonProps>`
	position: absolute;
	top: 6px;
	left: 8px;
	width: 250px;
	width: 116px;
	height: 53px;
	padding: 11px 22px 10px;
	border-radius: 26.5px;
	background-color: ${(props) => (props?.active ? '#f0f6fd' : '#5382eb')};
	color: ${(props) => (props?.active ? '#909090' : '#fff')};
	text-align: center;
	font-size: 26px;
	font-weight: 500;
	cursor: pointer;
`;

const MostLikedButton = styled(AllButton)<ButtonProps>`
	left: 125px;
	background-color: ${(props) => (props?.active ? '#f0f6fd' : '#5382eb')};
`;

export default Tabs;
