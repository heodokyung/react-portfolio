import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebToyCoinList = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_coin1.png')}`,
			alt: '암호화폐 정보 리스트 이미지1',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_coin2.png')}`,
			alt: '암호화폐 정보 리스트 이미지2',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_coin3.png')}`,
			alt: '암호화폐 정보 리스트 이미지3',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_coin4.png')}`,
			alt: '암호화폐 정보 리스트 이미지4',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2022.04.01 ~ 2022.04.07
				</li>
				<li>
					<strong>목표/역할</strong>:
					<ul>
						<li>React로 암화화폐 정보를 보여주는 사이트 만들기</li>
						<li>
							<a
								href='https://coinpaprika.com/ko/'
								target='_blank'
								rel='noopener noreferrer'
							>
								코인파프리카
							</a>
							API를 이용하여 코인 정보 노출
						</li>
						<li>TypeScript를 적용</li>
						<li>
							스타일링은 styled-components를 사용 &rarr; 다크모드테마 적용
						</li>
						<li>
							react-helmet을 이용해 상세 페이지 이동시 페이지 Title이 페이지에
							맞게 변경될 수 있도록 적용(웹 접근성)
						</li>
						<li>recoil로 상태관리(다크모드테마)</li>
						<li>axios와 React-query로 데이터 호출 및 관리</li>
						<li>
							React-dom : nest-routes 적용 &rarr; 페이지 상세 chart 구현 및 가격
							정보 상세
						</li>
					</ul>
				</li>
				<li>
					<strong>적용기술</strong>: ReactJS, TypeScript, styled-components,
					react-helmet, recoil, axios, React-query, React-router-dom
				</li>
				<li>
					<a
						href='https://heodokyung.github.io/react-coin-list/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>웹 사이트 바로가기</strong>:
						https://heodokyung.github.io/react-coin-list/
					</a>
				</li>
			</ul>

			<ReactSwiper imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebToyCoinList;
