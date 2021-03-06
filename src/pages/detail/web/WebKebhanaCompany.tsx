import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebKebhanaCompany = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/ui/img_kebhana_company_1.jpg')}`,
			alt: 'KEB 하나은행 웹 페이지 스크린샷1',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_kebhana_company_2.jpg')}`,
			alt: 'KEB 하나은행 웹 페이지 스크린샷2',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_kebhana_company_3.jpg')}`,
			alt: 'KEB 하나은행 웹 페이지 스크린샷3',
		},
		{
			src: `${require('../../../images/detailView/web/ui/img_kebhana_company_4.jpg')}`,
			alt: 'KEB 하나은행 웹 페이지 스크린샷4',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2017.01.11 ~ 2017.02.24
				</li>
				<li>
					<strong>역할</strong>: KEB 하나은행 기업뱅킹 서비스 운영
				</li>
				<li>
					<strong>성과 </strong>:
					<ul className={pageStyle.subList}>
						<li>익스플로러(ie7~) 및 모던 브라우저 크로스브라우징</li>
						<li>W3C Markup Validator, 웹 접근성 자동 평가도구(K-wah) 통과</li>
						<li>웹 접근성 준수</li>
						<li>I-ON SERVER로 컨텐츠/개발서버 분리</li>
						<li>UI 모션 개발</li>
					</ul>
				</li>
				<li>
					<strong>작업환경</strong>:
					<a
						href='https://www.w3schools.com/html/default.asp'
						target='_blank'
						rel='noopener noreferrer'
					>
						XHTML 1.0 Transitional
					</a>
					,
					<a
						href='https://www.w3schools.com/css/default.asp'
						target='_blank'
						rel='noopener noreferrer'
					>
						CSS3
					</a>
					,
					<a
						href='https://Jquery.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Jquery
					</a>
					,
					<a
						href='https://www.w3schools.com/js/default.asp'
						target='_blank'
						rel='noopener noreferrer'
					>
						Javascript
					</a>
					,
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
						href='http://biz.kebhana.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>사이트 바로가기</strong>: http://biz.kebhana.com
					</a>
				</li>
			</ul>

			<ReactSwiper imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebKebhanaCompany;
