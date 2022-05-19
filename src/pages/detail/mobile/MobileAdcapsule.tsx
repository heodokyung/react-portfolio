import pageStyle from '../../../style/detailView.module.scss';
import ScrollView from '../../../components/views/ScrollView';
import ListBtn from '../../../components/views/ListBtn';

const MobileAdcapsule = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/mobile/img_m_adcapsule1.jpg')}`,
      alt: '애드캡슐소프트 모바일 웹 스크린 이미지1',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_adcapsule2.jpg')}`,
      alt: '애드캡슐소프트 모바일 웹 스크린 이미지2',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_adcapsule3.jpg')}`,
      alt: '애드캡슐소프트 모바일 웹 스크린 이미지3',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_adcapsule4.jpg')}`,
      alt: '애드캡슐소프트 모바일 웹 스크린 이미지4',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_adcapsule5.jpg')}`,
      alt: '애드캡슐소프트 모바일 웹 스크린 이미지5',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong>: 2015.01.05 ~ 2015.02.06
        </li>
        <li>
          <strong>역할</strong>:
          <ul>
            <li>애드캡슐 모바일 웹 메인 &amp; 서브메인 퍼블리싱</li>
            <li>서브 컨텐츠 페이지 퍼블리싱</li>
            <li>공통 마크업 가이드 제작</li>
            <li>
              공통 UI/UX (스와이프 슬라이드, 스크롤페이징, 암막 레이어팝업등)
            </li>
          </ul>
        </li>
        <li>
          <strong>성과</strong>:
          <ul>
            <li>Semantic Markup 구현</li>
            <li>좌/우 분리형 UI 구현</li>
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
          <strong>고객사</strong>: 애드캡슐소프트
        </li>
      </ul>

      <ScrollView imgData={imgData} />
      <ListBtn />
    </>
  );
};

export default MobileAdcapsule;
