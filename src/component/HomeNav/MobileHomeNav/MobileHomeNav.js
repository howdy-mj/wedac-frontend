import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import logoImg from "../../../images/logo_white.png";

function MobileHomeNav() {
  return (
    <MobileHomeNavbar>
      <Container>
        <Left>
          <Link to="/">
            <Img src={logoImg} alt="logo" />
          </Link>
        </Left>
        <Right>
          <Div>그로우</Div>
          <Div>
            지닥몰 <ArrowDown />
          </Div>
          <Div sidebar>
            <Span one></Span>
            <Span two></Span>
            <Span three></Span>
          </Div>
        </Right>
      </Container>
    </MobileHomeNavbar>
  );
}

const MobileHomeNavbar = styled.nav`
  display: none;

  @media ${(props) => props.theme.mobile} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 45px;
    width: 100%;
    background-color: ${(props) => props.theme.gdacColor};
    border-bottom: 1px solid rgba(245, 248, 255, 0.2);
    padding-left: 16px;
    z-index: 9999;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  line-height: 52px;
`;

const Img = styled.img`
  height: 19px;
  width: 62px;
`;

const Right = styled.div`
  display: flex;
  color: white;
  font-size: 14px;
  letter-spacing: -0.03em;
  line-height: 45px;
`;

const Div = styled.div`
  margin-right: 10px;
  cursor: pointer;

  ${(props) =>
    props.sidebar &&
    css`
      height: 42px;
      width: 32px;
    `}
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

const Span = styled.span`
  position: absolute;
  background-color: white;
  height: 1px;

  ${(props) =>
    props.one &&
    css`
      top: 16px;
      right: 16px;
      width: 14px;
    `}
  ${(props) =>
    props.two &&
    css`
      top: 21px;
      right: 21px;
      width: 9px;
    `}
  ${(props) =>
    props.three &&
    css`
      top: 26px;
      right: 16px;
      width: 14px;
    `}
    
`;

export default MobileHomeNav;
