// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import styled from 'styled-components';

const SwiperWrap = styled.article`
  margin-top: 50px;
  .guideTxt {
    position: relative;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 16px;
  }
  img {
    width: 100%;
  }

  .swiper-pagination {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid ${(props) => props.theme.textColor};
    .swiper-pagination-current {
      font-weight: bold;
    }
  }
`;

interface IImgData {
  src: string | undefined;
  alt: string | undefined;
}

const ReactSwiper = ({ imgData }: { imgData: any }) => {
  return (
    <SwiperWrap>
      <p className="guideTxt">※ 좌,우로 스와이프하여 확인하실 수 있어요!</p>
      <Swiper
        loop={true}
        autoHeight={true}
        effect={'fade'}
        pagination={{
          type: 'fraction',
        }}
        modules={[EffectFade, Pagination]}
      >
        {imgData.map((item: IImgData, idx: number) => (
          <SwiperSlide key={idx}>
            <img src={item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrap>
  );
};

export default ReactSwiper;
