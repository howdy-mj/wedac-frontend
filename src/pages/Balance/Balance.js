import React from "react";
import styled, { css } from "styled-components";
import Nav from "../../component/Nav/Nav";
import MobileBalance from "./MobileBalance/MobileBalance";
import Footer from "../../component/Footer/Footer";
import test from "../../images/search.png";

function Balance() {
  return (
    <>
      <Nav />
      <BalanceWrap>
        <BalanceContainer>
          <Left>
            <SumamryContainer>
              <Summary>
                <SummaryDiv all>
                  <SummaryTitle>총 보유자산</SummaryTitle>
                  <p>
                    <SummarySpan num>50,000</SummarySpan>
                    <SummarySpan per>KRW</SummarySpan>
                  </p>
                </SummaryDiv>
                <SummaryDiv huansuan>
                  <SummaryTitle>KRW 보유수량</SummaryTitle>
                  <p>
                    <SummarySpan num>0</SummarySpan>
                    <SummarySpan per>KRW</SummarySpan>
                  </p>
                </SummaryDiv>
              </Summary>
              <CalculatedWrap>
                <CalculatedContainer one>
                  <CalculatedDiv top>
                    <CalculatedTitle>총 평가손익</CalculatedTitle>
                    <p>
                      <CalculatedColorSpan minus>-50,000</CalculatedColorSpan>
                      <CalculatedSpan per>KRW</CalculatedSpan>
                    </p>
                  </CalculatedDiv>
                  <CalculatedDiv bottom>
                    <CalculatedTitle>총 수익률</CalculatedTitle>
                    <AssetPer minus>
                      <AssetNum>
                        -90.06<span>%</span>
                      </AssetNum>
                    </AssetPer>
                  </CalculatedDiv>
                </CalculatedContainer>
                <CalculatedContainer two>
                  <CalculatedDiv top>
                    <CalculatedTitle>총 매입액</CalculatedTitle>
                    <p>
                      <CalculatedSpan num>708,000</CalculatedSpan>
                      <CalculatedSpan per>KRW</CalculatedSpan>
                    </p>
                  </CalculatedDiv>
                  <CalculatedDiv bottom>
                    <CalculatedTitle>암호화폐 총 평가액</CalculatedTitle>
                    <p>
                      <CalculatedSpan num>50,000</CalculatedSpan>
                      <CalculatedSpan per>KRW</CalculatedSpan>
                    </p>
                  </CalculatedDiv>
                </CalculatedContainer>
              </CalculatedWrap>
            </SumamryContainer>
            <ContentsContainer>
              <Contents>
                <Category>
                  <CategoryDiv selected>
                    <span>잔고</span>
                  </CategoryDiv>
                  <CategoryDiv>미체결 주문</CategoryDiv>
                </Category>
                <DetailContainer>
                  <DetailInner>
                    <Header>
                      <HeaderUl>
                        <Li header name>
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
                        <Li detail name>
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
                          <P>2.3624</P>
                        </Li>
                        <Li detail currentValue>
                          <P>27,930</P>
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
              </Contents>
            </ContentsContainer>
          </Left>
          <Right>right</Right>
        </BalanceContainer>
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
  color: #022553;
  font-size: 20px;
  font-weight: 700;
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

const AssetPer = styled.div`
  height: 30px;
  width: 90px;
  color: white;
  font-size: 14px;
  border-radius: 20px;

  ${(props) =>
    props.minus &&
    css`
      background-color: #092c80;
    `}

  ${(props) =>
    props.plus &&
    css`
      background-color: ${(props) => props.theme.plusColor};
    `}
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

  ${(props) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.subColor};
      border-bottom: 1px solid ${(props) => props.theme.subColor};
    `}

  @media ${(props) => props.theme.tabletS} {
    width: 50%;
  }
`;

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
  props.name &&
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

const Right = styled.section`
  width: 320px;

  @media ${(props) => props.theme.tabletL} {
    display: none;
  }
`;

export default Balance;
