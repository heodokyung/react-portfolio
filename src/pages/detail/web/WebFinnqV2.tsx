import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebFinnqV2 = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/web/img_finnq_w_1.jpg')}`,
      alt: 'Finnq Web Summary1',
    },
    {
      src: `${require('../../../images/detailView/web/img_finnq_w_2.jpg')}`,
      alt: 'Finnq Web Summary2',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong>: 2018.08.01 ~ 2021.03.31
        </li>
        <li>
          <strong>역할</strong>:
          <ul className={pageStyle.subList}>
            <li>Finnq HomePage 컨텐츠 서비스 운영</li>
            <li>신규 서비스 퍼블리싱 및 GUI구현</li>
            <li>Ajax 데이터 연동 이벤트 구현</li>
            <li>외부업체와 콜라보 이벤트 페이지 구현</li>
            <li>대출 중계 웹 사이트 구현</li>
            <li>
              <a
                href="https://terms.naver.com/entry.nhn?docId=2067169&amp;cid=50305&amp;categoryId=50305"
                target="_blank"
                rel="noopener noreferrer"
              >
                트러블 슈팅(trouble shooting)
              </a>
              및 단위테스트
            </li>
          </ul>
        </li>
        <li>
          <strong>성과</strong>:
          <ul className={pageStyle.subList}>
            <li>Semantic Markup 퍼블리싱</li>
            <li>1.0에서 2.0/3.0으로 개편하면서 UI/UX 향상</li>
            <li>
              반응형 웹으로 구현하여 다양한 디바이스에서도 최적화 환경 제공
            </li>
            <li>다양한 프로모션 이벤트 페이지 구현으로 앱 유입자 증가</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong>:
          <a
            href="https://www.w3schools.com/html/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML5
          </a>
          ,
          <a
            href="https://www.w3schools.com/css/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS3
          </a>
          ,
          <a
            href="https://Jquery.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jquery
          </a>
          ,
          <a
            href="https://zeplin.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zeplin
          </a>
          ,
          <a
            href="https://ko.atlassian.com/software/jira"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jira
          </a>
          ,
          <a
            href="https://slack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slack
          </a>
        </li>
        <li>
          <a
            href="https://www.finnq.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>웹 사이트 바로가기</strong>: https://www.finnq.com
          </a>
        </li>
      </ul>

      <ReactSwiper imgData={imgData} />

      <ListBtn />
    </>
  );
};

export default WebFinnqV2;
