import React, { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import CommonApi from '../api/CommonApi';
import CommonTitle from '../components/common/CommonTitle';
import SortingOpt from '../components/main/SortingOpt';
import ProjectListElement from '../components/main/ProjectListElement';
import { IProJect } from '../atoms';
/****************************************
* CSS-in-js 정의 부분
/***************************************/
const fadeInAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProjectListWrap = styled.article`
	padding: 32px 24px;
`;

const ProjectList = styled.ul`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 20px;
	opacity: 0;

	@media screen and (max-width: 1400px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 400px) {
		grid-template-columns: repeat(1, 1fr);
	}

	&.is-active {
		animation: ${fadeInAni} 0.65s forwards ease-in-out;
		animation-delay: 0.4s;
	}
`;

const MainProjectList = () => {
	/****************************************
	 *  프로젝트 List => JSOM 데이터 받아오기
	 *****************************************/
	const [loading, setLoading] = useState(true);
	const [projectList, setProjectList] = useState<IProJect[]>([]);

	useEffect(() => {
		CommonApi.get('portfolio_project.json')
			.then((response) => {
				const project = response.data;
				// console.log('projectData', json);
				setProjectList(
					project.portfolio.map(
						(item: { eventActive: boolean; eventShow: boolean }) => {
							item.eventActive = false;
							item.eventShow = true;
							return item;
						},
					),
				);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	/****************************************
  * IntersectionObserver 정의
  * 옵션 정의
  * - `useTrackVisibility` also returns a tuple like `useIntersectionObserver`.
  * - First item is the same `ref` callback to set the node to observe.
  * - Second item is an object that we can use to decide if a node is visible.
  * - `entry`: Same object which is returned by `useIntersectionObserver`.
  * - `rootRef`: Same ref callback which is returned by `useIntersectionObserver`.
  * - `isVisible`: Becomes true/false based on the response of `IntersectionObserver`.
  * - `wasEverVisible`: When our observed node becomes visible once, this flag becomes `true` and stays like that.
  * const [targetRef, { entry, rootRef, isVisible, wasEverVisible }] =
    useTrackVisibility();
  * https://www.npmjs.com/package/react-intersection-observer-hook
  /***************************************/

	const [targetRef, { wasEverVisible }] = useTrackVisibility();
	useEffect(() => {}, [wasEverVisible]);

	/****************************************
	 *  List 이벤트 공통 (Mouse, Focus)
	 *****************************************/
	const listEventIn = (index: number) => {
		setProjectList(
			projectList.map((item, i) => {
				if (i === index) {
					item.eventActive = true;
				} else {
					item.eventActive = false;
				}
				return item;
			}),
		);
	};

	const listEventLeave = () => {
		setProjectList(
			projectList.map((item) => {
				item.eventActive = false;
				return item;
			}),
		);
	};

	/****************************************
	 *  List 이벤트 : Sorting
	 *****************************************/
	enum SortCategoryType {
		'ALL' = 'all',
		'WEB' = 'w',
		'MOBILE' = 'm',
		'RESPONSIVE' = 'r',
		'FRONT_END' = 'f',
		'BACK_END' = 'b',
	}
	const sortingList = useCallback(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, _type: string) => {
			const { currentTarget } = event;
			siblings(currentTarget, 'is-active');
			currentTarget.classList.add('is-active');

			// projectList.filter((item) => item.gubun.includes(_type));
			setProjectList(
				projectList.map((item) => {
					item.eventShow = false;
					if (_type === 'all') {
						item.eventShow = true;
					} else if (item.gubun.includes(_type)) {
						item.eventShow = true;
					}
					return item;
				}),
			);

			// HTMLElement | null
			function siblings(t: any, _class: string) {
				const children = t.parentElement.children;
				for (var i = 0; i < children.length; i++) {
					children[i].classList.remove(_class);
				}
			}
		},
		[SortCategoryType],
	);

	return (
		<ProjectListWrap>
			<CommonTitle title={'PROJECT'} view={'main'} />
			<SortingOpt
				sortingList={sortingList}
				SortCategoryType={SortCategoryType}
			/>

			{loading ? (
				<p>Loading...</p>
			) : (
				<ProjectList
					ref={targetRef}
					className={`${wasEverVisible && 'is-active'}`}
				>
					{projectList.map((projectEl, index: number) => (
						<ProjectListElement
							key={index}
							index={index}
							projectEl={projectEl}
							listEventIn={listEventIn}
							listEventLeave={listEventLeave}
						/>
					))}
				</ProjectList>
			)}
		</ProjectListWrap>
	);
};

export default MainProjectList;
