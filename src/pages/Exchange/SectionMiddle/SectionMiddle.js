import React from "react";
import TradingPart from "./TradingPart/TradingPart";
import styled from "styled-components";

function SectionMiddle() {
  return (
    <div>
      <SectionMiddlePage className="sectionMiddle">
        <GraphChartArticle className="graphChart"></GraphChartArticle>
        <TradingPart />
      </SectionMiddlePage>
    </div>
  );
}

export default SectionMiddle;

const SectionMiddlePage = styled.div`
  margin-left: 8px;
  width: 900px;
`;
const GraphChartArticle = styled.article`
  border: 1px solid #ebeef6;
  //width: 577px;
  height: 556px;
  padding: 0;
  margin-bottom: 8px;
  background-color: #fff;
`;
