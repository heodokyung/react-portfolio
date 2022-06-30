import React from 'react';
import styled from 'styled-components';
const SortingWrap = styled.article`
	padding: 12px 24px;
	font-size: 16px;
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.subListColor};
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	border-radius: 8px;
	overflow-x: auto;
	white-space: nowrap;
`;

const SortingButton = styled.button`
	padding: 10px 24px;
	border: 1px solid ${(props) => props.theme.textColor};
	border-radius: 4px;
	margin-left: 10px;
	font-weight: bold;
	color: inherit;
	&.is-active {
		background-color: ${(props) => props.theme.textColor};
		color: ${(props) => props.theme.bgColor};
		border-color: ${(props) => props.theme.bgColor};
	}
`;

type SortProps = {
	sortingList: any;
	SortCategoryType: any;
};

const SortingOpt = ({ sortingList, SortCategoryType }: SortProps) => {
	return (
		<SortingWrap>
			Sort:
			<SortingButton
				type='button'
				onClick={(event) => {
					sortingList(event, SortCategoryType.ALL);
				}}
				className='is-active'
			>
				ALL
			</SortingButton>
			<SortingButton
				type='button'
				onClick={(event) => {
					sortingList(event, SortCategoryType.WEB);
				}}
			>
				Web
			</SortingButton>
			<SortingButton
				type='button'
				onClick={(event) => {
					sortingList(event, SortCategoryType.MOBILE);
				}}
			>
				Mobile
			</SortingButton>
			<SortingButton
				type='button'
				onClick={(event) => {
					sortingList(event, SortCategoryType.RESPONSIVE);
				}}
			>
				Responsive
			</SortingButton>
		</SortingWrap>
	);
};

export default SortingOpt;
