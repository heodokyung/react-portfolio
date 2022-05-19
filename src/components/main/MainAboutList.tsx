import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CommonTitle from '../common/CommonTitle';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import MainDetailList from './MainDetailList';

/****************************************
* CSS-in-js 정의 부분
/***************************************/
const CommonListWrap = styled.article`
  padding: 32px 24px;
`;

const fadeInAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DetailList = styled.article`
  opacity: 0;
  &.is-active {
    animation: ${fadeInAni} 0.65s forwards ease-in-out;
    animation-delay: 0.4s;
  }
`;

interface IAboutList {
  names: string;
  date: string;
  department: string;
  details: string;
}

const MainAboutList = () => {
  /****************************************
  * IntersectionObserver 정의
  * 옵션 정의
  * MainProjectList 참조
  /***************************************/
  const [targetRef, { wasEverVisible }] = useTrackVisibility();
  useEffect(() => {}, [wasEverVisible]);

  /****************************************
  * WorK List 및 Lotte 데이터 받아오기
  * Json: WorK List
  * json2: Lotte
  /***************************************/
  const [aboutList, setAboutList] = useState<IAboutList[]>([]);
  const [lotteData, setLotteData] = useState();

  useEffect(() => {
    // 즉시 실행하기 : 단 한번만 호출
    (async () => {
      // about List
      const response = await fetch(
        'https://heodokyung.github.io/portfolio-data-json/portfolio_about.json'
      );
      const json = await response.json();
      setAboutList(json.data.about);

      // Lotte JSON
      const response2 = await fetch(
        'https://assets4.lottiefiles.com/private_files/lf30_kj1b8w1w.json'
      );
      const json2 = await response2.json();
      setLotteData(json2);
    })();
  }, []);

  return (
    <CommonListWrap>
      <CommonTitle title={'ABOUT'} view={'main'} />
      <Lottie
        loop
        animationData={lotteData}
        play
        style={{ width: '100%', height: 300, background: 'transparent' }}
      />
      <DetailList
        ref={targetRef}
        className={`${wasEverVisible && 'is-active'}`}
      >
        {aboutList.map((aboutEl, index) => (
          <MainDetailList key={index} details={aboutEl} />
        ))}
      </DetailList>
    </CommonListWrap>
  );
};

export default MainAboutList;
