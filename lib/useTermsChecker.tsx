import { useState } from 'react';
import { useRouter } from 'next/router';
import { termsList } from './termsList';

export const useTermsChecker = () => {
	const [isChecked, setIsChecked] = useState(
		new Array(termsList.length).fill(false)
	);
	const required = isChecked.slice(0, 3);
	const router = useRouter();

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

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push('/signup/Signup');
	};

	return { isChecked, required, onChangeHandler, selectAllHandler, onSubmit };
};
