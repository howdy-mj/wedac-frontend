import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

function BTC() {
  return (
    <div>
      <BottomNavTable>
        <BottomNavTBody>
          <BottomNavTR>
            <BottomNavTH>
              <p>코인</p>
            </BottomNavTH>
            <BottomNavTH>
              <p>현재가</p>
            </BottomNavTH>
            <BottomNavTH>
              <p>전일대비</p>
            </BottomNavTH>
            <BottomNavTH>
              <p>거래대금</p>
            </BottomNavTH>
          </BottomNavTR>
        </BottomNavTBody>
      </BottomNavTable>
      <ScrollBar>
        <BottomNavTable>
          <BottomNavTBody>
            <BottomNavTR>
              <BottomNavBelowTD first>
                <p>KLAY</p>
                <p>클레이</p>
              </BottomNavBelowTD>
              <BottomNavBelowTD second>
                <p>126.10</p>
              </BottomNavBelowTD>
              <BottomNavBelowTD third>
                <p>-1.62%</p>
              </BottomNavBelowTD>
              <BottomNavBelowTD last>
                <p>176백만</p>
              </BottomNavBelowTD>
            </BottomNavTR>
          </BottomNavTBody>
        </BottomNavTable>
      </ScrollBar>
    </div>
  );
}

export default BTC;

const ScrollBar = styled.div`
  height: 430px;
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
  padding-top: 4px;
  table-layout: fixed;
  display: table;
  height: 30px;
  border-bottom: 1px solid #ebeef6;
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
  /* width: 20%;
  padding: 0px 4px; */
  /* letter-spacing: -0.03em; */
  font-size: 10px;
  font-weight: 400;
  color: #919dae;
  text-align: right;
  vertical-align: center;
  line-height: 30px;
  height: 30px;
  display: table-cell;

  p:hover {
    color: #0086ec;
  }

  &:first-child {
    text-align: left;
    width: 28%;
    padding-left: 14px;
  }
  &:nth-child(2) {
    width: 23%;
    text-align: center;
  }
  &:nth-child(3) {
    width: 22%;
  }
  &:nth-child(4) {
  }
  &:nth-child(5) {
  }
  &:last-child {
    padding-right: 8px;
    width: 27%;
    color: #4b5262;
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
    width: 28%;
    margin-top: 8px;
    line-height: 18px;
    text-align: left;
    padding-left: 14px;
    cursor: pointer;

    p:first-child {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.03em;
      font-weight: 700;
      line-height: 15px;
      color: #022553;
    }
    p:last-child {
      font-size: 10px;
      font-weight: 400;
      color: #919dae;
    }
  `}
${(props) =>
  props.second &&
  css`
    width: 23%;
    margin-top: 6px;
    line-height: 46px;
    vertical-align: top;
    text-align: right;

    p {
      font-size: 12px;
      color: #e21b36;
      font-weight: 700;
    }
  `}
  ${(props) =>
    props.third &&
    css`
      width: 22%;
      text-align: right;
      p {
        font-size: 12px;
        font-weight: 400;
        color: #e21b36;
      }
    `}
${(props) =>
  props.last &&
  css`
    width: 27%;
    padding-right: 14px;
    color: #4b5262;

    p {
      text-align: right;
      font-size: 12px;
      font-weight: 400;
    }
  `}`;
