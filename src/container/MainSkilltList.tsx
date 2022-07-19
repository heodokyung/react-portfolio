import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CommonTitle from '../components/common/CommonTitle';
import { useEffect } from 'react';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import CommonApi from '../api/CommonApi';
import LottiePlayer from '../components/main/LottiePlayer';
import SkillListElement from '../components/main/SkillListElement';
import lotteJsonSkill from '../api/lottie/mainSkill.json';
import { ISkillList } from '../atoms';
/****************************************
* CSS-in-js 정의 부분
/***************************************/

const zoomIn = keyframes`
	from {
		opacity: 0;
		transform: scale3d(.3, .3, .3);
	}

	50% {
		opacity: 1;
	}

  100% {
    opacity: 1;
  }
`;

const SkillListWrap = styled.article`
	padding: 32px 24px;
`;

const SkillList = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	opacity: 0;

	@media screen and (max-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 400px) {
		grid-template-columns: repeat(1, 1fr);
	}
	&.is-active {
		animation: ${zoomIn} 0.65s forwards ease-in-out;
		animation-delay: 0.4s;
	}
`;

const MainSkillList = () => {
	/****************************************
  * Skill Data 가져오기
  /***************************************/
	const [skillList, setSkillList] = useState<ISkillList[]>([]);
	useEffect(() => {
		CommonApi.get('/portfolio_skill.json')
			.then((response) => {
				const skillData = response.data;
				setSkillList(
					skillData.skill.map(
						(item: { eventMask: boolean; eventDetail: boolean }) => {
							item.eventMask = false;
							item.eventDetail = false;
							return item;
						},
					),
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	/****************************************
  * IntersectionObserver 정의
  * 옵션 정의
  * MainProjectList 참조
  /***************************************/

	const [targetRef, { wasEverVisible }] = useTrackVisibility();
	useEffect(() => {}, [wasEverVisible]);

	/****************************************
	 *  List 이벤트 공통 (Mouse, Focus)
	 ****************************************/
	const listEventIn = (index: number) => {
		setSkillList(
			skillList.map((item, i) => {
				if (i === index) {
					item.eventMask = true;
				} else {
					item.eventMask = false;
				}
				return item;
			}),
		);
	};
	const listEventLeave = () => {
		setSkillList(
			skillList.map((item) => {
				item.eventMask = false;
				return item;
			}),
		);
	};

	/****************************************
	 *  List 이벤트 : click
	 ****************************************/
	const listDetailView = (index: number) => {
		// console.log(event.target);
		setSkillList(
			skillList.map((item, i) => {
				if (i === index && item.eventDetail === false) {
					item.eventDetail = true;
				} else {
					item.eventDetail = false;
				}
				return item;
			}),
		);
	};

	return (
		<SkillListWrap>
			<CommonTitle title={'SKILL'} view={'main'} />
			<LottiePlayer lotteData={lotteJsonSkill} />
			<SkillList ref={targetRef} className={`${wasEverVisible && 'is-active'}`}>
				{skillList.map((skillEl, index: number) => (
					<SkillListElement
						key={index}
						index={index}
						skillEl={skillEl}
						listEventIn={listEventIn}
						listEventLeave={listEventLeave}
						listDetailView={listDetailView}
					/>
				))}
			</SkillList>
		</SkillListWrap>
	);
};

export default MainSkillList;
