import type { NextPage } from 'next';
import Head from 'next/head';
import SignupTerms from '../pages/signup/SignupTerms';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
			</Head>
			<SignupTerms />
		</div>
	);
};

export default Home;
