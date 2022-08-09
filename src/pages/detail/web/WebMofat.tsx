import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from '../../../components/views/ImgListView';

const WebMofat = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/back/img_mofat.jpg')}`,
			alt: '외교통상부 대표 이미지(내부 시스템이라 상세보기 화면이 없습니다.)',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>작업환경</strong>: Java, Jsp, SQL, Jquery, Javacript
				</li>
				<li>
					<strong>기간</strong>: 2012.10.01 ~ 2013.02.28
				</li>
				<li>
					<strong>역할</strong>: 외교통상부 내부 보안 서류 시스템 개발 및 해외
					공관 서비스 오픈
				</li>
				<li>
					<strong>DBMS</strong>: CUBRID
				</li>
				<li>
					<strong>Tool</strong>: ( ECLIPSE / DEVON ),
					<a
						href='http://www.markany.com/wp/?page_id=226'
						target='_blank'
						rel='noopener noreferrer'
					>
						On-Nara BPS
					</a>
				</li>
				<li>
					<strong>고객사</strong>: (구)외교통상부, (현)외교부
				</li>
				<li>
					<strong>※내부 시스템이라 상세보기 화면이 없습니다.</strong>
				</li>
			</ul>

			<ImgListView imgData={imgData} />
			<ListBtn />
		</>
	);
};

export default WebMofat;
