import React from "react";
import styled, { css } from "styled-components";

function OutstandingOrder() {
  return (
    <DetailContainer>
      <DetailInner>
        <Header>
          <HeaderUl>
            <Li header time>
              시간
            </Li>
            <Li header market>
              종목
            </Li>
            <Li header order>
              거래종류
            </Li>
            <Li header price>
              주문가격
            </Li>
            <Li header amount>
              주문 수량
            </Li>
            <Li header outstanding>
              미체결 수량
            </Li>
            <Li header cancel>
              주문취소
            </Li>
          </HeaderUl>
        </Header>
        <DetailContents>
          <DetailContentsUl>
            <Li detail time>
              <div>
                <P time>2020-03-19</P>
                <P time>18:50:03</P>
              </div>
            </Li>
            <Li detail market>
              <P>GT/KRW</P>
            </Li>
            <Li detail order>
              <P order minus>
                매도
              </P>
            </Li>
            <Li detail price>
              <P price>0.0948</P>
            </Li>
            <Li detail amount>
              <P>5900.00000000</P>
            </Li>
            <Li detail outstanding>
              <P>5900.00000000</P>
            </Li>
            <Li detail cancel>
              <P cancel>주문취소</P>
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
  width: 100%;
  height: 100%;
  align-items: center;
  border-bottom: 1px solid #d8dce9;
`;

const Li = styled.li`
width: 100%;
  
  ${(props) =>
    props.header &&
    css`
      color: ${(props) => props.theme.noChangeColor};
      font-size: 12px;
      font-weight: 700;
      padding: 10px 24px;
    `}
  
  ${(props) =>
    props.detail &&
    css`
      font-size: 14px;
      padding: 10px 14px;
    `}
  
  ${(props) =>
    props.time &&
    css`
      width: 17%;
      text-align: left;
    `}
    div {
        margin-top: 10px;
    }
  ${(props) =>
    props.detail &&
    props.time &&
    css`
      width: 17%;
      text-align: left;
      padding-left: 24px;
    `}
  ${(props) =>
    props.market &&
    css`
      width: 12%;
      text-align: right;
    `}
  ${(props) =>
    props.order &&
    css`
      width: 10%;
      text-align: right;
    `}
  ${(props) =>
    props.price &&
    css`
      width: 15%;
      text-align: right;
    `}
  ${(props) =>
    props.amount &&
    css`
      width: 15%;
      text-align: right;
    `}
  ${(props) =>
    props.outstanding &&
    css`
      width: 15%;
      text-align: right;
    `}
  
  ${(props) =>
    props.cancel &&
    css`
      width: 15%;
      text-align: right;
      line-height: 28px;
    `}

  ${(props) =>
    props.detail &&
    props.cancel &&
    css`
      width: 15%;
      text-align: right;
      line-height: 28px;
      padding-right: 24px;
      padding-left: 70px;
    `}

`;

const DetailContents = styled.div`
  height: 69px;
`;

const DetailContentsUl = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ebeef6;
  align-items: center;
`;

const P = styled.p`
  margin-top: 10px;

  ${(props) =>
    props.time &&
    css`
      margin-top: 0;
    `}
    ${(props) =>
      props.order &&
      css`
        padding-right: 15px;
      `}
    ${(props) =>
      props.price &&
      css`
        padding-right: 10px;
      `}

  ${(props) =>
    props.cancel &&
    css`
      width: 65px;
      height: 30px;
      color: #596070;
      font-family: "NotoSans";
      font-size: 12px;
      letter-spacing: -0.03em;
      border: 1px solid #ebeef6;
      border-radius: 2px;
      text-align: center;
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

export default OutstandingOrder;
