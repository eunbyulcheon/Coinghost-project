import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/signup/Header';
import Footer from '../components/signup/Footer';
import { termsList } from '../lib/termsList';
import styled from 'styled-components';

const Terms = () => {
	const [isChecked, setIsChecked] = useState(
		new Array(termsList.length).fill(false)
	);
	const required = termsList.slice(0, 3);
	const router = useRouter();

	console.log(isChecked);

	const onChangeHandler = (position: number) => {
		const updatedCheckbox = isChecked.map((item, index) =>
			index === position ? !item : item
		);

		setIsChecked(updatedCheckbox);
	};

	const selectAllHandler = (event: { target: { checked: boolean } }) => {
		const updatedCheckbox = new Array(termsList.length).fill(
			event.target.checked
		);

		setIsChecked(updatedCheckbox);
	};

	const isValid = (arr: any) => arr.every((value: boolean) => value === true);

	return (
		<>
			<Header />

			<TermsForm>
				<SelectAllBtn>
					<AllCheckbox
						type="checkbox"
						id="checkAll"
						checked={isChecked.every((value) => value)}
						onChange={selectAllHandler}
					/>
					<SelectAllLabel htmlFor="checkAll">
						코인고스트 이용약관, 개인정보 처리방침, 이벤트 및 정보 안내
						수신(선택)에 모두 동의합니다.
					</SelectAllLabel>
				</SelectAllBtn>

				<Bar />

				{termsList.map((list, index) => (
					<RequiredConditions key={index}>
						<Flex>
							<Checkbox
								type="checkbox"
								id={`checkbox-${index}`}
								checked={isChecked[index]}
								onChange={() => onChangeHandler(index)}
							/>
							<CheckboxLabel htmlFor={`checkbox-${index}`}>
								{list.title}
								<span>({list.require})</span>
							</CheckboxLabel>
						</Flex>
						<ConditionsText>{list.text}</ConditionsText>
					</RequiredConditions>
				))}

				<BtnDivide>
					<CancelBtn>취소</CancelBtn>
					<NextBtn
						type="button"
						onClick={() => router.push('/Signup')}
						disabled={isValid(required)}
					>
						다음
					</NextBtn>
				</BtnDivide>
			</TermsForm>

			<Footer />
		</>
	);
};

const TermsForm = styled.form``;

const SelectAllBtn = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	width: 490px;
	margin: 0 auto;
`;

const AllCheckbox = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	cursor: pointer;
`;

const SelectAllLabel = styled.label`
	width: 461px;
	height: 36px;
	margin-left: 30px;
	word-break: keep-all;
	font-size: 14px;
	font-weight: bold;
	text-align: left;
	color: #2b2b2b;

	&::before {
		content: '';
		background: url('images/signup/checkbox.png');
		position: absolute;
		top: 0;
		left: 0;
		width: 20px;
		height: 20px;
	}
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
	position: relative;
	display: flex;
	align-items: center;
	line-height: 18px;
`;

const Checkbox = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
`;

const CheckboxLabel = styled.label`
	width: 200px;
	height: 18px;
	margin-left: 30px;
	font-size: 14px;
	font-weight: bold;
	text-align: left;
	color: #2b2b2b;

	span {
		color: #6f94e9;
		margin-left: 4px;
	}

	&::before {
		content: '';
		background: url('images/signup/checkboxLight.png');
		position: absolute;
		top: 0;
		left: 0;
		width: 20px;
		height: 20px;
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

	&:last-child {
		border: none;
	}
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
