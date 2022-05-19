import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';
const WebDovol = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/web/img_dovol1.jpg')}`,
      alt: '청소년 자원봉사 메인 페이지 스크린샷1',
    },
    {
      src: `${require('../../../images/detailView/web/img_dovol2.jpg')}`,
      alt: '청소년 자원봉사 메인 페이지 스크린샷2',
    },
    {
      src: `${require('../../../images/detailView/web/img_dovol3.jpg')}`,
      alt: '청소년 자원봉사 메인 페이지 스크린샷3',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong>: 2013.03.01 ~ 2013.03.28
        </li>
        <li>
          <strong>역할</strong>: 봉사활동 조회 및 입력/수정 정보 시스템 구축
        </li>
        <li>
          <strong>작업환경</strong>: JAVA, JSP, SQL, Jquery, javascript
        </li>
        <li>
          <strong>DBMS</strong>: ORACLE
        </li>
        <li>
          <strong>Tool</strong>: 전자정부 프레임
        </li>
        <li>
          <strong>고객사</strong>: 청소년 활동 진흥원
        </li>
        <li>
          <a
            href="https://www.youth.go.kr/youth/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>사이트 바로가기</strong>: 청소년활동정보서비스 e청소년
          </a>
        </li>
      </ul>

      <ReactSwiper imgData={imgData} />

      <ListBtn />
    </>
  );
};

export default WebDovol;
