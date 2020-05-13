import React from "react";
import styled, { css } from "styled-components";

function TradingPart() {
  return (
    <div>
      {" "}
      <TradingPartArticle>
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
                  <MoneyDetail left>0</MoneyDetail>
                  <MoneyDetail right>KRW</MoneyDetail>
                </InputWrapperRight>
              </InputWrapper>
              <InputWrapper>
                <InputWrapperLeft>주문 가격</InputWrapperLeft>
                <InputPriceRight className="inputPriceRight">
                  <InputPricePart
                    className="inputInput"
                    type="text"
                    placeholder
                    value="11,442,000"
                  />
                </InputPriceRight>
              </InputWrapper>
              <InputWrapper>
                <InputWrapperLeft>주문 수량</InputWrapperLeft>
                {/* <div className="inputOrderRight"> */}
                {/* <div className="inputDetail"> */}
                <InputPricePart
                  className="inputInput"
                  type="text"
                  placeholder
                  value="11,442,000"
                />
                {/* </div> */}
                {/* </div> */}
              </InputWrapper>
              {/* <div className="percentOrderPart"> */}
              <PercentOrder className="percentOrder">
                <PercentList>25%</PercentList>
                <PercentList>50%</PercentList>
                <PercentList>75%</PercentList>
                <PercentList>100%</PercentList>
              </PercentOrder>
              {/* </div> */}
              <InputWrapper>
                <InputWrapperLeft>정산수량</InputWrapperLeft>

                {/* <div className="settlementAmountRight"> */}
                <InputPricePart type="text" placeholder value="11,442,000" />
                {/* </div> */}
              </InputWrapper>
              <TextBottom className="textBottom">
                <span>최소주문수량:500 KRW</span>
                <span>수수로: 0.04%</span>
              </TextBottom>
              <TradingPartButton className="buttonButton" type="button">
                매수 BTC
              </TradingPartButton>
            </TradingPartFeedInner>
          </TradingPartFeedLeft>
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
                {/* <div className="inputPriceRight">
                  <div className="inputDetail"> */}
                <InputPricePart
                  className="inputInput"
                  type="text"
                  placeholder
                  value="11,442,000"
                />
                {/* </div>
                </div> */}
              </InputWrapper>
              <InputWrapper>
                <InputWrapperLeft>주문 수량</InputWrapperLeft>
                {/* <div className="inputOrderRight">
                  <div className="inputDetail"> */}
                <InputPricePart
                  className="inputInput"
                  type="text"
                  placeholder
                  value="11,442,000"
                />
                {/* </div>
                </div> */}
              </InputWrapper>
              <PercentOrder className="percentOrder">
                <PercentList>25%</PercentList>
                <PercentList>50%</PercentList>
                <PercentList>75%</PercentList>
                <PercentList>100%</PercentList>
              </PercentOrder>
              <InputWrapper>
                <InputWrapperLeft>정산수량</InputWrapperLeft>
                {/* <div className="settlementAmountRight"> */}
                <InputPricePart type="text" placeholder value="11,442,000" />
                {/* </div> */}
              </InputWrapper>
              <TextBottom className="textBottom">
                <span>최소주문수량:500 KRW</span>
                <span>수수로: 0.04%</span>
              </TextBottom>
              <TradingPartButton2 className="buttonButton" type="button">
                매도 BTC
              </TradingPartButton2>
            </TradingPartFeedInner>
          </TradingPartFeedLeft>
        </TradingPartFeed>
      </TradingPartArticle>
    </div>
  );
}

export default TradingPart;

const TradingPartArticle = styled.div`
  border: 1px solid #ebeef6;
  height: 355px;
`;
const TradingPartNav = styled.div`
  /* display: flex; */
`;
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
  vertical-align: middle;
  float: right;
`;
const InputPricePart = styled.input`
  float: right;
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
