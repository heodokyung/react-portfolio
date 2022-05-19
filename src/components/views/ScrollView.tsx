import React from 'react';
import styled from 'styled-components';

const ProjectSummary = styled.article`
  margin-top: 50px;
  .guideTxt {
    position: relative;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 16px;
  }
`;

const ScrollWrap = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  font-size: 0;
`;

const ScrollElement = styled.li`
  display: inline-block;
  width: 200px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.subListColor};
  img {
    width: 100%;
  }
  & + & {
    margin-left: 10px;
  }
`;

interface IimgData {
  alt: string | undefined;
  src: string | undefined;
}

const ScrollView = ({ imgData }: { imgData: any }) => {
  return (
    <ProjectSummary>
      <p className="guideTxt">※ 좌,우로 스크롤하여 확인하실 수 있어요!</p>
      <ScrollWrap>
        {imgData.map((item: IimgData, idx: number) => (
          <ScrollElement key={idx}>
            <img alt={item.alt} src={item.src} />
          </ScrollElement>
        ))}
      </ScrollWrap>
    </ProjectSummary>
  );
};

export default ScrollView;
