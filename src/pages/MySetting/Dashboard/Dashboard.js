import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import levelCheck from "../../../images/levelCheck.PNG";

function Dashboard(props) {
  return (
    <ContentWrap>
      <ContentContainer>
        <Container up>
          <Title>회원정보</Title>
          <ContainerDiv>
            <Left>UID</Left>
            <Right>
              PVNF5432 <span>복사</span>
            </Right>
          </ContainerDiv>
          <ContainerDiv>
            <Left>이름</Left>
            <Right>김민정</Right>
          </ContainerDiv>
          <ContainerDiv>
            <Left>이메일</Left>
            <Right>abcd@gmail.com</Right>
          </ContainerDiv>
          <ContainerDiv phoneNum>
            <Left>휴대전화</Left>
            <Right>
              01058****33 <span>변경</span>
            </Right>
          </ContainerDiv>
        </Container>

        <Container up>
          <LevelTitle>
            <LevelTitleLeft>현재 입출금 레벨</LevelTitleLeft>
            <LevelTitleRight>
              레벨 1<span>입출금 한도 보기</span>
            </LevelTitleRight>
          </LevelTitle>
          <LevelContent>
            <FirstLine>
              <CheckLogo>
                <img src={levelCheck} alt="" />
              </CheckLogo>
              <ShowLevel>
                <div>Level 2</div>휴대전화 인증
              </ShowLevel>
            </FirstLine>
            <Detail>
              현재 회원님은 코인 및 원화 입출금이 가능합니다. 출금한도 개별
              승인을 원하는 경우 신원 인증을 진행해주시기 바랍니다.
            </Detail>
            <Link to="/settings/vetification">
              <GoAuth>인증하기</GoAuth>
            </Link>
          </LevelContent>
        </Container>

        <Container down>
          <DownTitle>2FA 활성화</DownTitle>
          <DownDescript twoFA>
            보안 강화를 위하여 Google OTP를 인증하세요.
          </DownDescript>
          <VerifyButton>
            <CurrentState>비활성</CurrentState>
            <ChangeState>활성화</ChangeState>
          </VerifyButton>
        </Container>

        <Container down>
          <DownTitle>API</DownTitle>
          <DownDescript twoFA>
            현재 회원님이 사용하고 있는 API Key 개수는 0개입니다.
          </DownDescript>
          <API>API관리</API>
        </Container>

        <Container recent>
          <RecentLogin>
            <RecentTitle>최근 접속기록</RecentTitle>
            <RecentMore>접속기록 더보기</RecentMore>
          </RecentLogin>
          <LoginType>
            <thead>
              <tr>
                <TH time>시간</TH>
                <TH ip>IP 주소</TH>
                <TH os>OS</TH>
                <TH browser>브라우저</TH>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TD time>2020-05-17 10:39:34</TD>
                <TD ip>211.176.129.90</TD>
                <TD os>Windows</TD>
                <TD browser>Chrome (81.0.4044.138)</TD>
              </tr>
            </tbody>
          </LoginType>
        </Container>
      </ContentContainer>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  margin: 24px auto 120px auto;
  max-width: 1000px;
  height: 967px;
`;

const ContentContainer = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  box-shadow: rgba(2, 37, 83, 0.08) 0px 2px 8px 0px;
  padding: 32px;
  margin-bottom: 15px;

  ${(props) =>
    props.up &&
    css`
      max-width: 493px;
      height: 370px;
    `}

  ${(props) =>
    props.down &&
    css`
      max-width: 493px;
      min-height: 182px;
    `}
  ${(props) =>
    props.recent &&
    css`
      padding: 0;
      height: 323px;
    `}
  
`;

const Title = styled.h1`
  color: #022553;
  font-size: 24px;
  margin-bottom: 24px;
`;

const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0 17px;
  border-bottom: 1px solid rgb(241, 243, 255);

  ${(props) =>
    props.phoneNum &&
    css`
      border-bottom: none;
    `}
`;

const Left = styled.div`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #596070;
  width: 100px;
`;

const Right = styled.div`
  position: relative;
  width: 75%;
  font-size: 16px;
  color: rgb(2, 37, 83);

  span {
    position: absolute;
    top: 2px;
    right: 6px;
    font-size: 12px;
    color: ${(props) => props.theme.subColor};
    text-decoration: underline;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
`;

const LevelTitle = styled.div`
  padding-bottom: 30px;
  margin-bottom: 30px;
  display: flex;
  border-bottom: 1px solid rgb(241, 243, 255);
`;

const LevelTitleLeft = styled(Left)``;

const LevelTitleRight = styled(Right)`
  font-weight: 700;
  padding-left: 20px;
  span {
    font-weight: 400;
    cursor: pointer;
  }
`;

const LevelContent = styled.div``;

const FirstLine = styled.div`
  display: flex;
`;

const CheckLogo = styled.div`
  padding-right: 10px;
`;

const ShowLevel = styled.div`
  line-height: 24px;
  padding-top: 2px;
  font-weight: bold;
  font-size: 18px;
  color: rgb(2, 37, 83);
  div {
    font-size: 12px;
    color: rgb(145, 157, 174);
  }
`;

const Detail = styled.div`
  min-height: 100px;
  padding: 36px 0px 24px;
  color: rgb(145, 157, 174);
  font-size: 14px;
  line-height: 1.6;
`;

const GoAuth = styled.div`
  color: white;
  background-color: ${(props) => props.theme.subColor};
  height: 50px;
  text-align: center;
  padding: 0 10px;
  font-size: 14px;
  line-height: 50px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease 0s;
    background-color: #00338d;
  }
`;

const DownTitle = styled.div`
  font-size: 18px;
  color: rgb(2, 37, 83);
  font-weight: 700;
  margin-bottom: 15px;
`;

const DownDescript = styled.div`
  margin-top: 10px;
  color: rgb(145, 157, 174);
  padding-bottom: 32px;
  font-size: 14px;
  margin-bottom: 10px;

  ${(props) =>
    props.twoFA &&
    css`
      padding-bottom: 32px;
    `}
`;

const VerifyButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CurrentState = styled.div`
  min-width: 77px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: rgb(185, 70, 73);
  border-radius: 8px;
  background: rgb(255, 209, 210);
  margin-right: 250px;
`;

const ChangeState = styled.div`
  font-size: 14px;
  line-height: 20px;
  height: 30px;
  letter-spacing: 1px;
  text-align: center;
  color: rgb(141, 159, 175);
  padding: 4px 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(217, 220, 232);
  border-image: initial;
  border-radius: 2px;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.subColor};
    border-color: ${(props) => props.theme.subColor};
  }
`;

const API = styled.div`
  font-size: 14px;
  line-height: 20px;
  height: 30px;
  width: 80px;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.subColor};
  padding: 4px 12px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.subColor};
  border-image: initial;
  border-radius: 2px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  margin-left: 350px;

  &:hover {
    background-color: ${(props) => props.theme.subColor};
    color: white;
  }
`;

const RecentLogin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 32px;
`;

const RecentTitle = styled(DownTitle)``;

const RecentMore = styled(API)`
  width: 128px;
  margin-left: 0;
`;

const LoginType = styled.table`
  width: 100%;
  thead {
    border-bottom: 1px solid rgb(217, 220, 232);
    color: #919dae;
  }
`;

const TH = styled.th`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding: 0 32px;
  padding-bottom: 10px;
`;

const TD = styled.td`
  color: #596070;
  font-size: 14px;
  padding: 10px 32px;
  text-align: left;

  ${(props) => props.time && css``}
`;

export default Dashboard;
