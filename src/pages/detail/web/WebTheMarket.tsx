import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from './../../../components/views/ImgListView';

const WebTheMarket = () => {
    const imgData = [
        {
            src: `${require('../../../images/detailView/web/ui/cj_w_themarket_1.jpg')}`,
            alt: 'CJ 더마켓 메인',
        },
        {
            src: `${require('../../../images/detailView/web/ui/cj_w_themarket_2.jpg')}`,
            alt: 'CJ 더마켓 전문관',
        },
        {
            src: `${require('../../../images/detailView/web/ui/cj_w_themarket_3.jpg')}`,
            alt: 'CJ 더마켓 검색',
        },
        {
            src: `${require('../../../images/detailView/web/ui/cj_w_themarket_4.jpg')}`,
            alt: 'CJ 더마켓 리뷰',
        },
    ];

    return (
        <>
            {/* 상세설명 */}
            <ul className={pageStyle.description}>
                <li>
                    <strong>기간</strong>: 2022.11.01 ~ 현재
                </li>
                <li>
                    <strong>역할/성과</strong>:
                    <ul className={pageStyle.subList}>
                        <li>CJ더마켓 웹 서비스 운영 및 UI 서비스 개선</li>
                        <li>CJ더마켓 '추천테마관' 신규 개설 작업</li>
                        <li>GitLab을 통한 업무 작업물 히스토리 관리 및 협업작업 진행</li>
                        <li>CJ더마켓 제휴 이벤트 페이지 GUI구현</li>
                        <li>웹표준 및 시멘틱 마크업 퍼블리싱</li>
                    </ul>
                </li>
                <li>
                    <strong>작업환경</strong>: HTML5, CSS3, Jquery, Vanilla JS, Zeplin, Git, GitLab, Jira, Wiki Confluence, Slack
                </li>
                <li>
                    <a
                        href='https://www.cjthemarket.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <strong>웹 사이트 바로가기</strong>: https://www.cjthemarket.com/
                    </a>
                </li>
            </ul>
            <ImgListView imgData={imgData} />
            <ListBtn />
        </>
    );
};

export default WebTheMarket;
