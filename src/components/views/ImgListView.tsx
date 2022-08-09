import styled from 'styled-components';

const ImgListWrap = styled.article`
	margin-top: 50px;
`;
const ImgCont = styled.div`
	& + & {
		margin-top: 30px;
	}
`;
const ImgTitle = styled.p`
	font-size: 18px;

	text-align: left;
	margin-bottom: 10px;
	@media screen and (max-width: 500px) {
		font-size: 14px;
	}
`;
const Img = styled.img`
	width: 100%;
	height: auto;
	&.mobile {
		width: 40vw;
		@media screen and (max-width: 500px) {
			width: 100%;
		}
	}
`;
interface IImgData {
	src: string | undefined;
	alt: string | undefined;
	option?: boolean;
}

const ImgListView = ({ imgData }: { imgData: any }) => {
	return (
		<ImgListWrap>
			{imgData.map((item: IImgData, idx: number) => (
				<ImgCont key={idx}>
					<ImgTitle>
						{idx + 1}.{item.alt}
					</ImgTitle>

					<Img
						src={item.src}
						alt={item.alt}
						className={item.option ? 'mobile' : ''}
					/>
				</ImgCont>
			))}
		</ImgListWrap>
	);
};

export default ImgListView;
