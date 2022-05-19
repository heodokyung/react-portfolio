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

interface IWorkList {
  details: {
    names: string;
    date: string;
    department: string;
    rank: string;
    details: string;
  };
}

const MainWorkList = () => {
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
  const [workList, setWorkList] = useState<IWorkList[]>([]);
  const [lotteData, setLotteData] = useState();

  useEffect(() => {
    // 즉시 실행하기 : 단 한번만 호출
    (async () => {
      // Work List
      const response = await fetch(
        'https://heodokyung.github.io/portfolio-data-json/portfolio_work.json'
      );
      const json = await response.json();
      setWorkList(json.data.work);

      // Lotte JSON
      const response2 = await fetch(
        'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json'
      );
      const json2 = await response2.json();
      setLotteData(json2);
    })();
  }, []);

  return (
    <CommonListWrap>
      <CommonTitle title={'WORK'} view={'main'} />
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
        {workList.map((workEl, index: number) => (
          <MainDetailList key={index} details={workEl} />
        ))}
      </DetailList>
    </CommonListWrap>
  );
};

export default MainWorkList;
