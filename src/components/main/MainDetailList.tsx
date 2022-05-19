import React from 'react';
import styled from 'styled-components';

const DetailListEl = styled.article`
  position: relative;
  padding-left: 20px;
  color: ${(props) => props.theme.textColor};
  border-radius: 4px;
  padding-bottom: 20px;

  :before,
  :after {
    display: block;
    position: absolute;
    content: '';
  }

  &:before {
    left: 0;
    top: 3px;
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border: 3px solid ${(props) => props.theme.textColor};
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgColor};
    z-index: 5;
  }
  &:after {
    display: block;
    position: absolute;
    content: '';
    top: 7px;
    bottom: 0;
    left: 5px;
    border-left: 1px dashed ${(props) => props.theme.textColor};
  }

  &:last-of-type {
    padding-bottom: 0;
  }
  &:last-of-type:after {
    display: none;
  }
  .title {
    font-weight: bold;
    font-size: 18px;
  }
  .work__list--detail {
    margin-top: 12px;
    li {
      position: relative;
      padding-left: 10px;
      font-size: 14px;
      line-height: 18px;
    }
    li + li {
      margin-top: 6px;
    }
    li:before {
      display: block;
      position: absolute;
      left: 0;
      top: 8px;
      content: '';
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.textColor};
    }
  }
`;

const MainDetailList = ({ details }: { details: any }) => {
  return (
    <>
      <DetailListEl>
        <dl>
          <dt className="title">{details.names}</dt>
          <dd>
            <ul className="work__list--detail">
              <li>{details.date}</li>
              {details.department && <li>{details.department}</li>}
              {details.rank && <li>{details.rank}</li>}
              {details.details && <li>{details.details}</li>}
              {details.url && (
                <li>
                  사이트 바로가기:&nbsp;
                  <a
                    href={details.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    {details.url}
                  </a>
                </li>
              )}
            </ul>
          </dd>
        </dl>
      </DetailListEl>
    </>
  );
};

export default MainDetailList;
