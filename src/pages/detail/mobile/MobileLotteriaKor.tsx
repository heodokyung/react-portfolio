import pageStyle from '../../../style/detailView.module.scss';
import ScrollView from '../../../components/views/ScrollView';
import ListBtn from '../../../components/views/ListBtn';

const MobileLotteriaKor = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/mobile/img_m_lotteria1.jpg')}`,
      alt: '롯데리아 모바일 웹 페이지 스크린샷1',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_lotteria2.jpg')}`,
      alt: '롯데리아 모바일 웹 페이지 스크린샷2',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_lotteria3.jpg')}`,
      alt: '롯데리아 모바일 웹 페이지 스크린샷3',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_lotteria4.jpg')}`,
      alt: '롯데리아 모바일 웹 페이지 스크린샷4',
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
          <strong>역할</strong>:
          <ul className={pageStyle.subList}>
            <li>서브 컨텐츠 페이지 GUI 퍼블리싱 구현</li>
            <li>공통 마크업 가이드 배포</li>
            <li>
              공통 UI 모션 개발(스와이프 슬라이드, 스크롤페이징, 암막
              레이어팝업, 전체메뉴등)
            </li>
          </ul>
        </li>
        <li>
          <strong>성과</strong> :
          <ul className={pageStyle.subList}>
            <li>Semantic Markup 퍼블리싱</li>
            <li>고해상력(High PPI) 디스플레이 대응</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong>: HTML5, CSS3, Jquery ,Adobe Photoshop
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

export default MobileLotteriaKor;
