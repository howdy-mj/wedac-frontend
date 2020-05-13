import React from "react";
import styled, { css } from "styled-components";
import searchIcon from "../../../../images/search.png";

function KRW() {
  return (
    <KRWWrap>
      <CryptoListItem>
        {/* {marketInfo &&
            marketInfo.map((info) => {
              return (
                <li className="logo">
            <img src={searchIcon} alt="logo" />
          </li>
          <li className="name">
            <div className="kor">코스모스아톰</div>
            <div className="eng">ATOM/KRW</div>
          </li>
          <li className="price blue">3,232</li>
          <li className="rate">
            <p className="minus">-0.28%</p>
          </li>
          <li className="higher">3,309</li>
          <li className="lower">3,095</li>
          <li className="amount">6,992,931,658</li>
              );
            })} */}
        <Li>
          <Img src={searchIcon} alt="logo" />
        </Li>
        <Li name>
          <LiDiv kor>코스모스아톰</LiDiv>
          <LiDiv eng>ATOM/KRW</LiDiv>
        </Li>
        <Li price blue>
          3,232
        </Li>
        <Li rate>
          <P minus>-0.28%</P>
        </Li>
        <Li higher>3,309</Li>
        <Li lower>3,095</Li>
        <Li amount>6,992,931,658</Li>
      </CryptoListItem>
    </KRWWrap>
  );
}

const KRWWrap = styled.div`
  border-bottom: 1px solid #ebeef6;
  padding: 0 32px;
  margin: 2px auto;
`;

const CryptoListItem = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 47px;
`;

const Li = styled.li`
  text-align: right;

  ${(props) =>
    props.name &&
    css`
      width: 13%;
      text-align: left;
    `}

  ${(props) =>
    props.price &&
    css`
      width: 15%;
      font-weight: 700;
    `}
  
  ${(props) =>
    props.red &&
    css`
      color: ${(props) => props.theme.plusColor};
    `}

  ${(props) =>
    props.blue &&
    css`
      color: ${(props) => props.theme.minusColor};
    `}

  ${(props) =>
    props.nochange &&
    css`
      color: ${(props) => props.theme.noChangeColor};
    `}

  ${(props) =>
    props.rate &&
    css`
      width: 15%;
      color: white;
      font-size: 14px;
    `}
  
    ${(props) =>
      props.higher &&
      css`
        width: 15%;
        font-size: 14px;
      `}

    ${(props) =>
      props.lower &&
      css`
        width: 15%;
        font-size: 14px;
      `}

    ${(props) =>
      props.amount &&
      css`
        width: 20%;
        font-size: 14px;
      `}

  @media ${(props) => props.theme.tabletS} {
    ${(props) =>
      props.name &&
      css`
        width: 30%;
      `}

      ${(props) =>
        props.price &&
        css`
          width: 10%;
        `}

      ${(props) =>
        props.rate &&
        css`
          width: 35%;
        `}

      ${(props) =>
        props.higher &&
        css`
          display: none;
        `}

      ${(props) =>
        props.lower &&
        css`
          display: none;
        `}
  }

`;

const Img = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 10px;

  @media ${(props) => props.theme.tabletS} {
    margin-right: 3px;
  }
`;

const LiDiv = styled.div`
  ${(props) =>
    props.kor &&
    css`
      color: ${(props) => props.theme.noChangeColor};
      font-weight: 700;
      font-size: 12px;
    `}

  ${(props) =>
    props.eng &&
    css`
      font-size: 10px;
      color: #919dae;
    `}
`;

const P = styled.p`
  display: inline-block;
  width: 80px;
  height: 26px;
  padding-top: 5px;
  text-align: center;

  ${(props) =>
    props.plus &&
    css`
      background-color: ${(props) => props.theme.plusColor};
    `}

  ${(props) =>
    props.minus &&
    css`
      background-color: ${(props) => props.theme.minusColor};
    `}

  ${(props) =>
    props.zero &&
    css`
      background-color: ${(props) => props.theme.noChangeColor};
    `}
`;

export default KRW;
