import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Nav from "../../component/Nav/Nav";
import Deposit from "./Deposit/Deposit";
import Withdraw from "./Withdraw/Withdraw";
import WalletHistory from "./WalletHistory/WalletHistory";
import OnlyLogin from "../Login/OnlyLogin";
import Footer from "../../component/Footer/Footer";
import searchIcon from "../../images/search.png";

const category = {
  0: <Deposit />,
  1: <Withdraw />,
  2: <WalletHistory />,
};

function Wallet() {
  let token = localStorage.getItem("token");
  const [selected, setSelected] = useState(0);
  const changeSelected = (id) => setSelected(id);
  return (
    <>
      <Nav />
      <WalletWrap status={localStorage.getItem("token")}>
        {token ? (
          <WalletContainer>
            <Left>
              <SectionLeft>
                <AssetContainer>
                  <SearchContainer>
                    <SearchboxWrap>
                      <SearchInput placeholder="코인명 검색"></SearchInput>
                    </SearchboxWrap>
                    <Checkbox>
                      <CheckButton>y</CheckButton>
                      보유코인
                    </Checkbox>
                  </SearchContainer>
                  <AssetTitle>
                    <AssetDiv coin>자산명</AssetDiv>
                    <AssetDiv amount>보유수량</AssetDiv>
                    <AssetDiv value>KRW 평가금액</AssetDiv>
                  </AssetTitle>
                  <AssetDetail>
                    <AssetDetailContainer>
                      <AssetDetailDiv nameDiv>
                        <AssetDetailLeft>
                          <AssetLogo src={searchIcon} alt="" />
                          <AssetNameDiv>
                            <AssetName kor>원화</AssetName>
                            <AssetName eng>KRW</AssetName>
                          </AssetNameDiv>
                        </AssetDetailLeft>
                      </AssetDetailDiv>
                      <AssetDetailDiv amount>0</AssetDetailDiv>
                      <AssetDetailDiv value>0</AssetDetailDiv>
                    </AssetDetailContainer>
                  </AssetDetail>
                </AssetContainer>
              </SectionLeft>
              <SecionRight>
                <Title>KRW 지갑</Title>
                <CategoryContainer>
                  <Category
                    in="true"
                    isActive={selected === 0}
                    onClick={() => changeSelected(0)}
                  >
                    입금
                  </Category>
                  <Category
                    out
                    isActive={selected === 1}
                    onClick={() => changeSelected(1)}
                  >
                    출금
                  </Category>
                  <Category
                    history
                    isActive={selected === 2}
                    onClick={() => changeSelected(2)}
                  >
                    지갑 내역
                  </Category>
                </CategoryContainer>
                {/*입금, 출금, 지갑내역 Component*/}
                {category[selected]}
              </SecionRight>
            </Left>
            <Right>right</Right>
          </WalletContainer>
        ) : (
          <OnlyLogin />
        )}
      </WalletWrap>
      <Footer />
    </>
  );
}

const WalletWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const WalletContainer = styled.div`
  width: 100%;
  height: 910px;
  max-width: 1670px;
  padding: 15px;
  display: flex;

  @media ${(props) => props.theme.desktop} {
    width: 1580px;
    margin: 0 auto;
  }
`;

const Left = styled.div`
  width: calc(100% - 328px);
  display: flex;

  @media ${(props) => props.theme.tabletL} {
    width: 100%;
  }
`;

const SectionLeft = styled.div`
  width: calc(100% - 500px);
  background-color: white;
  border: 1px solid #ebeef6;
  margin-right: 8px;

  @media ${(props) => props.theme.tabletL} {
    width: 40%;
  }

  @media ${(props) => props.theme.mobile} {
    position: relative;
  }
`;

const AssetContainer = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 52px;
  padding: 12px;
  text-align: right;
`;

const SearchboxWrap = styled.span`
  position: relative;
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: 1px solid #ebeef6;
  border-radius: 2px;
  width: 183px;
  height: 26px;
  font-size: 12px;
  letter-spacing: -0.03em;
  color: #022553;

  background: url(${searchIcon}) no-repeat 0 0;
  background-position: 155px 2px;
  background-size: 25px 25px;
`;

const Checkbox = styled.span`
  width: 75px;
  height: 30px;
  font-size: 12px;
  letter-spacing: -0.03em;
  padding: 6.5px 6px;
  border: 1px solid #ebeef6;
  border-radius: 2px;
`;

const CheckButton = styled.span`
  margin-right: 5px;
  margin-top: 10px;
  font-family: "emoticon";
`;

const AssetTitle = styled.div`
  display: table;
  width: 100%;
  height: 40px;
  font-size: 12px;
  color: #919dae;
  border-top: 1px solid #ebeef6;
  border-bottom: 1px solid #ebeef6;
  vertical-align: middle;
`;

const AssetDiv = styled.div`
  display: table-cell;
  padding: 16px 14px 8px;
  position: relative;

  ${(props) =>
    props.coin &&
    css`
      text-align: left;
    `}
  ${(props) =>
    props.amount &&
    css`
      text-align: right;
    `}
  ${(props) =>
    props.value &&
    css`
      text-align: right;
    `}

    @media ${(props) => props.theme.tabletL} {
        ${(props) =>
          props.amount &&
          css`
            display: none;
          `}
  }
`;

const AssetDetail = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

const AssetDetailContainer = styled.div`
  display: table;
  width: 100%;
  height: 56px;
  font-size: 14px;
  border-bottom: 1px solid #ebeef6;
  cursor: pointer;
  vertical-align: middle;
`;

const AssetDetailDiv = styled.div`
  display: table-cell;
  height: 100%;
  padding: 8px 10px;
  position: relative;
  
  ${(props) =>
    props.nameDiv &&
    css`
      width: 150px;
      text-align: left;
      padding-left: 20px;
      border-right: 1px solid #ebeef6;
    `}
  ${(props) =>
    props.amount &&
    css`
      text-align: right;
      border-right: 1px solid #ebeef6;
    `}
  ${(props) =>
    props.value &&
    css`
      text-align: right;
      padding-left: 20px;
    `}

    @media ${(props) => props.theme.tabletL} {
        ${(props) =>
          props.amount &&
          css`
            display: none;
          `}
  }
`;

const AssetDetailLeft = styled.div`
  display: flex;
`;

const AssetLogo = styled.img`
  height: 22px;
  width: 22px;
  margin-top: 7px;
`;

const AssetNameDiv = styled.div`
  margin-top: 7px;
  margin-left: 7px;
`;

const AssetName = styled.p`
  ${(props) =>
    props.kor &&
    css`
      font-weight: 700;
      color: #022553;
      margin-bottom: 4px;
    `}
  ${(props) =>
    props.eng &&
    css`
      color: #919dae;
      font-size: 12px;
    `}
`;

const SecionRight = styled.div`
  width: 500px;
  background-color: white;
  border: 1px solid #ebeef6;

  @media ${(props) => props.theme.tabletL} {
    width: 60%;
  }

  @media ${(props) => props.theme.mobile} {
  }
`;

const Title = styled.div`
  height: 50px;
  font-weight: 700;
  padding-left: 14px;
  color: ${(props) => props.theme.noChangeColor};
  letter-spacing: -0.03em;
  line-height: 50px;
  border-bottom: 1px solid #ebeef6;
`;

const CategoryContainer = styled.div`
  display: flex;
  height: 47px;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(2, 37, 83, 0.08);
`;

const Category = styled.div`
  font-size: 14px;
  line-height: 47px;
  font-weight: 700;
  color: #919dae;
  text-align: center;
  cursor: pointer;
  &:hover {
      color: ${(props) => props.theme.noChangeColor}
  }

  ${(props) =>
    props.in &&
    css`
      width: 54px;
    `}
  ${(props) =>
    props.out &&
    css`
      width: 54px;
    `}
  ${(props) =>
    props.history &&
    css`
      width: 84px;
    `}
  ${(props) =>
    props.isActive &&
    css`
      color: ${(props) => props.theme.subColor};
      border-bottom: 1px solid ${(props) => props.theme.subColor};
    `}
`;

const Right = styled.div`
  width: 320px;
  @media ${(props) => props.theme.tabletL} {
    display: none;
  }
`;

export default Wallet;
