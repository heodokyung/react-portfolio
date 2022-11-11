import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';
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
						<li>Finnq Web 사이트를 React와 Next.js를 사용 하여 전면 개편작업 진행</li>
						<li>
							SPA의 특성이 CSR의 문제 때문에 웹 사이트가 검색되지 않는 이슈가
							발생하는데 이 문제를 해결하기 위해 검색엔진 최적화(SEO)를 위하여
							Next.js 적용
						</li>
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
						<li>
							Next.js로 구현하여 React로 웹 사이트를 구현하였지만 웹 검색이
							가능하도록 구현
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
						<li>SCSS를 적용 &rarr; CSS 클래스 모듈적용</li>
						<li>styled-components 적용</li>
						<li>웹표준 및 시멘틱 마크업 적용</li>
						<li>Web, Mobile 디바이스 사이즈에 맞춰 최적화가 될 수 있도록 반응형으로 제작</li>
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

			{/* <ReactSwiper imgData={imgData} /> */}
			<ImgListView imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebFinnqV3;
