import React from "react";
import styled, { css } from "styled-components";
import test from "../../../../images/search.png";
import Nav from "../../../../component/Nav/Nav";

function MobileOutstanding() {
  return (
    <DetailContainer>
      <Header>
        <HeaderLeft>
          <OrderType minus>매도</OrderType>
          <Name>
            지닥토큰<HeaderSpan>GT</HeaderSpan>
          </Name>
        </HeaderLeft>
        <HeaderRight>2020-05-14 08:57</HeaderRight>
      </Header>
      <DetailContents>
        <DetailLeft>
          <OneContainer>
            <DetailTitle>주문가격</DetailTitle>
            <DetailValue>0.0948</DetailValue>
          </OneContainer>
          <OneContainer>
            <DetailTitle>주문수량</DetailTitle>
            <DetailValue>5900.00000000</DetailValue>
          </OneContainer>
          <OneContainer>
            <DetailTitle>미체결수량</DetailTitle>
            <DetailValue>5900.00000000</DetailValue>
          </OneContainer>
        </DetailLeft>
        <DetailRight>
          <Cancel>취소</Cancel>
        </DetailRight>
      </DetailContents>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  padding: 24px;
  border-bottom: 1px solid #ebeef6;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #022553;
  margin-bottom: 25px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
`;

const OrderType = styled.div`
  margin-right: 20px;

  ${(props) =>
    props.minus &&
    css`
      color: ${(props) => props.theme.minusColor};
    `}
  ${(props) =>
    props.plus &&
    css`
      color: ${(props) => props.theme.plusColor};
    `}
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

const HeaderSpan = styled.span`
  color: #919dae;
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
`;

const HeaderRight = styled.div`
  font-size: 10px;
  color: #919dae;
`;

const DetailContents = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

const DetailLeft = styled.div`
  width: 70%;
`;

const OneContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DetailTitle = styled.div`
  color: #919dae;
`;

const DetailValue = styled.div`
  color: ${(props) => props.theme.noChangeColor};

  ${(props) =>
    props.plus &&
    css`
      color: ${(prpos) => props.theme.plusColor};
    `}
  ${(props) =>
    props.minus &&
    css`
      color: ${(prpos) => props.theme.minusColor};
    `}
`;

const DetailRight = styled.div`
  color: ${(props) => props.theme.subColor};
  font-family: "NotoSans";
  padding-top: 40px;
`;

const Cancel = styled.p`
  width: 55px;
  height: 28px;
  border: 1px solid ${(props) => props.theme.subColor};
  border-radius: 2px;
  text-align: center;
  line-height: 25px;
`;

export default MobileOutstanding;
