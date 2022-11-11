import pageStyle from '../../../style/detailView.module.scss';
import ScrollView from '../../../components/views/ScrollView';
import ListBtn from '../../../components/views/ListBtn';

const MobileKloudbeer = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/mobile/img_m_kloud1.jpg')}`,
      alt: '클라우드 모바일 웹 스크린화면1',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_kloud2.jpg')}`,
      alt: '클라우드 모바일 웹 스크린화면2',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_kloud3.jpg')}`,
      alt: '클라우드 모바일 웹 스크린화면3',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_kloud4.jpg')}`,
      alt: '클라우드 모바일 웹 스크린화면4',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_kloud5.jpg')}`,
      alt: '클라우드 모바일 웹 스크린화면5',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong>: 2014.05.12 ~ 2014.05.30
        </li>
        <li>
          <strong>역할</strong>:
          <ul className={pageStyle.subList}>
            <li>클라우드 맥주 메인 &amp; 서브메인 GUI 퍼블리싱 </li>
            <li>서브 컨텐츠 페이지 퍼블리싱 및 GUI 구현</li>
            <li>공통 마크업 가이드 제작 및 배포</li>
            <li>공통 UI 모션 개발</li>
          </ul>
        </li>
        <li>
          <strong>성과:</strong>
          <ul className={pageStyle.subList}>
            <li>
              <a
                href="http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=4406"
                target="_blank"
                rel="noopener noreferrer"
              >
                웹 어워드 코리아 (WEB AWARD KOREA) 브랜드 이노베이션대상
              </a>
            </li>
            <li>Semantic Markup 퍼블리싱</li>
            <li>고해상력(High PPI) 디스플레이 대응</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong>: HTML5, CSS3, Jquery ,Adobe Photoshop
        </li>
        <li>
          <strong>고객사</strong>: 롯데주류
        </li>
      </ul>

      <ScrollView imgData={imgData} />
      <ListBtn />
    </>
  );
};

export default MobileKloudbeer;
