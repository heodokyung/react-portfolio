import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from './../../../components/views/ImgListView';

const WebHan = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/img_w_han1.jpg')}`,
			alt: '한국수력원자력 개편: 메인',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_w_han2.jpg')}`,
			alt: '한국수력원자력 개편: 경영공시 서브 메인',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_w_han3.jpg')}`,
			alt: '한국수력원자력 개편: 홍보동영상',
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
						<li>한국수력원자력 사업소 서브메인 퍼블리싱 및 GUI 구현</li>
						<li>한국수력원자력(열린경영, 신재생, 소식참여등) 퍼블리싱 및 GUI 구현</li>
						<li>서브 컨텐츠 페이지 퍼블리싱 및 GUI 구현</li>
						<li>공통 마크업 가이드 배포</li>
						<li>공통 UI 모션 개발 (슬라이드, GNB, SNB, 레이어팝업, 접근성 준수
							툴팁 등)</li>
					</ul>
				</li>
				<li>
					<strong>성과</strong>:
					<ul className={pageStyle.subList}>
						<li>
							<a
								href='http://wa.or.kr/waMark/status_new.asp'
								target='_blank'
								rel='noopener noreferrer'
							>
								웹 접근성 마크 획득
							</a>
						</li>
						<li>익스플로러(ie8~) 및 모던 브라우저 크로스브라우징 대응</li>
						<li>웹표준 및 시멘틱 마크업 퍼블리싱</li>
					</ul>
				</li>
				<li>
          <strong>작업환경</strong>: HTML5, CSS3, Jquery, Adobe Photoshop
        </li>
				<li>
					<strong>고객사</strong>: 한국수력원자력
				</li>
				<li>
					<a
						href='https://www.khnp.co.kr'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>사이트 바로가기:</strong> https://www.khnp.co.kr
					</a>
				</li>
			</ul>

			<ImgListView imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebHan;
