import React from "react";
import missinginfo from "../../../../images/missinginfo.png";

import styled from "styled-components";

function NavDetail1() {
  return (
    <BottomNavInner1>
      <BottomNavInnerWrapper1>
        <InnerDetail1>주문시간</InnerDetail1>
        <InnerDetail1>구분</InnerDetail1>
        <InnerDetail1>주문가격(KRW)</InnerDetail1>
        <InnerDetail1>주문수량(BTC)</InnerDetail1>
        <InnerDetail1>미체결수량(BTC)</InnerDetail1>
        <InnerDetail1>주문취소</InnerDetail1>
      </BottomNavInnerWrapper1>
      <BottomContents1>
        <img src={missinginfo} alt="info" />
        미체결 내역이 존재하지 않습니다.
      </BottomContents1>
    </BottomNavInner1>
  );
}

export default NavDetail1;
const BottomNavInner1 = styled.div`
  width: 100%;
  height: 100%;
`;

const BottomNavInnerWrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebeef6;
`;
const InnerDetail1 = styled.div`
  height: 32px;
  font-size: 12px;
  font-weight: 400px;
  color: #919dae;
  padding: 7px 57px;
  text-align: center;
  vertical-align: middle;
  line-height: 1.6;
`;

const BottomContents1 = styled.div`
  color: #919dae;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 12px;
    height: 12px;
    margin-right: 5px;
  }
`;
