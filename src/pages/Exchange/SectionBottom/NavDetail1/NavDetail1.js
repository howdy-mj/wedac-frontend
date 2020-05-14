import React from "react";
import missinginfo from "../../../../images/missinginfo.png";

import styled from "styled-components";

function NavDetail1() {
  return (
    <BottomNavInner1>
      {/* <BottomNavInnerWrapper1>
        <InnerDetail1>주문시간</InnerDetail1>
        <InnerDetail1>구분</InnerDetail1>
        <InnerDetail1>가격(KRW)</InnerDetail1>
        <InnerDetail1>체결수량(BTC)</InnerDetail1>
        <InnerDetail1>수수료(KRW)</InnerDetail1>
        <InnerDetail1>정산수량(KRW)</InnerDetail1>
      </BottomNavInnerWrapper1> */}

      <BottomNavTable>
        <BottomNavTBody>
          <BottomNavTR>
              <BottomNavTH>
                  <p>주문시간</p>
              </BottomNavTH>
              <BottomNavTH>
                  <p>구분</p>
              </BottomNavTH>
              <BottomNavTH>
                  <p>가격(KRW)</p>
              </BottomNavTH>
              <BottomNavTH>
                  <p>체결수량(BTC)</p>
              </BottomNavTH>
              <BottomNavTH>
                  <p>수수료(KRW)</p>
              </BottomNavTH>
              <BottomNavTH>
                  <p>정산수량</p>
              </BottomNavTH>
          </BottomNavTR>
        </BottomNavTBody>
       </BottomNavTable>
            {/* <BottomNavTH><p>주문시간</p>주문시간</BottomNavTH>
            <BottomNavTH>구분</BottomNavTH>
            <BottomNavTH>가격(KRW)</BottomNavTH>
            <BottomNavTH>체결수량(BTC)</BottomNavTH>
            <BottomNavTH>수수로(KRW)</BottomNavTH>
            <BottomNavTH>정산수량</BottomNavTH>           */}
     
      <BottomContents1>
        <img src={missinginfo} alt="info" />
        최근 90일간의 거래 내역이 존재하지 않습니다.
      </BottomContents1>
    </BottomNavInner1>
  );
}

export default NavDetail1;

const BottomNavInner1 = styled.div`
  width: 100%;
  height: 100%;
  padding-top:8px;
`;

const BottomNavTable = styled.table`
  width: 100%;
  table-layout: fixed;
  display: table;
  border-spacing: 2px;
  border-bottom: 1px solid #ebeef6;
  line-height: 2;
`;

const BottomNavTBody = styled.tbody`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

const BottomNavTR = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const BottomNavTH = styled.th`
  width: 20%;
  padding: 0px 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #919dae;
  text-align: right;
  height: 32px;
  display: table-cell;

  &:first-child {
    text-align: left;
    padding-left: 30px;
    width: 15%;
  }
  &:nth-child(2) {
    width: 10%;
    text-align: center;
  }
  &:nth-child(3) {
  }
  &:nth-child(4) {
  }
  &:nth-child(5) {
  }
  &:last-child {
    padding-right: 24px;
  }

`;

// const BottomNavInnerWrapper1 = styled.div`
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid #ebeef6;
// `;
// const InnerDetail1 = styled.div`
//   height: 32px;
//   font-size: 12px;
//   font-weight: 400px;
//   color: #919dae;
//   padding: 7px 57px;
//   text-align: center;
//   vertical-align: middle;
//   line-height: 1.6;
// `;

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
