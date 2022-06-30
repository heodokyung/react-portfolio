import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
const fadeInAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const moreViewAni = keyframes`
  from {
    bottom: -300px;
  }
  to {
    bottom: 50px;
  }
`;

const Mask = styled.div`
	display: none;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	color: #fff;
	.title {
		margin-top: 60px;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
	}
	.date {
		display: block;
		font-size: 16px;
		margin-top: 10px;
		letter-spacing: 0;
	}
	.more {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		left: 50%;
		width: 108px;
		margin-left: -54px;
		bottom: -300%;
		font-size: 16px;
		font-weight: bold;
		padding: 10px 0;
		border-top: 2px solid #fff;
		border-bottom: 2px solid #fff;
		color: #fff;
		text-align: center;
		padding-left: 8px;
		&:after {
			display: inline-block;
			position: relative;
			top: -2px;
			right: -3px;
			content: '+';
		}
		@media screen and (max-width: 650px) {
			display: none;
		}
	}
`;

const ProjectListEl = styled.li`
	position: relative;
	overflow: hidden;
	border-radius: 4px;
	a {
		display: block;
	}
	&.is-active:hover img,
	&.is-active:focus img {
		transform: scale(1.1);
		transition: transform 0.7s;
	}
	&.is-active .more {
		animation: ${moreViewAni} 0.35s forwards ease-in-out;
	}
	&.is-active ${Mask} {
		display: block;
	}

	&.none {
		display: none;
	}

	&[data-view='true'] {
		display: block;
		animation: ${fadeInAni} 0.65s forwards ease-in-out;
	}

	&[data-view='false'] {
		display: none;
	}
`;

const ProjectIcoWrap = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
	z-index: 5;
`;

const LabelIco = styled.span`
	display: inline-block;
	padding: 4px 6px;
	font-size: 12px;
	font-family: Arial;
	vertical-align: top;
	border-radius: 8px;
	background: rgba(2, 2, 2, 0.6);
	color: #fff;
	& + & {
		margin-left: 5px;
	}
	&.new {
		color: ${(props) => props.theme.accentColor};
	}
`;
const ProjectImg = styled.img`
	width: 100%;
`;

type ProjectProps = {
	projectEl: any;
	listEventIn(index: number): void;
	listEventLeave(): void;
	index: number;
};

const ProjectListElement = ({
	projectEl,
	listEventIn,
	listEventLeave,
	index,
}: ProjectProps) => {
	return (
		<ProjectListEl
			className={
				projectEl.eventActive === true
					? `${projectEl.gubun} is-active`
					: `${projectEl.gubun}`
			}
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
			data-view={projectEl.eventShow === true ? 'true' : 'false'}
		>
			<Link
				to={`${process.env.PUBLIC_URL}/details/`}
				state={{
					viewId: projectEl.id,
					helmeTitle: projectEl.title,
					persent: projectEl.persent,
				}}
			>
				<ProjectIcoWrap>
					{projectEl.new ? <LabelIco className='new'>NEW</LabelIco> : null}
					<LabelIco>{projectEl.leng}</LabelIco>
					<LabelIco>{projectEl.type}</LabelIco>
				</ProjectIcoWrap>
				<ProjectImg src={projectEl.imgSrc} alt={`${projectEl.type} 썸네일`} />
				<Mask>
					<p className='title'>
						<em dangerouslySetInnerHTML={{ __html: `${projectEl.title}` }} />
						<span className='date'>{projectEl.date}</span>
					</p>
					<span className='more'>자세히보기</span>
				</Mask>
			</Link>
		</ProjectListEl>
	);
};

export default ProjectListElement;
