import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '../components/signup/Header';
import Footer from '../components/signup/Footer';
import { schema } from '../lib/schema';
import { FormInputData } from '../lib/Types';
import styled from 'styled-components';
import Image from 'next/image';

const Signup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FormInputData>({ resolver: yupResolver(schema) });

	const router = useRouter();
	const onSubmitHandler: SubmitHandler<FormInputData> = (data) => {
		console.log(data);
		router.push('/SignupSuccess');
	};

	const handleRegister = () => {
		const phone = watch('phone');
		fetch('/api/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ phone }),
		})
			.then((res) => res.json())
			.then((data) => alert(data?.data?.message));
	};

	const handleAuth = () => {
		const auth = watch('code');
		fetch('/api/auth', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ auth }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.data.message === true) {
					alert('인증되었습니다.');
				} else {
					alert(data.data.message);
				}
			});
	};

	return (
		<>
			<Header />

			<SignUpForm onSubmit={handleSubmit(onSubmitHandler)}>
				<Phone>
					<PhoneLabel>
						<Title>계정 생성</Title>
						<Description>
							코인고스트는 개인 휴대전화 번호를 계정으로 사용합니다.
						</Description>
					</PhoneLabel>
					<AreaCode>
						대한민국 +82
						<Dropdown>
							<Image
								src="/images/signup/dropdown.png"
								width={18}
								height={13.5}
								alt="dropdown icon"
							/>
						</Dropdown>
					</AreaCode>
					<Flex>
						<Input
							type="string"
							placeholder="전화번호 입력"
							id="phone"
							{...register('phone', { value: '82-' })}
						/>
						<Btn
							type="button"
							onClick={handleRegister}
							disabled={watch('code') !== ''}
						>
							인증번호 받기
						</Btn>
					</Flex>
					{errors.phone && <Message>{errors.phone?.message}</Message>}
					<Flex>
						<Input
							type="text"
							placeholder="인증번호"
							id="code"
							{...register('code')}
						/>
						<Btn type="button" onClick={handleAuth}>
							인증하기
						</Btn>
					</Flex>
					{errors.code && <Message>{errors.code?.message}</Message>}
				</Phone>

				<Password>
					<PwLabel>패스워드</PwLabel>
					<PwInput type="password" id="password" {...register('password')} />
					<ShowIcon>
						<Image
							src="/images/signup/see.png"
							width={22.5}
							height={21}
							alt="show password"
						/>
					</ShowIcon>
					{errors.password && <Message>{errors.password?.message}</Message>}
				</Password>

				<ConfirmPw>
					<ConfirmPwLabel>패스워드 재확인</ConfirmPwLabel>
					<ConfirmPwInput
						type="password"
						id="pwConfirm"
						{...register('pwConfirm')}
					/>
					<ShowIcon>
						<Image
							src="/images/signup/see.png"
							width={22.5}
							height={21}
							alt="show password"
						/>
					</ShowIcon>
					{errors.pwConfirm && <Message>{errors.pwConfirm?.message}</Message>}
				</ConfirmPw>

				<Nickname>
					<NicknameLabel>닉네임</NicknameLabel>
					<Flex>
						<Input type="text" id="nickname" {...register('nickname')} />
						<Btn>중복확인</Btn>
					</Flex>
					{errors.nickname && <Message>{errors.nickname?.message}</Message>}
				</Nickname>

				<ProfilePicture>
					<ProfileLabel>프로필 사진 (선택)</ProfileLabel>
					<Flex>
						<Input />
						<Btn>사진변경</Btn>
					</Flex>
				</ProfilePicture>

				<SignupBtn type="submit">가입하기</SignupBtn>
			</SignUpForm>

			<Footer />
		</>
	);
};

const SignUpForm = styled.form`
	width: 490px;
	margin: 0 auto;
`;

const Phone = styled.div``;

const PhoneLabel = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	width: 55px;
	height: 18px;
	font-size: 14px;
	font-weight: bold;
	color: #2b2b2b;
`;

const Description = styled.p`
	width: 235px;
	height: 13px;
	font-size: 10px;
	color: #5c5c5c;
`;

const AreaCode = styled.div`
	position: relative;
	width: 490px;
	height: 50px;
	margin: 15px 0;
	padding: 16px 20px 16px 15px;
	border-radius: 3px;
	border: solid 1px #d5d5d5;
	background-color: #fff;
	font-size: 14px;
	font-weight: 500;
`;

const Dropdown = styled.div`
	position: absolute;
	top: 20px;
	right: 18.5px;
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
`;

const Input = styled.input`
	width: 350px;
	height: 50px;
	padding: 16px 15px;
	border-radius: 3px;
	border: solid 1px #d5d5d5;
	color: #909090;
	background-color: #fff;
`;

const Btn = styled.button`
	width: 130px;
	height: 50px;
	padding: 16px 25px;
	border-radius: 3px;
	background-color: ${(props) => (props.disabled ? '#c3d4fc' : '#6f94e9')};
	color: #fff;
	font-size: 14px;
	font-weight: 500;
`;

const Message = styled.p`
	width: 490px;
	height: 13px;
	margin: 15px 0 24px;
	font-size: 10px;
	text-align: left;
	color: #f01a1a;
`;

const Password = styled.div`
	position: relative;
	margin-top: 32px;
`;

const PwLabel = styled(Title)`
	width: 52px;
	margin-bottom: 15px;
`;

const ShowIcon = styled.div`
	position: absolute;
	top: 48px;
	right: 15px;
	width: 22.5px;
	height: 21px;
`;

const PwInput = styled.input`
	width: 490px;
	height: 50px;
	padding: 15px 16px;
	border-radius: 3px;
	border: solid 1px #d5d5d5;
	background-color: #fff;
`;

const ConfirmPw = styled(Password)``;

const ConfirmPwLabel = styled(PwLabel)`
	width: 93px;
`;

const ConfirmPwInput = styled(PwInput)``;

const Nickname = styled.div`
	margin-top: 32px;
`;

const NicknameLabel = styled(Title)`
	width: 39px;
	margin-bottom: 15px;
`;

const ProfilePicture = styled.div`
	margin-top: 22px;
`;

const ProfileLabel = styled(Title)`
	width: 104px;
	margin-bottom: 15px;
`;

const SignupBtn = styled.button`
	width: 100%;
	height: 50px;
	margin: 60px auto 97px auto;
	border-radius: 7px;
	background-color: #c3d4fc;
	color: #909090;
	font-size: 16px;
	font-weight: bold;

	&:active {
		background-color: #6f94e9;
		color: #fff;
	}
`;

export default Signup;
