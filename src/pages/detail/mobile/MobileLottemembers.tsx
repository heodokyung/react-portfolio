import pageStyle from '../../../style/detailView.module.scss';
import ScrollView from '../../../components/views/ScrollView';
import ListBtn from '../../../components/views/ListBtn';

const MobileLottemembers = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/mobile/img_m_lottemembers1.png')}`,
      alt: '롯데맴버스 화면 스크린 샷1',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_lottemembers2.png')}`,
      alt: '롯데맴버스 화면 스크린 샷2',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_lottemembers3.png')}`,
      alt: '롯데맴버스 화면 스크린 샷3',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_lottemembers4.png')}`,
      alt: '롯데맴버스 화면 스크린 샷4',
    },
    {
      src: `${require('../../../images/detailView/mobile/img_m_lottemembers5.png')}`,
      alt: '롯데맴버스 화면 스크린 샷5',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong> : 2013.04.24 ~ 2013.07.31
        </li>
        <li>
          <strong>역할</strong> :
          <ul className={pageStyle.subList}>
            <li>
              롯데계열사 통합 멤버스 포인트 전문 조회 및 롯데 통합 포인트
              비밀번호 설정 구축
            </li>
            <li>서브 페이지 서비스 가이드 개발</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong> : JAVA, JSP, Jquery, javascript
        </li>
        <li>
          <strong>DBMS / SERVER</strong> : ORACLE / JEUS
        </li>
        <li>
          <strong>Tool</strong> : ECLIPSE / XPERTFRAME
        </li>
        <li>
          <strong>고객사</strong> : 롯데카드
        </li>
      </ul>

      <ScrollView imgData={imgData} />
      <ListBtn />
    </>
  );
};

export default MobileLottemembers;
