import React from "react";
import styled, { css } from "styled-components";
import Nav from "../../component/Nav/Nav";
import Footer from "../../component/Footer/Footer";
import test from "../../images/search.png";

function History() {
  return (
    <>
      <Nav />
      <HistoryWrap>
        <HistoryContainer>
          <HistoryLeft>
            <Header>
              <Category>
                <CategoryDiv selected>체결내역</CategoryDiv>
                <CategoryDiv>입출금내역</CategoryDiv>
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
                  <SearchImg img src={test} alt="" />
                </FilterDiv>
              </Filter>
            </Header>
            <HistoryContent>
              <HistoryTable>
                <HistoryTHead>
                  <HeadTR>
                    <HeadTH>체결시간</HeadTH>
                    <HeadTH>구분</HeadTH>
                    <HeadTH>종목</HeadTH>
                    <HeadTH>가격</HeadTH>
                    <HeadTH>수량</HeadTH>
                    <HeadTH>수수료</HeadTH>
                    <HeadTH>금액(수량)</HeadTH>
                    <HeadTH>주문시간</HeadTH>
                  </HeadTR>
                </HistoryTHead>
                <HistoryTbody>
                  <BodyTR>
                    <BodyTD>
                      <p>2020-03-19</p>
                      <p>18:50:03</p>
                    </BodyTD>
                    <BodyTD>
                      <BodyP red>매수</BodyP>
                    </BodyTD>
                    <BodyTD>GT/KRW</BodyTD>
                    <BodyTD>
                      <p>0.1235 KRW</p>
                    </BodyTD>
                    <BodyTD>
                      <p>83,432.21415887 GT</p>
                    </BodyTD>
                    <BodyTD>
                      <p>5 KRW</p>
                    </BodyTD>
                    <BodyTD>
                      <BodyP value>10,309 KRW</BodyP>
                    </BodyTD>
                    <BodyTD>
                      <p>2020-03-19</p>
                      <p>18:50:03</p>
                    </BodyTD>
                  </BodyTR>
                </HistoryTbody>
              </HistoryTable>
            </HistoryContent>
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
  background-color: #f5f8ff;

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

  ${(props) =>
    props.selected &&
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
  height: 20px;
  width: 20px;
`;

const HistoryContent = styled.div`
  height: 850px;
`;

const HistoryTable = styled.table`
  width: 100%;
  font-size: 12px;
  letter-spacing: -0.03em;
  text-align: center;
  display: table;
`;

const HistoryTHead = styled.thead`
  color: #919dae;
  display: table-header-group;
`;

const HeadTR = styled.tr`
  height: 38px;
  display: table-row;
`;

const HeadTH = styled.th`
  padding: 14px 8px 0 8px;
  display: table-cell;
`;

const HistoryTbody = styled.tbody`
  border-top: 1px solid #ebeef6;
  color: #596070;
  display: table-row-group;
`;

const BodyTR = styled.tr`
  display: table-row;

  &:nth-child(odd) {
    background-color: #f5f8ff;
  }
`;

const BodyTD = styled.td`
  height: 48px;
  display: table-cell;
  vertical-align: middle;
`;

const BodyP = styled.p`
  ${(props) =>
    props.red &&
    css`
      color: ${(props) => props.theme.plusColor};
      font-weight: 700;
    `}

  ${(props) =>
    props.value &&
    css`
      font-weight: 700;
    `}
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
