import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CommonTitle from '../common/CommonTitle';
import { useEffect } from 'react';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import MainDetailList from './hooks/MainDetailList';
import CommonApi from '../../api/CommonApi';
import LottiePlayer from './hooks/LottiePlayer';

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
  data: {
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
  /***************************************/
  const [workList, setWorkList] = useState<IWorkList[]>([]);
  useEffect(() => {
    CommonApi.get('/portfolio_work.json')
      .then((response) => {
        setWorkList(response.data.work);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /****************************************
  * Lotte Animation 데이터 받아오기
  /***************************************/
  const [lotteData, setLotteData] = useState<any>();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json'
      );
      const json = await response.json();
      setLotteData(json);
    })();
  }, []);

  return (
    <CommonListWrap>
      <CommonTitle title={'WORK'} view={'main'} />
      <LottiePlayer lotteData={lotteData} />
      <DetailList
        ref={targetRef}
        className={`${wasEverVisible && 'is-active'}`}
      >
        {workList?.map((workEl, index: number) => (
          <MainDetailList key={index} details={workEl} />
        ))}
      </DetailList>
    </CommonListWrap>
  );
};

export default MainWorkList;
