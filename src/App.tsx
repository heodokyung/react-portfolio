import { darkTheme, lightTheme } from './theme';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset } from 'styled-reset';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import { useScroll } from './components/common/useScroll';
import Home from './routes/Home';
import Details from './routes/Details';
import Footer from './components/common/Footer';
import PageScrollTop from './components/common/PageScrollTop';
import 'react-app-polyfill/ie11';
import "react-app-polyfill/stable";
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-size:1px;
  }

  button {
    border: 0;
    vertical-align: middle;
    cursor: pointer;
    overflow: visible;
    background: transparent;
  }

  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    --bgColor: ${(props) => props.theme.bgColor};
    --textColor: ${(props) => props.theme.textColor};
    --accentColor: ${(props) => props.theme.accentColor};
    --listColor: ${(props) => props.theme.listColor};
    --subListColor: ${(props) => props.theme.subListColor};
    --linkColor : ${(props) => props.theme.linkColor};
  }

  body {
    line-height: 1;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const Container = styled.div`
	padding-top: 130rem;
	padding-bottom: 50rem;
	&.is-active {
		padding-top: 63rem;
	}
`;

function App() {
	useEffect(() => {
		console.log(
			'%c안녕하세요! 오늘 하루도 감사합니다.',
			'color:#222; font-size:24px; font-weight:bold; text-shadow: #000 1px 1px;',
		);
  }, []);

	const isDarkMode = useRecoilValue(isDarkAtom);
  const { scrollY } = useScroll();
	return (
		<>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<GlobalStyle />
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<PageScrollTop />
					<Header />
					<Container className={scrollY > 0 ? 'is-active' : ''}>
						<Routes>
							<Route path={'/'} element={<Home />} />
							<Route path={'/details'} element={<Details />} />
						</Routes>
					</Container>
					<Footer />
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}

export default App;
