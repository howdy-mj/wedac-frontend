import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import MobileNav from "./MobileNav/MobileNav";
import logoImg from "../../images/logo_black.png";

const obj = {
  0: "exchange",
  1: "balance",
  2: "wallet",
  3: "history",
};

function Nav(props) {
  let token = localStorage.getItem("token");
  const handleLogOut = () => {
    localStorage.removeItem("token");
  };

  const [selected, setSelected] = useState(0);

  const changeTab = (id) => {
    setSelected(id);
    props.history.push(`/${obj[id]}`);
  };

  // console.log('Nav', selected);

  return (
    <>
      <Navbar>
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
                한국어 <ArrowDown />
              </Li>
            </Ul>
          </FlexDiv>
        </SubNav>
        <Container>
          <MainNav>
            <Left>
              <Logo>
                <Link to="/">
                  <Img src={logoImg} alt="mainlogo" />
                </Link>
              </Logo>
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
                <Li
                  middle
                  isActive={selected === 0}
                  onClick={() => {
                    changeTab(0);
                  }}
                >
                  거래소
                </Li>

                <Li
                  middle
                  isActive={selected === 1}
                  onClick={() => {
                    changeTab(1);
                  }}
                >
                  잔고
                </Li>

                <Li
                  middle
                  isActive={selected === 2}
                  onClick={() => {
                    changeTab(2);
                  }}
                >
                  지갑
                </Li>

                <Li
                  middle
                  isActive={selected === 3}
                  onClick={() => {
                    changeTab(3);
                  }}
                >
                  거래내역
                </Li>
              </Ul>
            </FlexDiv>
            <Right>
              <Link to={!token ? "/login" : "/"}>
                <Button login onClick={token && handleLogOut}>
                  {!token ? "로그인" : "로그아웃"}
                </Button>
              </Link>
              <Link to={!token ? "/signup" : "/settings/dashboard"}>
                <Button join>{!token ? "회원가입" : "내 설정"}</Button>
              </Link>
            </Right>
          </MainNav>
        </Container>
      </Navbar>
      {props.children}
      <MobileNav />
    </>
  );
}

const Navbar = styled.nav`
  background-color: white;
  width: 100%;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const Container = styled.div`
  order: 1px solid rgba(235, 238, 246, 0.45);
  border-left-color: transparent;
  border-right-color: transparent;
`;

const MainNav = styled.div`
  height: 58px;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${(props) => props.theme.desktop} {
    width: 1640px;
    margin: 0 auto;
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

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`
  border-right: 1px solid rgba(235, 238, 246, 0.45);
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-right: 40px;
  padding-top: 14px;
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
  border: solid #05317f;
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
  color: #05317f;
  margin-right: 10px;

  ${(props) => {
    if (props.middle) {
      return css`
        padding-top: 20px;
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

  ${(props) =>
    props.isActive &&
    css`
      font-weight: 700;
    `}
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
  color: #05317f;
  border: 1px solid #ebeef6;
  ${(props) => {
    if (props.login) {
      return css`
        margin-right: 10px;
        background-color: transparent;
      `;
    }
    if (props.join) {
      return css`
        background-color: ${(props) => props.theme.subColor};
        color: white;
      `;
    }
  }}
`;

export default withRouter(Nav);
