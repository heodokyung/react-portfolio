import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
	position: relative;
	display: inline-block;
	padding-bottom: 12px;
	font-size: 64px;
	line-height: 78px;
	font-weight: bold;
	margin-bottom: 30px;
	color: ${(props) => props.theme.textColor};
	// 미디어 쿼리 : 반응형 분기
	@media screen and (max-width: 960px) {
		margin-bottom: 20px;
		font-size: 24px;
		line-height: 28px;
	}
	:after {
		position: absolute;
		border-bottom: 2px solid ${(props) => props.theme.textColor};
		width: 100%;
		bottom: -4px;
		left: 4px;
		right: 0;
		content: '';
	}
	&.main:after {
		width: 30%;
		border-width: 4px;
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
