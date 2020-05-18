import React, { useState } from "react";
import styled, { css } from "styled-components";
import search from "../../../images/search.png";
import KRW from "./KRW/KRW";
import BTC from "./BTC/BTC";
import GT from "./GT/GT";

const selectedTradeInfo = {
  0: <KRW />,
  1: <BTC />,
  2: <GT />,
};

function MiddleRight() {
  const [activeTab, setActiveTab] = useState(0);
  const selectedTradeNum = (id) => setActiveTab(id);
  return (
    <div>
      <CrytoContainerTopPage>
        <SearchboxWrapper>
          <SearchboxInner>
            <input type="text" placeholder="코인명 검색" />
            <img src={search} alt="srch" />
          </SearchboxInner>
          <SectionRightTopNav>
            <NavDetail
              clickActive={activeTab === 0}
              onClick={() => selectedTradeNum(0)}
            >
              KRW
            </NavDetail>
            <NavDetail
              clickActive={activeTab === 1}
              onClick={() => selectedTradeNum(1)}
            >
              BTC
            </NavDetail>
            <NavDetail
              clickActive={activeTab === 2}
              onClick={() => selectedTradeNum(2)}
            >
              GT
            </NavDetail>
          </SectionRightTopNav>
          <InfoWrapper>{selectedTradeInfo[activeTab]}</InfoWrapper>
        </SearchboxWrapper>
      </CrytoContainerTopPage>
    </div>
  );
}

export default MiddleRight;

const CrytoContainerTopPage = styled.div`
  border: 1px solid #ebeef6;
  background-color: #fff;
  /* width: 100%; */
  height: 556px;
  display: block;
  margin-left: 8px;
  min-width: 260px;
  flex-grow: 1;

  @media ${(props) => props.theme.tabletL} {
    width: 100%;
    height: 285px;
    margin-bottom: 8px;
    /* margin-right: 80px; */
  }
`;

const SearchboxWrapper = styled.div`
  border: 0px solid #ebeef6;
  display: block;
  width: 100%;
`;

const SearchboxInner = styled.div`
  padding: 14px 6px 0;
  position: relative;
  width: 100%;
  margin-right: 8px;
  border: 0px solid #ebeef6;
  border-radius: 2px;

  input {
    width: 90%;
    height: 28px;
    padding: 0 10px;
    border: 1px solid #ebeef6;
    position: relative;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: -0.03em;
      color: #d8dce9;
    }
  }

  img {
    position: absolute;
    right: 16px;
    bottom: 2px;
    /* width: 45px; */
    height: 25px;
    display: inline-block;
    padding: 0 5px 0 12px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const SectionRightTopNav = styled.div`
  width: 100%;
  display: flex;
`;

const NavDetail = styled.div`
  padding: 0 14px;
  font-size: 14px;
  color: #919dae;
  height: 47px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  ${(props) =>
    props.clickActive &&
    css`
      color: #022553;
      border-bottom: 1px solid #0086ec;
    `}
`;

const InfoWrapper = styled.div`
  border: 0px solid red;
`;
