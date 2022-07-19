import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebToyTodoList = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_todos1.gif')}`,
			alt: 'Todo List App 요약 이미지1',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_todos2.gif')}`,
			alt: 'Todo List App 요약 이미지2',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_todos3.gif')}`,
			alt: 'Todo List App 요약 이미지3',
		},
	];

	return (
		<>
			{/* 상세설명 */}
			<ul className={pageStyle.description}>
				<li>
					<strong>기간</strong>: 2022.07.13 ~ 2022.07.19
				</li>
				<li>
					<strong>목표/역할</strong>:
					<ul className={pageStyle.subList}>
						<li>React + Typescript를 적용하여 할 일 목록 App 사이트 구현</li>
						<li>styled-components를 사용하여 스타일링 적용</li>
						<li>
							recoil로 상태관리 &rarr; recoil의 Selecter를 적용하여
							카테고리(할일, 진행중, 완료) 관리
						</li>
						<li>react-hook-form을 이용하여 Form 값 상태 관리</li>
						<li>웹, 모바일 반응형 구현</li>
						<li>
							recoil-persist를 적용하여 로컬스토리지에 Todo App 관리 및 저장
						</li>
					</ul>
				</li>
				<li>
					<strong>적용기술</strong>: ReactJS, TypeScript, styled-components,
					recoil, react-hook-form, recoil-persist
				</li>
				<li>
					<a
						href='https://heodokyung.github.io/react-todo-list/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>웹 사이트 바로가기</strong>:
						https://heodokyung.github.io/react-coin-list/
					</a>
				</li>
			</ul>

			<ReactSwiper imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebToyTodoList;
