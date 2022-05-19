import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const ProgressWrap = styled.article`
  margin: 50px 0 30px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    margin: 40px 0 15px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const Graph = styled.article`
  position: relative;
  height: 22px;
  border-radius: 4px;
  background: #eee;
  width: calc(100% - 70px);
  .is-active {
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 1;
    width: 0;
    height: 100%;
    border-radius: 4px 4px 4px 4px;
    background: ${(props) => props.theme.accentColor};
    pointer-events: none;
    transition: 1.2s;
  }
`;

const GuideTooltip = styled.article`
  margin: 0 auto;
  position: absolute;
  display: inline-block;
  font-size: 12px;
  padding: 4px 7px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e9ddf9;
  border-radius: 4px;
  color: #222;
  font-weight: bold;
  text-align: center;
  top: -32px;
  right: -24px;
  transform: translateX(-50%);
  :before {
    border: 6px solid;
    border-color: #e9ddf9 transparent transparent transparent;
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 4px 0 4px;
  }
  :after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
    border: 5px solid;
    border-color: #fff transparent transparent transparent;
    border-width: 5px 3px 0 3px;
  }
`;

interface IProgress {
  persent: number;
}

const Progress = ({ persent }: IProgress) => {
  const graphRef = useRef<any>(null);
  const total = 100;
  const graphRate = () => {
    const totalValue = (persent / total) * 100;
    setTimeout(function () {
      graphRef.current.style.width = `${totalValue}%`;
    }, 300);
  };

  useEffect(() => {
    graphRate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProgressWrap>
      <Title>참여도: </Title>
      <Graph>
        <span ref={graphRef} className="is-active">
          <GuideTooltip>
            <CountUp start={0} end={persent} duration={1.75} suffix=" %" />
          </GuideTooltip>
        </span>
      </Graph>
    </ProgressWrap>
  );
};

export default Progress;
