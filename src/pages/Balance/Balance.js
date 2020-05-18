import React, { useState } from "react";
import OnlyLogin from "../Login/OnlyLogin";
import styled, { css } from "styled-components";
import Nav from "../../component/Nav/Nav";
import CurrentBalance from "./CurerntBalance/CurrentBalance";
import OutstnadingOrder from "./OutstandingOrder/OutstandingOrder";
import MobileBalance from "./MobileBalance/MobileBalance";
import Footer from "../../component/Footer/Footer";

const tabs = {
  0: <CurrentBalance />,
  1: <OutstnadingOrder />,
};

function Balance() {
  let token = localStorage.getItem("token");
  const [selected, setSelected] = useState(0);
  const changeTab = (id) => setSelected(id);
  const [allAsset, setAllAsset] = useState(0);
  const [KRW, setKRW] = useState(0);
  const [gainLoss, setGainLoss] = useState(0);
  const [percent, setPercent] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [evaluated, setEvaluated] = useState(0);
  const [plus, setPlus] = useState(true);

  return (
    <>
      <Nav />
      <BalanceWrap status={localStorage.getItem("token")}>
        {token ? (
          <BalanceContainer>
            <Left>
              <SumamryContainer>
                <Summary>
                  <SummaryDiv all>
                    <SummaryTitle>총 보유자산</SummaryTitle>
                    <p>
                      <SummarySpan num>{allAsset}</SummarySpan>
                      <SummarySpan per>KRW</SummarySpan>
                    </p>
                  </SummaryDiv>
                  <SummaryDiv huansuan>
                    <SummaryTitle>KRW 보유수량</SummaryTitle>
                    <p>
                      <SummarySpan num>{KRW}</SummarySpan>
                      <SummarySpan per>KRW</SummarySpan>
                    </p>
                  </SummaryDiv>
                </Summary>
                <CalculatedWrap>
                  <CalculatedContainer one>
                    <CalculatedDiv top>
                      <CalculatedTitle>총 평가손익</CalculatedTitle>
                      <p>
                        <CalculatedColorSpan isPlus={plus}>
                          {/* 0보다 크면 +, 작으면 -*/}
                          {gainLoss}
                        </CalculatedColorSpan>
                        <CalculatedSpan per>KRW</CalculatedSpan>
                      </p>
                    </CalculatedDiv>
                    <CalculatedDiv bottom>
                      <CalculatedTitle>총 수익률</CalculatedTitle>
                      {/* 0보다 크면 +, 작으면 -*/}
                      <AssetPer isPlus={plus}>
                        <AssetNum>
                          {percent}
                          <span>%</span>
                        </AssetNum>
                      </AssetPer>
                    </CalculatedDiv>
                  </CalculatedContainer>
                  <CalculatedContainer two>
                    <CalculatedDiv top>
                      <CalculatedTitle>총 매입액</CalculatedTitle>
                      <p>
                        <CalculatedSpan num>{buyAmount}</CalculatedSpan>
                        <CalculatedSpan per>KRW</CalculatedSpan>
                      </p>
                    </CalculatedDiv>
                    <CalculatedDiv bottom>
                      <CalculatedTitle>암호화폐 총 평가액</CalculatedTitle>
                      <p>
                        <CalculatedSpan num>{evaluated}</CalculatedSpan>
                        <CalculatedSpan per>KRW</CalculatedSpan>
                      </p>
                    </CalculatedDiv>
                  </CalculatedContainer>
                </CalculatedWrap>
              </SumamryContainer>
              <ContentsContainer>
                <Contents>
                  <Category>
                    <CategoryDiv
                      isActive={selected === 0}
                      onClick={() => {
                        changeTab(0);
                      }}
                    >
                      잔고
                    </CategoryDiv>
                    <CategoryDiv
                      isActive={selected === 1}
                      onClick={() => {
                        changeTab(1);
                      }}
                    >
                      미체결 주문
                    </CategoryDiv>
                  </Category>
                  {/* 잔고, 미체결주문 Component*/}
                  {tabs[selected]}
                </Contents>
              </ContentsContainer>
            </Left>
            <Right>right</Right>
          </BalanceContainer>
        ) : (
          <OnlyLogin />
        )}
      </BalanceWrap>
      <MobileBalance />
      <Footer />
    </>
  );
}

const BalanceWrap = styled.div`
  background-color: #f5f8ff;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const BalanceContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.desktop} {
    width: 1660px;
    margin: 0 auto;
  }
`;

const Left = styled.section`
  width: calc(100% - 328px);
  padding: 15px 10px;

  @media ${(props) => props.theme.tabletL} {
    width: 100%;
  }
`;

const SumamryContainer = styled.div`
  color: ${(props) => props.theme.noChangeColor};
  display: flex;
  margin-bottom: 10px;

  @media ${(props) => props.theme.tabletL} {
    flex-direction: column;
  }
`;

const Summary = styled.div`
  height: 238px;
  width: calc(40% - 8px);
  padding: 28px 20px;
  background-color: white;
  border: 1px solid #ebeef6;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.tabletL} {
    width: 100%;
    height: 112px;
    flex-direction: row;
    padding: 28px 30px;
    margin-bottom: 8px;
  }
`;

const SummaryDiv = styled.div`
  letter-spacing: -0.03em;
  height: 50%;

  @media ${(props) => props.theme.tabletL} {
    width: 50%;
  }
`;

const SummaryTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
`;

const SummarySpan = styled.span`
  ${(props) =>
    props.num &&
    css`
      font-size: 24px;
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

const CalculatedWrap = styled.div`
  margin-left: 10px;
  width: 60%;
  height: 238px;
  display: flex;

  @media ${(props) => props.theme.tabletL} {
    margin: 0 0;
    width: 100%;
  }
`;

const CalculatedContainer = styled.div`
  width: 50%;

  ${(props) =>
    props.one &&
    css`
      padding-right: 5px;
    `}
  ${(props) =>
    props.two &&
    css`
      padding-left: 5px;
    `}
`;

const CalculatedDiv = styled.div`
  padding: 28px 20px;
  height: 114px;
  background-color: white;
  border: 1px solid #ebeef6;
  

  ${(props) =>
    props.bottom &&
    css`
      margin-top: 8px;
    `}

  @media ${(props) => props.theme.tabletL} {
      padding: 28px 30px;
  }
`;

const CalculatedTitle = styled.p`
  font-size: 14px;
  letter-spacing: -0.03em;
  color: #596070;
  line-height: 35px;

  @media ${(props) => props.theme.tabletL} {
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

const CalculatedSpan = styled.span`
  ${(props) =>
    props.num &&
    css`
      color: #022553;
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

const CalculatedColorSpan = styled.span`
  color: ${(props) =>
    props.isPlus ? props.theme.plusColor : props.theme.minusColor};
  font-size: 20px;
  font-weight: 700;
`;

const AssetPer = styled.div`
  height: 30px;
  width: 90px;
  color: white;
  font-size: 14px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.isPlus ? props.theme.plusColor : "#092c80"};
`;

const AssetNum = styled.div`
  text-align: center;
  line-height: 30px;
`;

const ContentsContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;

  @media ${(props) => props.theme.tabletL} {
    height: 348px;
  }
`;

const Contents = styled.div`
  background-color: white;
  border: 1px solid #ebeef6;
  height: 733px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.tabletL} {
    height: 100%;
  }
`;

const Category = styled.div`
  height: 47px;
  border-bottom: 1px solid #ebeef6;
  display: flex;
  line-height: 48px;
  color: #919dae;
  font-size: 14px;
  font-weight: 700;
`;

const CategoryDiv = styled.div`
  width: 126px;
  text-align: center;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      color: ${(props) => props.theme.subColor};
      border-bottom: 1px solid ${(props) => props.theme.subColor};
    `}

  @media ${(props) => props.theme.tabletS} {
    width: 50%;
  }
`;

const Right = styled.section`
  width: 320px;

  @media ${(props) => props.theme.tabletL} {
    display: none;
  }
`;

export default Balance;
