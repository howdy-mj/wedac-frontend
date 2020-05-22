import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { YE } from "../../config";
import Nav from "../../component/Nav/Nav";
import OnlyLogin from "../Login/OnlyLogin";
import CurrentBalance from "./CurerntBalance/CurrentBalance";
import OutstnadingOrder from "./OutstandingOrder/OutstandingOrder";
import MiddleRight from "../Exchange/MiddleRight/MiddleRight";
import MobileBalance from "./MobileBalance/MobileBalance";
import Footer from "../../component/Footer/Footer";

const tabs = {
  0: <CurrentBalance />,
  1: <OutstnadingOrder />,
};

function Balance({ asset }) {
  let token = localStorage.getItem("token");
  const [selected, setSelected] = useState(0);
  const changeTab = (id) => setSelected(id);
  // const [KRW, setKRW] = useState(0);
  const [gainLoss, setGainLoss] = useState(0);
  const [percent, setPercent] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [evaluated, setEvaluated] = useState(0);
  const [plus, setPlus] = useState(true);
  const [currentAsset, setCurrentAsset] = useState(0);

  useEffect(() => {
    token &&
      fetch(`${YE}/user/deposit/check`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      })
        .then((res) => res.json())
        .then((res) => setCurrentAsset(Math.trunc(res.my_wallet[0].volume)));
  }, [asset]);

  const addComma = (price) => {
    if (price > 999) {
      return ("" + price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    } else {
      return price;
    }
  };

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
                      <SummarySpan num>{addComma(currentAsset)}</SummarySpan>
                      <SummarySpan per>KRW</SummarySpan>
                    </p>
                  </SummaryDiv>
                  <SummaryDiv huansuan>
                    <SummaryTitle>KRW 보유수량</SummaryTitle>
                    <p>
                      <SummarySpan num>{addComma(currentAsset)}</SummarySpan>
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
            <Right>
              <MiddleRight></MiddleRight>
              <ImgComponent
                src={
                  "data:image/png;base64,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"
                }
                alt="ad"
              />
            </Right>
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

const mapStateToProps = (state) => {
  return {
    asset: state.detectAsset.asset,
  };
};

export default connect(mapStateToProps)(Balance);

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
  padding: 15px 0 15px 10px;

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
  padding-top: 15px;

  @media ${(props) => props.theme.tabletL} {
    display: none;
  }
`;

const ImgComponent = styled.img`
  width: 320px;
  height: 310px;
  padding-top: 10px;
  padding-left: 10px;

  @media ${(props) => props.theme.tabletL} {
    display: none;
  }
`;
