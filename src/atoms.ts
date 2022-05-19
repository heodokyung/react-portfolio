import { atom } from 'recoil';

/****************************************
  * 다크모드, 라이트 모드 상태값 관리
/***************************************/
export const isDarkAtom = atom({
  key: 'isDarkMode',
  default: true,
});
