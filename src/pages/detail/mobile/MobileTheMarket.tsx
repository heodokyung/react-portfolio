import pageStyle from '../../../style/detailView.module.scss';
import AppDownBtn from '../../../components/views/AppDownBtn';
import ScrollView from '../../../components/views/ScrollView';
import ListBtn from '../../../components/views/ListBtn';

const MobileTheMarket = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/mobile/cj_m_themarket_1.webp')}`,
      alt: 'CJ THE MARKET App Summary1',
    },
    {
      src: `${require('../../../images/detailView/mobile/cj_m_themarket_2.webp')}`,
      alt: 'CJ THE MARKET App Summary2',
    },
    {
      src: `${require('../../../images/detailView/mobile/cj_m_themarket_3.webp')}`,
      alt: 'CJ THE MARKET App Summary3',
    },
    {
      src: `${require('../../../images/detailView/mobile/cj_m_themarket_4.webp')}`,
      alt: 'CJ THE MARKET App Summary4',
    },
    {
      src: `${require('../../../images/detailView/mobile/cj_m_themarket_5.webp')}`,
      alt: 'CJ THE MARKET App Summary5',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong> : 2022.11.01 ~ 현재
        </li>
        <li>
          <strong>역활/성과</strong>:
          <ul className={pageStyle.subList}>
            <li>CJ더마켓 모바일 웹/앱 서비스 운영 및 UI 서비스 개선</li>
            <li>CJ더마켓 '추천테마관' 신규 개설 작업</li>
            <li>GitLab을 통한 업무 작업물 히스토리 관리 및 협업작업 진행</li>
            <li>CJ더마켓 제휴 이벤트 페이지 GUI구현</li>
            <li>웹표준 및 시멘틱 마크업 퍼블리싱</li>
            <li>고해상력(High PPI) 디스플레이 대응</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong>: HTML5, CSS3, Jquery, Vanilla JS, Zeplin, Git, GitLab, Jira, Wiki Confluence, Slack
        </li>
      </ul>

      <AppDownBtn
        googleLink={
          'https://play.google.com/store/apps/details?id=com.susoft.CJONmart&hl=ko&gl=US'
        }
        appleLink={'https://apps.apple.com/kr/app/cj더마켓/id386265322'}
      />

      <ScrollView imgData={imgData} />
      <ListBtn />
    </>
  );
};

export default MobileTheMarket;
