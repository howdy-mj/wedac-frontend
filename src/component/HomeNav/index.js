import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import MobileHomeNav from "./MobileHomeNav";

function HomeNav() {
  let token = localStorage.getItem("token");
  const handleLogOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <HomeNavbar>
        <SubNav>
          <FlexDiv>
            <Ul>
              <Li left>고객센터</Li>
              <Li left>초보자 가이드</Li>
              <Li left>공지사항</Li>
            </Ul>
          </FlexDiv>
          <FlexDiv>
            <Ul>
              <Li left>블로그</Li>
              <Li left>페이스북</Li>
              <Li left>트위터</Li>
              <Li left>
                <Img
                  flag
                  src="https://resources.gdac.com/imgs/icon/korean.svg"
                  alt="flag"
                />
                한국어 <ArrowDown></ArrowDown>
              </Li>
            </Ul>
          </FlexDiv>
        </SubNav>
        <Container>
          <MainNav>
            <Left>
              <Category>
                <Ul>
                  <Li>그로우</Li>
                  <Li>이벤트</Li>
                  <Li>
                    지닥몰 <ArrowDown />
                  </Li>
                </Ul>
              </Category>
            </Left>
            <FlexDiv>
              <Ul>
                <Link to="/exchange">
                  <Li middle>거래소</Li>
                </Link>
                <Link to="/balance">
                  <Li middle>잔고</Li>
                </Link>
                <Link to="/wallet">
                  <Li middle>지갑</Li>
                </Link>
                <Link to="/history">
                  <Li middle>거래내역</Li>
                </Link>
              </Ul>
            </FlexDiv>
            <Right>
              <Link to={!token ? "/login" : "/"}>
                <Button login onClick={token && handleLogOut}>
                  {!token ? "로그인" : "로그아웃"}
                </Button>
              </Link>
              <Link to={!token ? "/signup" : `/settings/dashboard`}>
                <Button join>{!token ? "회원가입" : "내 설정"}</Button>
              </Link>
            </Right>
          </MainNav>
        </Container>
      </HomeNavbar>
      <MobileHomeNav />
    </>
  );
}

const HomeNavbar = styled.nav`
  background-color: ${(props) => props.theme.gdacColor};
  // width: 100%;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const SubNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 34px;
  padding: 12px 25px;

  @media ${(props) => props.theme.desktop} {
    width: 1640px;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  border: 1px solid rgba(245, 248, 255, 0.2);
  border-left-color: transparent;
  border-right-color: transparent;
`;

const MainNav = styled.div`
  height: 58px;
  padding: 0 40px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${(props) => props.theme.desktop} {
    width: 1640px;
    margin: 0 auto;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`
  border-right: 1px solid rgba(245, 248, 255, 0.2);
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 26px;
  width: 86px;
  cursor: pointer;
  ${(props) =>
    props.flag &&
    css`
      height: 10px;
      width: 15px;
      margin-right: 5px;
    `}
`;

const Category = styled.div`
  padding-top: 20px;
`;

const ArrowDown = styled.i`
  margin-bottom: 3px;
  margin-left: 1px;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  cursor: pointer;
  color: white;
  margin-right: 10px;

  ${(props) => {
    if (props.middle) {
      return css`
        padding-top: 20px;
        margin-right: 20px;
      `;
    }
    if (props.left) {
      return css`
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.03em;
      `;
    }
  }}
`;

const Right = styled.div`
  padding-top: 13px;
`;

const Button = styled.button`
  height: 30px;
  width: 70px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  color: white;
  ${(props) => {
    if (props.login) {
      return css`
        margin-right: 10px;
        background-color: transparent;
        border: 1px solid white;
      `;
    }
    if (props.join) {
      return css`
        background-color: ${(props) => props.theme.subColor};
      `;
    }
  }}
`;

export default HomeNav;
