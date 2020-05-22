import React, { Componen, useState, useEffect } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { Link } from "react-router-dom";

function BeforeLogin() {
  return (
    <BeforeLoginpage>
      <Inner>
        <InnerCom>
          <PPP>
            <p>로그인 요청</p>
            <p>로그인 후 주문할 수 있습니다.</p>
            <p>로그인을 먼저 진행해주세요.</p>
          </PPP>
          <Link to={`/login`}>
            <ButtonDiv>
              <span>로그인</span>
            </ButtonDiv>
          </Link>
        </InnerCom>
      </Inner>
    </BeforeLoginpage>
  );
}

export default BeforeLogin;

const BeforeLoginpage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0px solid green;
  background-color: white;
  opacity: 0.9;
`;

const Inner = styled.div`
  margin: 100px auto;
  width: 350px;
`;

const PPP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:first-child {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 20px;
    color: #022553;
    text-align: center;
  }
  p:nth-child(2) {
    font-size: 16px;
    letter-spacing: -0.03em;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    margin-bottom: 8px;
  }
  p:last-child {
    font-size: 16px;
    letter-spacing: -0.03em;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }
`;

const InnerCom = styled.div`
  border: 0px solid yellow;
`;

const ButtonDiv = styled.div`
  height: 38px;
  max-width: 280px;
  padding: 0 24px;
  background-color: #0086ec !important;
  border-color: #0086ec;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(2, 37, 83, 0.2);

  margin: 24px auto 0;
  line-height: 38px;
  cursor: pointer;

  span {
    color: #fff;
    display: flex;
    justify-content: center;
  }
`;
