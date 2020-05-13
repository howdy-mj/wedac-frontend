import React from "react";
import styled, { css } from "styled-components";

function CrytoContainerBottom() {
  return (
    <div>
      <CrytoContainerBottomPage></CrytoContainerBottomPage>
    </div>
  );
}

export default CrytoContainerBottom;

const CrytoContainerBottomPage = styled.div`
  width: 320px;
  margin: 8px auto 0;
  border: 1px solid #ebeef6;
  background-color: #fff;
  height: 354px;
  display: block;
`;
