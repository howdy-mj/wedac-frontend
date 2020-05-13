import React from "react";
import styled, { css } from "styled-components";

function CrytoContainerTop() {
  return (
    <div>
      <CrytoContainerTopPage></CrytoContainerTopPage>
    </div>
  );
}

export default CrytoContainerTop;

const CrytoContainerTopPage = styled.div`
  border: 1px solid #ebeef6;
  background-color: #fff;
  height: 556px;
  display: block;
`;
