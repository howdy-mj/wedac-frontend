import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Nav from "../../component/Nav/Nav";
// import "./PageNotFound.scss";

class PageNotFound extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <>
        <Nav />
        <PageNotFoundWrap>
          <Container>
            <Text>
              <Bold>죄송합니다. 페이지를 사용할 수 없습니다.</Bold>
              <p>링크가 잘못되었거나 페이지가 삭제되었습니다.</p>
              <Link onClick={this.goBack}>
                <GoPrevPage>뒤로 가기</GoPrevPage>
              </Link>
            </Text>
            {/* <div>
            \          SORRY            /
         \                         /
          \    This page does     /
           ]   not exist yet.    [    ,'|
           ]                     [   /  |
           ]___               ___[ ,'   |
           ]  ]\             /[  [ |:   |
           ]  ] \           / [  [ |:   |
           ]  ]  ]         [  [  [ |:   |
           ]  ]  ]__     __[  [  [ |:   |
           ]  ]  ] ]\ _ /[ [  [  [ |:   |
           ]  ]  ] ] (#) [ [  [  [ :===='
           ]  ]  ]_].nHn.[_[  [  [
           ]  ]  ]  HHHHH. [  [  [
           ]  ] /   `HH("N  \ [  [
           ]__]/     HHH  "  \[__[
           ]         NNN         [
           ]         N/"         [
           ]         N H         [
          /          N            \
         /           q,            \
        /                           \
            </div> */}
          </Container>
        </PageNotFoundWrap>
      </>
    );
  }
}

const PageNotFoundWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: calc(100vh - 94px);
  padding: 30px;
`;

const Container = styled.div`
  text-align: center;
`;

const Text = styled.div`
  font-size: 14px;
  color: #596070;
  letter-spacing: -0.03em;
`;

const Bold = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const GoPrevPage = styled.div`
  text-align: center;
  margin: 40px auto 0;
  height: 42px;
  width: 420px;
  color: white;
  background-color: ${(props) => props.theme.subColor};
  line-height: 40px;
`;

export default PageNotFound;
