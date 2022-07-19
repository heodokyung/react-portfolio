import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebNamdongEng = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/namdong_en1.jpg')}`,
			alt: '남동발전 영문 사이트 메인 페이지 스크린샷1',
		},
		{
			src: `${require('../../../images/detailView/web/ui/namdong_en2.jpg')}`,
			alt: '남동발전 영문 사이트 메인 페이지 스크린샷2',
		},
		{
			src: `${require('../../../images/detailView/web/ui/namdong_en3.jpg')}`,
			alt: '남동발전 영문 사이트 메인 페이지 스크린샷3',
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
					<strong>역할</strong>: 웹 접근성 검수, Investor Relations,
					Sustainability Management
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
				<li>
					<strong>고객사</strong>: 한국남동발전(주)
				</li>
			</ul>

			<ReactSwiper imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebNamdongEng;
