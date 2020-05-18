import React, { useState } from "react";
import styled, { css } from "styled-components";
import test from "../../../../images/search.png";

function MobileCurrent() {
  const [hasTrade, setHasTrade] = useState(false);
  const [plus, setPlus] = useState(false);

  return (
    <>
      {hasTrade ? (
        <DetailContainer>
          <Header>
            <HeaderLeft>
              <LogoDiv>
                <LogoImg src={test} alt="" />
              </LogoDiv>
              <Name>
                지닥토큰<HeaderSpan>GT</HeaderSpan>
              </Name>
            </HeaderLeft>
            <HeaderRight>
              <div>300,000.00004256 GT</div>
            </HeaderRight>
          </Header>
          <DetailContents>
            <DetailLeft>
              <OneContainer>
                <DetailTitle>평균 매수가격</DetailTitle>
                <DetailValue>2.3624</DetailValue>
              </OneContainer>
              <OneContainer>
                <DetailTitle>평가액</DetailTitle>
                <DetailValue>27,930</DetailValue>
              </OneContainer>
              <OneContainer>
                <DetailTitle>평가손익</DetailTitle>
                <DetailValue minus>-680,790</DetailValue>
              </OneContainer>
              <OneContainer>
                <DetailTitle>수익률(%)</DetailTitle>
                <DetailValue minus>-96.06%</DetailValue>
              </OneContainer>
            </DetailLeft>
            <DetailRight>
              <GoExchange>주문</GoExchange>
            </DetailRight>
          </DetailContents>
        </DetailContainer>
      ) : (
        <NoTrade>해당하는 검색 내역이 없습니다.</NoTrade>
      )}
    </>
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
`;

const LogoDiv = styled.div`
  margin-right: 5px;
`;

const LogoImg = styled.img`
  width: 22px;
  height: 22px;
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
  font-size: 14px;
  font-weight: 700;
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
  padding-top: 60px;
`;

const GoExchange = styled.p`
  width: 55px;
  height: 28px;
  border: 1px solid ${(props) => props.theme.subColor};
  border-radius: 2px;
  text-align: center;
  line-height: 25px;
`;

const NoTrade = styled.div`
  margin: 60px auto;
  text-align: center;
  color: #919dae;
  font-size: 12px;
`;

export default MobileCurrent;
