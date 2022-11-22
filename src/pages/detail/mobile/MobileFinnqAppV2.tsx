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
          <strong>App Ver 3.0(리뉴얼 서비스 및 담당 업무)</strong>:
          <ul className={pageStyle.subList}>
            <li>Finnq App 서비스 운영 및 UI 서비스 개선</li>
            <li>마이데이터 서비스를 기반으로 한 금융 SNS 플랫폼 '리얼리' 구축</li>
            <li>핀크 전용 대출상품(하나금융 생활비 대출, DGB비상금 대출, 저축은행 똑똑대출) 프로세스 구축</li>
            <li>타 은행 및 금융 대출 비교 플랫폼 구축 작업</li>
            <li>신용점수 올리기 서비스 및 예적금몰 플랫폼 구축</li>
            <li>KDB산업은행, SKT와 협업하여 `SKT X T High5 적금` 상품 가입 프로세스 구축</li>
            <li>신용, 체크카드 비교 플랫폼 핀크 카드몰 구축</li>
            <li>기프티콘(모바일 상품권) 구매 플랫폼 전체 개편 작업 진행</li>
            <li>오픈뱅킹API 적용으로 은행 연결 프로세스 구축</li>
            <li>젠킨스를 통한 소스코드 형상 배포</li>
            <li>GitLab을 통한 업무 작업물 히스토리 관리 및 협업작업 진행</li>
            <li>제휴 이벤트 페이지 GUI구현<br />
              <div className={pageStyle.subListDetail}>
                ※ 이벤트 페이지 중 일부 정리
                <ul className={pageStyle.subList}>
                  <li>
                    <a
                      href="https://pop.finnq.com/event/wavve/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - 웨이브카드 출시 이벤트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pop.finnq.com/event/bookpass/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - 책송금 이벤트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pop.finnq.com/event/pla/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - T이득통장 이벤트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pop.finnq.com/event/insurance_dust/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - 삼성생명 미세먼지 보험 이벤트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pop.finnq.com/event/finnq_card/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - 핀크체크카드 런칭 이벤트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pop.finnq.com/event/thunder_loan/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - 번개대출 이벤트
                    </a>
                  </li>
                  </ul>
                </div>
            </li>
          </ul>
        </li>
        <li>
          <strong>성과</strong> :
          <ul className={pageStyle.subList}>
            <li>웹표준 및 시멘틱 마크업 퍼블리싱</li>
            <li>핀크 마크업 컨벤션 제작 및 효율적으로 CSS를 관리할 수 있도록 `BEM 방법론`을 도입 적용</li>
            <li>유로 차트 플러그인 `Rmate`차트를 OPEN API인 `Chart.js`를 적용하여 전면적으로 개편</li>
            <li>하나의 CSS파일로 관리되던 리소스를 프로젝트 단위로 SCSS를 적용하여 관리 이슈를 최소화 적용</li>
            <li>고해상력(High PPI) 디스플레이 대응</li>
            <li>팝업 및 공통요소 Components 제작하여 리소스 이슈를 최소화</li>
          </ul>
        </li>
        <li>
          <strong>핀크 App 서비스 개편 히스토리</strong>
          <div className={pageStyle.subListDetail}>
            <p className={pageStyle.detailTitle}>※ 핀크 App Ver 2.0 [구버전 서비스 및 담당 업무]</p>
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
            </ul>
          </div>
          <div className={pageStyle.subListDetail}>
            <p className={pageStyle.detailTitle}>※ 핀크 App Ver 3.0 개편 [리뉴얼(현재 운영) 서비스 및 담당 업무]</p>
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
          </div>
        </li>
        <li>
          <strong></strong>

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
