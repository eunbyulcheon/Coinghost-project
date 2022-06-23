import { FaWifi, FaBatteryFull } from 'react-icons/fa';
import { IoMdCellular } from 'react-icons/io';
import styled from 'styled-components';

const IconHeader = () => {
	return (
		<Section>
			{icons.map((list) => (
				<Icon key={list.id} width={list.width} margin={list.margin}>
					{list.image}
				</Icon>
			))}
		</Section>
	);
};

const icons = [
	{
		id: 1,
		image: <IoMdCellular />,
		width: '34px',
		margin: '0.7px 0 0.7px 0',
	},
	{
		id: 2,
		image: <FaWifi />,
		width: '30.7px',
		margin: '0 10px 0.7px',
	},
	{
		id: 3,
		image: <FaBatteryFull />,
		width: '36px',
		margin: '0',
	},
];

const Section = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 750px;
	height: 88px;
	margin: 0 0 16px 1px;
	padding: 34.7px 27.7px 30.7px 588px;
`;

const Icon = styled.div<{ width: string; margin: string }>`
	font-size: ${(props) => props.width};
	margin: ${(props) => props.margin};
`;

export default IconHeader;
