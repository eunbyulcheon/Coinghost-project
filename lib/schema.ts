import * as yup from 'yup';

export const schema = yup.object().shape({
	phone: yup.string().length(13, '형식에 맞지 않는 번호입니다.'),
	code: yup.string().length(6, '인증번호가 틀렸습니다. 다시 시도해 주세요.'),
	password: yup
		.string()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
			'8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'
		),
	pwConfirm: yup
		.string()
		.oneOf([yup.ref('password')], '패스워드가 일치하지 않습니다.'),
	nickname: yup.string(),
});