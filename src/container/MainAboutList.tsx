import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CommonTitle from '../components/common/CommonTitle';
import { useEffect } from 'react';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import MainDetailList from '../components/main/MainDetailList';
import CommonApi from '../api/CommonApi';
import LottiePlayer from '../components/main/LottiePlayer';
import lotteJsonAbout from '../api/lottie/mainAbout.json';

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
  * About List 데이터 받아오기
  * Json: WorK List
  /***************************************/
	const [aboutList, setAboutList] = useState<IAboutList[]>([]);

	useEffect(() => {
		CommonApi.get('/portfolio_about.json')
			.then((response) => {
				setAboutList(response.data.about);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<CommonListWrap>
			<CommonTitle title={'ABOUT'} view={'main'} />
			<LottiePlayer lotteData={lotteJsonAbout} />
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
