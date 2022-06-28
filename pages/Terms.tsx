import Header from '../components/signup/Header';
import Footer from '../components/signup/Footer';
import styled from 'styled-components';
import { RiCheckboxCircleLine } from 'react-icons/ri';

const Terms = () => {
	return (
		<>
			<Header />

			<SelectAllBtn>
				<CheckboxIcon>
					<RiCheckboxCircleLine />
				</CheckboxIcon>
				<SelectAllText>
					코인고스트 이용약관, 개인정보 처리방침, 이벤트 및 정보 안내
					수신(선택)에 모두 동의합니다.
				</SelectAllText>
			</SelectAllBtn>

			<Bar />

			{termsList.map((list) => (
				<RequiredConditions key={list.id}>
					<Flex>
						<CheckboxIcon>
							<RiCheckboxCircleLine />
						</CheckboxIcon>
						<Context>
							{list.title}
							<span>(필수)</span>
						</Context>
					</Flex>
					<ConditionsText>
						네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본
						약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를
						제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버
						서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러
						여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를
						포함하고 있습니다. 네이버 서비스를 이용하시거나 네이버 서비스
						회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을
						확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐
						주시기 바랍니다. 네이버 서비스 및 제품(이하 ‘서비스’)을 이용해
						주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여
						네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를
						이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를
						설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는
						유익한 정보를 포함하고 있습니다.
					</ConditionsText>
				</RequiredConditions>
			))}

			<OptionalCondition>
				<Flex>
					<CheckboxIcon>
						<RiCheckboxCircleLine />
					</CheckboxIcon>
					<Context>
						이벤트 및 정보 안내 수신
						<span>(선택)</span>
					</Context>
				</Flex>
				<OptionalConditionText>
					네이버에서 제공하는 이벤트/혜택 등 다양한 정보를 휴대전화(네이버앱
					알림 또는 문자), 이메일로 받아 보실 수 있습니다. 일부 서비스(별도 회원
					체계로 운영하거나 네이버 가입 이후 추가 가입하여 이용하는 서비스 등)의
					경우, 개별 서비스에 대해 별도 수신 동의를 받을 수 있으며, 이때에도
					수신 동의에 대해 별도 로 안내하고 동의를 받습니다.
				</OptionalConditionText>
			</OptionalCondition>

			<BtnDivide>
				<CancelBtn>취소</CancelBtn>
				<NextBtn>다음</NextBtn>
			</BtnDivide>

			<Footer />
		</>
	);
};

const termsList = [
	{
		id: 1,
		title: '코인고스트 이용약관 동의',
	},
	{
		id: 2,
		title: '윌렛 이용약관 동의',
	},
	{
		id: 3,
		title: '개인정보 처리방침',
	},
];

const SelectAllBtn = styled.div`
	display: flex;
	align-items: flex-start;
	width: 490px;
	margin: 0 auto;
`;

const CheckboxIcon = styled.div`
	font-size: 25px;
	background-color: #fff;
	color: #c6c6c6;
	/* color: #2b2b2b; */
`;

const SelectAllText = styled.p`
	width: 461px;
	height: 36px;
	margin-left: 8px;
	word-break: keep-all;
	font-size: 14px;
	font-weight: bold;
	text-align: left;
	color: #2b2b2b;
`;

const Bar = styled.div`
	width: 490px;
	height: 0.5px;
	margin: 27.8px auto 24.8px;
	background-color: #c6c6c6;
`;

const RequiredConditions = styled.div`
	width: 490px;
	margin: 0 auto;
`;

const Flex = styled.div`
	display: flex;
	align-items: center;
	line-height: 18px;
`;

const Context = styled.p`
	width: 200px;
	height: 18px;
	margin-left: 8px;
	font-size: 14px;
	font-weight: bold;
	text-align: left;
	color: #2b2b2b;

	span {
		color: #6f94e9;
		margin-left: 4px;
	}
`;

const ConditionsText = styled.div`
	width: 490px;
	height: 110px;
	margin: 10px auto 21px;
	padding: 10px 4px 5px 8px;
	border-radius: 3px;
	border: solid 1px #d5d5d5;
	overflow: hidden;
	overflow-y: scroll;
	background-color: #fff;
	word-break: keep-all;
	font-size: 10px;
	line-height: 1.5;
	letter-spacing: -0.25px;
	text-align: left;
	color: #6f7070;

	&::-webkit-scrollbar {
		width: 3px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #b2c3ea;
		border-radius: 1.5px;
	}
`;

const OptionalCondition = styled(RequiredConditions)``;

const OptionalConditionText = styled.p`
	width: 487px;
	height: 69px;
	margin-top: 10px;
	font-size: 12px;
	font-weight: 500;
	line-height: 1.5;
	letter-spacing: -0.3px;
	text-align: left;
	color: #6f7070;
`;

const BtnDivide = styled.div`
	display: flex;
	justify-content: space-between;
	width: 490px;
	height: 50px;
	margin: 40px auto 32px;
`;

const CancelBtn = styled.button`
	width: 240px;
	height: 100%;
	border-radius: 7px;
	border: solid 1px #d5d5d5;
	background-color: #fff;
	font-size: 16px;
	font-weight: bold;
`;

const NextBtn = styled(CancelBtn)`
	background-color: #6f94e9;
	color: #fff;
`;

export default Terms;
