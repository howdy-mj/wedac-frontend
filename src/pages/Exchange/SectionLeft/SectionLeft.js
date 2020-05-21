import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import bitcoinicon from "../../../images/bitcoinicon.png";
import arrowdown from "../../../images/arrowdown.png";
import { YE } from "../../../config";
import { withRouter } from "react-router-dom";

// import PriceAmountTop from "../SectionLeft/PriceAmountTop/PriceAmountTop";
// import PriceAmountBottom from "../SectionLeft/PriceAmountBottom/PriceAmountBottom";

function SectionLeft(props) {
  const [coindata, setCoindata] = useState();
  const [pricedata, setPricedata] = useState([]);
  const [volumedata, setVolumedata] = useState([]);

  useEffect(() => {
    // fetch(`${YE}/market/KRW/${props.match.params}`)
    fetch(`${YE}/market/KRW/BTC`)
      .then((res) => res.json())
      .then((res) => {
        setCoindata(res.coin_detail); // res.krw , res.btc, res.gt 로 props전달
        // console.log("aaaaa", res)
        console.log("resultLEFT", res.coin_detail);
      });

    fetch(`${YE}/market/KRW/BTC/order`)
      .then((res) => res.json())
      .then((res) => {
        console.log("aaaaa", res);
        // console.log("aaaaa", res)
        // console.log("aaaaa", res.realtime.price);
        setPricedata(res.realtime.price); // res.krw , res.btc, res.gt 로 props전달
        setVolumedata(res.realtime.volume);
        // setVolumedata(res.data.volume);
      });
  }, []);

  useEffect(() => {
    // console.log("paramsTwo", props.paramsTwo);
    // setCoindata(props.paramsTwo, props.paramsOne);
    fetch(
      `${YE}/market/${props.match.params.market}/${props.match.params.coin}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("aaaaa", res);
        setCoindata(res.coin_detail); // res.krw , res.btc, res.gt 로 props전달
        // console.log("resultLEFT", res.coin_detail);
      });
  }, [props.match.params]);

  useEffect(() => {
    // console.log("paramsTwo", props.paramsTwo);
    // setCoindata(props.paramsTwo, props.paramsOne);
    fetch(
      `${YE}/market/${props.match.params.market}/${props.match.params.coin}/order`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log("afaf", props.match);
        // console.log("aaaaa", res);
        setPricedata(res.realtime.price); // res.krw , res.btc, res.gt 로 props전달
        // console.log("resultLEFT", res.coin_detail);
      });
  }, [props.match.params]);

  function addComma(price) {
    if (price > 999) {
      return ("" + price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    } else {
      return price;
    }
  }

  function kkkk(a) {
    return (a + "").split(".")[0];
  }

  // const median = (pricedata) => {
  //   const mid = Math.floor(pricedata.length / 2),
  //     nums = [...pricedata].sort((a, b) => a - b);
  //   return pricedata.length % 2 !== 0
  //     ? nums[mid]
  //     : (nums[mid - 1] + nums[mid]) / 2;
  // };

  //   const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  // const medianIdx = Math.floor(arr.length / 2)
  // const newArr = [arr[medianIdx - 1] ,arr[medianIdx], arr[medianIdx + 1]]
  // newArr.map()

  // const arr2 = volumedata;
  // const medianIdx3 = Math.floor(arr.length / 2);
  // const newArr3 = [
  //   arr[medianIdx3 - 8],
  //   arr[medianIdx3 - 7],
  //   arr[medianIdx3 - 6],
  //   arr[medianIdx3 - 5],
  //   arr[medianIdx3 - 4],
  //   arr[medianIdx3 - 3],
  //   arr[medianIdx3 - 2],
  //   arr[medianIdx3 - 1],
  // ];

  // // const median = arr[medianIdx];
  // const medianComma = addComma(median);

  // const newArr4 = [
  //   arr[medianIdx3 + 1],
  //   arr[medianIdx3 + 2],
  //   arr[medianIdx3 + 3],
  //   arr[medianIdx3 + 4],
  //   arr[medianIdx3 + 5],
  //   arr[medianIdx3 + 6],
  //   arr[medianIdx3 + 7],
  //   arr[medianIdx3 + 8],
  // ];

  const arr = pricedata;
  // const arr2 = arr.length / 2;
  const medianIdx = Math.floor(arr.length / 2);
  const newArr = [
    arr[medianIdx - 8],
    arr[medianIdx - 7],
    arr[medianIdx - 6],
    arr[medianIdx - 5],
    arr[medianIdx - 4],
    arr[medianIdx - 3],
    arr[medianIdx - 2],
    arr[medianIdx - 1],
  ];

  const median = arr[medianIdx];
  const medianComma = addComma(median);

  const newArr2 = [
    arr[medianIdx + 1],
    arr[medianIdx + 2],
    arr[medianIdx + 3],
    arr[medianIdx + 4],
    arr[medianIdx + 5],
    arr[medianIdx + 6],
    arr[medianIdx + 7],
    arr[medianIdx + 8],
  ];

  console.log(coindata);
  return (
    <div>
      <SectionLeftPage>
        {coindata &&
          coindata.map((c) => {
            let abc = addComma(c);
            return (
              <DashBoard>
                <TitlePart>
                  <CoinIcon>
                    <img src={bitcoinicon} alt="icon" />
                    <CrytoDetail>
                      <span>{c.coin_kor_name}</span>
                      <span>{c.pair}</span>
                    </CrytoDetail>
                  </CoinIcon>
                </TitlePart>
                <RatePart>
                  <CurrentMarketPrice>
                    <span>{addComma(Number(c.present).toFixed(2))}</span>
                    <span> KRW</span>
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
                    <span red>{addComma(Number(c.high).toFixed(2))}</span>
                  </PricePartTop>
                  <PricePartBottom>
                    <span>저가</span>
                    <span blue>{addComma(Number(c.low).toFixed(2))}</span>
                  </PricePartBottom>
                </PricePart>
                <VolumePart>
                  <VolumePartTop>
                    <span>거래량(24h)</span>
                    <span>{c.volume_24hours}0 BTC</span>
                  </VolumePartTop>
                  <VolumePartTop>
                    <span>거래대금(24h)</span>
                    <span>{c.price_24hour} KRW</span>
                  </VolumePartTop>
                </VolumePart>
              </DashBoard>
            );
          })}

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

          {/* {pricedata.map((a) => {
            // let jjj = Number(a);
            
            return (
              );
            })} */}
          {newArr &&
            newArr.map((a) => {
              // const aa = Number(a);
              const abc = addComma(a);
              return (
                <div>
                  <AskPrice>
                    <PriceRow onClick={() => props.handledata(a)}>
                      <span>{kkkk(abc)}</span>
                      <span>-2.33%</span>
                      <span>0.123123123</span>
                    </PriceRow>
                  </AskPrice>
                </div>
              );
            })}

          <PriceStatus onClick={() => props.handledata(medianComma)}>
            <PriceStatusLeft>{kkkk(medianComma)}</PriceStatusLeft>
            <PriceStatusRight>-3.21%</PriceStatusRight>
          </PriceStatus>

          {newArr2.map((b) => {
            const ab = addComma(b);
            return (
              <BidPrice>
                <BidPriceRow onClick={() => props.handledata(Number(b))}>
                  <span>{kkkk(ab)}</span>
                  <span>-2.33%</span>
                  <span>0.123123123</span>
                </BidPriceRow>
              </BidPrice>
            );
          })}
          {/* <PriceRow className="priceRow">
              <span>11.771.00</span>
              <span>-2.33%</span>
              <span>0.123123123</span>
            </PriceRow>
            <PriceRow className="priceRow">
              <span>11.771.00</span>
              <span>-2.33%</span>
              <span>0.123123123</span>
            </PriceRow>
            <PriceRow className="priceRow">
              <span>11.771.00</span>
              <span>-2.33%</span>
              <span>0.123123123</span>
            </PriceRow>
            <PriceRow className="priceRow">
              <span>11.771.00</span>
              <span>-2.33%</span>
              <span>0.123123123</span>
            </PriceRow>
            <PriceRow className="priceRow">
              <span>11.771.00</span>
              <span>-2.33%</span>
              <span>0.123123123</span>
            </PriceRow>
            <PriceRow className="priceRow">
              <span>11.771.00</span>
              <span>-2.33%</span>
              <span>0.123123123</span>
            </PriceRow>
            <PriceRow className="priceRow">
              <span>11.771.00</span>
              <span>-2.33%</span>
              <span>0.123123123</span>
            </PriceRow> */}

          {/* <BidPrice className="bidPrice">
            <BidPriceRow className="bidPriceRow">
              <span>11.771.00</span>
              <span>-2.33%</span>
              <span>0.123123123</span>
            </BidPriceRow>
          </BidPrice> */}

          {/* <PriceAmountTop />
          <PriceAmountBottom /> */}
        </OrderBookArticle>
      </SectionLeftPage>
    </div>
    // ) : (<></>)}
  );
}

export default withRouter(SectionLeft);

const SectionLeftPage = styled.div``;

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
  /* height: 626px; */
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
  /* margin: 14px 0; */
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

const AskPrice = styled.ul`
  padding-top: 4px;
`;

const PriceRow = styled.li`
  height: 32px;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  padding-top: 5px;
  font-family: NotoSansCJKkr, WhaleXSans, sans-serif;
  span:nth-child(1) {
    cursor: pointer;
    color: #174ca2;
    line-height: 10px;
    font-weight: 700;
    text-align: right;
    font-size: 12px;
    margin: 0 12px 0 14px;
  }
  span:nth-child(2) {
    cursor: pointer;
    font-size: 10px;
    font-weight: 400;
    color: #174ca2;
  }
  span:nth-child(3) {
    color: #022553;
    font-size: 12px;
    font-weight: 400;
    left: 43%;
    float: right;
    padding-right: 10px;

    &:hover {
      font-weight: bold;
    }
  }
`;

const BidPrice = styled.ul`
  padding-top: 4px;
`;

const BidPriceRow = styled.li`
  height: 32px;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  padding-top: 5px;
  font-family: NotoSansCJKkr, WhaleXSans, sans-serif;

  span:nth-child(1) {
    cursor: pointer;
    color: #174ca2;
    line-height: 10px;
    font-weight: 700;
    text-align: right;
    font-size: 12px;
    margin: 0 12px 0 14px;
  }
  span:nth-child(2) {
    cursor: pointer;
    font-size: 10px;
    font-weight: 400;
    color: #174ca2;
  }
  span:nth-child(3) {
    color: #022553;
    font-size: 12px;
    font-weight: 400;
    left: 43%;
    float: right;
    padding-right: 10px;

    &:hover {
      font-weight: bold;
    }
  }
`;
