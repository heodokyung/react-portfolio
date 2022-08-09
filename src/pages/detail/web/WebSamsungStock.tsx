import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';
import ImgListView from '../../../components/views/ImgListView';

const WebSamsungStock = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/img_w_stock1.jpg')}`,
			alt: '삼성증권, 삼성뱅킹 웹 페이지 개편: 메인',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_w_stock2.jpg')}`,
			alt: '삼성증권, 삼성뱅킹 웹 페이지 개편: 추천상품',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_w_stock3.jpg')}`,
			alt: '삼성증권, 삼성뱅킹 웹 페이지 개편: 스마트 검색',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2014.08.11 ~ 2014.12.16
				</li>
				<li>
					<strong>역할</strong>:
					<ul>
						<li>삼성증권: 인터넷뱅킹, 금융상품, 기업뱅킹, OPEN-API</li>
						<li>삼성뱅킹 전체 (임직원 전용)</li>
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
								삼성증권 웹 접근성 마크 획득
							</a>
						</li>
						<li>
							<a
								href='http://wa.or.kr/waMark/status_new.asp'
								target='_blank'
								rel='noopener noreferrer'
							>
								은퇴퇴자산관리 웹 접근성 마크 획득
							</a>
						</li>
						<li>
							<a
								href='http://wa.or.kr/waMark/status_new.asp'
								target='_blank'
								rel='noopener noreferrer'
							>
								회사소개(국문) 웹 접근성 마크 획득
							</a>
						</li>
						<li>
							<a
								href='http://wa.or.kr/waMark/status_new.asp'
								target='_blank'
								rel='noopener noreferrer'
							>
								회사소개(영문) 웹 접근성 마크 획득
							</a>
						</li>
						<li>PC, 테블릿 반응형 웹 사이트로 테블릿 및 PC에 최적화 구현</li>
						<li>W3C Markup Validator, 웹 접근성 자동 평가도구(K-wah) 통과</li>
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
					<strong>고객사</strong>: 삼성증권
				</li>
				<li>
					<a
						href='https://www.samsungpop.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>사이트 바로가기</strong>: www.samsungpop.com/
					</a>
				</li>
			</ul>

			{/* <ReactSwiper imgData={imgData} /> */}
			<ImgListView imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebSamsungStock;
