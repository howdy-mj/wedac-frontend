import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { YE } from "../../../config";
// import TradingPartRight from "./TradingPartRight/TradingPartRight";
import BottomRight from "./BottomRight/BottomRight";
import BeforeLogin from "../BeforeLogin/BeforeLogin";

function MiddleBottom({ asset, dataForprice }) {
  let token = localStorage.getItem("token");
  const [currentAsset, setCurrentAsset] = useState(0);

  useEffect(() => {
    token &&
      fetch(`${YE}/user/deposit/check`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      })
        .then((res) => res.json())
        .then((res) => setCurrentAsset(Math.trunc(res.my_wallet[0].volume)));
  }, [asset]);

  const [activeClick, setActiveClick] = useState(false);
  const borderColorOn = () => setActiveClick(true);
  const borderColorOff = () => setActiveClick(false);

  const [activeClick1, setActiveClick1] = useState(false);
  const borderColorOn1 = () => setActiveClick1(true);
  const borderColorOff1 = () => setActiveClick1(false);

  const [activeClick3, setActiveClick3] = useState(false);
  const borderColorOn3 = () => setActiveClick3(true);
  const borderColorOff3 = () => setActiveClick3(false);

  const [activeClick4, setActiveClick4] = useState(false);
  const borderColorOn4 = () => setActiveClick4(true);
  const borderColorOff4 = () => setActiveClick4(false);

  function addComma(price) {
    if (price > 999) {
      return ("" + price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    } else {
      return price;
    }
  }

  const [priceNumber, setPriceNumber] = useState("");
  //const [changeNum, setChangeNum] = useState([]);
  const changeNumber = (e) => {
    setPriceNumber(e.target.value);
  };
  const [priceNumber1, setPriceNumber1] = useState("");
  const changeNumber1 = (e) => {
    setPriceNumber1(e.target.value);
  };
  // useEffect(() => {
  //   setPriceNumber(props.dateForprice);
  // }, [props.dateForprice]);

  useEffect(() => {
    console.log("dataEffect", dataForprice);
    setPriceNumber(dataForprice && dataForprice.split(".")[0]);
  }, [dataForprice]);

  useEffect(() => {
    setPriceNumber1(dataForprice && dataForprice.split(".")[0]);
  }, [dataForprice]);

  console.log(activeClick);

  return (
    <div>
      <TradingPartArticle>
        {/* <div>{token ? "" : <BeforeLogin />}</div> */}
        <TradingPartNav>
          <Nav left>매수</Nav>
          <Nav right>매도</Nav>
        </TradingPartNav>
        <TradingPartFeed>
          <TradingPartFeedLeft>
            <TradingPartFeedInner>
              <InputWrapper>
                <InputWrapperLeft>주문 가능</InputWrapperLeft>
                <InputWrapperRight>
                  <MoneyDetail left>{addComma(currentAsset)}</MoneyDetail>
                  <MoneyDetail right>KRW</MoneyDetail>
                </InputWrapperRight>
              </InputWrapper>
              <InputWrapper>
                <InputWrapperLeft>주문 가격</InputWrapperLeft>
                <InputPriceRight>
                  <InputPriceRightInner>
                    <InputInner click={activeClick}>
                      <InputPricePart
                        onFocus={() => borderColorOn()}
                        onBlur={() => borderColorOff()}
                        type="text"
                        placeholder
                        onChange={changeNumber}
                        value={priceNumber}
                        defaultValue={0}
                        onKeyDown={(e) =>
                          (e.keyCode === 69 ||
                            e.keyCode === 190 ||
                            e.keyCode === 187 ||
                            e.keyCode === 189) &&
                          e.preventDefault()
                        }
                      />
                      <PriceUnit>
                        <p>KRW</p>
                      </PriceUnit>
                    </InputInner>
                    <UpDown>
                      <Up>
                        <Button>u</Button>
                      </Up>
                      <Down>
                        <Button>f</Button>
                      </Down>
                    </UpDown>
                  </InputPriceRightInner>
                </InputPriceRight>
              </InputWrapper>
              <InputWrapper>
                <InputWrapperLeft>주문 수량</InputWrapperLeft>
                <InputPriceRight>
                  <InputPriceRightInner click={activeClick1}>
                    <InputPricePart
                      onFocus={() => borderColorOn1()}
                      onBlur={() => borderColorOff1()}
                      className="inputInput"
                      type="number"
                      placeholder
                      value=""
                      on
                    />
                    <PriceUnit>
                      <p>BTC</p>
                    </PriceUnit>
                    <UpDown></UpDown>
                  </InputPriceRightInner>
                </InputPriceRight>
              </InputWrapper>

              <PercentOrder>
                <PercentList>25%</PercentList>
                <PercentList>50%</PercentList>
                <PercentList>75%</PercentList>
                <PercentList>100%</PercentList>
              </PercentOrder>
              {/* </div> */}
              <InputWrapper>
                <InputWrapperLeft red>정산수량</InputWrapperLeft>
                <InputPriceRight>
                  <InputPriceRightInner>
                    <InputPricePart amount type="number" placeholder value="" />
                    <PriceUnit amount>
                      <p>KRW</p>
                    </PriceUnit>
                    <UpDown amount></UpDown>
                  </InputPriceRightInner>
                </InputPriceRight>
              </InputWrapper>
              <TextBottom className="textBottom">
                <span>최소주문수량:500 KRW</span>
                <span>수수료: 0.04%</span>
              </TextBottom>
              <TradingPartButton type="button">매수 BTC</TradingPartButton>
            </TradingPartFeedInner>
          </TradingPartFeedLeft>
          {/* <BottomRight dateForprice={priceNumber} /> */}
          <TradingPartFeedLeft>
            <TradingPartFeedInner>
              <InputWrapper>
                <InputWrapperLeft>주문 가능</InputWrapperLeft>
                <InputWrapperRight>
                  <MoneyDetail left>0</MoneyDetail>
                  <MoneyDetail right>BTC</MoneyDetail>
                </InputWrapperRight>
              </InputWrapper>
              <InputWrapper>
                <InputWrapperLeft>주문 가격</InputWrapperLeft>
                <InputPriceRight>
                  <InputPriceRightInner>
                    <InputInner clickright={activeClick3}>
                      <InputPricePart
                        onFocus={() => borderColorOn3()}
                        onBlur={() => borderColorOff3()}
                        type="text"
                        placeholder
                        onChange={changeNumber1}
                        value={priceNumber1}
                        defaultValue={0}
                        onKeyDown={(e) =>
                          (e.keyCode === 69 ||
                            e.keyCode === 190 ||
                            e.keyCode === 187 ||
                            e.keyCode === 189) &&
                          e.preventDefault()
                        }
                      />
                      <PriceUnit>
                        <p>KRW</p>
                      </PriceUnit>
                    </InputInner>
                    <UpDown>
                      <Up>
                        <Button>u</Button>
                      </Up>
                      <Down>
                        <Button>f</Button>
                      </Down>
                    </UpDown>
                  </InputPriceRightInner>
                </InputPriceRight>
              </InputWrapper>
              <InputWrapper>
                <InputWrapperLeft>주문 수량</InputWrapperLeft>
                <InputPriceRight>
                  <InputPriceRightInner clickright={activeClick4}>
                    <InputPricePart
                      onFocus={() => borderColorOn4()}
                      onBlur={() => borderColorOff4()}
                      type="text"
                      placeholder
                      value=""
                    />
                    <PriceUnit>
                      <p>BTC</p>
                    </PriceUnit>
                    <UpDown></UpDown>
                  </InputPriceRightInner>
                </InputPriceRight>
              </InputWrapper>

              <PercentOrder>
                <PercentList>25%</PercentList>
                <PercentList>50%</PercentList>
                <PercentList>75%</PercentList>
                <PercentList>100%</PercentList>
              </PercentOrder>
              {/* </div> */}
              <InputWrapper>
                <InputWrapperLeft blue>정산수량</InputWrapperLeft>
                <InputPriceRight>
                  <InputPriceRightInner>
                    <InputPricePart amount type="text" placeholder value="" />
                    <PriceUnit amount>
                      <p>KRW</p>
                    </PriceUnit>
                    <UpDown amount></UpDown>
                  </InputPriceRightInner>
                </InputPriceRight>
              </InputWrapper>
              <TextBottom className="textBottom">
                <span>최소주문수량:500 KRW</span>
                <span>수수료: 0.04%</span>
              </TextBottom>
              <TradingPartButton selling>매도 BTC</TradingPartButton>
            </TradingPartFeedInner>
          </TradingPartFeedLeft>
        </TradingPartFeed>
      </TradingPartArticle>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    asset: state.detectAsset.asset,
  };
};

export default connect(mapStateToProps)(MiddleBottom);

const TradingPartArticle = styled.div`
  position: relative;
  border: 1px solid #ebeef6;
  height: 355px;
  /* width: 900px; */

  @media ${(props) => props.theme.tabletL} {
  }
`;
// @media ${(props) => props.theme.mobile} {
//   margin-top: 8px;
//   width: 100%;
// }

const TradingPartNav = styled.div``;

const Nav = styled.div`
  ${(props) =>
    props.left &&
    css`
      display: inline-block;
      color: #e21b36;
      height: 48px;
      width: 50%;
      padding: 0 14px;
      line-height: 48px;
      text-align: left;
      cursor: default;
      background-color: #fff !important;
      border-bottom: 1px solid #ebeef6 !important;
      border-right: 1px solid #ebeef6 !important;
    `}

  ${(props) =>
    props.right &&
    css`
      color: #00338d;
      display: inline-block;
      height: 48px;
      padding: 0 14px;
      line-height: 48px;
      text-align: left;
      width: 50%;
      cursor: default;
      background-color: #fff !important;
      border-bottom: 1px solid #ebeef6 !important;
    `}
`;

const TradingPartFeed = styled.div`
  display: block;
  height: 100%;
`;

const TradingPartFeedLeft = styled.div`
  border-right: 1px solid #ebeef6;
  display: block;
  float: left;
  width: 50%;
  background-color: #fff;
  padding: 14px;
`;

const TradingPartFeedInner = styled.div`
  display: block;
`;

const InputWrapper = styled.div`
  padding: 0 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputWrapperLeft = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #596070;
  vertical-align: middle;

  ${(props) =>
    props.red &&
    css`
      color: #e21b36;
    `}

  ${(props) =>
    props.blue &&
    css`
      color: #174ca2;
    `}
`;

const InputWrapperRight = styled.div`
  vertical-align: middle;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoneyDetail = styled.div`
  ${(props) =>
    props.left &&
    css`
      font-size: 14px;
      font-weight: 700;
      color: #022553;
    `}
  ${(props) =>
    props.right &&
    css`
      font-size: 12px;
      margin-left: 5px;
      font-weight: 400;
      color: #919dae;
    `}
`;

const InputPriceRight = styled.div`
  width: 75%;
  overflow: hidden;
  vertical-align: middle;
  text-align: right;
  white-space: nowrap;
  /* display: table-cell; */
`;

const InputPriceRightInner = styled.div`
  width: 100%;
  border-collapse: separate;
  white-space: nowrap;
  display: flex;
  ${(props) =>
    props.click &&
    css`
      border: 1px solid red;
    `}
  ${(props) =>
    props.clickright &&
    css`
      border: 1px solid blue;
    `}
`;

const InputInner = styled.div`
  width: 100%;
  border-collapse: separate;
  white-space: nowrap;
  display: flex;
  ${(props) =>
    props.click &&
    css`
      border: 1px solid red;
    `}
  ${(props) =>
    props.clickright &&
    css`
      border: 1px solid blue;
    `}
`;

const InputPricePart = styled.input`
  width: 100%;
  font-weight: 700;
  font-size: 14px;

  padding: 0 !important;
  text-align: right;
  float: right;
  border: 1px solid #ebeef6;
  border-right-width: 0;
  border-radius: 2px 0 0 2px;
  /* display: table-cell; */
  height: 34px;
  vertical-align: middle;
  color: #596070;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.amount &&
    css`
      background-color: #f5f8ff;
      border: 0;
    `}
`;
/* ${(props) =>
  props.onFocus &&
  css`
    outline: none;
  `} */
/* 
  ${(props) =>
    props.click &&
    css`
      border: 1px solid red;
    `} */

const PriceUnit = styled.div`
  padding: 10px 5px;
  width: 61px;
  border-color: #ebeef6;
  border-style: solid;
  border-width: 1px 0;
  text-align: left;

  p {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.03em;
    color: #919dae;
  }
  ${(props) =>
    props.amount &&
    css`
      background-color: #f5f8ff;
      border: 0;
    `}
`;

const UpDown = styled.div`
  width: 28px;
  /* position: relative;
  display: table-cell;
  vertical-align: top; */
  border: 1px solid #ebeef6;
  border-left: none;
  ${(props) =>
    props.amount &&
    css`
      background-color: #f5f8ff;
      border: 0;
    `}
`;

const Up = styled.div`
  height: 50%;
  font-weight: 400;
  line-height: 100%;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ebeef6;
  background-color: #f5f8ff;
  color: #919dae;
  border-width: 1px 1px 0;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
`;

const Down = styled.div`
  height: 50%;
  font-weight: 400;
  line-height: 100%;
  text-align: center;
  cursor: pointer;
  background-color: #f5f8ff;
  color: #919dae;
  border: 1px solid #ebeef6;
  border-width: 1px 1px 0;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
`;

const Button = styled.div`
  font-family: "emoticon";
`;
const PercentOrder = styled.div`
  float: right;
  text-align: right;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  width: 75%;
  margin-bottom: 14px;
  color: #919dae;
  cursor: pointer;
`;

const PercentList = styled.li`
  font-size: 10px;
  font-weight: 400;
  display: inline-block;
  width: 21%;
  height: 16px;
  max-width: 54px;
  margin-left: 6px;
  line-height: 14px;
  color: #919dae;
  text-align: center;
  cursor: pointer;
  border: 1px solid #d8dce9;
  border-radius: 2px;

  &:hover {
    border: 1px solid #999797;
    color: #727272;
  }
`;

const TextBottom = styled.div`
  width: 100%;
  padding: 0 0 10px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 10px;
    font-weight: 400;
    color: #919dae;
    letter-spacing: -0.03em;
    vertical-align: middle;
  }
`;

const TradingPartButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  width: 100%;
  height: 38px;
  margin: 0;
  font-weight: 700;
  line-height: 38px;
  color: #fff;
  text-align: center;
  border-radius: 0;
  background-color: #e84054;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #c2172b;
  }
  ${(props) =>
    props.selling &&
    css`
      background-color: #2452b0;

      &:hover {
        background-color: #2432b0;
      }
    `}
`;

const TradingPartButton2 = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  width: 100%;
  height: 38px;
  margin: 0;
  font-weight: 700;
  line-height: 38px;
  color: #fff;
  text-align: center;
  border-radius: 0;
  background-color: #2452b0;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #143f96;
  }
`;
