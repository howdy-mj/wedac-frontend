import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { YE } from "../../config";
import Nav from "../../component/Nav/Nav";
import Deposit from "./Deposit/Deposit";
import Withdraw from "./Withdraw/Withdraw";
import WalletHistory from "./WalletHistory/WalletHistory";
import OnlyLogin from "../Login/OnlyLogin";
import MiddleRight from "../Exchange/MiddleRight/MiddleRight";
import Footer from "../../component/Footer/Footer";
import searchIcon from "../../images/search.png";

const category = {
  0: <Deposit />,
  1: <Withdraw />,
  2: <WalletHistory />,
};

function Wallet({ asset }) {
  let token = localStorage.getItem("token");
  const [selected, setSelected] = useState(0);
  const changeSelected = (id) => setSelected(id);
  const [currentAsset, setCurrentAsset] = useState(0);

  const addComma = (price) => {
    if (price > 999) {
      return ("" + price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    } else {
      return price;
    }
  };

  useEffect(() => {
    token &&
      fetch(`${YE}/user/deposit/check`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      })
        .then((res) => res.json())
        .then((res) => setCurrentAsset(Math.trunc(res.my_wallet[0].volume)));
  }, []);

  useEffect(() => {
    if (asset === 1) {
      console.log("CDU");
      fetch(`${YE}/user/deposit/check`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      })
        .then((res) => res.json())
        .then((res) => setCurrentAsset(Math.trunc(res.my_wallet[0].volume)));
    }
  }, [asset]);

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
                      <AssetDetailDiv amount>
                        {addComma(currentAsset)}
                      </AssetDetailDiv>
                      <AssetDetailDiv value>
                        {addComma(currentAsset)}
                      </AssetDetailDiv>
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
            <Right>
              <MiddleRight></MiddleRight>
              <ImgComponent
                src={
                  "data:image/png;base64,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"
                }
                alt="ad"
              />
            </Right>
          </WalletContainer>
        ) : (
          <OnlyLogin />
        )}
      </WalletWrap>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    asset: state.detectAsset.asset,
  };
};

export default connect(mapStateToProps)(Wallet);

const WalletWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media ${(props) => props.theme.mobile} {
    margin-top: 46px;
  }
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

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
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

const Right = styled.section`
  width: 320px;

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
