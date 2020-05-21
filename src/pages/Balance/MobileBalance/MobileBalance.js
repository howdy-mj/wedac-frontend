import React, { useState } from "react";
import styled, { css } from "styled-components";
import MobileCurrent from "./MobileCurrent/MobileCurrent";
import MobileOutstanding from "./MobileOutstanding/MobileOutstanding";
import OnlyLogin from "../../Login/OnlyLogin";

const tabs = {
  0: <MobileCurrent />,
  1: <MobileOutstanding />,
};

function MobileBalance() {
  let token = localStorage.getItem("token");
  const [selected, setSelected] = useState(0);
  const changeTab = (id) => setSelected(id);
  const [allAsset, setAllAsset] = useState(0);
  const [KRW, setKRW] = useState(0);
  const [gainLoss, setGainLoss] = useState(0);
  const [percent, setPercent] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [evaluated, setEvaluated] = useState(0);
  const [plus, setPlus] = useState(false);

  return (
    <>
      {token ? (
        <MobileBalanceWrap>
          <div>
            <SummaryContainer>
              <div>
                <SummaryDiv>
                  <SummaryTitle>총 보유자산</SummaryTitle>
                  <p>
                    <SummarySpan num>{allAsset}</SummarySpan>
                    <SummarySpan per>KRW</SummarySpan>
                  </p>
                </SummaryDiv>
                <SummaryDiv>
                  <SummaryTitle>KRW 보유수량</SummaryTitle>
                  <p>
                    <SummarySpan num>{KRW}</SummarySpan>
                    <SummarySpan per>KRW</SummarySpan>
                  </p>
                </SummaryDiv>
              </div>
              <div>
                <CalculatedContainer>
                  <CalculatedTitle>총 매입액</CalculatedTitle>
                  <AssetDiv>
                    <AssetSpan num>{buyAmount}</AssetSpan>
                    <AssetSpan per>KRW</AssetSpan>
                  </AssetDiv>
                </CalculatedContainer>
                <CalculatedContainer>
                  <CalculatedTitle>암호화폐 총 평가액</CalculatedTitle>
                  <AssetDiv>
                    <AssetSpan num>{evaluated}</AssetSpan>
                    <AssetSpan per>KRW</AssetSpan>
                  </AssetDiv>
                </CalculatedContainer>
                <CalculatedContainer>
                  <CalculatedTitle>총 평가손익</CalculatedTitle>
                  {/* 0보다 크면 +, 작으면 -*/}
                  <AssetDiv isPlus={plus}>
                    <AssetSpan num>{gainLoss}</AssetSpan>
                    <AssetSpan per>KRW</AssetSpan>
                  </AssetDiv>
                </CalculatedContainer>
                <CalculatedContainer>
                  <CalculatedTitle>총 수익률</CalculatedTitle>
                  {/* 0보다 크면 +, 작으면 -*/}
                  <AssetDiv isPlus={plus}>
                    <AssetSpan num>{percent}</AssetSpan>
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
                <CategoryDiv
                  isActive={selected === 0}
                  onClick={() => {
                    changeTab(0);
                  }}
                >
                  <span>잔고</span>
                </CategoryDiv>
                <CategoryDiv
                  isActive={selected === 1}
                  onClick={() => {
                    changeTab(1);
                  }}
                >
                  <span>미체결 주문</span>
                </CategoryDiv>
              </Category>
              {/* 잔고, 미체결 주문 Component */}
              {tabs[selected]}
            </Contents>
          </div>
        </MobileBalanceWrap>
      ) : (
        <OnlyLogin />
      )}
    </>
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
  color: ${(props) =>
    props.isPlus ? props.theme.plusColor : props.theme.minusColor};
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
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      color: ${(props) => props.theme.subColor};
      padding-bottom: 5px;
      border-bottom: 1px solid ${(props) => props.theme.subColor};
    `}
`;

export default MobileBalance;
