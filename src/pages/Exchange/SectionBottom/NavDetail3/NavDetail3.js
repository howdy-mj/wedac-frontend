import React from "react";
import bitcoinicon from "../../../../images/bitcoinicon.png";
import styled from "styled-components";

function NavDetail3() {
  return (
    <BottomInfo>
      <CrytoHeader>
        <img src={bitcoinicon} alt="cointitle" />
        <CrytoHeaderTitle>비트코인(Bitcoin)</CrytoHeaderTitle>
      </CrytoHeader>
      <CrytoBottomContainer>
        <CrytoInner>
          <CrytoTable>
            <CrytoTDody>
              <CrytoTR>
                <CrytoTH>거래코드</CrytoTH>
                <CrytoTD>BTC</CrytoTD>
              </CrytoTR>
              <CrytoTR>
                <CrytoTH>카테고리</CrytoTH>
                <CrytoTD>지불결제</CrytoTD>
              </CrytoTR>
              <CrytoTR>
                <CrytoTH>발행량</CrytoTH>
                <CrytoTD>2,100만 BTC</CrytoTD>
              </CrytoTR>
              <CrytoTR>
                <CrytoTH>협의 알고리즘</CrytoTH>
                <CrytoTD>PoW</CrytoTD>
              </CrytoTR>
              <CrytoTR>
                <CrytoTH>재단</CrytoTH>
                <CrytoTD>N/A</CrytoTD>
              </CrytoTR>
              <CrytoTR>
                <CrytoTH>회사</CrytoTH>
                <CrytoTD>N/A</CrytoTD>
              </CrytoTR>
              <CrytoTR>
                <CrytoTH>공식 홈페이지</CrytoTH>
                <CrytoTD>http://bitcoin.org/</CrytoTD>
              </CrytoTR>
              <CrytoTR>
                <CrytoTH>대표인물</CrytoTH>
                <CrytoTD>N/A</CrytoTD>
              </CrytoTR>
              <CrytoTR>
                <CrytoTH>특징</CrytoTH>
                <CrytoTD>
                  최초의 블록체인 기반 암호화폐로 높은 해시레이트를 기반으로
                  하는 네트워크의 안정성과 꾸준한 사용성이 특징이다.
                </CrytoTD>
              </CrytoTR>
            </CrytoTDody>
          </CrytoTable>
        </CrytoInner>
      </CrytoBottomContainer>
    </BottomInfo>
  );
}

export default NavDetail3;

const BottomInfo = styled.div`
  /* width: 100%; */
  height: 220px;
  background-color: #fff;
`;
const CrytoHeader = styled.div`
  height: 50px;
  padding: 13px 15px 0;
  border-bottom: 1px solid #ebeef6;
  img {
    width: 24px;
    height: 24px;
  }
`;
const CrytoHeaderTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #596070;
  letter-spacing: -0.03em;
  display: inline-block;
  padding-left: 8px;
  font-weight: 700;
  line-height: 24px;
  vertical-align: top;
`;
const CrytoBottomContainer = styled.div`
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
const CrytoInner = styled.div`
  width: 50%;
  border-right: 1px solid #ebeef6;
`;
const CrytoTable = styled.table`
  width: 100%;
  table-layout: fixed;
  display: table;
  border-bottom: 1px solid #ebeef6;
  line-height: 1.6;
`;
const CrytoTDody = styled.tbody`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
const CrytoTR = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
const CrytoTH = styled.th`
  width: 20%;
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #919dae;
  text-align: left;
  vertical-align: center;
  height: 32px;
  display: table-cell;
  border-right: 1px solid #ebeef6;
`;
// &:first-child {
//   text-align: left;
//   padding-left: 30px;
// }
// &:last-child {
//   padding-right: 24px;
// }

const CrytoTD = styled.th`
  height: 32px;
  font-size: 12px;
  color: #596070;
  padding: 4px 15px;
  vertical-align: middle;
  text-align: left;
  /* line-height: 3; */
  display: table-cell;
  font-family: NotoSansCJKkr, WhaleXSans, sans-serif;
`;
// ${(props) =>
//   props.first &&
//   css`
//     width: 25%;
//     text-align: left;
//     padding-left: 30px;
//     font-size: 12px;
//     font-weight: 400;
//     letter-spacing: -0.03em;
//     color: #596070;
//     /* height: 46px; */
//   `}
// ${(props) =>
//   props.second &&
//   css`
//     font-size: 14px;
//     width: 25%;
//     font-weight: 700;
//     text-align: right;
//     color: #596070;
//   `}
//   ${(props) =>
//     props.third &&
//     css`
//     font-weight: 700
//     width: 25%;
//     font-size: 14px;
//     font-weight: 700;
//     color: #022553;
//     text-align: right;
//     `}
// ${(props) =>
//   props.last &&
//   css`
//     width: 25%;
//     font-size: 14px;
//     padding-right: 24px;
//     text-align: right;
//     font-weight: 700;
//     color: #596070;
//   `}`;
