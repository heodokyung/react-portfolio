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
            <li>Finnq App 서비스 운영 및 UI 서비스 개선</li>
            <li>마이데이터 서비스를 기반으로 한 금융 SNS 플랫폼 '리얼리' 구축</li>
            <li>대출비교 플랫폼 구축</li>
            <li>핀크 대출상품(하나금융 생활비 대출, DGB비상금 대출, 저축은행 똑똑대출) 구축</li>
            <li>신용점수 올리기 구축</li>
            <li>예적금몰 플랫폼 구축</li>
            <li>KDB산업은행 'SKT X T High5 적금' 상품 가입 프로세스 구축</li>
            <li>카드몰 비교 플랫폼 구축</li>
            <li>기프티콘 구매 플랫폼 구축</li>
            <li>신규 서비스 퍼블리싱 및 UI 개발 작업 진행</li>
            <li>이벤트 페이지 GUI구현</li>
            <li>Ajax 데이터 연동 이벤트 구현</li>
            <li>핀크 마크업 컨벤션 가이드 제작</li>
            <li>마이데이터 서비스 사업 확정 후 서비스 전면 개편</li>
            <li>오픈뱅킹API 적용으로 은행 연결 프로세스 구축</li>
            <li>
              기존에 사용하던 유료차트(RMATE 차트)를 OPEN API인
              <a
                href="https://www.chartjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chartjs Api를 적용하여 전면적으로 개편
              </a>
            </li>
            <li>공통요소 밀 팝업요소를 컴포넌트 단위로 제작하여 관리이슈 최소화</li>
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
              , GitLab을 통한 형상 배포
            </li>
          </ul>
        </li>
        <li>
          <strong>핀크 서비스 Ver 2.0</strong>
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
          <strong>핀크 서비스 Ver 3.0 개편</strong>
          <ul className={pageStyle.subList}>
            <li>
              대출비교 플랫폼 : T통신스코어를 활용하여 자신에게 최적화 된 금리비교,
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
              를 기반으로 한 금융 맞춤 서비스 개시(보험, 자산, 소비내역 분석 등)
            </li>
            <li>
              예적금, 카드, 대출, 보험, 기프티콘 몰등 일상 생활속에서 자신에게 꼭
              필요한 금융서비스를 제공하는 서비스 제공(플랫폼 및 상품 가입 프로세스 구축)
            </li>
            <li>
              리얼리 : 마이데이터 서비스를 기반으로 한 금융 SNS 커뮤니케이션으로 익명(별명)으로 매달
              주어지는 챌리저를 도전하고 타인의 금융을 알아보는 서비스 신규 구축
            </li>
            <li>금융 서비스(카드몰, 예적금 몰 등) 전면 개편 작업 진행</li>
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
            <li>공통요소들을 컴포넌트 단위로 제작하여 리소스 이슈를 최소화</li>
            <li>하나의 CSS로 관리되된 소스를 SCSS를 적용하여 프로젝트 단위로 관리될 수 있도록 적용</li>
            <li>CSS관리 방법론 중 하나인 BEM 방법론을 도입하여 CSS관리 요소를 최적화 진행</li>
            <li>오픈뱅킹 API 연동으로 은행/증권사 연결 다양화</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong>: HTML5, CSS3, Jquery, Vanilla JS, Vue, Scss, Zeplin, Git, GitLab, SVN, Jira, Wiki Confluence, Slack
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
