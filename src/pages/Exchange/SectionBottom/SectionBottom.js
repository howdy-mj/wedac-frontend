import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import NavDetail0 from "./NavDetail0/NavDetail0";
import NavDetail1 from "./NavDetail1/NavDetail1";
import NavDetail2 from "./NavDetail2/NavDetail2";
import NavDetail3 from "./NavDetail3/NavDetail3";
import MiddleBottomRight from "../MiddleBottomRight/MiddleBottomRight";
//const tabs = [NavDetail0, NavDetail1, NavDetail2, NavDetail3];

const selectedTradeInfo = {
  0: <NavDetail0 />,
  1: <NavDetail1 />,
  2: <NavDetail2 />,
  3: <NavDetail3 />,
};

function SectionBottom() {
  const [activeTab, setActiveTab] = useState(0);
  const selectedTradeNum = (id) => setActiveTab(id);

  return (
    <SectionBottomPage>
      <SectionBottomLeft>
        <SectionBottomLeftNav>
          <NavDetail
            clickActive={activeTab === 0}
            onClick={() => selectedTradeNum(0)}
          >
            미체결
          </NavDetail>
          <NavDetail
            clickActive={activeTab === 1}
            onClick={() => selectedTradeNum(1)}
          >
            체결
          </NavDetail>
          <NavDetail
            clickActive={activeTab === 2}
            onClick={() => selectedTradeNum(2)}
          >
            일별
          </NavDetail>
          <NavDetail
            clickActive={activeTab === 3}
            onClick={() => selectedTradeNum(3)}
          >
            정보
          </NavDetail>
        </SectionBottomLeftNav>
        {selectedTradeInfo[activeTab]}
      </SectionBottomLeft>
      {/* <RightBottom>
        <MiddleBottomRight />
      </RightBottom> */}
      <SectionBottomRight>
        <img
          src={
            "data:image/png;base64,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"
          }
          alt="ad"
        />
      </SectionBottomRight>
    </SectionBottomPage>
  );
}

export default SectionBottom;

const SectionBottomPage = styled.div`
  width: 100%; //반응형??
  padding-top: 8px;
  display: flex;

  @media ${(props) => props.theme.tabletL} {
    position: absolute;
    bottom: 0;
  }
  @media ${(props) => props.theme.mobile} {
    position: absolute;
    bottom: -347px;
    margin-top: 8px;
    /* width: 700px; */
    height: 350px;
  }
`;

const SectionBottomLeft = styled.div`
  margin-right: 8px;
  border: 1px solid #ebeef6;
  /* border: 2px solid red; */
  background-color: #fff;
  /* width: 100%; */
  width: 1227px;
  height: 320px;

  @media ${(props) => props.theme.tabletL} {
    /* display: flex; */
    /* top: 0; */
    flex-basis: 77%;
    height: 275px;
  }

  @media ${(props) => props.theme.mobile} {
    /* display: flex; */
    /* top: 0; */
    flex-basis: 100%;
    height: 275px;
    margin-right: 0;
  }
`;

const SectionBottomRight = styled.div`
  float: right;
  width: 320px;
  height: 330px;
  cursor: pointer;
  background-color: #f5f8ff;
  border: 1px solid #ebeef6;
  img {
    width: 100%;
    height: 320px;
    @media ${(props) => props.theme.tabletL} {
      display: none;
    }
  }
  @media ${(props) => props.theme.tabletL} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const RightBottom = styled.div`
  display: block;
  float: right;
  width: 320px;
  height: 330px;
  cursor: pointer;
  background-color: #f5f8ff;
  border: 1px solid #ebeef6;
`;
/* 
    @media ${(props) => props.theme.tabletL} {
    } */

//   @media ${(props) => props.theme.tabletL} {
//     display: block;
//   }
/* ${MiddleBottomRight} {
    @media ${(props) => props.theme.tabletL} {
      display: block;
  } */

const SectionBottomLeftNav = styled.div`
  width: 100%;
  display: flex;
`;

const NavDetail = styled.div`
  padding: 0 30px;
  font-size: 14px;
  color: #919dae;
  height: 47px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    color: black;
  }

  ${(props) =>
    props.clickActive &&
    css`
      color: #0086ec;
      border-bottom: 1px solid #0086ec;

      &:hover {
        color: #0086ec;
      }
    `}
`;
