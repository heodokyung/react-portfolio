import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from './../../../components/views/ImgListView';

const WebKebhana = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/img_kebhana_1.jpg')}`,
			alt: 'KEB 하나은행 웹 개인뱅킹(DAY2): 메인',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_kebhana_2.jpg')}`,
			alt: 'KEB 하나은행 웹 개인뱅킹(DAY2): 상품 메인',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_kebhana_3.jpg')}`,
			alt: 'KEB 하나은행 웹 개인뱅킹(DAY2): 골드클럽 메인',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_kebhana_4.jpg')}`,
			alt: 'KEB 하나은행 웹 개인뱅킹(DAY2): 해외 공관 사이트',
		},
	];
	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2016.04.11 ~ 2016.06.03
				</li>
				<li>
					<strong>역할</strong>:
					<ul>
						<li>KEB 하나은행 상품 퍼블리싱 및 GUI 구현 </li>
						<li>KEB 하나은행 멤버스 퍼블리싱 및 GUI 구현 </li>
						<li>KEB 하나은행 골드클럽 퍼블리싱 및 GUI 구현 </li>
						<li>KEB 하나은행 글로벌 네트워크 퍼블리싱 및 GUI 구현 </li>
						<li>공통 UI 'Navigation Util' 모션 구현</li>
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
						<li>익스플로러(ie7~) 및 모던 브라우저 크로스브라우징</li>
						<li>Semantic Markup 퍼블리싱</li>
					</ul>
				</li>
				<li>
					<strong>작업환경</strong>: XHTML 1.0 Transitional, CSS3, Jquery, Adobe Photoshop,
					<a
						href='http://www.i-on.net/product/ics/index.html'
						target='_blank'
						rel='noopener noreferrer'
					>
						ICS6(I-ON Content Server)
					</a>
				</li>
				<li>
					<strong>고객사</strong>: KEB 하나은행
				</li>
				<li>
					<a
						href='https://www.kebhana.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>사이트 바로가기</strong>: https://www.kebhana.com/
					</a>
				</li>
			</ul>

			{/* <ReactSwiper imgData={imgData} /> */}
			<ImgListView imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebKebhana;
