import React from "react";
import styled from "styled-components";
import TradingViewWidget from "react-tradingview-widget";

function MiddleTop() {
  return (
    <div>
      <SectionMiddlePage className="sectionMiddle">
        <GraphChartArticle className="graphChart">
          <TradingViewWidget symbol="BTCKRW" autosize />
        </GraphChartArticle>
        {/* <TradingPart /> */}
      </SectionMiddlePage>
    </div>
  );
}

export default MiddleTop;

const SectionMiddlePage = styled.div`
  margin-left: 8px;
  /* flex-basis: 72%; */
  width: 100%;
  /* height: 80%; */
`;

const GraphChartArticle = styled.article`
  border: 0px solid #ebeef6;
  width: 100%;
  height: 556px;
  padding: 0;
  margin-bottom: 8px;
  background-color: #fff;

  @media ${(props) => props.theme.tabletL} {
    width: 100%;
    height: 278px;
    margin-right: 8px;
  }
`;
