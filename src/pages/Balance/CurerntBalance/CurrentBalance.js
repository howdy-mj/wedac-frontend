import React from "react";
import styled, { css } from "styled-components";
import test from "../../../images/search.png";

function CurrentBalance() {
  return (
    <DetailContainer>
      <DetailInner>
        <Header>
          <HeaderUl>
            <Li header isName>
              종목
            </Li>
            <Li header currentAmount>
              보유수량
            </Li>
            <Li header avgBidPrice>
              평균 매수가격
            </Li>
            <Li header currentValue>
              평가액
            </Li>
            <Li header valuation>
              평가손익
            </Li>
            <Li header earningsRate>
              수익률(%)
            </Li>
            <Li header empty></Li>
          </HeaderUl>
        </Header>
        <DetailContents>
          <DetailContentsUl>
            <Li detail isName>
              <Logo>
                <LogoImg src={test} alt="" />
              </Logo>
              <div>
                <P kor>지닥토큰</P>
                <P eng>GT</P>
              </div>
            </Li>
            <Li detail currentAmount>
              <P>300,000.00004256</P>
            </Li>
            <Li detail avgBidPrice>
              <P price>2.3624</P>
            </Li>
            <Li detail currentValue>
              <P currentValue>27,930</P>
            </Li>
            <Li detail valuation>
              <P minus>-680,790</P>
            </Li>
            <Li detail earningsRate>
              <P minus>-96.06%</P>
            </Li>
            <Li detail goOrder>
              <P goOrder>주문</P>
            </Li>
          </DetailContentsUl>
        </DetailContents>
      </DetailInner>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
`;

const DetailInner = styled.div`
  width: 100%;
`;

const Header = styled.div`
  height: 58px;
`;

const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d8dce9;
`;

const Li = styled.li`

div {
    padding-left: 24px;
}

${(props) =>
  props.header &&
  css`
    color: ${(props) => props.theme.noChangeColor};
    font-size: 12px;
    font-weight: 700;
    padding: 20px 24px;
  `}

${(props) =>
  props.detail &&
  css`
    padding: 10px 14px;
    font-size: 14px;
  `}

${(props) =>
  props.isName &&
  css`
    width: 17%;
  `}
${(props) =>
  props.currentAmount &&
  css`
    width: 16%;
    text-align: center;
  `}
${(props) =>
  props.avgBidPrice &&
  css`
    width: 12%;
  `}
${(props) =>
  props.currentValue &&
  css`
    width: 15%;
  `}
${(props) =>
  props.valuation &&
  css`
    width: 15%;
  `}
${(props) =>
  props.eargningsRate &&
  css`
    width: 14%;
  `}
${(props) =>
  props.empty &&
  css`
    width: 11%;
  `}
  ${(props) =>
    props.goOrder &&
    css`
      width: 11%;
      text-align: center;
      line-height: 28px;
      margin-left: 50px;
    `}

`;

const DetailContents = styled.div`
  height: 59px;
`;

const DetailContentsUl = styled.ul`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ebeef6;
  align-items: center;
`;

const Logo = styled.div`
  margin-right: 3px;
`;

const LogoImg = styled.img`
  height: 22px;
  width: 22px;
`;

const P = styled.p`
  ${(props) =>
    props.kor &&
    css`
      color: ${(props) => props.theme.noChangeColor};
      font-weight: 700;
      margin-bottom: 2px;
    `}
  ${(props) =>
    props.eng &&
    css`
      font-size: 12px;
      letter-spacing: -0.03em;
      color: #919dae;
    `}

  ${(props) =>
    props.price &&
    css`
      padding-left: 15px;
    `}

  ${(props) =>
    props.currentValue &&
    css`
      padding-left: 10px;
    `}
  ${(props) =>
    props.goOrder &&
    css`
      width: 65px;
      height: 30px;
      color: #596070;
      font-family: "NotoSans";
      font-size: 12px;
      letter-spacing: -0.03em;
      border: 1px solid #ebeef6;
      border-radius: 2px;
      cursor: pointer;
    `}
  
    ${(props) =>
      props.plus &&
      css`
        color: ${(props) => props.theme.plusColor};
      `}
    ${(props) =>
      props.minus &&
      css`
        color: ${(props) => props.theme.minusColor};
      `}

`;

export default CurrentBalance;
