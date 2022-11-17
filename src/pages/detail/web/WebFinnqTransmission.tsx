import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from './../../../components/views/ImgListView';

const WebFinnqTransmission = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/front/img_mydata_finnq1.png')}`,
			alt: 'Finnq 마이데이터: 전송요구 통지서 웹',
		},
		{
			src: `${require('../../../images/detailView/web/front/img_mydata_finnq2.png')}`,
			alt: 'Finnq 마이데이터: 전송요구 통지서 웹(오류)',
		},
		{
			src: `${require('../../../images/detailView/web/front/img_mydata_finnq3.png')}`,
			alt: 'Finnq 마이데이터: 전송요구 통지서 웹(전송내역 통지서)',
		},
		{
			src: `${require('../../../images/detailView/web/front/img_mydata_finnq4.png')}`,
			alt: 'Finnq 마이데이터: 전송요구 통지서 모바일',
			option: true,
		},
		{
			src: `${require('../../../images/detailView/web/front/img_mydata_finnq5.png')}`,
			alt: 'Finnq 마이데이터: 전송요구 통지서 모바일(오류)',
			option: true,
		},
		{
			src: `${require('../../../images/detailView/web/front/img_mydata_finnq6.png')}`,
			alt: 'Finnq 마이데이터: 전송요구 통지서 모바일(전송내역 통지서)',
			option: true,
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2022.06.13 ~ 2021.06.17
				</li>
				<li>
					<strong>작업내용</strong>:
					<ul className={pageStyle.subList}>
						<li>
							1년에 한 번 Finnq App의 마이데이터의 재인증을 위한 사용자의
							전송요구 페이지 개발을 진행
						</li>
						<li>
							전송요구 갱신이 필요한 유저에게 고유한 KEY값이 포함된 URL을 푸쉬
							알림으로 전송
						</li>
						<li>
							해당 URL로 진입한 유저는 자신의 생년월일을 입력창에 입력하면 URL에
							포함된 고유 키캅을 '쿼리 String'으로 추출하여 데이터를 반환해주는
							Api에 '생년월일 + 키값'을 전송
						</li>
						<li>
							Api에서는 사용자가 전달한 정보를 기반으로 '성공' 또는 '실패'
							정보를 반환
						</li>
						<li>
							정보조회가 '성공'할 경우 자신이 인증했던 전송요구 페이지 상세를
							노출하고 '실패'할 경우 생년월일 재입력 또는 서버에서 전달받은
							에러메시지를 노출
						</li>
					</ul>
				</li>
				<li>
					<strong>결과</strong>:
					<ul className={pageStyle.subList}>
						<li>
							React로 구현 및 반응형으로 구현하여 웹, 모바일 모두 대응할 수
							있도록 구현.
						</li>
						<li>IE10까지 크로스 브라우징 대응</li>
						<li>Styled-components로 스타일링 구현</li>
						<li>Axios로 Api 데이터 통신</li>
						<li>중요데이터(계좌 등)는 마스킹 처리</li>
					</ul>
				</li>
				<li>
					<strong>작업환경</strong>: React, Styled-components, Git/SVN, GitLab, Slack,
					Axios, Next.js
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

export default WebFinnqTransmission;
