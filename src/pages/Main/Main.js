import React from "react";
import styled from "styled-components";
import SlideBanner from "./SlideBanner";
import Notice from "./Notice";
import OverallMarket from "./OverallMarket";
import Ecosystem from "./Ecosystem";
import Partners from "./Partners";
import JoinUs from "./JoinUs";

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
