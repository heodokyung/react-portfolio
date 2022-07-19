import styled, { keyframes } from 'styled-components';
import { useScroll } from './useScroll';

/****************************************
* Header CSS-in-js 정의 부분
/***************************************/
const fadeInAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FooterWrap = styled.article`
	padding: 50px 0;
	background-color: ${(props) => props.theme.listColor};
	color: ${(props) => props.theme.textColor};
	font-size: 16px;
	footer {
		max-width: 1920px;
		margin: 0 auto;
		padding: 0 24px;
		height: 100%;
		address {
			margin-top: 15px;
			a:first-of-type {
				position: relative;
				margin-right: 10px;
				padding-right: 10px;
			}
			a:first-of-type:after {
				position: absolute;
				display: block;
				right: 0;
				top: 50%;
				margin-top: -4px;
				width: 1px;
				height: 12px;
				content: '';
				background-color: ${(props) => props.theme.textColor};
			}
		}
	}
`;

const BtnScrollTop = styled.button`
	position: fixed;
	display: none;
	width: 55px;
	height: 63px;
	background-size: cover;
	right: 15px;
	bottom: 50px;
	border-radius: 8px;
	z-index: 10;
	background: url(${require('../../images/common/btn_scroll.png')}) no-repeat
		50% 50%;
	background-size: contain;
	&.is-active {
		display: block;
		animation: ${fadeInAni} 0.65s forwards ease-in-out;
	}
`;

/****************************************
* Header Function 정의 부분
/***************************************/

const Footer = () => {
	const { scrollY } = useScroll();

	// 최상단 화면 이동
	const handleTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<FooterWrap>
			<footer>
				<article>Copyright © HEO.D.K All rights reserved.</article>
				<address>
					<a href='mailto:limewhale@daum.net'>limewhale@daum.net</a>
					<a
						href='https://github.com/heodokyung/markup-guide/blob/master/README.md'
						target='_blank'
						rel='noopener noreferrer'
					>
						Markup Guide
					</a>
				</address>
			</footer>
			<BtnScrollTop
				type='button'
				className={scrollY > 0 ? 'is-active' : ''}
				onClick={handleTop}
			>
				<i hidden>Scroll Top</i>
			</BtnScrollTop>
		</FooterWrap>
	);
};

export default Footer;
