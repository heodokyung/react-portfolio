import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ImgListView from './../../../components/views/ImgListView';

const WebToyTodoList = () => {
	const imgData = [
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_todos1.gif')}`,
			alt: 'Todo List App: 할일 입력 화면',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_todos2.gif')}`,
			alt: 'Todo List App: 할일 입력 후 진행중, 완료 상태 변경',
		},
		{
			src: `${require('../../../images/detailView/web/toy/img_toy_todos3.gif')}`,
			alt: 'Todo List App: 반응형 웹 구현 적용 화면',
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
					<strong>설명</strong>:
					<ul className={pageStyle.subList}>
						<li>할 일 관리 앱 입니다.</li>
						<li>
							입력창에 할 일을 입력하면 할 일 목록이 순차적으로 리스트 업
							됩니다.
						</li>
						<li>
							상태에 따라 할일, 진행중, 완료 버튼을 클릭하면 각 각의 그룹으로 할
							일 목록 상태가 변경됩니다.
						</li>
						<li>
							할 일 목록은 LocalStroge에 저장되며 삭제 버튼으로 해당 할 일 목록
							삭제가 가능합니다.
						</li>
					</ul>
				</li>
				<li>
					<strong>적용기술</strong>: ReactJS, TypeScript, styled-components,
					recoil, react-hook-form,
				</li>
				<li>
					<a
						href='https://heodokyung.github.io/react-todo-list/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<strong>웹 사이트 바로가기</strong>:
						https://heodokyung.github.io/react-todo-list/
					</a>
				</li>
			</ul>

			{/* <ReactSwiper imgData={imgData} /> */}
			<ImgListView imgData={imgData} />

			<ListBtn />
		</>
	);
};

export default WebToyTodoList;
