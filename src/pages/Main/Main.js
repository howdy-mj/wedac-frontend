import React from "react";
import styled, { css } from "styled-components";
import SlideBanner from "./SlideBanner/SlideBanner";
import Notice from "./Notice/Notice";
import OverallMarket from "./OverallMarket/OverallMarket";
import Ecosystem from "./Ecosystem/Ecosystem";
import Partners from "./Partners/Partners";
import JoinUs from "./JoinUs/JoinUs";

function Main() {
  return (
    <MainWrap>
      <SlideBanner />
      <Notice />
      <OverallMarket />
      <Ecosystem />
      <Partners />
      <JoinUs />
    </MainWrap>
  );
}

const MainWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Main;
