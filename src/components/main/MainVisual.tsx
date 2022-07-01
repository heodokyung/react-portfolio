import styled, { keyframes } from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';

const mainMouseAni = keyframes`
  0%{top:20%;}
  100%{top:80%;}
`;

const VisualWrap = styled.article`
	position: relative;
	height: 750px;
	background: url(${require('../../images/main/bg_main_visual.jpg')}) no-repeat
		50% 50%;
	background-attachment: fixed;
	background-size: cover;
	@media screen and (max-width: 960px) {
		height: 420px;
	}
`;

const VisualTitleWrap = styled.div`
	padding: 32px 24px;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.4);
`;

const VisualTitle = styled.p`
	font-size: 72px;
	line-height: 84px;
	font-weight: bold;
	color: #fff;
	@media screen and (max-width: 960px) {
		font-size: 42px;
		line-height: 50px;
	}
`;

const TypingEffect = styled.article`
	margin-top: 20px;
	font-size: 18px;
	line-height: 22px;
	color: #fff;
`;

const VisualGuide = styled.div`
	position: absolute;
	left: 50%;
	margin-left: -18px;
	bottom: 45px;
	z-index: 10;
	width: 36px;
	height: 54px;
	border-radius: 20px;
	border: 2px solid #fff;
	&:after {
		display: inline-block;
		position: absolute;
		width: 4px;
		height: 4px;
		background: #fff;
		border-radius: 50%;
		content: '';
		top: 20%;
		left: 45%;
		animation: ${mainMouseAni} 2s infinite ease-in-out;
	}
`;

const MainVisual = () => {
	return (
		<VisualWrap>
			<VisualTitleWrap>
				<VisualTitle>Front-End</VisualTitle>
				<TypingEffect>
					<ReactTypingEffect
						eraseSpeed={100}
						speed={100}
						eraseDelay={1000}
						typingDelay={1000}
						text={[
							'안녕하세요!',
							'항상 보다 좋은 결과물과 코드를 위해서 팀원들과 소통하고 협업합니다.',
							'잘 부탁드립니다. 감사합니다 :)',
						]}
					/>
				</TypingEffect>
			</VisualTitleWrap>
			<VisualGuide>
				<i hidden>Scroll</i>
			</VisualGuide>
		</VisualWrap>
	);
};

export default MainVisual;
