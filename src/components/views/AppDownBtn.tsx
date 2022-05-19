import styled from 'styled-components';

const BtnDownWrap = styled.article`
  margin-top: 40px;
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const BtnDown = styled.a`
  display: inline-block;
  width: 200px;
  font-size: 18px;
  text-align: center;
  height: 48px;
  line-height: 48px;
  border-radius: 4px;
  font-weight: bold;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  & + & {
    margin-left: 8px;
  }
`;

interface ILink {
  googleLink: string;
  appleLink: string;
}

const AppDownBtn = ({ googleLink, appleLink }: ILink) => {
  return (
    <BtnDownWrap>
      <p className="title">[돈 버는 소비습관 핀크]</p>
      <BtnDown href={googleLink} target="_blank">
        Google Play
      </BtnDown>
      <BtnDown href={appleLink} target="_blank">
        App Store
      </BtnDown>
    </BtnDownWrap>
  );
};

export default AppDownBtn;
