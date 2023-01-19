import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ISkillList } from '../../atoms';
import { isDarkAtom } from './../../atoms';

const SkillListEl = styled.li`
	display: inline-block;
	position: relative;
	height: 260px;
	text-align: center;
	color: ${(props) => props.theme.textColor};
	border: 1px solid ${(props) => props.theme.listColor};
	border-radius: 4px;
	transition: 0.6s;
	transform-style: preserve-3d;
	background-repeat:no-repaet;
	background-size:cover;
	background-position:50% 50%;
	&[data-theme='dark'] { background-image:url(${require('../../images/main/bg_box_dark2.jpg')})}
	&[data-theme='light'] {background-image:url(${require('../../images/main/bg_box_light.jpg')})}

	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

	.front,
	.back {
		position: absolute;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		backface-visibility: hidden;
	}

	.front {
		z-index: 5;
		transform: rotateY(0deg);
		.title {
			margin-top: 14px;
			text-align: center;
			width: 100%;
			font-weight:bold;
			font-size:18px;
		}
	}

	.back {
		transform: rotateY(180deg);
		padding: 20px;
		background: ${(props) => props.theme.subListColor};
		color: ${(props) => props.theme.textColor};
		font-size: 14px;
		line-height: 18px;
		word-break: keep-all;
		a {
			display: block;
			position: absolute;
			left: 20px;
			right: 20px;
			bottom: 15px;
			padding: 10px 0;
			border-radius: 4px;
			border: 1px solid ${(props) => props.theme.textColor};
		}
	}

	.ico__img--wrap {
		display: inline-block;
		width: 64px;
		height: 64px;
		margin-top: 70px;
		img {
			width: 100%;
		}
	}

	.mask {
		display: none;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		color: #fff;
		.mask__title {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			margin: -30px 0 0 -30px;
			text-align: center;
			color: #fff;
			border: 2px solid #fff;
			line-height: 60px;
			font-weight: bold;
			font-size: 16px;
			z-index: 5;
		}
		&.is-mask-active {
			display: block;
		}
	}

	&.is-active {
		transform: rotateY(180deg);
	}
`;

type SkillProps = {
	skillEl: ISkillList;
	listEventIn(index: number): void;
	listEventLeave(): void;
	listDetailView(index: number): void;
	index: number;
};

const SkillListElement = ({
	skillEl,
	listEventIn,
	listEventLeave,
	listDetailView,
	index,
}: SkillProps) => {

	const isDarkMode = useRecoilValue(isDarkAtom);
	return (
		<SkillListEl
			key={skillEl.id}
			className={skillEl.eventDetail === true ? 'is-active' : ''}
			data-theme={isDarkMode ? 'dark' : 'light'}
			onMouseEnter={() => {
				listEventIn(index);
			}}
			onMouseLeave={() => {
				listEventLeave();
			}}
			onFocus={() => {
				listEventIn(index);
			}}
			onBlur={() => {
				listEventLeave();
			}}
			onClick={() => {
				listDetailView(index);
			}}
			role='button'
		>
			<div className='front'>
				<span className='ico__img--wrap'>
					<img src={skillEl.imgSrc} alt={skillEl.id} />
				</span>
				<p className='title'>{skillEl.names}</p>
				<div
					className={
						skillEl.eventMask === true ? 'mask is-mask-active' : 'mask'
					}
				>
					<span className='mask__title'>CLICK</span>
				</div>
			</div>
			<div className='back'>
				<p>{skillEl.details}</p>
				<a href={skillEl.url} target='_blank' rel='noopener noreferrer'>
					자세히 알아보기
				</a>
			</div>
		</SkillListEl>
	);
};

export default SkillListElement;
