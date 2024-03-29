import styled, { keyframes } from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';

const mainMouseAni = keyframes`
  0%{top:20%;}
  100%{top:80%;}
`;

const VisualWrap = styled.article`
	position: relative;
	margin:0 auto;
	height: 750rem;
	background: url(${require('../../images/main/bg_main_visual.jpg')}) no-repeat 50% 50%;
	background-attachment: fixed;
	background-size: cover;
	@media screen and (max-width: 960px) {
		height: 420px;
		width: 100%;
	}
`;

const VisualTitleWrap = styled.div`
	padding: 32rem 24rem;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.4);
`;

const VisualTitle = styled.p`
	font-size: 72rem;
	line-height: 84rem;
	font-weight: bold;
	color: #fff;
	@media screen and (max-width: 960px) {
		font-size: 42rem;
		line-height: 50rem;
	}
`;

const TypingEffect = styled.article`
	margin-top: 20rem;
	font-size: 18rem;
	line-height: 22rem;
	color: #fff;
`;

const VisualGuide = styled.div`
	position: absolute;
	left: 50%;
	margin-left: -18rem;
	bottom: 45rem;
	z-index: 10;
	width: 36rem;
	height: 54rem;
	border-radius: 20rem;
	border: 2rem solid #fff;
	&:after {
		display: inline-block;
		position: absolute;
		width: 4rem;
		height: 4rem;
		background: #fff;
		border-radius: 50%;
		content: '';
		top: 20%;
		left: 45%;
		animation: ${mainMouseAni} 2s infinite ease-in-out;
	}
`;

const VisualWrapper = styled.div`
	position: relative;
	max-width:1920px;
	left:50%;
	transform: translate(-50%);
`


const MainVisual = () => {
	return (
		<VisualWrap>
			<VisualTitleWrap>
				<VisualWrapper>
					<VisualTitle>UI DEVELOPER</VisualTitle>
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
				</VisualWrapper>
			</VisualTitleWrap>
			<VisualGuide>
				<i hidden>Scroll</i>
			</VisualGuide>
		</VisualWrap>
	);
};

export default MainVisual;
