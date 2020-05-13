import React, { Component } from "react";
import { Link } from "react-router-dom";


import SectionLeft from "./SectionLeft/SectionLeft";
import SectionMiddle from "./SectionMiddle/SectionMiddle";
import SectionRight from "./SectionRight/SectionRight";
import SectionBottom from "./SectionBottom/SectionBottom";
import styled, { css } from "styled-components";

function Exchange() {
  return (
    <ExchangePage className="Exchange">
      <ExchangeWrapper className="wrapper">
        <SectionLeft />
        <SectionMiddle />
        <SectionRight />
        <SectionBottom />
      </ExchangeWrapper>
    </ExchangePage>
  );
}

export default Exchange;

const ExchangePage = styled.div`
  background-color: #f7fbff;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  max-width: 100vw;
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
const ExchangeWrapper = styled.div`
  padding: 6px;
  border-spacing: 8px;
  //width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;
