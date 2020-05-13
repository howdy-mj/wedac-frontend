import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import SearchBox from "./SearchBox/SearchBox";
import KRW from "./KRW/KRW";
import BTC from "./BTC/BTC";
import GT from "./GT/GT";

const selectedMarket = {
  0: <KRW />,
  1: <BTC />,
  2: <GT />,
};

// function useFetch() {
//   const [marketInfo, setMarketInfo] = useState([]);

//   useEffect(() => {
//     fetch("https://api.gdac.com/v1/cryptos/price")
//       .then((data) => data.json())
//       .then((data) => setMarketInfo(data.data));
//   }, []);

//   return { marketInfo };
// }

function OverallMarket() {
  const [selected, setSelected] = useState(0);
  const [userInput, setUserInput] = useState("");
  const changeSeletedNum = (id) => setSelected(id);
  // const handleInput = (e) => setUserInput(e.target.value);
  // const { userInput, marketInfo } = useFetch();

  // const filteredList = marketInfo.filter((one) => {
  //   return one.name.toLowerCase().includes(userInput.toLowerCase())
  // })

  return (
    <OverallMarketWrap>
      <MarketContainer>
        <MarketOption>
          <MarketLeft>
            <LeftDiv
              isActive={selected === 0}
              onClick={() => changeSeletedNum(0)}
            >
              KRW
            </LeftDiv>
            <LeftDiv
              isActive={selected === 1}
              onClick={() => changeSeletedNum(1)}
            >
              BTC
            </LeftDiv>
            <LeftDiv
              isActive={selected === 2}
              onClick={() => changeSeletedNum(2)}
            >
              GT
            </LeftDiv>
          </MarketLeft>
          <MarketRight>
            {/* <SearchBox handleChange={handleInput} userInput={userInput} /> */}
          </MarketRight>
        </MarketOption>

        <div className="cryptoListContainer">
          {/*soring*/}
          <CryptoSortList>
            <SortUl>
              <SortLi cryptoName>코인</SortLi>
              <SortLi cryptoPrice>현재가</SortLi>
              <SortLi cryptoRate>전일대비</SortLi>
              <SortLi highPrice>고가</SortLi>
              <SortLi lowPrice>저가</SortLi>
              <SortLi cryptoAmount>거래대금</SortLi>
            </SortUl>
          </CryptoSortList>
          {/*crypto list*/}
          {selectedMarket[selected]}
          {/* list={filteredList} */}
        </div>
      </MarketContainer>
    </OverallMarketWrap>
  );
}

const OverallMarketWrap = styled.div`
  position: relative;
  padding: 32px 32px;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const MarketContainer = styled.div`
  height: 790px;
  background-color: white;
  border-radius: 2px;
  width: 1160px;
  margin: 0 auto;

  @media ${(props) => props.theme.tabletM} {
    width: 100%;
    margin: 0 auto;
  }
`;

const MarketOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 47px;
  border-bottom: 1px solid #ebeef6;
`;

const MarketLeft = styled.div`
  display: flex;
  margin-left: 30px;
`;

const LeftDiv = styled.div`
  margin-right: 20px;
  font-weight: 700;
  color: #919dae;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      color: ${(props) => props.theme.noChangeColor};
    `}
`;

const MarketRight = styled.div`
  margin-right: 30px;
`;

const CryptoSortList = styled.div`
  border-bottom: 1px solid #ebeef6;
  padding: 0 32px;
  margin: 2px auto;
`;

const SortUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const SortLi = styled.li`
  color: #919dae;
  font-size: 10px;
  letter-spacing: -0.3px;
  line-height: 30px;
  text-align: right;

  ${(props) =>
    props.cryptoName &&
    css`
      text-align: left;
      width: 15%;
    `}
  ${(props) =>
    props.cryptoPrice &&
    css`
      width: 15%;
    `}
  ${(props) =>
    props.cryptoRate &&
    css`
      width: 15%;
    `}
  ${(props) =>
    props.highPrice &&
    css`
      width: 15%;
    `}
  ${(props) =>
    props.lowPrice &&
    css`
      width: 15%;
    `}
  ${(props) =>
    props.cryptoAmount &&
    css`
      width: 20%;
    `}

  @media ${(props) => props.theme.tabletS} {
    ${(props) =>
      props.cryptoName &&
      css`
        width: 15%;
      `}
  ${(props) =>
    props.cryptoPrice &&
    css`
      width: 24%;
    `}
  ${(props) =>
    props.cryptoRate &&
    css`
      width: 30%;
    `}
  ${(props) =>
    props.highPrice &&
    css`
      display: none;
    `}
  ${(props) =>
    props.lowPrice &&
    css`
      display: none;
    `}
  }
`;

export default OverallMarket;
