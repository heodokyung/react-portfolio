import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from '../../../components/views/ImgListView';

const WebFinnqV2 = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/img_finnq_w_1.jpg')}`,
			alt: 'Finnq Web: WEB 메인 화면',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_finnq_w_2.jpg')}`,
			alt: 'Finnq Web: MOBILE 메인 화면(반응형 웹)',
			option: true,
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2018.08.01 ~ 2021.03.31
				</li>
				<li>
					<strong>역할</strong>:
					<ul className={pageStyle.subList}>
						<li>Finnq HomePage 컨텐츠 서비스 운영</li>
						<li>신규 서비스 퍼블리싱 및 UI개선 작업 GUI구현</li>
						<li>Ajax 데이터 연동 이벤트 구현</li>
						<li>외부업체(KDB산업은행, 하나카드, DGB대구은행, 삼성생명등)와 콜라보 이벤트 페이지 구현</li>
						<li>대출 중계 웹 사이트 구현(DB 연동)</li>					
						<li>웹표준, 시멘틱 마크업 퍼블리싱</li>
						<li>핀크웹을 개편하면서 UI/UX 향상</li>
						<li>반응형 웹으로 구현하여 다양한 디바이스에서도 최적화 환경 제공</li>
						<li>다양한 프로모션 이벤트 페이지 구현으로 앱 유입자 증가</li>
					</ul>
				</li>
				<li>
					<strong>작업환경</strong>: HTML5, CSS3, Jquery, Vanilla JS, Zeplin,
					Git, GitLab, SVN, Slack, Jira
				</li>
				<li>
					<a
						href='https://www.finnq.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>웹 사이트 바로가기</strong>: https://www.finnq.com
					</a>
				</li>
			</ul>
			<ImgListView imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebFinnqV2;
