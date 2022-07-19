import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebBenecol = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/img_w_benecol1.jpg')}`,
			alt: '파스퇴르 베네콜 스크린샷1',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_w_benecol2.jpg')}`,
			alt: '파스퇴르 베네콜 스크린샷2',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_w_benecol3.jpg')}`,
			alt: '파스퇴르 베네콜 스크린샷3',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_w_benecol4.jpg')}`,
			alt: '파스퇴르 베네콜 스크린샷4',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2015.02.16 ~ 2015.04.22
				</li>
				<li>
					<strong>역할</strong>:
					<ul className={pageStyle.subList}>
						<li>파스퇴르 베네콜 메인 퍼블리싱 및 GUI 구현</li>
						<li>파스퇴르 베네콜 서브메인 퍼블리싱 및 GUI 구현</li>
						<li>서브 컨텐츠 페이지 퍼블리싱 및 GUI 구현</li>
						<li>파스퇴르 베네콜 공통 마크업 가이드 배포</li>
						<li>
							공통 UI 모션 개발(슬라이드, GNB, YouTube영상 제어, 모달팝업 등)
						</li>
					</ul>
				</li>
				<li>
					<strong>성과</strong>:
					<ul className={pageStyle.subList}>
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
						XHTML 1.0 Transitional
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
					<strong>고객사</strong>: 롯데푸드
				</li>
			</ul>

			<ReactSwiper imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebBenecol;
