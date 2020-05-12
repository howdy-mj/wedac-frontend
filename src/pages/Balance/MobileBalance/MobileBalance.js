import React from "react";
import styled, { css } from "styled-components";
import test from "../../../images/search.png";

function MobileBalance() {
  return (
    <MobileBalanceWrap>
      <div>
        <SummaryContainer>
          <div>
            <SummaryDiv>
              <SummaryTitle>총 보유자산</SummaryTitle>
              <p>
                <SummarySpan num>50,000</SummarySpan>
                <SummarySpan per>KRW</SummarySpan>
              </p>
            </SummaryDiv>
            <SummaryDiv>
              <SummaryTitle>KRW 보유수량</SummaryTitle>
              <p>
                <SummarySpan num>0</SummarySpan>
                <SummarySpan per>KRW</SummarySpan>
              </p>
            </SummaryDiv>
          </div>
          <div>
            <CalculatedContainer>
              <CalculatedTitle>총 매입액</CalculatedTitle>
              <AssetDiv>
                <AssetSpan num>708,000</AssetSpan>
                <AssetSpan per>KRW</AssetSpan>
              </AssetDiv>
            </CalculatedContainer>
            <CalculatedContainer>
              <CalculatedTitle>암호화폐 총 평가액</CalculatedTitle>
              <AssetDiv>
                <AssetSpan num>50,000</AssetSpan>
                <AssetSpan per>KRW</AssetSpan>
              </AssetDiv>
            </CalculatedContainer>
            <CalculatedContainer>
              <CalculatedTitle>총 평가손익</CalculatedTitle>
              <AssetDiv minus>
                <AssetSpan num>-50,000</AssetSpan>
                <AssetSpan per>KRW</AssetSpan>
              </AssetDiv>
            </CalculatedContainer>
            <CalculatedContainer>
              <CalculatedTitle>총 수익률</CalculatedTitle>
              <AssetDiv minus>
                <AssetSpan num>-90.06</AssetSpan>
                <AssetSpan per c>
                  %
                </AssetSpan>
              </AssetDiv>
            </CalculatedContainer>
          </div>
        </SummaryContainer>
      </div>
      <div>
        <Contents>
          <Category>
            <CategoryDiv selected>
              <span>잔고</span>
            </CategoryDiv>
            <CategoryDiv>
              <span>미체결 주문</span>
            </CategoryDiv>
          </Category>
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
        </Contents>
      </div>
    </MobileBalanceWrap>
  );
}

const MobileBalanceWrap = styled.div`
  display: none;

  @media ${(props) => props.theme.mobile} {
    display: block;
    margin-top: 45px;
  }
`;

const SummaryContainer = styled.div`
  height: 324px;
  background-color: #f5f8ff;
  padding: 24px;
`;

const SummaryDiv = styled.div`
  margin-bottom: 40px;
`;

const SummaryTitle = styled.p`
  font-size: 14px;
  letter-spacing: -0.03em;
  margin-bottom: 5px;
`;

const SummarySpan = styled.span`
  ${(props) =>
    props.num &&
    css`
      color: ${(props) => props.theme.noChangeColor}
      font-size: 20px;
      font-weight: 700;
    `}

  ${(props) =>
    props.per &&
    css`
      font-size: 12px;
      color: #919dae;
      margin-left: 5px;
    `}
`;

const CalculatedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.noChangeColor};
  margin-bottom: 20px;
`;

const CalculatedTitle = styled.div`
  font-size: 12px;
`;

const AssetDiv = styled.div`
  font-size: 14px;

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

const AssetSpan = styled.span`
  ${(props) =>
    props.num &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.per &&
    css`
      color: #919dae;
      margin-left: 5px;
      font-size: 12px;
    `}
    ${(props) =>
      props.c &&
      css`
        margin-right: 15px;
      `}
`;

const Contents = styled.div`
  border-top: 1px solid #ebeef6;
`;

const Category = styled.div`
  display: flex;
  height: 46px;
  font-size: 14px;
  font-weight: 700;
`;

const CategoryDiv = styled.div`
  width: 50%;
  line-height: 48px;
  text-align: center;
  color: #919dae;

  ${(props) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.subColor};
      padding-bottom: 5px;
      border-bottom: 1px solid ${(props) => props.theme.subColor};
    `}
`;

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
  border: 1px solid $subColor;
  border-radius: 2px;
  text-align: center;
  line-height: 25px;
`;

export default MobileBalance;
