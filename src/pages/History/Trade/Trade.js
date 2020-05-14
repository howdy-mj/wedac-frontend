import React from "react";
import styled, { css } from "styled-components";

function Trade() {
  return (
    <HistoryContent>
      <HistoryTable>
        <HistoryTHead>
          <HeadTR>
            <HeadTH>체결시간</HeadTH>
            <HeadTH>구분</HeadTH>
            <HeadTH>종목</HeadTH>
            <HeadTH>가격</HeadTH>
            <HeadTH>수량</HeadTH>
            <HeadTH>수수료</HeadTH>
            <HeadTH>금액(수량)</HeadTH>
            <HeadTH>주문시간</HeadTH>
          </HeadTR>
        </HistoryTHead>
        <HistoryTbody>
          <BodyTR>
            <BodyTD>
              <p>2020-03-19</p>
              <p>18:50:03</p>
            </BodyTD>
            <BodyTD>
              <BodyP red>매수</BodyP>
            </BodyTD>
            <BodyTD>GT/KRW</BodyTD>
            <BodyTD>
              <p>0.1235 KRW</p>
            </BodyTD>
            <BodyTD>
              <p>83,432.21415887 GT</p>
            </BodyTD>
            <BodyTD>
              <p>5 KRW</p>
            </BodyTD>
            <BodyTD>
              <BodyP value>10,309 KRW</BodyP>
            </BodyTD>
            <BodyTD>
              <p>2020-03-19</p>
              <p>18:50:03</p>
            </BodyTD>
          </BodyTR>
        </HistoryTbody>
      </HistoryTable>
    </HistoryContent>
  );
}

const HistoryContent = styled.div`
  height: 850px;
`;

const HistoryTable = styled.table`
  width: 100%;
  font-size: 12px;
  letter-spacing: -0.03em;
  text-align: center;
  display: table;
`;

const HistoryTHead = styled.thead`
  color: #919dae;
  display: table-header-group;
`;

const HeadTR = styled.tr`
  height: 38px;
  display: table-row;
`;

const HeadTH = styled.th`
  padding: 14px 8px 0 8px;
  display: table-cell;
  font-weight: 400;
`;

const HistoryTbody = styled.tbody`
  border-top: 1px solid #ebeef6;
  color: #596070;
  display: table-row-group;
`;

const BodyTR = styled.tr`
  display: table-row;

  &:nth-child(odd) {
    background-color: #f5f8ff;
  }
`;

const BodyTD = styled.td`
  height: 48px;
  display: table-cell;
  vertical-align: middle;
`;

const BodyP = styled.p`
  ${(props) =>
    props.red &&
    css`
      color: ${(props) => props.theme.plusColor};
      font-weight: 700;
    `}

  ${(props) =>
    props.value &&
    css`
      font-weight: 700;
    `}
`;

export default Trade;
