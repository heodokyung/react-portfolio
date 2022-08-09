import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
	position: relative;
	padding-bottom: 12px;
	font-size: 40px;
	line-height: 44px;
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
		bottom: 0;
		left: 0;
		right: 0;
		content: '';
	}
	&.main:after {
		width: 35px;
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
