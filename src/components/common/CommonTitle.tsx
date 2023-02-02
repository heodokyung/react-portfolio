import styled from 'styled-components';

const Title = styled.h2`
	position: relative;
	display: inline-block;
	padding-bottom: 12rem;
	font-size: 64rem;
	line-height: 78rem;
	font-weight: bold;
	margin-bottom: 30rem;
	color: ${(props) => props.theme.textColor};
	// 미디어 쿼리 : 반응형 분기
	@media screen and (max-width: 960px) {
		margin-bottom: 20rem;
		font-size: 24rem;
		line-height: 28rem;
	}
	:after {
		position: absolute;
		border-bottom: 2px solid ${(props) => props.theme.textColor};
		width: 100%;
		bottom: -4rem;
		left: 4rem;
		right: 0;
		content: '';
	}
	&.main:after {
		width: 30%;
		border-width: 4rem;
	}
`;

interface propsType {
	view?: string;
	title: string;
}
const CommonTitle = (props: propsType) => {
	return <Title className={props.view}>{props.title}</Title>;
};

export default CommonTitle;
