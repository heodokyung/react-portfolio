import pageStyle from '../../../style/detailView.module.scss';
import AppDownBtn from '../../../components/views/AppDownBtn';
import ScrollView from '../../../components/views/ScrollView';
import ListBtn from '../../../components/views/ListBtn';

const MobileHan = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/mobile/img_m_hansuone1.jpg')}`,
      alt: '한국수력원자력 모바일 웹 페이지 스크린샷 Summary1',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_hansuone2.jpg')}`,
      alt: '한국수력원자력 모바일 웹 페이지 스크린샷 Summary2',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_hansuone3.jpg')}`,
      alt: '한국수력원자력 모바일 웹 페이지 스크린샷 Summary3',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_hansuone4.jpg')}`,
      alt: '한국수력원자력 모바일 웹 페이지 스크린샷 Summary4',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong>: 2015.08.31 ~ 2015.12.10
        </li>
        <li>
          <strong>역할</strong>:
          <ul className={pageStyle.subList}>
            <li>한국수력원자력 메인 &amp; 서브메인 퍼블리싱 및 GUI 구현 </li>
            <li>서브 컨텐츠 페이지 퍼블리싱 및 GUI 구현</li>
            <li>한국수력원자력 공통 마크업 가이드 배포</li>
            <li>공통 UI 모션 구현</li>
          </ul>
        </li>
        <li>
          <strong>성과</strong>:
          <ul className={pageStyle.subList}>
            <li>Semantic Markup 퍼블리싱</li>
            <li>고해상력(High PPI) 디스플레이 대응</li>
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
            href="https://www.photoshop.com/products"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adobe Photoshop
          </a>
        </li>
        <li>
          <strong>고객사</strong>: 한국수력원자력
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

export default MobileHan;
