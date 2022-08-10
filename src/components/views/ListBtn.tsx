import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListBtnMove = styled(Link)`
	display: block;
	width: 100%;
	font-size: 18px;
	text-align: center;
	height: 48px;
	line-height: 48px;
	border-radius: 4px;
	font-weight: bold;
	margin-top: 20px;
	background-color: ${(props) => props.theme.textColor};
	color: ${(props) => props.theme.bgColor};
`;

const ListBtn = () => {
	return <ListBtnMove to={'/'}>이전으로 돌아가기</ListBtnMove>;
};

export default ListBtn;
