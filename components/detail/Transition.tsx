import styled from 'styled-components';

const Transition = () => {
	return (
		<MultiBtn>
			<ListBtn>몰록</ListBtn>
			<UrlBtn>URL 복사</UrlBtn>
		</MultiBtn>
	);
};

const MultiBtn = styled.div`
	display: flex;
	justify-content: space-between;
	width: 666px;
	height: 53px;
	margin: 45px auto;
`;

const ListBtn = styled.button`
	width: 97px;
	height: 100%;
	border-radius: 15px;
	background-color: #5382eb;
	color: #fff;
	font-size: 26px;
`;

const UrlBtn = styled(ListBtn)`
	width: 157px;
`;

export default Transition;
