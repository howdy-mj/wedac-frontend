import React, { useState } from "react";
import styled, { css } from "styled-components";

function InOut() {
  const [hasTrade, setHasTrade] = useState(false);

  return (
    <HistoryContent>
      <HistoryTable>
        <HistoryTHead>
          <HeadTR>
            <HeadTH left>입출금시간</HeadTH>
            <HeadTH center>구분</HeadTH>
            <HeadTH center>종목</HeadTH>
            <HeadTH right>수량</HeadTH>
            <HeadTH right veryright>
              비고
            </HeadTH>
          </HeadTR>
        </HistoryTHead>
        {hasTrade ? (
          <HistoryTbody>
            <BodyTR>
              <BodyTD left>
                <p>2020-03-19</p>
                <p>18:50:03</p>
              </BodyTD>
              <BodyTD center>
                <BodyP inOutType>입금</BodyP>
              </BodyTD>
              <BodyTD center>GT</BodyTD>
              <BodyTD right>
                <BodyP amount>83,432.21415887</BodyP>
              </BodyTD>
              <BodyTD right veryright>
                <BodyP>기타</BodyP>
              </BodyTD>
            </BodyTR>
          </HistoryTbody>
        ) : (
          <NoTrade>해당하는 검색 내역이 없습니다.</NoTrade>
        )}
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
  /* text-align: center; */
  display: table;
`;

const HistoryTHead = styled.thead`
  color: #919dae;
  display: table-header-group;
`;

const HeadTR = styled.tr`
  height: 38px;
  display: table-row;
  border-collapse: collapse;
  /* text-align: right; */
`;

const HeadTH = styled.th`
  padding: 14px 8px 0 8px;
  display: table-cell;
  font-weight: 400;
  ${(props) =>
    props.left &&
    css`
      text-align: left;
      padding-left: 30px;
    `}
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `}
  ${(props) =>
    props.veryright &&
    css`
      padding-right: 30px;
    `}
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
  ${(props) =>
    props.left &&
    css`
      text-align: left;
      padding-left: 30px;
    `}
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `}
  ${(props) =>
    props.veryright &&
    css`
      padding-right: 30px;
    `}
`;

const BodyP = styled.p`
  ${(props) =>
    props.inOutType &&
    css`
      font-weight: 700;
    `}

  ${(props) =>
    props.amount &&
    css`
      font-weight: 700;
    `}
`;

const NoTrade = styled.div`
  margin: 60px 200px;
  text-align: center;
  color: #919dae;
  font-size: 12px;
  position: absolute;
`;

export default InOut;
