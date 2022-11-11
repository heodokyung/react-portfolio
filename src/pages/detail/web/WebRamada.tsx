import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from '../../../components/views/ImgListView';

const WebRamada = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/back/img_w_ramada1.jpg')}`,
			alt: 'Ramada 웹 페이지: 메인',
		},
		{
			src: `${require('../../../images/detailView/web/back/img_w_ramada2.jpg')}`,
			alt: 'Ramada 웹 페이지: 카지노 소개',
		},
		{
			src: `${require('../../../images/detailView/web/back/img_w_ramada3.jpg')}`,
			alt: 'Ramada 웹 페이지: 이용안내',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2010.04.12 ~ 2012.02.01
				</li>
				<li>
					<strong>역할</strong>: Ramada Casino 사이트 운영 및 전산업무
				</li>
				<li>
					<strong>작업환경</strong>: ASP, Jquery, Javasrcipt
				</li>
				<li>
					<strong>고객사</strong>: Ramada Casino
				</li>
			</ul>

			<ImgListView imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebRamada;
