import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import NavDetail0 from "./NavDetail0/NavDetail0";
import NavDetail1 from "./NavDetail1/NavDetail1";
import NavDetail2 from "./NavDetail2/NavDetail2";
import NavDetail3 from "./NavDetail3/NavDetail3";

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
      <SectionBottomRight>
        <img src={"https://resources.gdac.com/imgs/banner/htn.png"} alt="ad" />
      </SectionBottomRight>
    </SectionBottomPage>
  );
}

export default SectionBottom;

const SectionBottomPage = styled.div`
  width: 100%; //반응형??
  padding-top: 8px;
  display: flex;
`;

const SectionBottomLeft = styled.div`
  margin-right: 8px;
  border: 1px solid #ebeef6;
  /* border: 2px solid red; */
  background-color: #fff;
  /* width: 100%; */
  width: 1227px;
  height: 320px;
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
    height: 100%;
  }
`;

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
