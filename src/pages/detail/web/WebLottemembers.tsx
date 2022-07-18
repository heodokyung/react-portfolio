import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebLottemembers = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/back/img_w_lotte1.jpg')}`,
			alt: '롯데멤버스 메인 페이지 스크린샷1',
		},
		{
			src: `${require('../../../images/detailView/web/back/img_w_lotte2.jpg')}`,
			alt: '롯데멤버스 메인 페이지 스크린샷2',
		},
		{
			src: `${require('../../../images/detailView/web/back/img_w_lotte3.jpg')}`,
			alt: '롯데멤버스 메인 페이지 스크린샷3',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2013.04.24 ~ 2013.07.31
				</li>
				<li>
					<strong>역할</strong>:
					<ul className={pageStyle.subList}>
						<li>롯데계열사 통합 멤버스 포인트 전문 조회 개발</li>
						<li>롯데 포인트 계열사 통합 비밀번호 설정 구축</li>
						<li>서비스 가이드 구축</li>
					</ul>
				</li>
				<li>
					<strong>작업환경</strong>: JAVA, JSP, Jquery, javascript
				</li>
				<li>
					<strong>DBMS / Server</strong>: Oracle / Jeus
				</li>
				<li>
					<strong>Tool</strong>: ECLIPSE/XPERTFRAME
				</li>
				<li>
					<strong>고객사</strong>: 롯데카드
				</li>
				<li>
					<strong>성과</strong>:
					<a
						href='http://wa.or.kr/waMark/status_new.asp'
						target='_blank'
						rel='noopener noreferrer'
					>
						웹 접근성 인증 마크 획득
					</a>
				</li>
				<li>
					<a
						href='http://www.lottemembers.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>사이트 바로가기</strong>: http://www.lottemembers.com
					</a>
				</li>
			</ul>

			<ReactSwiper imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebLottemembers;
