import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useScroll } from './useScroll';
import { isDarkAtom } from '../../atoms';
import { Mobile, PC } from './MediaQuery';

/****************************************
* Header CSS-in-js 정의 부분
/***************************************/
const HeaderLogo = styled.h1`
	display: inline-block;
	position: relative;
	box-shadow: inset 0 0 0 2px ${(props) => props.theme.textColor};
	padding: 32px 7px;
	font-weight: bold;
	font-size: 18px;
	transition: -webkit-box-shadow 0.3s;
	color: ${(prop) => prop.theme.textColor};

	&:before,
	&:after {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		box-sizing: inherit;
		transform-origin: center;
		content: '';
	}
	&:before {
		border-top: 2px solid ${(props) => props.theme.accentColor};
		border-bottom: 2px solid ${(props) => props.theme.accentColor};
		transform: scale3d(0, 1, 1);
	}
	&:after {
		border-left: 2px solid ${(props) => props.theme.accentColor};
		border-right: 2px solid ${(props) => props.theme.accentColor};
		transform: scale3d(1, 0, 1);
	}
	&:hover:before,
	&:hover:after {
		transform: scale3d(1, 1, 1);
		transition: transform 0.5s;
	}
`;

const HeaderWrap = styled.div`
	position: fixed;
	height: 130px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${(props) => props.theme.listColor};
	z-index: 50;
	.menu__wrap li a {
		display: block;
		font-size: inherit;
		color: ${(props) => props.theme.textColor};
		text-align: center;
	}
	&.fixed {
		height: 65px;
		border-bottom: 2px solid #fff;
		transition: height 0.2s ease;
		${HeaderLogo} {
			box-shadow: none;
			font-size: 18px;
			padding: 22px 7px;
			::before,
			::after {
				display: none;
			}
		}
		.menu__wrap li {
			font-size: 18px;
		}
		.menu__wrap li:after {
			height:14px;
		}
	}
	header {
		max-width: 1920px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 90px 0 24px;
		height: 100%;
	}
`;

const WebMenu = styled.ul`
	display: flex;
	align-items: center;
	li {
		position: relative;
		padding: 0 15px;
		font-size: 24px;
	}
	li:after {
		display: inline-block;
		position: absolute;
		border-left: 1px solid ${(props) => props.theme.textColor};
		height: 20px;
		left: 0;
		top:4px;
		content: '';
	}
	li:first-of-type:after {
		display:none;
	}
`;

const MobileMenu = styled.ul`
	display: none;
	position: absolute;
	bottom: -159px;
	left: 0;
	right: 0;
	li {
	}
	a {
		padding: 18px;
		text-align: left !important;
		font-weight: bold;
		background-color: ${(props) => props.theme.subListColor};
		border-bottom: 1px solid ${(props) => props.theme.listColor};
	}
	&.is-active {
		display: block;
	}
`;

const BtnMobile = styled.button`
	display: inline-block;
	width: 35px;
	height: 35px;
	top: 2px;
	left: 0;
	padding: 0;
	span {
		position: relative;
		top: 0px;
		transition-duration: 0s;
		transition-delay: 0.2s;
	}
	span:before,
	span:after {
		position: absolute;
		content: '';
	}
	span,
	span:before,
	span:after {
		display: block;
		width: 35px;
		height: 5px;
		background-color: ${(props) => props.theme.textColor};
		transition-property: margin, transform;
		transition-duration: 0.2s;
		transform-origin: 100% 100%;
	}
	span:before {
		margin-top: -12px;
	}
	span:after {
		margin-top: 12px;
	}
	&.is-active span {
		background-color: rgba(0, 0, 0, 0);
		transition-delay: 0.2s;
	}
	&.is-active span:before {
		margin-top: 0;
		transform: rotate(45deg) translateX(3px) translateY(13px);
		transition-delay: 0s, 0.2s;
	}
	&.is-active span:after {
		margin-top: 0;
		transform: rotate(-45deg) translateX(6px) translateY(-12px);
		transition-delay: 0s, 0.2s;
	}
`;

interface IThemeMode {
	darkMode: boolean;
}

const ThemeButton = styled.button`
	display: flex;
	align-items: center;
	position: absolute;
	height: 26px;
	width: 60px;
	border-radius: 13px;
	padding: 1px;
	border: 1px solid ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.subListColor};
	right: 24px;
	top: 50%;
	margin-top: -13px;

	&:before,
	&:after {
		position: absolute;
		display: inline-block;
		content: '';
	}
	&:before {
		width: 30px;
		height: 30px;
	}
	&:after {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		transition: all 0.2s ease;
		z-index: 10;
		transition: all 0.4s ease;
		left: ${(current: IThemeMode) =>
			current.darkMode === true ? '1px' : '33px'};
		background-color: ${(props) => props.theme.textColor};
	}
	.svg__sun,
	.svg__moon {
		position: absolute;
		color: ${(props) => props.theme.textColor};
	}
	.svg__sun {
		right: 8px;
	}
	.svg__moon {
		left: 8px;
	}
`;

const ScrollBar = styled.div`
	position: relative;
	width: 0;
	height: 5px;
	left: 0;
	top: -3px;
	background: ${(props) => props.theme.accentColor};
	transition: width 0.3s ease;
	z-index: 10;
`;

const Header = () => {
	/****************************************
  * 다크모드, 라이트 모드 구현
  * Recoil 상태관리
  /***************************************/
	const [darkMode, setDarkMode] = useRecoilState(isDarkAtom);

	const toggleDarkMode = () => {
		setDarkMode((current) => !current);
	};

	/****************************************
  * Header 메뉴 = 스크롤 이벤트 대응
  * 스크롤 이벤트 발생시 Header 메뉴 변경
  /***************************************/
	const { scrollY } = useScroll();

	/****************************************
  * Header 상단 고정 Progress 메뉴
  * 스크롤 이벤트 발생시 페이징 Scroll을 %로 반환
  /***************************************/
	const progressRef = useRef<any>(null);
	const scrollPersent = () => {
		const viewHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		let scrollVal = (scrollY / viewHeight) * 100;
		progressRef.current.style.width = `${scrollVal}%`;
	};
	useEffect(() => {
		scrollPersent();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [scrollY]);

	/****************************************
  * 모바일 메뉴바 이벤트
  /***************************************/
	const mobileMenuRef = useRef<any>(null);
	const btnMobileRef = useRef<any>(null);
	const [menuView, setMenuView] = useState(false);
	const btnMobileView = () => {
		setMenuView((current) => !current);
		if (menuView) {
			btnMobileRef.current.classList.remove('is-active');
			mobileMenuRef.current.classList.remove('is-active');
		} else {
			btnMobileRef.current.classList.add('is-active');
			mobileMenuRef.current.classList.add('is-active');
		}
	};

	return (
		<HeaderWrap className={scrollY > 0 ? 'fixed' : ''}>
			<header>
				<HeaderLogo>HEO.D.K</HeaderLogo>
				<PC>
					<nav>
						<WebMenu className='menu__wrap'>
							<li>
								<a
									href='https://whales.tistory.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href='https://github.com/heodokyung/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Github
								</a>
							</li>
							<li>
								<a
									href='https://github.com/heodokyung/study-list'
									target='_blank'
									rel='noopener noreferrer'
								>
									Study
								</a>
							</li>
						</WebMenu>
					</nav>
				</PC>

				<Mobile>
					<nav>
						<BtnMobile type='button' onClick={btnMobileView} ref={btnMobileRef}>
							<span>
								<i hidden>모바일메뉴</i>
							</span>
						</BtnMobile>
						<MobileMenu className='menu__wrap' ref={mobileMenuRef}>
							<li>
								<a
									href='https://whales.tistory.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href='https://github.com/heodokyung/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Github
								</a>
							</li>
							<li>
								<a
									href='https://github.com/heodokyung/markup-guide/blob/master/README.md'
									target='_blank'
									rel='noopener noreferrer'
								>
									Markup Guide
								</a>
							</li>
						</MobileMenu>
					</nav>
				</Mobile>

				<ThemeButton type='button' onClick={toggleDarkMode} darkMode={darkMode}>
					{darkMode ? (
						<BsFillSunFill className='svg__sun' />
					) : (
						<BsFillMoonFill className='svg__moon' />
					)}
				</ThemeButton>
			</header>
			<ScrollBar ref={progressRef} />
		</HeaderWrap>
	);
};
export default Header;
