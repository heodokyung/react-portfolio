import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebToyMovieList = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_movie1.png')}`,
			alt: '영화 정보목록 스크린샷1',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_movie2.png')}`,
			alt: '영화 정보목록 스크린샷2',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_movie3.png')}`,
			alt: '영화 정보목록 스크린샷3',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2022.03.14 ~ 2022.03.17
				</li>
				<li>
					<strong>목표/역할</strong>:
					<ul>
						<li>React로 영화 정보를 보여주는 사이트 만들기</li>
						<li>
							<a
								href='https://yts.mx/api'
								target='_blank'
								rel='noopener noreferrer'
							>
								yts.mx
							</a>
							API를 이용하여 영화 정보 노출
						</li>
						<li>스타일링은 styled-components를 사용</li>
						<li>
							react-helmet을 이용해 상세 페이지 이동시 페이지 Title이 페이지에
							맞게 변경될 수 있도록 적용(웹 접근성)
						</li>
						<li>axios로 데이터 호출 및 관리</li>
						<li>React-dom 적용</li>
					</ul>
				</li>
				<li>
					<strong>적용기술</strong>: ReactJS, TypeScript, styled-components,
					react-helmet, recoil, axios, React-query, React-router-dom
				</li>
				<li>
					<a
						href='https://heodokyung.github.io/react-movie/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>웹 사이트 바로가기</strong>:
						https://heodokyung.github.io/react-movie/
					</a>
				</li>
			</ul>

			<ReactSwiper imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebToyMovieList;
