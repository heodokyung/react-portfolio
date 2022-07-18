import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebHan = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/img_w_han1.jpg')}`,
			alt: '한국수력원자력 스크린샷1',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_w_han2.jpg')}`,
			alt: '한국수력원자력 스크린샷2',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_w_han3.jpg')}`,
			alt: '한국수력원자력 스크린샷3',
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
						<li>
							한국수력원자력(열린경영, 신재생, 소식참여) 퍼블리싱 및 GUI 구현
						</li>
						<li>서브 컨텐츠 페이지 퍼블리싱 및 GUI 구현</li>
						<li>공통 마크업 가이드 배포</li>
						<li>
							공통 UI 모션 개발 (슬라이드, GNB, SNB, 레이어팝업, 접근성 준수
							툴팁 등)
						</li>
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
						<li>익스플로러(ie8~) 및 모던 브라우저 크로스브라우징</li>
						<li>Semantic Markup 퍼블리싱</li>
					</ul>
				</li>
				<li>
					<strong>작업환경</strong>:
					<a
						href='https://www.w3schools.com/html/default.asp'
						target='_blank'
						rel='noopener noreferrer'
					>
						HTML5
					</a>
					,
					<a
						href='https://www.w3schools.com/css/default.asp'
						target='_blank'
						rel='noopener noreferrer'
					>
						CSS3
					</a>
					,
					<a
						href='https://Jquery.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Jquery
					</a>
					,
					<a
						href='https://www.photoshop.com/products'
						target='_blank'
						rel='noopener noreferrer'
					>
						Adobe Photoshop
					</a>
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

			<ReactSwiper imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebHan;
