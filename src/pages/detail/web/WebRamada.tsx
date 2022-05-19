import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebRamada = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/web/img_w_ramada1.jpg')}`,
      alt: 'Ramada 웹 페이지 스크린 샷1',
    },
    {
      src: `${require('../../../images/detailView/web/img_w_ramada2.jpg')}`,
      alt: 'Ramada 웹 페이지 스크린 샷2',
    },
    {
      src: `${require('../../../images/detailView/web/img_w_ramada3.jpg')}`,
      alt: 'Ramada 웹 페이지 스크린 샷3',
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
          <strong>작업환경</strong>: PHP, Jquery, Javasrcipt
        </li>
        <li>
          <strong>고객사</strong>: Ramada Casino
        </li>
      </ul>

      <ReactSwiper imgData={imgData} />

      <ListBtn />
    </>
  );
};

export default WebRamada;
