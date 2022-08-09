import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';
import ImgListView from '../../../components/views/ImgListView';

const WebNamdongKor = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/namdong_kr1.jpg')}`,
			alt: '남동발전 국문 사이트 개편: 메인',
		},
		{
			src: `${require('../../../images/detailView/web/ui/namdong_kr2.jpg')}`,
			alt: '남동발전 국문 사이트 개편: 페이지 상세',
		},
		{
			src: `${require('../../../images/detailView/web/ui/namdong_kr3.jpg')}`,
			alt: '남동발전 국문 사이트 개편: 정보공개 상세',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2014.03.03 ~ 2014.05.02
				</li>
				<li>
					<strong>역할</strong>: 웹 접근성 검수, Smart BOD, 지속가능경영,
					정보공개 메뉴 담당
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
								웹 접근성 인증 마크 획득
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
						href='https://www.w3schools.com/js/default.asp'
						target='_blank'
						rel='noopener noreferrer'
					>
						Javascript
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
			</ul>

			<ImgListView imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebNamdongKor;
