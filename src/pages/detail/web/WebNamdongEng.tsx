import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from './../../../components/views/ImgListView';

const WebNamdongEng = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/namdong_en1.jpg')}`,
			alt: '남동발전 영문 사이트 개편: 메인',
		},
		{
			src: `${require('../../../images/detailView/web/ui/namdong_en2.jpg')}`,
			alt: '남동발전 영문 사이트 개편: 페이지 상세',
		},
		{
			src: `${require('../../../images/detailView/web/ui/namdong_en3.jpg')}`,
			alt: '남동발전 영문 사이트 개편: SOCIAL VOLUNTEERS',
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
					<strong>작업환경</strong>: HTML5, CSS3, Jquery, Adobe Photoshop
				</li>
				<li>
					<strong>고객사</strong>: 한국남동발전(주)
				</li>
			</ul>

			<ImgListView imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebNamdongEng;
