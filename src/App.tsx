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
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  ::before,
  ::after {
    box-sizing: border-box;
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
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 130px;
  padding-bottom: 50px;
  &.is-active {
    padding-top: 63px;
  }
`;

function App() {
  useEffect(() => {
    console.log(
      '%c입사지원한 허도경입니다. \n잘 부탁드립니다.',
      'color:#222; font-size:23px; font-size:32px; font-weight:bold; text-shadow: #000 1px 1px;'
    );
  }, []);

  const isDarkMode = useRecoilValue(isDarkAtom);
  const { scrollY } = useScroll();
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <PageScrollTop />
          <Header />
          <Container className={scrollY > 0 ? 'is-active' : ''}>
            <Routes>
              <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
              <Route
                path={process.env.PUBLIC_URL + '/details'}
                element={<Details />}
              />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
