import React from "react";
import styled, { css } from "styled-components";

function SectionRight() {
  return (
    <SectionRightPage className="sectionRight">
      <CrytoContainer className="crytoContainer">
        <CrytoContainerTop className="crytoContainerTop"></CrytoContainerTop>
        <CrytoContainerBottom className="crytoContainerBottom"></CrytoContainerBottom>
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
  background-color: #fff;
  margin-bottom: 0px;
  border-bottom: 1px solid #ebeef6;
`;
const CrytoContainerTop = styled.div`
  border: 1px solid #ebeef6;
  background-color: #fff;
  height: 556px;
  display: block;
`;
const CrytoContainerBottom = styled.div`
  width: 320px;
  margin: 8px auto 0;
  border: 1px solid #ebeef6;
  background-color: #fff;
  height: 354px;
  display: block;
`;
