# React Portfolio
React와 TypeScript를 이용하여 이전의 포트폴리오 사이트를 개편하였습니다.

## 이전 포트폴리오과 달라진 점
이전 포트폴리오는 Vue를 적용해서 만들었습니다. 처음 만든 포트폴리오는 Vue에 대한 선행 지식의 깊이기 깊지 못했고 Vue도 메인페이지에만 적용되어 있었습니다.  
이번에 개편한 React를 적용하여 개편한 포트폴리오 사이트는 메인 뿐 아니라 상세페이지까지 React-router-dom을 이용하여 React로 구현되어 있습니다.

### 적용기술 정리
#### 1) Typescript 스크립트 적용
[Typescript](https://www.typescriptlang.org/)  
React로 개편하면서 정적인 타입의 Typescript도 같이 적용하였습니다. 공통으로 관리할 수 있는 interface는 export하여 범용적으로 사용할 수 있게 하였고 중복코드를 줄이는데 최우선으로 하였습니다.

### 2) styled-components(CSS-IN-JS)로 스타일링 적용
[styled-components](https://styled-components.com/) for more information.  
CSS-IN-JS 방식 중 하나인 styled-components를 적용하여 사이트에 구현하였습니다. styled-components를 활용하여 Props로 CSS 상태 관리를 적용했습니다.

#### 3) 다크모드 테마 적용
사용자의 UI환경 개선을 위해서 다크모드 테마를 적용했습니다. styled-components에서 제공하는 ThemeProvider를 이용해서 작업하였고 범용적으로 상태값을 관리할 수 있는 [Recoil](https://recoiljs.org/ko/)을 사용하여 다크모드 테마인지 라이트모드 테마인지 체크하는 변수값을 Atom(상태값)으로 관리하였습니다.

#### 4) 반응형 제작
사용자의 디바이스에 상관 없이 웹, 모바일에서 모두 최적화 된 화면을 볼 수 있도록 반응형으로 반응형으로 구현되어 있습니다. 모바일로 구분하는 기준값은 960으로 설정했고 960은 테블릿 값을 기준으로 정하였습니다. 

#### 5) axios
깃헙에서 관리하는 포트폴리오에 관한 JSON 정보를 가져와서 화면에 적용합니다.

#### 6) 페이지 상세 타이틀 값 관리(웹 접근성 준수)
웹 접근성에 맞게 react-helmet과 react-route-dom을 이용하여 프로젝트 상세페이지로 이동할 경우 해당 페이지의 브라우저 Title값이 페이지에 맞게 유동적으로 변경될 수 있도록 상태관리 하였습니다.

#### 7) react-intersection-observer-hook
페이지 스크롤 시 intersection-observer를 이용하여 해당 위치에 도달했을 때 화면의 애니메이션 효과가 적용되도록 구현하였습니다. 

#### 8) 그 외 사용 기술들
node-sass, react-countup, react-lottie-player, react-query, react-responsive, react-typing-effect, swiper 등


아직 부족한 부분이 많지만 개선 사항을 발견할 때마다 수정을 진행하면서 최적화를 하고 있습니다.  
잘 부탁드립니다. 감사합니다.
