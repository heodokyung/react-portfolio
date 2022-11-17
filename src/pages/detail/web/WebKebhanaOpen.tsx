import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from './../../../components/views/ImgListView';

const WebKebhanaOpen = () => {
	const imgData = [
		{
			src: `${require('../../..//images/detailView/web/ui/img_kebhana_open_1.jpg')}`,
			alt: 'KEB 하나은행 기업뱅킹 통합개편: 메인',
		},
		{
			src: `${require('../../..//images/detailView/web/ui/img_kebhana_open_2.jpg')}`,
			alt: 'KEB 하나은행 기업뱅킹 통합개편: 로그인',
		},
		{
			src: `${require('../../..//images/detailView/web/ui/img_kebhana_open_3.jpg')}`,
			alt: 'KEB 하나은행 기업뱅킹 통합개편: 인증센터',
		},
		{
			src: `${require('../../..//images/detailView/web/ui/img_kebhana_open_4.jpg')}`,
			alt: 'KEB 하나은행 기업뱅킹 통합개편: 발급수ㅈ수료 환불신청',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2017.11.10 - 2018.07.31
				</li>
				<li>
					<strong>역할</strong>:
					<ul className={pageStyle.subList}>
						<li>퍼블리셔 PL</li>
						<li>KEB 하나은행 기업뱅킹(B2B) 메인 퍼블리싱 및 GUI 구현</li>
						<li>KEB 하나은행 기업뱅킹(B2B) 서브메인 퍼블리싱 및 GUI 구현</li>
						<li>서브 컨텐츠 페이지 퍼블리싱 및 GUI 구현</li>
						<li>KEB 하나은행 공통 마크업 가이드 및 공통 컴포넌트 UI 작업 배포</li>
						<li>공통 UI 모션 개발 (슬라이드, GNB, 모달팝업, I-on연동 검색 등)</li>
						<li>웹 접근성에 관한 페이지 검수 및 수정 대응</li>
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
						<li>이전 IE에서만 접속되던 환경에서 오픈뱅킹 환경의 전환으로 브라우저의 제약없이 접속 가능</li>
						<li>이전 사이트와 비교하여 UI/UX 사용성 개선</li>
						<li>익스플로러(ie9~) 및 모던 브라우저 크로스브라우징 대응</li>
						<li>웹표준 및 시멘틱 마크업 퍼블리싱</li>
						<li>페럴렉스 메뉴 구조화</li>
					</ul>
				</li>
				<li>
					<strong>작업환경</strong>: XHTML 1.0 Transitional,CSS3, Jquery, Javascript,
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
						href='https://biz.kebhana.com/index.jsp'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>사이트 바로가기</strong>: https://biz.kebhana.com
					</a>
				</li>
			</ul>

			<ImgListView imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebKebhanaOpen;
