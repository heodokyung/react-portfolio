import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from './../../../components/views/ImgListView';

const WebFinnqV3 = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/front/finnq_w_react_1.jpg')}`,
			alt: 'Finnq Web: 메인(intersection observer 적용) ',
		},
		{
			src: `${require('../../../images/detailView/web/front/finnq_w_react_2.jpg')}`,
			alt: 'Finnq Web: 마이데이터 제휴(React Hook Form 적용)',
		},
		{
			src: `${require('../../../images/detailView/web/front/finnq_w_react_3.jpg')}`,
			alt: 'Finnq Web: 대출비교 메인',
		},
		{
			src: `${require('../../../images/detailView/web/front/finnq_w_react_4.jpg')}`,
			alt: 'Finnq Web: 공동인증서',
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
					<strong>기간</strong>: 2021.04.10 ~ 2022.09.16
				</li>
				<li>
					<strong>역할</strong>:
					<ul className={pageStyle.subList}>
						<li>Finnq Web 사이트를 React와 Next.js 적용하여 전면 개편 진행 (반응형 웹 사이트로 구축)</li>
						<li>
							마이데이터 제휴 페이지 : Form요소를
							<a
								href='https://react-hook-form.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								react-hook-form
							</a>
							을 이용하여 Axios로 API 개발 적용
						</li>
					</ul>
				</li>
				<li>
					<strong>성과</strong>:
					<ul className={pageStyle.subList}>
						<li>
							Next.js로 구현하여 React(SPA)로 웹 사이트를 구현하였지만 웹 검색이
							가능하도록 구현함
						</li>
						<li>
							정적이던 메인 화면을
							<a
								href='https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API'
								target='_blank'
								rel='noopener noreferrer'
							>
								Intersection Observer API
							</a>
							를 이용하여 CSS Animate를 적용
						</li>
						<li>기존 하나의 CSS로 관리되던 부분을 SCSS를 적용하여 관리 이슈를 최소화 함</li>
						<li>신규 페이지 작업은 Styled-components(CSS-IN-JS) 스타일링 적용</li>
						<li>웹표준 및 시멘틱 마크업 적용</li>
						<li>Web, Mobile 디바이스 사이즈에 맞춰 최적화가 될 수 있도록 반응형으로 제작</li>
						<li>폴리필(Polyfill)을 적용하여 IE10까지 크로스 브라우징 대응</li>
					</ul>
				</li>
				<li>
					<strong>작업환경</strong>: React, SCSS, styled-components, Vanilla JS,
					Git, GitLab, SVN, Slack, Jira, Next.js
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

export default WebFinnqV3;
