import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CommonTitle from '../common/CommonTitle';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player';
import { useTrackVisibility } from 'react-intersection-observer-hook';

/****************************************
* CSS-in-js 정의 부분
/***************************************/

const zoomIn = keyframes`
	from {
		opacity: 0;
		transform: scale3d(.3, .3, .3);
	}

	50% {
		opacity: 1;
	}

  100% {
    opacity: 1;
  }
`;

const SkillListWrap = styled.article`
  padding: 32px 24px;
`;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  opacity: 0;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
  &.is-active {
    animation: ${zoomIn} 0.65s forwards ease-in-out;
    animation-delay: 0.4s;
  }
`;

const SkillListEl = styled.li`
  display: inline-block;
  position: relative;
  height: 210px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.listColor};
  border-radius: 4px;
  transition: 0.6s;
  transform-style: preserve-3d;
  background-color: ${(props) => props.theme.subListColor};

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
      position: absolute;
      top: 130px;
      left: 0;
      right: 0;
      text-align: center;
      width: 100%;
    }
  }

  .back {
    transform: rotateY(180deg);
    padding: 20px;
    background: ${(props) => props.theme.subListColor};
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
    line-height: 16px;
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
    margin-top: 40px;
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
interface ISkillList {
  imgSrc: string;
  id: string;
  names: string;
  details: string;
  url: string;
  eventMask: boolean;
  eventDetail: boolean;
}

const MainSkillList = () => {
  const [skillList, setSkillList] = useState<ISkillList[]>([]);
  const [lotteData, setLotteData] = useState();

  /****************************************
  * IntersectionObserver 정의
  * 옵션 정의
  * MainProjectList 참조
  /***************************************/

  const [targetRef, { wasEverVisible }] = useTrackVisibility();
  useEffect(() => {}, [wasEverVisible]);

  useEffect(() => {
    // 즉시 실행하기 : 단 한번만 호출
    (async () => {
      // Skill List
      const response = await fetch(
        'https://heodokyung.github.io/portfolio-data-json/portfolio_skill.json'
      );
      const json = await response.json();
      setSkillList(
        json.data.skill.map(
          (item: { eventMask: boolean; eventDetail: boolean }) => {
            item.eventMask = false;
            item.eventDetail = false;
            return item;
          }
        )
      );

      // Lotte JSON
      const response2 = await fetch(
        'https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json'
      );
      const json2 = await response2.json();
      setLotteData(json2);
    })();
  }, []);

  /****************************************
   *  List 이벤트 공통 (Mouse, Focus)
   ****************************************/
  const listEventIn = (index: number) => {
    setSkillList(
      skillList.map((item, i) => {
        if (i === index) {
          item.eventMask = true;
        } else {
          item.eventMask = false;
        }
        return item;
      })
    );
  };
  const listEventLeave = () => {
    setSkillList(
      skillList.map((item) => {
        item.eventMask = false;
        return item;
      })
    );
  };

  /****************************************
   *  List 이벤트 : click
   ****************************************/

  const listDetailView = (index: number) => {
    // console.log(event.target);
    setSkillList(
      skillList.map((item, i) => {
        if (i === index && item.eventDetail === false) {
          item.eventDetail = true;
        } else {
          item.eventDetail = false;
        }
        return item;
      })
    );
  };

  return (
    <SkillListWrap>
      <CommonTitle title={'SKILL'} view={'main'} />
      <Lottie
        loop
        animationData={lotteData}
        play
        style={{ width: '100%', height: 300, background: 'transparent' }}
      />
      <SkillList ref={targetRef} className={`${wasEverVisible && 'is-active'}`}>
        {skillList.map((skillEl, index) => (
          <SkillListEl
            key={skillEl.id}
            className={skillEl.eventDetail === true ? 'is-active' : ''}
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
            role="button"
          >
            <div className="front">
              <span className="ico__img--wrap">
                <img src={skillEl.imgSrc} alt={skillEl.id} />
              </span>
              <p className="title">{skillEl.names}</p>
              <div
                className={
                  skillEl.eventMask === true ? 'mask is-mask-active' : 'mask'
                }
              >
                <span className="mask__title">CLICK</span>
              </div>
            </div>
            <div className="back">
              <p>{skillEl.details}</p>
              <a href={skillEl.url} target="_blank" rel="noopener noreferrer">
                자세히 알아보기
              </a>
            </div>
          </SkillListEl>
        ))}
      </SkillList>
    </SkillListWrap>
  );
};

export default MainSkillList;
