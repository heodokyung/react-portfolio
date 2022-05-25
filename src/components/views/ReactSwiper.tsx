// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';

const SwiperWrap = styled.article`
  position: relative;
  margin-top: 50px;
  img {
    width: 100%;
  }
`;
const GuideTxt = styled.p`
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 16px;
`;

interface IImgData {
  src: string | undefined;
  alt: string | undefined;
}

const ReactSwiper = ({ imgData }: { imgData: any }) => {
  return (
    <SwiperWrap>
      <GuideTxt>※ 좌,우로 스와이프하여 확인하실 수 있어요!</GuideTxt>
      <Swiper
        loop={true}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        autoHeight={true}
        effect={'fade'}
        modules={[EffectFade, Navigation, Pagination]}
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
