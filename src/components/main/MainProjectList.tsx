import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CommonTitle from '../common/CommonTitle';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTrackVisibility } from 'react-intersection-observer-hook';

/****************************************
* CSS-in-js 정의 부분
/***************************************/
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

const ProjectListWrap = styled.article`
  padding: 32px 24px;
`;

const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  opacity: 0;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  &.is-active {
    animation: ${fadeInAni} 0.65s forwards ease-in-out;
    animation-delay: 0.4s;
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
  &.is-active .mask {
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
  .mask {
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

interface IProJect {
  gubun: string;
  type: string;
  leng: string;
  new: boolean;
  date: string;
  link: string;
  id: string;
  imgSrc: string;
  title: string;
  persent: number;
  desc?: string;
  eventShow?: boolean;
  eventActive?: boolean;
}

const MainProjectList = () => {
  /****************************************
   *  프로젝트 List => JSOM 데이터 받아오기
   *****************************************/
  const [loading, setLoading] = useState(true);
  const [projectList, setProjectList] = useState<IProJect[]>([]);

  useEffect(() => {
    // 즉시 실행하기 : 단 한번만 호출
    (async () => {
      const response = await fetch(
        'https://heodokyung.github.io/portfolio-data-json/portfolio_project.json'
      );
      const json = await response.json();

      // 이벤트 체크하는 함수 넣기(mouse, focus)
      setProjectList(
        json.data.portfolio.map(
          (item: { eventActive: boolean; eventShow: boolean }) => {
            item.eventActive = false;
            item.eventShow = true;
            return item;
          }
        )
      );
      setLoading(false);
    })();
  }, []);

  /****************************************
  * IntersectionObserver 정의
  * 옵션 정의
  * - `useTrackVisibility` also returns a tuple like `useIntersectionObserver`.
  * - First item is the same `ref` callback to set the node to observe.
  * - Second item is an object that we can use to decide if a node is visible.
  * - `entry`: Same object which is returned by `useIntersectionObserver`.
  * - `rootRef`: Same ref callback which is returned by `useIntersectionObserver`.
  * - `isVisible`: Becomes true/false based on the response of `IntersectionObserver`.
  * - `wasEverVisible`: When our observed node becomes visible once, this flag becomes `true` and stays like that.
  * const [targetRef, { entry, rootRef, isVisible, wasEverVisible }] =
    useTrackVisibility();
  * https://www.npmjs.com/package/react-intersection-observer-hook
  /***************************************/

  const [targetRef, { wasEverVisible }] = useTrackVisibility();
  useEffect(() => {}, [wasEverVisible]);

  /****************************************
   *  List 이벤트 공통 (Mouse, Focus)
   *****************************************/
  const listEventIn = (index: number) => {
    setProjectList(
      projectList.map((item, i) => {
        if (i === index) {
          item.eventActive = true;
        } else {
          item.eventActive = false;
        }
        return item;
      })
    );
  };

  const listEventLeave = () => {
    setProjectList(
      projectList.map((item) => {
        item.eventActive = false;
        return item;
      })
    );
  };

  /****************************************
   *  List 이벤트 : Sorting
   *****************************************/
  const sorting = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    _type: string
  ) => {
    const { currentTarget } = event;

    siblings(currentTarget, 'is-active');
    currentTarget.classList.add('is-active');
    setProjectList(
      projectList.map((item) => {
        if (_type === 'all') {
          item.eventShow = true;
        } else {
          if (item.gubun.includes(_type)) {
            item.eventShow = true;
          } else {
            item.eventShow = false;
          }
        }
        return item;
      })
    );

    function siblings(t: any, _class: string) {
      const children = t.parentElement.children;
      for (var i = 0; i < children.length; i++) {
        children[i].classList.remove(_class);
      }
    }
  };

  return (
    <ProjectListWrap>
      <CommonTitle title={'PROJECT'} view={'main'} />

      <SortingWrap>
        Sort:
        <SortingButton
          type="button"
          onClick={(event) => {
            sorting(event, 'all');
          }}
          className="is-active"
        >
          ALL
        </SortingButton>
        <SortingButton
          type="button"
          onClick={(event) => {
            sorting(event, 'w');
          }}
        >
          Web
        </SortingButton>
        <SortingButton
          type="button"
          onClick={(event) => {
            sorting(event, 'm');
          }}
        >
          Mobile
        </SortingButton>
        <SortingButton
          type="button"
          onClick={(event) => {
            sorting(event, 'r');
          }}
        >
          Responsive
        </SortingButton>
      </SortingWrap>

      {loading ? (
        'Loading...'
      ) : (
        <ProjectList
          ref={targetRef}
          className={`${wasEverVisible && 'is-active'}`}
        >
          {projectList.map((projectEl, index) => (
            <ProjectListEl
              key={index}
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
                  {projectEl.new ? (
                    <LabelIco className="new">NEW</LabelIco>
                  ) : null}
                  <LabelIco>{projectEl.leng}</LabelIco>
                  <LabelIco>{projectEl.type}</LabelIco>
                </ProjectIcoWrap>
                <ProjectImg
                  src={projectEl.imgSrc}
                  alt={`${projectEl.type} 썸네일`}
                />
                <div className="mask">
                  <p className="title">
                    <em
                      dangerouslySetInnerHTML={{ __html: `${projectEl.title}` }}
                    />
                    <span className="date">{projectEl.date}</span>
                  </p>
                  <span className="more">자세히보기</span>
                </div>
              </Link>
            </ProjectListEl>
          ))}
        </ProjectList>
      )}
    </ProjectListWrap>
  );
};

export default MainProjectList;
