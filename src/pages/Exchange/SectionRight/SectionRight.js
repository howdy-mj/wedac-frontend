import React from "react";
import styled, { css } from "styled-components";
// import TradingViewWidget from "react-tradingview-widget";

import CrytoContainerTop from "./CrytoContainerTop/CrytoContainerTop";
import CrytoContainerBottom from "./CrytoContainerBottom/CrytoContainerBottom";

function SectionRight() {
  return (
    <SectionRightPage>
      <CrytoContainer>
        <CrytoContainerTop />
        <CrytoContainerBottom />
      </CrytoContainer>
    </SectionRightPage>
  );
}

export default SectionRight;

const SectionRightPage = styled.div`
  margin-left: 8px;
`;

const CrytoContainer = styled.div`
  float: right;
  width: 320px;
  border-spacing: 0;
  //border: 1px solid #ebeef6;
  //background-color: #fff;
  margin-bottom: 0px;
  border-bottom: 1px solid #ebeef6;
`;

// const GraphChartArticle = styled.article`
//   border: 0px solid #ebeef6;
//   //width: 577px;
//   height: 556px;
//   padding: 0;
//   margin-bottom: 8px;
//   background-color: #fff;
// `;

// const ChartAndSearch = styled.div`
//   display: flex;
//   width: 800px;
// `;
