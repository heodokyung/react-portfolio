import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';

const WebPortfolioV2 = () => {
  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong>: 2022.04.25 ~ 2022.05.06
        </li>
        <li>
          <strong>이전과 달라진 점</strong>:
          <ul className={pageStyle.subList}>
            <li>
              <a
                href="https://ko.reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              로 포트폴리오 사이트 전체 구현
            </li>
            <li>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript
              </a>
              를 추가하여 적용
            </li>
            <li>
              상태 관리값을 하기 위해
              <a
                href="https://recoiljs.org/ko/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recoil
              </a>
              을 이용
            </li>
            <li>사용자 UI 가독성 편의를 위해 다크모드(라이트모드) 테마 적용</li>
            <li>
              <a
                href="https://react-query.tanstack.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Query
              </a>
              를 사용하여 Api 호출 코드 최적화 적용
            </li>
            <li>
              페이지 관리를 위해 메인과 상세 화면을
              <a
                href="https://reactrouter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Router
              </a>
              를 이용하여 메인, 상세화면 분기 처리
            </li>
            <li>공통 모듈 Page는 모두 컴포넌트 처리화</li>
            <li>Web, Mobile 디바이스에 맞게 반응형으로 제작</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong>:
          <a
            href="https://ko.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SCSS
          </a>
          ,
          <a
            href="https://styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            styled-components
          </a>
          ,
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>
          ,
          <a
            href="http://vanilla-js.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanilla JS
          </a>
          ,
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git/SVN
          </a>
          ,
          <a
            href="https://recoiljs.org/ko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recoil
          </a>
          ,
          <a
            href="https://react-query.tanstack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Query
          </a>
          등
        </li>
        <li>
          <strong>HISTORY</strong>:
          <ul className={pageStyle.subList}>
            <li>
              이전 VER:
              <a
                href="https://heodokyung.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              현재 VER:
              <a
                href="https://heodokyung.github.io/react-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                REACT PORTFOLIO
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <ListBtn />
    </>
  );
};

export default WebPortfolioV2;
