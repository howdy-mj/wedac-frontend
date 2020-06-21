import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { YE } from "../../../../config";

function KRW() {
  const [KRWdata, setKRWdata] = useState([]);

  // KRW 마켓 정보 가져오기
  useEffect(() => {
    fetch(`${YE}/market/KRW`)
      .then((res) => res.json())
      .then((res) => setKRWdata(res.history));
  }, []);

  return (
    <KRWWrap>
      {KRWdata &&
        KRWdata.map((data, index) => {
          return (
            <>
              <CryptoListItem key={index}>
                <Li>
                  <Img src={data.thumbnamil_url} alt="logo" />
                </Li>
                <Li isName>
                  <LiDiv kor>{data.coin_kor_name}</LiDiv>
                  <LiDiv eng>{data.coin_code}/KRW</LiDiv>
                </Li>
                <Li price blue data={data.change_rate}>
                  {Number(data.present_price).toFixed(2)}
                </Li>
                <Li rate>
                  <P data={data.change_rate} minus>
                    {data.change_rate}%
                  </P>
                </Li>
                <Li higher>{Number(data.high_price).toFixed(2)}</Li>
                <Li lower>{Number(data.low_price).toFixed(2)}</Li>
                <Li amount>{data.transaction_price}</Li>
              </CryptoListItem>
            </>
          );
        })}
    </KRWWrap>
  );
}

const KRWWrap = styled.div`
  margin: 2px auto;
  height: 700px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b8b8b8;
  }
`;

const CryptoListItem = styled.ul`
  border-bottom: 1px solid #ebeef6;
  padding: 0 32px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 47px;
`;

const Li = styled.li`
  text-align: right;
  color: ${(props) => {
    if (props.data > 0) return props.theme.plusColor;
    else if (props.data < 0) return props.theme.minusColor;
    else return props.theme.noChangeColor;
  }};

  ${(props) =>
    props.isName &&
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
      props.isName &&
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
  background-color: ${(props) => {
    if (props.data > 0) return props.theme.plusColor;
    else if (props.data < 0) return props.theme.minusColor;
    else return props.theme.noChangeColor;
  }};
`;

export default KRW;
