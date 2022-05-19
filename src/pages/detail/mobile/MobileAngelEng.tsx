import pageStyle from '../../../style/detailView.module.scss';
import ScrollView from '../../../components/views/ScrollView';
import ListBtn from '../../../components/views/ListBtn';

const MobileAngelEng = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/mobile/img_m_angelcoffee1.jpg')}`,
      alt: '엔제리너스 모바일 웹 페이지 스크린샷1',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_angelcoffee2.jpg')}`,
      alt: '엔제리너스 모바일 웹 페이지 스크린샷2',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_angelcoffee3.jpg')}`,
      alt: '엔제리너스 모바일 웹 페이지 스크린샷3',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_angelcoffee4.jpg')}`,
      alt: '엔제리너스 모바일 웹 페이지 스크린샷4',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_angelcoffee5.jpg')}`,
      alt: '엔제리너스 모바일 웹 페이지 스크린샷5',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong>: 2015.05.26 ~ 2015.08.14
        </li>
        <li>
          <strong>역할</strong> :
          <ul className={pageStyle.subList}>
            <li>엔제리너스 MOBILE 메인 &amp; 서브메인 퍼블리싱 및 GUI 구현</li>
            <li>서브 컨텐츠 페이지 퍼블리싱 및 GUI 구현</li>
            <li>공통 마크업 가이드 제작 및 배포</li>
            <li>
              공통 UI 모션 개발(스와이프 슬라이드, 스크롤페이징, 암막
              레이어팝업, 전체메뉴등)
            </li>
          </ul>
        </li>
        <li>
          <strong>성과</strong> :
          <ul className={pageStyle.subList}>
            <li>
              <a
                href="http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=5487"
                target="_blank"
                rel="noopener noreferrer"
              >
                웹 어워드 코리아 (WEB AWARD KOREA) 고객지원분야 대상
              </a>
            </li>
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
          <strong>고객사</strong>: 롯데리아 그룹
        </li>
      </ul>

      <ScrollView imgData={imgData} />
      <ListBtn />
    </>
  );
};

export default MobileAngelEng;
