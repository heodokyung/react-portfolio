import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PcContent = styled.article`
  display: block;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const SnbMenu = styled.nav`
  border-top: 1px solid ${(props) => props.theme.subListColor};
  width: 240px;
  z-index: 10;
  li {
    border-bottom: 1px solid ${(props) => props.theme.subListColor};
    background-color: ${(props) => props.theme.bgColor};
  }
  a {
    display: block;
    position: relative;
    padding-left: 15px;
    font-size: 24px;
    line-height: 50px;
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
    overflow: hidden;
  }

  li.is-active {
    background: ${(props) => props.theme.textColor};
    a {
      color: ${(props) => props.theme.bgColor};
      :after {
        display: block;
        content: '>';
        position: absolute;
        right: 10px;
        top: 0;
        font-family: 'Lucida Handwriting', sans-serif;
      }
    }
  }
`;
const AsideMenu = () => {
  return (
    <PcContent>
      <SnbMenu>
        <li className="is-active">
          <Link to={process.env.PUBLIC_URL + '/'}>Portfolio</Link>
        </li>
        <li>
          <a
            href="https://whales.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="https://github.com/heodokyung/markup-guide/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Markup Guide
          </a>
        </li>
      </SnbMenu>
    </PcContent>
  );
};

export default AsideMenu;
