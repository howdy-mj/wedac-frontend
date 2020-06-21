import React, { useState } from "react";
import styled, { css } from "styled-components";
import Nav from "../../component/Nav/Nav";
import Trade from "./Trade";
import InOut from "./InOut";
import OnlyLogin from "../Login/OnlyLogin";
import MiddleRight from "../Exchange/MiddleRight/MiddleRight";
import Footer from "../../component/Footer/Footer";
import search from "../../images/history-search.PNG";

const tab = {
  0: <Trade />,
  1: <InOut />,
};

function History() {
  let token = localStorage.getItem("token");
  const [selected, setSelected] = useState(0);
  const changeTab = (id) => setSelected(id);

  return (
    <>
      <Nav />
      <HistoryWrap status={localStorage.getItem("token")}>
        {token ? (
          <HistoryContainer>
            <HistoryLeft>
              <Header>
                <Category>
                  <CategoryDiv
                    isActive={selected === 0}
                    onClick={() => {
                      changeTab(0);
                    }}
                  >
                    체결내역
                  </CategoryDiv>
                  <CategoryDiv
                    isActive={selected === 1}
                    onClick={() => {
                      changeTab(1);
                    }}
                  >
                    입출금내역
                  </CategoryDiv>
                </Category>
                <Filter>
                  <FilterDiv calendar>
                    <Input calendar type="text" placeholder="전체 기간" />
                  </FilterDiv>
                  <FilterDiv orderType>
                    <Input orderType type="text" placeholder="전체 거래" />
                  </FilterDiv>
                  <FilterDiv coin>
                    <Input coin type="text" placeholder="전체 코인" />
                  </FilterDiv>
                  <FilterDiv img>
                    <SearchImg img src={search} alt="" />
                  </FilterDiv>
                </Filter>
              </Header>
              {/*체결내역, 입출금내역 Component*/}
              {tab[selected]}
              <Bottom>
                <Save>저장하기</Save>
              </Bottom>
            </HistoryLeft>
            <HistoryRight>
              <MiddleRight></MiddleRight>
              <ImgComponent
                src={
                  "data:image/png;base64,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"
                }
                alt="ad"
              />
            </HistoryRight>
          </HistoryContainer>
        ) : (
          <OnlyLogin />
        )}
      </HistoryWrap>
      <Footer />
    </>
  );
}

const HistoryWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};

  @media ${(props) => props.theme.mobile} {
    margin-top: 45px;
  }
`;

const HistoryContainer = styled.div`
  height: 993px;
  padding: 15px 15px;
  display: flex;

  @media ${(props) => props.theme.desktop} {
    width: 1660px;
    margin: 0 auto;
  }
`;

const HistoryLeft = styled.div`
  width: calc(100% - 328px);
  height: 956px;
  background-color: white;
  border: 1px solid #ebeef6;

  @media ${(props) => props.theme.tabletL} {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 47px;
  width: 100%;
  border-bottom: 1px solid #ebeef6;
`;

const Category = styled.div`
  display: flex;
  line-height: 45px;
`;

const CategoryDiv = styled.div`
  padding: 0 30px;
  color: #919dae;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      color: ${(props) => props.theme.subColor};
      padding-bottom: 20px;
      border-bottom: 1px solid ${(props) => props.theme.subColor};
    `}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 14px;
`;

const Input = styled.input`
  height: 26px;
  padding-left: 10px;
  border: 1px solid #ebeef6;

  ${(props) =>
    props.calendar &&
    css`
      width: 175px;
    `}
  @media ${(props) => props.theme.tabletL} {
    ${(props) =>
      props.calendar &&
      css`
        display: none;
      `}
  }


  ${(props) =>
    props.orderType &&
    css`
      width: 98px;
    `}

    ${(props) =>
      props.coin &&
      css`
        width: 140px;
      `}
`;

const FilterDiv = styled.div`
  ${(props) =>
    props.orderType &&
    css`
      margin-left: 6px;
    `}

  ${(props) =>
    props.coin &&
    css`
      margin-left: 6px;
    `}
  
  ${(props) =>
    props.img &&
    css`
      margin-left: 14px;
    `}
`;

const SearchImg = styled.img`
  height: 25px;
  width: 25px;
`;

const HistoryRight = styled.div`
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

const Bottom = styled.div`
  position: relative;
  height: 56px;
  border-top: 1px solid #ebeef6;
  padding: 10px 0 10px 10px;
`;

const Save = styled.div`
  width: 85px;
  height: 40px;
  border: 1px solid #ebeef6;
  border-radius: 2px;
  text-align: center;
  color: #596070;
  font-family: "NotoSans";
  font-size: 14px;
  line-height: 38px;
`;

export default History;
