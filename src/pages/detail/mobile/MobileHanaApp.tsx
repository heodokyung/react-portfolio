import pageStyle from '../../../style/detailView.module.scss';
import AppDownBtn from '../../../components/views/AppDownBtn';
import ScrollView from '../../../components/views/ScrollView';
import ListBtn from '../../../components/views/ListBtn';

const MobileHanaApp = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/mobile/img_m_hana_app1.jpg')}`,
      alt: 'KEB 하나은행 App 페이지 스크린샷1',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_hana_app2.jpg')}`,
      alt: 'KEB 하나은행 App 페이지 스크린샷2',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_hana_app3.jpg')}`,
      alt: 'KEB 하나은행 App 페이지 스크린샷3',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_hana_app4.jpg')}`,
      alt: 'KEB 하나은행 App 페이지 스크린샷4',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_hana_app5.jpg')}`,
      alt: 'KEB 하나은행 App 페이지 스크린샷5',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong>: 2018.01.08 ~ 2018.06.29<span></span>
        </li>
        <li>
          <strong>역할</strong>:
          <ul>
            <li>퍼블리셔PL</li>
            <li>메인: Native</li>
            <li>서브메인 퍼블리싱 및 GUI 구현</li>
            <li>서브 컨텐츠 페이지 퍼블리싱 및 GUI 구현</li>
            <li>KEB 하나은행 기업뱅킹 공통 마크업 가이드 배포</li>
            <li>공통 UI 모션 개발</li>
          </ul>
        </li>
        <li>
          <strong>성과</strong>:
          <ul>
            <li>Semantic Markup 퍼블리싱</li>
            <li>고해상력(High PPI) 디스플레이 대응</li>
            <li>Android/IOS 앱 오픈</li>
            <li>하나은행 기업뱅킹 전면개편으로 UI/UX 향상</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong>: HTML5, CSS3, Jquery ,Adobe Photoshop, <a
            href="https://www.redmine.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RedMine
          </a>
          ,
          <a
            href="http://www.i-on.net/product/ics/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICS6(I-ON Content Server)
          </a>
        </li>
        <li>
          <strong>고객사</strong>: KEB 하나은행
        </li>
      </ul>

      <AppDownBtn
        googleLink={
          'https://play.google.com/store/apps/details?id=com.hanabank.ebk.channel.android.cpb&hl=ko'
        }
        appleLink={'https://apps.apple.com/md/app/id395878804'}
      />

      <ScrollView imgData={imgData} />
      <ListBtn />
    </>
  );
};

export default MobileHanaApp;
