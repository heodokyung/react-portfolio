import styled, { keyframes } from 'styled-components';
import { useScroll } from './useScroll';

/****************************************
* Header CSS-in-js 정의 부분
/***************************************/
const fadeInAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FooterWrap = styled.article`
  padding: 50px 0;
  background-color: ${(props) => props.theme.listColor};
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  footer {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 24px;
    height: 100%;
    address {
      margin-top: 12px;
    }
  }
`;

const BtnScrollTop = styled.button`
  position: fixed;
  display: none;
  width: 55px;
  height: 63px;
  background-size: cover;
  right: 15px;
  bottom: 30px;
  border-radius: 8px;
  z-index: 10;
  background-position: 50% 50%;
  background-size: cover;
  &.is-active {
    display: block;
    animation: ${fadeInAni} 0.65s forwards ease-in-out;
  }
`;

/****************************************
* Header Function 정의 부분
/***************************************/

const Footer = () => {
  const { scrollY } = useScroll();

  // 최상단 화면 이동
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterWrap>
      <footer>
        <article className="copyright">
          Copyright © HEO.D.K All rights reserved.
        </article>
        <address>
          <a href="mailto:limewhale@daum.net">limewhale@daum.net</a>
        </address>
      </footer>
      <BtnScrollTop
        type="button"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/common/btn_scroll.png)`,
        }}
        className={scrollY > 0 ? 'is-active' : ''}
        onClick={handleTop}
      >
        <i hidden>Scroll Top</i>
      </BtnScrollTop>
    </FooterWrap>
  );
};

export default Footer;
