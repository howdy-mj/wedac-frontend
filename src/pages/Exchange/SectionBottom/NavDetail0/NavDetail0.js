import React from "react";
import missinginfo from "../../../../images/missinginfo.png";
import styled from "styled-components";

function NavDetail0() {
  return (
    <BottomNavInner0>
      {/* <BottomNavInnerWrapper0>
        <InnerDetail0>주문시간</InnerDetail0>
        <InnerDetail0>구분</InnerDetail0>
        <InnerDetail0>주문가격(KRW)</InnerDetail0>
        <InnerDetail0>주문수량(BTC)</InnerDetail0>
        <InnerDetail0>미체결수량(BTC)</InnerDetail0>
        <InnerDetail0>주문취소</InnerDetail0>
      </BottomNavInnerWrapper0> */}
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
              <p>주문가격(KRW)</p>
            </BottomNavTH>
            <BottomNavTH>
              <p>주문수량(BTC)</p>
            </BottomNavTH>
            <BottomNavTH>
              <p>미체결수량(BTC)</p>
            </BottomNavTH>
            <BottomNavTH>
              <p>주문취소</p>
            </BottomNavTH>
          </BottomNavTR>
        </BottomNavTBody>
      </BottomNavTable>

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
  padding-top: 8px;
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
  vertical-align: center;
  line-height: 2;
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

// const BottomNavInnerWrapper0 = styled.div`
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid #ebeef6;
// `;
// const InnerDetail0 = styled.div`
//   height: 32px;
//   font-size: 12px;
//   font-weight: 400px;
//   color: #919dae;
//   /* padding: 7px 57px; */
//   /* text-align: center; */
//   vertical-align: middle;
//   line-height: 2;

//   &:first-child {
//       padding-left: 30px;
//       width: 15%;
//       text-align: left;
//   }
//   &:last-child{
//     padding-right: 38px;
//     width: 15%;
//   }
// `;

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
