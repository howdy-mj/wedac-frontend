import React from "react";
import styled from "styled-components";
import bitcoinicon from "../../../images/bitcoinicon.png";
import arrowdown from "../../../images/arrowdown.png";
import PriceAmountTop from "../SectionLeft/PriceAmountTop/PriceAmountTop";
import PriceAmountBottom from "../SectionLeft/PriceAmountBottom/PriceAmountBottom";
import theme from "../../../style/theme";

function SectionLeft() {
  return (
    <div>
      <SectionLeftPage>
        <DashBoard>
          <TitlePart>
            <CoinIcon>
              <img src={bitcoinicon} alt="icon" />
              <CrytoDetail>
                <span>비트코인</span>
                <span>BTC/KRW</span>
              </CrytoDetail>
            </CoinIcon>
          </TitlePart>
          <RatePart>
            <CurrentMarketPrice>
              <span>11,432,000</span>
              <span>KRW</span>
            </CurrentMarketPrice>
            <PriceDetail>
              <span>전일대비</span>
              <span>1.67%</span>
              <span>
                <img src={arrowdown} alt="down" />
                201,000
              </span>
            </PriceDetail>
          </RatePart>
          <PricePart>
            <PricePartTop>
              <span>고가</span>
              <span red>12111000</span>
            </PricePartTop>
            <PricePartBottom>
              <span>저가</span>
              <span blue>11750000</span>
            </PricePartBottom>
          </PricePart>
          <VolumePart>
            <VolumePartTop>
              <span>거래량(24h)</span>
              <span>14690143840 BTC</span>
            </VolumePartTop>
            <VolumePartTop>
              <span>거래대금(24h)</span>
              <span>1758684634 KRW</span>
            </VolumePartTop>
          </VolumePart>
        </DashBoard>
        <OrderBookArticle>
          <OrderBookNav>
            <OrderBookNavLeft>
              <span>가격</span>
              <span>(KRW)</span>
            </OrderBookNavLeft>
            <OrderBookNavRight>
              <span>수량</span>
              <span>(BTC)</span>
            </OrderBookNavRight>
          </OrderBookNav>

          <PriceAmountTop />

          <PriceStatus>
            <PriceStatusLeft>11661000</PriceStatusLeft>
            <PriceStatusRight>-3.21%</PriceStatusRight>
          </PriceStatus>

          <PriceAmountBottom />
        </OrderBookArticle>
      </SectionLeftPage>
    </div>
  );
}

export default SectionLeft;

const SectionLeftPage = styled.div``;
/* @media (max-width: 1280px) {
  float: left;
  width: 260px;
} */
// @media ${(props) => props.theme.moblie} {
//   float: left;
//   /* width: 260px; */
// }
//  @media (min-width: 600px) {
//   float: left;
//   /* width: 260px; */
// }

const DashBoard = styled.div`
  border: 0px solid blue;
  /* width: 320px; */
  padding: 14px 14px 0;
  margin: 0 0 8px;
  border: 1px solid #ebeef6;
  background-color: #fff;
  height: 285px;
`;

const TitlePart = styled.div`
  position: relative;
  height: 40px;
  line-height: 40px;
`;
// /* @media ${(props) => props.theme.tabletL} {
// } */
// @media ${(props) => props.theme.moblie} {
//   border-bottom: 0;
// }
// @media (min-width: 600px) {
//   border-top: 0;

const CoinIcon = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const CrytoDetail = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;

  span:first-child {
    color: #022553;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.03em;
    float: left;
    font-family: NotoSansCJKkr, WhaleXSans, sans-serif;
  }
  span:last-child {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.03em;
    color: #919dae;
  }
`;

const RatePart = styled.div`
  font-family: NotoSansCJKkr, WhaleXSans, sans-serif;
  margin: 14px 0 0;
  padding-bottom: 14px;
  margin: 14px 10px 0;
  border-bottom: 1px solid #ebeef6;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
`;

const CurrentMarketPrice = styled.div`
  width: 100%;
  display: block;
  /* float: left; */
  color: #174ca2;

  span:first-child {
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
  }
  span:last-child {
    font-size: 10px;
    font-weight: 400;
  }
`;
// /* @media ${(props) => props.theme.tabletL} {
//   padding: 6px;
// } */
// @media ${(props) => props.theme.moblie} {
//   margin: 14px 0 0;
// }
// /* @media (min-width: 600px) {
//   float: left;

// } */

const PriceDetail = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  span {
    /* display: flex;
    align-items: center; */
  }
  span:nth-child(1) {
    font-size: 10px;
    font-weight: 400;
    /* display: flex;
  align-items: center; */
    /* display: inline; */
    margin: 0 3px 0 0;
    line-height: 13px;
    color: #596070;
    vertical-align: bottom;
  }
  span:nth-child(2)::before {
    content: "-";
  }
  span:nth-child(2) {
    color: #174ca2;
    margin-right: 12px;
    font-size: 14px;
    font-weight: 700;
  }
  span:nth-child(3) {
    color: #174ca2;
    margin-left: 12px;
    font-size: 14px;
    font-weight: 700;
    img {
      width: 10px;
      height: 10px;
    }
  }
`;
const PricePart = styled.ul`
  padding: 4px 0;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.03em;
  padding: 4px 10px;
  border-bottom: 1px solid #ebeef6;
  line-height: 32px;
`;
const PricePartTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: NotoSansCJKkr, WhaleXSans, sans-serif;
  span:first-child {
    color: #596070;
  }
  span:nth-child(2) {
    color: #e21b36;
    font-weight: 700;
  }
`;
const PricePartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: NotoSansCJKkr, WhaleXSans, sans-serif;

  span:first-child {
    color: #596070;
  }
  span:nth-child(2) {
    color: #174ca2;
    font-weight: 700;
  }
`;
const VolumePart = styled.div`
  padding: 4px 0;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.03em;
  padding: 4px 10px;
  line-height: 32px;
`;
const VolumePartTop = styled.li`
  display: flex;
  justify-content: space-between;
  font-family: NotoSansCJKkr, WhaleXSans, sans-serif;
  span {
    color: #596070;
  }
`;
const OrderBookArticle = styled.article`
  border: 1px solid #ebeef6;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
`;
const OrderBookNav = styled.div`
  border-bottom: 1px solid #ebeef6;
  height: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 10px;
`;
const OrderBookNavLeft = styled.div`
  span:first-child {
    margin: 0 5px;
    text-align: left;
    height: 30px;
    margin-left: 20px !important;
    font-weight: 700;
    line-height: 30px;
    color: #022553;
    font-size: 12px;
    font-family: NotoSansCJKkr, WhaleXSans, sans-serif;
  }
  span:last-child {
    font-size: 10px;
    font-weight: 400;
    color: #022553;
  }
`;
const OrderBookNavRight = styled.div`
  span:first-child {
    margin: 0 5px;
    text-align: right;
    height: 30px;
    margin-left: 20px !important;
    font-weight: 700;
    line-height: 30px;
    color: #022553;
    font-size: 12px;
    font-family: NotoSansCJKkr, WhaleXSans, sans-serif;
  }
  span:last-child {
    font-size: 10px;
    font-weight: 400;
    color: #022553;
  }
`;

const PriceStatus = styled.h2`
  height: 44px;
  margin: 14px 0;
  overflow: hidden;
  line-height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PriceStatusLeft = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #174ca2;
`;
const PriceStatusRight = styled.div`
  margin-left: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #174ca2;
`;
