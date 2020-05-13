import React from "react";
import missinginfo from "../../../../images/missinginfo.png";
import styled from "styled-components";

function NavDetail0() {
  return (
    <BottomNavInner0>
      <BottomNavInnerWrapper0>
        <InnerDetail0>주문시간</InnerDetail0>
        <InnerDetail0>구분</InnerDetail0>
        <InnerDetail0>주문가격(KRW)</InnerDetail0>
        <InnerDetail0>주문수량(BTC)</InnerDetail0>
        <InnerDetail0>미체결수량(BTC)</InnerDetail0>
        <InnerDetail0>주문취소</InnerDetail0>
      </BottomNavInnerWrapper0>
      <BottomContents0>
        <img src={missinginfo} alt="info" />
        미체결 내역이 존재하지 않습니다.
      </BottomContents0>
    </BottomNavInner0>
  );
}

export default NavDetail0;

const BottomNavInner0 = styled.div`
  width: 100%;
  height: 100%;
`;

const BottomNavInnerWrapper0 = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebeef6;
`;
const InnerDetail0 = styled.div`
  height: 32px;
  font-size: 12px;
  font-weight: 400px;
  color: #919dae;
  padding: 7px 57px;
  text-align: center;
  vertical-align: middle;
  line-height: 1.6;
`;

const BottomContents0 = styled.div`
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
