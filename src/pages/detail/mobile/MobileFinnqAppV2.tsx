import pageStyle from '../../../style/detailView.module.scss';
import AppDownBtn from '../../../components/views/AppDownBtn';
import ScrollView from '../../../components/views/ScrollView';
import ListBtn from '../../../components/views/ListBtn';

const MobileFinnqAppV2 = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/mobile/img_m_finnq_app1.webp')}`,
      alt: 'Finnq App Summary1',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_finnq_app2.webp')}`,
      alt: 'Finnq App Summary2',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_finnq_app3.webp')}`,
      alt: 'Finnq App Summary3',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_finnq_app4.webp')}`,
      alt: 'Finnq App Summary4',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_finnq_app5.webp')}`,
      alt: 'Finnq App Summary5',
    },
  ];

  return (
    <>
      <div className={pageStyle.movieWrapper}>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/NWOL_URztqc?rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className={pageStyle.moviePlayer}
        />
      </div>

      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong> : 2018.08.01 ~ 2022.09.16
        </li>
        <li>
          <strong>역할</strong> :
          <ul className={pageStyle.subList}>
            <li>Finnq App 서비스 운영</li>
            <li>신규 추가 서비스 퍼블리싱 및 이벤트 페이지 GUI구현</li>
            <li>Ajax 데이터 연동 이벤트 구현</li>
            <li>
              차트 구현
              <a
                href="https://www.chartjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chartjs Api 사용
              </a>
            </li>
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
            <li>
              <a
                href="https://www.jenkins.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jenkins
              </a>
              및
              <a
                href="http://www.softrepublic.co.kr/m05/m05_013.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                ChangeFlow
              </a>
              , Git을 통한 형상 배포
            </li>
          </ul>
        </li>
        <li>
          <strong>운영 서비스 2.0</strong>
          <ul className={pageStyle.subList}>
            <li>
              핀크계좌 : 무료송금과 하나은행 ATM출금, 캐시백 혜택까지 받는
              입출금 통장 서비스
            </li>
            <li>소비평가 : 자신이 사용한 영수증으로 하는 소비평가 기능 제공</li>
            <li>
              AI핀고분석 : 나의 소비, 소득을 분석하고 알맞은 금융 생활 조언
              서비스
            </li>
            <li>
              핀크마켓 : 혜택 많은 금융상품과 최고 할인률 기프티콘몰 서비스 제공
            </li>
            <li>
              이벤트 페이지 구현:(이벤트 페이지 중 일부 정리)
              <ul className={pageStyle.subList}>
                <li>
                  <a
                    href="https://pop.finnq.com/event/wavve/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    웨이브카드 출시 이벤트
                  </a>
                </li>
                <li>
                  <a
                    href="https://pop.finnq.com/event/bookpass/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    책송금 이벤트
                  </a>
                </li>
                <li>
                  <a
                    href="https://pop.finnq.com/event/pla/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    T이득통장 이벤트
                  </a>
                </li>
                <li>
                  <a
                    href="https://pop.finnq.com/event/insurance_dust/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    삼성생명 미세먼지 보험 이벤트
                  </a>
                </li>
                <li>
                  <a
                    href="https://pop.finnq.com/event/finnq_card/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    핀크체크카드 런칭 이벤트
                  </a>
                </li>
                <li>
                  <a
                    href="https://pop.finnq.com/event/thunder_loan/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    번개대출 이벤트
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>운영 서비스 3.0</strong>
          <ul className={pageStyle.subList}>
            <li>
              대출 : T통신스코어를 활용하여 자신에게 최적화 된 금리비교,
              추천상품을 제공
            </li>
            <li>
              <a
                href="https://kdata.or.kr/kr/contents/mydata_01/view.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                마이데이터 서비스
              </a>
              를 기반으로 한 금융 맞춤 서비스 개시
            </li>
            <li>
              예적금, 카드, 대출, 보험, 기프티콘몰등 일상속에서 자신에게 꼭
              필요한 금융서비스를 제공
            </li>
            <li>
              리얼리 : SNS기반 금융 커뮤니케이션으로 익명(별명)으로 매달
              주어지는 챌리저를 도전하고 타인의 금융을 알아보는 서비스
            </li>
            <li>기타 이벤트 페이지 구현</li>
            <li>송금 서비스 전면 개편</li>
            <li>금융 서비스 전면 개편</li>
          </ul>
        </li>
        <li>
          <strong>성과</strong> :
          <ul className={pageStyle.subList}>
            <li>Semantic Markup 퍼블리싱</li>
            <li>고해상력(High PPI) 디스플레이 대응</li>
            <li>Android/IOS 앱 오픈</li>
            <li>
              핀크 앱을 1.0(가계부)에서 2.0(AI기반 핀고 분석) 서비스로 개편
            </li>
            <li>
              핀크 앱을 3.0(송금, 대출 등)서비스로 개편하면서 공통 UI 변경으로
              사용자 편의성 향상
            </li>
            <li>오픈뱅킹API 도입으로 은행/증권사 연결 다양화</li>
            <li>UI 개편으로 사용성 개선, 신규회원 유입 증가</li>
            <li>신규 서비스 추가 런칭</li>
            <li>SNS기반 금융서비스 리얼리런칭</li>
            <li>마이데이터 서비스 개편</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong> :
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
            href="http://vanilla-js.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanilla JS
          </a>
          ,
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sass
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
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git/SVN
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
            href="https://ko.atlassian.com/software/confluence"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wiki Confluence
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
      </ul>

      <AppDownBtn
        googleLink={
          'https://play.google.com/store/apps/details?id=com.finnq.f1&hl=ko&gl=US'
        }
        appleLink={'https://apps.apple.com/kr/app/finnq/id1260871482'}
      />

      <ScrollView imgData={imgData} />
      <ListBtn />
    </>
  );
};

export default MobileFinnqAppV2;
