import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  body {
    width: 750px;
    margin: 0 auto;
    border: 1px solid #000;
  }

  button{
    border: none;
  }

  a{
    text-decoration: none;
  }
`;

const Layout = ({ children }: { children: any }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	);
};

export default Layout;
