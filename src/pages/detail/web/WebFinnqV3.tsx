import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebFinnqV3 = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/front/finnq_w_react_1.jpg')}`,
			alt: 'Finnq Web Summary1',
		},
		{
			src: `${require('../../../images/detailView/web/front/finnq_w_react_2.jpg')}`,
			alt: 'Finnq Web Summary2',
		},
		{
			src: `${require('../../../images/detailView/web/front/finnq_w_react_3.jpg')}`,
			alt: 'Finnq Web Summary3',
		},
		{
			src: `${require('../../../images/detailView/web/front/finnq_w_react_4.jpg')}`,
			alt: 'Finnq Web Summary4',
		},
	];

	return (
		<>
			<div className={pageStyle.movieWrapper}>
				<iframe
					width='100%'
					src='https://www.youtube.com/embed/NWOL_URztqc?rel=0'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					className={pageStyle.moviePlayer}
				/>
			</div>

			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2021.04.10 ~ 재직중
				</li>
				<li>
					<strong>역할</strong>:
					<ul className={pageStyle.subList}>
						<li>
							Finnq Web을
							<a
								href='https://ko.reactjs.org'
								target='_blank'
								rel='noopener noreferrer'
							>
								React
							</a>
							로 개편
						</li>
						<li>검색엔진 최적화(SEO)를 위해 Next.js 적용</li>
						<li>
							마이데이터 제휴 페이지내 Form요소를
							<a
								href='https://react-hook-form.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								react-hook-form
							</a>
							Api로 개발
						</li>
						<li>
							<a
								href='https://terms.naver.com/entry.nhn?docId=2067169&amp;cid=50305&amp;categoryId=50305'
								target='_blank'
								rel='noopener noreferrer'
							>
								트러블 슈팅(trouble shooting)
							</a>
							및 단위테스트
						</li>
					</ul>
				</li>
				<li>
					<strong>성과</strong>:
					<ul className={pageStyle.subList}>
						<li>Next.js로 구현하여 React로 웹 검색이 가능하도록 구현</li>
						<li>
							정적인 메인 화면을
							<a
								href='https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API'
								target='_blank'
								rel='noopener noreferrer'
							>
								Intersection Observer API
							</a>
							를 이용하여
							<a
								href='https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations'
								target='_blank'
								rel='noopener noreferrer'
							>
								CSS Animate
							</a>
							를 적용, UI/UX 향상
						</li>
						<li>Web, Mobile 디바이스에 맞게 반응형으로 제작</li>
						<li>IE10까지 크로스 브라우징 대응</li>
					</ul>
				</li>
				<li>
					<strong>작업환경</strong>: React, SCSS, styled-components, Vanilla JS,
					Git/SVN, Slack, Next.js
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

			<ReactSwiper imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebFinnqV3;
