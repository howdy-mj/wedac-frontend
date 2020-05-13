import React, { Component } from "react";
import styled from "styled-components";

function PriceAmountTop() {
  return (
    <div>
      <AskPrice className="askPrice">
        <PriceRow className="priceRow">
          {/* <div className="priceRowDetail"> */}
          <span>11.771.00</span>
          <span>-2.33%</span>
          <span>0.123123123</span>
          {/* </div> */}
        </PriceRow>
        <PriceRow className="priceRow">
          {/* <div className="priceRowDetail"> */}
          <span>11.771.00</span>
          <span>-2.33%</span>
          <span>0.123123123</span>
          {/* </div> */}
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
        </PriceRow>
      </AskPrice>
    </div>
  );
}

export default PriceAmountTop;
const AskPrice = styled.ul`
  padding-top: 5px;
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
