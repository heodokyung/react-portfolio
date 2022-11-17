import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from './../../../components/views/ImgListView';

const WebToyNetflix = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_netflix1.png')}`,
			alt: 'Netflix 메인',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_netflix2.png')}`,
			alt: 'Netflix 영화 목록',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_netflix3.png')}`,
			alt: 'Netflix 검색 화면',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2022.07.18 ~ 2022.08.08
				</li>
				<li>
					<strong>목표/역할</strong>:
					<ul className={pageStyle.subList}>
						<li>
							React + Typescript를 적용하여 OTT사이트인 'Netflix' Clone 사이트 구현
						</li>
						<li>Styled-components를 사용하여 스타일링 적용</li>
						<li>react-hook-form을 이용하여 검색 기능 구현</li>
						<li>react-query를 적용해 브라우저 캐싱을 적용.</li>
						<li>framer-motion을 활용해 에니메이션 효과 적용</li>
					</ul>
				</li>
				<li>
					<strong>설명</strong>:
					<ul className={pageStyle.subList}>
						<li>
							Axios를 이용해 The Movie DB로부터 영화 상세정보를 가져옵니다.
						</li>
						<li>
							영화 목록과 TvShow 목록을 사용자가 선택하여 인기 작품, 현재
							상영중, 평점높은 콘텐츠를 현재 날짜에 맞춰서 실제 데이터를 확인할 수 있습니다.
						</li>
						<li>
							검색창을 통해 원하는 영화, TvShow도 검색하여 원하는 정보를 수집할 수 있습니다.
						</li>
					</ul>
				</li>
				<li>
					<strong>적용기술</strong>: ReactJS, TypeScript, styled-components,
					recoil, react-hook-form, axios, react-query, react-router-dom,
					framer-motion, react-helmet
				</li>
				<li>react-helmet을 이용해 상세 페이지 이동시 페이지 Title이 상세 페이지에 맞게 Title이 변경될 수 있도록 적용 (웹 접근성 준수)</li>
				<li>
					<a
						href='https://heodokyung.github.io/react-netflix/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>웹 사이트 바로가기</strong>:
						https://heodokyung.github.io/react-netflix/
					</a>
				</li>
			</ul>

			<ImgListView imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebToyNetflix;
