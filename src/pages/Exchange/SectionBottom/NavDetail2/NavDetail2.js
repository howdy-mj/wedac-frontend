import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function NavDetail2(props) {
  console.log("Asdasd", props.coindata);
  const [coindata, setCoindata] = useState([]);

  useEffect(() => {
    fetch(`/data/coinHistorydata.json`)
      .then((res) => res.json())
      .then(
        (res) => setCoindata(res) // res.krw , res.btc, res.gt 로 props전달
      );
  }, []);

  return (
    <BottomNavInner2>
      <BottomNavTable>
        <BottomNavTBody>
          <BottomNavTR>
            <BottomNavTH>일자</BottomNavTH>
            <BottomNavTH>종가(KRW)</BottomNavTH>
            <BottomNavTH>전일대비</BottomNavTH>
            <BottomNavTH>거래량(ATOM)</BottomNavTH>
          </BottomNavTR>
        </BottomNavTBody>
      </BottomNavTable>
      <ScrollBar>
        {props.coindata.daily_history.map((a) => {
          return (
            <BottomNavTable>
              <BottomNavTBody>
                <BottomNavTR>
                  <BottomNavBelowTD first> {a.date}</BottomNavBelowTD>
                  <BottomNavBelowTD second>{a.close_price}</BottomNavBelowTD>
                  <BottomNavBelowTD third>{a.krw_price}</BottomNavBelowTD>
                  <BottomNavBelowTD last>{a.volume}</BottomNavBelowTD>
                </BottomNavTR>
              </BottomNavTBody>
            </BottomNavTable>
          );
        })}
      </ScrollBar>
      {/* <BottomContents2>
        <InnerDetail22>2020-05-12 09:00</InnerDetail22>
        <InnerDetail22>10,475,000</InnerDetail22>
        <InnerDetail22>-1.71%</InnerDetail22>
        <InnerDetail22>132.123123123</InnerDetail22>
      </BottomContents2> */}
    </BottomNavInner2>
  );
}

export default NavDetail2;

const BottomNavInner2 = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 8px;
`;

const ScrollBar = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b8b8b8;
    border-radius: 3px;
  }
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
  }
  &:last-child {
    padding-right: 24px;
  }
`;

const BottomNavBelowTD = styled.th` 
  height: 46px;
  padding: 0px 4px;
  vertical-align: middle;
  line-height: 3;
  display: table-cell;
  font-family: NotoSansCJKkr,WhaleXSans,sans-serif;
${(props) =>
  props.first &&
  css`
    width: 25%;
    text-align: left;
    padding-left: 30px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.03em;
    color: #596070;
    /* height: 46px; */
  `}
${(props) =>
  props.second &&
  css`
    font-size: 14px;
    width: 25%;
    font-weight: 700;
    text-align: right;
    color: #596070;
  `}
  ${(props) =>
    props.third &&
    css`
    font-weight: 700
    width: 25%;
    font-size: 14px;
    font-weight: 700;
    color: #022553;
    text-align: right;
    `}
${(props) =>
  props.last &&
  css`
    width: 25%;
    font-size: 14px;
    padding-right: 24px;
    text-align: right;
    font-weight: 700;
    color: #596070;
  `}`;

const BottomNavInnerWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebeef6;
`;
const InnerDetail2 = styled.div`
  height: 32px;
  font-size: 12px;
  font-weight: 400px;
  color: #919dae;
  padding: 7px 57px;
  text-align: center;
  vertical-align: middle;
  line-height: 1.6;
`;

const BottomContents2 = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebeef6;
  /* border-bottom: 1px solid #ebeef6;
  height: 32px;
  color: #919dae;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
`;
const InnerDetail22 = styled.div`
  height: 32px;
  font-size: 12px;
  font-weight: 400px;
  color: #919dae;
  padding: 7px 57px;
  text-align: center;
  vertical-align: middle;
  line-height: 1.6;
`;
