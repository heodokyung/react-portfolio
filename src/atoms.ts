import { atom } from 'recoil';

/****************************************
  * 다크모드, 라이트 모드 상태값 관리
/***************************************/
export const isDarkAtom = atom({
	key: 'isDarkMode',
	default: true,
});

//  프로젝트 리스트 Element 공통 interface
export interface IProJect {
	gubun: string;
	type: string;
	leng: string;
	new: boolean;
	date: string;
	link: string;
	id: string;
	imgSrc: string;
	title: string;
	persent: number;
	desc?: string;
	eventShow?: boolean;
	eventActive?: boolean;
}

// 스킬 리스트 Element 공통 interface
export interface ISkillList {
	imgSrc: string;
	id: string;
	names: string;
	details: string;
	url: string;
	eventMask: boolean;
	eventDetail: boolean;
}
