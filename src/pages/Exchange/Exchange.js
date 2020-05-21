import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Nav from "../../component/Nav/Nav";
import SectionLeft from "./SectionLeft/SectionLeft";
import MiddleTop from "./MiddleTop/MiddleTop";
import MiddleRight from "./MiddleRight/MiddleRight";
import MiddleBottom from "./MiddleBottom/MiddleBottom";
import MiddleBottomRight from "./MiddleBottomRight/MiddleBottomRight";
// import SectionMiddle from "./SectionMiddle/SectionMiddle";
// import SectionRight from "./SectionRight/SectionRight";
import SectionBottom from "./SectionBottom/SectionBottom";
import styled, { css } from "styled-components";

function Exchange() {
  return (
    <ExchangePage>
      <Nav />
      <ExchangeWrapper>
        <TopDiv>
          <LeftDiv>
            <SectionLeft />
          </LeftDiv>
          <Middle>
            <MiddleTopDiv>
              <InnerDiv>
                <MiddleTop />
              </InnerDiv>
              <InnerDiv2>
                <MiddleRight />
              </InnerDiv2>
            </MiddleTopDiv>
            <MiddleBottomDiv>
              <InnerDiv3>
                <MiddleBottom />
              </InnerDiv3>
              <InnerDiv4>
                <MiddleBottomRight />
              </InnerDiv4>
            </MiddleBottomDiv>
          </Middle>
        </TopDiv>
        <BottomDiv>
          <SectionBottom />
        </BottomDiv>
      </ExchangeWrapper>
      <Footer />
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
// /* @media ${(props) => props.theme.tabletL} {

// } */
// @media ${(props) => props.theme.moblie} {
//   padding-bottom: 0;
//   margin-top: 0;
//   margin-bottom: 0;
// }
// @media (min-width: 600px) {
//   min-height: 600px;
// }
const ExchangeWrapper = styled.div`
  padding: 6px;
  border-spacing: 8px;
  overflow: hidden;
  /* display: flex; */
  /* flex-direction: column; */
  @media ${(props) => props.theme.mobile} {
    /* display: flex;
    flex-direction: column; */
    /* min-height: 600px; */
    margin-top: 45px;
    height: 1860px;
    /* width: 100vw; */
  }
`;

const LeftDiv = styled.div`
  min-width: 260px;
  flex-basis: 26%;

  /* @media (max-width: 1280px) {
    float: left;
    width: 260px;
  } */
`;

const TopDiv = styled.div`
  display: flex;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const BottomDiv = styled.div`
  display: flex;
  position: relative;

  @media ${(props) => props.theme.tabletL} {
    position: relative;
  }

  @media ${(props) => props.theme.mobile} {
    position: relative;
    width: 100%;
  }
`;

const Middle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.tabletL} {
    width: calc(100% - 260px);
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const MiddleTopDiv = styled.div`
  width: 100%;
  display: flex;

  @media ${(props) => props.theme.tabletL} {
    display: flex;
    flex-direction: column-reverse;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const InnerDiv = styled.div`
  flex-basis: 72%;
  margin-right: 8px;
`;

const InnerDiv2 = styled.div`
  flex-basis: 27%;
`;

const MiddleBottomDiv = styled.div`
  display: flex;
  margin-left: 8px;
  width: 100%;

  @media ${(props) => props.theme.tabletL} {
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const InnerDiv3 = styled.div`
  flex-basis: 72%;
  margin-right: 8px;

  @media ${(props) => props.theme.tabletL} {
    flex-basis: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 8px;
    width: 100%;
  }
`;

const InnerDiv4 = styled.div`
  flex-basis: 26%;
`;
