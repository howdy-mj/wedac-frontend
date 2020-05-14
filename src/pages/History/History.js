import React, { useState } from "react";
import styled, { css } from "styled-components";
import Nav from "../../component/Nav/Nav";
import Trade from "./Trade/Trade";
import InOut from "./InOut/InOut";
import Footer from "../../component/Footer/Footer";
import search from "../../images/history-search.PNG";

const tab = {
  0: <Trade />,
  1: <InOut />,
};

function History() {
  const [selected, setSelected] = useState(0);
  const changeTab = (id) => setSelected(id);

  return (
    <>
      <Nav />
      <HistoryWrap>
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
                <FilterDiv order>
                  <Input order type="text" placeholder="전체 거래" />
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
          <HistoryRight>test</HistoryRight>
        </HistoryContainer>
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
    props.order &&
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
    props.order &&
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
