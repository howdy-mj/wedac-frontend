import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import logoImg from "../../../images/logo_black.png";

function MobileNav() {
  return (
    <MobileNavbar>
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
    </MobileNavbar>
  );
}

const MobileNavbar = styled.nav`
  display: none;

  @media ${(props) => props.theme.mobile} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 45px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid rgba(235, 238, 246, 0.45);
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
  color: #05317f;
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
  border: solid #05317f;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
`;

const Span = styled.span`
  position: absolute;
  background-color: #05317f;
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

export default MobileNav;
